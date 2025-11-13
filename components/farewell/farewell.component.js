// Reason for Farewell Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.farewell = {
                name: '✈️ Reason for Farewell',
                allowMultiple: false,
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                            <input type="text" placeholder="New Adventures Await" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="title" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Reason</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="reason" oninput="updatePreview()">
                                <option value="">Select reason</option>
                                <option value="new-job">New Job Opportunity</option>
                                <option value="moving">Moving to New City</option>
                                <option value="career-change">Career Change</option>
                                <option value="retirement">Retirement</option>
                                <option value="education">Pursuing Education</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Details</label>
                            <textarea placeholder="Share details about their next chapter..." rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="details" oninput="updatePreview()"></textarea>
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#faf5ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                render: (data, style) => {
                    const reasonLabels = {
                        'new-job': '🎯 New Job Opportunity',
                        'moving': '🏠 Moving to New City',
                        'career-change': '🔄 Career Change',
                        'retirement': '🌴 Retirement',
                        'education': '🎓 Pursuing Education',
                        'other': '✨ New Adventure'
                    };
                    return `
                        <div class="py-12 px-6" style="background: ${style.bg || '#faf5ff'}">
                            <div class="max-w-md mx-auto text-center">
                                <h2 class="text-2xl font-bold mb-6">${data.title || 'New Adventures Await'}</h2>
                                ${data.reason ? `<div class="text-xl font-semibold text-violet-600 mb-4">${reasonLabels[data.reason] || data.reason}</div>` : ''}
                                ${data.details ? `<p class="text-gray-700 leading-relaxed">${data.details}</p>` : ''}
                            </div>
                        </div>
                    `;
                }
            };
