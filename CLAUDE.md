# copy-file-path-with-range

VSCode extension to copy file paths with selection ranges (e.g., `src/main.py:42:15-58:30`) for easy sharing with coding assistants.

## Tech Stack
- TypeScript
- VSCode Extension API

## Commands
```bash
pnpm run compile      # Build extension
pnpm run lint         # Run linting  
pnpm run check-types  # Type checking
```

## Implementation
Main code: `src/extension.ts`

## Features
- **Commands**: `copyRelativePath` (Alt+L), `copyAbsolutePath`
- **Range Format**: 
  - Full lines: `:42` or `:42-58`
  - Partial: `:42:15-30` or `:42:15-58:30`
  - Multiple selections: `:42-45,:50-52`
- **Context menu**: Both commands in right-click menu