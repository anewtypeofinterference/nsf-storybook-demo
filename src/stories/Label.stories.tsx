import type { Meta, StoryObj } from "@storybook/react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { createFigmaDocsPage } from "./FigmaDocsPage"
import { FIGMA_NODES } from "./figma"

const meta = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Renders an accessible label associated with controls.

**Install:** \`npx shadcn@latest add label\`

**Usage:**
\`\`\`tsx
import { Label } from "@/components/ui/label"

<Label htmlFor="email">Your email address</Label>
\`\`\`

Shipped as a dependency of **Field** / form sketches (FieldLabel builds on Label).
        `.trim(),
      },
      page: createFigmaDocsPage({
        nodeId: FIGMA_NODES.field,
        title: "Label via Field — Fornavn",
        height: 220,
      }),
    },
  },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="grid w-[280px] gap-2">
      <Label htmlFor="email">E-post</Label>
      <Input id="email" type="email" placeholder="steinar@ahus.no" />
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="grid w-[280px] gap-2" data-disabled="true">
      <Label htmlFor="name" className="group-data-[disabled=true]:opacity-50">
        Name
      </Label>
      <Input id="name" disabled placeholder="Disabled" />
    </div>
  ),
}
