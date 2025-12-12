# Agent Rules Generator Prompt

Give this prompt to an AI coding assistant to generate a `.cursorrules` or similar agent configuration file.

---

## Instructions for AI Agent

You are helping create a rules file for AI coding assistants. Ask the user these questions, then generate a complete rules file based on their answers.

### Questions to Ask:

1. **Project Type**: What kind of project is this? (web app, API, library, CLI, etc.)

2. **Tech Stack**: What languages and frameworks? (e.g., "TypeScript + React + Next.js")

3. **Key Libraries**: Any important libraries to know about? (e.g., "Zustand, tRPC, Prisma")

4. **Code Style**: Any specific preferences?
   - Naming conventions?
   - File organization?
   - Function/component structure?

5. **Testing**: What's your testing approach?
   - Test framework?
   - Coverage expectations?

6. **When to Ask Permission**:
   - What changes should I always confirm first?
   - What can I do without asking?

7. **Critical Areas**: Anything particularly important?
   - Security requirements?
   - Performance concerns?
   - Specific patterns to follow?

8. **Communication Style**: How should I respond?
   - Concise or detailed explanations?
   - Minimal changes or full rewrites?

---

## Rules File Template

After gathering answers, generate a file like this:

```markdown
# Project: [Name]

## Tech Stack
- Language: [Language + version]
- Framework: [Framework]
- Key Libraries: [List]

## Code Standards

### File Organization
[Describe structure]

### Naming Conventions
- Files: [convention]
- Functions: [convention]
- Variables: [convention]

### Code Style
[Key preferences]

## Patterns to Follow

### [Pattern Name]
[When to use and example]

## Testing
- Framework: [name]
- Coverage: [target]
- Test co-located with source files

## Decision Making

### Always Ask Before:
- [Item 1]
- [Item 2]

### Feel Free To:
- Bug fixes
- Adding tests
- Refactoring internal code

## Critical Requirements
[Any must-follow rules for security, performance, etc.]

## Examples

### Good Pattern
```[language]
// Example of preferred approach
```

### Avoid
```[language]
// Example of what not to do
```
```

---

## Example Output

Here's what a completed rules file might look like:

```markdown
# Project: E-commerce Dashboard

## Tech Stack
- Language: TypeScript 5.x (strict mode)
- Framework: React 18 + Next.js 14
- Key Libraries: Zustand, React Query, Tailwind CSS, Zod

## Code Standards

### File Organization
```
src/
├── components/     # React components
├── hooks/          # Custom hooks
├── lib/            # Utilities
├── stores/         # Zustand stores
└── types/          # Type definitions
```

### Naming Conventions
- Files: `PascalCase.tsx` for components, `camelCase.ts` for utilities
- Functions: `camelCase`, arrow functions preferred
- Variables: `camelCase`, use `const` by default

### Code Style
- Max function length: 50 lines
- Max component length: 200 lines
- No `any` types - use `unknown` if truly needed
- Explicit return types for exported functions

## Patterns to Follow

### State Management
- Local state: `useState`
- Global state: Zustand stores
- Server state: React Query

### Component Structure
```typescript
// Define types first
interface Props {
  userId: string;
  onComplete: () => void;
}

// Then component
export function UserProfile({ userId, onComplete }: Props) {
  // hooks at top
  // handlers after
  // render last
}
```

## Testing
- Framework: Vitest + React Testing Library
- Coverage: 80% for utilities, test all components
- Test files: `ComponentName.test.tsx` co-located

## Decision Making

### Always Ask Before:
- Adding new dependencies
- Changing API contracts
- Modifying database schema
- Breaking changes to public APIs

### Feel Free To:
- Fix bugs
- Add tests
- Refactor internal implementation
- Improve error messages
- Update documentation

## Critical Requirements

### Security
- Never store tokens in localStorage
- Validate all inputs with Zod schemas
- Use parameterized queries only

### Performance
- Lazy load routes
- Use React.memo() for expensive renders
- Virtualize long lists (>100 items)

## Examples

### Good Pattern
```typescript
// Explicit types, clear structure
interface User {
  id: string;
  email: string;
}

async function fetchUser(id: string): Promise<User> {
  const response = await fetch(`/api/users/${id}`);
  if (!response.ok) throw new Error('Failed to fetch');
  return response.json();
}
```

### Avoid
```typescript
// Implicit any, no error handling
async function fetchUser(id) {
  return (await fetch(`/api/users/${id}`)).json();
}
```
```