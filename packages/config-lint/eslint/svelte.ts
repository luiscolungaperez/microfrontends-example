import eslint from "@eslint/js"
import tseslint from "typescript-eslint"
import sveltePlugin from "eslint-plugin-svelte"
import eslintConfigPrettier from "eslint-config-prettier"
import globals from "globals"

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...sveltePlugin.configs["flat/recommended"],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ["**/*.svelte", "**/*.svelte.ts", "**/*.svelte.js"],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-non-null-assertion": "warn",
    },
  },
  // must be last: disables ESLint rules that conflict with Prettier
  eslintConfigPrettier,
  {
    ignores: ["build/", ".svelte-kit/", "dist/", "node_modules/"],
  },
)
