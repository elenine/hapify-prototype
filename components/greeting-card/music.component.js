// Music Component
window.sectionComponents = window.sectionComponents || {};
window.sectionComponents.music = {
    name: '🎵 Music',
    allowMultiple: false,
    info: `<div class="space-y-4"><div><label class="block text-sm font-medium text-gray-700 mb-2">Music Title</label><input type="text" placeholder="Birthday Song" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()"></div><div><label class="block text-sm font-medium text-gray-700 mb-2">Music URL (Spotify, SoundCloud, etc.)</label><input type="url" placeholder="https://..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="url" oninput="updatePreview()"></div></div>`,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="classic">Classic - Traditional music player</option>
                    <option value="vinyl">Vinyl - Record player style</option>
                    <option value="compact">Compact - Small inline player</option>
                    <option value="visualizer">Visualizer - Waveform visualization</option>
                    <option value="albumCover">Album Cover - Large album art</option>
                    <option value="minimal">Minimal - Clean minimalist player</option>
                    <option value="cassette">Cassette Tape - Retro cassette player</option>
                    <option value="boombox">Boombox - 90s boombox style</option>
                    <option value="jukebox">Jukebox - Classic jukebox design</option>
                    <option value="equalizer">Equalizer - Audio equalizer bars</option>
                    <option value="neonClub">Neon Club - Nightclub neon style</option>
                    <option value="soundwave">Soundwave - Modern soundwave pattern</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f0fdf4" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Player Color</label>
                <input type="color" value="#22c55e" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="playerColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Icon Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="iconSize" onchange="updatePreview()">
                    <option value="text-4xl">Small</option>
                    <option value="text-5xl">Medium</option>
                    <option value="text-6xl" selected>Large</option>
                    <option value="text-7xl">Extra Large</option>
                    <option value="text-8xl">Huge</option>
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
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Border Radius</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="borderRadius" onchange="updatePreview()">
                    <option value="rounded-none">None</option>
                    <option value="rounded">Small</option>
                    <option value="rounded-lg">Medium</option>
                    <option value="rounded-xl" selected>Large</option>
                    <option value="rounded-full">Full Round</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'classic';
        const bgColor = style.bg || '#f0fdf4';
        const playerColor = style.playerColor || '#22c55e';
        const textColor = style.text || '#1f2937';
        const iconSize = style.iconSize || 'text-6xl';
        const shadow = style.shadow || 'none';
        const borderRadius = style.borderRadius || 'rounded-xl';

        const shadowClass = shadow === 'none' ? '' : `shadow-${shadow}`;
        const title = data.title || 'Birthday Song';
        const url = data.url || '';

        if (layout === 'classic') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-xl mx-auto text-center">
                        <div class="${iconSize} mb-4">🎵</div>
                        <h3 class="text-xl font-bold mb-4" style="color: ${textColor}">${title}</h3>
                        <div class="p-6 ${borderRadius} ${shadowClass}" style="background: white">
                            <div class="flex items-center justify-center gap-6 mb-4">
                                <button class="w-12 h-12 rounded-full ${shadowClass} flex items-center justify-center" style="background: ${playerColor}; color: white">
                                    <span class="text-2xl">⏮</span>
                                </button>
                                <button class="w-16 h-16 rounded-full ${shadowClass} flex items-center justify-center" style="background: ${playerColor}; color: white">
                                    <span class="text-3xl">▶</span>
                                </button>
                                <button class="w-12 h-12 rounded-full ${shadowClass} flex items-center justify-center" style="background: ${playerColor}; color: white">
                                    <span class="text-2xl">⏭</span>
                                </button>
                            </div>
                            <div class="h-2 rounded-full" style="background: ${playerColor}; opacity: 0.3"></div>
                        </div>
                        <p class="text-gray-600 mt-4">Music player will appear here</p>
                    </div>
                </div>
            `;
        }

        if (layout === 'vinyl') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-xl mx-auto text-center">
                        <h3 class="text-2xl font-bold mb-6" style="color: ${textColor}">${title}</h3>
                        <div class="flex justify-center mb-6">
                            <div class="w-64 h-64 rounded-full ${shadowClass} flex items-center justify-center relative" style="background: linear-gradient(135deg, #1f2937, #374151)">
                                <div class="w-24 h-24 rounded-full flex items-center justify-center" style="background: ${playerColor}">
                                    <span class="text-4xl text-white">♪</span>
                                </div>
                                ${[...Array(8)].map((_, i) => `
                                    <div class="absolute inset-${i * 8} rounded-full border border-gray-600"></div>
                                `).join('')}
                            </div>
                        </div>
                        <p class="text-gray-600">Now Playing: ${title}</p>
                    </div>
                </div>
            `;
        }

        if (layout === 'compact') {
            return `
                <div class="py-8 px-6" style="background: ${bgColor}">
                    <div class="max-w-md mx-auto">
                        <div class="flex items-center gap-4 p-4 ${borderRadius} ${shadowClass}" style="background: white">
                            <div class="w-16 h-16 rounded-full ${shadowClass} flex items-center justify-center flex-shrink-0" style="background: ${playerColor}">
                                <span class="text-2xl text-white">▶</span>
                            </div>
                            <div class="flex-1">
                                <h3 class="font-bold" style="color: ${textColor}">${title}</h3>
                                <div class="h-1 rounded-full mt-2" style="background: ${playerColor}; opacity: 0.3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'visualizer') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto text-center">
                        <h3 class="text-2xl font-bold mb-6" style="color: ${textColor}">${title}</h3>
                        <div class="p-8 ${borderRadius} ${shadowClass}" style="background: white">
                            <div class="flex items-end justify-center gap-2 h-32 mb-6">
                                ${[...Array(20)].map((_, i) => `
                                    <div class="w-2 ${borderRadius}" style="background: ${playerColor}; height: ${20 + Math.random() * 80}%; opacity: ${0.3 + Math.random() * 0.7}"></div>
                                `).join('')}
                            </div>
                            <button class="w-16 h-16 rounded-full ${shadowClass} flex items-center justify-center mx-auto" style="background: ${playerColor}; color: white">
                                <span class="text-3xl">▶</span>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'albumCover') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-md mx-auto">
                        <div class="aspect-square ${borderRadius} ${shadowClass} flex items-center justify-center mb-6" style="background: linear-gradient(135deg, ${playerColor}, #064e3b)">
                            <div class="text-9xl">🎵</div>
                        </div>
                        <h3 class="text-2xl font-bold mb-4 text-center" style="color: ${textColor}">${title}</h3>
                        <div class="flex items-center justify-center gap-6">
                            <button class="w-12 h-12 rounded-full ${shadowClass} flex items-center justify-center" style="background: ${playerColor}; color: white">⏮</button>
                            <button class="w-16 h-16 rounded-full ${shadowClass} flex items-center justify-center" style="background: ${playerColor}; color: white">▶</button>
                            <button class="w-12 h-12 rounded-full ${shadowClass} flex items-center justify-center" style="background: ${playerColor}; color: white">⏭</button>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'minimal') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-lg mx-auto text-center">
                        <div class="${iconSize} mb-4" style="color: ${playerColor}">🎵</div>
                        <h3 class="text-xl font-bold mb-6" style="color: ${textColor}">${title}</h3>
                        <button class="w-20 h-20 rounded-full ${shadowClass} flex items-center justify-center mx-auto" style="background: ${playerColor}; color: white">
                            <span class="text-4xl">▶</span>
                        </button>
                        <p class="text-gray-600 mt-6">Music player will appear here</p>
                    </div>
                </div>
            `;
        }

        if (layout === 'cassette') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-md mx-auto text-center">
                        <h3 class="text-2xl font-bold mb-6" style="color: ${textColor}">${title}</h3>
                        <div class="p-6 rounded-lg ${shadowClass}" style="background: linear-gradient(145deg, #e5e7eb, #d1d5db)">
                            <div class="bg-white rounded p-4 ${shadowClass}">
                                <div class="flex justify-center gap-16 mb-4">
                                    <div class="w-16 h-16 rounded-full border-8" style="border-color: ${playerColor}"></div>
                                    <div class="w-16 h-16 rounded-full border-8" style="border-color: ${playerColor}"></div>
                                </div>
                                <div class="space-y-2">
                                    ${[...Array(4)].map(() => `
                                        <div class="h-1 rounded" style="background: ${playerColor}; opacity: 0.3"></div>
                                    `).join('')}
                                </div>
                                <div class="flex justify-center gap-3 mt-4">
                                    <button class="px-3 py-1 rounded text-white text-xs" style="background: ${playerColor}">⏮</button>
                                    <button class="px-3 py-1 rounded text-white text-xs" style="background: ${playerColor}">▶</button>
                                    <button class="px-3 py-1 rounded text-white text-xs" style="background: ${playerColor}">⏭</button>
                                </div>
                            </div>
                        </div>
                        <p class="text-gray-600 mt-4">Retro cassette player</p>
                    </div>
                </div>
            `;
        }

        if (layout === 'boombox') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto text-center">
                        <h3 class="text-2xl font-bold mb-6" style="color: ${textColor}">${title}</h3>
                        <div class="p-8 rounded-xl ${shadowClass}" style="background: linear-gradient(145deg, #1f2937, #374151)">
                            <div class="flex justify-center gap-8 mb-6">
                                <div class="w-32 h-32 rounded-full border-8 border-gray-600 ${shadowClass} flex items-center justify-center" style="background: #111">
                                    <div class="text-4xl">🔊</div>
                                </div>
                                <div class="w-32 h-32 rounded-full border-8 border-gray-600 ${shadowClass} flex items-center justify-center" style="background: #111">
                                    <div class="text-4xl">🔊</div>
                                </div>
                            </div>
                            <div class="bg-gray-800 p-4 rounded-lg mb-4">
                                <div class="flex justify-center gap-4">
                                    <button class="w-12 h-12 rounded ${shadowClass} flex items-center justify-center" style="background: ${playerColor}; color: white">⏮</button>
                                    <button class="w-16 h-16 rounded ${shadowClass} flex items-center justify-center text-2xl" style="background: ${playerColor}; color: white">▶</button>
                                    <button class="w-12 h-12 rounded ${shadowClass} flex items-center justify-center" style="background: ${playerColor}; color: white">⏭</button>
                                </div>
                            </div>
                        </div>
                        <p class="text-gray-600 mt-4">90s boombox style</p>
                    </div>
                </div>
            `;
        }

        if (layout === 'jukebox') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-md mx-auto text-center">
                        <h3 class="text-2xl font-bold mb-6" style="color: ${textColor}">${title}</h3>
                        <div class="p-6 rounded-t-3xl ${shadowClass}" style="background: linear-gradient(180deg, #dc2626, #991b1b)">
                            <div class="bg-yellow-400 rounded-lg p-6 mb-4">
                                <div class="text-6xl mb-4">🎵</div>
                                <div class="font-bold text-xl" style="color: ${textColor}">Now Playing</div>
                            </div>
                            <div class="grid grid-cols-3 gap-2 mb-4">
                                ${[...Array(9)].map((_, i) => `
                                    <button class="aspect-square rounded-lg ${shadowClass} flex items-center justify-center font-bold text-white" style="background: ${playerColor}">${i + 1}</button>
                                `).join('')}
                            </div>
                            <button class="w-full py-3 rounded-full ${shadowClass} text-white font-bold text-xl" style="background: ${playerColor}">▶ PLAY</button>
                        </div>
                        <p class="text-gray-600 mt-4">Classic jukebox</p>
                    </div>
                </div>
            `;
        }

        if (layout === 'equalizer') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto">
                        <h3 class="text-2xl font-bold mb-8 text-center" style="color: ${textColor}">${title}</h3>
                        <div class="p-8 ${borderRadius} ${shadowClass}" style="background: white">
                            <div class="flex items-end justify-between gap-1 h-48 mb-6">
                                ${[...Array(32)].map((_, i) => {
                                    const height = 20 + Math.random() * 80;
                                    return `<div class="flex-1 rounded-t transition-all" style="background: ${playerColor}; height: ${height}%; opacity: ${0.5 + Math.random() * 0.5}"></div>`;
                                }).join('')}
                            </div>
                            <div class="flex items-center gap-4">
                                <button class="w-14 h-14 rounded-full ${shadowClass} flex items-center justify-center" style="background: ${playerColor}; color: white">▶</button>
                                <div class="flex-1">
                                    <div class="h-2 rounded-full" style="background: ${playerColor}; opacity: 0.3"></div>
                                </div>
                                <span class="text-sm font-mono" style="color: ${textColor}">3:42</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'neonClub') {
            return `
                <div class="py-12 px-6" style="background: #000">
                    <div class="max-w-xl mx-auto text-center">
                        <h3 class="text-3xl font-bold mb-8 text-white" style="text-shadow: 0 0 20px ${playerColor}">${title}</h3>
                        <div class="relative p-8 rounded-2xl ${shadowClass}" style="background: rgba(0, 0, 0, 0.8); border: 2px solid ${playerColor}; box-shadow: 0 0 40px ${playerColor}, inset 0 0 40px rgba(255,255,255,0.05)">
                            <div class="absolute inset-0 rounded-2xl blur-xl opacity-50" style="background: ${playerColor}"></div>
                            <div class="relative">
                                <div class="text-8xl mb-6" style="filter: drop-shadow(0 0 20px ${playerColor})">🎵</div>
                                <div class="flex justify-center gap-6 mb-4">
                                    ${[...Array(5)].map(() => `
                                        <div class="h-16 w-2 rounded-full" style="background: ${playerColor}; box-shadow: 0 0 10px ${playerColor}; opacity: ${0.3 + Math.random() * 0.7}"></div>
                                    `).join('')}
                                </div>
                                <button class="w-20 h-20 rounded-full flex items-center justify-center mx-auto text-3xl text-white" style="background: ${playerColor}; box-shadow: 0 0 30px ${playerColor}">▶</button>
                            </div>
                        </div>
                        <p class="text-gray-400 mt-4">Neon nightclub style</p>
                    </div>
                </div>
            `;
        }

        if (layout === 'soundwave') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-3xl mx-auto">
                        <h3 class="text-2xl font-bold mb-8 text-center" style="color: ${textColor}">${title}</h3>
                        <div class="p-6 ${borderRadius} ${shadowClass}" style="background: white">
                            <div class="flex items-center h-24 mb-6 relative">
                                <div class="absolute inset-0 flex items-center justify-center">
                                    ${[...Array(100)].map((_, i) => {
                                        const amplitude = Math.sin(i * 0.2) * 40 + 10;
                                        return `<div class="w-1" style="height: ${amplitude}px; background: ${playerColor}; opacity: ${i < 50 ? 1 : 0.3}"></div>`;
                                    }).join('')}
                                </div>
                            </div>
                            <div class="flex items-center gap-4">
                                <button class="w-12 h-12 rounded-full ${shadowClass} flex items-center justify-center" style="background: ${playerColor}; color: white">▶</button>
                                <div class="flex-1">
                                    <div class="text-sm font-semibold mb-1" style="color: ${textColor}">${title}</div>
                                    <div class="flex items-center gap-2">
                                        <span class="text-xs text-gray-500">1:23</span>
                                        <div class="flex-1 h-1 rounded-full" style="background: ${playerColor}; opacity: 0.3"></div>
                                        <span class="text-xs text-gray-500">3:45</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Default fallback
        return `
            <div class="py-12 px-6" style="background: ${bgColor}">
                <div class="max-w-xl mx-auto text-center">
                    <div class="${iconSize} mb-4">🎵</div>
                    <h3 class="text-xl font-bold mb-4" style="color: ${textColor}">${title}</h3>
                    <p class="text-gray-600">Music player will appear here</p>
                </div>
            </div>
        `;
    }
};
