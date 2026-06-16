export {}

if (typeof window !== "undefined") {
  class AppHeader extends HTMLElement {
    #handleNavigation: () => void

    constructor() {
      super()
      this.#handleNavigation = () => this.#updateActiveLink()
    }

    connectedCallback() {
      this.#updateActiveLink()
      window.addEventListener("popstate", this.#handleNavigation)
    }

    disconnectedCallback() {
      window.removeEventListener("popstate", this.#handleNavigation)
    }

    #updateActiveLink() {
      const path = window.location.pathname
      this.querySelectorAll<HTMLAnchorElement>("a[data-path]").forEach((a) => {
        const linkPath = a.dataset.path ?? ""
        const isActive =
          linkPath === "/"
            ? path === "/"
            : path === linkPath || path.startsWith(linkPath + "/")
        a.classList.toggle("active", isActive)
      })
    }
  }

  if (!customElements.get("app-header")) {
    customElements.define("app-header", AppHeader)
  }
}
