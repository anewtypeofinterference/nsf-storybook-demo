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

/** Sketch node ids used by this Storybook. */
export const FIGMA_NODES = {
  designCanvas: "27009:64864",
  buttonXl: "27013:105525",
  buttonIconSm: "27023:117215",
  card: "27009:64865",
  item: "27013:105517",
  breadcrumb: "27013:113812",
  separator: "27013:114187",
  dialogConfirmInfo: "27026:119578",
  dialogUnsaved: "27048:142068",
  tabs: "27048:135558",
  field: "27048:135564",
  fieldError: "27056:148056",
  select: "27048:138194",
  dropdownMenu: "27048:138394",
  sonner: "27048:143219",
  inputGroupHidden: "27048:135557",
} as const
