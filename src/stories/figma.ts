/** Shared Figma file for NFS / NSF Designsystem sketches. */
export const FIGMA_FILE_KEY = "fjWU2xZPddN2Sv8amBe6q5"
export const FIGMA_FILE_NAME = "NFS-Designsystem"

export function figmaDesignUrl(nodeId: string) {
  const encoded = nodeId.replace(":", "-")
  return `https://www.figma.com/design/${FIGMA_FILE_KEY}/${FIGMA_FILE_NAME}?node-id=${encoded}`
}

export function figmaEmbedUrl(nodeId: string) {
  return `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(
    figmaDesignUrl(nodeId)
  )}`
}

/** Sketch node ids used by this Storybook pass. */
export const FIGMA_NODES = {
  designCanvas: "27009:64864",
  buttonXl: "27013:105525",
  buttonIconSm: "27023:117215",
  card: "27009:64865",
  item: "27013:105517",
  breadcrumb: "27013:113812",
  separator: "27013:114187",
} as const
