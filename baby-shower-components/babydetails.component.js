// Baby Details Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.babydetails = {
    name: '👶 Baby Details',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Expected Date</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="duedate" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Baby Gender</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="gender" oninput="updatePreview()">
                    <option value="">Select...</option>
                    <option value="boy">Boy</option>
                    <option value="girl">Girl</option>
                    <option value="surprise">Surprise</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Baby Name (if known)</label>
                <input type="text" placeholder="Optional" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="babyname" oninput="updatePreview()">
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
                <h2 class="text-2xl font-bold mb-6 text-center">About Baby</h2>
                <div class="p-6 bg-yellow-50 rounded-lg text-center">
                    <div class="text-4xl mb-3">👶</div>
                    ${data.babyname ? `<div class="font-bold text-lg mb-2">${data.babyname}</div>` : ''}
                    ${data.gender ? `<div class="text-sm text-gray-600 mb-2">${data.gender === 'boy' ? '💙 Baby Boy' : data.gender === 'girl' ? '💗 Baby Girl' : '💛 It\'s a Surprise!'}</div>` : ''}
                    ${data.duedate ? `<div class="text-sm text-gray-600">Expected: ${new Date(data.duedate).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>` : ''}
                </div>
            </div>
        </div>
    `
};
