import type { Meta, StoryObj } from "@storybook/react"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import cardHero from "@/assets/card-hero.png"
import { createFigmaDocsPage } from "./FigmaDocsPage"
import { FIGMA_NODES } from "./figma"

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Displays a card with header, content, and footer.

**Install:** \`npx shadcn@latest add card\`

**Usage:**
\`\`\`tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
\`\`\`

Figma customizations: rounded-xl, shadow-xs, compact header, muted footer with full-width primary button. Uses AspectRatio for the media band.
        `.trim(),
      },
      page: createFigmaDocsPage({
        nodeId: FIGMA_NODES.card,
        title: "Card — Design systems meetup",
        height: 480,
      }),
    },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

function EventCard() {
  return (
    <Card className="w-[283px]">
      <AspectRatio ratio={16 / 10}>
        <img src={cardHero} alt="" className="size-full object-cover" />
      </AspectRatio>
      <CardHeader>
        <CardTitle>Design systems meetup</CardTitle>
        <CardDescription>
          A practical talk on component APIs, accessibility, and shipping faster.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full" size="default">
          View Event
        </Button>
      </CardFooter>
    </Card>
  )
}

export const Event: Story = {
  name: "Event (sketch)",
  render: () => <EventCard />,
}

export const Simple: Story = {
  render: () => (
    <Card className="w-[360px]">
      <CardHeader>
        <CardTitle>Personlige detaljer</CardTitle>
        <CardDescription>
          Manage your profile details such as name, avatar, email and bio.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Card content slot for form fields or copy.
        </p>
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </CardFooter>
    </Card>
  ),
}
