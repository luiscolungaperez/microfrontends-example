import adapter from "@sveltejs/adapter-auto"
import { withMicrofrontends } from "@vercel/microfrontends/experimental/sveltekit"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"
import type { Config } from "@sveltejs/kit"

const config: Config = {
  preprocess: vitePreprocess(),
  // Force runes mode for all project files. Can be removed in Svelte 6.
  compilerOptions: {
    runes: true,
  },
  kit: {
    adapter: adapter(),
    paths: {
      base: "/second",
    },
  },
}

export default withMicrofrontends(config)
