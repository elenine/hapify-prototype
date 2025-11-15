// Academic Honors Component for Graduation

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.academichonors = {
    name: '🏅 Academic Honors',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Academic Honors & Awards" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="title" value="Academic Honors & Awards" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Introduction</label>
                <textarea placeholder="Celebrating outstanding academic achievements..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="intro" oninput="updatePreview()"></textarea>
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">Primary Honor/Distinction</h4>
                <input type="text" placeholder="Summa Cum Laude" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data mb-2" data-field="honor1" oninput="updatePreview()">
                <textarea placeholder="Description or GPA..." rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="honor1desc" oninput="updatePreview()"></textarea>
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">Additional Honors</h4>
                <textarea placeholder="• Dean's List (4 years)\n• Phi Beta Kappa\n• Departmental Honors in Computer Science\n• Outstanding Research Award" rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="additionalHonors" oninput="updatePreview()"></textarea>
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">Scholarships & Fellowships</h4>
                <textarea placeholder="• Presidential Scholarship\n• Merit Fellowship\n• STEM Research Grant" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="scholarships" oninput="updatePreview()"></textarea>
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">Leadership & Service</h4>
                <textarea placeholder="• Student Government President\n• Volunteer of the Year\n• Community Service Award" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="leadership" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#eef2ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#6366f1" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const bgColor = style.bg || '#eef2ff';
        const accentColor = style.accent || '#6366f1';

        return `
            <div class="py-12 px-6" style="background: ${bgColor};">
                <div class="max-w-3xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="text-6xl mb-4">🏅</div>
                        <h2 class="text-3xl font-bold mb-2">${data.title || 'Academic Honors & Awards'}</h2>
                        ${data.intro ? `<p class="text-gray-600">${data.intro}</p>` : ''}
                    </div>

                    ${data.honor1 ? `
                        <div class="mb-8 text-center">
                            <div class="inline-block p-8 bg-white rounded-2xl shadow-xl">
                                <div class="text-5xl mb-4">🎓</div>
                                <h3 class="text-2xl font-bold mb-2" style="color: ${accentColor};">${data.honor1}</h3>
                                ${data.honor1desc ? `<p class="text-gray-700">${data.honor1desc}</p>` : ''}
                            </div>
                        </div>
                    ` : ''}

                    <div class="grid md:grid-cols-2 gap-6">
                        ${data.additionalHonors ? `
                            <div class="bg-white rounded-xl p-6 shadow-md">
                                <h3 class="font-bold text-lg mb-3 flex items-center gap-2" style="color: ${accentColor};">
                                    <span>⭐</span>
                                    <span>Additional Honors</span>
                                </h3>
                                <div class="text-gray-700 text-sm whitespace-pre-wrap">${data.additionalHonors}</div>
                            </div>
                        ` : ''}

                        ${data.scholarships ? `
                            <div class="bg-white rounded-xl p-6 shadow-md">
                                <h3 class="font-bold text-lg mb-3 flex items-center gap-2" style="color: ${accentColor};">
                                    <span>💰</span>
                                    <span>Scholarships</span>
                                </h3>
                                <div class="text-gray-700 text-sm whitespace-pre-wrap">${data.scholarships}</div>
                            </div>
                        ` : ''}

                        ${data.leadership ? `
                            <div class="bg-white rounded-xl p-6 shadow-md ${!data.scholarships ? 'md:col-span-2' : ''}">
                                <h3 class="font-bold text-lg mb-3 flex items-center gap-2" style="color: ${accentColor};">
                                    <span>👑</span>
                                    <span>Leadership & Service</span>
                                </h3>
                                <div class="text-gray-700 text-sm whitespace-pre-wrap">${data.leadership}</div>
                            </div>
                        ` : ''}
                    </div>

                    ${!data.honor1 && !data.additionalHonors && !data.scholarships && !data.leadership ? `
                        <p class="text-center text-gray-500 py-8">Add academic honors and awards to display here</p>
                    ` : ''}
                </div>
            </div>
        `;
    }
};
