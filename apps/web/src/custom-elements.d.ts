import type { DetailedHTMLProps, HTMLAttributes } from "react"

declare module "react/jsx-runtime" {
  namespace JSX {
    interface IntrinsicElements {
      "app-header": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
    }
  }
}
