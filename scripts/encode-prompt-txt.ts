import fs from "node:fs"
import path from "node:path"

const promptPath = path.join(import.meta.dir, "../prompt.txt")
const promptText = fs.readFileSync(promptPath, "utf-8")

// Clean up the prompt text by removing SYSTEM/USER prefixes and normalizing
const cleanedPrompt = promptText
  .split("\n")
  .filter((line) => !(line.startsWith("SYSTEM") || line.startsWith("USER")))
  .join("\n")

// // Create JSON format for API compatibility
// const promptJson = {
//   system: cleanedPrompt,
// }

// // Encode the cleaned prompt
// const encodedPrompt = encodeURIComponent(cleanedPrompt)

// // Update index.ts with the encoded prompt
// const promptTsPath = path.join(import.meta.dir, "../lib/generated/prompt.ts")
// const promptTsContent = `
// export const FEATURE_SNIPPETS_PROMPT = ${JSON.stringify(promptJson, null, 2)}
// `

// fs.writeFileSync(promptTsPath, promptTsContent)

// console.log("Encoded prompt and updated lib/generated/prompt.ts")
