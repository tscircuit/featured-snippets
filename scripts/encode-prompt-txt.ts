import fs from "node:fs"
import path from "node:path"

const promptPath = path.join(process.cwd(), "prompt.txt")
const promptText = fs.readFileSync(promptPath, "utf-8")

// Clean up the prompt text by removing SYSTEM/USER prefixes and normalizing
const cleanedPrompt = promptText
  .split("\n")
  .map((line) => line.replace(/^(SYSTEM|USER)\s+/, ""))
  .join("\n")

// Create JSON format for API compatibility
const promptJson = {
  system: cleanedPrompt,
}

// Encode the cleaned prompt
const encodedPrompt = encodeURIComponent(cleanedPrompt)

// Update index.ts with the encoded prompt
const indexPath = path.join(process.cwd(), "index.ts")
const indexContent = `import "@tscircuit/core"

export const FEATURE_SNIPPETS_PROMPT = decodeURIComponent("${encodedPrompt}")
export const FEATURE_SNIPPETS_PROMPT_JSON = ${JSON.stringify(promptJson, null, 2)}
`

fs.writeFileSync(indexPath, indexContent)

console.log("Encoded prompt and updated index.ts")
