# Kaiku Demo Corp Site

A modern corporate website built with Next.js, featuring a home page, news section, and people directory.

```
┌─────────────────────────────────────┐
│                                     │
│  ┌───────────────────────────────┐  │
│  │                               │  │
│  │            UI                 │  │
│  │                               │  │
│  └───────────────────────────────┘  │
│                                     │
│  ┌───────────────────────────────┐  │
│  │                               │  │
│  │            API                │  │
│  │                               │  │
│  └───────────────────────────────┘  │
│                                     │
│                          NextJS     │
└─────────────────────────────────────┘
```

## Overview

This is a Next.js application built with TypeScript and Tailwind CSS. The application demonstrates modern web development practices including:

- **Next.js 16** with App Router
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling
- **Headless UI** for accessible UI components
- **React Query** for server state management (News feature)
- **Zustand** for client state management (People feature)

### Features

- **Home Page**: Landing page with company information
- **News**: Dynamic news feed powered by React Query
- **People**: Team directory managed with Zustand state

## Developing

### Prerequisites

This project uses:
- **Node.js**: If you have `.nvmrc` configured, use `nvm use` to switch to the correct Node version
- **Environment Variables**: If you have `.envrc` configured with direnv, environment variables will be loaded automatically when you enter the project directory

### Project Structure

```
kaiku-demo-corp-site/
├── src/
│   ├── app/              # Next.js app router pages
│   ├── components/       # Reusable React components
│   ├── hooks/           # Custom React hooks
│   ├── store/           # Zustand state stores
│   └── types/           # TypeScript type definitions
├── public/              # Static assets
└── package.json         # Project dependencies
```

## How to Start

### Node version

The required node and npm versions are defined in the `package.json`.

The easiest way to set up the project is to install [Node Version Manager](https://github.com/nvm-sh/nvm) so that the parent directory [`.nvmrc`](../.nvmrc) file can be used to set the correct version of Node JS.

After installing NVM, to use the desired version of Node JS run:

```bash
nvm use
```

See below on how to combine this with [direnv](https://github.com/direnv/direnv) to load and unload the desired Node JS
version depending on the current directory.

### Loading Environment via `.envrc`

Using [direnv](https://github.com/direnv/direnv) is recommended to load the Node JS version depending on the current
directory i.e. this project and others. This project contains a [`.envrc`](.envrc) file which automatically sets the
correct Node JS version and environment.

To set up this mechanism, install `direnv` and run:

```bash
direnv allow
```

### Running the Project

1. **Install dependencies** using npm:

```bash
npm install
```

2. **Run the development server**:

```bash
npm run dev
```

3. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

The application will automatically reload when you make changes to the code.

### How to Build

To create a production build:

```bash
npm run build
```

This will:
- Compile TypeScript
- Optimize and bundle all assets
- Generate static pages where possible
- Create an optimized production build in the `.next` directory

To run the production build locally:

```bash
npm start
```

## DevOps

**TBD**

---

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [React Query Documentation](https://tanstack.com/query/latest) - server state management
- [Zustand Documentation](https://zustand-demo.pmnd.rs/) - client state management
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - utility-first CSS framework
- [Headless UI Documentation](https://headlessui.com/) - accessible UI components
