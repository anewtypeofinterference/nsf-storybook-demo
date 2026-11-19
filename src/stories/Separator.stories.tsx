import type { Meta, StoryObj } from "@storybook/react"

import { Separator } from "@/components/ui/separator"
import { createFigmaDocsPage } from "./FigmaDocsPage"
import { FIGMA_NODES } from "./figma"

const meta = {
  title: "Components/Separator",
  component: Separator,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "shadcn Separator as used in mobile sketches — horizontal 1px border divider.",
      },
      page: createFigmaDocsPage({
        nodeId: FIGMA_NODES.separator,
        title: "Separator — horizontal",
        height: 180,
      }),
    },
  },
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  render: () => (
    <div className="w-[339px]">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Section</h4>
        <p className="text-sm text-muted-foreground">Content above the rule.</p>
      </div>
      <Separator className="my-4" />
      <div className="text-sm text-muted-foreground">Content below the rule.</div>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="flex h-5 items-center space-x-4 text-sm">
      <div>Blog</div>
      <Separator orientation="vertical" />
      <div>Docs</div>
      <Separator orientation="vertical" />
      <div>Source</div>
    </div>
  ),
}
