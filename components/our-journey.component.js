// Our Journey Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents['our-journey'] = {
    name: '🗺️ Our Journey',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Our Journey Together" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" value="Our Journey Together" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Journey Description</label>
                <textarea placeholder="From strangers to soulmates, our journey has been magical..." rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Journey Steps (Format: Date | Event | Description, one per line)</label>
                <textarea placeholder="Jan 2020 | First Meeting | We met at the coffee shop on 5th Avenue
Jun 2020 | First Date | Our amazing dinner at the Italian restaurant
Dec 2020 | First Anniversary | Celebrated our love with a romantic getaway" rows="8" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="steps" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fdf2f8" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Timeline Color</label>
                <input type="color" value="#ec4899" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="timelineColor" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const steps = (data.steps || '').split('\n').filter(s => s.trim());
        const stepsHTML = steps.map((step, index) => {
            const parts = step.split('|').map(p => p.trim());
            const date = parts[0] || '';
            const event = parts[1] || '';
            const description = parts[2] || '';
            const isLeft = index % 2 === 0;

            return `
                <div class="relative flex items-center mb-8 ${isLeft ? 'flex-row' : 'flex-row-reverse'}">
                    <div class="flex-1 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}">
                        <div class="bg-white rounded-xl p-6 shadow-sm">
                            <div class="text-sm text-rose-600 font-semibold mb-1">${date}</div>
                            <h3 class="text-xl font-bold text-gray-900 mb-2">${event}</h3>
                            <p class="text-gray-600">${description}</p>
                        </div>
                    </div>
                    <div class="flex-shrink-0 w-4 h-4 rounded-full border-4 z-10" style="border-color: ${style.timelineColor || '#ec4899'}; background: white;"></div>
                    <div class="flex-1"></div>
                </div>
            `;
        }).join('');

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#fdf2f8'}">
                <div class="max-w-4xl mx-auto">
                    <div class="text-center mb-12">
                        <div class="text-5xl mb-4">🗺️</div>
                        <h2 class="text-3xl font-bold text-gray-900 mb-4">${data.title || 'Our Journey Together'}</h2>
                        ${data.description ? `<p class="text-lg text-gray-600">${data.description}</p>` : ''}
                    </div>
                    <div class="relative">
                        <div class="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full" style="background: ${style.timelineColor || '#ec4899'}"></div>
                        ${stepsHTML || '<p class="text-center text-gray-400">Add journey steps to see your timeline...</p>'}
                    </div>
                </div>
            </div>
        `;
    }
};
