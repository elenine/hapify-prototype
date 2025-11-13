// Graduate Info Component for Graduation Ceremony

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.graduateinfo = {
    name: '👨‍🎓 Graduate Info',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Degree/Program</label>
                <input type="text" placeholder="Bachelor of Science in Computer Science" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="degree" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">School/University</label>
                <input type="text" placeholder="State University" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="school" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Graduation Year</label>
                <input type="text" placeholder="2024" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="year" oninput="updatePreview()">
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
            <div class="max-w-md mx-auto text-center">
                <h2 class="text-2xl font-bold mb-6">Graduate Information</h2>
                <div class="p-6 bg-indigo-50 rounded-lg">
                    <div class="text-4xl mb-3">🎓</div>
                    ${data.degree ? `<div class="font-semibold text-lg mb-2">${data.degree}</div>` : ''}
                    ${data.school ? `<div class="text-gray-600 mb-2">${data.school}</div>` : ''}
                    ${data.year ? `<div class="text-sm text-gray-500">Class of ${data.year}</div>` : ''}
                </div>
            </div>
        </div>
    `
};
