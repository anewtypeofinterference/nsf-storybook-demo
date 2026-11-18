# NFS Designsystem

Storybook + shadcn/ui design-system demo driven by the [NFS-Designsystem](https://www.figma.com/design/fjWU2xZPddN2Sv8amBe6q5/NFS-Designsystem?node-id=27009-64864) Figma sketches.

Stack: **Vite · React · TypeScript · Tailwind CSS v4 · shadcn/ui (New York) · Storybook 8**.

## Install

```bash
npm install
```

## Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Vite app preview |
| `npm run storybook` | Storybook on http://localhost:6006 |
| `npm run build-storybook` | Static Storybook build → `storybook-static/` |
| `npm run chromatic` | Upload build to Chromatic (needs `CHROMATIC_PROJECT_TOKEN`) |

## Components (this pass)

Only components present in the initial sketches, with Figma customizations:

- **Button** — primary `#292524`, XL CTA (`h-14` / `text-2xl`), ghost `icon-sm`
- **Card** — `rounded-xl`, shadow-xs, media via AspectRatio, muted footer + full-width button
- **Breadcrumb** — muted link + ChevronRight + current page
- **Separator** — horizontal/vertical border rule
- **Item** — muted + border + `rounded-lg`, image media, trailing action

**Blocks** sidebar section is reserved for Pro Blocks later (empty placeholder MDX).

## Addons

### Accessibility (`@storybook/addon-a11y`)

Enabled in `.storybook/main.ts`. Open any story → **Accessibility** panel for axe-core results. Preview sets `parameters.a11y.test` for addon test integration.

### Visual tests (`@chromatic-com/storybook`)

Official Storybook Visual Tests addon (Chromatic).

1. Create a project at [chromatic.com](https://www.chromatic.com)
2. Add `projectId` to `chromatic.config.json` (the addon can also write this when you sign in from the Visual Tests panel)
3. Set `CHROMATIC_PROJECT_TOKEN` in CI / local env
4. Run Storybook and use the **Visual Tests** panel, or `npm run chromatic`

### Figma viewer in docs

Reusable block: `src/stories/FigmaEmbed.tsx`  
Helpers: `src/stories/figma.ts`

Each component has a **Figma reference** story that embeds the sketch frame (URL + node id) beside the live component. Introduction also embeds the Design canvas.

## Tokens (from Figma)

| Token | Value |
| --- | --- |
| Font | Geist |
| Primary | `#292524` |
| Primary foreground | `#fafafa` |
| Muted | `#f8fafc` |
| Muted foreground | `#737373` |
| Border | `#e5e5e5` |
| Radius sm / md / lg / xl | 6 / 8 / 10 / 14 px |

Defined in `src/index.css`.
