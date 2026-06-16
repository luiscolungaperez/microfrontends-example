import type { Config } from "prettier"

const config: Config = {
  endOfLine: "lf",
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  printWidth: 80,
  plugins: [
    "prettier-plugin-svelte",
    // tailwindcss must be listed last
    "prettier-plugin-tailwindcss",
  ],
  overrides: [
    {
      files: ["*.svelte"],
      options: {
        parser: "svelte",
      },
    },
  ],
}

export default config
