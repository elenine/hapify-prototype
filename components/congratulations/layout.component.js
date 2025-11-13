// Layout Component for Congratulations Card

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.layout = {
    name: '🎨 Layout & Global Settings',
    allowMultiple: false,
    info: (id) => `
        <div class="space-y-6">
            <div class="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <div class="flex items-center gap-2 mb-2">
                    <span class="text-xl">ℹ️</span>
                    <h4 class="font-semibold text-purple-900">About Layout Section</h4>
                </div>
                <p class="text-sm text-purple-700">
                    This section controls global settings that apply to your entire congratulations card.
                    Configure navigation style, overall theme, and layout preferences here.
                </p>
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-3">Navigation Type</label>
                <div class="space-y-2">
                    <label class="flex items-center gap-2 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input type="radio" name="navType-${id}" value="none" class="section-data" data-field="navType" onchange="toggleNavigationSettings(this); updatePreview();" checked>
                        <div>
                            <div class="font-medium text-sm">No Navigation</div>
                            <div class="text-xs text-gray-500">Simple scrolling page</div>
                        </div>
                    </label>
                    <label class="flex items-center gap-2 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input type="radio" name="navType-${id}" value="tabview" class="section-data" data-field="navType" onchange="toggleNavigationSettings(this); updatePreview();">
                        <div>
                            <div class="font-medium text-sm">Tab View</div>
                            <div class="text-xs text-gray-500">Organize sections into tabs</div>
                        </div>
                    </label>
                    <label class="flex items-center gap-2 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input type="radio" name="navType-${id}" value="topnav" class="section-data" data-field="navType" onchange="toggleNavigationSettings(this); updatePreview();">
                        <div>
                            <div class="font-medium text-sm">Top Navigation</div>
                            <div class="text-xs text-gray-500">Navigation bar at top</div>
                        </div>
                    </label>
                    <label class="flex items-center gap-2 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input type="radio" name="navType-${id}" value="bottomnav" class="section-data" data-field="navType" onchange="toggleNavigationSettings(this); updatePreview();">
                        <div>
                            <div class="font-medium text-sm">Bottom Navigation</div>
                            <div class="text-xs text-gray-500">Navigation bar at bottom</div>
                        </div>
                    </label>
                </div>
            </div>

            <!-- Tab View Settings -->
            <div id="tabViewSettings" class="hidden space-y-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 class="font-semibold text-blue-900">Tab View Settings</h4>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Tab Names (one per line)</label>
                    <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="tabNames" rows="4" placeholder="Home&#10;About&#10;Details&#10;Contact" oninput="updateSectionNavigationDropdowns(); updatePreview();"></textarea>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Tab Style</label>
                    <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="tabStyle" onchange="updatePreview()">
                        <option value="underline">Underline</option>
                        <option value="pills">Pills</option>
                        <option value="buttons">Buttons</option>
                        <option value="boxed">Boxed</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Tab Alignment</label>
                    <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="tabAlignment" onchange="updatePreview()">
                        <option value="left">Left</option>
                        <option value="center">Center</option>
                        <option value="right">Right</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Tab Size</label>
                    <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="tabSize" onchange="updatePreview()">
                        <option value="small">Small</option>
                        <option value="medium" selected>Medium</option>
                        <option value="large">Large</option>
                    </select>
                </div>
            </div>

            <!-- Top Navigation Settings -->
            <div id="topNavSettings" class="hidden space-y-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 class="font-semibold text-green-900">Top Navigation Settings</h4>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Navigation Items (one per line)</label>
                    <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="navItems" rows="4" placeholder="Home&#10;About&#10;Details&#10;Contact" oninput="updateSectionNavigationDropdowns(); updatePreview();"></textarea>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Navigation Style</label>
                    <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="navStyle" onchange="updatePreview()">
                        <option value="simple">Simple</option>
                        <option value="underline">Underline</option>
                        <option value="pills">Pills</option>
                        <option value="bordered">Bordered</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Navigation Alignment</label>
                    <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="navAlignment" onchange="updatePreview()">
                        <option value="left">Left</option>
                        <option value="center">Center</option>
                        <option value="right">Right</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Navigation Size</label>
                    <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="navSize" onchange="updatePreview()">
                        <option value="small">Small</option>
                        <option value="medium" selected>Medium</option>
                        <option value="large">Large</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                    <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-data" data-field="navBgColor" oninput="updatePreview()">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                    <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-data" data-field="navTextColor" oninput="updatePreview()">
                </div>
                <div>
                    <label class="flex items-center gap-2">
                        <input type="checkbox" class="section-data" data-field="navSticky" checked onchange="updatePreview()">
                        <span class="text-sm font-medium text-gray-700">Sticky Navigation</span>
                    </label>
                </div>
            </div>

            <!-- Bottom Navigation Settings -->
            <div id="bottomNavSettings" class="hidden space-y-4 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                <h4 class="font-semibold text-orange-900">Bottom Navigation Settings</h4>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Navigation Items (one per line)</label>
                    <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="bottomNavItems" rows="4" placeholder="Home&#10;About&#10;Details&#10;Contact" oninput="updateSectionNavigationDropdowns(); updatePreview();"></textarea>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Navigation Style</label>
                    <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="bottomNavStyle" onchange="updatePreview()">
                        <option value="simple">Simple</option>
                        <option value="underline">Underline</option>
                        <option value="pills">Pills</option>
                        <option value="bordered">Bordered</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Navigation Alignment</label>
                    <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="bottomNavAlignment" onchange="updatePreview()">
                        <option value="left">Left</option>
                        <option value="center">Center</option>
                        <option value="right">Right</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Navigation Size</label>
                    <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="bottomNavSize" onchange="updatePreview()">
                        <option value="small">Small</option>
                        <option value="medium" selected>Medium</option>
                        <option value="large">Large</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                    <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-data" data-field="bottomNavBgColor" oninput="updatePreview()">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                    <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-data" data-field="bottomNavTextColor" oninput="updatePreview()">
                </div>
                <div>
                    <label class="flex items-center gap-2">
                        <input type="checkbox" class="section-data" data-field="bottomNavSticky" checked onchange="updatePreview()">
                        <span class="text-sm font-medium text-gray-700">Sticky Navigation</span>
                    </label>
                </div>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Primary Color</label>
                <input type="color" value="#a855f7" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="primaryColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Secondary Color</label>
                <input type="color" value="#d946ef" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="secondaryColor" oninput="updatePreview()">
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
                    <option value="system-ui, -apple-system, sans-serif">System (Default)</option>
                    <option value="'Georgia', serif">Georgia</option>
                    <option value="'Times New Roman', serif">Times New Roman</option>
                    <option value="'Arial', sans-serif">Arial</option>
                    <option value="'Helvetica', sans-serif">Helvetica</option>
                    <option value="'Courier New', monospace">Courier New</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Border Radius</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-style" data-style="borderRadius" onchange="updatePreview()">
                    <option value="0px">None</option>
                    <option value="4px">Small</option>
                    <option value="8px" selected>Medium</option>
                    <option value="16px">Large</option>
                    <option value="24px">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Spacing</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-style" data-style="spacing" onchange="updatePreview()">
                    <option value="compact">Compact</option>
                    <option value="normal" selected>Normal</option>
                    <option value="relaxed">Relaxed</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => '' // Layout doesn't render anything directly
};
