import type { Meta, StoryObj } from "@storybook/react"
import { AppWindowIcon, CodeIcon } from "lucide-react"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { createFigmaDocsPage } from "./FigmaDocsPage"
import { FIGMA_NODES } from "./figma"

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
A set of layered sections of content—known as tab panels—that are displayed one at a time.

**Install:** \`npx shadcn@latest add tabs\`

**Usage:**
\`\`\`tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">...</TabsContent>
</Tabs>
\`\`\`

Figma uses the **line** variant (\`TabsList variant="line"\`) for profile navigation.
        `.trim(),
      },
      page: createFigmaDocsPage({
        nodeId: FIGMA_NODES.tabs,
        title: "Tabs — Profil / Betaling / …",
        height: 200,
      }),
    },
  },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="text-sm text-muted-foreground">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password" className="text-sm text-muted-foreground">
        Change your password here.
      </TabsContent>
    </Tabs>
  ),
}

/** Profile page tabs — Figma Variant=Line. */
export const Line: Story = {
  name: "Line (sketch)",
  render: () => (
    <Tabs defaultValue="profil" className="w-[326px]">
      <TabsList variant="line">
        <TabsTrigger value="profil">Profil</TabsTrigger>
        <TabsTrigger value="betaling">Betaling</TabsTrigger>
        <TabsTrigger value="tillitsvalgt">Din tillitsvalgt</TabsTrigger>
        <TabsTrigger value="fordeler">Dine fordeler</TabsTrigger>
      </TabsList>
      <TabsContent value="profil" className="pt-4 text-sm text-muted-foreground">
        Profile details
      </TabsContent>
      <TabsContent value="betaling" className="pt-4 text-sm text-muted-foreground">
        Payment
      </TabsContent>
      <TabsContent
        value="tillitsvalgt"
        className="pt-4 text-sm text-muted-foreground"
      >
        Union representative
      </TabsContent>
      <TabsContent value="fordeler" className="pt-4 text-sm text-muted-foreground">
        Benefits
      </TabsContent>
    </Tabs>
  ),
  parameters: {
    docs: {
      description: {
        story: "Matches Tabs node `27048:135558` (Variant=Line).",
      },
    },
  },
}

export const Vertical: Story = {
  render: () => (
    <Tabs
      defaultValue="account"
      orientation="vertical"
      className="w-[400px] flex-row"
    >
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="text-sm text-muted-foreground">
        Account panel
      </TabsContent>
      <TabsContent value="password" className="text-sm text-muted-foreground">
        Password panel
      </TabsContent>
    </Tabs>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password" disabled>
          Password
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="text-sm text-muted-foreground">
        Password tab is disabled.
      </TabsContent>
    </Tabs>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="preview" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="preview">
          <AppWindowIcon /> Preview
        </TabsTrigger>
        <TabsTrigger value="code">
          <CodeIcon /> Code
        </TabsTrigger>
      </TabsList>
      <TabsContent value="preview" className="text-sm text-muted-foreground">
        Preview panel
      </TabsContent>
      <TabsContent value="code" className="text-sm text-muted-foreground">
        Code panel
      </TabsContent>
    </Tabs>
  ),
}
