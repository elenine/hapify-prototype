// Timeline Component for Birth Announcement

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.timeline = {
    name: '📅 Journey Timeline',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Due Date</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="dueDate" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">First Doctor Visit</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="firstVisit" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">When We Found Out</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="foundOut" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Gender Reveal</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="genderReveal" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Actual Birth Date</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="birthDate" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => `
        <div class="py-12 px-6" style="background: ${style.bg || '#ffffff'}">
            <div class="max-w-md mx-auto">
                <div class="text-center text-4xl mb-4">📅</div>
                <h2 class="text-2xl font-bold text-center mb-8">Our Journey</h2>
                <div class="relative">
                    <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-teal-200"></div>
                    <div class="space-y-6 relative">
                        ${data.foundOut ? `
                        <div class="flex items-start gap-4 relative">
                            <div class="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 z-10">1</div>
                            <div class="flex-1 pt-1">
                                <div class="text-sm font-medium text-gray-900">We Found Out</div>
                                <div class="text-xs text-gray-500">${new Date(data.foundOut).toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}</div>
                            </div>
                        </div>` : ''}
                        ${data.firstVisit ? `
                        <div class="flex items-start gap-4 relative">
                            <div class="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 z-10">2</div>
                            <div class="flex-1 pt-1">
                                <div class="text-sm font-medium text-gray-900">First Doctor Visit</div>
                                <div class="text-xs text-gray-500">${new Date(data.firstVisit).toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}</div>
                            </div>
                        </div>` : ''}
                        ${data.genderReveal ? `
                        <div class="flex items-start gap-4 relative">
                            <div class="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 z-10">3</div>
                            <div class="flex-1 pt-1">
                                <div class="text-sm font-medium text-gray-900">Gender Reveal</div>
                                <div class="text-xs text-gray-500">${new Date(data.genderReveal).toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}</div>
                            </div>
                        </div>` : ''}
                        ${data.dueDate ? `
                        <div class="flex items-start gap-4 relative">
                            <div class="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 z-10">4</div>
                            <div class="flex-1 pt-1">
                                <div class="text-sm font-medium text-gray-900">Due Date</div>
                                <div class="text-xs text-gray-500">${new Date(data.dueDate).toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}</div>
                            </div>
                        </div>` : ''}
                        ${data.birthDate ? `
                        <div class="flex items-start gap-4 relative">
                            <div class="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 z-10">🎉</div>
                            <div class="flex-1 pt-1">
                                <div class="text-sm font-bold text-teal-600">Birth Day!</div>
                                <div class="text-xs text-gray-500">${new Date(data.birthDate).toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}</div>
                            </div>
                        </div>` : ''}
                    </div>
                </div>
            </div>
        </div>
    `
};
