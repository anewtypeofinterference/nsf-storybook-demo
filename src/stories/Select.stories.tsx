import type { Meta, StoryObj } from "@storybook/react"

import { Field, FieldLabel } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { createFigmaDocsPage } from "./FigmaDocsPage"
import { FIGMA_NODES } from "./figma"

const hospitals = [
  {
    value: "ahus",
    title: "Akershus Universitetssykehus",
    line1: "Sykehusveien 25, 1479",
    line2: "Lørenskog",
  },
  {
    value: "stolav",
    title: "St. Olavs Hospital",
    line1: "Tronheimsveien 29, 0382",
    line2: "Trondheim",
  },
  {
    value: "bergen",
    title: "Bergen Hospital, 5021 Bergen",
    line1: "Bergensgata 293, 5021",
    line2: "Bergen",
  },
  {
    value: "arnes",
    title: "Sykehusveien 29",
    line1: "0248",
    line2: "Årnes",
  },
] as const

const meta = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Displays a list of options for the user to pick from—triggered by a button.

**Install:** \`npx shadcn@latest add select\`

**Usage:**
\`\`\`tsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
\`\`\`

**Composition:** Select → SelectTrigger (SelectValue) + SelectContent → SelectGroup / SelectItem / SelectLabel / SelectSeparator.

Figma: h-8 rounded-lg trigger; open menus use multi-line hospital rows (also drawn with DropdownMenu / Menu in sketches).
        `.trim(),
      },
      page: createFigmaDocsPage({
        nodeId: FIGMA_NODES.select,
        title: "Select — Arbeidssted",
        height: 220,
      }),
    },
  },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Select defaultValue="ahus-rontgen">
      <SelectTrigger className="w-[313px]">
        <SelectValue placeholder="Velg arbeidssted" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="ahus-rontgen">
          Akershus Universitetssykehus Røntgen
        </SelectItem>
        <SelectItem value="ahus">Akershus Universitetssykehus</SelectItem>
        <SelectItem value="oslo">Oslo Universitetssykehus</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const WithField: Story = {
  render: () => (
    <Field className="w-[313px]">
      <FieldLabel>Arbeidssted</FieldLabel>
      <Select defaultValue="ahus-rontgen">
        <SelectTrigger>
          <SelectValue placeholder="Velg" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="ahus-rontgen">
            Akershus Universitetssykehus Røntgen
          </SelectItem>
          <SelectItem value="stolav">St. Olavs Hospital</SelectItem>
        </SelectContent>
      </Select>
    </Field>
  ),
}

/** Multi-line options matching open Select / DropdownMenu sketch. */
export const MultiLineItems: Story = {
  name: "Multi-line items (sketch)",
  render: () => (
    <Select defaultValue="ahus">
      <SelectTrigger className="w-[313px]">
        <SelectValue placeholder="Velg arbeidssted" />
      </SelectTrigger>
      <SelectContent className="w-[313px]">
        {hospitals.map((h) => (
          <SelectItem key={h.value} value={h.value} className="items-start py-1">
            <div className="flex flex-col gap-0 leading-5">
              <span className="font-medium">{h.title}</span>
              <span className="text-muted-foreground font-normal">{h.line1}</span>
              <span className="text-muted-foreground font-normal">{h.line2}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Matches open menu content from `27048:138394` (DropdownMenu / Menu used as Select list in Figma).",
      },
    },
  },
}

export const Groups: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Vegetables</SelectLabel>
          <SelectItem value="carrot">Carrot</SelectItem>
          <SelectItem value="broccoli">Broccoli</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}

export const Small: Story = {
  render: () => (
    <Select>
      <SelectTrigger size="sm" className="w-[200px]">
        <SelectValue placeholder="Small" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="a">Option A</SelectItem>
        <SelectItem value="b">Option B</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Select disabled>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Disabled" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="a">Option A</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const Invalid: Story = {
  render: () => (
    <Field className="w-[280px]" data-invalid>
      <FieldLabel>Fruit</FieldLabel>
      <Select>
        <SelectTrigger aria-invalid>
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
        </SelectContent>
      </Select>
    </Field>
  ),
}
