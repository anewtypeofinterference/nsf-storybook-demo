import {
  Controls,
  Description,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/blocks"

import { FigmaEmbed } from "./FigmaEmbed"

type FigmaDocsPageProps = {
  nodeId: string
  title?: string
  height?: number
}

/**
 * Autodocs page that surfaces the Figma frame above the interactive stories.
 * Use via `parameters.docs.page` so embeds live on Docs — not as sidebar stories.
 */
export function createFigmaDocsPage({
  nodeId,
  title = "Figma frame",
  height = 420,
}: FigmaDocsPageProps) {
  return function FigmaDocsPage() {
    return (
      <>
        <Title />
        <Subtitle />
        <Description />
        <FigmaEmbed nodeId={nodeId} title={title} height={height} />
        <Primary />
        <Controls />
        <Stories />
      </>
    )
  }
}
