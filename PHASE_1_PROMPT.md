# PHASE 1: Wedding Invitation - Add 7 New Sections

## OBJECTIVE
Implement 7 new sections for wedding-invitation.html template following the existing architecture patterns.

**TEMPLATE FILE:** `wedding-invitation.html`
**COLOR SCHEME:** Blue-600 to Cyan-600 gradient
**CURRENT SECTIONS:** 16
**NEW SECTIONS:** 7
**TOTAL AFTER:** 23

---

## SECTIONS TO IMPLEMENT

### 1. weddingParty - 👥 Wedding Party
- **allowMultiple:** false
- **Info Tab Fields:**
  - Section Title (text input)
  - Introduction Text (textarea)
  - Multiple party member entries (repeating section):
    - Name (text input)
    - Role (text input - e.g., "Maid of Honor", "Best Man")
    - Photo Upload (file input)
    - Bio/Description (textarea)
- **Style Tab Options:**
  - Background Color (color picker)
  - Text Color (color picker)
  - Layout (select: grid-2col, grid-3col, grid-4col)
  - Alignment (select: left, center, right)
- **Preview Render:** Grid layout showing wedding party members with photos, names, roles, and bios

### 2. attire - 👔 Dress Code
- **allowMultiple:** false
- **Info Tab Fields:**
  - Dress Code Type (text input - e.g., "Black Tie", "Cocktail Attire")
  - Description (textarea)
  - Color Palette (text input - optional)
  - Additional Notes (textarea - optional)
- **Style Tab Options:**
  - Background Color (color picker)
  - Text Color (color picker)
  - Alignment (select: left, center, right)
  - Font Size (select: text-sm, text-base, text-lg)
- **Preview Render:** Elegant display of dress code with icon, type, description, and color palette

### 3. ceremony - 💒 Ceremony Details
- **allowMultiple:** false
- **Info Tab Fields:**
  - Ceremony Type (text input - e.g., "Traditional Catholic", "Garden Ceremony")
  - Officiant Name (text input)
  - Special Traditions (textarea)
  - Readings/Music (textarea - optional)
  - Additional Details (textarea - optional)
- **Style Tab Options:**
  - Background Color (color picker)
  - Text Color (color picker)
  - Alignment (select: left, center, right)
- **Preview Render:** Formatted ceremony information with clear sections for each detail

### 4. lodging - 🏨 Hotel & Lodging
- **allowMultiple:** false
- **Info Tab Fields:**
  - Section Title (text input)
  - Introduction Text (textarea - optional)
  - Multiple hotel entries (repeating section):
    - Hotel Name (text input)
    - Address (text input)
    - Phone Number (text input)
    - Website/Booking Link (URL input)
    - Discount Code (text input - optional)
    - Notes (textarea - optional)
- **Style Tab Options:**
  - Background Color (color picker)
  - Text Color (color picker)
  - Card Style (select: bordered, shadowed, plain)
- **Preview Render:** Card-based layout showing hotel options with all details and booking links

### 5. travel - ✈️ Travel Information
- **allowMultiple:** false
- **Info Tab Fields:**
  - Airport Information (textarea)
  - Driving Directions (textarea)
  - Parking Details (textarea)
  - Shuttle Information (textarea - optional)
  - Additional Travel Tips (textarea - optional)
- **Style Tab Options:**
  - Background Color (color picker)
  - Text Color (color picker)
  - Layout (select: single-column, two-column)
  - Icon Style (select: show, hide)
- **Preview Render:** Organized travel information with icons for each transportation method

### 6. giftRegistry - 🎁 Gift Registry
- **allowMultiple:** false
- **Info Tab Fields:**
  - Message (textarea)
  - Multiple registry entries (repeating section):
    - Registry Name (text input - e.g., "Amazon", "Target", "Crate & Barrel")
    - Registry Link (URL input)
    - Registry ID (text input - optional)
  - Preferences Note (textarea - optional, e.g., "Your presence is gift enough")
- **Style Tab Options:**
  - Background Color (color picker)
  - Text Color (color picker)
  - Button Style (select: filled, outlined)
  - Alignment (select: left, center, right)
- **Preview Render:** Clean registry links with buttons/cards for each registry option

### 7. honeymoon - 🌴 Honeymoon Fund
- **allowMultiple:** false
- **Info Tab Fields:**
  - Title (text input)
  - Destination (text input)
  - Message (textarea)
  - Fund Link (URL input)
  - Additional Information (textarea - optional)
- **Style Tab Options:**
  - Background Color (color picker)
  - Text Color (color picker)
  - Alignment (select: left, center, right)
  - Image Position (select: top, left, right, none)
- **Preview Render:** Attractive honeymoon fund section with destination highlight and contribution link

---

## IMPLEMENTATION REQUIREMENTS

### 1. READ THE TEMPLATE FILE
```bash
# Read the complete wedding-invitation.html file
# Locate the sectionTemplates object (around line 400-1000)
# Note the existing pattern and structure
# Confirm color scheme: Blue-600 to Cyan-600
```

### 2. ADD SECTIONS TO sectionTemplates OBJECT

Insert all 7 sections into the `sectionTemplates` object. Example for weddingParty:

