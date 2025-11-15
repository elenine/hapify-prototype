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
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#ec4899" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="layout" oninput="updatePreview()">
                    <option value="centered">Centered</option>
                    <option value="card">Card Style</option>
                    <option value="gradient">Gradient Box</option>
                    <option value="minimal">Minimal</option>
                    <option value="split">Split Layout</option>
                    <option value="modern">Modern Pulse</option>
                    <option value="elegant">Elegant Border</option>
                    <option value="playful">Playful</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'centered';
        const bgColor = style.bg || '#fdf2f8';
        const accentColor = style.accent || '#ec4899';

        if (layout === 'card') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-lg mx-auto bg-white rounded-2xl p-8 shadow-lg border-2" style="border-color: ${accentColor}30;">
                        <div class="text-center">
                            <div class="text-5xl mb-4">✉️</div>
                            <h2 class="text-2xl font-bold mb-4">${data.title || 'Please RSVP'}</h2>
                            <p class="text-gray-600 mb-6">${data.message || "Let us know if you can join the celebration"}</p>
                            <button class="text-white px-10 py-4 rounded-xl font-semibold hover:opacity-90 transition shadow-md" style="background: ${accentColor}">
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
                        <div class="rounded-2xl p-8 shadow-2xl text-white text-center" style="background: linear-gradient(135deg, ${accentColor} 0%, ${accentColor}dd 100%);">
                            <div class="text-5xl mb-4">✉️</div>
                            <h2 class="text-3xl font-bold mb-4">${data.title || 'Please RSVP'}</h2>
                            <p class="text-white text-opacity-90 mb-6">${data.message || "Let us know if you can join the celebration"}</p>
                            <button class="bg-white px-10 py-4 rounded-xl font-bold hover:bg-gray-100 transition shadow-lg" style="color: ${accentColor}">
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
                        <div class="w-16 h-1 mx-auto mb-4" style="background: ${accentColor}"></div>
                        <p class="text-gray-600 mb-8 text-lg">${data.message || "Let us know if you can join the celebration"}</p>
                        <button class="border-2 px-8 py-3 rounded-lg font-semibold hover:text-white transition" style="border-color: ${accentColor}; color: ${accentColor}; hover:background: ${accentColor};">
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
                            <div class="p-10 flex items-center justify-center text-white" style="background: linear-gradient(135deg, ${accentColor} 0%, ${accentColor}dd 100%);">
                                <div class="text-center">
                                    <div class="text-7xl mb-4">✉️</div>
                                    <div class="text-2xl font-bold">Join Us!</div>
                                </div>
                            </div>
                            <div class="p-10 flex flex-col justify-center">
                                <h2 class="text-2xl font-bold mb-4">${data.title || 'Please RSVP'}</h2>
                                <p class="text-gray-600 mb-6">${data.message || "Let us know if you can join the celebration"}</p>
                                <button class="text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition w-full" style="background: ${accentColor}">
                                    RSVP Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Modern Pulse
        if (layout === 'modern') {
            return `
                <div class="py-16 px-6" style="background: linear-gradient(135deg, ${accentColor}10 0%, ${bgColor} 100%);">
                    <div class="max-w-lg mx-auto text-center">
                        <div class="inline-block text-6xl mb-6 animate-bounce">✉️</div>
                        <h2 class="text-3xl font-black mb-4" style="color: ${accentColor}">${data.title || 'Please RSVP'}</h2>
                        <p class="text-gray-700 text-lg mb-8 max-w-md mx-auto">${data.message || "Let us know if you can join the celebration"}</p>
                        <button class="text-white px-12 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-transform shadow-2xl" style="background: ${accentColor}">
                            RSVP NOW 🎉
                        </button>
                    </div>
                </div>
            `;
        }

        // Elegant Border
        if (layout === 'elegant') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-lg mx-auto">
                        <div class="border-4 rounded-2xl p-10 bg-white shadow-xl text-center" style="border-color: ${accentColor}">
                            <div class="text-5xl mb-4">✉️</div>
                            <h2 class="text-3xl font-bold mb-3" style="color: ${accentColor}">${data.title || 'Please RSVP'}</h2>
                            <div class="w-24 h-1 mx-auto mb-6" style="background: ${accentColor}; opacity: 0.5;"></div>
                            <p class="text-gray-700 leading-relaxed mb-8">${data.message || "Let us know if you can join the celebration"}</p>
                            <button class="text-white px-10 py-4 rounded-lg font-bold hover:opacity-90 transition shadow-md" style="background: ${accentColor}">
                                Confirm Attendance
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }

        // Playful
        if (layout === 'playful') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-lg mx-auto">
                        <div class="bg-white rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-transform">
                            <div class="text-center">
                                <div class="flex justify-center gap-3 mb-6">
                                    <span class="text-4xl animate-bounce">✉️</span>
                                    <span class="text-4xl animate-bounce" style="animation-delay: 0.1s">🎉</span>
                                    <span class="text-4xl animate-bounce" style="animation-delay: 0.2s">🎈</span>
                                </div>
                                <h2 class="text-2xl font-black mb-4" style="color: ${accentColor}">${data.title || 'We Need to Know!'}</h2>
                                <p class="text-gray-700 mb-8">${data.message || "Let us know if you can join the celebration"}</p>
                                <button class="text-white px-10 py-4 rounded-2xl font-black text-lg hover:scale-110 transition-transform shadow-lg" style="background: linear-gradient(135deg, ${accentColor} 0%, ${accentColor}dd 100%);">
                                    Count Me In! 🙋
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
                    <button class="text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition" style="background: ${accentColor}">
                        RSVP Now
                    </button>
                </div>
            </div>
        `;
    }
};
