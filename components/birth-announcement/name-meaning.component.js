// Name Meaning Component for Birth Announcement

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.nameMeaning = {
    name: '✨ Name Meaning',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Baby's Full Name</label>
                <input type="text" placeholder="Emma Rose Johnson" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="fullName" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">First Name Meaning</label>
                <textarea placeholder="Emma means 'universal' or 'whole'..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="firstNameMeaning" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Middle Name Meaning</label>
                <textarea placeholder="Rose symbolizes love and beauty..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="middleNameMeaning" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Why We Chose This Name</label>
                <textarea placeholder="We chose Emma Rose because..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="whyChosen" oninput="updatePreview()"></textarea>
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
                <div class="text-center text-4xl mb-4">✨</div>
                <h2 class="text-2xl font-bold text-center mb-6">What's in a Name?</h2>
                ${data.fullName ? `<h3 class="text-xl font-semibold text-center text-teal-600 mb-6">${data.fullName}</h3>` : ''}
                <div class="space-y-4">
                    ${data.firstNameMeaning ? `
                    <div class="p-4 bg-teal-50 rounded-lg">
                        <div class="text-xs text-gray-500 mb-1">First Name</div>
                        <p class="text-sm text-gray-700">${data.firstNameMeaning}</p>
                    </div>` : ''}
                    ${data.middleNameMeaning ? `
                    <div class="p-4 bg-teal-50 rounded-lg">
                        <div class="text-xs text-gray-500 mb-1">Middle Name</div>
                        <p class="text-sm text-gray-700">${data.middleNameMeaning}</p>
                    </div>` : ''}
                    ${data.whyChosen ? `
                    <div class="p-4 bg-teal-50 rounded-lg">
                        <div class="text-xs text-gray-500 mb-1">Our Story</div>
                        <p class="text-sm text-gray-700">${data.whyChosen}</p>
                    </div>` : ''}
                </div>
            </div>
        </div>
    `
};
