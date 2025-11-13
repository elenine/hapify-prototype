// Years of Service Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.yearsofservice = {
    name: '📊 Years of Service',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Years of Service</label>
                <input type="number" placeholder="30" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="years" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="startdate" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Retirement Date</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="retiredate" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Company/Organization</label>
                <input type="text" placeholder="ABC Corporation" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="company" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ecfeff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => `
        <div class="py-12 px-6" style="background: ${style.bg || '#ecfeff'}">
            <div class="max-w-md mx-auto text-center">
                <h2 class="text-2xl font-bold mb-6">Years of Service</h2>
                <div class="p-8 bg-white rounded-lg shadow-sm">
                    <div class="text-6xl font-bold text-cyan-600 mb-2">${data.years || '0'}</div>
                    <div class="text-xl font-semibold mb-4">Years of Dedication</div>
                    ${data.company ? `<div class="text-lg text-gray-700 mb-4">${data.company}</div>` : ''}
                    ${data.startdate ? `<div class="text-sm text-gray-600">Started: ${new Date(data.startdate).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>` : ''}
                    ${data.retiredate ? `<div class="text-sm text-gray-600">Retiring: ${new Date(data.retiredate).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>` : ''}
                </div>
            </div>
        </div>
    `
};
