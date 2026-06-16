import type { Config } from "prettier"
import prettierPluginSvelte from "prettier-plugin-svelte"
import * as prettierPluginTailwindcss from "prettier-plugin-tailwindcss"

const config: Config = {
  endOfLine: "lf",
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  printWidth: 80,
  // imported directly so they resolve from config-lint, not from the app's CWD
  plugins: [prettierPluginSvelte, prettierPluginTailwindcss],
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
