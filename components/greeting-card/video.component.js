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
                    <option value="splitScreen">Split Screen - Video with info panel</option>
                    <option value="floatingPlayer">Floating Player - Floating video frame</option>
                    <option value="retroTV">Retro TV - Vintage TV set style</option>
                    <option value="popout">Pop-out - 3D popping video frame</option>
                    <option value="borderFrame">Border Frame - Decorative frame around video</option>
                    <option value="glowEffect">Glow Effect - Glowing neon video player</option>
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

        if (layout === 'splitScreen') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-5xl mx-auto">
                        <div class="grid md:grid-cols-2 gap-6 items-center">
                            <div class="aspect-video ${borderRadius} ${shadowClass} flex items-center justify-center" style="background: ${playerBg}">
                                <div class="text-6xl">🎥</div>
                            </div>
                            <div class="p-6 ${borderRadius} ${shadowClass}" style="background: linear-gradient(135deg, ${accentColor}20, ${accentColor}10)">
                                <h3 class="text-3xl font-bold mb-4" style="color: ${titleColor}">${title}</h3>
                                <p class="text-gray-600 mb-4">Watch this special video message created just for you!</p>
                                <button class="px-6 py-3 ${borderRadius} font-semibold text-white" style="background: ${accentColor}">▶ Play Video</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'floatingPlayer') {
            return `
                <div class="py-16 px-6" style="background: ${bgColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold mb-12 text-center" style="color: ${titleColor}">${title}</h3>
                        <div class="relative">
                            <div class="absolute inset-0 ${borderRadius} ${shadowClass} transform translate-x-4 translate-y-4" style="background: ${accentColor}40"></div>
                            <div class="relative aspect-video ${borderRadius} ${shadowClass} flex items-center justify-center" style="background: ${playerBg}">
                                <div class="text-7xl">🎥</div>
                            </div>
                        </div>
                        ${url ? `<p class="mt-6 text-sm text-center" style="color: ${accentColor}">Video: ${url}</p>` : ''}
                    </div>
                </div>
            `;
        }

        if (layout === 'retroTV') {
            return `
                <div class="py-12 px-6" style="background: linear-gradient(180deg, ${bgColor}, #1f2937)">
                    <div class="max-w-3xl mx-auto text-center">
                        <h3 class="text-2xl font-bold mb-8 text-white">${title}</h3>
                        <div class="p-8 ${borderRadius} ${shadowClass}" style="background: linear-gradient(145deg, #8B4513, #654321)">
                            <div class="aspect-video rounded flex items-center justify-center relative" style="background: #1a1a1a; border: 8px solid #2a2a2a">
                                <div class="absolute inset-0" style="background: linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)"></div>
                                <div class="text-6xl relative z-10">📺</div>
                            </div>
                            <div class="mt-4 flex justify-center gap-4">
                                <div class="w-8 h-8 rounded-full" style="background: #444"></div>
                                <div class="w-8 h-8 rounded-full" style="background: #444"></div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'popout') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-3xl mx-auto">
                        <h3 class="text-2xl font-bold mb-8 text-center" style="color: ${titleColor}">${title}</h3>
                        <div class="relative" style="perspective: 1000px">
                            <div class="aspect-video ${borderRadius} ${shadowClass} flex items-center justify-center" style="background: ${playerBg}; transform: rotateY(-5deg) rotateX(2deg); box-shadow: 20px 20px 40px rgba(0,0,0,0.3)">
                                <div class="text-7xl">🎬</div>
                            </div>
                        </div>
                        ${url ? `<p class="mt-6 text-sm text-center" style="color: ${accentColor}">Video Source: ${url}</p>` : ''}
                    </div>
                </div>
            `;
        }

        if (layout === 'borderFrame') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-3xl mx-auto">
                        <h3 class="text-2xl font-bold mb-8 text-center" style="color: ${titleColor}">${title}</h3>
                        <div class="p-8 ${borderRadius} ${shadowClass}" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}80); border: 4px solid ${accentColor}">
                            <div class="aspect-video ${borderRadius} flex items-center justify-center bg-white" style="border: 6px solid white; box-shadow: inset 0 0 20px rgba(0,0,0,0.1)">
                                <div class="text-7xl">🎥</div>
                            </div>
                        </div>
                        ${url ? `<p class="mt-6 text-sm text-center" style="color: ${accentColor}">${url}</p>` : ''}
                    </div>
                </div>
            `;
        }

        if (layout === 'glowEffect') {
            return `
                <div class="py-12 px-6" style="background: #0a0a0a">
                    <div class="max-w-3xl mx-auto">
                        <h3 class="text-2xl font-bold mb-8 text-center text-white">${title}</h3>
                        <div class="relative">
                            <div class="absolute inset-0 ${borderRadius} blur-2xl opacity-75" style="background: ${accentColor}"></div>
                            <div class="relative aspect-video ${borderRadius} flex items-center justify-center" style="background: ${playerBg}; border: 2px solid ${accentColor}; box-shadow: 0 0 30px ${accentColor}, inset 0 0 20px rgba(255,255,255,0.1)">
                                <div class="text-7xl">🎥</div>
                            </div>
                        </div>
                        ${url ? `<p class="mt-6 text-sm text-center" style="color: ${accentColor}">Video: ${url}</p>` : ''}
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
