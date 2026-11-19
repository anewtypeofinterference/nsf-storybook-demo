import type { Meta, StoryObj } from "@storybook/react"
import { ArrowRight } from "lucide-react"

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import itemThumb from "@/assets/item-thumb.png"
import { FigmaEmbed } from "./FigmaEmbed"
import { FIGMA_NODES } from "./figma"

const meta = {
  title: "Components/Item",
  component: Item,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "shadcn Item as used in the sketches: muted background, border, rounded-lg, image media, title + description, trailing arrow action.",
      },
    },
  },
} satisfies Meta<typeof Item>

export default meta
type Story = StoryObj<typeof meta>

function NavItem({
  title = "Bytte eller skaffe jobb",
  description = "Item description goes here",
}: {
  title?: string
  description?: string
}) {
  return (
    <Item variant="muted" className="w-[459px] max-w-full">
      <div className="flex w-full items-start gap-2">
        <ItemMedia variant="image">
          <img src={itemThumb} alt="" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>{title}</ItemTitle>
          <ItemDescription>{description}</ItemDescription>
        </ItemContent>
        <ItemActions>
          <ArrowRight className="size-4 text-foreground" aria-hidden />
        </ItemActions>
      </div>
    </Item>
  )
}

export const Default: Story = {
  name: "Muted with media",
  render: () => <NavItem />,
}

export const Group: Story = {
  name: "Item group",
  render: () => (
    <ItemGroup className="w-[459px] max-w-full gap-2.5">
      <NavItem title="Bytte eller skaffe jobb" />
      <NavItem title="Lønn og tariff" />
      <NavItem title="Utdanning og kompetanse" />
    </ItemGroup>
  ),
}

export const FigmaReference: Story = {
  name: "Figma reference",
  render: () => (
    <div style={{ width: "min(720px, 90vw)" }}>
      <FigmaEmbed
        nodeId={FIGMA_NODES.item}
        title="Item — Bytte eller skaffe jobb"
        height={280}
      />
      <div style={{ display: "flex", justifyContent: "center", padding: 24 }}>
        <NavItem />
      </div>
    </div>
  ),
  parameters: {
    layout: "padded",
    chromatic: { disableSnapshot: true },
  },
}
