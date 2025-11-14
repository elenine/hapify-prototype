// RSVP Component for Birthday Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.rsvp = {
    name: '✉️ RSVP',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">RSVP Title</label>
                <input type="text" placeholder="Please RSVP" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea placeholder="Let us know if you can join..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fdf2f8" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="layout" oninput="updatePreview()">
                    <option value="centered">Centered</option>
                    <option value="card">Card Style</option>
                    <option value="gradient">Gradient Box</option>
                    <option value="minimal">Minimal</option>
                    <option value="split">Split Layout</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'centered';
        const bgColor = style.bg || '#fdf2f8';

        if (layout === 'card') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-lg mx-auto bg-white rounded-2xl p-8 shadow-lg border-2 border-pink-200">
                        <div class="text-center">
                            <div class="text-5xl mb-4">✉️</div>
                            <h2 class="text-2xl font-bold mb-4">${data.title || 'Please RSVP'}</h2>
                            <p class="text-gray-600 mb-6">${data.message || "Let us know if you can join the celebration"}</p>
                            <button class="bg-pink-600 text-white px-10 py-4 rounded-xl font-semibold hover:bg-pink-700 transition shadow-md">
                                RSVP Now
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'gradient') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-lg mx-auto">
                        <div class="bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-8 shadow-2xl text-white text-center">
                            <div class="text-5xl mb-4">✉️</div>
                            <h2 class="text-3xl font-bold mb-4">${data.title || 'Please RSVP'}</h2>
                            <p class="text-white text-opacity-90 mb-6">${data.message || "Let us know if you can join the celebration"}</p>
                            <button class="bg-white text-pink-600 px-10 py-4 rounded-xl font-bold hover:bg-gray-100 transition shadow-lg">
                                RSVP Now
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'minimal') {
            return `
                <div class="py-16 px-6" style="background: ${bgColor}">
                    <div class="max-w-md mx-auto text-center">
                        <h2 class="text-2xl font-bold mb-3">${data.title || 'Please RSVP'}</h2>
                        <div class="w-16 h-1 bg-pink-400 mx-auto mb-4"></div>
                        <p class="text-gray-600 mb-8 text-lg">${data.message || "Let us know if you can join the celebration"}</p>
                        <button class="border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-600 hover:text-white transition">
                            RSVP Now
                        </button>
                    </div>
                </div>
            `;
        }

        if (layout === 'split') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-3xl mx-auto bg-white rounded-2xl overflow-hidden shadow-lg">
                        <div class="grid md:grid-cols-2 gap-0">
                            <div class="bg-gradient-to-br from-pink-400 to-pink-600 p-10 flex items-center justify-center text-white">
                                <div class="text-center">
                                    <div class="text-7xl mb-4">✉️</div>
                                    <div class="text-2xl font-bold">Join Us!</div>
                                </div>
                            </div>
                            <div class="p-10 flex flex-col justify-center">
                                <h2 class="text-2xl font-bold mb-4">${data.title || 'Please RSVP'}</h2>
                                <p class="text-gray-600 mb-6">${data.message || "Let us know if you can join the celebration"}</p>
                                <button class="bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition w-full">
                                    RSVP Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Centered (default)
        return `
            <div class="py-12 px-6 text-center" style="background: ${bgColor}">
                <div class="max-w-md mx-auto">
                    <h2 class="text-2xl font-bold mb-4">${data.title || 'Please RSVP'}</h2>
                    <p class="text-gray-600 mb-6">${data.message || "Let us know if you can join the celebration"}</p>
                    <button class="bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition">
                        RSVP Now
                    </button>
                </div>
            </div>
        `;
    }
};
