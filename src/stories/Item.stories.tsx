import type { Meta, StoryObj } from "@storybook/react"
import { ArrowRight, Briefcase, MapPin, Pencil, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
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
import { createFigmaDocsPage } from "./FigmaDocsPage"
import { FIGMA_NODES } from "./figma"

const meta = {
  title: "Components/Item",
  component: Item,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
A versatile component that you can use to display any content.

**Install:** \`npx shadcn@latest add item\`

**Usage:** compose with \`ItemMedia\`, \`ItemContent\`, \`ItemTitle\`, \`ItemDescription\`, \`ItemActions\`.

Sketches use muted + border + rounded-lg list rows, image media on homepage, and icon media inside dialogs.
        `.trim(),
      },
      page: createFigmaDocsPage({
        nodeId: FIGMA_NODES.item,
        title: "Item — Bytte eller skaffe jobb",
        height: 280,
      }),
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "muted"],
    },
    size: {
      control: "select",
      options: ["default", "sm"],
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

export const Outline: Story = {
  render: () => (
    <Item variant="outline" className="w-[360px]">
      <ItemContent>
        <ItemTitle>Outline item</ItemTitle>
        <ItemDescription>Bordered surface without muted fill.</ItemDescription>
      </ItemContent>
    </Item>
  ),
}

export const IconMedia: Story = {
  name: "Icon media (dialog row)",
  render: () => (
    <Item
      variant="default"
      size="sm"
      className="w-[353px] max-w-full rounded-none border-0 border-b border-border px-2.5 py-2"
    >
      <div className="flex w-full items-start gap-2">
        <ItemMedia variant="icon">
          <MapPin />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Adresse</ItemTitle>
          <ItemDescription>Olsensvei 19</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="link" size="default" className="h-8 px-2.5">
            Rediger <Pencil />
          </Button>
        </ItemActions>
      </div>
    </Item>
  ),
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

export const DialogConfirmList: Story = {
  name: "Dialog confirm list (sketch)",
  render: () => (
    <ItemGroup className="w-[353px] max-w-full">
      {(
        [
          [MapPin, "Adresse", "Olsensvei 19"],
          [Briefcase, "Arbeidsplass", "Diakonhjemmet Sykehus"],
          [Phone, "Telefon", "+47 28 02 29 38"],
          [MapPin, "E-post", "Kim@gmail.com"],
        ] as const
      ).map(([Icon, title, description]) => (
        <Item
          key={title}
          variant="default"
          size="sm"
          className="rounded-none border-0 border-b border-border px-2.5 py-2"
        >
          <div className="flex w-full items-start gap-2">
            <ItemMedia variant="icon">
              <Icon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>{title}</ItemTitle>
              <ItemDescription>{description}</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button variant="link" size="default" className="h-8 px-2.5">
                Rediger <Pencil />
              </Button>
            </ItemActions>
          </div>
        </Item>
      ))}
    </ItemGroup>
  ),
}
