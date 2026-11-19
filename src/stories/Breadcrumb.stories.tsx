import type { Meta, StoryObj } from "@storybook/react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { FigmaEmbed } from "./FigmaEmbed"
import { FIGMA_NODES } from "./figma"

const meta = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "shadcn Breadcrumb matching the mobile sketch: muted ancestor link, ChevronRight separator, current page in foreground.",
      },
    },
  },
} satisfies Meta<typeof Breadcrumb>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Forside</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Bytte eller skaffe jobb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
}

export const FigmaReference: Story = {
  name: "Figma reference",
  render: () => (
    <div style={{ width: "min(720px, 90vw)" }}>
      <FigmaEmbed
        nodeId={FIGMA_NODES.breadcrumb}
        title="Breadcrumb — Forside / Bytte eller skaffe jobb"
        height={220}
      />
      <div style={{ display: "flex", justifyContent: "center", padding: 24 }}>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Forside</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Bytte eller skaffe jobb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  ),
  parameters: {
    layout: "padded",
    chromatic: { disableSnapshot: true },
  },
}
