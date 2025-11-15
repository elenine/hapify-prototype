// Horoscope/Zodiac Component for Birthday Greeting Card

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.horoscope = {
    name: '♈ Horoscope',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Your Birthday Horoscope" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Zodiac Sign</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="zodiacSign" onchange="updatePreview()">
                    <option value="">Select sign...</option>
                    <option value="♈ Aries">♈ Aries (Mar 21 - Apr 19)</option>
                    <option value="♉ Taurus">♉ Taurus (Apr 20 - May 20)</option>
                    <option value="♊ Gemini">♊ Gemini (May 21 - Jun 20)</option>
                    <option value="♋ Cancer">♋ Cancer (Jun 21 - Jul 22)</option>
                    <option value="♌ Leo">♌ Leo (Jul 23 - Aug 22)</option>
                    <option value="♍ Virgo">♍ Virgo (Aug 23 - Sep 22)</option>
                    <option value="♎ Libra">♎ Libra (Sep 23 - Oct 22)</option>
                    <option value="♏ Scorpio">♏ Scorpio (Oct 23 - Nov 21)</option>
                    <option value="♐ Sagittarius">♐ Sagittarius (Nov 22 - Dec 21)</option>
                    <option value="♑ Capricorn">♑ Capricorn (Dec 22 - Jan 19)</option>
                    <option value="♒ Aquarius">♒ Aquarius (Jan 20 - Feb 18)</option>
                    <option value="♓ Pisces">♓ Pisces (Feb 19 - Mar 20)</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Birthday Message</label>
                <textarea placeholder="This year brings new opportunities and adventures..." rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Lucky Number</label>
                <input type="text" placeholder="7" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="luckyNumber" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Lucky Color</label>
                <input type="text" placeholder="Blue" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="luckyColor" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="centeredCard">Centered Card - Classic card layout with centered content</option>
                    <option value="splitView">Split View - Zodiac sign on left, details on right</option>
                    <option value="circleZodiac">Circle Zodiac - Large circular zodiac symbol</option>
                    <option value="bannerStyle">Banner Style - Full-width banner with gradient</option>
                    <option value="compactBoxes">Compact Boxes - Grid layout with info boxes</option>
                    <option value="cosmicTheme">Cosmic Theme - Starry background theme</option>
                    <option value="mystical">Mystical Glow - Magical aura effects</option>
                    <option value="constellation">Constellation Map - Star pattern design</option>
                    <option value="fortune">Fortune Card - Fortune cookie style</option>
                    <option value="crystal">Crystal Ball - Crystal sphere aesthetic</option>
                    <option value="scroll">Ancient Scroll - Vintage parchment look</option>
                    <option value="zodiacWheel">Zodiac Wheel - Circular wheel design</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ede9fe" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#8b5cf6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Shadow</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg">Large</option>
                    <option value="xl" selected>Extra Large</option>
                    <option value="2xl">2X Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Border Radius</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="borderRadius" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="md">Medium</option>
                    <option value="lg">Large</option>
                    <option value="xl">Extra Large</option>
                    <option value="2xl" selected>2X Large</option>
                    <option value="3xl">3X Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Zodiac Symbol Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="symbolSize" onchange="updatePreview()">
                    <option value="text-4xl">Small</option>
                    <option value="text-5xl">Medium</option>
                    <option value="text-6xl" selected>Large</option>
                    <option value="text-7xl">Extra Large</option>
                    <option value="text-8xl">Huge</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'centeredCard';
        const bgColor = style.bg || '#ede9fe';
        const cardBg = style.cardBg || '#ffffff';
        const accentColor = style.accent || '#8b5cf6';
        const textColor = style.text || '#1f2937';
        const shadow = style.shadow || 'xl';
        const borderRadius = style.borderRadius || '2xl';
        const symbolSize = style.symbolSize || 'text-6xl';

        const shadowClass = shadow === 'none' ? '' : `shadow-${shadow}`;
        const radiusClass = borderRadius === 'none' ? '' : `rounded-${borderRadius}`;
        const zodiacSymbol = data.zodiacSign ? data.zodiacSign.split(' ')[0] : '⭐';
        const zodiacName = data.zodiacSign || 'Your Sign';

        if (layout === 'centeredCard') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-2xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-8">${data.title || 'Your Birthday Horoscope'}</h3>
                        <div class="${radiusClass} ${shadowClass} p-8" style="background: ${cardBg}">
                            ${data.zodiacSign ? `
                                <div class="text-center mb-6">
                                    <div class="${symbolSize} mb-3" style="color: ${accentColor}">${zodiacSymbol}</div>
                                    <h4 class="text-2xl font-bold">${zodiacName}</h4>
                                </div>
                            ` : ''}
                            ${data.message ? `
                                <p class="text-lg leading-relaxed mb-6 text-center">${data.message}</p>
                            ` : ''}
                            <div class="grid grid-cols-2 gap-6 mt-6">
                                ${data.luckyNumber ? `
                                    <div class="text-center p-4 rounded-lg" style="background: ${bgColor}">
                                        <div class="text-sm font-semibold text-gray-500 mb-2">LUCKY NUMBER</div>
                                        <div class="text-3xl font-bold" style="color: ${accentColor}">${data.luckyNumber}</div>
                                    </div>
                                ` : ''}
                                ${data.luckyColor ? `
                                    <div class="text-center p-4 rounded-lg" style="background: ${bgColor}">
                                        <div class="text-sm font-semibold text-gray-500 mb-2">LUCKY COLOR</div>
                                        <div class="text-xl font-bold" style="color: ${accentColor}">${data.luckyColor}</div>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'splitView') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-8">${data.title || 'Your Birthday Horoscope'}</h3>
                        <div class="${radiusClass} ${shadowClass} overflow-hidden" style="background: ${cardBg}">
                            <div class="grid md:grid-cols-2">
                                <div class="p-8 flex flex-col items-center justify-center" style="background: ${accentColor}">
                                    <div class="${symbolSize} text-white mb-4">${zodiacSymbol}</div>
                                    <h4 class="text-2xl font-bold text-white text-center">${zodiacName}</h4>
                                </div>
                                <div class="p-8">
                                    ${data.message ? `<p class="text-lg leading-relaxed mb-6">${data.message}</p>` : ''}
                                    <div class="space-y-4">
                                        ${data.luckyNumber ? `
                                            <div class="flex items-center justify-between p-3 rounded-lg" style="background: ${bgColor}">
                                                <span class="text-sm font-semibold text-gray-500">LUCKY NUMBER</span>
                                                <span class="text-2xl font-bold" style="color: ${accentColor}">${data.luckyNumber}</span>
                                            </div>
                                        ` : ''}
                                        ${data.luckyColor ? `
                                            <div class="flex items-center justify-between p-3 rounded-lg" style="background: ${bgColor}">
                                                <span class="text-sm font-semibold text-gray-500">LUCKY COLOR</span>
                                                <span class="text-xl font-bold" style="color: ${accentColor}">${data.luckyColor}</span>
                                            </div>
                                        ` : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'circleZodiac') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-2xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-8">${data.title || 'Your Birthday Horoscope'}</h3>
                        <div class="${radiusClass} ${shadowClass} p-8" style="background: ${cardBg}">
                            <div class="flex flex-col items-center mb-6">
                                <div class="w-32 h-32 rounded-full flex items-center justify-center ${shadowClass} mb-4" style="background: ${accentColor}">
                                    <div class="${symbolSize} text-white">${zodiacSymbol}</div>
                                </div>
                                <h4 class="text-2xl font-bold">${zodiacName}</h4>
                            </div>
                            ${data.message ? `<p class="text-lg leading-relaxed mb-6 text-center">${data.message}</p>` : ''}
                            <div class="flex gap-4 justify-center mt-6">
                                ${data.luckyNumber ? `
                                    <div class="text-center p-6 rounded-full ${shadowClass}" style="background: ${bgColor}; min-width: 120px">
                                        <div class="text-xs font-semibold text-gray-500 mb-2">LUCKY</div>
                                        <div class="text-3xl font-bold" style="color: ${accentColor}">${data.luckyNumber}</div>
                                    </div>
                                ` : ''}
                                ${data.luckyColor ? `
                                    <div class="text-center p-6 rounded-full ${shadowClass}" style="background: ${bgColor}; min-width: 120px">
                                        <div class="text-xs font-semibold text-gray-500 mb-2">COLOR</div>
                                        <div class="text-xl font-bold" style="color: ${accentColor}">${data.luckyColor}</div>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'bannerStyle') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-8">${data.title || 'Your Birthday Horoscope'}</h3>
                        <div class="${radiusClass} ${shadowClass} overflow-hidden" style="background: ${cardBg}">
                            <div class="py-12 px-8 text-center text-white" style="background: linear-gradient(135deg, ${accentColor}, ${bgColor})">
                                <div class="${symbolSize} mb-4">${zodiacSymbol}</div>
                                <h4 class="text-3xl font-bold mb-2">${zodiacName}</h4>
                                ${data.message ? `<p class="text-lg max-w-2xl mx-auto">${data.message}</p>` : ''}
                            </div>
                            <div class="p-8">
                                <div class="grid grid-cols-2 gap-6">
                                    ${data.luckyNumber ? `
                                        <div class="text-center p-6 rounded-lg" style="background: ${bgColor}">
                                            <div class="text-sm font-semibold text-gray-500 mb-2">LUCKY NUMBER</div>
                                            <div class="text-4xl font-bold" style="color: ${accentColor}">${data.luckyNumber}</div>
                                        </div>
                                    ` : ''}
                                    ${data.luckyColor ? `
                                        <div class="text-center p-6 rounded-lg" style="background: ${bgColor}">
                                            <div class="text-sm font-semibold text-gray-500 mb-2">LUCKY COLOR</div>
                                            <div class="text-2xl font-bold" style="color: ${accentColor}">${data.luckyColor}</div>
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'compactBoxes') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-3xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-8">${data.title || 'Your Birthday Horoscope'}</h3>
                        <div class="grid md:grid-cols-3 gap-4">
                            <div class="${radiusClass} ${shadowClass} p-6 text-center" style="background: ${cardBg}">
                                <div class="${symbolSize} mb-3" style="color: ${accentColor}">${zodiacSymbol}</div>
                                <h4 class="text-lg font-bold">${zodiacName}</h4>
                            </div>
                            ${data.luckyNumber ? `
                                <div class="${radiusClass} ${shadowClass} p-6 text-center" style="background: ${cardBg}">
                                    <div class="text-sm font-semibold text-gray-500 mb-2">LUCKY NUMBER</div>
                                    <div class="text-5xl font-bold" style="color: ${accentColor}">${data.luckyNumber}</div>
                                </div>
                            ` : ''}
                            ${data.luckyColor ? `
                                <div class="${radiusClass} ${shadowClass} p-6 text-center" style="background: ${cardBg}">
                                    <div class="text-sm font-semibold text-gray-500 mb-2">LUCKY COLOR</div>
                                    <div class="text-2xl font-bold" style="color: ${accentColor}">${data.luckyColor}</div>
                                </div>
                            ` : ''}
                        </div>
                        ${data.message ? `
                            <div class="${radiusClass} ${shadowClass} p-6 mt-4" style="background: ${cardBg}">
                                <p class="text-lg leading-relaxed text-center">${data.message}</p>
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        }

        if (layout === 'cosmicTheme') {
            return `
                <div class="py-12 px-6 relative overflow-hidden" style="background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)">
                    <div class="absolute inset-0 opacity-20">
                        <div class="absolute top-10 left-10 w-2 h-2 bg-white rounded-full"></div>
                        <div class="absolute top-20 right-20 w-1 h-1 bg-white rounded-full"></div>
                        <div class="absolute bottom-20 left-1/4 w-2 h-2 bg-white rounded-full"></div>
                        <div class="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full"></div>
                    </div>
                    <div class="max-w-2xl mx-auto relative z-10">
                        <h3 class="text-3xl font-bold text-center mb-8 text-white">${data.title || 'Your Birthday Horoscope'}</h3>
                        <div class="${radiusClass} ${shadowClass} p-8 text-center" style="background: rgba(255,255,255,0.95)">
                            <div class="${symbolSize} mb-4" style="color: ${accentColor}">${zodiacSymbol}</div>
                            <h4 class="text-2xl font-bold mb-4" style="color: ${textColor}">${zodiacName}</h4>
                            ${data.message ? `<p class="text-lg leading-relaxed mb-6" style="color: ${textColor}">${data.message}</p>` : ''}
                            <div class="flex gap-4 justify-center">
                                ${data.luckyNumber ? `
                                    <div class="px-6 py-4 rounded-lg" style="background: ${accentColor}">
                                        <div class="text-xs font-semibold text-white mb-1">LUCKY NUMBER</div>
                                        <div class="text-3xl font-bold text-white">${data.luckyNumber}</div>
                                    </div>
                                ` : ''}
                                ${data.luckyColor ? `
                                    <div class="px-6 py-4 rounded-lg" style="background: ${accentColor}">
                                        <div class="text-xs font-semibold text-white mb-1">LUCKY COLOR</div>
                                        <div class="text-xl font-bold text-white">${data.luckyColor}</div>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'mystical') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-2xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-8">${data.title || 'Your Birthday Horoscope'}</h3>
                        <div class="${radiusClass} ${shadowClass} p-8 relative overflow-hidden" style="background: ${cardBg}; border: 3px solid ${accentColor}; box-shadow: 0 0 40px ${accentColor}66, inset 0 0 20px ${accentColor}11">
                            <div class="absolute top-0 left-0 w-full h-full opacity-10" style="background: radial-gradient(circle at 50% 50%, ${accentColor}, transparent)"></div>
                            <div class="relative z-10 text-center">
                                <div class="${symbolSize} mb-4 animate-pulse" style="color: ${accentColor}; text-shadow: 0 0 20px ${accentColor}66">${zodiacSymbol}</div>
                                <h4 class="text-2xl font-bold mb-4">${zodiacName}</h4>
                                ${data.message ? `<p class="text-lg leading-relaxed mb-6">${data.message}</p>` : ''}
                                <div class="grid grid-cols-2 gap-4 mt-6">
                                    ${data.luckyNumber ? `
                                        <div class="p-4 rounded-xl ${shadowClass}" style="background: ${bgColor}; border: 2px solid ${accentColor}">
                                            <div class="text-xs font-semibold text-gray-500 mb-1">LUCKY NUMBER</div>
                                            <div class="text-3xl font-bold" style="color: ${accentColor}">${data.luckyNumber}</div>
                                        </div>
                                    ` : ''}
                                    ${data.luckyColor ? `
                                        <div class="p-4 rounded-xl ${shadowClass}" style="background: ${bgColor}; border: 2px solid ${accentColor}">
                                            <div class="text-xs font-semibold text-gray-500 mb-1">LUCKY COLOR</div>
                                            <div class="text-xl font-bold" style="color: ${accentColor}">${data.luckyColor}</div>
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'constellation') {
            return `
                <div class="py-12 px-6 relative overflow-hidden" style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: white">
                    <div class="absolute inset-0 opacity-30">
                        ${[...Array(20)].map((_, i) => `<div class="absolute w-1 h-1 bg-white rounded-full" style="left: ${Math.random() * 100}%; top: ${Math.random() * 100}%"></div>`).join('')}
                    </div>
                    <div class="max-w-2xl mx-auto relative z-10">
                        <h3 class="text-3xl font-bold text-center mb-8">${data.title || 'Your Birthday Horoscope'}</h3>
                        <div class="${radiusClass} ${shadowClass} p-8 text-center" style="background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2)">
                            <div class="${symbolSize} mb-4" style="color: ${accentColor}">${zodiacSymbol}</div>
                            <h4 class="text-2xl font-bold mb-4">${zodiacName}</h4>
                            ${data.message ? `<p class="text-lg leading-relaxed mb-6 opacity-90">${data.message}</p>` : ''}
                            <div class="flex gap-4 justify-center mt-6">
                                ${data.luckyNumber ? `
                                    <div class="px-6 py-4 rounded-full ${shadowClass}" style="background: rgba(255,255,255,0.2)">
                                        <div class="text-xs font-semibold opacity-80 mb-1">NUMBER</div>
                                        <div class="text-3xl font-bold">${data.luckyNumber}</div>
                                    </div>
                                ` : ''}
                                ${data.luckyColor ? `
                                    <div class="px-6 py-4 rounded-full ${shadowClass}" style="background: rgba(255,255,255,0.2)">
                                        <div class="text-xs font-semibold opacity-80 mb-1">COLOR</div>
                                        <div class="text-xl font-bold">${data.luckyColor}</div>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'fortune') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-2xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-8">${data.title || 'Your Birthday Horoscope'}</h3>
                        <div class="relative">
                            <div class="${radiusClass} ${shadowClass} p-8" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd); transform: perspective(1000px) rotateX(-5deg)">
                                <div class="text-center">
                                    <div class="${symbolSize} mb-4 text-white">${zodiacSymbol}</div>
                                    <h4 class="text-2xl font-bold text-white mb-4">${zodiacName}</h4>
                                </div>
                            </div>
                            <div class="${radiusClass} ${shadowClass} p-8 mt-4" style="background: ${cardBg}">
                                ${data.message ? `
                                    <p class="text-lg leading-relaxed text-center mb-6 italic">${data.message}</p>
                                ` : ''}
                                <div class="flex gap-4 justify-center">
                                    ${data.luckyNumber ? `
                                        <div class="text-center">
                                            <div class="text-xs font-semibold text-gray-500 mb-1">LUCKY</div>
                                            <div class="text-4xl font-bold" style="color: ${accentColor}">${data.luckyNumber}</div>
                                        </div>
                                    ` : ''}
                                    ${data.luckyColor ? `
                                        <div class="w-px bg-gray-300"></div>
                                        <div class="text-center">
                                            <div class="text-xs font-semibold text-gray-500 mb-1">COLOR</div>
                                            <div class="text-2xl font-bold" style="color: ${accentColor}">${data.luckyColor}</div>
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'crystal') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-2xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-8">${data.title || 'Your Birthday Horoscope'}</h3>
                        <div class="flex justify-center mb-8">
                            <div class="relative w-48 h-48">
                                <div class="absolute inset-0 rounded-full ${shadowClass}" style="background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), ${accentColor}66); border: 4px solid ${accentColor}"></div>
                                <div class="absolute inset-0 flex items-center justify-center">
                                    <div class="${symbolSize}" style="color: ${accentColor}">${zodiacSymbol}</div>
                                </div>
                            </div>
                        </div>
                        <div class="${radiusClass} ${shadowClass} p-8 text-center" style="background: ${cardBg}">
                            <h4 class="text-2xl font-bold mb-4" style="color: ${accentColor}">${zodiacName}</h4>
                            ${data.message ? `<p class="text-lg leading-relaxed mb-6">${data.message}</p>` : ''}
                            <div class="grid grid-cols-2 gap-4 mt-6">
                                ${data.luckyNumber ? `
                                    <div class="p-4 rounded-lg" style="background: ${bgColor}">
                                        <div class="text-xs font-semibold text-gray-500 mb-1">LUCKY NUMBER</div>
                                        <div class="text-3xl font-bold" style="color: ${accentColor}">${data.luckyNumber}</div>
                                    </div>
                                ` : ''}
                                ${data.luckyColor ? `
                                    <div class="p-4 rounded-lg" style="background: ${bgColor}">
                                        <div class="text-xs font-semibold text-gray-500 mb-1">LUCKY COLOR</div>
                                        <div class="text-xl font-bold" style="color: ${accentColor}">${data.luckyColor}</div>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'scroll') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-2xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-8">${data.title || 'Your Birthday Horoscope'}</h3>
                        <div class="relative ${shadowClass}" style="background: linear-gradient(to bottom, #f5e6d3, #efe0ce); border-radius: 20px; padding: 40px 30px">
                            <div class="absolute top-0 left-0 right-0 h-8 rounded-t-3xl" style="background: linear-gradient(to bottom, #8b7355, #a0826d); box-shadow: inset 0 -2px 4px rgba(0,0,0,0.3)"></div>
                            <div class="absolute bottom-0 left-0 right-0 h-8 rounded-b-3xl" style="background: linear-gradient(to top, #8b7355, #a0826d); box-shadow: inset 0 2px 4px rgba(0,0,0,0.3)"></div>
                            <div class="relative pt-4 pb-4">
                                <div class="text-center mb-6">
                                    <div class="${symbolSize} mb-3" style="color: ${accentColor}">${zodiacSymbol}</div>
                                    <h4 class="text-2xl font-bold mb-4" style="font-family: serif">${zodiacName}</h4>
                                </div>
                                ${data.message ? `
                                    <p class="text-lg leading-relaxed mb-6 text-center" style="font-family: serif">${data.message}</p>
                                ` : ''}
                                <div class="flex gap-8 justify-center mt-6">
                                    ${data.luckyNumber ? `
                                        <div class="text-center">
                                            <div class="text-xs font-semibold mb-2" style="color: ${accentColor}">Lucky Number</div>
                                            <div class="text-4xl font-bold" style="font-family: serif; color: ${accentColor}">${data.luckyNumber}</div>
                                        </div>
                                    ` : ''}
                                    ${data.luckyColor ? `
                                        <div class="text-center">
                                            <div class="text-xs font-semibold mb-2" style="color: ${accentColor}">Lucky Color</div>
                                            <div class="text-2xl font-bold" style="font-family: serif; color: ${accentColor}">${data.luckyColor}</div>
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'zodiacWheel') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-3xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-8">${data.title || 'Your Birthday Horoscope'}</h3>
                        <div class="flex flex-col items-center">
                            <div class="relative w-64 h-64 mb-8">
                                <div class="absolute inset-0 rounded-full ${shadowClass}" style="background: conic-gradient(from 0deg, ${accentColor}, ${accentColor}dd, ${accentColor}, ${accentColor}dd, ${accentColor}); border: 6px solid ${cardBg}"></div>
                                <div class="absolute inset-8 rounded-full flex items-center justify-center ${shadowClass}" style="background: ${cardBg}">
                                    <div class="${symbolSize}" style="color: ${accentColor}">${zodiacSymbol}</div>
                                </div>
                            </div>
                            <div class="${radiusClass} ${shadowClass} p-8 text-center w-full" style="background: ${cardBg}">
                                <h4 class="text-2xl font-bold mb-4">${zodiacName}</h4>
                                ${data.message ? `<p class="text-lg leading-relaxed mb-6">${data.message}</p>` : ''}
                                <div class="flex gap-6 justify-center mt-6">
                                    ${data.luckyNumber ? `
                                        <div class="p-4 rounded-full ${shadowClass}" style="background: ${accentColor}; color: white; min-width: 100px">
                                            <div class="text-xs font-semibold mb-1">NUMBER</div>
                                            <div class="text-3xl font-bold">${data.luckyNumber}</div>
                                        </div>
                                    ` : ''}
                                    ${data.luckyColor ? `
                                        <div class="p-4 rounded-full ${shadowClass}" style="background: ${accentColor}; color: white; min-width: 100px">
                                            <div class="text-xs font-semibold mb-1">COLOR</div>
                                            <div class="text-xl font-bold">${data.luckyColor}</div>
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Default fallback
        return `
            <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                <div class="max-w-2xl mx-auto">
                    <h3 class="text-3xl font-bold text-center mb-8">${data.title || 'Your Birthday Horoscope'}</h3>
                    <div class="${radiusClass} ${shadowClass} p-8" style="background: ${cardBg}">
                        ${data.zodiacSign ? `
                            <div class="text-center mb-6">
                                <div class="${symbolSize} mb-3" style="color: ${accentColor}">${zodiacSymbol}</div>
                                <h4 class="text-2xl font-bold">${zodiacName}</h4>
                            </div>
                        ` : ''}
                        ${data.message ? `<p class="text-lg leading-relaxed mb-6 text-center">${data.message}</p>` : ''}
                        <div class="grid grid-cols-2 gap-6 mt-6">
                            ${data.luckyNumber ? `
                                <div class="text-center p-4 rounded-lg" style="background: ${bgColor}">
                                    <div class="text-sm font-semibold text-gray-500 mb-2">LUCKY NUMBER</div>
                                    <div class="text-3xl font-bold" style="color: ${accentColor}">${data.luckyNumber}</div>
                                </div>
                            ` : ''}
                            ${data.luckyColor ? `
                                <div class="text-center p-4 rounded-lg" style="background: ${bgColor}">
                                    <div class="text-sm font-semibold text-gray-500 mb-2">LUCKY COLOR</div>
                                    <div class="text-xl font-bold" style="color: ${accentColor}">${data.luckyColor}</div>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
};
