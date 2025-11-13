// About Person Component for Farewell Party

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.aboutperson = {
                name: '👤 About Person',
                allowMultiple: false,
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                            <input type="text" placeholder="About Jane" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="title" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Position/Role</label>
                            <input type="text" placeholder="Senior Developer" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="position" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Time at Organization</label>
                            <input type="text" placeholder="5 years" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="duration" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Biography</label>
                            <textarea placeholder="Share about their contributions, personality, and impact..." rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="bio" oninput="updatePreview()"></textarea>
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
                render: (data, style) => `
                    <div class="py-12 px-6" style="background: ${style.bg || '#ffffff'}">
                        <div class="max-w-md mx-auto">
                            <h2 class="text-2xl font-bold text-center mb-6">${data.title || 'About'}</h2>
                            <div class="p-6 bg-violet-50 rounded-lg space-y-3">
                                ${data.position ? `<div class="text-center"><span class="inline-block px-4 py-2 bg-violet-100 rounded-full text-violet-700 font-semibold text-sm">${data.position}</span></div>` : ''}
                                ${data.duration ? `<div class="text-center text-gray-600">${data.duration}</div>` : ''}
                                ${data.bio ? `<p class="text-gray-700 leading-relaxed mt-4">${data.bio}</p>` : ''}
                            </div>
                        </div>
                    </div>
                `
            };
