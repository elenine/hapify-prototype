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
                    <option value="gradient">Gradient - Vibrant Background</option>
                    <option value="framed">Framed - Bordered Style</option>
                    <option value="floating">Floating - Elevated Card</option>
                    <option value="modern">Modern - Sleek Design</option>
                    <option value="ticket">Ticket - Event Style</option>
                    <option value="postcard">Postcard - Vintage Style</option>
                    <option value="neon">Neon - Glowing CTA</option>
                    <option value="banner">Banner - Wide Display</option>
                    <option value="dual-button">Dual Button - Yes/No Choice</option>
                    <option value="countdown">Countdown - With Deadline</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Button Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="buttonStyle" onchange="updatePreview()">
                    <option value="rounded">Rounded</option>
                    <option value="pill">Pill Shaped</option>
                    <option value="sharp">Sharp Corners</option>
                    <option value="outline">Outline</option>
                    <option value="ghost">Ghost</option>
                    <option value="3d">3D Effect</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Button Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="buttonSize" onchange="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium" selected>Medium</option>
                    <option value="large">Large</option>
                    <option value="xlarge">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Font Weight</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="fontWeight" onchange="updatePreview()">
                    <option value="light">Light</option>
                    <option value="normal">Normal</option>
                    <option value="medium">Medium</option>
                    <option value="semibold" selected>Semibold</option>
                    <option value="bold">Bold</option>
                    <option value="extrabold">Extra Bold</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Shadow Effect</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="small">Small</option>
                    <option value="medium" selected>Medium</option>
                    <option value="large">Large</option>
                    <option value="xlarge">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Border Radius</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="borderRadius" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="small">Small</option>
                    <option value="medium" selected>Medium</option>
                    <option value="large">Large</option>
                    <option value="full">Full Round</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Spacing</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="spacing" onchange="updatePreview()">
                    <option value="compact">Compact</option>
                    <option value="normal" selected>Normal</option>
                    <option value="relaxed">Relaxed</option>
                    <option value="loose">Loose</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Icon Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="iconSize" onchange="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium" selected>Medium</option>
                    <option value="large">Large</option>
                    <option value="xlarge">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Decorative Elements</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="decorations" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="envelope">Envelope 💌</option>
                    <option value="hearts">Hearts ❤️</option>
                    <option value="stars">Stars ✨</option>
                    <option value="celebration">Celebration 🎉</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Button Color</label>
                <input type="color" value="#dc2626" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="buttonColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Secondary Color</label>
                <input type="color" value="#f87171" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="secondaryColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef2f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
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
        const buttonSize = style.buttonSize || 'medium';
        const fontWeight = style.fontWeight || 'semibold';
        const shadow = style.shadow || 'medium';
        const borderRadius = style.borderRadius || 'medium';
        const spacing = style.spacing || 'normal';
        const iconSize = style.iconSize || 'medium';
        const decorations = style.decorations || 'none';
        const buttonColor = style.buttonColor || '#dc2626';
        const secondaryColor = style.secondaryColor || '#f87171';
        const bg = style.bg || '#fef2f2';
        const cardBg = style.cardBg || '#ffffff';
        const textAlign = style.textAlign || 'center';

        const buttonClasses = {
            rounded: 'rounded-lg',
            pill: 'rounded-full',
            sharp: 'rounded-none',
            outline: 'rounded-lg border-2',
            ghost: 'rounded-lg border',
            '3d': 'rounded-lg shadow-lg'
        };

        const buttonSizeClasses = {
            small: 'px-4 py-2 text-sm',
            medium: 'px-6 py-2.5',
            large: 'px-8 py-3 text-lg',
            xlarge: 'px-10 py-4 text-xl'
        };

        const fontWeightClasses = {
            light: 'font-light',
            normal: 'font-normal',
            medium: 'font-medium',
            semibold: 'font-semibold',
            bold: 'font-bold',
            extrabold: 'font-extrabold'
        };

        const shadowClasses = {
            none: '',
            small: 'shadow-sm',
            medium: 'shadow-md',
            large: 'shadow-lg',
            xlarge: 'shadow-xl'
        };

        const borderRadiusClasses = {
            none: 'rounded-none',
            small: 'rounded',
            medium: 'rounded-lg',
            large: 'rounded-2xl',
            full: 'rounded-3xl'
        };

        const spacingClasses = {
            compact: 'py-8 px-4',
            normal: 'py-12 px-6',
            relaxed: 'py-16 px-8',
            loose: 'py-20 px-10'
        };

        const iconSizes = {
            small: 'text-3xl',
            medium: 'text-4xl',
            large: 'text-5xl',
            xlarge: 'text-6xl'
        };

        const decorationMap = {
            none: '',
            envelope: '💌',
            hearts: '❤️ 💕 💖',
            stars: '✨ ⭐ 🌟',
            celebration: '🎉 🎊 🎈'
        };

        const deadlineStr = data.deadline ? new Date(data.deadline).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'}) : '';

        const buttonElement = (btnStyle) => {
            const baseClasses = `${buttonClasses[buttonStyle]} ${buttonSizeClasses[buttonSize]} ${fontWeightClasses[fontWeight]} transition`;

            if (btnStyle === 'outline') {
                return `<button class="${baseClasses}" style="border-color: ${buttonColor}; color: ${buttonColor}; background: transparent;">
                    RSVP Now
                </button>`;
            } else if (btnStyle === 'ghost') {
                return `<button class="${baseClasses}" style="border-color: ${buttonColor}33; color: ${buttonColor}; background: transparent;">
                    RSVP Now
                </button>`;
            } else if (btnStyle === '3d') {
                return `<button class="${baseClasses}" style="background: ${buttonColor}; color: white; transform: translateY(0); box-shadow: 0 4px 0 ${buttonColor}dd;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                    RSVP Now
                </button>`;
            }
            return `<button class="${baseClasses} text-white hover:opacity-90" style="background: ${buttonColor}">
                RSVP Now
            </button>`;
        };

        // Centered Layout
        if (layout === 'centered') {
            return `
                <div class="${spacingClasses[spacing]} text-${textAlign}" style="background: ${bg}">
                    <div class="max-w-md mx-auto">
                        ${decorationMap[decorations] ? `<div class="${iconSizes[iconSize]} mb-4">${decorationMap[decorations]}</div>` : ''}
                        <h2 class="text-2xl ${fontWeightClasses[fontWeight]} mb-4">${data.title || 'Please RSVP'}</h2>
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
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-md mx-auto ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} p-8 text-${textAlign}" style="background: ${cardBg}">
                        <div class="${iconSizes[iconSize]} mb-4">✉️</div>
                        ${decorationMap[decorations] ? `<div class="text-2xl mb-3">${decorationMap[decorations]}</div>` : ''}
                        <h2 class="text-2xl ${fontWeightClasses[fontWeight]} mb-4">${data.title || 'Please RSVP'}</h2>
                        <p class="text-gray-600 mb-6">${data.message || "Let us know if you can join our celebration"}</p>
                        ${deadlineStr ? `<div class="mb-6 p-3 bg-gray-50 ${borderRadiusClasses[borderRadius]}">
                            <p class="text-xs uppercase tracking-wider text-gray-500 mb-1">Deadline</p>
                            <p class="text-sm ${fontWeightClasses[fontWeight]}">${deadlineStr}</p>
                        </div>` : ''}
                        ${buttonElement(buttonStyle)}
                    </div>
                </div>
            `;
        }

        // Split Layout
        if (layout === 'split') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                        <div class="text-${textAlign === 'center' ? 'center md:text-left' : textAlign}">
                            ${decorationMap[decorations] ? `<div class="${iconSizes[iconSize]} mb-4">${decorationMap[decorations]}</div>` : ''}
                            <h2 class="text-3xl ${fontWeightClasses[fontWeight]} mb-4">${data.title || 'Please RSVP'}</h2>
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
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-xl mx-auto text-center border-t-2 border-b-2 py-12" style="border-color: ${buttonColor}33">
                        <h2 class="text-2xl font-light tracking-wide mb-6">${data.title || 'Please RSVP'}</h2>
                        <p class="text-gray-600 font-light mb-8">${data.message || "Let us know if you can join our celebration"}</p>
                        ${deadlineStr ? `<p class="text-xs uppercase tracking-widest text-gray-400 mb-8">${deadlineStr}</p>` : ''}
                        ${decorationMap[decorations] ? `<div class="${iconSizes[iconSize]} mb-6">${decorationMap[decorations]}</div>` : ''}
                        ${buttonElement(buttonStyle)}
                    </div>
                </div>
            `;
        }

        // Bold Layout
        if (layout === 'bold') {
            return `
                <div class="${spacingClasses[spacing]} relative overflow-hidden" style="background: linear-gradient(135deg, ${buttonColor} 0%, ${buttonColor}dd 100%);">
                    <div class="absolute inset-0 opacity-10" style="background-image: repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.5) 35px, rgba(255,255,255,.5) 70px);"></div>
                    <div class="max-w-md mx-auto text-center text-white relative z-10">
                        <div class="${iconSizes[iconSize]} mb-4">✉️</div>
                        <h2 class="text-3xl ${fontWeightClasses[fontWeight]} mb-4">${data.title || 'Please RSVP'}</h2>
                        <p class="text-white opacity-90 mb-8">${data.message || "Let us know if you can join our celebration"}</p>
                        ${deadlineStr ? `<p class="text-sm mb-8 opacity-75">Respond by ${deadlineStr}</p>` : ''}
                        ${decorationMap[decorations] ? `<div class="text-3xl mb-6">${decorationMap[decorations]}</div>` : ''}
                        <button class="${buttonClasses[buttonStyle]} ${buttonSizeClasses[buttonSize]} ${fontWeightClasses[fontWeight]} bg-white transition hover:shadow-xl" style="color: ${buttonColor}">
                            RSVP Now
                        </button>
                    </div>
                </div>
            `;
        }

        // Gradient Layout
        if (layout === 'gradient') {
            return `
                <div class="${spacingClasses[spacing]} text-center" style="background: linear-gradient(135deg, ${buttonColor} 0%, ${secondaryColor} 50%, ${bg} 100%);">
                    <div class="max-w-md mx-auto">
                        <div class="${iconSizes[iconSize]} mb-4">💌</div>
                        ${decorationMap[decorations] ? `<div class="text-3xl mb-4">${decorationMap[decorations]}</div>` : ''}
                        <h2 class="text-3xl ${fontWeightClasses[fontWeight]} mb-4 drop-shadow-lg" style="color: white">${data.title || 'Please RSVP'}</h2>
                        <p class="text-white opacity-90 mb-6 drop-shadow">${data.message || "Let us know if you can join our celebration"}</p>
                        ${deadlineStr ? `<p class="text-sm text-white opacity-75 mb-6">Please respond by ${deadlineStr}</p>` : ''}
                        <button class="${buttonClasses[buttonStyle]} ${buttonSizeClasses[buttonSize]} ${fontWeightClasses[fontWeight]} bg-white hover:shadow-xl transition" style="color: ${buttonColor}">
                            RSVP Now
                        </button>
                    </div>
                </div>
            `;
        }

        // Framed Layout
        if (layout === 'framed') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-md mx-auto border-4 p-8 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} text-${textAlign}" style="border-color: ${buttonColor}; background: ${cardBg}">
                        <div class="border-2 p-6 ${borderRadiusClasses[borderRadius]}" style="border-color: ${secondaryColor}">
                            <div class="${iconSizes[iconSize]} mb-4">✉️</div>
                            ${decorationMap[decorations] ? `<div class="text-2xl mb-3">${decorationMap[decorations]}</div>` : ''}
                            <h2 class="text-2xl ${fontWeightClasses[fontWeight]} mb-4" style="color: ${buttonColor}">${data.title || 'Please RSVP'}</h2>
                            <p class="text-gray-600 mb-6">${data.message || "Let us know if you can join our celebration"}</p>
                            ${deadlineStr ? `<p class="text-sm mb-6" style="color: ${buttonColor}">Deadline: ${deadlineStr}</p>` : ''}
                            ${buttonElement(buttonStyle)}
                        </div>
                    </div>
                </div>
            `;
        }

        // Floating Layout
        if (layout === 'floating') {
            return `
                <div class="${spacingClasses[spacing]} relative" style="background: ${bg}">
                    ${decorationMap[decorations] ? `
                        <div class="absolute top-10 left-10 text-4xl opacity-20">${decorationMap[decorations].split(' ')[0]}</div>
                        <div class="absolute bottom-10 right-10 text-4xl opacity-20">${decorationMap[decorations].split(' ')[0]}</div>
                    ` : ''}
                    <div class="max-w-md mx-auto ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} p-8 transform hover:scale-105 transition-transform text-${textAlign}" style="background: ${cardBg}">
                        <div class="${iconSizes[iconSize]} mb-4">💌</div>
                        <h2 class="text-2xl ${fontWeightClasses[fontWeight]} mb-4" style="color: ${buttonColor}">${data.title || 'Please RSVP'}</h2>
                        <div class="h-1 w-20 ${textAlign === 'center' ? 'mx-auto' : ''} ${textAlign === 'right' ? 'ml-auto' : ''} mb-6 rounded-full" style="background: linear-gradient(90deg, ${buttonColor}, ${secondaryColor})"></div>
                        <p class="text-gray-600 mb-6">${data.message || "Let us know if you can join our celebration"}</p>
                        ${deadlineStr ? `<div class="inline-block px-4 py-2 ${borderRadiusClasses[borderRadius]} mb-6" style="background: ${buttonColor}11; color: ${buttonColor}">
                            <p class="text-xs uppercase tracking-wider mb-1">Deadline</p>
                            <p class="text-sm ${fontWeightClasses[fontWeight]}">${deadlineStr}</p>
                        </div>` : ''}
                        <div class="mt-6">
                            ${buttonElement(buttonStyle)}
                        </div>
                    </div>
                </div>
            `;
        }

        // Modern Layout
        if (layout === 'modern') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto">
                        <div class="grid md:grid-cols-3 gap-6 items-center">
                            <div class="md:col-span-2 text-${textAlign}">
                                <div class="flex items-center gap-3 mb-4">
                                    <div class="w-1 h-12 ${borderRadiusClasses[borderRadius]}" style="background: linear-gradient(180deg, ${buttonColor}, ${secondaryColor})"></div>
                                    <h2 class="text-3xl ${fontWeightClasses[fontWeight]}" style="color: ${buttonColor}">${data.title || 'Please RSVP'}</h2>
                                </div>
                                <p class="text-gray-600 mb-4 ${textAlign === 'left' ? 'ml-4' : ''}">${data.message || "Let us know if you can join our celebration"}</p>
                                ${deadlineStr ? `<p class="text-sm text-gray-500 ${textAlign === 'left' ? 'ml-4' : ''}">📅 ${deadlineStr}</p>` : ''}
                            </div>
                            <div class="flex flex-col items-center gap-4">
                                ${decorationMap[decorations] ? `<div class="${iconSizes[iconSize]}">${decorationMap[decorations]}</div>` : ''}
                                ${buttonElement(buttonStyle)}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Ticket Layout
        if (layout === 'ticket') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-lg mx-auto">
                        <div class="relative overflow-hidden ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}" style="background: linear-gradient(135deg, ${cardBg} 0%, ${secondaryColor}22 100%); border-left: 4px dashed ${buttonColor}; border-right: 4px dashed ${buttonColor};">
                            <div class="absolute top-0 left-0 w-full h-2" style="background: repeating-linear-gradient(90deg, ${buttonColor} 0px, ${buttonColor} 15px, transparent 15px, transparent 30px);"></div>
                            <div class="absolute bottom-0 left-0 w-full h-2" style="background: repeating-linear-gradient(90deg, ${buttonColor} 0px, ${buttonColor} 15px, transparent 15px, transparent 30px);"></div>
                            <div class="p-8 text-center">
                                <div class="text-xs uppercase tracking-widest mb-2" style="color: ${buttonColor}">You're Invited</div>
                                ${decorationMap[decorations] ? `<div class="${iconSizes[iconSize]} mb-4">${decorationMap[decorations]}</div>` : ''}
                                <h2 class="text-2xl ${fontWeightClasses[fontWeight]} mb-4" style="color: ${buttonColor}">${data.title || 'Please RSVP'}</h2>
                                <p class="text-gray-600 mb-6">${data.message || "Let us know if you can join our celebration"}</p>
                                ${deadlineStr ? `<div class="text-sm mb-6 p-3 ${borderRadiusClasses[borderRadius]}" style="background: ${buttonColor}11; color: ${buttonColor};">
                                    <span class="font-semibold">RSVP by:</span> ${deadlineStr}
                                </div>` : ''}
                                ${buttonElement(buttonStyle)}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Postcard Layout
        if (layout === 'postcard') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto">
                        <div class="relative ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} overflow-hidden" style="background: ${cardBg}; border: 8px solid white; box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
                            <div class="absolute top-4 right-4 w-20 h-16 border-4 ${borderRadiusClasses[borderRadius]}" style="border-color: ${buttonColor};">
                                <div class="text-center pt-2">
                                    <div class="text-xs" style="color: ${buttonColor};">STAMP</div>
                                </div>
                            </div>
                            <div class="p-8">
                                <div class="text-xs uppercase tracking-widest mb-6" style="color: ${buttonColor};">~ Please Respond ~</div>
                                ${decorationMap[decorations] ? `<div class="${iconSizes[iconSize]} mb-4">${decorationMap[decorations]}</div>` : ''}
                                <h2 class="text-2xl ${fontWeightClasses[fontWeight]} mb-4" style="color: ${buttonColor}">${data.title || 'Please RSVP'}</h2>
                                <p class="text-gray-600 mb-6 italic">${data.message || "Let us know if you can join our celebration"}</p>
                                ${deadlineStr ? `<p class="text-sm text-gray-500 mb-6">Please reply by ${deadlineStr}</p>` : ''}
                                <div class="border-t-2 border-dashed pt-6 mt-6" style="border-color: ${buttonColor}33">
                                    ${buttonElement(buttonStyle)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Neon Layout
        if (layout === 'neon') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: #0a0a0a;">
                    <div class="max-w-md mx-auto text-center p-8 ${borderRadiusClasses[borderRadius]}" style="background: #1a1a1a; border: 2px solid ${buttonColor}; box-shadow: 0 0 20px ${buttonColor}44, inset 0 0 20px ${buttonColor}11;">
                        ${decorationMap[decorations] ? `<div class="${iconSizes[iconSize]} mb-6" style="filter: drop-shadow(0 0 10px ${buttonColor});">${decorationMap[decorations]}</div>` : ''}
                        <h2 class="text-3xl ${fontWeightClasses[fontWeight]} mb-6 text-white" style="text-shadow: 0 0 20px ${buttonColor}, 0 0 40px ${buttonColor};">${data.title || 'Please RSVP'}</h2>
                        <p class="text-gray-300 mb-8">${data.message || "Let us know if you can join our celebration"}</p>
                        ${deadlineStr ? `<div class="text-sm mb-8 p-3 ${borderRadiusClasses[borderRadius]}" style="background: ${buttonColor}22; border: 1px solid ${buttonColor}; box-shadow: 0 0 10px ${buttonColor}44; color: ${secondaryColor};">
                            <span class="${fontWeightClasses[fontWeight]}">Deadline:</span> ${deadlineStr}
                        </div>` : ''}
                        <button class="${buttonClasses[buttonStyle]} ${buttonSizeClasses[buttonSize]} ${fontWeightClasses[fontWeight]} text-white transition-all" style="background: ${buttonColor}; box-shadow: 0 0 20px ${buttonColor}66, inset 0 0 10px ${buttonColor}33; text-shadow: 0 0 10px white;">
                            RSVP Now
                        </button>
                    </div>
                </div>
            `;
        }

        // Banner Layout
        if (layout === 'banner') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-4xl mx-auto ${borderRadiusClasses[borderRadius]} overflow-hidden ${shadowClasses[shadow]}" style="background: linear-gradient(90deg, ${buttonColor} 0%, ${secondaryColor} 100%);">
                        <div class="px-8 py-6 md:flex items-center justify-between gap-6 text-white">
                            <div class="flex-1 text-center md:text-left mb-6 md:mb-0">
                                ${decorationMap[decorations] ? `<div class="${iconSizes[iconSize]} mb-3">${decorationMap[decorations]}</div>` : ''}
                                <h2 class="text-2xl ${fontWeightClasses[fontWeight]} mb-2">${data.title || 'Please RSVP'}</h2>
                                <p class="text-white opacity-90">${data.message || "Let us know if you can join our celebration"}</p>
                                ${deadlineStr ? `<p class="text-xs mt-2 opacity-75">Reply by ${deadlineStr}</p>` : ''}
                            </div>
                            <div class="text-center">
                                <button class="${buttonClasses[buttonStyle]} ${buttonSizeClasses[buttonSize]} ${fontWeightClasses[fontWeight]} bg-white hover:shadow-xl transition" style="color: ${buttonColor}">
                                    RSVP Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Dual Button Layout
        if (layout === 'dual-button') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-md mx-auto text-center">
                        ${decorationMap[decorations] ? `<div class="${iconSizes[iconSize]} mb-4">${decorationMap[decorations]}</div>` : ''}
                        <h2 class="text-2xl ${fontWeightClasses[fontWeight]} mb-4" style="color: ${buttonColor}">${data.title || 'Will You Join Us?'}</h2>
                        <p class="text-gray-600 mb-6">${data.message || "Let us know if you can join our celebration"}</p>
                        ${deadlineStr ? `<p class="text-sm text-gray-500 mb-8">Please respond by ${deadlineStr}</p>` : ''}
                        <div class="flex gap-4 justify-center">
                            <button class="${buttonClasses[buttonStyle]} ${buttonSizeClasses[buttonSize]} ${fontWeightClasses[fontWeight]} text-white ${shadowClasses[shadow]} hover:shadow-xl transition flex-1 max-w-xs" style="background: ${buttonColor}">
                                ✓ Yes, I'll Be There
                            </button>
                            <button class="${buttonClasses[buttonStyle]} ${buttonSizeClasses[buttonSize]} ${fontWeightClasses[fontWeight]} border-2 hover:bg-gray-50 transition flex-1 max-w-xs" style="color: ${buttonColor}; border-color: ${buttonColor}">
                                ✗ Can't Make It
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }

        // Countdown Layout
        if (layout === 'countdown') {
            const daysUntil = deadlineStr ? Math.ceil((new Date(data.deadline) - new Date()) / (1000 * 60 * 60 * 24)) : 0;
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-lg mx-auto text-center">
                        ${decorationMap[decorations] ? `<div class="${iconSizes[iconSize]} mb-4">${decorationMap[decorations]}</div>` : ''}
                        <h2 class="text-2xl ${fontWeightClasses[fontWeight]} mb-6" style="color: ${buttonColor}">${data.title || 'Please RSVP'}</h2>
                        ${deadlineStr ? `
                        <div class="mb-8">
                            <div class="inline-block p-6 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}" style="background: linear-gradient(135deg, ${buttonColor}11 0%, ${secondaryColor}11 100%); border: 2px solid ${buttonColor};">
                                <div class="text-xs uppercase tracking-widest mb-2" style="color: ${buttonColor}">RSVP Deadline</div>
                                <div class="text-5xl ${fontWeightClasses[fontWeight]} mb-2" style="color: ${buttonColor}">${daysUntil > 0 ? daysUntil : 0}</div>
                                <div class="text-sm text-gray-600">Days Remaining</div>
                                <div class="text-xs text-gray-500 mt-2">${deadlineStr}</div>
                            </div>
                        </div>
                        ` : ''}
                        <p class="text-gray-600 mb-8">${data.message || "Let us know if you can join our celebration"}</p>
                        ${buttonElement(buttonStyle)}
                    </div>
                </div>
            `;
        }

        // Default - Centered
        return `
            <div class="${spacingClasses[spacing]} text-center" style="background: ${bg}">
                <div class="max-w-md mx-auto">
                    ${decorationMap[decorations] ? `<div class="${iconSizes[iconSize]} mb-4">${decorationMap[decorations]}</div>` : ''}
                    <h2 class="text-2xl ${fontWeightClasses[fontWeight]} mb-4">${data.title || 'Please RSVP'}</h2>
                    <p class="text-gray-600 mb-6">${data.message || "Let us know if you can join our celebration"}</p>
                    ${deadlineStr ? `<p class="text-sm text-gray-500 mb-6">Please respond by ${deadlineStr}</p>` : ''}
                    ${buttonElement(buttonStyle)}
                </div>
            </div>
        `;
    }
};
