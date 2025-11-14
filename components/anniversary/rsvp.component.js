// RSVP Component for Anniversary Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.rsvp = {
    name: '✉️ RSVP',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">RSVP Title</label>
                <input type="text" placeholder="Join Our Celebration" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea placeholder="Please let us know if you can join us..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">RSVP Deadline</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="deadline" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="centered">Centered - Simple CTA</option>
                    <option value="card">Card - Boxed Form</option>
                    <option value="split">Split - Text & Button</option>
                    <option value="minimal">Minimal - Clean Design</option>
                    <option value="bold">Bold - Eye-Catching</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Button Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="buttonStyle" onchange="updatePreview()">
                    <option value="rounded">Rounded</option>
                    <option value="pill">Pill Shaped</option>
                    <option value="sharp">Sharp Corners</option>
                    <option value="outline">Outline</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Button Color</label>
                <input type="color" value="#dc2626" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="buttonColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef2f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Alignment</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="textAlign" onchange="updatePreview()">
                    <option value="center">Center</option>
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'centered';
        const buttonStyle = style.buttonStyle || 'rounded';
        const buttonColor = style.buttonColor || '#dc2626';
        const bg = style.bg || '#fef2f2';
        const textAlign = style.textAlign || 'center';

        const buttonClasses = {
            rounded: 'rounded-lg',
            pill: 'rounded-full',
            sharp: 'rounded-none',
            outline: 'rounded-lg border-2'
        };

        const deadlineStr = data.deadline ? new Date(data.deadline).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'}) : '';

        const buttonElement = (btnStyle) => {
            if (btnStyle === 'outline') {
                return `<button class="${buttonClasses[buttonStyle]} px-8 py-3 font-semibold transition" style="border-color: ${buttonColor}; color: ${buttonColor}; background: transparent;">
                    RSVP Now
                </button>`;
            }
            return `<button class="${buttonClasses[buttonStyle]} px-8 py-3 font-semibold text-white transition hover:opacity-90" style="background: ${buttonColor}">
                RSVP Now
            </button>`;
        };

        // Centered Layout
        if (layout === 'centered') {
            return `
                <div class="py-12 px-6 text-${textAlign}" style="background: ${bg}">
                    <div class="max-w-md mx-auto">
                        <h2 class="text-2xl font-bold mb-4">${data.title || 'Please RSVP'}</h2>
                        <p class="text-gray-600 mb-6">${data.message || "Let us know if you can join our celebration"}</p>
                        ${deadlineStr ? `<p class="text-sm text-gray-500 mb-6">Please respond by ${deadlineStr}</p>` : ''}
                        ${buttonElement(buttonStyle)}
                    </div>
                </div>
            `;
        }

        // Card Layout
        if (layout === 'card') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 text-${textAlign}">
                        <div class="text-4xl mb-4">✉️</div>
                        <h2 class="text-2xl font-bold mb-4">${data.title || 'Please RSVP'}</h2>
                        <p class="text-gray-600 mb-6">${data.message || "Let us know if you can join our celebration"}</p>
                        ${deadlineStr ? `<div class="mb-6 p-3 bg-gray-50 rounded-lg">
                            <p class="text-xs uppercase tracking-wider text-gray-500 mb-1">Deadline</p>
                            <p class="text-sm font-semibold">${deadlineStr}</p>
                        </div>` : ''}
                        ${buttonElement(buttonStyle)}
                    </div>
                </div>
            `;
        }

        // Split Layout
        if (layout === 'split') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                        <div class="text-${textAlign === 'center' ? 'center md:text-left' : textAlign}">
                            <h2 class="text-3xl font-bold mb-4">${data.title || 'Please RSVP'}</h2>
                            <p class="text-gray-600 mb-4">${data.message || "Let us know if you can join our celebration"}</p>
                            ${deadlineStr ? `<p class="text-sm text-gray-500">Deadline: ${deadlineStr}</p>` : ''}
                        </div>
                        <div class="text-${textAlign === 'center' ? 'center md:text-right' : textAlign}">
                            ${buttonElement(buttonStyle)}
                        </div>
                    </div>
                </div>
            `;
        }

        // Minimal Layout
        if (layout === 'minimal') {
            return `
                <div class="py-16 px-6" style="background: ${bg}">
                    <div class="max-w-xl mx-auto text-center border-t-2 border-b-2 py-12" style="border-color: ${buttonColor}33">
                        <h2 class="text-2xl font-light tracking-wide mb-6">${data.title || 'Please RSVP'}</h2>
                        <p class="text-gray-600 font-light mb-8">${data.message || "Let us know if you can join our celebration"}</p>
                        ${deadlineStr ? `<p class="text-xs uppercase tracking-widest text-gray-400 mb-8">${deadlineStr}</p>` : ''}
                        ${buttonElement(buttonStyle)}
                    </div>
                </div>
            `;
        }

        // Bold Layout
        if (layout === 'bold') {
            return `
                <div class="py-16 px-6 relative overflow-hidden" style="background: linear-gradient(135deg, ${buttonColor} 0%, ${buttonColor}dd 100%);">
                    <div class="absolute inset-0 opacity-10" style="background-image: repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.5) 35px, rgba(255,255,255,.5) 70px);"></div>
                    <div class="max-w-md mx-auto text-center text-white relative z-10">
                        <div class="text-5xl mb-4">✉️</div>
                        <h2 class="text-3xl font-bold mb-4">${data.title || 'Please RSVP'}</h2>
                        <p class="text-white opacity-90 mb-8">${data.message || "Let us know if you can join our celebration"}</p>
                        ${deadlineStr ? `<p class="text-sm mb-8 opacity-75">Respond by ${deadlineStr}</p>` : ''}
                        <button class="${buttonClasses[buttonStyle]} px-10 py-4 font-bold bg-white transition hover:shadow-xl" style="color: ${buttonColor}">
                            RSVP Now
                        </button>
                    </div>
                </div>
            `;
        }

        // Default - Centered
        return `
            <div class="py-12 px-6 text-center" style="background: ${bg}">
                <div class="max-w-md mx-auto">
                    <h2 class="text-2xl font-bold mb-4">${data.title || 'Please RSVP'}</h2>
                    <p class="text-gray-600 mb-6">${data.message || "Let us know if you can join our celebration"}</p>
                    ${deadlineStr ? `<p class="text-sm text-gray-500 mb-6">Please respond by ${deadlineStr}</p>` : ''}
                    ${buttonElement(buttonStyle)}
                </div>
            </div>
        `;
    }
};
