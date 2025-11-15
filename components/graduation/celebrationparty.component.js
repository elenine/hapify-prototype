// Celebration Party Component for Graduation

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.celebrationparty = {
    name: '🥳 Celebration Party',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Party Title</label>
                <input type="text" placeholder="Graduation Celebration" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Party Date & Time</label>
                <input type="text" placeholder="Following the ceremony" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="datetime" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <textarea placeholder="Party venue details..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="location" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="festive">Festive Banner</option>
                    <option value="elegant">Elegant Card</option>
                    <option value="modern">Modern Split</option>
                    <option value="playful">Playful Balloons</option>
                    <option value="confetti">Confetti Celebration</option>
                    <option value="invitation">Invitation Style</option>
                    <option value="countdown">Party Countdown</option>
                    <option value="vibrant">Vibrant Gradient</option>
                    <option value="ticket">Event Ticket</option>
                    <option value="banner-decorative">Decorative Banner</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#eef2ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#6366f1" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'festive';
        const bg = style.bg || '#eef2ff';
        const accent = style.accent || '#6366f1';
        const text = style.text || '#1f2937';

        switch(layout) {
            case 'elegant':
                return `
                    <div class="py-12 px-6" style="background: ${bg}; color: ${text}">
                        <div class="max-w-lg mx-auto">
                            <div class="bg-white rounded-3xl shadow-xl p-8 border-t-8" style="border-color: ${accent}">
                                <div class="text-center mb-6">
                                    <div class="inline-block p-4 rounded-full mb-4" style="background: ${accent}15">
                                        <span class="text-5xl">🥳</span>
                                    </div>
                                    <h2 class="text-3xl font-bold mb-2" style="color: ${accent}">${data.title || 'Celebration Party'}</h2>
                                    <div class="w-16 h-1 rounded mx-auto" style="background: ${accent}"></div>
                                </div>
                                ${data.datetime ? `
                                    <div class="flex items-center gap-3 mb-4 p-4 rounded-xl" style="background: ${accent}10">
                                        <span class="text-2xl">🕐</span>
                                        <span class="font-medium">${data.datetime}</span>
                                    </div>
                                ` : ''}
                                ${data.location ? `
                                    <div class="flex items-start gap-3 p-4 rounded-xl" style="background: ${accent}10">
                                        <span class="text-2xl">📍</span>
                                        <span class="text-sm">${data.location}</span>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'modern':
                return `
                    <div class="py-12 px-6" style="background: ${bg}; color: ${text}">
                        <div class="max-w-3xl mx-auto">
                            <div class="rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row">
                                <div class="flex-1 p-8" style="background: ${accent}; color: white">
                                    <div class="text-6xl mb-4">🥳</div>
                                    <h2 class="text-3xl font-bold mb-4">${data.title || 'Celebration Party'}</h2>
                                    <p class="text-sm opacity-90">Join us for an unforgettable celebration!</p>
                                </div>
                                <div class="flex-1 bg-white p-8">
                                    ${data.datetime ? `
                                        <div class="mb-6">
                                            <div class="text-xs font-semibold mb-2" style="color: ${accent}">WHEN</div>
                                            <div class="font-semibold text-lg">${data.datetime}</div>
                                        </div>
                                    ` : ''}
                                    ${data.location ? `
                                        <div>
                                            <div class="text-xs font-semibold mb-2" style="color: ${accent}">WHERE</div>
                                            <div class="text-sm">${data.location}</div>
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'playful':
                return `
                    <div class="py-12 px-6 relative overflow-hidden" style="background: ${bg}; color: ${text}">
                        <div class="absolute top-0 left-0 text-6xl opacity-20">🎈</div>
                        <div class="absolute top-10 right-10 text-5xl opacity-20">🎊</div>
                        <div class="absolute bottom-0 left-1/4 text-5xl opacity-20">🎉</div>
                        <div class="max-w-md mx-auto text-center relative z-10">
                            <div class="flex justify-center gap-3 mb-6">
                                <span class="text-5xl">🎈</span>
                                <span class="text-6xl">🥳</span>
                                <span class="text-5xl">🎈</span>
                            </div>
                            <h2 class="text-3xl font-bold mb-6" style="color: ${accent}">${data.title || 'Celebration Party'}</h2>
                            ${data.datetime ? `
                                <div class="mb-4 p-4 bg-white rounded-2xl shadow-md">
                                    <div class="text-xs font-semibold mb-1" style="color: ${accent}">🕐 Party Time</div>
                                    <div class="font-bold">${data.datetime}</div>
                                </div>
                            ` : ''}
                            ${data.location ? `
                                <div class="p-4 bg-white rounded-2xl shadow-md">
                                    <div class="text-xs font-semibold mb-1" style="color: ${accent}">📍 Location</div>
                                    <div class="text-sm">${data.location}</div>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `;

            case 'confetti':
                return `
                    <div class="py-12 px-6 relative overflow-hidden" style="background: linear-gradient(135deg, ${bg} 0%, ${accent}15 100%); color: ${text}">
                        <div class="absolute inset-0 opacity-30">
                            <div class="absolute top-10 left-10 text-3xl transform rotate-12">🎊</div>
                            <div class="absolute top-20 right-20 text-3xl transform -rotate-12">🎉</div>
                            <div class="absolute bottom-20 left-20 text-3xl transform rotate-45">✨</div>
                            <div class="absolute bottom-10 right-10 text-3xl transform -rotate-45">🎈</div>
                            <div class="absolute top-1/2 left-1/4 text-2xl">🎊</div>
                            <div class="absolute top-1/3 right-1/4 text-2xl">🎉</div>
                        </div>
                        <div class="max-w-lg mx-auto text-center relative z-10">
                            <div class="bg-white rounded-3xl p-8 shadow-xl">
                                <div class="flex justify-center gap-2 mb-6">
                                    <span class="text-4xl animate-bounce">🎊</span>
                                    <span class="text-5xl">🥳</span>
                                    <span class="text-4xl animate-bounce" style="animation-delay: 0.2s">🎉</span>
                                </div>
                                <h2 class="text-3xl font-bold mb-6" style="color: ${accent}">${data.title || 'Celebration Party'}</h2>
                                ${data.datetime ? `
                                    <div class="p-4 rounded-xl mb-4" style="background: ${accent}15">
                                        <div class="text-xs font-bold uppercase tracking-wide mb-1" style="color: ${accent}">When</div>
                                        <div class="font-bold text-lg">${data.datetime}</div>
                                    </div>
                                ` : ''}
                                ${data.location ? `
                                    <div class="p-4 rounded-xl" style="background: ${accent}15">
                                        <div class="text-xs font-bold uppercase tracking-wide mb-1" style="color: ${accent}">Where</div>
                                        <div class="text-sm">${data.location}</div>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'invitation':
                return `
                    <div class="py-12 px-6" style="background: ${bg}; color: ${text}">
                        <div class="max-w-md mx-auto">
                            <div class="bg-white rounded-2xl shadow-2xl overflow-hidden border-4" style="border-color: ${accent}">
                                <div class="p-6 text-center" style="background: ${accent}; color: white">
                                    <div class="text-6xl mb-3">🥳</div>
                                    <h3 class="text-xl font-bold uppercase tracking-wider">You're Invited!</h3>
                                </div>
                                <div class="p-8">
                                    <h2 class="text-2xl font-bold text-center mb-6" style="color: ${accent}">${data.title || 'Celebration Party'}</h2>
                                    <div class="space-y-4">
                                        ${data.datetime ? `
                                            <div class="flex items-center gap-3 p-4 rounded-lg" style="background: ${accent}08">
                                                <div class="w-12 h-12 rounded-full flex items-center justify-center" style="background: ${accent}; color: white">
                                                    <span class="text-2xl">🕐</span>
                                                </div>
                                                <div class="flex-1">
                                                    <div class="text-xs font-semibold mb-1" style="color: ${accent}">Time</div>
                                                    <div class="font-medium">${data.datetime}</div>
                                                </div>
                                            </div>
                                        ` : ''}
                                        ${data.location ? `
                                            <div class="flex items-center gap-3 p-4 rounded-lg" style="background: ${accent}08">
                                                <div class="w-12 h-12 rounded-full flex items-center justify-center" style="background: ${accent}; color: white">
                                                    <span class="text-2xl">📍</span>
                                                </div>
                                                <div class="flex-1">
                                                    <div class="text-xs font-semibold mb-1" style="color: ${accent}">Venue</div>
                                                    <div class="text-sm">${data.location}</div>
                                                </div>
                                            </div>
                                        ` : ''}
                                    </div>
                                </div>
                                <div class="p-4 text-center" style="background: ${accent}15">
                                    <p class="text-sm font-semibold" style="color: ${accent}">Looking forward to celebrating with you!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'countdown':
                return `
                    <div class="py-12 px-6" style="background: ${bg}; color: ${text}">
                        <div class="max-w-lg mx-auto text-center">
                            <div class="mb-8">
                                <div class="text-6xl mb-4">🥳</div>
                                <h2 class="text-3xl font-bold mb-2" style="color: ${accent}">${data.title || 'Celebration Party'}</h2>
                                <p class="text-sm text-gray-500">The celebration begins!</p>
                            </div>
                            <div class="grid grid-cols-4 gap-3 mb-8">
                                <div class="p-4 rounded-xl" style="background: ${accent}; color: white">
                                    <div class="text-3xl font-bold">00</div>
                                    <div class="text-xs uppercase">Days</div>
                                </div>
                                <div class="p-4 rounded-xl" style="background: ${accent}; color: white">
                                    <div class="text-3xl font-bold">00</div>
                                    <div class="text-xs uppercase">Hours</div>
                                </div>
                                <div class="p-4 rounded-xl" style="background: ${accent}; color: white">
                                    <div class="text-3xl font-bold">00</div>
                                    <div class="text-xs uppercase">Min</div>
                                </div>
                                <div class="p-4 rounded-xl" style="background: ${accent}; color: white">
                                    <div class="text-3xl font-bold">00</div>
                                    <div class="text-xs uppercase">Sec</div>
                                </div>
                            </div>
                            ${data.datetime ? `
                                <div class="p-5 rounded-xl mb-4" style="background: white; box-shadow: 0 4px 6px rgba(0,0,0,0.1)">
                                    <div class="text-xs font-bold uppercase tracking-wide mb-2" style="color: ${accent}">📅 Event Time</div>
                                    <div class="font-bold text-lg">${data.datetime}</div>
                                </div>
                            ` : ''}
                            ${data.location ? `
                                <div class="p-5 rounded-xl" style="background: white; box-shadow: 0 4px 6px rgba(0,0,0,0.1)">
                                    <div class="text-xs font-bold uppercase tracking-wide mb-2" style="color: ${accent}">📍 Location</div>
                                    <div class="text-sm">${data.location}</div>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `;

            case 'vibrant':
                return `
                    <div class="py-12 px-6" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%); color: white">
                        <div class="max-w-2xl mx-auto">
                            <div class="text-center mb-8">
                                <div class="text-7xl mb-4">🥳</div>
                                <h2 class="text-4xl font-black mb-3">${data.title || 'Celebration Party'}</h2>
                                <div class="h-1 w-24 mx-auto rounded" style="background: white"></div>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                ${data.datetime ? `
                                    <div class="p-6 rounded-2xl backdrop-blur-sm" style="background: rgba(255,255,255,0.2)">
                                        <div class="text-4xl mb-3">🕐</div>
                                        <div class="text-xs font-bold uppercase tracking-wide mb-2 opacity-90">Party Time</div>
                                        <div class="font-bold text-lg">${data.datetime}</div>
                                    </div>
                                ` : ''}
                                ${data.location ? `
                                    <div class="p-6 rounded-2xl backdrop-blur-sm" style="background: rgba(255,255,255,0.2)">
                                        <div class="text-4xl mb-3">📍</div>
                                        <div class="text-xs font-bold uppercase tracking-wide mb-2 opacity-90">Venue</div>
                                        <div class="text-sm">${data.location}</div>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'ticket':
                return `
                    <div class="py-12 px-6" style="background: ${bg}; color: ${text}">
                        <div class="max-w-md mx-auto">
                            <div class="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                                <div class="absolute top-0 left-0 w-full h-2" style="background: repeating-linear-gradient(90deg, ${accent} 0px, ${accent} 10px, white 10px, white 20px)"></div>
                                <div class="p-8">
                                    <div class="flex items-center justify-between mb-6">
                                        <div class="text-5xl">🥳</div>
                                        <div class="text-right">
                                            <div class="text-xs font-bold uppercase tracking-wider mb-1" style="color: ${accent}">Admit One</div>
                                            <div class="text-2xl font-bold" style="color: ${accent}">#001</div>
                                        </div>
                                    </div>
                                    <div class="mb-6">
                                        <h2 class="text-2xl font-black mb-4" style="color: ${accent}">${data.title || 'Celebration Party'}</h2>
                                        <div class="h-px" style="background: linear-gradient(to right, ${accent} 0%, transparent 100%)"></div>
                                    </div>
                                    ${data.datetime ? `
                                        <div class="mb-4">
                                            <div class="text-xs font-bold uppercase tracking-wide mb-1" style="color: ${accent}">Date & Time</div>
                                            <div class="font-semibold">${data.datetime}</div>
                                        </div>
                                    ` : ''}
                                    ${data.location ? `
                                        <div class="mb-4">
                                            <div class="text-xs font-bold uppercase tracking-wide mb-1" style="color: ${accent}">Venue</div>
                                            <div class="text-sm">${data.location}</div>
                                        </div>
                                    ` : ''}
                                </div>
                                <div class="p-4 text-center" style="background: ${accent}; color: white">
                                    <div class="text-xs font-bold uppercase tracking-wider">Present this ticket at the entrance</div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'banner-decorative':
                return `
                    <div style="background: ${bg}; color: ${text}">
                        <div class="relative py-16 px-6" style="background: linear-gradient(135deg, ${accent} 0%, ${accent}dd 100%)">
                            <div class="absolute inset-0 opacity-10">
                                <div class="absolute top-0 left-0 w-32 h-32 rounded-full" style="background: white"></div>
                                <div class="absolute bottom-0 right-0 w-48 h-48 rounded-full" style="background: white"></div>
                            </div>
                            <div class="relative z-10 max-w-3xl mx-auto text-center text-white">
                                <div class="flex justify-center gap-4 mb-6">
                                    <span class="text-5xl">🎊</span>
                                    <span class="text-6xl">🥳</span>
                                    <span class="text-5xl">🎉</span>
                                </div>
                                <h2 class="text-4xl font-black mb-4">${data.title || 'Celebration Party'}</h2>
                                <p class="text-lg opacity-90">You're cordially invited to join us!</p>
                            </div>
                        </div>
                        <div class="py-12 px-6">
                            <div class="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                                ${data.datetime ? `
                                    <div class="bg-white p-6 rounded-2xl shadow-lg">
                                        <div class="flex items-center gap-4">
                                            <div class="w-16 h-16 rounded-full flex items-center justify-center text-3xl" style="background: ${accent}15">
                                                🕐
                                            </div>
                                            <div class="flex-1">
                                                <div class="text-xs font-bold uppercase tracking-wide mb-1" style="color: ${accent}">When</div>
                                                <div class="font-bold text-lg">${data.datetime}</div>
                                            </div>
                                        </div>
                                    </div>
                                ` : ''}
                                ${data.location ? `
                                    <div class="bg-white p-6 rounded-2xl shadow-lg">
                                        <div class="flex items-center gap-4">
                                            <div class="w-16 h-16 rounded-full flex items-center justify-center text-3xl" style="background: ${accent}15">
                                                📍
                                            </div>
                                            <div class="flex-1">
                                                <div class="text-xs font-bold uppercase tracking-wide mb-1" style="color: ${accent}">Where</div>
                                                <div class="text-sm">${data.location}</div>
                                            </div>
                                        </div>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'festive':
            default:
                return `
                    <div class="py-12 px-6" style="background: ${bg}; color: ${text}">
                        <div class="max-w-md mx-auto text-center">
                            <div class="text-5xl mb-4">🥳</div>
                            <h2 class="text-2xl font-bold mb-4">${data.title || 'Celebration Party'}</h2>
                            ${data.datetime ? `<p class="mb-3 font-medium">${data.datetime}</p>` : ''}
                            ${data.location ? `<div class="p-4 bg-white rounded-lg shadow-sm"><p class="text-sm">${data.location}</p></div>` : ''}
                        </div>
                    </div>
                `;
        }
    }`
};
