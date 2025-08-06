# Copy File Path with Range

VSCode extension to copy file paths with selection ranges for easy sharing with coding assistants.

## Features

- **Copy with line ranges**: Select code and copy path with line/column ranges
- **Two modes**: 
  - Relative path: `src/main.py:42-58`
  - Absolute path: `/home/user/project/src/main.py:42-58`
- **Smart formatting**:
  - Single line: `:42`
  - Multiple lines: `:42-58`
  - With columns: `:42:15-58:30`
  - Multiple selections: `:42-45,:50-52`

## Usage

1. Select code in the editor
2. Right-click and choose:
   - **Copy Relative Path with Range** (Alt+L)
   - **Copy Absolute Path with Range**

## Installation

Install from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=your-publisher.copy-file-path-with-range) or search for "Copy File Path with Range" in the Extensions view.

## License

MIT