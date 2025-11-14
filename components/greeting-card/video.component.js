// Video Component
window.sectionComponents = window.sectionComponents || {};
window.sectionComponents.video = {
    name: '🎥 Video Message',
    allowMultiple: true,
    info: `<div class="space-y-4"><div><label class="block text-sm font-medium text-gray-700 mb-2">Video Title</label><input type="text" placeholder="Video Message" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()"></div><div><label class="block text-sm font-medium text-gray-700 mb-2">Video URL (YouTube, Vimeo, etc.)</label><input type="url" placeholder="https://..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="url" oninput="updatePreview()"></div></div>`,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="standard">Standard - Classic video player</option>
                    <option value="cinematic">Cinematic - Wide theater style</option>
                    <option value="compact">Compact - Small embedded player</option>
                    <option value="featured">Featured - Large hero video</option>
                    <option value="playlist">Playlist - Video collection style</option>
                    <option value="minimal">Minimal - Clean minimalist</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Title Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="titleColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#ef4444" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Player Background</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="playerBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Shadow</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg">Large</option>
                    <option value="xl" selected>Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Border Radius</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="borderRadius" onchange="updatePreview()">
                    <option value="rounded-none">None</option>
                    <option value="rounded">Small</option>
                    <option value="rounded-lg" selected>Medium</option>
                    <option value="rounded-xl">Large</option>
                    <option value="rounded-2xl">Extra Large</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'standard';
        const bgColor = style.bg || '#ffffff';
        const titleColor = style.titleColor || '#1f2937';
        const accentColor = style.accent || '#ef4444';
        const playerBg = style.playerBg || '#1f2937';
        const shadow = style.shadow || 'xl';
        const borderRadius = style.borderRadius || 'rounded-lg';

        const shadowClass = shadow === 'none' ? '' : `shadow-${shadow}`;
        const title = data.title || 'Video Message';
        const url = data.url || '';

        if (layout === 'standard') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto text-center">
                        <h3 class="text-2xl font-bold mb-6" style="color: ${titleColor}">${title}</h3>
                        <div class="aspect-video ${borderRadius} ${shadowClass} flex items-center justify-center" style="background: ${playerBg}">
                            <div class="text-6xl">🎥</div>
                        </div>
                        ${url ? `<p class="mt-4 text-sm" style="color: ${accentColor}">Video: ${url}</p>` : ''}
                    </div>
                </div>
            `;
        }

        if (layout === 'cinematic') {
            return `
                <div class="py-16 px-6" style="background: black">
                    <div class="max-w-5xl mx-auto">
                        <h3 class="text-3xl font-bold mb-8 text-center text-white">${title}</h3>
                        <div class="aspect-[21/9] ${borderRadius} ${shadowClass} flex items-center justify-center" style="background: ${playerBg}">
                            <div class="text-7xl">🎬</div>
                        </div>
                        ${url ? `<p class="mt-4 text-sm text-center text-gray-400">Video: ${url}</p>` : ''}
                    </div>
                </div>
            `;
        }

        if (layout === 'compact') {
            return `
                <div class="py-8 px-6" style="background: ${bgColor}">
                    <div class="max-w-xl mx-auto">
                        <h3 class="text-xl font-bold mb-4" style="color: ${titleColor}">${title}</h3>
                        <div class="aspect-video ${borderRadius} ${shadowClass} flex items-center justify-center" style="background: ${playerBg}">
                            <div class="text-4xl">▶️</div>
                        </div>
                        ${url ? `<p class="mt-3 text-xs" style="color: ${accentColor}">Video: ${url}</p>` : ''}
                    </div>
                </div>
            `;
        }

        if (layout === 'featured') {
            return `
                <div class="py-16 px-6" style="background: ${bgColor}">
                    <div class="max-w-6xl mx-auto">
                        <h3 class="text-4xl font-bold mb-10 text-center" style="color: ${titleColor}">${title}</h3>
                        <div class="aspect-video ${borderRadius} ${shadowClass} flex items-center justify-center" style="background: ${playerBg}">
                            <div>
                                <div class="text-8xl text-center mb-4">🎥</div>
                                <div class="text-2xl text-white text-center">Click to Play</div>
                            </div>
                        </div>
                        ${url ? `<p class="mt-6 text-base text-center" style="color: ${accentColor}">Video Source: ${url}</p>` : ''}
                    </div>
                </div>
            `;
        }

        if (layout === 'playlist') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-2xl font-bold mb-6" style="color: ${titleColor}">${title}</h3>
                        <div class="grid md:grid-cols-3 gap-4">
                            <div class="md:col-span-2">
                                <div class="aspect-video ${borderRadius} ${shadowClass} flex items-center justify-center" style="background: ${playerBg}">
                                    <div class="text-6xl">🎥</div>
                                </div>
                            </div>
                            <div class="space-y-2">
                                ${[1, 2, 3].map(i => `
                                    <div class="aspect-video ${borderRadius} ${shadowClass} flex items-center justify-center cursor-pointer hover:opacity-80 transition" style="background: ${playerBg}">
                                        <div class="text-3xl">▶️</div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        ${url ? `<p class="mt-4 text-sm" style="color: ${accentColor}">Video: ${url}</p>` : ''}
                    </div>
                </div>
            `;
        }

        if (layout === 'minimal') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-3xl mx-auto">
                        <div class="aspect-video ${borderRadius} ${shadowClass} flex items-center justify-center" style="background: ${playerBg}">
                            <div class="text-center">
                                <div class="text-7xl mb-4">🎥</div>
                                <h3 class="text-2xl font-bold text-white">${title}</h3>
                            </div>
                        </div>
                        ${url ? `<p class="mt-4 text-sm text-center" style="color: ${accentColor}">Video URL: ${url}</p>` : ''}
                    </div>
                </div>
            `;
        }

        // Default fallback
        return `
            <div class="py-12 px-6" style="background: ${bgColor}">
                <div class="max-w-2xl mx-auto text-center">
                    <h3 class="text-2xl font-bold mb-6" style="color: ${titleColor}">${title}</h3>
                    <div class="aspect-video ${borderRadius} ${shadowClass} flex items-center justify-center" style="background: ${playerBg}">
                        <div class="text-6xl">🎥</div>
                    </div>
                    ${url ? `<p class="mt-4 text-sm" style="color: ${accentColor}">Video: ${url}</p>` : ''}
                </div>
            </div>
        `;
    }
};
