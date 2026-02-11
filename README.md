# Code Command Copier - Chrome Extension

A simple Chrome extension to extract visible code commands from web pages and copy them to your clipboard.

## Features

- 🎯 Extracts all visible `<code>` elements from any webpage
- 📋 Copies commands to clipboard with one click
- 🚀 Skips the first visible code element (useful for documentation pages)
- ✨ Clean, simple interface

## How to Use

1. Navigate to any webpage containing code blocks
2. Click the extension icon in your Chrome toolbar
3. Click "Extract & Copy Commands" button
4. Paste the copied commands wherever you need them!

## Installation for Development

1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top-right corner
4. Click "Load unpacked"
5. Select the extension directory
6. The extension is now installed!

## Files

- `manifest.json` - Extension configuration
- `popup.html` - Extension popup UI
- `popup.js` - Main logic for extracting and copying code
- `icon*.png` - Extension icons

## Permissions

- **activeTab**: Access to the current webpage
- **scripting**: Execute code extraction script
- **clipboardWrite**: Copy commands to clipboard

## Use Cases

Perfect for:
- Copying terminal commands from documentation
- Extracting code snippets from tutorials
- Batch copying commands from README files
- Any situation where you need to quickly grab all code from a page

## License

MIT License - Feel free to use and modify!
# copy-kubectl
