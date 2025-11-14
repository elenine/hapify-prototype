// Hero Greeting Component for Holiday Greeting Card

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.hero = {
    name: '🎄 Hero Greeting',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Recipient's Name</label>
                <input type="text" placeholder="Sarah & Family" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-data" data-field="name" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Main Greeting</label>
                <input type="text" placeholder="Happy Holidays!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-data" data-field="greeting" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Subheading (Optional)</label>
                <input type="text" placeholder="Wishing you joy and peace" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-data" data-field="subheading" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Holiday Emoji</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-data" data-field="emoji" onchange="updatePreview()">
                    <option value="🎄">🎄 Christmas Tree</option>
                    <option value="🎅">🎅 Santa Claus</option>
                    <option value="❄️">❄️ Snowflake</option>
                    <option value="🎁">🎁 Gift</option>
                    <option value="⛄">⛄ Snowman</option>
                    <option value="🕎">🕎 Menorah</option>
                    <option value="🎊">🎊 New Year</option>
                    <option value="🎆">🎆 Fireworks</option>
                    <option value="🌟">🌟 Star</option>
                    <option value="🔔">🔔 Bell</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Cover Image (Optional)</label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-emerald-400 cursor-pointer" onclick="this.querySelector('input').click()">
                    <div class="text-3xl mb-2">📸</div>
                    <div class="text-sm text-gray-600">Click to upload</div>
                    <input type="file" class="hidden section-data" data-field="image" accept="image/*" onchange="handleImageUpload(this)">
                </div>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="centered">Centered Classic</option>
                    <option value="split">Split Layout</option>
                    <option value="overlay">Image Overlay</option>
                    <option value="minimal">Minimal Modern</option>
                    <option value="festive">Festive Decorative</option>
                    <option value="elegant">Elegant Border</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-style" data-style="bgStyle" onchange="updatePreview()">
                    <option value="solid">Solid Color</option>
                    <option value="gradient">Gradient</option>
                    <option value="pattern">Pattern</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Primary Color</label>
                <input type="color" value="#10b981" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Secondary Color (for gradients)</label>
                <input type="color" value="#059669" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bgSecondary" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Shadow</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-style" data-style="textShadow" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="light">Light</option>
                    <option value="medium" selected>Medium</option>
                    <option value="strong">Strong</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Image Shape</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-style" data-style="imageShape" onchange="updatePreview()">
                    <option value="circle">Circle</option>
                    <option value="rounded">Rounded Square</option>
                    <option value="star">Star Frame</option>
                    <option value="ornament">Ornament</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Decorations</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-style" data-style="decorations" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="snowflakes">Snowflakes</option>
                    <option value="stars">Stars</option>
                    <option value="sparkles">Sparkles</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'centered';
        const bgStyle = style.bgStyle || 'solid';
        const bg = style.bg || '#10b981';
        const bgSecondary = style.bgSecondary || '#059669';
        const textColor = style.text || '#ffffff';
        const emoji = data.emoji || '🎄';

        // Background styles
        let backgroundStyle = '';
        if (bgStyle === 'gradient') {
            backgroundStyle = `background: linear-gradient(135deg, ${bg} 0%, ${bgSecondary} 100%);`;
        } else if (bgStyle === 'pattern') {
            backgroundStyle = `background: ${bg}; background-image: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 20px 20px;`;
        } else {
            backgroundStyle = `background: ${bg};`;
        }

        // Text shadow
        const shadows = {
            none: 'none',
            light: '0 1px 2px rgba(0,0,0,0.1)',
            medium: '0 2px 4px rgba(0,0,0,0.2)',
            strong: '0 4px 8px rgba(0,0,0,0.3)'
        };
        const textShadow = shadows[style.textShadow] || shadows.medium;

        // Image styling
        const imageShapes = {
            circle: 'rounded-full',
            rounded: 'rounded-2xl',
            star: 'rounded-full',
            ornament: 'rounded-full'
        };
        const imageShape = imageShapes[style.imageShape] || 'rounded-full';

        // Decorations
        let decorationsHTML = '';
        if (style.decorations === 'snowflakes') {
            decorationsHTML = `
                <div style="position: absolute; top: 10%; left: 10%; font-size: 2rem; opacity: 0.3;">❄️</div>
                <div style="position: absolute; top: 20%; right: 15%; font-size: 1.5rem; opacity: 0.3;">❄️</div>
                <div style="position: absolute; bottom: 15%; left: 15%; font-size: 1.8rem; opacity: 0.3;">❄️</div>
                <div style="position: absolute; bottom: 25%; right: 10%; font-size: 2rem; opacity: 0.3;">❄️</div>
            `;
        } else if (style.decorations === 'stars') {
            decorationsHTML = `
                <div style="position: absolute; top: 10%; left: 10%; font-size: 1.5rem; opacity: 0.4;">⭐</div>
                <div style="position: absolute; top: 15%; right: 12%; font-size: 1.2rem; opacity: 0.4;">✨</div>
                <div style="position: absolute; bottom: 20%; left: 15%; font-size: 1.3rem; opacity: 0.4;">🌟</div>
                <div style="position: absolute; bottom: 15%; right: 10%; font-size: 1.5rem; opacity: 0.4;">⭐</div>
            `;
        } else if (style.decorations === 'sparkles') {
            decorationsHTML = `
                <div style="position: absolute; top: 10%; left: 10%; font-size: 1.2rem; opacity: 0.5;">✨</div>
                <div style="position: absolute; top: 20%; right: 12%; font-size: 1rem; opacity: 0.5;">✨</div>
                <div style="position: absolute; bottom: 15%; left: 15%; font-size: 1.1rem; opacity: 0.5;">✨</div>
                <div style="position: absolute; bottom: 20%; right: 10%; font-size: 1.2rem; opacity: 0.5;">✨</div>
                <div style="position: absolute; top: 50%; left: 5%; font-size: 0.9rem; opacity: 0.5;">✨</div>
                <div style="position: absolute; top: 50%; right: 8%; font-size: 0.9rem; opacity: 0.5;">✨</div>
            `;
        }

        // Layout variations
        if (layout === 'centered') {
            return `
                <div class="relative text-center py-16 px-6" style="${backgroundStyle} color: ${textColor}; overflow: hidden;">
                    ${decorationsHTML}
                    <div class="relative z-10">
                        ${data.image ? `<img src="${data.image}" class="w-40 h-40 ${imageShape} mx-auto mb-6 object-cover border-4 shadow-xl" style="border-color: ${textColor};">` : `<div class="w-40 h-40 ${imageShape} mx-auto mb-6 bg-white bg-opacity-20 flex items-center justify-center text-6xl">${emoji}</div>`}
                        <h1 class="text-4xl font-bold mb-4" style="text-shadow: ${textShadow};">${data.greeting || 'Happy Holidays!'}</h1>
                        ${data.subheading ? `<p class="text-xl mb-4 opacity-90">${data.subheading}</p>` : ''}
                        <p class="text-3xl font-semibold" style="text-shadow: ${textShadow};">${data.name || 'Name'}</p>
                    </div>
                </div>
            `;
        } else if (layout === 'split') {
            return `
                <div class="relative grid grid-cols-1 md:grid-cols-2 min-h-[400px]" style="overflow: hidden;">
                    ${decorationsHTML}
                    <div class="relative flex items-center justify-center p-8" style="${backgroundStyle}">
                        ${data.image ? `<img src="${data.image}" class="w-64 h-64 ${imageShape} object-cover border-4 shadow-xl" style="border-color: ${textColor};">` : `<div class="w-64 h-64 ${imageShape} bg-white bg-opacity-20 flex items-center justify-center text-8xl">${emoji}</div>`}
                    </div>
                    <div class="relative flex flex-col items-center justify-center p-8 text-center" style="${backgroundStyle.replace(bg, bgSecondary).replace(bgSecondary, bg)}; color: ${textColor};">
                        <h1 class="text-4xl font-bold mb-4" style="text-shadow: ${textShadow};">${data.greeting || 'Happy Holidays!'}</h1>
                        ${data.subheading ? `<p class="text-lg mb-4 opacity-90">${data.subheading}</p>` : ''}
                        <p class="text-2xl font-semibold">${data.name || 'Name'}</p>
                    </div>
                </div>
            `;
        } else if (layout === 'overlay') {
            return `
                <div class="relative min-h-[500px] flex items-center justify-center overflow-hidden" style="${backgroundStyle}">
                    ${data.image ? `<div class="absolute inset-0"><img src="${data.image}" class="w-full h-full object-cover opacity-30"></div>` : ''}
                    ${decorationsHTML}
                    <div class="relative z-10 text-center px-6">
                        <div class="text-7xl mb-6">${emoji}</div>
                        <h1 class="text-5xl font-bold mb-4" style="color: ${textColor}; text-shadow: ${textShadow};">${data.greeting || 'Happy Holidays!'}</h1>
                        ${data.subheading ? `<p class="text-xl mb-6" style="color: ${textColor}; opacity: 0.9;">${data.subheading}</p>` : ''}
                        <p class="text-3xl font-semibold" style="color: ${textColor};">${data.name || 'Name'}</p>
                    </div>
                </div>
            `;
        } else if (layout === 'minimal') {
            return `
                <div class="relative py-20 px-6 text-center" style="background: white; color: #1f2937; overflow: hidden;">
                    <div class="relative z-10 max-w-xl mx-auto">
                        <div class="text-6xl mb-8">${emoji}</div>
                        ${data.image ? `<img src="${data.image}" class="w-32 h-32 ${imageShape} mx-auto mb-8 object-cover shadow-lg" style="border: 3px solid ${bg};">` : ''}
                        <h1 class="text-4xl font-light mb-4" style="color: ${bg}; letter-spacing: 0.05em;">${data.greeting || 'Happy Holidays!'}</h1>
                        ${data.subheading ? `<p class="text-lg mb-6 text-gray-600">${data.subheading}</p>` : ''}
                        <p class="text-2xl" style="color: ${bg};">${data.name || 'Name'}</p>
                    </div>
                </div>
            `;
        } else if (layout === 'festive') {
            return `
                <div class="relative text-center py-16 px-6" style="${backgroundStyle} color: ${textColor}; overflow: hidden;">
                    <div style="position: absolute; top: 0; left: 0; right: 0; height: 40px; background: repeating-linear-gradient(90deg, rgba(255,255,255,0.2) 0px, rgba(255,255,255,0.2) 20px, transparent 20px, transparent 40px);"></div>
                    <div style="position: absolute; bottom: 0; left: 0; right: 0; height: 40px; background: repeating-linear-gradient(90deg, rgba(255,255,255,0.2) 0px, rgba(255,255,255,0.2) 20px, transparent 20px, transparent 40px);"></div>
                    ${decorationsHTML}
                    <div class="relative z-10">
                        <div class="text-6xl mb-6">${emoji}</div>
                        ${data.image ? `<img src="${data.image}" class="w-40 h-40 ${imageShape} mx-auto mb-6 object-cover border-4 shadow-xl" style="border-color: ${textColor};">` : ''}
                        <h1 class="text-4xl font-bold mb-4" style="text-shadow: ${textShadow};">${data.greeting || 'Happy Holidays!'}</h1>
                        ${data.subheading ? `<p class="text-xl mb-4 opacity-90">${data.subheading}</p>` : ''}
                        <p class="text-3xl font-semibold" style="text-shadow: ${textShadow};">${data.name || 'Name'}</p>
                        <div class="mt-6 flex justify-center gap-3 text-3xl">
                            <span>🎁</span><span>🎄</span><span>⭐</span>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'elegant') {
            return `
                <div class="relative py-16 px-6" style="background: white; color: #1f2937; overflow: hidden;">
                    <div class="relative z-10 max-w-2xl mx-auto" style="border: 4px double ${bg}; padding: 3rem; border-radius: 0.5rem;">
                        <div class="text-center">
                            <div class="text-5xl mb-6">${emoji}</div>
                            ${data.image ? `<img src="${data.image}" class="w-36 h-36 ${imageShape} mx-auto mb-6 object-cover shadow-lg" style="border: 3px solid ${bg};">` : ''}
                            <h1 class="text-4xl font-serif mb-4" style="color: ${bg};">${data.greeting || 'Happy Holidays!'}</h1>
                            ${data.subheading ? `<p class="text-lg mb-6 italic" style="color: ${bg}; opacity: 0.8;">${data.subheading}</p>` : ''}
                            <div style="width: 60px; height: 2px; background: ${bg}; margin: 1.5rem auto;"></div>
                            <p class="text-2xl font-serif" style="color: ${bg};">${data.name || 'Name'}</p>
                        </div>
                    </div>
                </div>
            `;
        }
    }
};
