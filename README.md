# case-builder-ui

Shared React UI library for the Case Builder web app and Electron desktop app.

This package currently exports the reusable UI primitives from `src/components/ui`. The larger feature screens that were copied from the web app are intentionally not part of the public API yet because they still depend on app-specific Redux, router, and API modules.

## Install

If you want to consume this locally before publishing it, you can install it from the folder path:

```bash
npm install ../case-builder-ui
```

You can also publish it to a registry or create a tarball with `npm pack`.

## Peer Requirements

- `react` 18 or 19
- `react-dom` 18 or 19
- `tailwindcss` 4

## Tailwind Setup

Import the shared library styles into each app's main stylesheet after Tailwind:

```css
@import "tailwindcss";
@import "case-builder-ui/styles.css";
```

The exported stylesheet does three things:

- registers the shared theme tokens used by the components
- enables the animation utilities used by the Radix-based components
- points Tailwind at the built package files so classes from this library are included in the consuming app build

If either app already defines your final design tokens, keep importing `case-builder-ui/styles.css` and override the CSS variables afterward in your own stylesheet.

## Usage

```tsx
import { Button, Card, CardContent, CardHeader, CardTitle } from 'case-builder-ui';

export function ExampleCard() {
  return (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>Shared UI</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Open Bundle</Button>
      </CardContent>
    </Card>
  );
}
```

## Build

```bash
npm install
npm run build
```
