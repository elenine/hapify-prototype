// Layout Component for Engagement Announcement
// This component controls global page settings including navigation type and styling

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.layout = {
    name: '🎨 Page Layout',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div class="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-4">
                <h4 class="font-semibold text-purple-900 mb-2">📐 Navigation Settings</h4>
                <p class="text-sm text-purple-700">Choose how your guests will navigate through your announcement</p>
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-3">Navigation Type</label>
                <div class="space-y-2">
                    <label class="flex items-start gap-3 p-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-purple-400 transition">
                        <input type="radio" name="navType" value="none" class="mt-1 section-data" data-field="navType" onchange="toggleNavigationSettings(this); updatePreview();" checked>
                        <div>
                            <div class="font-medium">No Navigation</div>
                            <div class="text-xs text-gray-500">Single scrolling page with all sections</div>
                        </div>
                    </label>

                    <label class="flex items-start gap-3 p-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-purple-400 transition">
                        <input type="radio" name="navType" value="tabview" class="mt-1 section-data" data-field="navType" onchange="toggleNavigationSettings(this); updatePreview();">
                        <div>
                            <div class="font-medium">Tab View</div>
                            <div class="text-xs text-gray-500">Organize sections into multiple tabs</div>
                        </div>
                    </label>

                    <label class="flex items-start gap-3 p-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-purple-400 transition">
                        <input type="radio" name="navType" value="topnav" class="mt-1 section-data" data-field="navType" onchange="toggleNavigationSettings(this); updatePreview();">
                        <div>
                            <div class="font-medium">Top Navigation Bar</div>
                            <div class="text-xs text-gray-500">Navigation bar at the top of the page</div>
                        </div>
                    </label>

                    <label class="flex items-start gap-3 p-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-purple-400 transition">
                        <input type="radio" name="navType" value="bottomnav" class="mt-1 section-data" data-field="navType" onchange="toggleNavigationSettings(this); updatePreview();">
                        <div>
                            <div class="font-medium">Bottom Navigation Bar</div>
                            <div class="text-xs text-gray-500">Mobile-style bottom navigation</div>
                        </div>
                    </label>
                </div>
            </div>

            <!-- Tab View Settings -->
            <div id="tabViewSettings" class="hidden space-y-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 class="font-semibold text-blue-900">📑 Tab Configuration</h4>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Tab Names (one per line)</label>
                    <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="tabNames" rows="5" oninput="updateSectionNavigationDropdowns(); updatePreview();" placeholder="Our Story&#10;The Proposal&#10;Celebration Details&#10;RSVP&#10;Registry">Our Story
The Proposal
Celebration Details
RSVP
Registry</textarea>
                    <p class="text-xs text-gray-500 mt-1">Enter each tab name on a new line</p>
                </div>
            </div>

            <!-- Top Navigation Settings -->
            <div id="topNavSettings" class="hidden space-y-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 class="font-semibold text-blue-900">🔝 Top Navigation Configuration</h4>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Navigation Items (one per line)</label>
                    <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="navItems" rows="5" oninput="updateSectionNavigationDropdowns(); updatePreview();" placeholder="Our Story&#10;The Proposal&#10;Celebration&#10;RSVP&#10;Registry">Our Story
The Proposal
Celebration
RSVP
Registry</textarea>
                    <p class="text-xs text-gray-500 mt-1">Enter each navigation item on a new line</p>
                </div>
            </div>

            <!-- Bottom Navigation Settings -->
            <div id="bottomNavSettings" class="hidden space-y-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 class="font-semibold text-blue-900">⬇️ Bottom Navigation Configuration</h4>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Navigation Items (one per line)</label>
                    <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="bottomNavItems" rows="5" oninput="updateSectionNavigationDropdowns(); updatePreview();" placeholder="Story&#10;Proposal&#10;Party&#10;RSVP&#10;Registry">Story
Proposal
Party
RSVP
Registry</textarea>
                    <p class="text-xs text-gray-500 mt-1">Enter each navigation item on a new line. Keep them short for mobile.</p>
                </div>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div class="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-4">
                <h4 class="font-semibold text-purple-900 mb-2">🎨 Global Styling</h4>
                <p class="text-sm text-purple-700">These styles apply to your entire announcement</p>
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Primary Color</label>
                <input type="color" value="#e11d48" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="primaryColor" oninput="updatePreview()">
                <p class="text-xs text-gray-500 mt-1">Used for headings and accents</p>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Secondary Color</label>
                <input type="color" value="#ec4899" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="secondaryColor" oninput="updatePreview()">
                <p class="text-xs text-gray-500 mt-1">Used for secondary elements</p>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bgColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="textColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Font Family</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-style" data-style="fontFamily" onchange="updatePreview()">
                    <option value="system-ui, -apple-system, sans-serif">System Default</option>
                    <option value="Georgia, serif">Georgia (Serif)</option>
                    <option value="'Times New Roman', serif">Times New Roman</option>
                    <option value="'Courier New', monospace">Courier New</option>
                    <option value="Arial, sans-serif">Arial</option>
                    <option value="'Playfair Display', serif">Playfair Display</option>
                    <option value="'Dancing Script', cursive">Dancing Script</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Border Radius</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-style" data-style="borderRadius" onchange="updatePreview()">
                    <option value="0px">Square (No Radius)</option>
                    <option value="4px">Small (4px)</option>
                    <option value="8px" selected>Medium (8px)</option>
                    <option value="16px">Large (16px)</option>
                    <option value="24px">Extra Large (24px)</option>
                    <option value="9999px">Pill Shape</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Spacing</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-style" data-style="spacing" onchange="updatePreview()">
                    <option value="compact">Compact</option>
                    <option value="normal" selected>Normal</option>
                    <option value="relaxed">Relaxed</option>
                    <option value="spacious">Spacious</option>
                </select>
            </div>

            <!-- Navigation Styling (shown only when navigation is enabled) -->
            <div id="navStyleSettings" class="hidden space-y-4 pt-4 border-t">
                <h4 class="font-semibold text-gray-900">Navigation Styling</h4>

                <!-- Tab Style Settings -->
                <div id="tabStyleSettings" class="hidden">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Tab Style</label>
                        <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-style" data-style="tabStyle" onchange="updatePreview()">
                            <option value="underline">Underline</option>
                            <option value="pills">Pills</option>
                            <option value="buttons">Buttons</option>
                            <option value="boxed">Boxed</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Tab Alignment</label>
                        <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-style" data-style="tabAlignment" onchange="updatePreview()">
                            <option value="left">Left</option>
                            <option value="center">Center</option>
                            <option value="right">Right</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Tab Size</label>
                        <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-style" data-style="tabSize" onchange="updatePreview()">
                            <option value="small">Small</option>
                            <option value="medium" selected>Medium</option>
                            <option value="large">Large</option>
                        </select>
                    </div>
                </div>

                <!-- Top/Bottom Nav Style Settings -->
                <div id="topNavStyleSettings" class="hidden">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Navigation Style</label>
                        <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-style" data-style="navStyle" onchange="updatePreview()">
                            <option value="simple">Simple</option>
                            <option value="underline">Underline</option>
                            <option value="pills">Pills</option>
                            <option value="bordered">Bordered</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                        <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="navBgColor" oninput="updatePreview()">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                        <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="navTextColor" oninput="updatePreview()">
                    </div>
                    <div>
                        <label class="flex items-center gap-2">
                            <input type="checkbox" class="rounded section-style" data-style="navSticky" onchange="updatePreview()" checked>
                            <span class="text-sm font-medium text-gray-700">Sticky Navigation</span>
                        </label>
                        <p class="text-xs text-gray-500 ml-6">Navigation stays visible when scrolling</p>
                    </div>
                </div>
            </div>
        </div>
    `,
    render: (data, style) => '' // Layout doesn't render visible content
};
