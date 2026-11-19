import type { Meta, StoryObj } from "@storybook/react"
import { MapPin } from "lucide-react"

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { createFigmaDocsPage } from "./FigmaDocsPage"
import { FIGMA_NODES } from "./figma"

const meta = {
  title: "Components/Field",
  component: Field,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Combine labels, controls, and help text to compose accessible form fields and grouped inputs.

**Install:** \`npx shadcn@latest add field\`

**Usage:**
\`\`\`tsx
import { Field, FieldLabel, FieldError } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

<Field data-invalid>
  <FieldLabel htmlFor="adresse">Adresse</FieldLabel>
  <Input id="adresse" aria-invalid defaultValue="Sykeh" />
  <FieldError>Du må velge et alternativ fra listen.</FieldError>
</Field>
\`\`\`

**API:** \`Field\` (\`orientation\`: vertical | horizontal | responsive), \`FieldLabel\`, \`FieldDescription\`, \`FieldError\`, \`FieldGroup\`, \`FieldSet\`, \`FieldLegend\`, \`FieldSeparator\`, \`FieldContent\`, \`FieldTitle\`.

**Validation:** set \`data-invalid\` on \`Field\` and \`aria-invalid\` on the control. \`FieldError\` renders a destructive message with a leading alert icon (Figma Error-message on iPhone 16-13).
        `.trim(),
      },
      page: createFigmaDocsPage({
        nodeId: FIGMA_NODES.fieldError,
        title: "Field — invalid Adresse + error message",
        height: 260,
      }),
    },
  },
  argTypes: {
    orientation: {
      control: "select",
      options: ["vertical", "horizontal", "responsive"],
    },
  },
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj<typeof meta>

/** Profile form field — Figma Fornavn. */
export const Default: Story = {
  name: "Vertical (sketch)",
  render: () => (
    <Field className="w-[313px]">
      <FieldLabel htmlFor="fornavn">Fornavn</FieldLabel>
      <Input id="fornavn" placeholder="Ditt fornavn" />
    </Field>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <Field className="w-[313px]">
      <FieldLabel htmlFor="username">Username</FieldLabel>
      <Input id="username" placeholder="evilrabbit" />
      <FieldDescription>
        Choose a unique username for your account.
      </FieldDescription>
    </Field>
  ),
}

/**
 * iPhone 16-13 — invalid Adresse with InputGroup + MapPin + error message.
 * Node `27056:148056` (Data Invalid=True).
 */
export const Invalid: Story = {
  name: "Invalid with message (sketch)",
  render: () => (
    <Field className="w-[313px]" data-invalid>
      <FieldLabel htmlFor="adresse">Adresse</FieldLabel>
      <InputGroup>
        <InputGroupAddon>
          <MapPin />
        </InputGroupAddon>
        <InputGroupInput
          id="adresse"
          aria-invalid
          defaultValue="Sykeh"
        />
      </InputGroup>
      <FieldError>Du må velge et alternativ fra listen.</FieldError>
    </Field>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Matches Field node `27056:148056`: destructive label + invalid InputGroup ring, CircleAlert error row.",
      },
    },
  },
}

export const InvalidPlainInput: Story = {
  name: "Invalid (plain Input)",
  render: () => (
    <Field className="w-[313px]" data-invalid>
      <FieldLabel htmlFor="email">E-post</FieldLabel>
      <Input id="email" type="email" aria-invalid defaultValue="not-an-email" />
      <FieldError>Enter a valid email address.</FieldError>
    </Field>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <Field orientation="horizontal" className="w-[420px]">
      <FieldLabel htmlFor="newsletter">Newsletter</FieldLabel>
      <FieldContent>
        <Input id="newsletter" placeholder="you@example.com" />
        <FieldDescription>We never share your email.</FieldDescription>
      </FieldContent>
    </Field>
  ),
}

export const FieldsetGroup: Story = {
  name: "FieldSet + FieldGroup",
  render: () => (
    <FieldSet className="w-[313px]">
      <FieldLegend>Personlige detaljer</FieldLegend>
      <FieldDescription>
        Manage your profile details such as name, avatar, email and bio.
      </FieldDescription>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="fn">Fornavn</FieldLabel>
          <Input id="fn" placeholder="Ditt fornavn" />
        </Field>
        <Field>
          <FieldLabel htmlFor="en">Etternavn</FieldLabel>
          <Input id="en" placeholder="Ditt etternavn" />
        </Field>
        <FieldSeparator />
        <Field>
          <FieldLabel>Fylkestilhørighet</FieldLabel>
          <Select defaultValue="akershus">
            <SelectTrigger>
              <SelectValue placeholder="Velg fylke" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="akershus">Akershus</SelectItem>
              <SelectItem value="oslo">Oslo</SelectItem>
            </SelectContent>
          </Select>
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
}
