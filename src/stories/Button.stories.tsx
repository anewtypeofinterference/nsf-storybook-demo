import type { Meta, StoryObj } from "@storybook/react"
import { ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { FigmaEmbed } from "./FigmaEmbed"
import { FIGMA_NODES } from "./figma"

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "shadcn Button customized from NFS-Designsystem Figma (primary `#292524`, XL CTA, ghost icon-sm).",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "outline", "ghost", "link", "destructive"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "xl", "icon", "icon-sm"],
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "View Event",
    size: "default",
  },
}

/** Homepage CTA — Figma XL / Default / Default ("Bli medlem"). */
export const XlPrimary: Story = {
  name: "XL / Primary (Bli medlem)",
  args: {
    children: "Bli medlem",
    size: "xl",
    variant: "default",
  },
  parameters: {
    docs: {
      description: {
        story: "Matches Front page CTA node `27013:105525`.",
      },
    },
  },
}

/** Mobile ghost icon button — Figma Ghost / icon-sm. */
export const GhostIconSm: Story = {
  name: "Ghost / icon-sm",
  args: {
    size: "icon-sm",
    variant: "ghost",
    "aria-label": "Expand",
    children: <ChevronDown />,
  },
  parameters: {
    docs: {
      description: {
        story: "Matches mobile icon button node `27023:117215`.",
      },
    },
  },
}

export const FigmaReference: Story = {
  name: "Figma reference",
  render: () => (
    <div style={{ width: "min(720px, 90vw)" }}>
      <FigmaEmbed
        nodeId={FIGMA_NODES.buttonXl}
        title="Button XL — Bli medlem"
        height={280}
      />
      <div style={{ display: "flex", justifyContent: "center", padding: 24 }}>
        <Button size="xl">Bli medlem</Button>
      </div>
    </div>
  ),
  parameters: {
    layout: "padded",
    chromatic: { disableSnapshot: true },
  },
}
