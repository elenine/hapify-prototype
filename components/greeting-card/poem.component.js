// Poem Component
window.sectionComponents = window.sectionComponents || {};
window.sectionComponents.poem = {
    name: '📜 Poem',
    allowMultiple: true,
    info: `<div class="space-y-4"><div><label class="block text-sm font-medium text-gray-700 mb-2">Poem Title</label><input type="text" placeholder="Poem title" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()"></div><div><label class="block text-sm font-medium text-gray-700 mb-2">Poem</label><textarea placeholder="Your poem..." rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="poem" oninput="updatePreview()"></textarea></div></div>`,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="centered">Centered - Classic centered poem</option>
                    <option value="leftAligned">Left Aligned - Traditional left alignment</option>
                    <option value="parchmentStyle">Parchment Style - Vintage paper look</option>
                    <option value="cardElegant">Card Elegant - Elevated card design</option>
                    <option value="decorativeBorder">Decorative Border - Ornate border frame</option>
                    <option value="modernMinimal">Modern Minimal - Clean minimalist style</option>
                    <option value="scroll">Scroll - Ancient scroll style</option>
                    <option value="book">Book - Open book layout</option>
                    <option value="frame">Frame - Picture frame style</option>
                    <option value="gradient">Gradient - Colorful gradient</option>
                    <option value="handwritten">Handwritten - Note style</option>
                    <option value="floating">Floating - Elevated shadow</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef3c7" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#f59e0b" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="textSize" onchange="updatePreview()">
                    <option value="text-sm">Small</option>
                    <option value="text-base" selected>Medium</option>
                    <option value="text-lg">Large</option>
                    <option value="text-xl">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Line Height</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="lineHeight" onchange="updatePreview()">
                    <option value="leading-normal">Normal</option>
                    <option value="leading-relaxed" selected>Relaxed</option>
                    <option value="leading-loose">Loose</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Font Family</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="fontFamily" onchange="updatePreview()">
                    <option value="font-sans" selected>Sans Serif</option>
                    <option value="font-serif">Serif</option>
                    <option value="font-mono">Monospace</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'centered';
        const bgColor = style.bg || '#fef3c7';
        const textColor = style.text || '#1f2937';
        const accentColor = style.accent || '#f59e0b';
        const textSize = style.textSize || 'text-base';
        const lineHeight = style.lineHeight || 'leading-relaxed';
        const fontFamily = style.fontFamily || 'font-sans';

        const title = data.title || '';
        const poem = data.poem || 'Your poem here...';

        if (layout === 'centered') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-xl mx-auto text-center">
                        ${title ? `<h3 class="text-2xl font-bold mb-6" style="color: ${accentColor}">${title}</h3>` : ''}
                        <pre class="${textSize} ${lineHeight} whitespace-pre-wrap ${fontFamily}" style="color: ${textColor}">${poem}</pre>
                    </div>
                </div>
            `;
        }

        if (layout === 'leftAligned') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-xl mx-auto">
                        ${title ? `<h3 class="text-2xl font-bold mb-6" style="color: ${accentColor}">${title}</h3>` : ''}
                        <pre class="${textSize} ${lineHeight} whitespace-pre-wrap ${fontFamily}" style="color: ${textColor}">${poem}</pre>
                    </div>
                </div>
            `;
        }

        if (layout === 'parchmentStyle') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-xl mx-auto">
                        <div class="bg-amber-50 rounded-lg p-8 shadow-lg border-4 border-amber-200">
                            ${title ? `<h3 class="text-2xl font-bold mb-6 text-center font-serif" style="color: ${accentColor}">${title}</h3>` : ''}
                            <pre class="${textSize} ${lineHeight} whitespace-pre-wrap font-serif text-center" style="color: ${textColor}">${poem}</pre>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'cardElegant') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-xl mx-auto">
                        <div class="bg-white rounded-2xl p-8 shadow-xl">
                            ${title ? `<h3 class="text-2xl font-bold mb-6 text-center" style="color: ${accentColor}">${title}</h3>` : ''}
                            <pre class="${textSize} ${lineHeight} whitespace-pre-wrap ${fontFamily} text-center" style="color: ${textColor}">${poem}</pre>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'decorativeBorder') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-xl mx-auto">
                        <div class="border-4 rounded-xl p-8 relative" style="border-color: ${accentColor}">
                            <div class="absolute -top-3 -left-3 w-6 h-6 rounded-full" style="background: ${accentColor}"></div>
                            <div class="absolute -top-3 -right-3 w-6 h-6 rounded-full" style="background: ${accentColor}"></div>
                            <div class="absolute -bottom-3 -left-3 w-6 h-6 rounded-full" style="background: ${accentColor}"></div>
                            <div class="absolute -bottom-3 -right-3 w-6 h-6 rounded-full" style="background: ${accentColor}"></div>
                            ${title ? `<h3 class="text-2xl font-bold mb-6 text-center" style="color: ${accentColor}">${title}</h3>` : ''}
                            <pre class="${textSize} ${lineHeight} whitespace-pre-wrap ${fontFamily} text-center" style="color: ${textColor}">${poem}</pre>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'modernMinimal') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-xl mx-auto">
                        <div class="border-l-4 pl-6" style="border-color: ${accentColor}">
                            ${title ? `<h3 class="text-xl font-bold mb-4" style="color: ${accentColor}">${title}</h3>` : ''}
                            <pre class="${textSize} ${lineHeight} whitespace-pre-wrap ${fontFamily}" style="color: ${textColor}">${poem}</pre>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'scroll') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-xl mx-auto relative">
                        <div class="p-8 rounded-2xl shadow-xl" style="background: linear-gradient(135deg, #fef3c7, #fde68a); border-left: 12px solid #92400e; border-right: 12px solid #92400e">
                            <div class="absolute top-0 left-0 w-full h-3" style="background: repeating-linear-gradient(90deg, #92400e 0px, #92400e 20px, transparent 20px, transparent 40px)"></div>
                            <div class="absolute bottom-0 left-0 w-full h-3" style="background: repeating-linear-gradient(90deg, #92400e 0px, #92400e 20px, transparent 20px, transparent 40px)"></div>
                            ${title ? `<h3 class="text-2xl font-bold mb-6 text-center font-serif" style="color: #92400e">${title}</h3>` : ''}
                            <pre class="${textSize} ${lineHeight} whitespace-pre-wrap font-serif text-center" style="color: #78350f">${poem}</pre>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'book') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto flex gap-4">
                        <div class="flex-1 bg-white p-8 shadow-lg" style="border-right: 2px solid #e5e7eb">
                            ${title ? `<h3 class="text-xl font-bold mb-4 font-serif" style="color: ${accentColor}">${title}</h3>` : ''}
                            <pre class="${textSize} ${lineHeight} whitespace-pre-wrap font-serif" style="color: ${textColor}">${poem}</pre>
                        </div>
                        <div class="flex-1 bg-white p-8 shadow-lg opacity-50">
                            <div class="h-full flex items-center justify-center">
                                <span class="text-6xl opacity-30" style="color: ${accentColor}">📖</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'frame') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-xl mx-auto">
                        <div class="relative p-12 bg-white shadow-2xl">
                            <div class="absolute inset-0 border-8" style="border-color: ${accentColor}"></div>
                            <div class="absolute inset-4 border-2 border-gray-200"></div>
                            <div class="relative z-10">
                                ${title ? `<h3 class="text-2xl font-bold mb-6 text-center" style="color: ${accentColor}">${title}</h3>` : ''}
                                <pre class="${textSize} ${lineHeight} whitespace-pre-wrap ${fontFamily} text-center" style="color: ${textColor}">${poem}</pre>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'gradient') {
            return `
                <div class="py-12 px-6" style="background: linear-gradient(135deg, ${accentColor}, ${bgColor})">
                    <div class="max-w-xl mx-auto">
                        <div class="bg-white bg-opacity-95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                            ${title ? `<h3 class="text-2xl font-bold mb-6 text-center" style="color: ${accentColor}">${title}</h3>` : ''}
                            <pre class="${textSize} ${lineHeight} whitespace-pre-wrap ${fontFamily} text-center" style="color: ${textColor}">${poem}</pre>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'handwritten') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-xl mx-auto relative">
                        <div class="absolute -top-4 right-4 text-5xl transform rotate-12" style="color: ${accentColor}">📝</div>
                        <div class="p-8 rounded-lg shadow-lg transform -rotate-1" style="background: #fef9c3; border: 2px solid #fbbf24">
                            ${title ? `<h3 class="text-xl font-bold mb-4 font-serif italic" style="color: ${accentColor}">${title}</h3>` : ''}
                            <pre class="${textSize} ${lineHeight} whitespace-pre-wrap font-serif italic" style="color: ${textColor}">${poem}</pre>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'floating') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-xl mx-auto">
                        <div class="bg-white rounded-2xl p-8 transform hover:-translate-y-2 transition-transform" style="box-shadow: 0 20px 60px rgba(0,0,0,0.3)">
                            ${title ? `<h3 class="text-2xl font-bold mb-6 text-center" style="color: ${accentColor}">${title}</h3>` : ''}
                            <pre class="${textSize} ${lineHeight} whitespace-pre-wrap ${fontFamily} text-center" style="color: ${textColor}">${poem}</pre>
                        </div>
                    </div>
                </div>
            `;
        }

        // Default fallback
        return `
            <div class="py-12 px-6" style="background: ${bgColor}">
                <div class="max-w-xl mx-auto text-center">
                    ${title ? `<h3 class="text-2xl font-bold mb-6" style="color: ${accentColor}">${title}</h3>` : ''}
                    <pre class="${textSize} ${lineHeight} whitespace-pre-wrap ${fontFamily}" style="color: ${textColor}">${poem}</pre>
                </div>
            </div>
        `;
    }
};
