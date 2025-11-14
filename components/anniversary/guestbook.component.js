// Guestbook Component for Anniversary Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.guestbook = {
    name: '📖 Guest Messages',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Leave Your Wishes" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Instructions</label>
                <textarea placeholder="Share your favorite memory or leave a special message for the couple..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="instructions" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Sample Messages (one per line, optional)</label>
                <textarea placeholder="Wishing you a lifetime of love and happiness!
Congratulations on your beautiful journey together!" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="samples" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="classic">Classic Book</option>
                    <option value="modern">Modern Card</option>
                    <option value="minimal">Minimal Form</option>
                    <option value="elegant">Elegant Frame</option>
                    <option value="interactive">Interactive Wall</option>
                    <option value="notebook">Notebook Style</option>
                    <option value="golden">Golden Book</option>
                    <option value="floating">Floating Cards</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef2f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#ef4444" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Secondary Color</label>
                <input type="color" value="#f87171" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="secondaryColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Font Weight</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="fontWeight" onchange="updatePreview()">
                    <option value="light">Light</option>
                    <option value="normal">Normal</option>
                    <option value="medium">Medium</option>
                    <option value="semibold" selected>Semi Bold</option>
                    <option value="bold">Bold</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Shadow</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="sm">Small</option>
                    <option value="md" selected>Medium</option>
                    <option value="lg">Large</option>
                    <option value="xl">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Border Radius</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="borderRadius" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg" selected>Large</option>
                    <option value="xl">Extra Large</option>
                    <option value="full">Full</option>
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
                <label class="block text-sm font-medium text-gray-700 mb-2">Button Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="buttonStyle" onchange="updatePreview()">
                    <option value="solid" selected>Solid</option>
                    <option value="outline">Outline</option>
                    <option value="gradient">Gradient</option>
                    <option value="ghost">Ghost</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Decorations</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="decorations" onchange="updatePreview()">
                    <option value="book">Book 📖</option>
                    <option value="pen">Pen ✍️</option>
                    <option value="heart">Heart 💕</option>
                    <option value="star">Star ⭐</option>
                    <option value="message">Message 💌</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Hover Effect</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="hoverEffect" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="lift" selected>Lift</option>
                    <option value="grow">Grow</option>
                    <option value="glow">Glow</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'classic';
        const bg = style.bg || '#fef2f2';
        const accentColor = style.accentColor || '#ef4444';
        const secondaryColor = style.secondaryColor || '#f87171';
        const cardBg = style.cardBg || '#ffffff';
        const fontWeight = style.fontWeight || 'semibold';
        const shadow = style.shadow || 'md';
        const borderRadius = style.borderRadius || 'lg';
        const spacing = style.spacing || 'normal';
        const iconSize = style.iconSize || 'medium';
        const buttonStyle = style.buttonStyle || 'solid';
        const decorations = style.decorations || 'book';
        const hoverEffect = style.hoverEffect || 'lift';

        const fontWeightClasses = {
            light: 'font-light',
            normal: 'font-normal',
            medium: 'font-medium',
            semibold: 'font-semibold',
            bold: 'font-bold'
        };

        const shadowClasses = {
            none: '',
            sm: 'shadow-sm',
            md: 'shadow-md',
            lg: 'shadow-lg',
            xl: 'shadow-xl'
        };

        const borderRadiusClasses = {
            none: 'rounded-none',
            sm: 'rounded-sm',
            md: 'rounded-md',
            lg: 'rounded-lg',
            xl: 'rounded-xl',
            full: 'rounded-full'
        };

        const spacingClasses = {
            compact: 'py-8 px-6',
            normal: 'py-12 px-6',
            relaxed: 'py-16 px-6',
            loose: 'py-20 px-6'
        };

        const iconSizeClasses = {
            small: 'text-2xl',
            medium: 'text-4xl',
            large: 'text-5xl',
            xlarge: 'text-6xl'
        };

        const hoverEffectClasses = {
            none: '',
            lift: 'transition hover:-translate-y-1',
            grow: 'transition hover:scale-105',
            glow: 'transition hover:shadow-2xl'
        };

        const decorationMap = {
            book: '📖',
            pen: '✍️',
            heart: '💕',
            star: '⭐',
            message: '💌'
        };

        const samples = data.samples ? data.samples.split('\n').filter(s => s.trim()) : [];

        const buttonElement = () => {
            if (buttonStyle === 'solid') {
                return `<button class="w-full px-6 py-3 ${borderRadiusClasses[borderRadius]} ${fontWeightClasses[fontWeight]} text-white transition"
                                style="background: ${accentColor}">
                    Submit Message
                </button>`;
            } else if (buttonStyle === 'outline') {
                return `<button class="w-full px-6 py-3 ${borderRadiusClasses[borderRadius]} ${fontWeightClasses[fontWeight]} bg-transparent transition"
                                style="color: ${accentColor}; border: 2px solid ${accentColor}">
                    Submit Message
                </button>`;
            } else if (buttonStyle === 'gradient') {
                return `<button class="w-full px-6 py-3 ${borderRadiusClasses[borderRadius]} ${fontWeightClasses[fontWeight]} text-white transition"
                                style="background: linear-gradient(135deg, ${accentColor}, ${secondaryColor})">
                    Submit Message
                </button>`;
            } else {
                return `<button class="w-full px-6 py-3 ${borderRadiusClasses[borderRadius]} ${fontWeightClasses[fontWeight]} transition"
                                style="color: ${accentColor}; background: ${accentColor}11">
                    Submit Message
                </button>`;
            }
        };

        // Classic Book Layout
        if (layout === 'classic') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto">
                        <div class="text-center mb-8">
                            <div class="${iconSizeClasses[iconSize]} mb-3">${decorationMap[decorations]}</div>
                            <h2 class="text-3xl ${fontWeightClasses[fontWeight]} mb-3" style="color: ${accentColor}">
                                ${data.title || 'Guest Messages'}
                            </h2>
                            <p class="text-gray-600">${data.instructions || 'Share your favorite memory or leave a message for the couple'}</p>
                        </div>

                        <div class="p-8 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}"
                             style="background: ${cardBg}; border-top: 4px solid ${accentColor}">
                            <textarea placeholder="Write your message here..." rows="4"
                                      class="w-full px-4 py-3 mb-4 border border-gray-300 ${borderRadiusClasses[borderRadius]}
                                             focus:ring-2 resize-none"
                                      style="focus:ring-color: ${accentColor}"></textarea>
                            <input type="text" placeholder="Your name"
                                   class="w-full px-4 py-3 mb-4 border border-gray-300 ${borderRadiusClasses[borderRadius]} focus:ring-2"
                                   style="focus:ring-color: ${accentColor}">
                            ${buttonElement()}
                        </div>

                        ${samples.length > 0 ? `
                            <div class="mt-8 space-y-4">
                                <h3 class="text-lg ${fontWeightClasses[fontWeight]} text-gray-700 mb-4">Recent Messages</h3>
                                ${samples.slice(0, 3).map((sample, idx) => `
                                    <div class="p-4 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} ${hoverEffectClasses[hoverEffect]}"
                                         style="background: ${cardBg}; border-left: 3px solid ${idx % 2 === 0 ? accentColor : secondaryColor}">
                                        <p class="text-gray-700 italic">"${sample}"</p>
                                        <p class="text-sm text-gray-500 mt-2">— Guest ${idx + 1}</p>
                                    </div>
                                `).join('')}
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        }

        // Modern Card Layout
        if (layout === 'modern') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-3xl mx-auto">
                        <div class="grid md:grid-cols-2 gap-8 items-start">
                            <div>
                                <div class="flex items-center gap-3 mb-4">
                                    <div class="${iconSizeClasses[iconSize]}">${decorationMap[decorations]}</div>
                                    <h2 class="text-2xl ${fontWeightClasses[fontWeight]}" style="color: ${accentColor}">
                                        ${data.title || 'Guest Messages'}
                                    </h2>
                                </div>
                                <p class="text-gray-600 mb-6">${data.instructions || 'Share your thoughts'}</p>

                                ${samples.length > 0 ? `
                                    <div class="space-y-3">
                                        ${samples.slice(0, 2).map(sample => `
                                            <div class="p-4 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}"
                                                 style="background: ${cardBg}">
                                                <p class="text-sm text-gray-700 italic">"${sample}"</p>
                                            </div>
                                        `).join('')}
                                    </div>
                                ` : ''}
                            </div>

                            <div class="p-6 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}"
                                 style="background: ${cardBg}">
                                <textarea placeholder="Your message..." rows="5"
                                          class="w-full px-4 py-3 mb-3 border border-gray-300 ${borderRadiusClasses[borderRadius]} resize-none"></textarea>
                                <input type="text" placeholder="Your name"
                                       class="w-full px-4 py-3 mb-3 border border-gray-300 ${borderRadiusClasses[borderRadius]}">
                                ${buttonElement()}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Minimal Form Layout
        if (layout === 'minimal') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-md mx-auto text-center">
                        <h2 class="text-2xl ${fontWeightClasses[fontWeight]} mb-2" style="color: ${accentColor}">
                            ${data.title || 'Guest Messages'}
                        </h2>
                        <div class="w-16 h-1 mx-auto mb-4 ${borderRadiusClasses[borderRadius]}"
                             style="background: linear-gradient(90deg, ${accentColor}, ${secondaryColor})"></div>
                        <p class="text-gray-600 mb-8">${data.instructions || 'Leave your wishes'}</p>

                        <div class="space-y-4 text-left">
                            <textarea placeholder="Message" rows="4"
                                      class="w-full px-4 py-3 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}
                                             border-0 resize-none"
                                      style="background: ${cardBg}"></textarea>
                            <input type="text" placeholder="Name"
                                   class="w-full px-4 py-3 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} border-0"
                                   style="background: ${cardBg}">
                            ${buttonElement()}
                        </div>
                    </div>
                </div>
            `;
        }

        // Elegant Frame Layout
        if (layout === 'elegant') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto">
                        <div class="relative p-8 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}"
                             style="background: ${cardBg}; border: 4px double ${accentColor}">
                            <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 px-6 py-2 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}"
                                 style="background: linear-gradient(135deg, ${accentColor}, ${secondaryColor})">
                                <span class="text-white ${fontWeightClasses[fontWeight]}">
                                    ${decorationMap[decorations]} ${data.title || 'Guest Messages'}
                                </span>
                            </div>

                            <div class="mt-6 text-center mb-6">
                                <p class="text-gray-600">${data.instructions || 'Share your wishes'}</p>
                            </div>

                            <div class="space-y-4">
                                <textarea placeholder="Your heartfelt message..." rows="5"
                                          class="w-full px-4 py-3 border ${borderRadiusClasses[borderRadius]} resize-none"
                                          style="border-color: ${accentColor}33"></textarea>
                                <input type="text" placeholder="Your name"
                                       class="w-full px-4 py-3 border ${borderRadiusClasses[borderRadius]}"
                                       style="border-color: ${accentColor}33">
                                ${buttonElement()}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Interactive Wall Layout
        if (layout === 'interactive') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-4xl mx-auto">
                        <div class="text-center mb-8">
                            <h2 class="text-3xl ${fontWeightClasses[fontWeight]} mb-2" style="color: ${accentColor}">
                                ${data.title || 'Guest Messages'}
                            </h2>
                            <p class="text-gray-600">${data.instructions || 'Join the conversation'}</p>
                        </div>

                        <div class="grid md:grid-cols-3 gap-6 mb-8">
                            ${samples.length > 0 ? samples.map((sample, idx) => `
                                <div class="p-6 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} ${hoverEffectClasses[hoverEffect]}"
                                     style="background: ${idx % 3 === 0 ? cardBg : idx % 3 === 1 ? accentColor + '11' : secondaryColor + '11'}">
                                    <div class="text-2xl mb-3">${decorationMap[decorations]}</div>
                                    <p class="text-gray-700 text-sm italic mb-2">"${sample}"</p>
                                    <p class="text-xs text-gray-500">— Guest ${idx + 1}</p>
                                </div>
                            `).join('') : `
                                <div class="col-span-3 text-center text-gray-400 py-8">
                                    Be the first to leave a message!
                                </div>
                            `}
                        </div>

                        <div class="max-w-xl mx-auto p-6 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}"
                             style="background: ${cardBg}">
                            <textarea placeholder="Add your message..." rows="3"
                                      class="w-full px-4 py-3 mb-3 border border-gray-300 ${borderRadiusClasses[borderRadius]} resize-none"></textarea>
                            <div class="flex gap-3">
                                <input type="text" placeholder="Name"
                                       class="flex-1 px-4 py-3 border border-gray-300 ${borderRadiusClasses[borderRadius]}">
                                ${buttonElement()}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Notebook Style Layout
        if (layout === 'notebook') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto">
                        <div class="relative p-8 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}"
                             style="background: ${cardBg}; border-left: 3px solid ${accentColor}">
                            <div class="absolute left-0 top-0 bottom-0 w-12"
                                 style="background: repeating-linear-gradient(0deg, transparent, transparent 29px, ${accentColor}33 29px, ${accentColor}33 30px)"></div>

                            <div class="pl-8">
                                <div class="flex items-center gap-3 mb-4">
                                    <div class="${iconSizeClasses[iconSize]}">${decorationMap[decorations]}</div>
                                    <h2 class="text-2xl ${fontWeightClasses[fontWeight]}" style="color: ${accentColor}">
                                        ${data.title || 'Guest Messages'}
                                    </h2>
                                </div>
                                <p class="text-gray-600 mb-6">${data.instructions || 'Write your message'}</p>

                                <div class="space-y-4">
                                    <textarea placeholder="Dear couple..." rows="5"
                                              class="w-full px-4 py-3 border-0 border-b-2 ${borderRadiusClasses[borderRadius]}
                                                     focus:outline-none resize-none"
                                              style="background: transparent; border-color: ${accentColor}33"></textarea>
                                    <input type="text" placeholder="— Your Name"
                                           class="w-full px-4 py-3 border-0 border-b-2 focus:outline-none"
                                           style="background: transparent; border-color: ${accentColor}33">
                                    <div class="pt-2">
                                        ${buttonElement()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Golden Book Layout
        if (layout === 'golden') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: linear-gradient(180deg, ${bg}, ${cardBg})">
                    <div class="max-w-2xl mx-auto">
                        <div class="text-center mb-8">
                            <div class="inline-block p-6 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}"
                                 style="background: linear-gradient(135deg, ${accentColor}, ${secondaryColor})">
                                <div class="${iconSizeClasses[iconSize]} text-white">${decorationMap[decorations]}</div>
                            </div>
                            <h2 class="text-3xl font-serif ${fontWeightClasses[fontWeight]} mt-4" style="color: ${accentColor}">
                                ${data.title || 'Guest Messages'}
                            </h2>
                            <div class="h-1 w-24 mx-auto mt-3 ${borderRadiusClasses[borderRadius]}"
                                 style="background: linear-gradient(90deg, ${accentColor}, ${secondaryColor})"></div>
                        </div>

                        <div class="p-8 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}"
                             style="background: ${cardBg}; border: 3px solid ${accentColor}">
                            <p class="text-center text-gray-600 mb-6 italic">${data.instructions || 'Sign our guestbook'}</p>

                            <div class="space-y-4">
                                <textarea placeholder="Your message..." rows="5"
                                          class="w-full px-4 py-3 ${borderRadiusClasses[borderRadius]} resize-none"
                                          style="background: ${bg}; border: 2px solid ${accentColor}33"></textarea>
                                <input type="text" placeholder="Signature"
                                       class="w-full px-4 py-3 ${borderRadiusClasses[borderRadius]}"
                                       style="background: ${bg}; border: 2px solid ${accentColor}33">
                                ${buttonElement()}
                            </div>
                        </div>

                        ${samples.length > 0 ? `
                            <div class="mt-6 grid md:grid-cols-2 gap-4">
                                ${samples.slice(0, 4).map(sample => `
                                    <div class="p-4 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} ${hoverEffectClasses[hoverEffect]}"
                                         style="background: ${cardBg}; border: 1px solid ${accentColor}22">
                                        <p class="text-sm text-gray-700 italic">"${sample}"</p>
                                    </div>
                                `).join('')}
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        }

        // Floating Cards Layout
        if (layout === 'floating') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-3xl mx-auto">
                        <div class="text-center mb-12">
                            <div class="inline-flex items-center gap-3 mb-3">
                                <div class="w-12 h-1 ${borderRadiusClasses[borderRadius]}" style="background: ${accentColor}"></div>
                                <div class="${iconSizeClasses[iconSize]}">${decorationMap[decorations]}</div>
                                <div class="w-12 h-1 ${borderRadiusClasses[borderRadius]}" style="background: ${secondaryColor}"></div>
                            </div>
                            <h2 class="text-3xl ${fontWeightClasses[fontWeight]}" style="color: ${accentColor}">
                                ${data.title || 'Guest Messages'}
                            </h2>
                            <p class="text-gray-600 mt-2">${data.instructions || 'Share your wishes'}</p>
                        </div>

                        ${samples.length > 0 ? `
                            <div class="grid md:grid-cols-3 gap-6 mb-8">
                                ${samples.map((sample, idx) => `
                                    <div class="p-5 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} ${hoverEffectClasses[hoverEffect]}"
                                         style="background: ${cardBg}; transform: rotate(${idx % 2 === 0 ? '-' : ''}${idx % 3 + 1}deg)">
                                        <p class="text-sm text-gray-700">"${sample}"</p>
                                        <div class="mt-3 pt-3 border-t" style="border-color: ${accentColor}22">
                                            <p class="text-xs text-gray-500">Guest ${idx + 1}</p>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        ` : ''}

                        <div class="max-w-md mx-auto p-6 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}"
                             style="background: ${cardBg}">
                            <textarea placeholder="Write your message..." rows="4"
                                      class="w-full px-4 py-3 mb-3 ${borderRadiusClasses[borderRadius]} resize-none"
                                      style="background: ${bg}; border: 2px dashed ${accentColor}33"></textarea>
                            <input type="text" placeholder="Your name"
                                   class="w-full px-4 py-3 mb-3 ${borderRadiusClasses[borderRadius]}"
                                   style="background: ${bg}; border: 2px dashed ${accentColor}33">
                            ${buttonElement()}
                        </div>
                    </div>
                </div>
            `;
        }

        // Default to classic
        return '';
    }
};
