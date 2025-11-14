// RSVP Component for Wedding

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.rsvp = {
    name: '✉️ RSVP',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">RSVP Title</label>
                <input type="text" placeholder="Please RSVP" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea placeholder="We'd love to have you join us..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="centered">Centered Simple</option>
                    <option value="card">Card Style</option>
                    <option value="split">Split Layout</option>
                    <option value="elegant">Elegant Form</option>
                    <option value="minimal">Minimal Call-to-Action</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#faf5ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Button Color</label>
                <input type="color" value="#9333ea" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="buttonColor" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'centered';
        const bgColor = style.bg || '#faf5ff';
        const buttonColor = style.buttonColor || '#9333ea';
        const title = data.title || 'Please RSVP';
        const message = data.message || "We'd love to have you join us on our special day";

        switch(layout) {
            case 'card':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        <div class="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
                            <div class="p-8 text-center" style="background: linear-gradient(135deg, ${buttonColor}15 0%, ${buttonColor}05 100%)">
                                <div class="text-5xl mb-4">✉️</div>
                                <h2 class="text-3xl font-bold mb-4" style="color: ${buttonColor}">${title}</h2>
                                <p class="text-gray-700 mb-6 leading-relaxed">${message}</p>
                                <button class="px-10 py-4 rounded-lg font-bold text-white shadow-lg hover:shadow-xl transition text-lg" style="background: ${buttonColor}">
                                    RSVP Now
                                </button>
                            </div>
                        </div>
                    </div>
                `;

            case 'split':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        <div class="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div class="grid grid-cols-1 md:grid-cols-2">
                                <div class="p-12 flex items-center justify-center" style="background: ${buttonColor}; color: white;">
                                    <div class="text-center">
                                        <div class="text-6xl mb-6">✉️</div>
                                        <h2 class="text-3xl font-bold mb-4">${title}</h2>
                                        <p class="text-lg opacity-90">${message}</p>
                                    </div>
                                </div>
                                <div class="p-12 flex items-center justify-center">
                                    <div class="w-full">
                                        <div class="space-y-4">
                                            <input type="text" placeholder="Your Name" class="w-full px-4 py-3 border rounded-lg" />
                                            <input type="email" placeholder="Email" class="w-full px-4 py-3 border rounded-lg" />
                                            <select class="w-full px-4 py-3 border rounded-lg">
                                                <option>Will Attend</option>
                                                <option>Cannot Attend</option>
                                            </select>
                                            <button class="w-full py-3 rounded-lg font-bold text-white" style="background: ${buttonColor}">
                                                Submit RSVP
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'elegant':
                return `
                    <div class="py-16 px-6" style="background: ${bgColor}">
                        <div class="max-w-3xl mx-auto">
                            <div class="text-center mb-10">
                                <div class="inline-block p-4 rounded-full mb-4" style="background: ${buttonColor}20">
                                    <span class="text-5xl">✉️</span>
                                </div>
                                <h2 class="text-4xl font-serif font-bold mb-4" style="color: ${buttonColor}">${title}</h2>
                                <p class="text-gray-600 text-lg">${message}</p>
                            </div>
                            <div class="bg-white rounded-xl shadow-lg p-8 border-2" style="border-color: ${buttonColor}30">
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <input type="text" placeholder="First Name" class="px-4 py-3 border rounded-lg" />
                                    <input type="text" placeholder="Last Name" class="px-4 py-3 border rounded-lg" />
                                </div>
                                <input type="email" placeholder="Email Address" class="w-full px-4 py-3 border rounded-lg mb-4" />
                                <select class="w-full px-4 py-3 border rounded-lg mb-6">
                                    <option>I will attend</option>
                                    <option>I cannot attend</option>
                                </select>
                                <button class="w-full py-4 rounded-lg font-bold text-white text-lg" style="background: ${buttonColor}">
                                    Send RSVP
                                </button>
                            </div>
                        </div>
                    </div>
                `;

            case 'minimal':
                return `
                    <div class="py-20 px-6" style="background: ${bgColor}">
                        <div class="max-w-2xl mx-auto text-center">
                            <h2 class="text-4xl font-bold mb-6" style="color: ${buttonColor}">${title}</h2>
                            <p class="text-xl text-gray-700 mb-10 leading-relaxed">${message}</p>
                            <div class="flex items-center justify-center gap-4">
                                <div class="h-px flex-1 max-w-xs" style="background: ${buttonColor}30"></div>
                                <button class="px-12 py-4 rounded-full font-bold text-white shadow-lg hover:shadow-2xl transition transform hover:scale-105" style="background: ${buttonColor}">
                                    RSVP Now →
                                </button>
                                <div class="h-px flex-1 max-w-xs" style="background: ${buttonColor}30"></div>
                            </div>
                        </div>
                    </div>
                `;

            case 'centered':
            default:
                return `
                    <div class="py-12 px-6 text-center" style="background: ${bgColor}">
                        <div class="max-w-md mx-auto">
                            <h2 class="text-2xl font-bold mb-4">${title}</h2>
                            <p class="text-gray-600 mb-6">${message}</p>
                            <button class="px-8 py-3 rounded-lg font-semibold text-white hover:opacity-90 transition" style="background: ${buttonColor}">
                                RSVP Now
                            </button>
                        </div>
                    </div>
                `;
        }
    }`
};
