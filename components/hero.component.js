// Hero Banner Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.hero = {
                name: '🎤 Hero Banner',
                allowMultiple: false,  // Only one hero section allowed
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Event Name</label>
                            <input type="text" placeholder="Tech Summit 2025" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent section-data" data-field="name" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Event Tagline/Theme</label>
                            <input type="text" placeholder="Innovating the Future Together" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent section-data" data-field="tagline" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Event Date</label>
                            <input type="text" placeholder="March 15-17, 2025" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent section-data" data-field="date" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Event Location</label>
                            <input type="text" placeholder="San Francisco, CA" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent section-data" data-field="location" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Hero Image</label>
                            <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-teal-400 cursor-pointer" onclick="this.querySelector('input').click()">
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
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="layout" onchange="updatePreview()">
                                <option value="centered">Centered Classic</option>
                                <option value="modern">Modern Card</option>
                                <option value="split">Split View</option>
                                <option value="minimal">Minimal Clean</option>
                                <option value="bold">Bold Impact</option>
                                <option value="gradient">Gradient Overlay</option>
                                <option value="countdown">Event Countdown</option>
                                <option value="floating">Floating Badge</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#14b8a6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Secondary/Accent Color</label>
                            <input type="color" value="#10b981" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                            <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Image Border Radius</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="imageRadius" onchange="updatePreview()">
                                <option value="rounded-lg">Rounded</option>
                                <option value="rounded-full">Circle</option>
                                <option value="rounded-none">Square</option>
                                <option value="rounded-3xl">Extra Rounded</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Shadow Intensity</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="shadow" onchange="updatePreview()">
                                <option value="shadow-sm">Subtle</option>
                                <option value="shadow-md">Medium</option>
                                <option value="shadow-lg">Bold</option>
                                <option value="shadow-xl">Extra Bold</option>
                                <option value="shadow-2xl">Dramatic</option>
                            </select>
                        </div>
                    </div>
                `,
                render: (data, style) => {
                    const layout = style.layout || 'centered';
                    const bgColor = style.bg || '#14b8a6';
                    const accentColor = style.accent || '#10b981';
                    const textColor = style.text || '#ffffff';
                    const imageRadius = style.imageRadius || 'rounded-lg';
                    const shadow = style.shadow || 'shadow-lg';
                    const imageSrc = data.image || '';
                    const name = data.name || 'Conference Name';
                    const tagline = data.tagline || 'Innovating the Future Together';
                    const date = data.date || 'March 15-17, 2025';
                    const location = data.location || 'San Francisco, CA';

                    switch(layout) {
                        case 'centered':
                            return `
                                <div class="text-center py-20 px-6" style="background: ${bgColor}; color: ${textColor}">
                                    ${imageSrc ? `<img src="${imageSrc}" class="w-32 h-32 ${imageRadius} mx-auto mb-6 object-cover border-4 border-white ${shadow}">` : '<div class="text-7xl mb-6">🎤</div>'}
                                    <h1 class="text-4xl font-bold mb-3 leading-tight">${name}</h1>
                                    <p class="text-xl opacity-90 mb-4">${tagline}</p>
                                    <div class="flex flex-col gap-2 items-center text-sm opacity-80">
                                        <div class="flex items-center gap-2">
                                            <span>📅</span>
                                            <span>${date}</span>
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <span>📍</span>
                                            <span>${location}</span>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'modern':
                            return `
                                <div class="py-12 px-6" style="background: linear-gradient(135deg, ${bgColor}15, ${accentColor}15);">
                                    <div class="max-w-md mx-auto">
                                        <div class="bg-white rounded-3xl ${shadow} overflow-hidden border-t-4" style="border-top-color: ${bgColor}">
                                            <div class="p-8 text-center">
                                                ${imageSrc ? `<img src="${imageSrc}" class="w-28 h-28 ${imageRadius} mx-auto mb-5 object-cover ${shadow}">` : `<div class="inline-flex items-center justify-center w-28 h-28 rounded-2xl mb-5 ${shadow}" style="background: linear-gradient(135deg, ${bgColor}, ${accentColor})"><span class="text-6xl">🎤</span></div>`}
                                                <h1 class="text-3xl font-bold text-gray-900 mb-3">${name}</h1>
                                                <p class="text-lg text-gray-600 mb-5">${tagline}</p>
                                                <div class="space-y-2">
                                                    <div class="inline-block px-4 py-2 rounded-xl text-sm font-semibold" style="background: ${bgColor}20; color: ${bgColor}">
                                                        📅 ${date}
                                                    </div>
                                                    <div class="inline-block px-4 py-2 rounded-xl text-sm font-semibold ml-2" style="background: ${accentColor}20; color: ${accentColor}">
                                                        📍 ${location}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'split':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                                    <div class="max-w-md mx-auto flex flex-col gap-6">
                                        <div class="flex-shrink-0 text-center">
                                            ${imageSrc ? `<img src="${imageSrc}" class="w-40 h-40 ${imageRadius} mx-auto object-cover border-4 border-white ${shadow}">` : `<div class="inline-flex items-center justify-center w-40 h-40 ${imageRadius} bg-white bg-opacity-20 ${shadow}"><span class="text-8xl">🎤</span></div>`}
                                        </div>
                                        <div class="text-center">
                                            <h1 class="text-4xl font-bold mb-3">${name}</h1>
                                            <p class="text-xl opacity-90 mb-5">${tagline}</p>
                                            <div class="inline-flex flex-col gap-2 text-base">
                                                <div class="px-4 py-2 bg-white bg-opacity-20 rounded-lg">
                                                    📅 ${date}
                                                </div>
                                                <div class="px-4 py-2 bg-white bg-opacity-20 rounded-lg">
                                                    📍 ${location}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'minimal':
                            return `
                                <div class="text-center py-24 px-6" style="background: ${bgColor}; color: ${textColor}">
                                    <div class="max-w-md mx-auto">
                                        <div class="text-5xl mb-5">🎤</div>
                                        <h1 class="text-5xl font-light mb-4 tracking-wide">${name}</h1>
                                        <div class="w-20 h-0.5 mx-auto mb-5" style="background: ${textColor}; opacity: 0.4;"></div>
                                        <p class="text-lg opacity-75 mb-6">${tagline}</p>
                                        <div class="flex justify-center gap-6 text-sm opacity-70">
                                            <span>${date}</span>
                                            <span>•</span>
                                            <span>${location}</span>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'bold':
                            return `
                                <div class="relative py-24 px-6 overflow-hidden" style="background: ${bgColor}; color: ${textColor}">
                                    <div class="absolute inset-0 opacity-10">
                                        <div class="absolute top-0 right-0 w-72 h-72 rounded-full" style="background: ${textColor}; transform: translate(50%, -50%);"></div>
                                        <div class="absolute bottom-0 left-0 w-56 h-56 rounded-full" style="background: ${accentColor}; transform: translate(-50%, 50%);"></div>
                                    </div>
                                    <div class="relative text-center max-w-md mx-auto">
                                        ${imageSrc ? `<img src="${imageSrc}" class="w-32 h-32 ${imageRadius} mx-auto mb-6 object-cover border-4 border-white shadow-2xl">` : '<div class="text-8xl mb-6">🎤</div>'}
                                        <h1 class="text-5xl font-black mb-4 tracking-tight leading-tight">${name}</h1>
                                        <p class="text-2xl font-semibold opacity-90 mb-6">${tagline}</p>
                                        <div class="flex flex-col gap-3">
                                            <div class="inline-block px-6 py-3 bg-white bg-opacity-25 backdrop-blur-sm rounded-xl font-bold">
                                                📅 ${date}
                                            </div>
                                            <div class="inline-block px-6 py-3 bg-white bg-opacity-25 backdrop-blur-sm rounded-xl font-bold">
                                                📍 ${location}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'gradient':
                            return `
                                <div class="relative py-20 px-6 overflow-hidden" style="background: linear-gradient(135deg, ${bgColor} 0%, ${accentColor} 100%); color: ${textColor}">
                                    ${imageSrc ? `
                                        <div class="absolute inset-0 opacity-20">
                                            <img src="${imageSrc}" class="w-full h-full object-cover">
                                        </div>
                                        <div class="absolute inset-0" style="background: linear-gradient(135deg, ${bgColor}cc 0%, ${accentColor}cc 100%);"></div>
                                    ` : `
                                        <div class="absolute top-0 right-0 text-9xl opacity-10 -mt-8 -mr-8">🎤</div>
                                        <div class="absolute bottom-0 left-0 text-9xl opacity-10 -mb-8 -ml-8">🎤</div>
                                    `}
                                    <div class="relative text-center max-w-md mx-auto">
                                        <div class="inline-block px-4 py-1.5 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-xs font-bold mb-5 uppercase tracking-wide">
                                            Upcoming Event
                                        </div>
                                        <h1 class="text-4xl font-bold mb-4 leading-tight">${name}</h1>
                                        <p class="text-xl opacity-95 mb-6">${tagline}</p>
                                        <div class="flex justify-center gap-4 text-sm font-semibold">
                                            <div class="px-5 py-2.5 bg-white bg-opacity-25 backdrop-blur-sm rounded-lg">
                                                📅 ${date}
                                            </div>
                                            <div class="px-5 py-2.5 bg-white bg-opacity-25 backdrop-blur-sm rounded-lg">
                                                📍 ${location}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'countdown':
                            return `
                                <div class="py-16 px-6" style="background: ${bgColor}; color: ${textColor}">
                                    <div class="max-w-md mx-auto text-center">
                                        <div class="mb-6">
                                            ${imageSrc ? `<img src="${imageSrc}" class="w-24 h-24 ${imageRadius} mx-auto mb-4 object-cover border-3 border-white ${shadow}">` : '<div class="text-7xl mb-4">🎤</div>'}
                                            <h1 class="text-4xl font-bold mb-2">${name}</h1>
                                            <p class="text-lg opacity-90">${tagline}</p>
                                        </div>
                                        <div class="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 mb-5 ${shadow}">
                                            <div class="text-xs uppercase tracking-wider mb-3 opacity-75">Event Starts In</div>
                                            <div class="flex justify-center gap-4">
                                                <div class="text-center">
                                                    <div class="text-3xl font-bold">15</div>
                                                    <div class="text-xs opacity-75">Days</div>
                                                </div>
                                                <div class="text-3xl opacity-50">:</div>
                                                <div class="text-center">
                                                    <div class="text-3xl font-bold">07</div>
                                                    <div class="text-xs opacity-75">Hours</div>
                                                </div>
                                                <div class="text-3xl opacity-50">:</div>
                                                <div class="text-center">
                                                    <div class="text-3xl font-bold">23</div>
                                                    <div class="text-xs opacity-75">Mins</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="space-y-2 text-sm">
                                            <div>📅 ${date}</div>
                                            <div>📍 ${location}</div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'floating':
                            return `
                                <div class="py-12 px-6" style="background: linear-gradient(to bottom, ${bgColor}10, transparent);">
                                    <div class="max-w-md mx-auto">
                                        <div class="bg-white rounded-3xl ${shadow} p-8">
                                            <div class="flex flex-col items-center text-center">
                                                ${imageSrc ? `
                                                    <div class="relative mb-6">
                                                        <img src="${imageSrc}" class="w-28 h-28 ${imageRadius} object-cover ${shadow}">
                                                        <div class="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-sm ${shadow}" style="background: ${accentColor}; color: white;">
                                                            ✨
                                                        </div>
                                                    </div>
                                                ` : `
                                                    <div class="relative mb-6">
                                                        <div class="w-28 h-28 rounded-2xl flex items-center justify-center ${shadow}" style="background: linear-gradient(135deg, ${bgColor}, ${accentColor})">
                                                            <span class="text-6xl">🎤</span>
                                                        </div>
                                                        <div class="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-sm ${shadow}" style="background: ${accentColor}; color: white;">
                                                            ✨
                                                        </div>
                                                    </div>
                                                `}
                                                <div class="mb-6">
                                                    <h1 class="text-3xl font-bold text-gray-900 mb-2">${name}</h1>
                                                    <p class="text-lg text-gray-600">${tagline}</p>
                                                </div>
                                                <div class="w-full space-y-3">
                                                    <div class="flex items-center gap-3 p-3 rounded-xl border-2" style="border-color: ${bgColor}30; background: ${bgColor}10">
                                                        <div class="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-xl" style="background: ${bgColor}; color: white;">
                                                            📅
                                                        </div>
                                                        <div class="flex-1 text-left text-sm font-semibold text-gray-700">
                                                            ${date}
                                                        </div>
                                                    </div>
                                                    <div class="flex items-center gap-3 p-3 rounded-xl border-2" style="border-color: ${accentColor}30; background: ${accentColor}10">
                                                        <div class="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-xl" style="background: ${accentColor}; color: white;">
                                                            📍
                                                        </div>
                                                        <div class="flex-1 text-left text-sm font-semibold text-gray-700">
                                                            ${location}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        default:
                            return `
                                <div class="text-center py-16 px-6" style="background: ${bgColor}; color: ${textColor}">
                                    ${imageSrc ? `<img src="${imageSrc}" class="w-28 h-28 ${imageRadius} mx-auto mb-6 object-cover border-4 border-white ${shadow}">` : '<div class="text-7xl mb-6">🎤</div>'}
                                    <h1 class="text-4xl font-bold mb-3">${name}</h1>
                                    <p class="text-xl opacity-90 mb-4">${tagline}</p>
                                    <div class="flex flex-col gap-2 items-center text-sm opacity-80">
                                        <div>📅 ${date}</div>
                                        <div>📍 ${location}</div>
                                    </div>
                                </div>
                            `;
                    }
                }
            };
