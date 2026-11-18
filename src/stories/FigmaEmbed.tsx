import { figmaDesignUrl, figmaEmbedUrl } from "./figma"

type FigmaEmbedProps = {
  /** Figma node id, e.g. `27013:105525` */
  nodeId: string
  title?: string
  height?: number
}

/**
 * Reusable docs block: embeds a Figma frame beside Storybook docs.
 * Prefer this over one-off iframes so every story uses the same pattern.
 */
export function FigmaEmbed({
  nodeId,
  title = "Figma frame",
  height = 420,
}: FigmaEmbedProps) {
  const designUrl = figmaDesignUrl(nodeId)
  const embedUrl = figmaEmbedUrl(nodeId)

  return (
    <figure
      style={{
        margin: "1.5rem 0",
        border: "1px solid #e5e5e5",
        borderRadius: 10,
        overflow: "hidden",
        background: "#fafafa",
      }}
    >
      <figcaption
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 12,
          alignItems: "center",
          padding: "10px 14px",
          borderBottom: "1px solid #e5e5e5",
          fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif",
          fontSize: 13,
          color: "#0a0a0a",
        }}
      >
        <span>{title}</span>
        <a
          href={designUrl}
          target="_blank"
          rel="noreferrer"
          style={{ color: "#292524", fontWeight: 500 }}
        >
          Open in Figma
        </a>
      </figcaption>
      <iframe
        title={title}
        src={embedUrl}
        style={{
          display: "block",
          width: "100%",
          height,
          border: 0,
          background: "#fff",
        }}
        allowFullScreen
      />
    </figure>
  )
}
