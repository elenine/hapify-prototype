// Countdown Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.countdown = {
    name: '⏰ Countdown Timer',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Countdown to Retirement" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Retirement Date</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="retirementDate" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <input type="text" placeholder="Days until the big day!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="message" oninput="updatePreview()">
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
    render: (data, style) => {
        let daysRemaining = 0;
        if (data.retirementDate) {
            const targetDate = new Date(data.retirementDate);
            const today = new Date();
            const diffTime = targetDate - today;
            daysRemaining = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        }

        return `
            <div class="py-12 px-6 text-center" style="background: ${style.bg || '#ecfeff'}">
                <div class="max-w-md mx-auto">
                    <h2 class="text-2xl font-bold mb-6">${data.title || 'Countdown to Retirement'}</h2>
                    <div class="bg-white rounded-lg shadow-lg p-8 mb-4">
                        <div class="text-6xl font-bold text-cyan-600 mb-2">${daysRemaining}</div>
                        <div class="text-xl font-semibold text-gray-700">Days</div>
                    </div>
                    ${data.message ? `<p class="text-gray-600 text-lg">${data.message}</p>` : ''}
                    ${data.retirementDate ? `
                        <p class="text-sm text-gray-500 mt-4">
                            Retirement Date: ${new Date(data.retirementDate).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}
                        </p>
                    ` : ''}
                </div>
            </div>
        `;
    }
};
