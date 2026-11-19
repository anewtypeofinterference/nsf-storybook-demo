import type { Meta, StoryObj } from "@storybook/react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { createFigmaDocsPage } from "./FigmaDocsPage"
import { FIGMA_NODES } from "./figma"

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Displays a form input field or a component that looks like an input field.

**Install:** \`npx shadcn@latest add input\`

**Usage:**
\`\`\`tsx
import { Input } from "@/components/ui/input"

<Input type="email" placeholder="Email" />
\`\`\`

Appears inside Figma **Field** instances (control Type=Input). Customized: h-8, rounded-lg, px-2.5.
        `.trim(),
      },
      page: createFigmaDocsPage({
        nodeId: FIGMA_NODES.field,
        title: "Input inside Field — Fornavn",
        height: 220,
      }),
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: "Ditt fornavn",
    className: "w-[313px]",
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-[313px] gap-2">
      <Label htmlFor="email">E-post</Label>
      <Input id="email" type="email" placeholder="steinar@ahus.no" />
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Disabled",
    className: "w-[313px]",
  },
}

export const Invalid: Story = {
  args: {
    "aria-invalid": true,
    defaultValue: "bad",
    className: "w-[313px]",
  },
}

export const File: Story = {
  args: {
    type: "file",
    className: "w-[313px]",
  },
}
