// Page Layout Component for Farewell Party

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.layout = {
                name: '🎨 Page Layout',
                allowMultiple: false,
                info: `
                    <div class="space-y-4">
                        <div class="border-b pb-4 mb-4">
                            <label class="block text-sm font-semibold text-gray-700 mb-3">Navigation Layout Type</label>
                            <div class="space-y-2">
                                <label class="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                                    <input type="radio" name="navType" value="none" class="section-data" data-field="navType" onchange="toggleNavigationSettings(this); updatePreview()" checked>
                                    <div>
                                        <div class="font-medium text-sm">No Navigation</div>
                                        <div class="text-xs text-gray-600">Standard scrolling layout</div>
                                    </div>
                                </label>
                                <label class="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                                    <input type="radio" name="navType" value="tabview" class="section-data" data-field="navType" onchange="toggleNavigationSettings(this); updatePreview()">
                                    <div>
                                        <div class="font-medium text-sm">📑 Tab View</div>
                                        <div class="text-xs text-gray-600">Organize sections into tabs</div>
                                    </div>
                                </label>
                                <label class="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                                    <input type="radio" name="navType" value="topnav" class="section-data" data-field="navType" onchange="toggleNavigationSettings(this); updatePreview()">
                                    <div>
                                        <div class="font-medium text-sm">🧭 Top Navigation Bar</div>
                                        <div class="text-xs text-gray-600">Fixed navigation bar at the top</div>
                                    </div>
                                </label>
                                <label class="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                                    <input type="radio" name="navType" value="bottomnav" class="section-data" data-field="navType" onchange="toggleNavigationSettings(this); updatePreview()">
                                    <div>
                                        <div class="font-medium text-sm">⬇️ Bottom Navigation Bar</div>
                                        <div class="text-xs text-gray-600">Fixed navigation bar at the bottom</div>
                                    </div>
                                </label>
                            </div>
                        </div>

                        <!-- Tab View Settings -->
                        <div id="tabViewSettings" class="space-y-4 hidden">
                            <h4 class="text-sm font-semibold text-gray-700 border-b pb-2">Tab View Configuration</h4>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Tab Names (one per line)</label>
                                <textarea placeholder="Party Details&#10;About&#10;Memories&#10;RSVP" rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="tabNames" oninput="updatePreview(); updateSectionNavigationDropdowns()"></textarea>
                                <p class="text-xs text-gray-500 mt-1">Define the tab names that will be available</p>
                            </div>
                            <div class="border-t pt-4">
                                <h4 class="text-sm font-semibold text-gray-700 mb-3">Tab Layout Style</h4>
                                <div class="space-y-3">
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">Tab Style</label>
                                        <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="tabStyle" onchange="updatePreview()">
                                            <option value="underline" selected>Underline</option>
                                            <option value="pills">Pills</option>
                                            <option value="buttons">Buttons</option>
                                            <option value="boxed">Boxed</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">Tab Alignment</label>
                                        <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="tabAlignment" onchange="updatePreview()">
                                            <option value="left" selected>Left</option>
                                            <option value="center">Center</option>
                                            <option value="right">Right</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">Tab Size</label>
                                        <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="tabSize" onchange="updatePreview()">
                                            <option value="small">Small</option>
                                            <option value="medium" selected>Medium</option>
                                            <option value="large">Large</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Top Navigation Settings -->
                        <div id="topNavSettings" class="space-y-4 hidden">
                            <h4 class="text-sm font-semibold text-gray-700 border-b pb-2">Top Navigation Bar Configuration</h4>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Navigation Items (one per line)</label>
                                <textarea placeholder="Party&#10;About&#10;Memories&#10;Contact" rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="navItems" oninput="updatePreview(); updateSectionNavigationDropdowns()"></textarea>
                                <p class="text-xs text-gray-500 mt-1">Define the navigation menu items</p>
                            </div>
                            <div class="border-t pt-4">
                                <h4 class="text-sm font-semibold text-gray-700 mb-3">Navigation Bar Style</h4>
                                <div class="space-y-3">
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">Navigation Style</label>
                                        <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="navStyle" onchange="updatePreview()">
                                            <option value="simple" selected>Simple</option>
                                            <option value="underline">Underline Active</option>
                                            <option value="pills">Pills</option>
                                            <option value="bordered">Bordered</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">Navigation Alignment</label>
                                        <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="navAlignment" onchange="updatePreview()">
                                            <option value="left" selected>Left</option>
                                            <option value="center">Center</option>
                                            <option value="right">Right</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">Navigation Size</label>
                                        <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="navSize" onchange="updatePreview()">
                                            <option value="small">Small</option>
                                            <option value="medium" selected>Medium</option>
                                            <option value="large">Large</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">Navbar Background</label>
                                        <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-data" data-field="navBgColor" oninput="updatePreview()">
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">Navbar Text Color</label>
                                        <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-data" data-field="navTextColor" oninput="updatePreview()">
                                    </div>
                                    <div>
                                        <label class="flex items-center gap-2">
                                            <input type="checkbox" class="w-5 h-5 rounded section-data" data-field="navSticky" onchange="updatePreview()" checked>
                                            <span class="text-sm font-medium text-gray-700">Sticky Navigation (fixed at top)</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Bottom Navigation Settings -->
                        <div id="bottomNavSettings" class="space-y-4 hidden">
                            <h4 class="text-sm font-semibold text-gray-700 border-b pb-2">Bottom Navigation Bar Configuration</h4>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Navigation Items (one per line)</label>
                                <textarea placeholder="Party&#10;About&#10;Memories&#10;Contact" rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="bottomNavItems" oninput="updatePreview(); updateSectionNavigationDropdowns()"></textarea>
                                <p class="text-xs text-gray-500 mt-1">Define the navigation menu items</p>
                            </div>
                            <div class="border-t pt-4">
                                <h4 class="text-sm font-semibold text-gray-700 mb-3">Navigation Bar Style</h4>
                                <div class="space-y-3">
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">Navigation Style</label>
                                        <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="bottomNavStyle" onchange="updatePreview()">
                                            <option value="simple" selected>Simple</option>
                                            <option value="underline">Underline Active</option>
                                            <option value="pills">Pills</option>
                                            <option value="bordered">Bordered</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">Navigation Alignment</label>
                                        <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="bottomNavAlignment" onchange="updatePreview()">
                                            <option value="left" selected>Left</option>
                                            <option value="center">Center</option>
                                            <option value="right">Right</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">Navigation Size</label>
                                        <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="bottomNavSize" onchange="updatePreview()">
                                            <option value="small">Small</option>
                                            <option value="medium" selected>Medium</option>
                                            <option value="large">Large</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">Navbar Background</label>
                                        <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-data" data-field="bottomNavBgColor" oninput="updatePreview()">
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">Navbar Text Color</label>
                                        <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-data" data-field="bottomNavTextColor" oninput="updatePreview()">
                                    </div>
                                    <div>
                                        <label class="flex items-center gap-2">
                                            <input type="checkbox" class="w-5 h-5 rounded section-data" data-field="bottomNavSticky" onchange="updatePreview()" checked>
                                            <span class="text-sm font-medium text-gray-700">Sticky Navigation (fixed at bottom)</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="text-sm text-gray-600 pt-4 border-t">
                            <p>This section controls the overall styling and appearance of your farewell party invitation.</p>
                            <p class="mt-2">Use the <strong>Style</strong> tab to customize colors, fonts, and layout.</p>
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Primary Color</label>
                            <input type="color" value="#8b5cf6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="primaryColor" oninput="updatePreview()">
                            <p class="text-xs text-gray-500 mt-1">Used for headings and accents</p>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Secondary Color</label>
                            <input type="color" value="#7c3aed" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="secondaryColor" oninput="updatePreview()">
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
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="fontFamily" onchange="updatePreview()">
                                <option value="system-ui, -apple-system, sans-serif">System Default</option>
                                <option value="Georgia, serif">Georgia (Serif)</option>
                                <option value="'Times New Roman', serif">Times New Roman</option>
                                <option value="'Courier New', monospace">Courier New</option>
                                <option value="Arial, sans-serif">Arial</option>
                                <option value="'Comic Sans MS', cursive">Comic Sans</option>
                                <option value="'Brush Script MT', cursive">Brush Script</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Border Radius</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="borderRadius" onchange="updatePreview()">
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
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="spacing" onchange="updatePreview()">
                                <option value="compact">Compact</option>
                                <option value="normal" selected>Normal</option>
                                <option value="relaxed">Relaxed</option>
                                <option value="spacious">Spacious</option>
                            </select>
                        </div>
                    </div>
                `,
                render: (data, style) => '' // Layout section doesn't render visible content
};
