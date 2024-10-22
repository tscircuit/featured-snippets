import { z } from "zod"
import fs from "node:fs"
import path from "node:path"

const snippet = z.object({
  snippet_id: z.string(),
  unscoped_name: z.string(),
  name: z.string(),
  owner_name: z.string(),
  code: z.string(),
  snippet_type: z.string().optional().nullable(),
  description: z.string().optional(),
  dts: z.string().optional(),
  compiled_js: z.string().optional(),
})

const liteSnippet = snippet.omit({
  code: true,
  dts: true,
  compiled_js: true,
})

type Snippet = z.infer<typeof snippet>
type LiteSnippet = z.infer<typeof liteSnippet>

const listFeaturedResponse = z.object({
  lite_snippets: z.array(liteSnippet),
})

async function fetchFeaturedSnippets(): Promise<LiteSnippet[]> {
  const response = await fetch(
    "https://registry-api.tscircuit.com/internal/snippets/list_featured",
    {
      headers: {
        Authorization: `Bearer ${process.env.INTERNAL_PUBLIC_AUTOMATIONS_SECRET_KEY}`,
      },
    },
  )

  if (!response.ok) {
    throw new Error(`Failed to fetch featured snippets: ${response.statusText}`)
  }

  const data = await response.json()
  return data.lite_snippets as LiteSnippet[]
}

async function fetchSnippet(snippetId: string): Promise<Snippet> {
  const response = await fetch(
    `https://registry-api.tscircuit.com/snippets/get?snippet_id=${snippetId}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.INTERNAL_PUBLIC_AUTOMATIONS_SECRET_KEY}`,
      },
    },
  )

  if (!response.ok) {
    throw new Error(
      `Failed to fetch snippet ${snippetId}: ${response.statusText}`,
    )
  }

  const data = await response.json()
  return data.snippet as Snippet
}

async function writeSnippetToFile(snippet: Snippet): Promise<void> {
  const dirPath = path.join("snippets", snippet.owner_name)
  const filePath = path.join(dirPath, `${snippet.unscoped_name}.tsx`)

  await fs.promises.mkdir(dirPath, { recursive: true })
  await fs.promises.writeFile(filePath, snippet.code)

  console.log(`Wrote snippet to ${filePath}`)
}

async function main() {
  try {
    const featuredSnippets = await fetchFeaturedSnippets()

    for (const liteSnippet of featuredSnippets) {
      const fullSnippet = await fetchSnippet(liteSnippet.snippet_id)
      await writeSnippetToFile(fullSnippet)
    }

    console.log("All featured snippets have been pulled and saved.")
  } catch (error) {
    console.error("An error occurred:", error)
  }
}

main()
