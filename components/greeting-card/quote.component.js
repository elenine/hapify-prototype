// Quote Component
window.sectionComponents = window.sectionComponents || {};
window.sectionComponents.quote = {
    name: '💭 Quote',
    allowMultiple: true,
    info: `<div class="space-y-4"><div><label class="block text-sm font-medium text-gray-700 mb-2">Quote</label><textarea placeholder="A beautiful quote..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="quote" oninput="updatePreview()"></textarea></div><div><label class="block text-sm font-medium text-gray-700 mb-2">Author</label><input type="text" placeholder="Author name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="author" oninput="updatePreview()"></div></div>`,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="centered">Centered - Classic centered quote</option>
                    <option value="leftAligned">Left Aligned - Quote with side accent</option>
                    <option value="cardStyle">Card Style - Elevated card appearance</option>
                    <option value="largeQuotes">Large Quotes - Big quotation marks</option>
                    <option value="minimalBorder">Minimal Border - Thin border frame</option>
                    <option value="gradientBg">Gradient Background - Colorful gradient</option>
                    <option value="bubble">Bubble - Speech bubble style</option>
                    <option value="neon">Neon - Glowing neon sign</option>
                    <option value="ribbon">Ribbon - Banner ribbon style</option>
                    <option value="typewriter">Typewriter - Vintage typewriter</option>
                    <option value="highlight">Highlight - Highlighted text</option>
                    <option value="paperNote">Paper Note - Pinned note style</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ede9fe" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#8b5cf6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Quote Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="quoteSize" onchange="updatePreview()">
                    <option value="text-lg">Small</option>
                    <option value="text-xl">Medium</option>
                    <option value="text-2xl" selected>Large</option>
                    <option value="text-3xl">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Font Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="fontStyle" onchange="updatePreview()">
                    <option value="italic" selected>Italic</option>
                    <option value="normal">Normal</option>
                    <option value="italic font-serif">Italic Serif</option>
                    <option value="normal font-serif">Normal Serif</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Shadow</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg">Large</option>
                    <option value="xl">Extra Large</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'centered';
        const bgColor = style.bg || '#ede9fe';
        const textColor = style.text || '#1f2937';
        const accentColor = style.accent || '#8b5cf6';
        const quoteSize = style.quoteSize || 'text-2xl';
        const fontStyle = style.fontStyle || 'italic';
        const shadow = style.shadow || 'none';

        const shadowClass = shadow === 'none' ? '' : `shadow-${shadow}`;
        const quote = data.quote || 'Your quote here...';
        const author = data.author || '';

        if (layout === 'centered') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto text-center">
                        <p class="${quoteSize} ${fontStyle} mb-4" style="color: ${textColor}">"${quote}"</p>
                        ${author ? `<p class="text-lg font-semibold" style="color: ${accentColor}">— ${author}</p>` : ''}
                    </div>
                </div>
            `;
        }

        if (layout === 'leftAligned') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto">
                        <div class="border-l-4 pl-6" style="border-color: ${accentColor}">
                            <p class="${quoteSize} ${fontStyle} mb-4" style="color: ${textColor}">"${quote}"</p>
                            ${author ? `<p class="text-lg font-semibold" style="color: ${accentColor}">— ${author}</p>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'cardStyle') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto">
                        <div class="bg-white rounded-2xl p-8 ${shadowClass}">
                            <p class="${quoteSize} ${fontStyle} mb-4 text-center" style="color: ${textColor}">"${quote}"</p>
                            ${author ? `<p class="text-lg font-semibold text-center" style="color: ${accentColor}">— ${author}</p>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'largeQuotes') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto relative">
                        <div class="text-8xl opacity-20 absolute -top-4 -left-4" style="color: ${accentColor}">"</div>
                        <div class="relative z-10 pt-8">
                            <p class="${quoteSize} ${fontStyle} mb-4" style="color: ${textColor}">${quote}</p>
                            ${author ? `<p class="text-lg font-semibold text-right" style="color: ${accentColor}">— ${author}</p>` : ''}
                        </div>
                        <div class="text-8xl opacity-20 absolute -bottom-8 -right-4 rotate-180" style="color: ${accentColor}">"</div>
                    </div>
                </div>
            `;
        }

        if (layout === 'minimalBorder') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto">
                        <div class="border-2 rounded-lg p-8" style="border-color: ${accentColor}">
                            <p class="${quoteSize} ${fontStyle} mb-4 text-center" style="color: ${textColor}">"${quote}"</p>
                            ${author ? `<p class="text-lg font-semibold text-center" style="color: ${accentColor}">— ${author}</p>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'gradientBg') {
            return `
                <div class="py-16 px-6" style="background: linear-gradient(135deg, ${accentColor}, ${bgColor})">
                    <div class="max-w-2xl mx-auto">
                        <div class="bg-white bg-opacity-95 rounded-2xl p-8 ${shadowClass}">
                            <p class="${quoteSize} ${fontStyle} mb-4 text-center" style="color: ${textColor}">"${quote}"</p>
                            ${author ? `<p class="text-lg font-semibold text-center" style="color: ${accentColor}">— ${author}</p>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'bubble') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto">
                        <div class="relative">
                            <div class="rounded-3xl p-8 ${shadowClass}" style="background: ${accentColor}; color: white">
                                <p class="${quoteSize} ${fontStyle} mb-4">"${quote}"</p>
                                ${author ? `<p class="text-lg font-semibold">— ${author}</p>` : ''}
                            </div>
                            <div class="absolute -bottom-4 left-12 w-8 h-8 transform rotate-45" style="background: ${accentColor}"></div>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'neon') {
            return `
                <div class="py-12 px-6" style="background: #1a1a1a">
                    <div class="max-w-2xl mx-auto text-center">
                        <p class="${quoteSize} ${fontStyle} mb-4 font-bold" style="color: ${accentColor}; text-shadow: 0 0 10px ${accentColor}, 0 0 20px ${accentColor}, 0 0 30px ${accentColor}, 0 0 40px ${accentColor}">"${quote}"</p>
                        ${author ? `<p class="text-lg font-semibold" style="color: #fff; text-shadow: 0 0 5px ${accentColor}">— ${author}</p>` : ''}
                    </div>
                </div>
            `;
        }

        if (layout === 'ribbon') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto">
                        <div class="relative py-8 px-6 text-center ${shadowClass}" style="background: ${accentColor}; clip-path: polygon(5% 0%, 95% 0%, 100% 50%, 95% 100%, 5% 100%, 0% 50%); color: white">
                            <p class="${quoteSize} ${fontStyle} mb-4">"${quote}"</p>
                            ${author ? `<p class="text-lg font-semibold">— ${author}</p>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'typewriter') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto">
                        <div class="p-8 rounded-lg" style="background: #f5f5f0; border: 1px solid #d4d4d0; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1)">
                            <p class="${quoteSize} font-mono mb-4" style="color: ${textColor}; letter-spacing: 0.05em; line-height: 1.8">"${quote}"</p>
                            ${author ? `<p class="text-lg font-mono text-right" style="color: ${accentColor}">— ${author}</p>` : ''}
                            <div class="mt-4 flex justify-center gap-1">
                                <span class="w-2 h-2 rounded-full" style="background: ${accentColor}"></span>
                                <span class="w-2 h-2 rounded-full" style="background: ${accentColor}"></span>
                                <span class="w-2 h-2 rounded-full" style="background: ${accentColor}"></span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'highlight') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto">
                        <p class="${quoteSize} ${fontStyle} mb-4 px-2 py-1 inline-block" style="color: ${textColor}; background: linear-gradient(to bottom, transparent 0%, transparent 50%, ${accentColor}40 50%, ${accentColor}40 100%)">"${quote}"</p>
                        ${author ? `<p class="text-lg font-semibold mt-4" style="color: ${accentColor}">— ${author}</p>` : ''}
                    </div>
                </div>
            `;
        }

        if (layout === 'paperNote') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-xl mx-auto relative">
                        <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 text-4xl" style="color: ${accentColor}">📌</div>
                        <div class="p-8 ${shadowClass} transform rotate-1" style="background: #fef9c3; border: 1px solid #fbbf24">
                            <p class="${quoteSize} ${fontStyle} mb-4" style="color: ${textColor}">"${quote}"</p>
                            ${author ? `<p class="text-lg font-semibold text-right" style="color: ${accentColor}">— ${author}</p>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Default fallback
        return `
            <div class="py-12 px-6" style="background: ${bgColor}">
                <div class="max-w-2xl mx-auto text-center">
                    <p class="${quoteSize} ${fontStyle} mb-4" style="color: ${textColor}">"${quote}"</p>
                    ${author ? `<p class="text-lg font-semibold" style="color: ${accentColor}">— ${author}</p>` : ''}
                </div>
            </div>
        `;
    }
};
