import type { StorybookConfig } from "@storybook/react-vite"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { mergeConfig } from "vite"

const dirname = path.dirname(fileURLToPath(import.meta.url))

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-interactions",
    "@chromatic-com/storybook",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config) {
    // GitHub project Pages serves under /<repo>/ — set STORYBOOK_BASE in CI.
    const base = process.env.STORYBOOK_BASE || "/"
    return mergeConfig(config, {
      base,
      resolve: {
        alias: {
          "@": path.resolve(dirname, "../src"),
        },
      },
    })
  },
}

export default config
