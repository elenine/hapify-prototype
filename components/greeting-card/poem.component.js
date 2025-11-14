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
