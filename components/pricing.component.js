// Pricing Plans Component
// Allows users to create multiple pricing tiers with features

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.pricing = {
    name: '💰 Pricing Plans',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Pricing Plans" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div class="border-t pt-4 mt-4">
                <div class="flex justify-between items-center mb-3">
                    <h4 class="font-medium text-gray-700">Plans</h4>
                    <button onclick="addDynamicItem('${sectionId}', 'plans'); return false;" type="button" class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">+ Add Plan</button>
                </div>
                <div data-items-container="plans"></div>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="cards">Card Grid</option>
                    <option value="modern">Modern Cards</option>
                    <option value="minimal">Minimal</option>
                    <option value="featured">Featured Center</option>
                    <option value="comparison">Comparison Table</option>
                    <option value="gradient">Gradient Cards</option>
                    <option value="badge">Badge Style</option>
                    <option value="floating">Floating Price</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#3b82f6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Secondary Color</label>
                <input type="color" value="#10b981" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="secondary" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Border Radius</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="radius" onchange="updatePreview()">
                    <option value="rounded-lg">Medium</option>
                    <option value="rounded-xl">Large</option>
                    <option value="rounded-2xl">Extra Large</option>
                    <option value="rounded-none">Sharp</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Shadow Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="sm">Subtle</option>
                    <option value="md">Medium</option>
                    <option value="lg">Bold</option>
                    <option value="xl">Extra Bold</option>
                    <option value="2xl">Dramatic</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'cards';
        const bgColor = style.bg || '#ffffff';
        const accentColor = style.accent || '#3b82f6';
        const secondaryColor = style.secondary || '#10b981';
        const shadow = style.shadow || 'md';
        const shadowClass = `shadow-${shadow}`;
        const radius = style.radius || 'rounded-lg';
        const title = data.title || 'Pricing Plans';

        const plans = [];
        Object.keys(data).forEach(key => {
            const match = key.match(/^plan-name-(.+)$/);
            if (match) {
                const id = match[1];
                plans.push({
                    name: data[`plan-name-${id}`],
                    price: data[`plan-price-${id}`],
                    features: data[`plan-features-${id}`]
                });
            }
        });

        if (plans.length === 0) {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <h2 class="text-2xl font-bold text-center mb-8">${title}</h2>
                    <div class="text-center text-gray-500 text-sm">Add pricing plans to display</div>
                </div>
            `;
        }

        const headerHtml = `<h2 class="text-2xl font-bold text-center mb-8">${title}</h2>`;

        switch(layout) {
            case 'cards':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        ${headerHtml}
                        <div class="max-w-md mx-auto space-y-4">
                            ${plans.map((plan, idx) => `
                                <div class="border-2 rounded-xl p-6 bg-white shadow-md ${idx === 1 ? 'border-4' : ''}" style="border-color: ${idx === 1 ? accentColor : '#e5e7eb'}">
                                    ${idx === 1 ? `<div class="text-xs font-bold text-center mb-2 px-3 py-1 rounded-full inline-block" style="background: ${accentColor}20; color: ${accentColor};">MOST POPULAR</div>` : ''}
                                    <div class="text-center mb-6">
                                        <h3 class="text-xl font-bold mb-2">${plan.name || 'Plan'}</h3>
                                        <div class="text-3xl font-bold" style="color: ${accentColor};">${plan.price || '$0'}</div>
                                    </div>
                                    <div class="space-y-2 mb-6">
                                        ${(plan.features || '').split('\n').filter(f => f.trim()).map(feature => `
                                            <div class="flex items-center gap-2">
                                                <div style="color: ${accentColor};">✓</div>
                                                <div class="text-sm">${feature.trim()}</div>
                                            </div>
                                        `).join('')}
                                    </div>
                                    <button class="w-full py-3 px-4 rounded-lg font-medium transition ${idx === 1 ? 'text-white' : 'border-2 text-gray-700'}" style="${idx === 1 ? `background: ${accentColor};` : 'border-color: #e5e7eb;'}">
                                        Choose Plan
                                    </button>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;

            case 'modern':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        ${headerHtml}
                        <div class="max-w-md mx-auto space-y-4">
                            ${plans.map((plan, idx) => `
                                <div class="rounded-2xl p-6 shadow-xl" style="background: linear-gradient(135deg, ${accentColor}${idx === 1 ? '25' : '10'}, ${accentColor}${idx === 1 ? '35' : '20'});">
                                    <div class="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 class="text-xl font-bold mb-1">${plan.name || 'Plan'}</h3>
                                            <div class="text-2xl font-bold" style="color: ${accentColor};">${plan.price || '$0'}</div>
                                        </div>
                                        ${idx === 1 ? `<div class="text-2xl">⭐</div>` : ''}
                                    </div>
                                    <div class="space-y-2 mb-4">
                                        ${(plan.features || '').split('\n').filter(f => f.trim()).slice(0, 4).map(feature => `
                                            <div class="flex items-center gap-2 text-sm">
                                                <div style="color: ${accentColor};">✓</div>
                                                <div>${feature.trim()}</div>
                                            </div>
                                        `).join('')}
                                    </div>
                                    <button class="w-full py-2 px-4 rounded-lg font-medium text-white" style="background: ${accentColor};">
                                        Get Started
                                    </button>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;

            case 'minimal':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        ${headerHtml}
                        <div class="max-w-md mx-auto space-y-6">
                            ${plans.map((plan, idx) => `
                                <div class="border-b-2 pb-6" style="border-color: ${idx === plans.length - 1 ? 'transparent' : '#e5e7eb'};">
                                    <div class="flex items-baseline justify-between mb-3">
                                        <h3 class="text-lg font-bold">${plan.name || 'Plan'}</h3>
                                        <div class="text-2xl font-bold" style="color: ${accentColor};">${plan.price || '$0'}</div>
                                    </div>
                                    <div class="space-y-1">
                                        ${(plan.features || '').split('\n').filter(f => f.trim()).map(feature => `
                                            <div class="text-sm text-gray-600">• ${feature.trim()}</div>
                                        `).join('')}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;

            case 'featured':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        ${headerHtml}
                        <div class="max-w-md mx-auto space-y-4">
                            ${plans.map((plan, idx) => `
                                <div class="rounded-xl p-6 ${idx === 1 ? 'shadow-2xl scale-105 transform' : 'shadow-md'}" style="background: ${idx === 1 ? accentColor : 'white'}; color: ${idx === 1 ? 'white' : 'inherit'};">
                                    ${idx === 1 ? '<div class="text-center text-sm font-bold mb-2 opacity-90">RECOMMENDED</div>' : ''}
                                    <div class="text-center mb-4">
                                        <h3 class="text-xl font-bold mb-2">${plan.name || 'Plan'}</h3>
                                        <div class="text-3xl font-bold">${plan.price || '$0'}</div>
                                    </div>
                                    <div class="space-y-2 mb-4">
                                        ${(plan.features || '').split('\n').filter(f => f.trim()).map(feature => `
                                            <div class="flex items-center gap-2 text-sm ${idx === 1 ? 'opacity-90' : ''}">
                                                <div>✓</div>
                                                <div>${feature.trim()}</div>
                                            </div>
                                        `).join('')}
                                    </div>
                                    <button class="w-full py-2 px-4 rounded-lg font-medium ${idx === 1 ? 'bg-white' : 'border-2'}" style="${idx === 1 ? `color: ${accentColor};` : 'border-color: #e5e7eb;'}">
                                        Select
                                    </button>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;

            case 'comparison':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        ${headerHtml}
                        <div class="max-w-md mx-auto">
                            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
                                ${plans.map((plan, idx) => `
                                    <div class="p-5 ${idx !== plans.length - 1 ? 'border-b-2 border-gray-100' : ''}">
                                        <div class="flex items-center justify-between mb-3">
                                            <div>
                                                <h3 class="font-bold text-lg">${plan.name || 'Plan'}</h3>
                                                <div class="text-sm text-gray-500">${(plan.features || '').split('\n').filter(f => f.trim()).length} features</div>
                                            </div>
                                            <div class="text-right">
                                                <div class="text-2xl font-bold" style="color: ${accentColor};">${plan.price || '$0'}</div>
                                                <button class="mt-2 px-4 py-1 rounded-full text-xs font-medium text-white" style="background: ${accentColor};">
                                                    Select
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `;

            case 'gradient':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        ${headerHtml}
                        <div class="max-w-md mx-auto space-y-4">
                            ${plans.map((plan, idx) => {
                                const isEven = idx % 2 === 0;
                                const gradientColor = isEven ? `linear-gradient(135deg, ${accentColor}, ${secondaryColor})` : `linear-gradient(135deg, ${secondaryColor}, ${accentColor})`;
                                return `
                                <div class="${radius} ${shadowClass} overflow-hidden p-6 hover:shadow-2xl transition" style="background: ${gradientColor};">
                                    <div class="text-center mb-4">
                                        <h3 class="text-xl font-bold text-white mb-2">${plan.name || 'Plan'}</h3>
                                        <div class="text-3xl font-bold text-white">${plan.price || '$0'}</div>
                                    </div>
                                    <div class="space-y-2 mb-4">
                                        ${(plan.features || '').split('\n').filter(f => f.trim()).map(feature => `
                                            <div class="flex items-center gap-2 text-sm text-white">
                                                <div>✓</div>
                                                <div>${feature.trim()}</div>
                                            </div>
                                        `).join('')}
                                    </div>
                                    <button class="w-full py-3 px-4 ${radius} font-medium bg-white hover:bg-opacity-90 transition" style="color: ${accentColor};">
                                        Choose Plan
                                    </button>
                                </div>
                            `}).join('')}
                        </div>
                    </div>
                `;

            case 'badge':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        ${headerHtml}
                        <div class="max-w-md mx-auto space-y-4">
                            ${plans.map((plan, idx) => `
                                <div class="relative">
                                    <div class="bg-white ${radius} ${shadowClass} p-6 hover:shadow-2xl transition border-2" style="border-color: ${idx === 1 ? accentColor : '#e5e7eb'};">
                                        <div class="text-center mb-4">
                                            <h3 class="text-xl font-bold mb-2">${plan.name || 'Plan'}</h3>
                                            <div class="text-3xl font-bold" style="color: ${accentColor};">${plan.price || '$0'}</div>
                                        </div>
                                        <div class="space-y-2 mb-4">
                                            ${(plan.features || '').split('\n').filter(f => f.trim()).map(feature => `
                                                <div class="flex items-center gap-2 text-sm">
                                                    <div style="color: ${accentColor};">✓</div>
                                                    <div>${feature.trim()}</div>
                                                </div>
                                            `).join('')}
                                        </div>
                                        <button class="w-full py-3 px-4 ${radius} font-medium text-white ${shadowClass}" style="background: ${accentColor};">
                                            Select Plan
                                        </button>
                                    </div>
                                    ${idx === 1 ? `
                                    <div class="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                        <div class="px-4 py-1 ${radius} ${shadowClass} text-white text-xs font-bold" style="background: linear-gradient(135deg, ${accentColor}, ${secondaryColor});">
                                            POPULAR
                                        </div>
                                    </div>
                                    ` : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;

            case 'floating':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        ${headerHtml}
                        <div class="max-w-md mx-auto space-y-4">
                            ${plans.map((plan, idx) => `
                                <div class="relative">
                                    <div class="bg-white ${radius} ${shadowClass} p-6 pt-8 hover:shadow-2xl transition">
                                        <div class="text-center mb-4">
                                            <h3 class="text-xl font-bold mb-2">${plan.name || 'Plan'}</h3>
                                        </div>
                                        <div class="space-y-2 mb-4">
                                            ${(plan.features || '').split('\n').filter(f => f.trim()).map(feature => `
                                                <div class="flex items-center gap-2 text-sm">
                                                    <div style="color: ${accentColor};">✓</div>
                                                    <div>${feature.trim()}</div>
                                                </div>
                                            `).join('')}
                                        </div>
                                        <button class="w-full py-3 px-4 ${radius} font-medium border-2 hover:bg-gray-50 transition" style="border-color: ${accentColor}; color: ${accentColor};">
                                            Get Started
                                        </button>
                                    </div>
                                    <div class="absolute -top-4 -right-4 w-20 h-20 rounded-full flex items-center justify-center text-white ${shadowClass}" style="background: linear-gradient(135deg, ${accentColor}, ${secondaryColor});">
                                        <div class="text-center">
                                            <div class="text-lg font-bold leading-tight">${plan.price || '$0'}</div>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;

            default:
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        ${headerHtml}
                        <div class="max-w-md mx-auto space-y-4">
                            ${plans.map((plan, idx) => `
                                <div class="border-2 rounded-xl p-6" style="border-color: ${accentColor};">
                                    <h3 class="text-xl font-bold mb-2">${plan.name || 'Plan'}</h3>
                                    <div class="text-3xl font-bold mb-4" style="color: ${accentColor};">${plan.price || '$0'}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
        }
    }
};
