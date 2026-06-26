# Infinex

A [Vite](https://vite.dev/) + React app embedding the [`@stakekit/widget`](https://www.npmjs.com/package/@stakekit/widget).

## Getting Started

Tooling (Node + pnpm) is managed with [mise](https://mise.jdx.dev/).

```bash
mise install
pnpm install
```

Copy the env template and fill in the values:

```bash
cp .env.example .env
```

### Run development app

```bash
pnpm dev
```

Open [http://localhost:3002](http://localhost:3002) with your browser to see the result.

### Run production build

```bash
pnpm build
pnpm start
```

## Tooling

- **Build:** Vite (`vite.config.ts`)
- **Lint/format:** Biome (`biome.json`) — `pnpm lint`, `pnpm lint:fix`
- **Hosting:** AWS Amplify (`amplify.yml`)
