// Greeting Message Component for Holiday Cards

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.greeting = {
    name: '💌 Greeting Message',
    allowMultiple: true,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                <textarea placeholder="Wishing you joy, peace, and happiness this holiday season..." rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="simple">Simple - Plain Text</option>
                    <option value="card">Card - With Border</option>
                    <option value="quote">Quote - Styled as Quote</option>
                    <option value="decorated">Decorated - With Icons</option>
                    <option value="gradient">Gradient - Background Fade</option>
                    <option value="boxed">Boxed - Contained Design</option>
                    <option value="ribbon">Ribbon - Banner Style</option>
                    <option value="speech">Speech Bubble - Chat Style</option>
                    <option value="postcard">Postcard - Vintage Letter</option>
                    <option value="overlay">Overlay - Image Background</option>
                    <option value="highlighted">Highlighted - Text Marker</option>
                    <option value="newspaper">Newspaper - Column Style</option>
                    <option value="snowcard">Snow Card - Snowy Border</option>
                    <option value="ornament">Ornament - Hanging Decoration</option>
                    <option value="mailbox">Mailbox - Holiday Letter</option>
                    <option value="gingerbread">Gingerbread - Cookie House</option>
                    <option value="icicle">Icicle - Frozen Frame</option>
                    <option value="holly">Holly - Berry Border</option>
                    <option value="present">Present - Gift Tag</option>
                    <option value="cookies">Cookies - Festive Treats</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Alignment</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-style" data-style="align" onchange="updatePreview()">
                    <option value="left">Left</option>
                    <option value="center" selected>Center</option>
                    <option value="right">Right</option>
                    <option value="justify">Justify</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="textColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Font Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-style" data-style="fontSize" onchange="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large" selected>Large</option>
                    <option value="xlarge">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Font Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-style" data-style="fontStyle" onchange="updatePreview()">
                    <option value="normal">Normal</option>
                    <option value="italic">Italic</option>
                    <option value="serif">Serif</option>
                    <option value="serif-italic">Serif Italic</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Spacing</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-style" data-style="spacing" onchange="updatePreview()">
                    <option value="tight">Tight</option>
                    <option value="normal" selected>Normal</option>
                    <option value="relaxed">Relaxed</option>
                    <option value="loose">Loose</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'simple';
        const align = style.align || 'center';
        const bgColor = style.bg || '#ffffff';
        const textColor = style.textColor || globalStyles.textColor;

        const fontSizes = {
            small: 'text-sm',
            medium: 'text-base',
            large: 'text-lg',
            xlarge: 'text-xl'
        };
        const fontSize = fontSizes[style.fontSize] || 'text-lg';

        const fontStyles = {
            normal: '',
            italic: 'italic',
            serif: 'font-serif',
            'serif-italic': 'font-serif italic'
        };
        const fontStyle = fontStyles[style.fontStyle] || '';

        const spacings = {
            tight: 'leading-snug',
            normal: 'leading-relaxed',
            relaxed: 'leading-loose',
            loose: 'leading-10'
        };
        const spacing = spacings[style.spacing] || 'leading-relaxed';

        const message = data.message || 'Your heartfelt holiday message goes here...';

        // Simple Layout
        if (layout === 'simple') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; text-align: ${align}">
                    <div class="max-w-2xl mx-auto">
                        <p class="${fontSize} ${spacing} ${fontStyle}" style="color: ${textColor}">${message}</p>
                    </div>
                </div>
            `;
        }

        // Card Layout
        if (layout === 'card') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto">
                        <div class="border-2 rounded-lg p-8 shadow-lg" style="border-color: ${globalStyles.primaryColor}; text-align: ${align}">
                            <p class="${fontSize} ${spacing} ${fontStyle}" style="color: ${textColor}">${message}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        // Quote Layout
        if (layout === 'quote') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto" style="text-align: ${align}">
                        <div class="relative">
                            <div class="text-6xl opacity-20 absolute -top-4 -left-2" style="color: ${globalStyles.primaryColor}">"</div>
                            <blockquote class="relative pl-8 pr-8 border-l-4" style="border-color: ${globalStyles.primaryColor}">
                                <p class="${fontSize} ${spacing} ${fontStyle} font-medium" style="color: ${textColor}">${message}</p>
                            </blockquote>
                            <div class="text-6xl opacity-20 absolute -bottom-4 right-0" style="color: ${globalStyles.primaryColor}">"</div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Decorated Layout
        if (layout === 'decorated') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto" style="text-align: ${align}">
                        <div class="flex items-center justify-center mb-4">
                            <span class="text-2xl mx-2">💝</span>
                            <span class="text-2xl mx-2">✨</span>
                            <span class="text-2xl mx-2">💝</span>
                        </div>
                        <p class="${fontSize} ${spacing} ${fontStyle}" style="color: ${textColor}">${message}</p>
                        <div class="flex items-center justify-center mt-4">
                            <span class="text-2xl mx-2">🎂</span>
                            <span class="text-2xl mx-2">🎈</span>
                            <span class="text-2xl mx-2">🎂</span>
                        </div>
                    </div>
                </div>
            `;
        }

        // Gradient Layout
        if (layout === 'gradient') {
            return `
                <div class="py-12 px-6 relative overflow-hidden" style="background: linear-gradient(135deg, ${bgColor} 0%, ${globalStyles.primaryColor}22 100%)">
                    <div class="max-w-2xl mx-auto relative z-10" style="text-align: ${align}">
                        <p class="${fontSize} ${spacing} ${fontStyle}" style="color: ${textColor}">${message}</p>
                    </div>
                </div>
            `;
        }

        // Boxed Layout
        if (layout === 'boxed') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-xl mx-auto">
                        <div class="rounded-xl p-8 shadow-xl" style="background: linear-gradient(135deg, ${globalStyles.primaryColor}15 0%, ${globalStyles.secondaryColor}15 100%); text-align: ${align}">
                            <div class="bg-white bg-opacity-80 rounded-lg p-6">
                                <p class="${fontSize} ${spacing} ${fontStyle}" style="color: ${textColor}">${message}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Ribbon Layout
        if (layout === 'ribbon') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto relative">
                        <div class="absolute -top-4 left-0 right-0 flex justify-center">
                            <div class="px-8 py-2 shadow-lg" style="background: ${globalStyles.primaryColor}; clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%);">
                                <span class="text-white font-bold text-sm">✨ Special Message ✨</span>
                            </div>
                        </div>
                        <div class="pt-8 px-6 pb-6 border-2 rounded-lg" style="border-color: ${globalStyles.primaryColor}; text-align: ${align}">
                            <p class="${fontSize} ${spacing} ${fontStyle}" style="color: ${textColor}">${message}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        // Speech Bubble Layout
        if (layout === 'speech') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-xl mx-auto">
                        <div class="relative p-6 rounded-2xl shadow-lg" style="background: ${globalStyles.primaryColor}22; border: 2px solid ${globalStyles.primaryColor}">
                            <p class="${fontSize} ${spacing} ${fontStyle}" style="color: ${textColor}; text-align: ${align}">${message}</p>
                            <div class="absolute -bottom-4 left-12 w-8 h-8" style="background: ${globalStyles.primaryColor}22; border-left: 2px solid ${globalStyles.primaryColor}; border-bottom: 2px solid ${globalStyles.primaryColor}; transform: rotate(-45deg);"></div>
                        </div>
                        <div class="mt-6 ml-4 text-3xl">💬</div>
                    </div>
                </div>
            `;
        }

        // Postcard Layout
        if (layout === 'postcard') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto">
                        <div class="bg-amber-50 p-8 rounded shadow-xl border-4 border-amber-200" style="background-image: repeating-linear-gradient(90deg, transparent, transparent 35px, rgba(0,0,0,.03) 35px, rgba(0,0,0,.03) 36px);">
                            <div class="mb-4 flex items-center gap-2 text-amber-800">
                                <span class="text-2xl">✉️</span>
                                <div class="text-xs font-serif italic">A Special Birthday Note</div>
                            </div>
                            <p class="${fontSize} ${spacing} font-serif italic" style="color: ${textColor}; text-align: ${align}">${message}</p>
                            <div class="mt-6 pt-4 border-t border-amber-300 flex justify-end">
                                <div class="text-sm font-serif italic text-amber-700">With warm wishes 💝</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Overlay Layout
        if (layout === 'overlay') {
            return `
                <div class="py-12 px-6 relative overflow-hidden" style="background: ${bgColor}">
                    <div class="absolute inset-0 opacity-5" style="background: repeating-linear-gradient(45deg, ${globalStyles.primaryColor}, ${globalStyles.primaryColor} 10px, transparent 10px, transparent 20px);"></div>
                    <div class="max-w-2xl mx-auto relative z-10">
                        <div class="backdrop-blur-sm p-8 rounded-2xl shadow-2xl" style="background: rgba(255,255,255,0.9); border: 1px solid ${globalStyles.primaryColor}33">
                            <div class="text-center mb-4">
                                <div class="inline-block px-4 py-1 rounded-full text-xs font-bold text-white" style="background: ${globalStyles.primaryColor}">
                                    Birthday Message
                                </div>
                            </div>
                            <p class="${fontSize} ${spacing} ${fontStyle}" style="color: ${textColor}; text-align: ${align}">${message}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        // Highlighted Layout
        if (layout === 'highlighted') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto" style="text-align: ${align}">
                        <div class="inline-block relative">
                            <div class="absolute inset-0 -skew-x-12 opacity-30 rounded" style="background: ${globalStyles.primaryColor}; transform: translateY(30%);"></div>
                            <p class="${fontSize} ${spacing} ${fontStyle} relative z-10 px-4" style="color: ${textColor}; background: linear-gradient(to right, ${globalStyles.primaryColor}20 0%, ${globalStyles.primaryColor}40 100%); padding: 0.5rem 1rem; border-left: 4px solid ${globalStyles.primaryColor};">${message}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        // Newspaper Layout
        if (layout === 'newspaper') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-3xl mx-auto bg-gray-50 p-8 rounded shadow-lg border border-gray-300">
                        <div class="border-t-4 border-b-4 border-black py-2 mb-6">
                            <h3 class="text-center font-black uppercase text-sm tracking-widest" style="color: ${textColor}">Birthday Chronicle</h3>
                        </div>
                        <div class="columns-1 md:columns-2 gap-6">
                            <p class="${fontSize} ${spacing} font-serif text-justify" style="color: ${textColor}">${message}</p>
                        </div>
                        <div class="mt-6 pt-4 border-t border-gray-300 text-center">
                            <div class="text-xs uppercase tracking-wide text-gray-500">Special Edition • Celebrating You</div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Snow Card Layout - Snowy Border
        if (layout === 'snowcard') {
            return `
                <div class="py-12 px-6 relative overflow-hidden" style="background: linear-gradient(to bottom, #dbeafe 0%, #eff6ff 100%);">
                    <div class="absolute top-0 left-0 right-0 h-8 flex justify-around items-start text-white text-2xl pointer-events-none">
                        <span>❄️</span><span>❄️</span><span>❄️</span><span>❄️</span><span>❄️</span>
                    </div>
                    <div class="absolute bottom-0 left-0 right-0 h-12" style="background: linear-gradient(to bottom, transparent, white); border-top: 4px solid #e0f2fe;">
                        <div class="absolute -top-2 left-0 right-0 flex justify-around text-blue-200 text-3xl">
                            <span>▼</span><span>▼</span><span>▼</span><span>▼</span><span>▼</span><span>▼</span>
                        </div>
                    </div>
                    <div class="max-w-2xl mx-auto bg-white rounded-lg p-8 shadow-xl relative z-10" style="text-align: ${align}">
                        <p class="${fontSize} ${spacing} ${fontStyle}" style="color: ${textColor}">${message}</p>
                    </div>
                </div>
            `;
        }

        // Ornament Layout - Hanging Decoration
        if (layout === 'ornament') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-xl mx-auto relative">
                        <div class="absolute -top-8 left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-gray-400 to-gray-600"></div>
                        <div class="absolute -top-10 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full" style="background: ${globalStyles.primaryColor};"></div>
                        <div class="relative rounded-full p-12 shadow-2xl" style="background: linear-gradient(135deg, ${globalStyles.primaryColor}30 0%, ${globalStyles.secondaryColor}30 100%); border: 4px solid ${globalStyles.primaryColor};">
                            <div class="absolute top-4 right-4 text-2xl">✨</div>
                            <div class="absolute bottom-4 left-4 text-2xl">✨</div>
                            <div style="text-align: ${align}">
                                <div class="text-4xl mb-4">🎄</div>
                                <p class="${fontSize} ${spacing} ${fontStyle}" style="color: ${textColor}">${message}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Mailbox Layout - Holiday Letter
        if (layout === 'mailbox') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto">
                        <div class="bg-gradient-to-r from-red-600 to-red-700 rounded-t-2xl p-4 flex items-center justify-between">
                            <div class="text-white text-2xl">📬</div>
                            <div class="text-white text-sm font-semibold uppercase tracking-wide">Holiday Mail</div>
                            <div class="text-white text-2xl">✉️</div>
                        </div>
                        <div class="bg-white p-8 rounded-b-2xl shadow-xl border-4 border-red-600">
                            <div class="mb-4 flex items-center gap-2">
                                <div class="text-2xl">🎄</div>
                                <div class="text-xs uppercase tracking-wide text-gray-500">Season's Greetings</div>
                            </div>
                            <p class="${fontSize} ${spacing} ${fontStyle}" style="color: ${textColor}; text-align: ${align}">${message}</p>
                            <div class="mt-6 pt-4 border-t border-gray-200 flex justify-end">
                                <div class="text-sm italic text-gray-500">With warmest wishes 🎁</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Gingerbread Layout - Cookie House
        if (layout === 'gingerbread') {
            return `
                <div class="py-12 px-6" style="background: linear-gradient(to bottom, #fef3c7 0%, #fde68a 100%);">
                    <div class="max-w-xl mx-auto relative">
                        <div class="absolute -top-8 left-1/2 transform -translate-x-1/2 w-0 h-0" style="border-left: 60px solid transparent; border-right: 60px solid transparent; border-bottom: 50px solid #92400e;"></div>
                        <div class="relative rounded-lg p-8 shadow-2xl" style="background: #d97706; border: 6px solid white; border-style: dashed;">
                            <div class="absolute top-2 left-2 text-xl">🍬</div>
                            <div class="absolute top-2 right-2 text-xl">🍬</div>
                            <div class="absolute bottom-2 left-2 text-xl">🍬</div>
                            <div class="absolute bottom-2 right-2 text-xl">🍬</div>
                            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl opacity-10">🍪</div>
                            <div class="relative z-10 bg-amber-50 rounded-lg p-6" style="text-align: ${align}">
                                <p class="${fontSize} ${spacing} ${fontStyle}" style="color: ${textColor}">${message}</p>
                            </div>
                            <div class="mt-4 flex justify-center gap-2 text-2xl">
                                <span>🍭</span><span>🎀</span><span>🍭</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Icicle Layout - Frozen Frame
        if (layout === 'icicle') {
            return `
                <div class="py-12 px-6 relative overflow-hidden" style="background: linear-gradient(to bottom, #0ea5e9 0%, #38bdf8 100%);">
                    <div class="absolute top-0 left-0 right-0 flex justify-around text-6xl text-cyan-100 opacity-80">
                        <span class="transform rotate-180">💧</span>
                        <span class="transform rotate-180">💧</span>
                        <span class="transform rotate-180">💧</span>
                        <span class="transform rotate-180">💧</span>
                    </div>
                    <div class="max-w-2xl mx-auto bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-8 shadow-2xl relative z-10" style="border: 4px solid rgba(165, 243, 252, 0.5);">
                        <div class="absolute -top-4 left-1/4 text-3xl">❄️</div>
                        <div class="absolute -top-4 right-1/4 text-3xl">❄️</div>
                        <div style="text-align: ${align}">
                            <div class="mb-4 text-3xl">🧊✨🧊</div>
                            <p class="${fontSize} ${spacing} ${fontStyle}" style="color: ${textColor}">${message}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        // Holly Layout - Berry Border
        if (layout === 'holly') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto relative">
                        <div class="absolute -top-6 left-0 right-0 flex justify-center">
                            <div class="flex items-center gap-1">
                                <span class="text-4xl" style="color: #059669;">🍃</span>
                                <span class="text-2xl" style="color: #dc2626;">🔴</span>
                                <span class="text-4xl" style="color: #059669;">🍃</span>
                            </div>
                        </div>
                        <div class="relative rounded-xl p-8 shadow-xl" style="background: white; border: 4px solid #059669;">
                            <div class="absolute top-0 left-0 text-3xl" style="color: #dc2626; transform: translate(-50%, -50%);">🔴</div>
                            <div class="absolute top-0 right-0 text-3xl" style="color: #dc2626; transform: translate(50%, -50%);">🔴</div>
                            <div class="absolute bottom-0 left-0 text-3xl" style="color: #dc2626; transform: translate(-50%, 50%);">🔴</div>
                            <div class="absolute bottom-0 right-0 text-3xl" style="color: #dc2626; transform: translate(50%, 50%);">🔴</div>
                            <p class="${fontSize} ${spacing} ${fontStyle}" style="color: ${textColor}; text-align: ${align}">${message}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        // Present Layout - Gift Tag
        if (layout === 'present') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-xl mx-auto">
                        <div class="relative bg-gradient-to-br from-red-500 to-red-700 rounded-lg p-8 shadow-2xl overflow-hidden">
                            <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-full bg-gradient-to-r from-yellow-400 to-yellow-500"></div>
                            <div class="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-12 bg-gradient-to-b from-yellow-400 to-yellow-500"></div>
                            <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div class="w-16 h-12 bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-full" style="clip-path: ellipse(50% 50%);"></div>
                            </div>
                            <div class="relative z-10 bg-white rounded-lg p-6" style="text-align: ${align}">
                                <div class="mb-3 flex items-center justify-center gap-2">
                                    <div class="text-xs uppercase tracking-wide text-gray-500">To:</div>
                                    <div class="text-sm font-semibold">You</div>
                                    <div class="text-xl">🎁</div>
                                </div>
                                <p class="${fontSize} ${spacing} ${fontStyle}" style="color: ${textColor}">${message}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Cookies Layout - Festive Treats
        if (layout === 'cookies') {
            return `
                <div class="py-12 px-6" style="background: linear-gradient(to bottom, #fee2e2 0%, #fef2f2 100%);">
                    <div class="max-w-2xl mx-auto">
                        <div class="bg-white rounded-2xl p-8 shadow-xl relative" style="border: 4px solid #f59e0b;">
                            <div class="absolute -top-6 left-8 text-5xl transform -rotate-12">🍪</div>
                            <div class="absolute -top-6 right-8 text-5xl transform rotate-12">🍪</div>
                            <div class="absolute -bottom-6 left-1/4 text-4xl">🥛</div>
                            <div class="absolute -bottom-6 right-1/4 text-5xl transform rotate-6">🍪</div>
                            <div class="mb-4 text-center">
                                <div class="inline-block px-4 py-2 rounded-full text-sm font-bold text-white" style="background: #f59e0b;">
                                    Santa's Favorite 🎅
                                </div>
                            </div>
                            <p class="${fontSize} ${spacing} ${fontStyle}" style="color: ${textColor}; text-align: ${align}">${message}</p>
                            <div class="mt-6 flex justify-center gap-3 text-2xl">
                                <span>🍪</span><span>✨</span><span>🥛</span><span>✨</span><span>🍪</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Default
        return `
            <div class="py-12 px-6" style="background: ${bgColor}; text-align: ${align}">
                <div class="max-w-2xl mx-auto">
                    <p class="${fontSize} ${spacing} ${fontStyle}" style="color: ${textColor}">${message}</p>
                </div>
            </div>
        `;
    }
};
