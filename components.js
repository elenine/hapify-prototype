/**
 * InviteGen Reusable Web Components
 *
 * This file contains reusable web components for the InviteGen platform:
 * - PhoneMockup: Device preview frame (mobile/tablet)
 * - NavigationBar: Tab/Top/Bottom navigation bars
 * - SectionWrapper: Editor section with Info/Style tabs
 * - LayoutSettings: Navigation configuration panel
 *
 * Usage: Include this script in your HTML before your main script:
 * <script src="components.js"></script>
 */

// =============================================================================
// PHONE MOCKUP COMPONENT
// =============================================================================

class PhoneMockup extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['device', 'width', 'height'];
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        const device = this.getAttribute('device') || 'mobile';
        const customWidth = this.getAttribute('width');
        const customHeight = this.getAttribute('height');

        const dimensions = {
            mobile: { width: '375px', height: '667px' },
            tablet: { width: '768px', height: '1024px' }
        };

        const { width, height } = dimensions[device];
        const finalWidth = customWidth || width;
        const finalHeight = customHeight || height;

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                }
                .phone-frame {
                    width: ${finalWidth};
                    height: ${finalHeight};
                    background-color: #111827;
                    border-radius: 36px;
                    padding: 12px;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                    margin: 0 auto;
                }
                .phone-screen {
                    width: 100%;
                    height: 100%;
                    background-color: white;
                    border-radius: 28px;
                    overflow-y: auto;
                    overflow-x: hidden;
                }
                .phone-screen::-webkit-scrollbar {
                    width: 4px;
                }
                .phone-screen::-webkit-scrollbar-thumb {
                    background-color: rgba(0, 0, 0, 0.2);
                    border-radius: 2px;
                }
            </style>
            <div class="phone-frame">
                <div class="phone-screen">
                    <slot></slot>
                </div>
            </div>
        `;
    }
}

customElements.define('phone-mockup', PhoneMockup);

// =============================================================================
// SECTION WRAPPER COMPONENT (Info/Style Tabs)
// =============================================================================

class SectionWrapper extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['section-title', 'section-icon', 'section-id', 'section-type'];
    }

    connectedCallback() {
        this.render();
        this.setupEventListeners();
    }

    setupEventListeners() {
        const tabButtons = this.shadowRoot.querySelectorAll('.tab-btn');
        tabButtons.forEach(btn => {
            btn.addEventListener('click', (e) => this.switchTab(e.target.dataset.tab));
        });

        const deleteBtn = this.shadowRoot.querySelector('.delete-btn');
        if (deleteBtn) {
            deleteBtn.addEventListener('click', () => {
                this.dispatchEvent(new CustomEvent('section-delete', {
                    bubbles: true,
                    composed: true,
                    detail: { id: this.getAttribute('section-id') }
                }));
            });
        }
    }

    switchTab(tab) {
        const tabButtons = this.shadowRoot.querySelectorAll('.tab-btn');
        const tabContents = this.shadowRoot.querySelectorAll('.tab-content');

        tabButtons.forEach(btn => {
            if (btn.dataset.tab === tab) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        tabContents.forEach(content => {
            if (content.dataset.tab === tab) {
                content.classList.remove('hidden');
            } else {
                content.classList.add('hidden');
            }
        });
    }

    render() {
        const title = this.getAttribute('section-title') || 'Section';
        const icon = this.getAttribute('section-icon') || '📝';
        const sectionId = this.getAttribute('section-id');
        const sectionType = this.getAttribute('section-type');

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                }
                .section-container {
                    background-color: white;
                    border: 1px solid #e5e7eb;
                    border-radius: 12px;
                    overflow: hidden;
                    transition: box-shadow 0.2s;
                }
                .section-container:hover {
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                }
                .section-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 16px;
                    background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
                    border-bottom: 1px solid #e5e7eb;
                    cursor: move;
                }
                .section-title {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-weight: 600;
                    color: #111827;
                }
                .section-icon {
                    font-size: 20px;
                }
                .delete-btn {
                    background: none;
                    border: none;
                    color: #ef4444;
                    cursor: pointer;
                    font-size: 20px;
                    padding: 4px 8px;
                    border-radius: 4px;
                    transition: background-color 0.2s;
                }
                .delete-btn:hover {
                    background-color: #fee2e2;
                }
                .tabs-container {
                    display: flex;
                    border-bottom: 1px solid #e5e7eb;
                    background-color: #f9fafb;
                }
                .tab-btn {
                    flex: 1;
                    padding: 12px 16px;
                    background: none;
                    border: none;
                    font-size: 14px;
                    font-weight: 500;
                    color: #6b7280;
                    cursor: pointer;
                    border-bottom: 2px solid transparent;
                    transition: all 0.2s;
                }
                .tab-btn:hover {
                    background-color: #f3f4f6;
                    color: #111827;
                }
                .tab-btn.active {
                    color: #2563eb;
                    border-bottom-color: #2563eb;
                    background-color: white;
                }
                .tab-content {
                    padding: 16px;
                }
                .tab-content.hidden {
                    display: none;
                }
                ::slotted(*) {
                    margin: 0;
                }
            </style>
            <div class="section-container" draggable="true">
                <div class="section-header">
                    <div class="section-title">
                        <span class="section-icon">${icon}</span>
                        <span>${title}</span>
                    </div>
                    <button class="delete-btn" title="Remove section">🗑️</button>
                </div>
                <div class="tabs-container">
                    <button class="tab-btn active" data-tab="info">ℹ️ Info</button>
                    <button class="tab-btn" data-tab="style">🎨 Style</button>
                </div>
                <div class="tab-content" data-tab="info">
                    <slot name="info"></slot>
                </div>
                <div class="tab-content hidden" data-tab="style">
                    <slot name="style"></slot>
                </div>
            </div>
        `;
    }
}

