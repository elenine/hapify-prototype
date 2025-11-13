# How to View Wedding Invitation Page

The wedding-invitation.html page uses a component-based architecture with JavaScript files loaded from the `wedding-components/` directory. Due to browser security (CORS), you cannot open the file directly. You must use a local web server.

## Method 1: Python Server (Recommended)

```bash
# Navigate to the project directory
cd /home/user/hapify-prototype

# Start a local server on port 8000
python3 -m http.server 8000

# Open in browser:
# http://localhost:8000/wedding-invitation.html
```

## Method 2: Node.js Server

```bash
# Install http-server globally (one time)
npm install -g http-server

# Start server
http-server -p 8000

# Open in browser:
# http://localhost:8000/wedding-invitation.html
```

## What You Should See

When the page loads correctly through a web server, you should see:

### Left Panel (Editor):
1. **🎨 Page Layout** section (purple background, "Global Settings" badge)
   - Contains navigation type options (No Navigation, Tab View, Top Nav, Bottom Nav)
   - Global style settings (colors, fonts, spacing, etc.)

2. **💒 Hero Header** section (pink background, "Required" badge)
   - Couple names input
   - Tagline input
   - Cover photo upload

3. **💑 Couple Info** section
   - Bride and groom names
   - About text

4. **📋 Event Details** section
   - Date, time, venue, address

5. **✉️ RSVP** section
   - RSVP title and message

### Right Panel (Preview):
- Live preview in mobile frame (375px width)
- Device toggle (Mobile/Tablet)
- Real-time updates as you edit

## Troubleshooting

If sections don't appear:

1. **Check browser console** (F12 → Console tab)
   - Look for errors loading component files
   - Should see: "Wedding components loaded: 10 components"

2. **Verify component files exist**:
   ```bash
   ls wedding-components/
   ```
   Should list 11 files including components-loader.js

3. **Check network tab** (F12 → Network tab)
   - All wedding-components/*.js files should return 200 status
   - No 404 errors

## Component Architecture

The page loads these components:
- `layout.component.js` - Page layout and navigation settings
- `hero.component.js` - Hero header
- `couple.component.js` - Couple information
- `details.component.js` - Event details
- `story.component.js` - Love story (optional, multiple)
- `gallery.component.js` - Photo gallery (optional, multiple)
- `rsvp.component.js` - RSVP section
- `map.component.js` - Location map (optional)
- `schedule.component.js` - Event schedule (optional)
- `message.component.js` - Custom messages (optional, multiple)
- `components-loader.js` - Component loading system

## Features

### Layout Settings

The **Page Layout** section provides:

**Navigation Options:**
- **No Navigation** (default) - Standard scrolling page
- **Tab View** - Sections organized in tabs
  - Styles: Underline, Pills, Buttons, Boxed
  - Alignment: Left, Center, Right
  - Size: Small, Medium, Large
- **Top Navigation Bar** - Fixed navigation at top
  - Styles: Simple, Underline, Pills, Bordered
  - Custom colors and sticky option
- **Bottom Navigation Bar** - Fixed navigation at bottom
  - Same customization as top nav

**Global Styles:**
- Primary and secondary colors
- Background and text colors
- Font family selection
- Border radius (square to pill shape)
- Spacing presets (compact to spacious)

### Section Management

- Add sections via "Add Section" button
- Remove sections (except Hero - required)
- Info/Style tabs for each section
- Assign sections to navigation items/tabs
- Real-time preview updates

## Current Server Status

Server running on: http://localhost:8000
