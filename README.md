# Vite + Tanstack + Express Monorepo

A modern full-stack application built with Vite, React, Tanstack Router, Tanstack Query, and Express.js in a monorepo structure using PNPM workspaces and Turborepo.

## Tech Stack

- **Package Manager**: PNPM
- **Build System**: Turborepo
- **Frontend**:
  - Vite
  - React
  - Tanstack Router (React Router)
  - Tanstack Query (React Query)
  - Tailwind CSS
- **Backend**:
  - Express.js
  - Node.js
  - Vite + vite-plugin-node for hot reloading

## Prerequisites

- Node.js (v18 or higher)
- PNPM (v8 or higher)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/dan-garden/vite-tanstack-express-monorepo.git
cd vite-tanstack-express-monorepo
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development servers:

You can start both frontend and backend simultaneously from the root:
```bash
pnpm dev
```

Or start them individually:

For frontend (in one terminal):
```bash
pnpm --filter frontend dev
```

For backend (in another terminal):
```bash
pnpm --filter backend dev
```

The frontend will be available at `http://localhost:3000` and the backend at `http://localhost:3001`.

## Development

- Both frontend and backend use Vite for development and building
- Frontend hot-reload is enabled by default
- Backend uses vite-plugin-node for hot reloading
- API endpoints are available at `http://localhost:3001/api`
- Turborepo handles task running and caching for optimal development experience

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

MIT
