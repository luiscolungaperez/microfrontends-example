import { HeadContent, Outlet, Scripts, createRootRoute } from "@tanstack/react-router"
import "@workspace/ui/elements/app-header"

import appCss from "@workspace/ui/globals.css?url"

function AppShell() {
  return (
    <>
      <app-header>
        <header>
          <span className="brand">Example Apps</span>
          <a href="/" data-path="/">Web</a>
          <a href="/second" data-path="/second">Second</a>
        </header>
      </app-header>
      <Outlet />
    </>
  )
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "TanStack Start Starter",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  notFoundComponent: () => (
    <main className="container mx-auto p-4 pt-16">
      <h1>404</h1>
      <p>The requested page could not be found.</p>
    </main>
  ),
  shellComponent: RootDocument,
  component: AppShell,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
