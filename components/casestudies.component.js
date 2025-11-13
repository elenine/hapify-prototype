// Case Studies Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.casestudies = {
    name: '📚 Case Studies',
    allowMultiple: true,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Case Studies" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="title" value="Case Studies" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Subtitle</label>
                <input type="text" placeholder="Explore our successful projects" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="subtitle" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Case Studies</label>
                <div data-items-container="caseStudies" class="space-y-4">
                    <!-- Dynamic case studies will be added here -->
                </div>
                <button type="button" onclick="addDynamicItem('${sectionId}', 'caseStudies')" class="mt-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition">
                    + Add Case Study
                </button>
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
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#f9fafb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const studies = Array.from(document.querySelectorAll(`[data-items-container="caseStudies"] .dynamic-item`)).map(item => ({
            title: item.querySelector('[data-field="caseTitle"]')?.value || '',
            client: item.querySelector('[data-field="caseClient"]')?.value || '',
            challenge: item.querySelector('[data-field="caseChallenge"]')?.value || '',
            solution: item.querySelector('[data-field="caseSolution"]')?.value || '',
            result: item.querySelector('[data-field="caseResult"]')?.value || ''
        }));

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#ffffff'}; color: ${style.text || '#1f2937'};">
                <div class="max-w-4xl mx-auto">
                    <h2 class="text-3xl font-bold mb-2 text-center">${data.title || 'Case Studies'}</h2>
                    ${data.subtitle ? `<p class="text-center text-gray-600 mb-8">${data.subtitle}</p>` : ''}
                    <div class="space-y-6">
                        ${studies.length > 0 ? studies.map(study => `
                            <div class="rounded-lg p-6 shadow-sm" style="background: ${style.cardBg || '#f9fafb'};">
                                <div class="flex items-start justify-between mb-4">
                                    <h3 class="text-2xl font-bold">${study.title}</h3>
                                    ${study.client ? `<span class="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">${study.client}</span>` : ''}
                                </div>
                                <div class="grid md:grid-cols-3 gap-4">
                                    ${study.challenge ? `
                                        <div>
                                            <div class="font-semibold text-sm mb-1">💡 Challenge</div>
                                            <p class="text-sm text-gray-600">${study.challenge}</p>
                                        </div>
                                    ` : ''}
                                    ${study.solution ? `
                                        <div>
                                            <div class="font-semibold text-sm mb-1">🛠️ Solution</div>
                                            <p class="text-sm text-gray-600">${study.solution}</p>
                                        </div>
                                    ` : ''}
                                    ${study.result ? `
                                        <div>
                                            <div class="font-semibold text-sm mb-1">✅ Result</div>
                                            <p class="text-sm text-gray-600">${study.result}</p>
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                        `).join('') : '<p class="text-center text-gray-500">No case studies added yet</p>'}
                    </div>
                </div>
            </div>
        `;
    }
};
