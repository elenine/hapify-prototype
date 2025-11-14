// RSVP Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.rsvp = {
    name: '✉️ RSVP',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">RSVP Title</label>
                <input type="text" placeholder="Please RSVP" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea placeholder="Let us know if you can make it..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">RSVP Deadline</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="deadline" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-style" data-style="layout" oninput="updatePreview()">
                    <option value="centered">Centered - Classic</option>
                    <option value="card">Card - Boxed Style</option>
                    <option value="split">Split - Two Column</option>
                    <option value="modern">Modern - Gradient Card</option>
                    <option value="minimal">Minimal - Clean Design</option>
                    <option value="envelope">Envelope - Mail Design</option>
                    <option value="badge">Badge - Circular RSVP</option>
                    <option value="ribbon">Ribbon - Banner Style</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fffbeb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Button Color</label>
                <input type="color" value="#f59e0b" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="buttonColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#fbbf24" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="textColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Button Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-style" data-style="buttonStyle" oninput="updatePreview()">
                    <option value="rounded">Rounded</option>
                    <option value="pill">Pill Shape</option>
                    <option value="square">Square</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'centered';
        const bg = style.bg || '#fffbeb';
        const buttonColor = style.buttonColor || '#f59e0b';
        const accent = style.accent || '#fbbf24';
        const textColor = style.textColor || '#1f2937';
        const buttonStyle = style.buttonStyle || 'rounded';

        const buttonClass = buttonStyle === 'pill' ? 'rounded-full' : buttonStyle === 'square' ? 'rounded' : 'rounded-lg';
        const formattedDeadline = data.deadline ? new Date(data.deadline).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'}) : '';

        switch(layout) {
            case 'card':
                return `
                    <div class="py-12 px-6" style="background: ${bg};">
                        <div class="max-w-md mx-auto">
                            <div class="bg-white rounded-2xl shadow-xl p-8 text-center" style="border-top: 4px solid ${accent};">
                                <div class="text-5xl mb-4">✉️</div>
                                <h2 class="text-2xl font-bold mb-4" style="color: ${textColor};">${data.title || 'Please RSVP'}</h2>
                                <p class="mb-6 opacity-75" style="color: ${textColor};">${data.message || "Let us know if you can join the celebration"}</p>
                                ${data.deadline ? `
                                <div class="mb-6 p-3 rounded-lg" style="background: ${bg}; color: ${textColor};">
                                    <div class="text-xs opacity-60 mb-1">RSVP Deadline</div>
                                    <div class="font-semibold">${formattedDeadline}</div>
                                </div>` : ''}
                                <button class="px-8 py-3 ${buttonClass} font-semibold text-white shadow-lg hover:shadow-xl transition" style="background: ${buttonColor};">
                                    RSVP Now
                                </button>
                            </div>
                        </div>
                    </div>
                `;

            case 'split':
                return `
                    <div class="py-12 px-6" style="background: ${bg};">
                        <div class="max-w-3xl mx-auto">
                            <div class="grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl overflow-hidden shadow-xl">
                                <div class="p-8" style="background: ${accent}; color: white;">
                                    <div class="text-6xl mb-4">✉️</div>
                                    <h2 class="text-3xl font-bold mb-2">${data.title || 'Please RSVP'}</h2>
                                    ${data.deadline ? `
                                    <div class="mt-6 pt-6 border-t border-white border-opacity-30">
                                        <div class="text-sm opacity-75">Deadline</div>
                                        <div class="font-semibold text-lg">${formattedDeadline}</div>
                                    </div>` : ''}
                                </div>
                                <div class="p-8">
                                    <p class="mb-6 text-lg" style="color: ${textColor};">${data.message || "Let us know if you can join the celebration"}</p>
                                    <button class="w-full px-8 py-4 ${buttonClass} font-semibold text-white shadow-lg hover:shadow-xl transition" style="background: ${buttonColor};">
                                        RSVP Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'modern':
                return `
                    <div class="py-12 px-6" style="background: ${bg};">
                        <div class="max-w-md mx-auto">
                            <div class="rounded-3xl p-8 shadow-2xl text-center" style="background: linear-gradient(135deg, ${accent} 0%, ${buttonColor} 100%);">
                                <div class="bg-white bg-opacity-20 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center text-5xl mx-auto mb-6">
                                    ✉️
                                </div>
                                <h2 class="text-3xl font-bold mb-4 text-white">${data.title || 'Please RSVP'}</h2>
                                <div class="bg-white bg-opacity-90 rounded-2xl p-6 mb-6">
                                    <p class="mb-4" style="color: ${textColor};">${data.message || "Let us know if you can join the celebration"}</p>
                                    ${data.deadline ? `
                                    <div class="pt-4 border-t" style="border-color: ${accent};">
                                        <div class="text-xs opacity-60">RSVP by ${formattedDeadline}</div>
                                    </div>` : ''}
                                </div>
                                <button class="px-8 py-4 ${buttonClass} font-bold text-white shadow-xl hover:shadow-2xl transition bg-white" style="color: ${buttonColor};">
                                    RSVP Now
                                </button>
                            </div>
                        </div>
                    </div>
                `;

            case 'minimal':
                return `
                    <div class="py-16 px-6" style="background: ${bg};">
                        <div class="max-w-md mx-auto text-center">
                            <div class="mb-6">
                                <div class="text-4xl mb-3">✉️</div>
                                <h2 class="text-3xl font-light mb-4" style="color: ${textColor}; letter-spacing: 0.05em;">${data.title || 'Please RSVP'}</h2>
                                <div class="h-1 w-16 mx-auto mb-6" style="background: ${accent};"></div>
                            </div>
                            <p class="text-lg mb-8 opacity-75" style="color: ${textColor};">${data.message || "Let us know if you can join the celebration"}</p>
                            ${data.deadline ? `
                            <p class="text-sm mb-6 opacity-60" style="color: ${textColor};">Please respond by ${formattedDeadline}</p>` : ''}
                            <button class="px-10 py-3 ${buttonClass} font-medium text-white border-2 hover:shadow-lg transition" style="background: ${buttonColor}; border-color: ${buttonColor};">
                                RSVP Now
                            </button>
                        </div>
                    </div>
                `;

            case 'envelope':
                return `
                    <div class="py-16 px-6" style="background: ${bg};">
                        <div class="max-w-md mx-auto">
                            <div class="bg-white rounded-lg shadow-2xl overflow-hidden" style="border: 3px solid ${accent};">
                                <div class="relative">
                                    <div class="absolute inset-0 flex items-center justify-center">
                                        <div class="w-0 h-0 border-l-[200px] border-l-transparent border-t-[150px] border-r-[200px] border-r-transparent" style="border-top-color: ${accent};"></div>
                                    </div>
                                    <div class="relative z-10 p-8 text-center">
                                        <div class="text-6xl mb-4">✉️</div>
                                        <h2 class="text-2xl font-bold mb-4" style="color: ${textColor};">${data.title || 'Please RSVP'}</h2>
                                        <p class="mb-6" style="color: ${textColor};">${data.message || "Let us know if you can join the celebration"}</p>
                                        ${data.deadline ? `
                                        <div class="mb-6 inline-block px-4 py-2 rounded-lg" style="background: ${accent}30;">
                                            <div class="text-xs opacity-60">Respond by</div>
                                            <div class="font-semibold">${formattedDeadline}</div>
                                        </div>` : ''}
                                        <div>
                                            <button class="px-8 py-3 ${buttonClass} font-semibold text-white shadow-lg hover:shadow-xl transition" style="background: ${buttonColor};">
                                                Send RSVP
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'badge':
                return `
                    <div class="py-16 px-6" style="background: ${bg};">
                        <div class="max-w-2xl mx-auto text-center">
                            <div class="inline-block mb-8">
                                <div class="w-80 h-80 rounded-full flex items-center justify-center shadow-2xl" style="background: linear-gradient(135deg, ${accent} 0%, ${buttonColor} 100%); border: 12px solid white;">
                                    <div class="text-center">
                                        <div class="text-7xl mb-3">✉️</div>
                                        <h2 class="text-2xl font-bold text-white mb-2">${data.title || 'Please RSVP'}</h2>
                                        ${data.deadline ? `<div class="text-sm text-white opacity-90">by ${formattedDeadline}</div>` : ''}
                                    </div>
                                </div>
                            </div>
                            <p class="text-lg mb-8 max-w-md mx-auto" style="color: ${textColor};">${data.message || "Let us know if you can join the celebration"}</p>
                            <button class="px-10 py-4 ${buttonClass} font-bold text-white shadow-xl hover:shadow-2xl transition" style="background: ${buttonColor};">
                                RSVP Now
                            </button>
                        </div>
                    </div>
                `;

            case 'ribbon':
                return `
                    <div class="py-12 px-6" style="background: ${bg};">
                        <div class="max-w-2xl mx-auto">
                            <div class="py-6 px-8 text-center font-bold text-3xl shadow-xl mb-8" style="background: ${buttonColor}; color: white; clip-path: polygon(0 0, 95% 0, 100% 50%, 95% 100%, 0 100%, 5% 50%);">
                                <div class="flex items-center justify-center gap-4">
                                    <span class="text-5xl">✉️</span>
                                    <span>${data.title || 'Please RSVP'}</span>
                                </div>
                            </div>
                            <div class="bg-white rounded-2xl shadow-xl p-8 text-center">
                                <p class="text-lg mb-6" style="color: ${textColor};">${data.message || "Let us know if you can join the celebration"}</p>
                                ${data.deadline ? `
                                <div class="mb-6 inline-block px-6 py-3 rounded-lg border-2" style="border-color: ${accent}; background: ${accent}20;">
                                    <div class="text-xs opacity-60 mb-1">RSVP Deadline</div>
                                    <div class="font-bold">${formattedDeadline}</div>
                                </div>` : ''}
                                <div>
                                    <button class="px-10 py-4 ${buttonClass} font-bold text-white shadow-lg hover:shadow-xl transition border-2" style="background: ${accent}; border-color: ${buttonColor};">
                                        Send Your RSVP
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'centered':
            default:
                return `
                    <div class="py-12 px-6 text-center" style="background: ${bg};">
                        <div class="max-w-md mx-auto">
                            <div class="text-5xl mb-4">✉️</div>
                            <h2 class="text-2xl font-bold mb-4" style="color: ${textColor};">${data.title || 'Please RSVP'}</h2>
                            <p class="mb-6" style="color: ${textColor}; opacity: 0.75;">${data.message || "Let us know if you can join the celebration"}</p>
                            ${data.deadline ? `<p class="text-sm mb-6" style="color: ${textColor}; opacity: 0.6;">Deadline: ${formattedDeadline}</p>` : ''}
                            <button class="px-8 py-3 ${buttonClass} font-semibold text-white hover:shadow-lg transition" style="background: ${buttonColor};">
                                RSVP Now
                            </button>
                        </div>
                    </div>
                `;
        }
    }
};
