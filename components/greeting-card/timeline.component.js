// Timeline/Year in Review Component for Birthday Greeting Card

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.timeline = {
    name: '📅 Timeline',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Your Year in Review" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Timeline Events</label>
                <p class="text-xs text-gray-500 mb-2">Add memorable moments from the past year</p>
                <div data-items-container="timeline" class="space-y-2">
                    <!-- Dynamic items will be added here -->
                </div>
                <button type="button" onclick="addDynamicItem('${sectionId}', 'timeline')" class="mt-3 w-full px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-pink-600 font-medium hover:border-pink-400 hover:bg-pink-50 transition">
                    + Add Timeline Event
                </button>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="vertical">Vertical Timeline - Classic</option>
                    <option value="alternating">Alternating Sides - Modern</option>
                    <option value="horizontal">Horizontal Scroll - Unique</option>
                    <option value="cards">Card Timeline - Clean</option>
                    <option value="minimal">Minimal Dots - Simple</option>
                    <option value="zigzag">Zigzag Path - Creative</option>
                    <option value="gradient">Gradient Flow - Colorful gradient backgrounds</option>
                    <option value="stepped">Stepped Cascade - Staircase offset design</option>
                    <option value="carousel">Carousel Style - Overlapping cards display</option>
                    <option value="spotlight">Spotlight Focus - Featured center layout</option>
                    <option value="wave">Wave Pattern - Curved flowing connections</option>
                    <option value="spiral">Spiral Burst - Radiating from center</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f3f4f6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Timeline Line Color</label>
                <input type="color" value="#ec4899" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="lineColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
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
                <label class="block text-sm font-medium text-gray-700 mb-2">Dot Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="dotStyle" onchange="updatePreview()">
                    <option value="circle">Circle</option>
                    <option value="square">Square</option>
                    <option value="diamond">Diamond</option>
                    <option value="numbered">Numbered</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Shadow Effect</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="sm">Small</option>
                    <option value="md" selected>Medium</option>
                    <option value="lg">Large</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const events = [];
        const container = document.querySelector(`[data-field="title"]`)?.closest('.section-item')?.querySelector('[data-items-container="timeline"]');
        if (container) {
            container.querySelectorAll('.dynamic-item').forEach(item => {
                const dateInput = item.querySelector('[data-field="date"]');
                const eventInput = item.querySelector('[data-field="event"]');
                const date = dateInput?.value || '';
                const event = eventInput?.value || '';
                if (date && event) {
                    events.push({ date, event });
                }
            });
        }

        const layout = style.layout || 'vertical';
        const bgColor = style.bg || '#f3f4f6';
        const lineColor = style.lineColor || globalStyles.primaryColor;
        const cardBg = style.cardBg || '#ffffff';
        const textColor = style.text || '#1f2937';
        const title = data.title || 'Your Year in Review';

        const cardSizes = {
            compact: 'p-3 text-sm',
            medium: 'p-4 text-base',
            large: 'p-6 text-lg'
        };
        const padding = cardSizes[style.cardSize] || cardSizes.medium;

        const shadows = {
            none: 'shadow-none',
            sm: 'shadow-sm',
            md: 'shadow-md',
            lg: 'shadow-lg'
        };
        const shadowClass = shadows[style.shadow] || shadows.md;

        const getDotStyle = (index) => {
            const dotStyle = style.dotStyle || 'circle';
            if (dotStyle === 'numbered') {
                return `<div class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style="background: ${lineColor}; color: white">${index + 1}</div>`;
            } else if (dotStyle === 'square') {
                return `<div class="w-8 h-8 flex items-center justify-center" style="background: ${lineColor}"></div>`;
            } else if (dotStyle === 'diamond') {
                return `<div class="w-8 h-8 flex items-center justify-center" style="background: ${lineColor}; transform: rotate(45deg)"></div>`;
            }
            return `<div class="w-8 h-8 rounded-full" style="background: ${lineColor}"></div>`;
        };

        // Vertical Timeline Layout
        if (layout === 'vertical') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-3xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${title}</h3>
                        <div class="relative">
                            <div class="absolute left-8 top-0 bottom-0 w-1" style="background: ${lineColor}"></div>
                            <div class="space-y-8">
                                ${events.length > 0 ? events.map((evt, index) => `
                                    <div class="relative pl-20">
                                        <div class="absolute left-4">${getDotStyle(index)}</div>
                                        <div class="${padding} rounded-lg ${shadowClass}" style="background: ${cardBg}">
                                            <div class="text-sm font-semibold mb-1" style="color: ${lineColor}">${evt.date}</div>
                                            <p>${evt.event}</p>
                                        </div>
                                    </div>
                                `).join('') : '<p class="text-center text-gray-500">Add timeline events in the editor</p>'}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Alternating Sides Layout
        if (layout === 'alternating') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${title}</h3>
                        <div class="relative">
                            <div class="absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2" style="background: ${lineColor}"></div>
                            <div class="space-y-12">
                                ${events.length > 0 ? events.map((evt, index) => `
                                    <div class="relative ${index % 2 === 0 ? 'pr-1/2 text-right' : 'pl-1/2 text-left'}">
                                        <div class="absolute left-1/2 top-0 transform -translate-x-1/2">${getDotStyle(index)}</div>
                                        <div class="${padding} rounded-lg ${shadowClass} ${index % 2 === 0 ? 'mr-8' : 'ml-8'}" style="background: ${cardBg}">
                                            <div class="text-sm font-semibold mb-1" style="color: ${lineColor}">${evt.date}</div>
                                            <p>${evt.event}</p>
                                        </div>
                                    </div>
                                `).join('') : '<p class="text-center text-gray-500">Add timeline events in the editor</p>'}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Horizontal Scroll Layout
        if (layout === 'horizontal') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-full mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${title}</h3>
                        <div class="relative overflow-x-auto pb-8">
                            <div class="flex gap-8 min-w-max px-4">
                                ${events.length > 0 ? events.map((evt, index) => `
                                    <div class="relative flex flex-col items-center" style="width: 280px">
                                        ${getDotStyle(index)}
                                        ${index < events.length - 1 ? `<div class="absolute top-4 left-full w-8 h-1" style="background: ${lineColor}"></div>` : ''}
                                        <div class="${padding} rounded-lg ${shadowClass} mt-4 w-full" style="background: ${cardBg}">
                                            <div class="text-sm font-semibold mb-2 text-center" style="color: ${lineColor}">${evt.date}</div>
                                            <p class="text-center">${evt.event}</p>
                                        </div>
                                    </div>
                                `).join('') : '<p class="text-center text-gray-500">Add timeline events in the editor</p>'}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Card Timeline Layout
        if (layout === 'cards') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${title}</h3>
                        <div class="grid md:grid-cols-2 gap-6">
                            ${events.length > 0 ? events.map((evt, index) => `
                                <div class="${padding} rounded-xl ${shadowClass} border-t-4" style="background: ${cardBg}; border-color: ${lineColor}">
                                    <div class="flex items-start gap-3 mb-3">
                                        ${getDotStyle(index)}
                                        <div class="text-sm font-semibold pt-1" style="color: ${lineColor}">${evt.date}</div>
                                    </div>
                                    <p>${evt.event}</p>
                                </div>
                            `).join('') : '<p class="text-center text-gray-500 col-span-2">Add timeline events in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Minimal Dots Layout
        if (layout === 'minimal') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-2xl mx-auto">
                        <h3 class="text-2xl font-bold text-center mb-8">${title}</h3>
                        <div class="space-y-6">
                            ${events.length > 0 ? events.map((evt, index) => `
                                <div class="flex items-start gap-4">
                                    <div class="flex-shrink-0 mt-1">${getDotStyle(index)}</div>
                                    <div>
                                        <div class="text-sm font-semibold mb-1" style="color: ${lineColor}">${evt.date}</div>
                                        <p class="text-sm">${evt.event}</p>
                                    </div>
                                </div>
                            `).join('') : '<p class="text-center text-gray-500">Add timeline events in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Zigzag Path Layout
        if (layout === 'zigzag') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${title}</h3>
                        <div class="space-y-0">
                            ${events.length > 0 ? events.map((evt, index) => `
                                <div class="flex items-center gap-6 ${index % 2 === 0 ? '' : 'flex-row-reverse'}">
                                    <div class="flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}">
                                        <div class="${padding} rounded-xl ${shadowClass} inline-block" style="background: ${cardBg}">
                                            <div class="text-sm font-semibold mb-1" style="color: ${lineColor}">${evt.date}</div>
                                            <p>${evt.event}</p>
                                        </div>
                                    </div>
                                    <div class="flex-shrink-0">${getDotStyle(index)}</div>
                                    <div class="flex-1"></div>
                                </div>
                            `).join('') : '<p class="text-center text-gray-500">Add timeline events in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Gradient Flow Layout
        if (layout === 'gradient') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-3xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${title}</h3>
                        <div class="space-y-6">
                            ${events.length > 0 ? events.map((evt, index) => {
                                const opacity = 0.2 + (index * 0.15);
                                return `
                                    <div class="${padding} rounded-2xl ${shadowClass}" style="background: linear-gradient(135deg, ${lineColor}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}, ${cardBg}); border: 2px solid ${lineColor}">
                                        <div class="flex items-start gap-4">
                                            ${getDotStyle(index)}
                                            <div class="flex-1">
                                                <div class="text-sm font-bold mb-2" style="color: ${lineColor}">${evt.date}</div>
                                                <p class="font-medium">${evt.event}</p>
                                            </div>
                                        </div>
                                    </div>
                                `;
                            }).join('') : '<p class="text-center text-gray-500">Add timeline events in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Stepped Cascade Layout
        if (layout === 'stepped') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${title}</h3>
                        <div class="space-y-4">
                            ${events.length > 0 ? events.map((evt, index) => {
                                const marginLeft = index * 40;
                                return `
                                    <div style="margin-left: ${marginLeft}px; max-width: calc(100% - ${marginLeft}px)">
                                        <div class="${padding} rounded-xl ${shadowClass}" style="background: ${cardBg}; border-left: 4px solid ${lineColor}; transform: translateX(0); transition: transform 0.3s">
                                            <div class="flex items-center gap-3 mb-2">
                                                ${getDotStyle(index)}
                                                <div class="text-sm font-bold" style="color: ${lineColor}">${evt.date}</div>
                                            </div>
                                            <p class="ml-11">${evt.event}</p>
                                        </div>
                                    </div>
                                `;
                            }).join('') : '<p class="text-center text-gray-500">Add timeline events in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Carousel Style Layout
        if (layout === 'carousel') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${title}</h3>
                        <div class="relative overflow-x-auto pb-8">
                            <div class="flex gap-6 px-4" style="min-width: max-content">
                                ${events.length > 0 ? events.map((evt, index) => {
                                    const rotation = [-2, 1, -1, 2, -2, 1][index % 6];
                                    return `
                                        <div class="flex-shrink-0" style="width: 280px; transform: rotate(${rotation}deg)">
                                            <div class="${padding} rounded-2xl ${shadowClass}" style="background: ${cardBg}; border-top: 6px solid ${lineColor}">
                                                <div class="flex justify-center mb-3">
                                                    ${getDotStyle(index)}
                                                </div>
                                                <div class="text-center">
                                                    <div class="text-sm font-bold mb-2" style="color: ${lineColor}">${evt.date}</div>
                                                    <p>${evt.event}</p>
                                                </div>
                                            </div>
                                        </div>
                                    `;
                                }).join('') : '<p class="text-center text-gray-500">Add timeline events in the editor</p>'}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Spotlight Focus Layout
        if (layout === 'spotlight') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-5xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${title}</h3>
                        <div class="grid gap-6">
                            ${events.length > 0 ? events.map((evt, index) => {
                                const isSpotlight = index % 3 === 0;
                                if (isSpotlight) {
                                    return `
                                        <div class="col-span-1">
                                            <div class="${padding} rounded-3xl ${shadowClass}" style="background: linear-gradient(135deg, ${lineColor}, ${cardBg}); transform: scale(1.05)">
                                                <div class="flex flex-col items-center text-center">
                                                    <div class="text-6xl mb-4">${getDotStyle(index)}</div>
                                                    <div class="text-lg font-bold mb-3 text-white">${evt.date}</div>
                                                    <p class="text-lg text-white">${evt.event}</p>
                                                </div>
                                            </div>
                                        </div>
                                    `;
                                } else {
                                    return `
                                        <div class="col-span-1">
                                            <div class="${padding} rounded-xl ${shadowClass}" style="background: ${cardBg}; border: 2px solid ${lineColor}44">
                                                <div class="flex items-start gap-3">
                                                    ${getDotStyle(index)}
                                                    <div>
                                                        <div class="text-sm font-semibold mb-1" style="color: ${lineColor}">${evt.date}</div>
                                                        <p class="text-sm">${evt.event}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    `;
                                }
                            }).join('') : '<p class="text-center text-gray-500">Add timeline events in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Wave Pattern Layout
        if (layout === 'wave') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${title}</h3>
                        <div class="space-y-6">
                            ${events.length > 0 ? events.map((evt, index) => {
                                const positions = ['ml-0', 'ml-12', 'ml-24', 'ml-12', 'ml-0'];
                                const position = positions[index % positions.length];
                                return `
                                    <div class="${position}">
                                        <div class="${padding} rounded-full ${shadowClass}" style="background: ${cardBg}; border: 3px solid ${lineColor}; max-width: 90%">
                                            <div class="flex items-center gap-4">
                                                <div class="flex-shrink-0">${getDotStyle(index)}</div>
                                                <div class="flex-1">
                                                    <div class="text-xs font-bold mb-1" style="color: ${lineColor}">${evt.date}</div>
                                                    <p class="text-sm">${evt.event}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                            }).join('') : '<p class="text-center text-gray-500">Add timeline events in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Spiral Burst Layout
        if (layout === 'spiral') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${title}</h3>
                        <div class="relative" style="min-height: 400px">
                            ${events.length > 0 ? events.map((evt, index) => {
                                const angle = (index * 60) % 360;
                                const radius = 100 + (index * 30);
                                const x = Math.cos(angle * Math.PI / 180) * radius;
                                const y = Math.sin(angle * Math.PI / 180) * radius;
                                return `
                                    <div class="absolute" style="left: 50%; top: 50%; transform: translate(calc(-50% + ${x}px), calc(-50% + ${y}px))">
                                        <div class="${padding} rounded-xl ${shadowClass}" style="background: ${cardBg}; border: 2px solid ${lineColor}; min-width: 200px">
                                            <div class="text-center">
                                                <div class="flex justify-center mb-2">${getDotStyle(index)}</div>
                                                <div class="text-xs font-bold mb-2" style="color: ${lineColor}">${evt.date}</div>
                                                <p class="text-sm">${evt.event}</p>
                                            </div>
                                        </div>
                                    </div>
                                `;
                            }).join('') : '<p class="text-center text-gray-500">Add timeline events in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Default
        return `
            <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                <div class="max-w-3xl mx-auto">
                    <h3 class="text-3xl font-bold text-center mb-10">${title}</h3>
                    <div class="relative">
                        <div class="absolute left-8 top-0 bottom-0 w-1" style="background: ${lineColor}"></div>
                        <div class="space-y-8">
                            ${events.length > 0 ? events.map((evt, index) => `
                                <div class="relative pl-20">
                                    <div class="absolute left-4">${getDotStyle(index)}</div>
                                    <div class="${padding} rounded-lg ${shadowClass}" style="background: ${cardBg}">
                                        <div class="text-sm font-semibold mb-1" style="color: ${lineColor}">${evt.date}</div>
                                        <p>${evt.event}</p>
                                    </div>
                                </div>
                            `).join('') : '<p class="text-center text-gray-500">Add timeline events in the editor</p>'}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
};
