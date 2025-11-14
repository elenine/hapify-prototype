// Proposal Story Component for Engagement Announcement

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.proposal = {
    name: '💐 Proposal Story',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="The Proposal" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Proposal Story</label>
                <textarea placeholder="Tell the story of the proposal..." rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="story" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="classic">Classic Card</option>
                    <option value="romantic">Romantic Glow</option>
                    <option value="polaroid">Polaroid Frame</option>
                    <option value="decorated">Decorated Box</option>
                    <option value="spotlight">Spotlight Moment</option>
                    <option value="fairytale">Fairytale Book</option>
                    <option value="cinematic">Cinematic Scene</option>
                    <option value="elegant">Elegant Reveal</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fdf2f8" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card/Accent Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Highlight Color</label>
                <input type="color" value="#ec4899" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="highlight" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="textColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Alignment</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="textAlign" onchange="updatePreview()">
                    <option value="left">Left</option>
                    <option value="center" selected>Center</option>
                    <option value="justify">Justify</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'classic';
        const bg = style.bg || '#fdf2f8';
        const cardBg = style.cardBg || '#ffffff';
        const highlight = style.highlight || '#ec4899';
        const textColor = style.textColor || '#1f2937';
        const textAlign = style.textAlign || 'center';

        if (layout === 'romantic') {
            return `
                <div class="relative py-16 px-6 overflow-hidden" style="background: ${bg}; color: ${textColor}">
                    <div class="absolute inset-0 opacity-10">
                        <div class="absolute top-5 left-5 text-6xl animate-pulse">💐</div>
                        <div class="absolute top-20 right-10 text-4xl animate-pulse" style="animation-delay: 0.5s;">💕</div>
                        <div class="absolute bottom-10 left-1/4 text-5xl animate-pulse" style="animation-delay: 1s;">💍</div>
                        <div class="absolute bottom-20 right-1/4 text-3xl animate-pulse" style="animation-delay: 1.5s;">✨</div>
                    </div>
                    <div class="relative max-w-lg mx-auto">
                        <div class="text-center mb-6">
                            <div class="inline-block p-4 rounded-full shadow-xl" style="background: ${highlight};">
                                <span class="text-4xl">💐</span>
                            </div>
                        </div>
                        <h2 class="text-3xl font-bold mb-8 text-center">${data.title || 'The Proposal'}</h2>
                        <div class="p-8 rounded-2xl shadow-2xl relative" style="background: ${cardBg}; box-shadow: 0 0 60px rgba(236, 72, 153, 0.3);">
                            <p class="leading-relaxed" style="text-align: ${textAlign};">${data.story || 'Share your magical proposal story here...'}</p>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'polaroid') {
            return `
                <div class="py-16 px-6" style="background: ${bg}; color: ${textColor}">
                    <div class="max-w-md mx-auto">
                        <div class="bg-white p-6 rounded-lg shadow-xl transform rotate-1 hover:rotate-0 transition-transform">
                            <div class="text-center text-5xl mb-4">💐</div>
                            <div class="bg-gray-100 p-6 mb-4" style="background: ${cardBg};">
                                <h2 class="text-2xl font-bold mb-4 text-center" style="color: ${highlight};">${data.title || 'The Proposal'}</h2>
                                <p class="text-sm leading-relaxed" style="text-align: ${textAlign};">${data.story || 'Share your magical proposal story here...'}</p>
                            </div>
                            <div class="text-center italic text-sm" style="color: ${highlight}; font-family: 'Brush Script MT', cursive;">A moment to remember...</div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'decorated') {
            return `
                <div class="py-12 px-6" style="background: ${bg}; color: ${textColor}">
                    <div class="max-w-2xl mx-auto">
                        <div class="relative p-8 rounded-2xl shadow-xl" style="background: ${cardBg}; border: 2px solid ${highlight};">
                            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 px-8 py-2 rounded-full shadow-md" style="background: ${highlight}; color: white;">
                                <span class="text-2xl">💐</span>
                            </div>
                            <div class="absolute top-4 left-4 text-2xl opacity-30">✨</div>
                            <div class="absolute top-4 right-4 text-2xl opacity-30">✨</div>
                            <div class="absolute bottom-4 left-8 text-2xl opacity-30">💕</div>
                            <div class="absolute bottom-4 right-8 text-2xl opacity-30">💍</div>

                            <div class="mt-4">
                                <h2 class="text-3xl font-bold mb-6 text-center">${data.title || 'The Proposal'}</h2>
                                <div class="max-w-xl mx-auto">
                                    <p class="leading-relaxed" style="text-align: ${textAlign};">${data.story || 'Share your magical proposal story here...'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'spotlight') {
            return `
                <div class="relative py-20 px-6" style="background: linear-gradient(135deg, ${bg} 0%, ${cardBg} 100%); color: ${textColor}">
                    <div class="max-w-2xl mx-auto text-center">
                        <div class="relative inline-block mb-8">
                            <div class="absolute inset-0 rounded-full blur-2xl opacity-30" style="background: ${highlight};"></div>
                            <div class="relative p-6 rounded-full shadow-2xl" style="background: ${cardBg};">
                                <span class="text-6xl">💐</span>
                            </div>
                        </div>
                        <h2 class="text-4xl font-bold mb-8" style="color: ${highlight};">${data.title || 'The Proposal'}</h2>
                        <div class="relative max-w-xl mx-auto p-8 rounded-2xl shadow-2xl" style="background: ${cardBg};">
                            <div class="absolute -inset-1 rounded-2xl opacity-20 blur" style="background: linear-gradient(45deg, ${highlight}, transparent);"></div>
                            <p class="relative text-lg leading-relaxed" style="text-align: ${textAlign};">${data.story || 'Share your magical proposal story here...'}</p>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'fairytale') {
            return `
                <div class="relative py-20 px-6 overflow-hidden" style="background: linear-gradient(to bottom, #e6f7ff, #fff5f7); color: ${textColor}">
                    <div class="absolute inset-0 opacity-5">
                        <div class="absolute top-10 left-10 text-8xl">🏰</div>
                        <div class="absolute top-40 right-20 text-6xl">👑</div>
                        <div class="absolute bottom-20 left-1/4 text-7xl">🌟</div>
                        <div class="absolute bottom-40 right-10 text-5xl">✨</div>
                    </div>
                    <div class="relative max-w-3xl mx-auto">
                        <div class="text-center mb-8">
                            <div class="inline-block px-8 py-3 rounded-full mb-4 shadow-lg" style="background: linear-gradient(135deg, ${highlight}, ${cardBg});">
                                <span class="text-4xl">📖</span>
                            </div>
                            <div class="text-sm uppercase tracking-[0.3em] mb-2" style="color: ${highlight};">Once Upon a Time</div>
                            <h2 class="text-4xl font-bold mb-2" style="font-family: 'Georgia', serif; color: ${highlight};">${data.title || 'The Proposal'}</h2>
                        </div>
                        <div class="relative p-10 rounded-3xl shadow-2xl" style="background: white; border: 4px solid ${highlight};">
                            <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div class="px-6 py-2 rounded-full shadow-lg" style="background: ${highlight};">
                                    <span class="text-3xl">💐</span>
                                </div>
                            </div>
                            <div class="mt-6">
                                <div class="text-6xl mb-4 opacity-20" style="color: ${highlight};">"</div>
                                <p class="text-lg leading-loose px-4" style="font-family: 'Georgia', serif; text-align: ${textAlign};">
                                    ${data.story || 'Share your magical proposal story here...'}
                                </p>
                                <div class="text-6xl mt-4 text-right opacity-20 transform rotate-180" style="color: ${highlight};">"</div>
                            </div>
                            <div class="mt-6 text-center text-sm italic" style="color: ${highlight}; font-family: 'Georgia', serif;">
                                ...and they lived happily ever after
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'cinematic') {
            return `
                <div class="relative py-16 px-6" style="background: #1a1a1a; color: #f5f5f5;">
                    <div class="max-w-4xl mx-auto">
                        <div class="relative" style="background: linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%); padding: 3rem; border-radius: 1.5rem; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);">
                            <div class="absolute top-0 left-0 w-full h-2" style="background: linear-gradient(to right, ${highlight}, transparent, ${highlight});"></div>
                            <div class="absolute bottom-0 left-0 w-full h-2" style="background: linear-gradient(to right, ${highlight}, transparent, ${highlight});"></div>

                            <div class="text-center mb-8">
                                <div class="inline-block px-6 py-2 rounded-lg mb-4" style="background: rgba(236, 72, 153, 0.2); border: 2px solid ${highlight};">
                                    <span class="text-3xl">🎬</span>
                                </div>
                                <h2 class="text-4xl font-bold mb-2 uppercase tracking-wider" style="color: ${highlight}; text-shadow: 0 0 20px rgba(236, 72, 153, 0.5);">
                                    ${data.title || 'The Proposal'}
                                </h2>
                                <div class="flex items-center justify-center gap-3 mt-4">
                                    <div class="w-8 h-px" style="background: ${highlight};"></div>
                                    <span class="text-xs uppercase tracking-widest" style="color: ${highlight};">Scene One</span>
                                    <div class="w-8 h-px" style="background: ${highlight};"></div>
                                </div>
                            </div>

                            <div class="relative p-8 rounded-xl" style="background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.1);">
                                <div class="absolute top-4 left-4 text-6xl opacity-10">💐</div>
                                <p class="relative text-lg leading-relaxed" style="text-align: ${textAlign}; color: #e0e0e0;">
                                    ${data.story || 'Share your magical proposal story here...'}
                                </p>
                            </div>

                            <div class="mt-8 flex items-center justify-between">
                                <div class="flex gap-2">
                                    <div class="w-3 h-3 rounded-full animate-pulse" style="background: ${highlight};"></div>
                                    <div class="w-3 h-3 rounded-full animate-pulse" style="background: ${highlight}; animation-delay: 0.2s;"></div>
                                    <div class="w-3 h-3 rounded-full animate-pulse" style="background: ${highlight}; animation-delay: 0.4s;"></div>
                                </div>
                                <div class="text-sm uppercase tracking-wider" style="color: ${highlight};">The End... or Just the Beginning</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'elegant') {
            return `
                <div class="py-20 px-6" style="background: ${bg}; color: ${textColor}">
                    <div class="max-w-3xl mx-auto">
                        <div class="relative">
                            <div class="absolute -inset-8 rounded-full opacity-10 blur-3xl" style="background: ${highlight};"></div>
                            <div class="relative p-12 rounded-3xl shadow-2xl" style="background: ${cardBg};">
                                <div class="text-center mb-10">
                                    <div class="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 shadow-xl" style="background: linear-gradient(135deg, ${highlight}, ${bg});">
                                        <span class="text-5xl">💐</span>
                                    </div>
                                    <div class="mb-4">
                                        <div class="inline-block w-32 h-px mb-4" style="background: ${highlight};"></div>
                                        <h2 class="text-5xl font-light mb-4" style="font-family: 'Georgia', serif; color: ${highlight};">
                                            ${data.title || 'The Proposal'}
                                        </h2>
                                        <div class="inline-block w-32 h-px" style="background: ${highlight};"></div>
                                    </div>
                                </div>

                                <div class="max-w-2xl mx-auto">
                                    <div class="relative p-8">
                                        <div class="absolute top-0 left-0 text-7xl opacity-10" style="color: ${highlight}; font-family: 'Georgia', serif;">"</div>
                                        <div class="absolute bottom-0 right-0 text-7xl opacity-10 transform rotate-180" style="color: ${highlight}; font-family: 'Georgia', serif;">"</div>
                                        <p class="relative text-xl leading-loose" style="font-family: 'Georgia', serif; text-align: ${textAlign}; color: ${textColor};">
                                            ${data.story || 'Share your magical proposal story here...'}
                                        </p>
                                    </div>
                                </div>

                                <div class="mt-10 flex items-center justify-center gap-3">
                                    <div class="w-2 h-2 rounded-full" style="background: ${highlight};"></div>
                                    <span class="text-3xl">💍</span>
                                    <div class="w-2 h-2 rounded-full" style="background: ${highlight};"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else {
            // Classic Card (default)
            return `
                <div class="py-12 px-6" style="background: ${bg}; color: ${textColor}">
                    <div class="max-w-md mx-auto">
                        <div class="text-center text-4xl mb-4">💐</div>
                        <h2 class="text-2xl font-bold mb-6 text-center">${data.title || 'The Proposal'}</h2>
                        <div class="p-6 rounded-lg shadow-md" style="background: ${cardBg};">
                            <p class="leading-relaxed" style="text-align: ${textAlign};">${data.story || 'Share your magical proposal story here...'}</p>
                        </div>
                    </div>
                </div>
            `;
        }
    }
};