customElements.define('section-wrapper', SectionWrapper);

// =============================================================================
// NAVIGATION HELPERS - Utilities for rendering navigation bars
// =============================================================================

const NavigationHelpers = {
    /**
     * Generate Tab Navigation HTML
     */
    generateTabNavigation(config) {
        const {
            tabNames = [],
            tabStyle = 'underline',
            tabAlignment = 'left',
            tabSize = 'medium',
            tabId = 'tab-' + Date.now()
        } = config;

        const sizeClasses = {
            small: 'px-3 py-2 text-xs',
            medium: 'px-4 py-3 text-sm',
            large: 'px-6 py-4 text-base'
        };

        const alignmentClasses = {
            left: 'justify-start',
            center: 'justify-center',
            right: 'justify-end'
        };

        const generateTabButton = (tab, index, style, size) => {
            const sizeClass = sizeClasses[size] || sizeClasses.medium;
            const baseClasses = 'font-medium transition cursor-pointer';

            switch(style) {
                case 'pills':
                    return `
                        <button onclick="switchPreviewTab('${tabId}', '${tab}')"
                                class="${baseClasses} ${sizeClass} rounded-full ${index === 0 ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-200'}"
                                data-tab-id="${tabId}"
                                data-tab-name="${tab}"
                                data-style="pills">
                            ${tab}
                        </button>
                    `;
                case 'buttons':
                    return `
                        <button onclick="switchPreviewTab('${tabId}', '${tab}')"
                                class="${baseClasses} ${sizeClass} rounded-lg ${index === 0 ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}"
                                data-tab-id="${tabId}"
                                data-tab-name="${tab}"
                                data-style="buttons">
                            ${tab}
                        </button>
                    `;
                case 'boxed':
                    return `
                        <button onclick="switchPreviewTab('${tabId}', '${tab}')"
                                class="${baseClasses} ${sizeClass} border ${index === 0 ? 'border-blue-600 bg-blue-50 text-blue-600' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}"
                                data-tab-id="${tabId}"
                                data-tab-name="${tab}"
                                data-style="boxed">
                            ${tab}
                        </button>
                    `;
                case 'underline':
                default:
                    return `
                        <button onclick="switchPreviewTab('${tabId}', '${tab}')"
                                class="${baseClasses} ${sizeClass} border-b-2 ${index === 0 ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-gray-900'}"
                                data-tab-id="${tabId}"
                                data-tab-name="${tab}"
                                data-style="underline">
                            ${tab}
                        </button>
                    `;
            }
        };

        const containerClasses = tabStyle === 'pills' || tabStyle === 'buttons' ? 'gap-2' : '';
        const alignClass = alignmentClasses[tabAlignment] || alignmentClasses.left;

        return {
            id: tabId,
            html: `
                <div class="sticky top-0 z-10 bg-white ${tabStyle !== 'pills' && tabStyle !== 'buttons' ? 'border-b' : ''} shadow-sm">
                    <div class="flex overflow-x-auto ${containerClasses} ${alignClass} p-2">
                        ${tabNames.map((tab, index) => generateTabButton(tab, index, tabStyle, tabSize)).join('')}
                    </div>
                </div>
            `
        };
    },

    /**
     * Generate Top Navigation Bar HTML
     */
    generateTopNavigation(config) {
        const {
            navItems = [],
            navStyle = 'simple',
            navAlignment = 'left',
            navSize = 'medium',
            navBgColor = '#ffffff',
            navTextColor = '#111827',
            navSticky = true,
            navId = 'nav-' + Date.now()
        } = config;

        const navSizeClasses = {
            small: 'px-3 py-2 text-xs',
            medium: 'px-4 py-3 text-sm',
            large: 'px-6 py-4 text-base'
        };

        const navAlignmentClasses = {
            left: 'justify-start',
            center: 'justify-center',
            right: 'justify-end'
        };

        const generateNavButton = (item, index, style, size) => {
            const sizeClass = navSizeClasses[size] || navSizeClasses.medium;
            const baseClasses = 'font-medium transition cursor-pointer preview-nav-btn';

            switch(style) {
                case 'underline':
                    return `
                        <button onclick="switchNavSection('${navId}', '${item}')"
                           class="${baseClasses} ${sizeClass} border-b-2 ${index === 0 ? 'border-blue-600' : 'border-transparent hover:border-gray-400'}"
                           style="color: ${navTextColor};"
                           data-nav-id="${navId}"
                           data-nav-item="${item}"
                           data-style="underline">
                            ${item}
                        </button>
                    `;
                case 'pills':
                    return `
                        <button onclick="switchNavSection('${navId}', '${item}')"
                           class="${baseClasses} ${sizeClass} rounded-full ${index === 0 ? 'bg-blue-600 text-white' : 'hover:bg-gray-200'}"
                           style="color: ${index === 0 ? '#ffffff' : navTextColor};"
                           data-nav-id="${navId}"
                           data-nav-item="${item}"
                           data-style="pills">
                            ${item}
                        </button>
                    `;
                case 'bordered':
                    return `
                        <button onclick="switchNavSection('${navId}', '${item}')"
                           class="${baseClasses} ${sizeClass} rounded-lg border ${index === 0 ? 'border-blue-600 bg-blue-50' : 'border-gray-300 hover:bg-gray-50'}"
                           style="color: ${navTextColor};"
                           data-nav-id="${navId}"
                           data-nav-item="${item}"
                           data-style="bordered">
                            ${item}
                        </button>
                    `;
                case 'simple':
                default:
                    return `
                        <button onclick="switchNavSection('${navId}', '${item}')"
                           class="${baseClasses} ${sizeClass} hover:opacity-70"
                           style="color: ${navTextColor};"
                           data-nav-id="${navId}"
                           data-nav-item="${item}"
                           data-style="simple">
                            ${item}
                        </button>
                    `;
            }
        };

        const navContainerClasses = navStyle === 'pills' || navStyle === 'bordered' ? 'gap-2' : 'gap-6';
        const navAlignClass = navAlignmentClasses[navAlignment] || navAlignmentClasses.left;
        const stickyClass = navSticky ? 'sticky top-0 z-10' : '';

        return {
            id: navId,
            html: `
                <div class="${stickyClass} shadow-sm" style="background-color: ${navBgColor}; border-bottom: 1px solid #e5e7eb;">
                    <div class="flex overflow-x-auto ${navContainerClasses} ${navAlignClass} px-4 py-3">
                        ${navItems.map((item, index) => generateNavButton(item, index, navStyle, navSize)).join('')}
                    </div>
                </div>
            `
        };
    },

    /**
     * Generate Bottom Navigation Bar HTML
     */
    generateBottomNavigation(config) {
        const {
            navItems = [],
            navStyle = 'simple',
            navBgColor = '#ffffff',
            navTextColor = '#111827',
            showLabels = true,
            showIcons = true,
            navId = 'nav-' + Date.now()
        } = config;

        // Default icons for common navigation items
        const defaultIcons = {
            'Home': '🏠',
            'About': 'ℹ️',
            'Services': '⚙️',
            'Portfolio': '📁',
            'Contact': '📞',
            'Team': '👥',
            'Gallery': '🖼️',
            'Products': '🛍️'
        };

        const generateNavItem = (item, index) => {
            const icon = defaultIcons[item] || '•';
            const itemId = `${navId}-${item.replace(/\s+/g, '-').toLowerCase()}`;

            return `
                <button onclick="switchNavSection('${navId}', '${item}')"
                        class="flex-1 flex flex-col items-center justify-center py-2 transition bottom-nav-btn ${index === 0 ? 'active' : ''}"
                        style="color: ${index === 0 ? '#2563eb' : navTextColor};"
                        data-nav-id="${navId}"
                        data-nav-item="${item}"
                        data-item-id="${itemId}">
                    ${showIcons ? `<span class="text-xl mb-1">${icon}</span>` : ''}
                    ${showLabels ? `<span class="text-xs font-medium">${item}</span>` : ''}
                </button>
            `;
        };

        return {
            id: navId,
            html: `
                <div class="fixed bottom-0 left-0 right-0 z-20 border-t shadow-lg"
                     style="background-color: ${navBgColor};">
                    <div class="flex items-center" style="max-width: 100%;">
                        ${navItems.map((item, index) => generateNavItem(item, index)).join('')}
                    </div>
                </div>
            `
        };
    },

    /**
     * Generate tab content containers
     */
    generateTabContentContainers(tabId, tabNames, sectionsByTab) {
        return `
            <div class="preview-tab-contents" data-tab-container="${tabId}">
                ${tabNames.map((tab, index) => `
                    <div class="preview-tab-content ${index === 0 ? '' : 'hidden'}" data-tab-id="${tabId}" data-tab-name="${tab}">
                        ${sectionsByTab[tab] && sectionsByTab[tab].length > 0
                            ? sectionsByTab[tab].map(s => s.html).join('')
                            : `<div class="py-16 text-center text-gray-500">
                                <div class="text-4xl mb-3">📋</div>
                                <p>No sections assigned to this tab yet</p>
                               </div>`
                        }
                    </div>
                `).join('')}
            </div>
        `;
    },

    /**
     * Generate navigation content containers
     */
    generateNavContentContainers(navId, navItems, sectionsByNavItem) {
        return `
            <div class="nav-sections-container" data-nav-container="${navId}">
                ${navItems.map((item, index) => `
                    <div class="nav-section-content ${index === 0 ? '' : 'hidden'}" data-nav-id="${navId}" data-nav-item="${item}">
                        ${sectionsByNavItem[item] && sectionsByNavItem[item].length > 0
                            ? sectionsByNavItem[item].map(s => s.html).join('')
                            : `<div class="py-16 text-center text-gray-500">
                                <div class="text-4xl mb-3">📋</div>
                                <p>No sections assigned to "${item}" yet</p>
                               </div>`
                        }
                    </div>
                `).join('')}
            </div>
        `;
    }
};

