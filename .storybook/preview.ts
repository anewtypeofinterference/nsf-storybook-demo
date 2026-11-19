import type { Preview } from "@storybook/react"
import "../src/index.css"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // Storybook a11y addon — axe-core checks in the Accessibility panel
      test: "todo",
    },
    chromatic: {
      // Visual Tests addon (@chromatic-com/storybook) — set projectId in chromatic.config.json after linking a Chromatic project
      disableSnapshot: false,
    },
    options: {
      storySort: {
        order: ["Introduction", "Components", "Blocks"],
      },
    },
  },
}

export default preview