```javascript
weddingParty: {
    name: '👥 Wedding Party',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700">Section Title</label>
                <input type="text" id="\${sectionId}-title" value="Meet Our Wedding Party"
                       class="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700">Introduction</label>
                <textarea id="\${sectionId}-intro" rows="3"
                          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                          placeholder="Introduce your wedding party..."></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700">Party Members (Add names, roles, and descriptions manually in preview)</label>
                <p class="text-sm text-gray-500">Note: For demo purposes, add sample party members in the render function</p>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700">Background Color</label>
                <input type="color" id="\${sectionId}-bgColor" value="#f8fafc"
                       class="mt-1 block w-20 h-10 rounded border-gray-300">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700">Text Color</label>
                <input type="color" id="\${sectionId}-textColor" value="#1f2937"
                       class="mt-1 block w-20 h-10 rounded border-gray-300">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700">Layout</label>
                <select id="\${sectionId}-layout" class="mt-1 block w-full rounded-md border-gray-300">
                    <option value="grid-cols-2">2 Columns</option>
                    <option value="grid-cols-3">3 Columns</option>
                    <option value="grid-cols-4">4 Columns</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700">Alignment</label>
                <select id="\${sectionId}-alignment" class="mt-1 block w-full rounded-md border-gray-300">
                    <option value="left">Left</option>
                    <option value="center">Center</option>
                    <option value="right">Right</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const title = document.getElementById(data.sectionId + '-title')?.value || 'Meet Our Wedding Party';
        const intro = document.getElementById(data.sectionId + '-intro')?.value || '';
        const layout = style.layout || 'grid-cols-3';
        const alignment = style.alignment || 'center';

        // Sample party members for demo
        const partyMembers = [
            { name: 'Sarah Johnson', role: 'Maid of Honor', bio: 'Best friend since college' },
            { name: 'Michael Chen', role: 'Best Man', bio: 'Brother and lifelong friend' },
            { name: 'Emily Davis', role: 'Bridesmaid', bio: 'College roommate' },
            { name: 'David Wilson', role: 'Groomsman', bio: 'Childhood friend' }
        ];

        return `
            <div class="py-16 px-4" style="background-color: ${style.bgColor || '#f8fafc'}; color: ${style.textColor || '#1f2937'};">
                <div class="max-w-6xl mx-auto text-${alignment}">
                    <h2 class="text-3xl md:text-4xl font-bold mb-4">${title}</h2>
                    ${intro ? `<p class="text-lg mb-8 max-w-2xl ${alignment === 'center' ? 'mx-auto' : ''}">${intro}</p>` : ''}
                    <div class="grid ${layout} gap-8 mt-8">
                        ${partyMembers.map(member => `
                            <div class="text-center">
                                <div class="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white text-2xl font-bold">
                                    ${member.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <h3 class="text-xl font-semibold">${member.name}</h3>
                                <p class="text-sm text-gray-600 mb-2">${member.role}</p>
                                <p class="text-sm">${member.bio}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }
},
```

### 3. FOLLOW EXISTING PATTERNS
- Match the emoji style: single emoji at the start (e.g., '👥 Wedding Party')
- Use the same HTML structure as existing sections
- Apply the Blue-600 to Cyan-600 gradient for accents
- Keep consistent spacing (py-16, px-4 for sections)
- Use Tailwind CSS classes throughout

### 4. TESTING CHECKLIST
After implementing all 7 sections:

- [ ] Open wedding-invitation.html in browser
- [ ] Click "Add Section" button
- [ ] Verify all 7 new sections appear in modal
- [ ] Add each section one by one
- [ ] Fill in Info tab fields for each section
- [ ] Switch to Style tab and test all controls
- [ ] Verify preview renders correctly
- [ ] Test mobile preview (375px)
- [ ] Test tablet preview (768px)
- [ ] Check for JavaScript console errors
- [ ] Verify colors match template theme (Blue-Cyan)

### 5. COMMIT & PUSH

```bash
git add wedding-invitation.html

git commit -m "$(cat <<'EOF'
Add 7 new sections to Wedding Invitation

Implemented sections:
- 👥 Wedding Party (weddingParty)
- 👔 Dress Code (attire)
- 💒 Ceremony Details (ceremony)
- 🏨 Hotel & Lodging (lodging)
- ✈️ Travel Information (travel)
- 🎁 Gift Registry (giftRegistry)
- 🌴 Honeymoon Fund (honeymoon)

Each section includes:
- Info tab with comprehensive form fields
- Style tab with customization options
- Responsive preview rendering
- Proper data handling and validation

Template: wedding-invitation.html
Sections added: 7
Total sections in template: 23 (was 16)
EOF
)"

git push -u origin claude/add-event-templates-01F2T8XS3THJPYG9Ft299CCT
```

---

## SUCCESS CRITERIA

✓ wedding-invitation.html updated with 7 new sections
✓ All sections functional in editor
✓ Preview renders correctly for all sections
✓ No breaking changes to existing 16 sections
✓ Code follows existing patterns
✓ Changes committed and pushed
✓ Ready for Phase 2 (Business Portfolio)

---

**Phase 1 Complete!** Move to Phase 2: Business Portfolio (5 sections)
