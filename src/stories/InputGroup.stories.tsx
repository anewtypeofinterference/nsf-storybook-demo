import type { Meta, StoryObj } from "@storybook/react"
import { SearchIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { createFigmaDocsPage } from "./FigmaDocsPage"
import { FIGMA_NODES } from "./figma"

const meta = {
  title: "Components/Input Group",
  component: InputGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Display additional information or actions alongside an input or textarea.

**Install:** \`npx shadcn@latest add input-group\`

**Usage:** compose \`InputGroup\` with \`InputGroupInput\` / \`InputGroupTextarea\` and \`InputGroupAddon\`.

Figma: nested as the control inside **Field** (Type=Input), and as hidden Page Header search instances. Full API includes addon alignments and textarea.
        `.trim(),
      },
      page: createFigmaDocsPage({
        nodeId: FIGMA_NODES.field,
        title: "InputGroup as Field control",
        height: 220,
      }),
    },
  },
} satisfies Meta<typeof InputGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <InputGroup className="w-[313px]">
      <InputGroupInput placeholder="Ditt fornavn" />
    </InputGroup>
  ),
}

export const WithAddon: Story = {
  render: () => (
    <InputGroup className="w-[313px]">
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search…" />
    </InputGroup>
  ),
}

export const WithButton: Story = {
  render: () => (
    <InputGroup className="w-[360px]">
      <InputGroupInput placeholder="https://www.nsf.no" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton>Copy</InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const WithText: Story = {
  render: () => (
    <InputGroup className="w-[313px]">
      <InputGroupAddon>
        <InputGroupText>NOK</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="0.00" />
    </InputGroup>
  ),
}

export const Textarea: Story = {
  render: () => (
    <InputGroup className="w-[313px]">
      <InputGroupTextarea placeholder="Bio" rows={4} />
    </InputGroup>
  ),
}

export const BlockAddon: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <InputGroup className="w-[313px]">
        <InputGroupInput placeholder="Email" />
        <InputGroupAddon align="block-end">
          <Button size="sm" className="w-full">
            Subscribe
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
}
