import type { Meta, StoryObj } from "@storybook/react"
import { ChevronDown, Pencil } from "lucide-react"

import { Button } from "@/components/ui/button"
import { createFigmaDocsPage } from "./FigmaDocsPage"
import { FIGMA_NODES } from "./figma"

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Displays a button or a component that looks like a button.

**Install:** \`npx shadcn@latest add button\`

**Usage:**
\`\`\`tsx
import { Button } from "@/components/ui/button"

<Button variant="outline">Button</Button>
\`\`\`

Customized from NFS-Designsystem Figma: primary \`#292524\`, XL CTA, ghost icon-sm, link “Rediger” actions in dialogs.
        `.trim(),
      },
      page: createFigmaDocsPage({
        nodeId: FIGMA_NODES.buttonXl,
        title: "Button XL — Bli medlem",
        height: 280,
      }),
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
    disabled: { control: "boolean" },
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

export const Secondary: Story = {
  args: { children: "Secondary", variant: "secondary" },
}

export const Outline: Story = {
  args: { children: "Forkast endringer", variant: "outline" },
}

export const Ghost: Story = {
  args: { children: "Ghost", variant: "ghost" },
}

export const Link: Story = {
  args: {
    children: (
      <>
        Rediger <Pencil />
      </>
    ),
    variant: "link",
  },
}

export const Destructive: Story = {
  args: { children: "Delete", variant: "destructive" },
}

export const Small: Story = {
  args: { children: "Small", size: "sm" },
}

export const Large: Story = {
  args: { children: "Large", size: "lg" },
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

export const Icon: Story = {
  args: {
    size: "icon",
    "aria-label": "More",
    children: <ChevronDown />,
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

export const Disabled: Story = {
  args: { children: "Disabled", disabled: true },
}
