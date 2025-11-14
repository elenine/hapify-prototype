// Party Details Component for Birthday Greeting Card

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.partydetails = {
    name: '🎪 Party Details',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Join the Celebration!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Date & Time</label>
                <input type="text" placeholder="Saturday, March 15th at 7:00 PM" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="datetime" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input type="text" placeholder="123 Party Street, Fun City" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="location" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">RSVP Details</label>
                <input type="text" placeholder="RSVP by March 1st" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="rsvp" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Contact Info</label>
                <input type="text" placeholder="Call or text: (555) 123-4567" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="contact" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Additional Info (optional)</label>
                <textarea placeholder="Dress code, parking info, etc." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="additionalInfo" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="card">Single Card - Classic</option>
                    <option value="rows">Rows Layout - Clean</option>
                    <option value="grid">Grid Cards - Modern</option>
                    <option value="minimal">Minimal List - Simple</option>
                    <option value="boxed">Boxed Items - Organized</option>
                    <option value="timeline">Timeline Style - Unique</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef3c7" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Icon Color</label>
                <input type="color" value="#f59e0b" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="iconColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="cardSize" onchange="updatePreview()">
                    <option value="compact">Compact</option>
                    <option value="medium" selected>Medium</option>
                    <option value="large">Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Icon Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="iconSize" onchange="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium" selected>Medium</option>
                    <option value="large">Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Shadow Effect</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="sm">Small</option>
                    <option value="md" selected>Medium</option>
                    <option value="lg">Large</option>
                    <option value="xl">Extra Large</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'card';
        const bgColor = style.bg || '#fef3c7';
        const cardBg = style.cardBg || '#ffffff';
        const iconColor = style.iconColor || '#f59e0b';
        const textColor = style.text || '#1f2937';
        const title = data.title || 'Join the Celebration!';

        const cardSizes = {
            compact: 'p-4 text-sm',
            medium: 'p-6 text-base',
            large: 'p-8 text-lg'
        };
        const padding = cardSizes[style.cardSize] || cardSizes.medium;

        const iconSizes = {
            small: 'text-2xl',
            medium: 'text-3xl',
            large: 'text-4xl'
        };
        const iconSize = iconSizes[style.iconSize] || iconSizes.medium;

        const shadows = {
            none: 'shadow-none',
            sm: 'shadow-sm',
            md: 'shadow-md',
            lg: 'shadow-lg',
            xl: 'shadow-xl'
        };
        const shadowClass = shadows[style.shadow] || shadows.md;

        const details = [
            { icon: '📅', label: 'WHEN', value: data.datetime },
            { icon: '📍', label: 'WHERE', value: data.location },
            { icon: '✉️', label: 'RSVP', value: data.rsvp },
            { icon: '📞', label: 'CONTACT', value: data.contact },
            { icon: 'ℹ️', label: 'ADDITIONAL INFO', value: data.additionalInfo }
        ].filter(d => d.value);

        // Single Card Layout
        if (layout === 'card') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-2xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-8">${title}</h3>
                        <div class="${padding} rounded-2xl ${shadowClass}" style="background: ${cardBg}">
                            <div class="space-y-6">
                                ${details.map(d => `
                                    <div class="flex items-start gap-4">
                                        <div class="${iconSize}" style="color: ${iconColor}">${d.icon}</div>
                                        <div>
                                            <div class="font-semibold text-sm text-gray-500 mb-1">${d.label}</div>
                                            <div class="text-lg">${d.value}</div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Rows Layout
        if (layout === 'rows') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-3xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-8">${title}</h3>
                        <div class="space-y-4">
                            ${details.map(d => `
                                <div class="${padding} rounded-xl ${shadowClass} border-l-4" style="background: ${cardBg}; border-color: ${iconColor}">
                                    <div class="flex items-center gap-4">
                                        <div class="${iconSize}" style="color: ${iconColor}">${d.icon}</div>
                                        <div class="flex-1">
                                            <div class="font-semibold text-xs text-gray-500 mb-1">${d.label}</div>
                                            <div>${d.value}</div>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        // Grid Cards Layout
        if (layout === 'grid') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-8">${title}</h3>
                        <div class="grid md:grid-cols-2 gap-6">
                            ${details.map(d => `
                                <div class="${padding} rounded-xl ${shadowClass} text-center" style="background: ${cardBg}">
                                    <div class="${iconSize} mb-3" style="color: ${iconColor}">${d.icon}</div>
                                    <div class="font-semibold text-xs text-gray-500 mb-2">${d.label}</div>
                                    <div class="font-medium">${d.value}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        // Minimal List Layout
        if (layout === 'minimal') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-xl mx-auto">
                        <h3 class="text-2xl font-bold text-center mb-6">${title}</h3>
                        <div class="space-y-4">
                            ${details.map(d => `
                                <div class="flex items-start gap-3 border-b pb-3" style="border-color: ${iconColor}22">
                                    <div class="text-xl" style="color: ${iconColor}">${d.icon}</div>
                                    <div>
                                        <div class="font-semibold text-xs text-gray-500">${d.label}</div>
                                        <div class="text-sm mt-1">${d.value}</div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        // Boxed Items Layout
        if (layout === 'boxed') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-3xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-8">${title}</h3>
                        <div class="grid gap-4">
                            ${details.map(d => `
                                <div class="${padding} rounded-lg ${shadowClass}" style="background: ${cardBg}; border: 2px solid ${iconColor}44">
                                    <div class="flex items-center gap-4">
                                        <div class="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${iconSize}" style="background: ${iconColor}22; color: ${iconColor}">
                                            ${d.icon}
                                        </div>
                                        <div class="flex-1">
                                            <div class="font-bold text-xs mb-1" style="color: ${iconColor}">${d.label}</div>
                                            <div>${d.value}</div>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        // Timeline Style Layout
        if (layout === 'timeline') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-3xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${title}</h3>
                        <div class="relative">
                            <div class="absolute left-8 top-0 bottom-0 w-1" style="background: ${iconColor}"></div>
                            <div class="space-y-8">
                                ${details.map(d => `
                                    <div class="relative pl-20">
                                        <div class="absolute left-4 w-8 h-8 rounded-full flex items-center justify-center" style="background: ${iconColor}; color: white">
                                            ${d.icon}
                                        </div>
                                        <div class="${padding} rounded-lg ${shadowClass}" style="background: ${cardBg}">
                                            <div class="font-bold text-sm mb-2" style="color: ${iconColor}">${d.label}</div>
                                            <div>${d.value}</div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Default
        return `
            <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                <div class="max-w-2xl mx-auto">
                    <h3 class="text-3xl font-bold text-center mb-8">${title}</h3>
                    <div class="${padding} rounded-2xl ${shadowClass}" style="background: ${cardBg}">
                        <div class="space-y-6">
                            ${details.map(d => `
                                <div class="flex items-start gap-4">
                                    <div class="${iconSize}" style="color: ${iconColor}">${d.icon}</div>
                                    <div>
                                        <div class="font-semibold text-sm text-gray-500 mb-1">${d.label}</div>
                                        <div class="text-lg">${d.value}</div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
};
