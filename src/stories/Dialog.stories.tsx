import type { Meta, StoryObj } from "@storybook/react"
import { Briefcase, MapPin, Pencil, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { createFigmaDocsPage } from "./FigmaDocsPage"
import { FIGMA_NODES } from "./figma"

const meta = {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.

**Install:** \`npx shadcn@latest add dialog\`

**Usage:**
\`\`\`tsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
\`\`\`

**Composition:** Dialog → DialogTrigger + DialogContent → DialogHeader (Title, Description) + body + DialogFooter.

Figma customizations: rounded-xl shell, section padding, muted footer band, optional close icon.
        `.trim(),
      },
      page: createFigmaDocsPage({
        nodeId: FIGMA_NODES.dialogUnsaved,
        title: "Dialog — Du har ulagrede endringer",
        height: 360,
      }),
    },
  },
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

/** iPhone 16-9 — unsaved changes confirmation. */
export const UnsavedChanges: Story = {
  name: "Unsaved changes (sketch)",
  render: () => (
    <Dialog defaultOpen>
      <DialogTrigger asChild>
        <Button>Open</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[361px]">
        <DialogHeader>
          <DialogTitle>Du har ulagrede endringer</DialogTitle>
          <DialogDescription>
            Vil du lagre eller forkaste endringene dine?
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 px-4 pb-4 text-sm text-foreground">
          <p className="font-bold leading-none">Du har endret</p>
          <div className="flex flex-col gap-2">
            <p className="font-medium leading-none">Arbeidssted</p>
            <div className="flex flex-col gap-1 font-normal">
              <p>— Adresse</p>
              <p>— Avdeling</p>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline">Forkast endringer</Button>
          <Button>Lagre endringer</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
  parameters: {
    docs: {
      description: {
        story: "Matches Dialog node `27048:142068`.",
      },
    },
  },
}

/** iPhone 16-5 — confirm personal info with Item rows. */
export const ConfirmInfo: Story = {
  name: "Confirm info (sketch)",
  render: () => (
    <Dialog defaultOpen>
      <DialogTrigger asChild>
        <Button>Open</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[365px]" showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Stemmer informasjonen din?</DialogTitle>
          <DialogDescription>Sjekk at dette fortsatt stemmer</DialogDescription>
        </DialogHeader>
        <div className="px-1.5 pb-4">
          <ItemGroup>
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
                    <Button variant="link" className="h-8 px-2.5">
                      Rediger <Pencil />
                    </Button>
                  </ItemActions>
                </div>
              </Item>
            ))}
          </ItemGroup>
        </div>
        <DialogFooter>
          <Button>Bekreft</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
  parameters: {
    docs: {
      description: {
        story: "Matches Dialog node `27026:119578`.",
      },
    },
  },
}

export const NoCloseButton: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">No close icon</Button>
      </DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>No close button</DialogTitle>
          <DialogDescription>
            Use \`showCloseButton={false}\` when the sketch hides the X control.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button>Done</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}
