// RSVP Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.rsvp = {
    name: '✉️ RSVP',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">RSVP Title</label>
                <input type="text" placeholder="Join Our Celebration" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea placeholder="Please let us know if you can join us..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">RSVP Deadline</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="deadline" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">RSVP Layout</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="centered">Centered Simple</option>
                    <option value="card">Card Style</option>
                    <option value="gradient">Gradient Background</option>
                    <option value="form">Form Style</option>
                    <option value="elegant">Elegant Classic</option>
                    <option value="modern">Modern Minimal</option>
                    <option value="interactive">Interactive Buttons</option>
                    <option value="invitation">Invitation Style</option>
                    <option value="badge">Badge Design</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ecfeff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Button Color</label>
                <input type="color" value="#06b6d4" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="button" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'centered';
        const bgColor = style.bg || '#ecfeff';
        const buttonColor = style.button || '#06b6d4';
        const textColor = style.text || '#1f2937';
        const deadlineFormatted = data.deadline ? new Date(data.deadline).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'}) : '';

        switch(layout) {
            case 'centered':
                return `
                    <div class="py-12 px-6 text-center" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto">
                            <h2 class="text-2xl font-bold mb-4">${data.title || 'Please RSVP'}</h2>
                            <p class="opacity-80 mb-6">${data.message || "Let us know if you can join the celebration"}</p>
                            ${data.deadline ? `<p class="text-sm opacity-70 mb-6">Please respond by ${deadlineFormatted}</p>` : ''}
                            <button class="text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition shadow-lg" style="background: ${buttonColor};">
                                RSVP Now
                            </button>
                        </div>
                    </div>
                `;

            case 'card':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto">
                            <div class="bg-white rounded-2xl shadow-xl p-8 text-center" style="border-top: 4px solid ${buttonColor};">
                                <div class="text-5xl mb-4">✉️</div>
                                <h2 class="text-2xl font-bold mb-3">${data.title || 'Join Us'}</h2>
                                <p class="opacity-80 mb-4">${data.message || "Let us know if you can join the celebration"}</p>
                                ${data.deadline ? `
                                <div class="inline-block px-4 py-2 rounded-full mb-6" style="background: ${buttonColor}20; color: ${buttonColor};">
                                    <span class="text-sm font-medium">RSVP by ${deadlineFormatted}</span>
                                </div>` : ''}
                                <button class="w-full text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition shadow-lg" style="background: ${buttonColor};">
                                    Confirm Attendance
                                </button>
                            </div>
                        </div>
                    </div>
                `;

            case 'gradient':
                return `
                    <div class="py-16 px-6 text-center" style="background: linear-gradient(135deg, ${bgColor} 0%, ${buttonColor}30 100%); color: ${textColor};">
                        <div class="max-w-md mx-auto">
                            <div class="mb-6">
                                <div class="inline-block p-4 rounded-full mb-4" style="background: ${buttonColor}20;">
                                    <span class="text-5xl">✉️</span>
                                </div>
                            </div>
                            <h2 class="text-3xl font-bold mb-4">${data.title || 'RSVP'}</h2>
                            <p class="text-lg opacity-90 mb-4">${data.message || "Let us know if you can join the celebration"}</p>
                            ${data.deadline ? `<p class="text-sm opacity-75 mb-6">Deadline: ${deadlineFormatted}</p>` : ''}
                            <button class="text-white px-10 py-4 rounded-full font-bold hover:shadow-2xl transition transform hover:scale-105 shadow-xl" style="background: ${buttonColor};">
                                🎉 I'll Be There!
                            </button>
                        </div>
                    </div>
                `;

            case 'form':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto">
                            <div class="text-center mb-8">
                                <h2 class="text-2xl font-bold mb-2">${data.title || 'RSVP'}</h2>
                                <p class="opacity-80">${data.message || "Let us know if you can join the celebration"}</p>
                            </div>
                            <div class="bg-white rounded-xl shadow-lg p-6 space-y-4">
                                ${data.deadline ? `
                                <div class="text-center pb-4 border-b" style="border-color: ${buttonColor}20;">
                                    <span class="text-sm font-medium" style="color: ${buttonColor};">Please respond by ${deadlineFormatted}</span>
                                </div>` : ''}
                                <div>
                                    <label class="block text-sm font-medium mb-2">Your Name</label>
                                    <input type="text" placeholder="Enter your name" class="w-full px-4 py-2 border rounded-lg" style="border-color: ${buttonColor}40;">
                                </div>
                                <div>
                                    <label class="block text-sm font-medium mb-2">Email</label>
                                    <input type="email" placeholder="your@email.com" class="w-full px-4 py-2 border rounded-lg" style="border-color: ${buttonColor}40;">
                                </div>
                                <div>
                                    <label class="block text-sm font-medium mb-2">Attending?</label>
                                    <div class="flex gap-3">
                                        <button class="flex-1 py-3 rounded-lg font-medium transition" style="background: ${buttonColor}20; color: ${buttonColor};">Yes</button>
                                        <button class="flex-1 py-3 rounded-lg font-medium transition border" style="border-color: ${buttonColor}40; color: ${textColor};">No</button>
                                    </div>
                                </div>
                                <button class="w-full text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition shadow-md" style="background: ${buttonColor};">
                                    Submit RSVP
                                </button>
                            </div>
                        </div>
                    </div>
                `;

            case 'elegant':
                return `
                    <div class="py-16 px-6 text-center" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto">
                            <div class="mb-8">
                                <div class="inline-block">
                                    <div class="flex justify-center gap-1 mb-4">
                                        <div class="w-2 h-2 rounded-full" style="background: ${buttonColor};"></div>
                                        <div class="w-2 h-2 rounded-full" style="background: ${buttonColor};"></div>
                                        <div class="w-2 h-2 rounded-full" style="background: ${buttonColor};"></div>
                                    </div>
                                    <h2 class="text-2xl font-serif mb-3">${data.title || 'We Hope You Can Join Us'}</h2>
                                    <div class="w-24 h-0.5 mx-auto" style="background: ${buttonColor};"></div>
                                </div>
                            </div>
                            <p class="text-base font-serif italic opacity-80 mb-6">${data.message || "Your presence would mean the world to us"}</p>
                            ${data.deadline ? `
                            <div class="mb-6">
                                <p class="text-xs uppercase tracking-widest mb-1" style="color: ${buttonColor};">Kindly Respond By</p>
                                <p class="text-sm font-semibold">${deadlineFormatted}</p>
                            </div>` : ''}
                            <button class="text-white px-10 py-3 rounded-lg font-serif font-medium hover:shadow-xl transition shadow-md" style="background: ${buttonColor};">
                                Send RSVP
                            </button>
                            <p class="text-xs mt-6 opacity-60">We look forward to celebrating with you</p>
                        </div>
                    </div>
                `;

            default:
                return `
                    <div class="py-12 px-6 text-center" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto">
                            <h2 class="text-2xl font-bold mb-4">${data.title || 'Please RSVP'}</h2>
                            <p class="opacity-80 mb-6">${data.message || "Let us know if you can join the celebration"}</p>
                            ${data.deadline ? `<p class="text-sm opacity-70 mb-6">Please respond by ${deadlineFormatted}</p>` : ''}
                            <button class="text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition shadow-lg" style="background: ${buttonColor};">
                                RSVP Now
                            </button>
                        </div>
                    </div>
                `;
        }
    }
};
