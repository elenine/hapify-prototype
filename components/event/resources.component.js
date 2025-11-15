// Resources/Downloads Component
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.resources = {
    name: '📥 Resources',
    allowMultiple: false,

    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" id="${sectionId}-title" value="Event Resources" placeholder="Event Resources" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea id="${sectionId}-description" placeholder="Download materials and access helpful resources" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" rows="2"></textarea>
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Resources</label>
                <textarea id="${sectionId}-items" placeholder="Enter one resource per line in format: Icon | Title | Description | Link | Type&#10;Example:&#10;📄 | Event Program | Full event schedule and details | /program.pdf | PDF&#10;🎬 | Promo Video | Watch our event highlight reel | /video.mp4 | Video&#10;📊 | Presentation Slides | Speaker presentation materials | /slides.pptx | PowerPoint" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" rows="8"></textarea>
                <p class="text-xs text-gray-500 mt-1">Format: Icon | Title | Description | Link | Type (one per line)</p>
            </div>
        </div>
    `,

    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="style-control w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" data-style="layoutStyle">
                    <option value="cards">Cards - Card layout with download buttons</option>
                    <option value="list">List - Compact list view</option>
                    <option value="modern">Modern - Gradient card style</option>
                    <option value="minimal">Minimal - Simple links</option>
                    <option value="grid">Grid - Grid layout with icons</option>
                </select>
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Button Style</label>
                <select class="style-control w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" data-style="buttonStyle">
                    <option value="solid">Solid</option>
                    <option value="outline">Outline</option>
                    <option value="text">Text Link</option>
                </select>
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Show File Type</label>
                <select class="style-control w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" data-style="showType">
                    <option value="yes" selected>Yes</option>
                    <option value="no">No</option>
                    <option value="badge">As Badge</option>
                </select>
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" class="style-control w-full h-10 rounded-lg" data-style="accentColor" value="#10b981" />
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" class="style-control w-full h-10 rounded-lg" data-style="bgColor" value="#ffffff" />
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Shadow</label>
                <select class="style-control w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" data-style="shadow">
                    <option value="none">None</option>
                    <option value="sm">Small</option>
                    <option value="md" selected>Medium</option>
                    <option value="lg">Large</option>
                </select>
            </div>
        </div>
    `,

    render: (data, style, globalStyles) => {
        const layoutStyle = style.layoutStyle || 'cards';
        const buttonStyle = style.buttonStyle || 'solid';
        const showType = style.showType || 'yes';
        const accentColor = style.accentColor || '#10b981';
        const bgColor = style.bgColor || '#ffffff';
        const shadow = style.shadow || 'md';

        const title = data.title || 'Event Resources';
        const description = data.description || '';

        const shadowMap = {
            none: '',
            sm: 'shadow-sm',
            md: 'shadow-md',
            lg: 'shadow-lg'
        };

        // Parse resources
        const resources = data.items ? data.items.split('\n').filter(item => item.trim()).map(item => {
            const parts = item.split('|').map(p => p.trim());
            return {
                icon: parts[0] || '📄',
                title: parts[1] || '',
                description: parts[2] || '',
                link: parts[3] || '#',
                type: parts[4] || ''
            };
        }) : [];

        if (resources.length === 0) {
            return `
                <div class="py-12 px-6 text-center" style="background: ${bgColor};">
                    <p class="text-gray-500">Add resources to display them here</p>
                </div>
            `;
        }

        const getTypeHTML = (type) => {
            if (!type || showType === 'no') return '';

            if (showType === 'badge') {
                return `<span class="inline-block px-2 py-1 rounded text-xs font-semibold" style="background: ${accentColor}20; color: ${accentColor};">${type}</span>`;
            }

            return `<span class="text-xs text-gray-500">${type}</span>`;
        };

        const getButtonHTML = (resource) => {
            switch (buttonStyle) {
                case 'solid':
                    return `<a href="${resource.link}" class="inline-block px-4 py-2 rounded-lg text-sm font-medium transition hover:opacity-90" style="background: ${accentColor}; color: white;">Download 📥</a>`;
                case 'outline':
                    return `<a href="${resource.link}" class="inline-block px-4 py-2 rounded-lg text-sm font-medium transition border-2 hover:opacity-80" style="border-color: ${accentColor}; color: ${accentColor};">Download 📥</a>`;
                case 'text':
                    return `<a href="${resource.link}" class="text-sm font-medium hover:underline" style="color: ${accentColor};">Download 📥</a>`;
                default:
                    return `<a href="${resource.link}" class="inline-block px-4 py-2 rounded-lg text-sm font-medium transition" style="background: ${accentColor}; color: white;">Download 📥</a>`;
            }
        };

        let resourcesHTML = '';

        switch (layoutStyle) {
            case 'cards':
                resourcesHTML = `
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        ${resources.map(resource => `
                            <div class="p-6 rounded-xl ${shadowMap[shadow]} bg-white">
                                <div class="flex items-start gap-4 mb-4">
                                    <div class="text-4xl flex-shrink-0">${resource.icon}</div>
                                    <div class="flex-1">
                                        <div class="flex items-start justify-between mb-1">
                                            <h4 class="font-bold text-lg text-gray-900">${resource.title}</h4>
                                            ${getTypeHTML(resource.type)}
                                        </div>
                                        ${resource.description ? `<p class="text-sm text-gray-600 mb-3">${resource.description}</p>` : ''}
                                    </div>
                                </div>
                                ${getButtonHTML(resource)}
                            </div>
                        `).join('')}
                    </div>
                `;
                break;

            case 'list':
                resourcesHTML = `
                    <div class="max-w-3xl mx-auto space-y-3">
                        ${resources.map(resource => `
                            <div class="p-4 rounded-lg ${shadowMap[shadow]} bg-white flex items-center justify-between gap-4">
                                <div class="flex items-center gap-3 flex-1">
                                    <div class="text-2xl">${resource.icon}</div>
                                    <div class="flex-1">
                                        <div class="flex items-center gap-2">
                                            <h4 class="font-semibold text-gray-900">${resource.title}</h4>
                                            ${getTypeHTML(resource.type)}
                                        </div>
                                        ${resource.description ? `<p class="text-sm text-gray-600">${resource.description}</p>` : ''}
                                    </div>
                                </div>
                                ${getButtonHTML(resource)}
                            </div>
                        `).join('')}
                    </div>
                `;
                break;

            case 'modern':
                resourcesHTML = `
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        ${resources.map(resource => `
                            <div class="p-6 rounded-xl ${shadowMap[shadow]}" style="background: linear-gradient(135deg, ${accentColor}15, ${accentColor}30);">
                                <div class="flex items-center gap-3 mb-3">
                                    <div class="w-14 h-14 rounded-lg flex items-center justify-center text-3xl" style="background: ${accentColor}; color: white;">${resource.icon}</div>
                                    <div class="flex-1">
                                        <h4 class="font-bold text-lg text-gray-900">${resource.title}</h4>
                                        ${showType !== 'no' && resource.type ? `<div class="text-xs font-medium" style="color: ${accentColor};">${resource.type}</div>` : ''}
                                    </div>
                                </div>
                                ${resource.description ? `<p class="text-sm text-gray-700 mb-4">${resource.description}</p>` : ''}
                                <a href="${resource.link}" class="inline-block px-5 py-2 rounded-lg text-sm font-semibold transition hover:shadow-lg" style="background: ${accentColor}; color: white;">Download 📥</a>
                            </div>
                        `).join('')}
                    </div>
                `;
                break;

            case 'minimal':
                resourcesHTML = `
                    <div class="max-w-2xl mx-auto space-y-6">
                        ${resources.map((resource, index) => `
                            <div class="${index < resources.length - 1 ? 'pb-6 border-b border-gray-300' : ''}">
                                <div class="flex items-start justify-between gap-4">
                                    <div class="flex-1">
                                        <div class="flex items-center gap-2 mb-1">
                                            <span class="text-xl">${resource.icon}</span>
                                            <h4 class="font-bold text-gray-900">${resource.title}</h4>
                                            ${getTypeHTML(resource.type)}
                                        </div>
                                        ${resource.description ? `<p class="text-sm text-gray-600 ml-7">${resource.description}</p>` : ''}
                                    </div>
                                    ${getButtonHTML(resource)}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                `;
                break;

            case 'grid':
                resourcesHTML = `
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        ${resources.map(resource => `
                            <div class="p-6 rounded-xl ${shadowMap[shadow]} bg-white text-center hover:scale-105 transition">
                                <div class="text-5xl mb-3">${resource.icon}</div>
                                <h4 class="font-bold text-base mb-1 text-gray-900">${resource.title}</h4>
                                ${getTypeHTML(resource.type)}
                                ${resource.description ? `<p class="text-xs text-gray-600 my-3">${resource.description}</p>` : '<div class="my-3"></div>'}
                                <a href="${resource.link}" class="inline-block px-4 py-2 rounded-lg text-sm font-medium transition" style="background: ${accentColor}; color: white;">Download</a>
                            </div>
                        `).join('')}
                    </div>
                `;
                break;
        }

        return `
            <div class="py-12 px-6" style="background: ${bgColor};">
                <div class="max-w-6xl mx-auto">
                    <div class="text-center mb-10">
                        <h3 class="text-3xl font-bold mb-2 text-gray-900">${title}</h3>
                        ${description ? `<p class="text-gray-600">${description}</p>` : ''}
                    </div>
                    ${resourcesHTML}
                </div>
            </div>
        `;
    }
};
