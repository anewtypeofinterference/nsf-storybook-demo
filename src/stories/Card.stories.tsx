import type { Meta, StoryObj } from "@storybook/react"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import cardHero from "@/assets/card-hero.png"
import { FigmaEmbed } from "./FigmaEmbed"
import { FIGMA_NODES } from "./figma"

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "shadcn Card with Figma customizations: rounded-xl, shadow-xs, compact header, muted footer with full-width primary button. Uses AspectRatio for the media band.",
      },
    },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

function EventCard() {
  return (
    <Card className="w-[283px]">
      <AspectRatio ratio={16 / 10}>
        <img
          src={cardHero}
          alt=""
          className="size-full object-cover"
        />
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

export const FigmaReference: Story = {
  name: "Figma reference",
  render: () => (
    <div style={{ width: "min(720px, 90vw)" }}>
      <FigmaEmbed
        nodeId={FIGMA_NODES.card}
        title="Card — Design systems meetup"
        height={480}
      />
      <div style={{ display: "flex", justifyContent: "center", padding: 24 }}>
        <EventCard />
      </div>
    </div>
  ),
  parameters: {
    layout: "padded",
    chromatic: { disableSnapshot: true },
  },
}
