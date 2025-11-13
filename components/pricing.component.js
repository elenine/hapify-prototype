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
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Border Color</label>
                <input type="color" value="#e5e7eb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="borderColor" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
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

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#ffffff'}">
                <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Pricing Plans'}</h2>
                <div class="max-w-5xl mx-auto grid md:grid-cols-${plans.length} gap-6">
                    ${plans.map((plan, idx) => `
                        <div class="border-2 rounded-xl p-6 ${idx === 1 ? 'border-blue-600 shadow-lg' : ''}" style="border-color: ${idx === 1 ? '#2563eb' : style.borderColor || '#e5e7eb'}">
                            ${idx === 1 ? '<div class="text-xs font-semibold text-blue-600 text-center mb-2">MOST POPULAR</div>' : ''}
                            <div class="text-center mb-6">
                                <h3 class="text-xl font-bold mb-2">${plan.name || 'Plan'}</h3>
                                <div class="text-3xl font-bold text-blue-600">${plan.price || '$0'}</div>
                            </div>
                            <div class="space-y-3">
                                ${(plan.features || '').split('\n').filter(f => f.trim()).map(feature => `
                                    <div class="flex items-center gap-2">
                                        <div class="text-green-600">✓</div>
                                        <div class="text-sm">${feature.trim()}</div>
                                    </div>
                                `).join('')}
                            </div>
                            <button class="w-full mt-6 py-2 px-4 rounded-lg font-medium ${idx === 1 ? 'bg-blue-600 text-white' : 'border-2 border-gray-300 text-gray-700'}">
                                Choose Plan
                            </button>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
};