// =============================================================================
// NAVIGATION SWITCHING FUNCTIONS - Global functions for tab/nav switching
// =============================================================================

/**
 * Switch between tab contents in tab view mode
 */
window.switchPreviewTab = function(tabId, tabName) {
    // Update tab buttons
    const tabButtons = document.querySelectorAll(`[data-tab-id="${tabId}"]`);
    tabButtons.forEach(btn => {
        const btnTabName = btn.dataset.tabName;
        const btnStyle = btn.dataset.style;

        if (btnTabName === tabName) {
            // Active state
            switch(btnStyle) {
                case 'pills':
                    btn.className = btn.className.replace(/text-gray-\d+|hover:bg-gray-\d+/g, '');
                    btn.classList.add('bg-blue-600', 'text-white');
                    break;
                case 'buttons':
                    btn.className = btn.className.replace(/bg-gray-\d+|text-gray-\d+|hover:bg-gray-\d+/g, '');
                    btn.classList.add('bg-blue-600', 'text-white');
                    break;
                case 'boxed':
                    btn.className = btn.className.replace(/border-gray-\d+|text-gray-\d+|hover:bg-gray-\d+/g, '');
                    btn.classList.add('border-blue-600', 'bg-blue-50', 'text-blue-600');
                    break;
                case 'underline':
                default:
                    btn.className = btn.className.replace(/border-transparent|text-gray-\d+|hover:text-gray-\d+/g, '');
                    btn.classList.add('border-blue-600', 'text-blue-600');
                    break;
            }
        } else {
            // Inactive state
            switch(btnStyle) {
                case 'pills':
                    btn.className = btn.className.replace(/bg-blue-\d+|text-white/g, '');
                    btn.classList.add('text-gray-700', 'hover:bg-gray-200');
                    break;
                case 'buttons':
                    btn.className = btn.className.replace(/bg-blue-\d+|text-white/g, '');
                    btn.classList.add('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
                    break;
                case 'boxed':
                    btn.className = btn.className.replace(/border-blue-\d+|bg-blue-\d+|text-blue-\d+/g, '');
                    btn.classList.add('border-gray-300', 'text-gray-700', 'hover:bg-gray-50');
                    break;
                case 'underline':
                default:
                    btn.className = btn.className.replace(/border-blue-\d+|text-blue-\d+/g, '');
                    btn.classList.add('border-transparent', 'text-gray-600', 'hover:text-gray-900');
                    break;
            }
        }
    });

    // Update tab content visibility
    const tabContents = document.querySelectorAll(`.preview-tab-content[data-tab-id="${tabId}"]`);
    tabContents.forEach(content => {
        if (content.dataset.tabName === tabName) {
            content.classList.remove('hidden');
        } else {
            content.classList.add('hidden');
        }
    });
};

/**
 * Switch between navigation sections in top/bottom nav mode
 */
window.switchNavSection = function(navId, navItem) {
    // Update navigation buttons
    const navButtons = document.querySelectorAll(`[data-nav-id="${navId}"]`);
    navButtons.forEach(btn => {
        const btnNavItem = btn.dataset.navItem;
        const btnStyle = btn.dataset.style;
        const isActive = btnNavItem === navItem;

        if (btn.classList.contains('bottom-nav-btn')) {
            // Bottom navigation specific styling
            if (isActive) {
                btn.style.color = '#2563eb';
                btn.classList.add('active');
            } else {
                btn.style.color = btn.closest('[style*="color"]')?.style.color || '#111827';
                btn.classList.remove('active');
            }
        } else {
            // Top navigation styling
            if (isActive) {
                switch(btnStyle) {
                    case 'pills':
                        btn.className = btn.className.replace(/hover:bg-gray-\d+/g, '');
                        btn.classList.add('bg-blue-600');
                        btn.style.color = '#ffffff';
                        break;
                    case 'bordered':
                        btn.className = btn.className.replace(/border-gray-\d+|hover:bg-gray-\d+/g, '');
                        btn.classList.add('border-blue-600', 'bg-blue-50');
                        break;
                    case 'underline':
                        btn.className = btn.className.replace(/border-transparent|hover:border-gray-\d+/g, '');
                        btn.classList.add('border-blue-600');
                        break;
                }
            } else {
                switch(btnStyle) {
                    case 'pills':
                        btn.className = btn.className.replace(/bg-blue-\d+/g, '');
                        btn.classList.add('hover:bg-gray-200');
                        const navBar = btn.closest('[style*="color"]');
                        if (navBar) {
                            btn.style.color = navBar.style.color;
                        }
                        break;
                    case 'bordered':
                        btn.className = btn.className.replace(/border-blue-\d+|bg-blue-\d+/g, '');
                        btn.classList.add('border-gray-300', 'hover:bg-gray-50');
                        break;
                    case 'underline':
                        btn.className = btn.className.replace(/border-blue-\d+/g, '');
                        btn.classList.add('border-transparent', 'hover:border-gray-400');
                        break;
                }
            }
        }
    });

    // Update section visibility
    const navSections = document.querySelectorAll(`.nav-section-content[data-nav-id="${navId}"]`);
    navSections.forEach(section => {
        if (section.dataset.navItem === navItem) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });
};

// =============================================================================
// LAYOUT SETTINGS GENERATOR - Generate navigation configuration UI
// =============================================================================

const LayoutSettingsGenerator = {
    /**
     * Generate the complete layout settings HTML for the Info tab
     */
    generateLayoutInfoTab() {
        return `
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
                        <textarea placeholder="Home&#10;About&#10;Services&#10;Contact" rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="tabNames" oninput="updatePreview(); updateSectionNavigationDropdowns()"></textarea>
                        <p class="text-xs text-gray-500 mt-1">Define the tab names that will be available</p>
                    </div>
                    <div class="border-t pt-4">
                        <h4 class="text-sm font-semibold text-gray-700 mb-3">Tab Layout Style</h4>
                        <div class="space-y-3">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Tab Style</label>
                                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="tabStyle" onchange="updatePreview()">
                                    <option value="underline" selected>Underline</option>
                                    <option value="pills">Pills</option>
                                    <option value="buttons">Buttons</option>
                                    <option value="boxed">Boxed</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Tab Alignment</label>
                                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="tabAlignment" onchange="updatePreview()">
                                    <option value="left" selected>Left</option>
                                    <option value="center">Center</option>
                                    <option value="right">Right</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Tab Size</label>
                                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="tabSize" onchange="updatePreview()">
                                    <option value="small">Small</option>
                                    <option value="medium" selected>Medium</option>
                                    <option value="large">Large</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Top Navigation Bar Settings -->
                <div id="topNavSettings" class="space-y-4 hidden">
                    <h4 class="text-sm font-semibold text-gray-700 border-b pb-2">Top Navigation Bar Configuration</h4>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Navigation Items (one per line)</label>
                        <textarea placeholder="Home&#10;About&#10;Services&#10;Contact" rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="navItems" oninput="updatePreview(); updateSectionNavigationDropdowns()"></textarea>
                        <p class="text-xs text-gray-500 mt-1">Define the navigation items</p>
                    </div>
                    <div class="border-t pt-4">
                        <h4 class="text-sm font-semibold text-gray-700 mb-3">Navigation Bar Style</h4>
                        <div class="space-y-3">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Style</label>
                                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="navStyle" onchange="updatePreview()">
                                    <option value="simple" selected>Simple</option>
                                    <option value="underline">Underline</option>
                                    <option value="pills">Pills</option>
                                    <option value="bordered">Bordered</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Alignment</label>
                                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="navAlignment" onchange="updatePreview()">
                                    <option value="left" selected>Left</option>
                                    <option value="center">Center</option>
                                    <option value="right">Right</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Size</label>
                                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="navSize" onchange="updatePreview()">
                                    <option value="small">Small</option>
                                    <option value="medium" selected>Medium</option>
                                    <option value="large">Large</option>
                                </select>
                            </div>
                            <div>
                                <label class="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" class="section-data" data-field="navSticky" onchange="updatePreview()" checked>
                                    <span class="text-sm font-medium text-gray-700">Sticky Navigation (stays at top when scrolling)</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Bottom Navigation Bar Settings -->
                <div id="bottomNavSettings" class="space-y-4 hidden">
                    <h4 class="text-sm font-semibold text-gray-700 border-b pb-2">Bottom Navigation Bar Configuration</h4>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Navigation Items (one per line)</label>
                        <textarea placeholder="Home&#10;About&#10;Services&#10;Contact" rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="navItems" oninput="updatePreview(); updateSectionNavigationDropdowns()"></textarea>
                        <p class="text-xs text-gray-500 mt-1">Define the navigation items (max 5 recommended)</p>
                    </div>
                    <div class="border-t pt-4">
                        <h4 class="text-sm font-semibold text-gray-700 mb-3">Navigation Bar Options</h4>
                        <div class="space-y-3">
                            <div>
                                <label class="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" class="section-data" data-field="showNavIcons" onchange="updatePreview()" checked>
                                    <span class="text-sm font-medium text-gray-700">Show Icons</span>
                                </label>
                            </div>
                            <div>
                                <label class="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" class="section-data" data-field="showNavLabels" onchange="updatePreview()" checked>
                                    <span class="text-sm font-medium text-gray-700">Show Labels</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    /**
     * Generate the complete layout settings HTML for the Style tab
     */
    generateLayoutStyleTab() {
        return `
            <div class="space-y-4">
                <h4 class="text-sm font-semibold text-gray-700 border-b pb-2">Navigation Bar Colors</h4>

                <div id="navColorSettings" class="space-y-3">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                        <input type="color" value="#ffffff" class="w-full h-10 rounded-lg border border-gray-300 cursor-pointer section-style" data-field="navBgColor" onchange="updatePreview()">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                        <input type="color" value="#111827" class="w-full h-10 rounded-lg border border-gray-300 cursor-pointer section-style" data-field="navTextColor" onchange="updatePreview()">
                    </div>
                </div>

                <p class="text-xs text-gray-500 mt-2">
                    <strong>Note:</strong> Color settings apply to Top and Bottom navigation bars
                </p>
            </div>
        `;
    }
};

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Toggle navigation settings panels based on selected nav type
 */
window.toggleNavigationSettings = function(radio) {
    const tabViewSettings = document.getElementById('tabViewSettings');
    const topNavSettings = document.getElementById('topNavSettings');
    const bottomNavSettings = document.getElementById('bottomNavSettings');
    const navColorSettings = document.getElementById('navColorSettings');

    // Hide all settings first
    if (tabViewSettings) tabViewSettings.classList.add('hidden');
    if (topNavSettings) topNavSettings.classList.add('hidden');
    if (bottomNavSettings) bottomNavSettings.classList.add('hidden');

    // Show relevant settings based on selection
    switch(radio.value) {
        case 'tabview':
            if (tabViewSettings) tabViewSettings.classList.remove('hidden');
            if (navColorSettings) navColorSettings.classList.add('hidden');
            break;
        case 'topnav':
            if (topNavSettings) topNavSettings.classList.remove('hidden');
            if (navColorSettings) navColorSettings.classList.remove('hidden');
            break;
        case 'bottomnav':
            if (bottomNavSettings) bottomNavSettings.classList.remove('hidden');
            if (navColorSettings) navColorSettings.classList.remove('hidden');
            break;
        case 'none':
        default:
            if (navColorSettings) navColorSettings.classList.add('hidden');
            break;
    }
};

/**
 * Generate section assignment dropdown for navigation
 */
window.generateNavigationAssignmentDropdown = function(currentValue = '') {
    const layoutSection = document.querySelector('[data-type="layout"]');
    if (!layoutSection) return '';

    const navType = layoutSection.querySelector('[data-field="navType"]:checked')?.value;
    if (navType === 'none') return '';

    let items = [];
    if (navType === 'tabview') {
        const tabNamesText = layoutSection.querySelector('[data-field="tabNames"]')?.value || '';
        items = tabNamesText.split('\n').map(t => t.trim()).filter(t => t);
    } else if (navType === 'topnav' || navType === 'bottomnav') {
        const navItemsText = layoutSection.querySelector('[data-field="navItems"]')?.value || '';
        items = navItemsText.split('\n').map(t => t.trim()).filter(t => t);
    }

    if (items.length === 0) return '';

    const label = navType === 'tabview' ? 'Assign to Tab' : 'Assign to Navigation';
    const placeholder = navType === 'tabview' ? 'Select a tab' : 'Select a section';

    return `
        <div class="mt-4 pt-4 border-t">
            <label class="block text-sm font-medium text-gray-700 mb-2">${label}</label>
            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data"
                    data-field="${navType === 'tabview' ? 'assignedTab' : 'assignedNavItem'}"
                    onchange="updatePreview()">
                <option value="">${placeholder}</option>
                ${items.map(item => `<option value="${item}" ${item === currentValue ? 'selected' : ''}>${item}</option>`).join('')}
            </select>
            <p class="text-xs text-gray-500 mt-1">Choose where this section should appear</p>
        </div>
    `;
};

/**
 * Update all section navigation dropdowns when layout changes
 */
window.updateSectionNavigationDropdowns = function() {
    const sections = document.querySelectorAll('.section-wrapper');
    sections.forEach(section => {
        const type = section.dataset.type;
        if (type === 'layout' || type === 'hero') return;

        // Find the info tab content
        const infoTab = section.querySelector('[data-tab="info"]');
        if (!infoTab) return;

        // Get current value
        const currentDropdown = infoTab.querySelector('[data-field="assignedTab"], [data-field="assignedNavItem"]');
        const currentValue = currentDropdown?.value || '';

        // Find or create the dropdown container
        let dropdownContainer = infoTab.querySelector('.nav-assignment-container');
        if (!dropdownContainer) {
            dropdownContainer = document.createElement('div');
            dropdownContainer.className = 'nav-assignment-container';
            infoTab.appendChild(dropdownContainer);
        }

        // Generate and update the dropdown
        dropdownContainer.innerHTML = generateNavigationAssignmentDropdown(currentValue);
    });
};

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        NavigationHelpers,
        LayoutSettingsGenerator
    };
}

console.log('✅ InviteGen Components Library Loaded');
