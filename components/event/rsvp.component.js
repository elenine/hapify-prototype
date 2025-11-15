// RSVP Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.rsvp = {
    name: '✉️ RSVP',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">RSVP Title</label>
                <input type="text" placeholder="Register Now" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea placeholder="Secure your spot today..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">RSVP Deadline</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="deadline" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="layoutStyle" onchange="updatePreview()">
                    <option value="simple">Simple - Clean & centered</option>
                    <option value="card">Card - Boxed design</option>
                    <option value="banner">Banner - Full width</option>
                    <option value="gradient">Gradient - Colorful background</option>
                    <option value="minimal">Minimal - Text focused</option>
                    <option value="split">Split - Two column</option>
                    <option value="callout">Callout - Attention grabbing</option>
                    <option value="modern">Modern - Contemporary</option>
                    <option value="urgent">Urgent - High emphasis</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Secondary Color (for gradients)</label>
                <input type="color" value="#f0fdf4" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="secondaryBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Button Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="buttonStyle" onchange="updatePreview()">
                    <option value="solid">Solid - Filled</option>
                    <option value="outline">Outline - Border only</option>
                    <option value="gradient">Gradient - Color blend</option>
                    <option value="rounded">Rounded - Pill shape</option>
                    <option value="modern">Modern - Elevated</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Button Color</label>
                <input type="color" value="#059669" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="buttonColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Button Text Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="buttonTextColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Button Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="buttonSize" onchange="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="xlarge">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Animation Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="animation" onchange="updatePreview()">
                    <option value="none">No Animation</option>
                    <option value="fade">Fade In</option>
                    <option value="slide">Slide Up</option>
                    <option value="zoom">Zoom In</option>
                    <option value="pulse">Pulse</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Shadow Effect</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">No Shadow</option>
                    <option value="small">Small</option>
                    <option value="medium" selected>Medium</option>
                    <option value="large">Large</option>
                    <option value="xl">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Spacing</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="spacing" onchange="updatePreview()">
                    <option value="compact">Compact</option>
                    <option value="normal" selected>Normal</option>
                    <option value="relaxed">Relaxed</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layoutStyle = style.layoutStyle || 'simple';
        const bgColor = style.bg || '#ffffff';
        const secondaryBg = style.secondaryBg || '#f0fdf4';
        const buttonStyle = style.buttonStyle || 'solid';
        const buttonColor = style.buttonColor || '#059669';
        const buttonTextColor = style.buttonTextColor || '#ffffff';
        const buttonSize = style.buttonSize || 'medium';
        const animation = style.animation || 'none';
        const shadow = style.shadow || 'medium';
        const spacing = style.spacing || 'normal';

        const buttonSizeMap = {
            small: 'px-6 py-2 text-sm',
            medium: 'px-8 py-3 text-base',
            large: 'px-10 py-4 text-lg',
            xlarge: 'px-12 py-5 text-xl'
        };

        const shadowMap = {
            none: '',
            small: 'shadow-sm',
            medium: 'shadow-lg',
            large: 'shadow-xl',
            xl: 'shadow-2xl'
        };

        const spacingMap = {
            compact: 'py-8',
            normal: 'py-12',
            relaxed: 'py-16'
        };

        const animationMap = {
            none: '',
            fade: 'animation: fadeIn 0.6s ease-out;',
            slide: 'animation: slideUp 0.6s ease-out;',
            zoom: 'animation: zoomIn 0.6s ease-out;',
            pulse: 'animation: pulse 2s ease-in-out infinite;'
        };

        const spacingClass = spacingMap[spacing];
        const shadowClass = shadowMap[shadow];
        const animationCSS = animationMap[animation];

        const animations = `
            <style>
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes zoomIn {
                    from { opacity: 0; transform: scale(0.9); }
                    to { opacity: 1; transform: scale(1); }
                }
                @keyframes pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                }
            </style>
        `;

        const getButtonStyle = () => {
            const sizeClass = buttonSizeMap[buttonSize];
            switch (buttonStyle) {
                case 'solid':
                    return `${sizeClass} rounded-lg font-semibold transition shadow-md hover:shadow-lg`;
                case 'outline':
                    return `${sizeClass} rounded-lg font-semibold border-2 transition hover:shadow-md`;
                case 'gradient':
                    return `${sizeClass} rounded-lg font-semibold transition shadow-md hover:shadow-lg`;
                case 'rounded':
                    return `${sizeClass} rounded-full font-semibold transition shadow-md hover:shadow-lg`;
                case 'modern':
                    return `${sizeClass} rounded-xl font-bold transition shadow-lg hover:shadow-xl transform hover:-translate-y-1`;
                default:
                    return `${sizeClass} rounded-lg font-semibold transition`;
            }
        };

        const getButtonBackground = () => {
            if (buttonStyle === 'outline') {
                return `background: transparent; color: ${buttonColor}; border-color: ${buttonColor};`;
            } else if (buttonStyle === 'gradient') {
                return `background: linear-gradient(135deg, ${buttonColor} 0%, ${secondaryBg} 100%); color: ${buttonTextColor};`;
            }
            return `background: ${buttonColor}; color: ${buttonTextColor};`;
        };

        const renderContent = () => {
            const content = `
                <h2 class="text-2xl font-bold mb-4">${data.title || 'Register Now'}</h2>
                <p class="text-gray-600 mb-6">${data.message || "Secure your spot at this exciting event"}</p>
                ${data.deadline ? `<p class="text-sm text-gray-500 mb-6">⏰ Deadline: ${new Date(data.deadline).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>` : ''}
                <button class="${getButtonStyle()}" style="${getButtonBackground()}">
                    ✉️ RSVP Now
                </button>
            `;

            switch (layoutStyle) {
                case 'simple':
                    return `<div class="max-w-md mx-auto text-center">${content}</div>`;

                case 'card':
                    return `
                        <div class="max-w-md mx-auto">
                            <div class="p-8 bg-white rounded-2xl shadow-lg text-center">
                                ${content}
                            </div>
                        </div>
                    `;

                case 'banner':
                    return `
                        <div class="max-w-3xl mx-auto">
                            <div class="p-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-l-4" style="border-color: ${buttonColor};">
                                <div class="text-center">
                                    ${content}
                                </div>
                            </div>
                        </div>
                    `;

                case 'gradient':
                    return `
                        <div class="max-w-md mx-auto">
                            <div class="p-8 rounded-2xl shadow-xl text-center" style="background: linear-gradient(135deg, ${bgColor} 0%, ${secondaryBg} 100%);">
                                ${content}
                            </div>
                        </div>
                    `;

                case 'minimal':
                    return `
                        <div class="max-w-lg mx-auto text-center" style="${animationCSS}">
                            <h2 class="text-3xl font-light mb-3">${data.title || 'Register Now'}</h2>
                            <p class="text-gray-600 text-lg mb-6">${data.message || "Secure your spot at this exciting event"}</p>
                            ${data.deadline ? `<p class="text-sm text-gray-500 mb-8">Deadline: ${new Date(data.deadline).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>` : ''}
                            <button class="${getButtonStyle()}" style="${getButtonBackground()}">
                                RSVP Now
                            </button>
                        </div>
                    `;

                case 'split':
                    return `
                        <div class="max-w-4xl mx-auto">
                            <div class="grid md:grid-cols-2 gap-0 items-center ${shadowClass} rounded-3xl overflow-hidden" style="${animationCSS}">
                                <div class="p-8 md:p-12" style="background: ${buttonColor}; color: white;">
                                    <div class="text-5xl mb-6">✉️</div>
                                    <h2 class="text-3xl font-bold mb-3">${data.title || 'Register Now'}</h2>
                                    ${data.deadline ? `<p class="text-white/80 text-sm">⏰ Deadline: ${new Date(data.deadline).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>` : ''}
                                </div>
                                <div class="p-8 md:p-12 bg-white">
                                    <p class="text-gray-600 mb-6">${data.message || "Secure your spot at this exciting event"}</p>
                                    <button class="${getButtonStyle()}" style="${getButtonBackground()}">
                                        RSVP Now →
                                    </button>
                                </div>
                            </div>
                        </div>
                    `;

                case 'callout':
                    return `
                        <div class="max-w-2xl mx-auto">
                            <div class="relative p-8 rounded-2xl ${shadowClass} border-4" style="background: ${secondaryBg}; border-color: ${buttonColor}; ${animationCSS}">
                                <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-full text-white font-bold text-sm" style="background: ${buttonColor};">
                                    ⚡ LIMITED TIME
                                </div>
                                <div class="text-center mt-4">
                                    <h2 class="text-3xl font-bold mb-4">${data.title || 'Register Now'}</h2>
                                    <p class="text-gray-700 mb-6 text-lg">${data.message || "Secure your spot at this exciting event"}</p>
                                    ${data.deadline ? `<p class="text-sm font-semibold mb-6" style="color: ${buttonColor};">⏰ Deadline: ${new Date(data.deadline).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>` : ''}
                                    <button class="${getButtonStyle()}" style="${getButtonBackground()}">
                                        ✉️ RSVP Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    `;

                case 'modern':
                    return `
                        <div class="max-w-3xl mx-auto">
                            <div class="relative overflow-hidden p-12 rounded-3xl ${shadowClass}" style="background: linear-gradient(135deg, ${bgColor} 0%, ${secondaryBg} 100%); ${animationCSS}">
                                <div class="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                                <div class="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
                                <div class="relative text-center">
                                    <div class="inline-block p-4 rounded-2xl bg-white/10 backdrop-blur-sm mb-6">
                                        <div class="text-5xl">✉️</div>
                                    </div>
                                    <h2 class="text-4xl font-bold mb-4">${data.title || 'Register Now'}</h2>
                                    <p class="text-gray-700 text-lg mb-6 max-w-xl mx-auto">${data.message || "Secure your spot at this exciting event"}</p>
                                    ${data.deadline ? `<p class="text-sm text-gray-600 mb-8">Deadline: ${new Date(data.deadline).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>` : ''}
                                    <button class="${getButtonStyle()}" style="${getButtonBackground()}">
                                        RSVP Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    `;

                case 'urgent':
                    return `
                        <div class="max-w-2xl mx-auto">
                            <div class="relative p-8 rounded-2xl ${shadowClass}" style="background: ${buttonColor}; ${animationCSS}">
                                <div class="absolute -top-3 -right-3 w-20 h-20 rounded-full flex items-center justify-center text-2xl animate-bounce" style="background: #ff4444;">
                                    ⏰
                                </div>
                                <div class="text-center text-white">
                                    <div class="text-xs font-bold uppercase tracking-wider mb-2 opacity-90">Don't Miss Out</div>
                                    <h2 class="text-3xl md:text-4xl font-black mb-4">${data.title || 'Register Now'}</h2>
                                    <p class="text-white/90 text-lg mb-6">${data.message || "Secure your spot at this exciting event"}</p>
                                    ${data.deadline ? `<p class="text-sm text-white/80 mb-6 font-semibold">⚡ Deadline: ${new Date(data.deadline).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>` : ''}
                                    <button class="${getButtonStyle()}" style="background: white; color: ${buttonColor};">
                                        ✉️ RSVP NOW!
                                    </button>
                                </div>
                            </div>
                        </div>
                    `;

                default:
                    return `<div class="max-w-md mx-auto text-center" style="${animationCSS}">${content}</div>`;
            }
        };

        return `
            ${animations}
            <div class="${spacingClass} px-6" style="background: ${bgColor}">
                ${renderContent()}
            </div>
        `;
    }`
};
