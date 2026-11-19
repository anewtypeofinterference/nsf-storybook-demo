import type { Meta, StoryObj } from "@storybook/react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/sonner"
import { createFigmaDocsPage } from "./FigmaDocsPage"
import { FIGMA_NODES } from "./figma"

const meta = {
  title: "Components/Sonner",
  component: Toaster,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <>
        <Toaster position="bottom-center" richColors={false} />
        <Story />
      </>
    ),
  ],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
An opinionated toast component for React (Sonner).

**Install:** \`npx shadcn@latest add sonner\`

**Usage:** mount \`<Toaster />\` once, then call \`toast()\` / \`toast.success()\`.

\`\`\`tsx
import { toast } from "sonner"
import { Toaster } from "@/components/ui/sonner"

toast.success("Dine endringer ble lagret")
\`\`\`

Figma sketch: success toast with check icon — “Dine endringer ble lagret”.
        `.trim(),
      },
      page: createFigmaDocsPage({
        nodeId: FIGMA_NODES.sonner,
        title: "Sonner — Dine endringer ble lagret",
        height: 200,
      }),
    },
  },
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast("Event has been created", {
          description: "Sunday, December 3, 2023 at 9:00 AM",
        })
      }
    >
      Show toast
    </Button>
  ),
}

/** Success toast from iPhone 16-12 sketch. */
export const SuccessSaved: Story = {
  name: "Success saved (sketch)",
  render: () => (
    <Button
      onClick={() => toast.success("Dine endringer ble lagret")}
    >
      Lagre
    </Button>
  ),
  parameters: {
    docs: {
      description: {
        story: "Matches Sonner node `27048:143219`.",
      },
    },
  },
}

export const Types: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button variant="outline" onClick={() => toast.message("Message")}>
        Message
      </Button>
      <Button variant="outline" onClick={() => toast.success("Success")}>
        Success
      </Button>
      <Button variant="outline" onClick={() => toast.info("Info")}>
        Info
      </Button>
      <Button variant="outline" onClick={() => toast.warning("Warning")}>
        Warning
      </Button>
      <Button variant="outline" onClick={() => toast.error("Error")}>
        Error
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          const id = toast.loading("Loading…")
          setTimeout(() => toast.success("Done", { id }), 1500)
        }}
      >
        Loading
      </Button>
    </div>
  ),
}

export const WithAction: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast("Event created", {
          action: {
            label: "Undo",
            onClick: () => toast.dismiss(),
          },
        })
      }
    >
      Toast with action
    </Button>
  ),
}

export const PromiseToast: Story = {
  name: "Promise",
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast.promise(
          () => new Promise((resolve) => setTimeout(resolve, 2000)),
          {
            loading: "Saving…",
            success: "Dine endringer ble lagret",
            error: "Could not save",
          }
        )
      }
    >
      Promise toast
    </Button>
  ),
}
