import { defineConfig } from "vite"
import { devtools } from "@tanstack/devtools-vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteReact from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import { microfrontends } from "@vercel/microfrontends/experimental/vite"

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [microfrontends(), devtools(), tailwindcss(), tanstackStart(), viteReact()],
})

export default config
