// RSVP Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.rsvp = {
    name: '✉️ RSVP',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">RSVP Title</label>
                <input type="text" placeholder="Please RSVP" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea placeholder="Let us know if you can make it..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">RSVP Deadline</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="deadline" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-style" data-style="layout" oninput="updatePreview()">
                    <option value="centered">Centered - Classic</option>
                    <option value="card">Card - Boxed Style</option>
                    <option value="split">Split - Two Column</option>
                    <option value="modern">Modern - Gradient Card</option>
                    <option value="minimal">Minimal - Clean Design</option>
                    <option value="envelope">Envelope - Mail Design</option>
                    <option value="badge">Badge - Circular RSVP</option>
                    <option value="ribbon">Ribbon - Banner Style</option>
                    <option value="postcard">Postcard - Vintage Style</option>
                    <option value="ticket">Ticket - Event Pass</option>
                    <option value="floating">Floating - Elevated Card</option>
                    <option value="hearts">Hearts - Romantic Theme</option>
                    <option value="stamp">Stamp - Postal Mark</option>
                    <option value="folded">Folded - Paper Effect</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fffbeb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Button Color</label>
                <input type="color" value="#f59e0b" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="buttonColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#fbbf24" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="textColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Button Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-style" data-style="buttonStyle" oninput="updatePreview()">
                    <option value="rounded">Rounded</option>
                    <option value="pill">Pill Shape</option>
                    <option value="square">Square</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'centered';
        const bg = style.bg || '#fffbeb';
        const buttonColor = style.buttonColor || '#f59e0b';
        const accent = style.accent || '#fbbf24';
        const textColor = style.textColor || '#1f2937';
        const buttonStyle = style.buttonStyle || 'rounded';

        const buttonClass = buttonStyle === 'pill' ? 'rounded-full' : buttonStyle === 'square' ? 'rounded' : 'rounded-lg';
        const formattedDeadline = data.deadline ? new Date(data.deadline).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'}) : '';

        switch(layout) {
            case 'card':
                return `
                    <div class="py-12 px-6" style="background: ${bg};">
                        <div class="max-w-md mx-auto">
                            <div class="bg-white rounded-2xl shadow-xl p-8 text-center" style="border-top: 4px solid ${accent};">
                                <div class="text-5xl mb-4">✉️</div>
                                <h2 class="text-2xl font-bold mb-4" style="color: ${textColor};">${data.title || 'Please RSVP'}</h2>
                                <p class="mb-6 opacity-75" style="color: ${textColor};">${data.message || "Let us know if you can join the celebration"}</p>
                                ${data.deadline ? `
                                <div class="mb-6 p-3 rounded-lg" style="background: ${bg}; color: ${textColor};">
                                    <div class="text-xs opacity-60 mb-1">RSVP Deadline</div>
                                    <div class="font-semibold">${formattedDeadline}</div>
                                </div>` : ''}
                                <button class="px-8 py-3 ${buttonClass} font-semibold text-white shadow-lg hover:shadow-xl transition" style="background: ${buttonColor};">
                                    RSVP Now
                                </button>
                            </div>
                        </div>
                    </div>
                `;

            case 'split':
                return `
                    <div class="py-12 px-6" style="background: ${bg};">
                        <div class="max-w-3xl mx-auto">
                            <div class="grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl overflow-hidden shadow-xl">
                                <div class="p-8" style="background: ${accent}; color: white;">
                                    <div class="text-6xl mb-4">✉️</div>
                                    <h2 class="text-3xl font-bold mb-2">${data.title || 'Please RSVP'}</h2>
                                    ${data.deadline ? `
                                    <div class="mt-6 pt-6 border-t border-white border-opacity-30">
                                        <div class="text-sm opacity-75">Deadline</div>
                                        <div class="font-semibold text-lg">${formattedDeadline}</div>
                                    </div>` : ''}
                                </div>
                                <div class="p-8">
                                    <p class="mb-6 text-lg" style="color: ${textColor};">${data.message || "Let us know if you can join the celebration"}</p>
                                    <button class="w-full px-8 py-4 ${buttonClass} font-semibold text-white shadow-lg hover:shadow-xl transition" style="background: ${buttonColor};">
                                        RSVP Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'modern':
                return `
                    <div class="py-12 px-6" style="background: ${bg};">
                        <div class="max-w-md mx-auto">
                            <div class="rounded-3xl p-8 shadow-2xl text-center" style="background: linear-gradient(135deg, ${accent} 0%, ${buttonColor} 100%);">
                                <div class="bg-white bg-opacity-20 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center text-5xl mx-auto mb-6">
                                    ✉️
                                </div>
                                <h2 class="text-3xl font-bold mb-4 text-white">${data.title || 'Please RSVP'}</h2>
                                <div class="bg-white bg-opacity-90 rounded-2xl p-6 mb-6">
                                    <p class="mb-4" style="color: ${textColor};">${data.message || "Let us know if you can join the celebration"}</p>
                                    ${data.deadline ? `
                                    <div class="pt-4 border-t" style="border-color: ${accent};">
                                        <div class="text-xs opacity-60">RSVP by ${formattedDeadline}</div>
                                    </div>` : ''}
                                </div>
                                <button class="px-8 py-4 ${buttonClass} font-bold text-white shadow-xl hover:shadow-2xl transition bg-white" style="color: ${buttonColor};">
                                    RSVP Now
                                </button>
                            </div>
                        </div>
                    </div>
                `;

            case 'minimal':
                return `
                    <div class="py-16 px-6" style="background: ${bg};">
                        <div class="max-w-md mx-auto text-center">
                            <div class="mb-6">
                                <div class="text-4xl mb-3">✉️</div>
                                <h2 class="text-3xl font-light mb-4" style="color: ${textColor}; letter-spacing: 0.05em;">${data.title || 'Please RSVP'}</h2>
                                <div class="h-1 w-16 mx-auto mb-6" style="background: ${accent};"></div>
                            </div>
                            <p class="text-lg mb-8 opacity-75" style="color: ${textColor};">${data.message || "Let us know if you can join the celebration"}</p>
                            ${data.deadline ? `
                            <p class="text-sm mb-6 opacity-60" style="color: ${textColor};">Please respond by ${formattedDeadline}</p>` : ''}
                            <button class="px-10 py-3 ${buttonClass} font-medium text-white border-2 hover:shadow-lg transition" style="background: ${buttonColor}; border-color: ${buttonColor};">
                                RSVP Now
                            </button>
                        </div>
                    </div>
                `;

            case 'envelope':
                return `
                    <div class="py-16 px-6" style="background: ${bg};">
                        <div class="max-w-md mx-auto">
                            <div class="bg-white rounded-lg shadow-2xl overflow-hidden" style="border: 3px solid ${accent};">
                                <div class="relative">
                                    <div class="absolute inset-0 flex items-center justify-center">
                                        <div class="w-0 h-0 border-l-[200px] border-l-transparent border-t-[150px] border-r-[200px] border-r-transparent" style="border-top-color: ${accent};"></div>
                                    </div>
                                    <div class="relative z-10 p-8 text-center">
                                        <div class="text-6xl mb-4">✉️</div>
                                        <h2 class="text-2xl font-bold mb-4" style="color: ${textColor};">${data.title || 'Please RSVP'}</h2>
                                        <p class="mb-6" style="color: ${textColor};">${data.message || "Let us know if you can join the celebration"}</p>
                                        ${data.deadline ? `
                                        <div class="mb-6 inline-block px-4 py-2 rounded-lg" style="background: ${accent}30;">
                                            <div class="text-xs opacity-60">Respond by</div>
                                            <div class="font-semibold">${formattedDeadline}</div>
                                        </div>` : ''}
                                        <div>
                                            <button class="px-8 py-3 ${buttonClass} font-semibold text-white shadow-lg hover:shadow-xl transition" style="background: ${buttonColor};">
                                                Send RSVP
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'badge':
                return `
                    <div class="py-16 px-6" style="background: ${bg};">
                        <div class="max-w-2xl mx-auto text-center">
                            <div class="inline-block mb-8">
                                <div class="w-80 h-80 rounded-full flex items-center justify-center shadow-2xl" style="background: linear-gradient(135deg, ${accent} 0%, ${buttonColor} 100%); border: 12px solid white;">
                                    <div class="text-center">
                                        <div class="text-7xl mb-3">✉️</div>
                                        <h2 class="text-2xl font-bold text-white mb-2">${data.title || 'Please RSVP'}</h2>
                                        ${data.deadline ? `<div class="text-sm text-white opacity-90">by ${formattedDeadline}</div>` : ''}
                                    </div>
                                </div>
                            </div>
                            <p class="text-lg mb-8 max-w-md mx-auto" style="color: ${textColor};">${data.message || "Let us know if you can join the celebration"}</p>
                            <button class="px-10 py-4 ${buttonClass} font-bold text-white shadow-xl hover:shadow-2xl transition" style="background: ${buttonColor};">
                                RSVP Now
                            </button>
                        </div>
                    </div>
                `;

            case 'ribbon':
                return `
                    <div class="py-10 sm:py-12 px-4 sm:px-6" style="background: ${bg};">
                        <div class="max-w-2xl mx-auto">
                            <div class="py-4 sm:py-6 px-6 sm:px-8 text-center font-bold text-xl sm:text-3xl shadow-xl mb-6 sm:mb-8" style="background: ${buttonColor}; color: white; clip-path: polygon(0 0, 95% 0, 100% 50%, 95% 100%, 0 100%, 5% 50%);">
                                <div class="flex items-center justify-center gap-3 sm:gap-4">
                                    <span class="text-3xl sm:text-5xl">✉️</span>
                                    <span>${data.title || 'Please RSVP'}</span>
                                </div>
                            </div>
                            <div class="bg-white rounded-2xl shadow-xl p-6 sm:p-8 text-center">
                                <p class="text-base sm:text-lg mb-6" style="color: ${textColor};">${data.message || "Let us know if you can join the celebration"}</p>
                                ${data.deadline ? `
                                <div class="mb-6 inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-lg border-2" style="border-color: ${accent}; background: ${accent}20;">
                                    <div class="text-xs opacity-60 mb-1">RSVP Deadline</div>
                                    <div class="font-bold text-sm sm:text-base">${formattedDeadline}</div>
                                </div>` : ''}
                                <div>
                                    <button class="px-8 sm:px-10 py-3 sm:py-4 ${buttonClass} font-bold text-white shadow-lg hover:shadow-xl transition border-2 text-sm sm:text-base" style="background: ${accent}; border-color: ${buttonColor};">
                                        Send Your RSVP
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'postcard':
                return `
                    <div class="py-10 sm:py-12 px-4 sm:px-6" style="background: ${bg};">
                        <div class="max-w-md mx-auto">
                            <div class="relative transform hover:-rotate-1 transition-transform">
                                <!-- Postcard stamp -->
                                <div class="absolute top-3 right-3 sm:top-4 sm:right-4 w-12 h-12 sm:w-16 sm:h-16 border-2 border-dashed rounded flex items-center justify-center text-xl sm:text-2xl" style="border-color: ${accent}; background: ${accent}20; color: ${accent};">
                                    ✉️
                                </div>
                                <div class="bg-white p-6 sm:p-8 rounded-lg shadow-2xl border-4" style="border-color: ${accent};">
                                    <div class="mb-6">
                                        <h2 class="text-xl sm:text-2xl font-bold mb-2" style="color: ${textColor}; font-family: 'Courier New', monospace;">${data.title || 'Please RSVP'}</h2>
                                        <div class="h-1 w-12 sm:w-16" style="background: ${accent};"></div>
                                    </div>
                                    <p class="text-sm sm:text-base mb-6" style="color: ${textColor}; font-family: 'Courier New', monospace;">${data.message || "Let us know if you can join the celebration"}</p>
                                    ${data.deadline ? `
                                    <div class="mb-6 p-3 rounded border-l-4" style="border-color: ${accent}; background: ${bg};">
                                        <div class="text-xs opacity-60">RSVP By</div>
                                        <div class="font-bold text-sm sm:text-base" style="font-family: 'Courier New', monospace;">${formattedDeadline}</div>
                                    </div>` : ''}
                                    <button class="w-full px-6 py-3 ${buttonClass} font-bold text-white shadow-lg hover:shadow-xl transition text-sm sm:text-base" style="background: ${buttonColor}; font-family: 'Courier New', monospace;">
                                        SEND RSVP ➤
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'ticket':
                return `
                    <div class="py-10 sm:py-12 px-4 sm:px-6" style="background: ${bg};">
                        <div class="max-w-2xl mx-auto">
                            <div class="bg-white rounded-xl shadow-2xl overflow-hidden" style="border: 3px solid ${accent};">
                                <div class="relative">
                                    <!-- Ticket perforations -->
                                    <div class="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 rounded-full" style="background: ${bg};"></div>
                                    <div class="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 rounded-full" style="background: ${bg};"></div>

                                    <div class="grid md:grid-cols-3 divide-x" style="border-color: ${accent};">
                                        <div class="md:col-span-2 p-6 sm:p-8">
                                            <div class="flex items-center gap-3 sm:gap-4 mb-4">
                                                <div class="text-3xl sm:text-4xl">✉️</div>
                                                <h2 class="text-xl sm:text-2xl font-bold" style="color: ${textColor};">${data.title || 'RSVP Required'}</h2>
                                            </div>
                                            <p class="text-sm sm:text-base mb-6" style="color: ${textColor};">${data.message || "Let us know if you can join the celebration"}</p>
                                            <button class="px-6 sm:px-8 py-2 sm:py-3 ${buttonClass} font-semibold text-white shadow-lg hover:shadow-xl transition text-sm sm:text-base" style="background: ${buttonColor};">
                                                Confirm Attendance
                                            </button>
                                        </div>
                                        <div class="p-6 sm:p-8 flex items-center justify-center" style="background: ${accent}20;">
                                            <div class="text-center">
                                                <div class="text-xs uppercase tracking-wider opacity-60 mb-2">Deadline</div>
                                                <div class="font-bold text-sm sm:text-base" style="color: ${accent};">${formattedDeadline || 'ASAP'}</div>
                                                <div class="mt-4 text-3xl sm:text-4xl">⏰</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'floating':
                return `
                    <div class="py-12 sm:py-16 px-4 sm:px-6" style="background: ${bg};">
                        <div class="max-w-md mx-auto">
                            <div class="relative">
                                <!-- Floating shadow layers -->
                                <div class="absolute inset-0 rounded-2xl transform translate-y-2 opacity-30" style="background: ${accent};"></div>
                                <div class="absolute inset-0 rounded-2xl transform translate-y-4 opacity-15" style="background: ${accent};"></div>

                                <div class="relative bg-white rounded-2xl shadow-2xl p-6 sm:p-8 text-center transform hover:-translate-y-2 transition-transform">
                                    <div class="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full flex items-center justify-center text-3xl sm:text-4xl shadow-lg" style="background: linear-gradient(135deg, ${accent}, ${buttonColor});">
                                        ✉️
                                    </div>
                                    <h2 class="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4" style="color: ${textColor};">${data.title || 'Please RSVP'}</h2>
                                    <p class="text-sm sm:text-base mb-6 opacity-75" style="color: ${textColor};">${data.message || "Let us know if you can join the celebration"}</p>
                                    ${data.deadline ? `
                                    <div class="mb-6 inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full" style="background: ${accent}15; border: 2px solid ${accent}40;">
                                        <span class="text-base sm:text-lg">⏰</span>
                                        <div class="text-left">
                                            <div class="text-xs opacity-60">Respond by</div>
                                            <div class="font-bold text-xs sm:text-sm">${formattedDeadline}</div>
                                        </div>
                                    </div>` : ''}
                                    <button class="w-full px-8 py-3 sm:py-4 ${buttonClass} font-bold text-white shadow-xl hover:shadow-2xl transition text-sm sm:text-base" style="background: ${buttonColor};">
                                        Confirm Your Attendance
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'hearts':
                return `
                    <div class="py-10 sm:py-12 px-4 sm:px-6 relative overflow-hidden" style="background: ${bg};">
                        <!-- Floating hearts -->
                        <div class="absolute inset-0 overflow-hidden pointer-events-none">
                            <div class="absolute top-8 left-4 text-xl sm:text-2xl opacity-20 animate-pulse" style="color: ${accent};">💕</div>
                            <div class="absolute top-16 right-8 text-lg sm:text-xl opacity-20 animate-pulse" style="color: ${buttonColor}; animation-delay: 0.5s;">❤️</div>
                            <div class="absolute bottom-16 left-12 text-xl sm:text-2xl opacity-20 animate-pulse" style="color: ${accent}; animation-delay: 1s;">💗</div>
                            <div class="absolute bottom-8 right-4 text-lg sm:text-xl opacity-20 animate-pulse" style="color: ${buttonColor}; animation-delay: 1.5s;">💝</div>
                            <div class="absolute top-1/3 left-1/4 text-base sm:text-lg opacity-20 animate-pulse" style="color: ${accent}; animation-delay: 0.3s;">💕</div>
                            <div class="absolute top-2/3 right-1/4 text-base sm:text-lg opacity-20 animate-pulse" style="color: ${buttonColor}; animation-delay: 0.8s;">💖</div>
                        </div>

                        <div class="max-w-md mx-auto relative z-10">
                            <div class="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 text-center" style="border: 4px solid ${accent};">
                                <div class="mb-4">
                                    <span class="text-3xl sm:text-4xl">💌</span>
                                </div>
                                <h2 class="text-2xl sm:text-3xl font-bold mb-4" style="color: ${textColor};">${data.title || 'Please RSVP'}</h2>
                                <div class="flex items-center justify-center gap-2 mb-4">
                                    <span style="color: ${accent};">❤️</span>
                                    <div class="h-1 flex-1 max-w-24" style="background: linear-gradient(to right, ${accent}, ${buttonColor});"></div>
                                    <span style="color: ${buttonColor};">❤️</span>
                                </div>
                                <p class="text-sm sm:text-base mb-6 opacity-75" style="color: ${textColor};">${data.message || "Let us know if you can join the celebration"}</p>
                                ${data.deadline ? `
                                <div class="mb-6 inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-full" style="background: ${accent}20; border: 2px dashed ${accent};">
                                    <div class="text-xs opacity-60">Reply with love by</div>
                                    <div class="font-bold text-sm sm:text-base">${formattedDeadline}</div>
                                </div>` : ''}
                                <button class="px-8 sm:px-10 py-3 sm:py-4 ${buttonClass} font-bold text-white shadow-xl hover:shadow-2xl transition text-sm sm:text-base" style="background: linear-gradient(135deg, ${accent}, ${buttonColor});">
                                    💕 Send RSVP with Love
                                </button>
                            </div>
                        </div>
                    </div>
                `;

            case 'stamp':
                return `
                    <div class="py-10 sm:py-12 px-4 sm:px-6" style="background: ${bg};">
                        <div class="max-w-md mx-auto">
                            <div class="relative p-6 sm:p-8 border-4 border-dashed rounded-xl text-center" style="border-color: ${accent}; background: white;">
                                <!-- Corner decorations (postal stamp style) -->
                                <div class="absolute -top-1 -left-1 w-4 h-4 sm:w-6 sm:h-6" style="background: ${bg};"></div>
                                <div class="absolute -top-1 -right-1 w-4 h-4 sm:w-6 sm:h-6" style="background: ${bg};"></div>
                                <div class="absolute -bottom-1 -left-1 w-4 h-4 sm:w-6 sm:h-6" style="background: ${bg};"></div>
                                <div class="absolute -bottom-1 -right-1 w-4 h-4 sm:w-6 sm:h-6" style="background: ${bg};"></div>

                                <!-- Postal stamp in corner -->
                                <div class="absolute top-3 right-3 sm:top-4 sm:right-4 w-12 h-12 sm:w-16 sm:h-16 border-2 rounded flex items-center justify-center shadow-lg transform rotate-12" style="border-color: ${buttonColor}; background: ${buttonColor}20;">
                                    <span class="text-xl sm:text-2xl">📮</span>
                                </div>

                                <div class="text-4xl sm:text-5xl mb-4">✉️</div>
                                <h2 class="text-xl sm:text-2xl font-bold mb-3 uppercase tracking-wide" style="color: ${textColor}; font-family: 'Courier New', monospace;">${data.title || 'RSVP Required'}</h2>

                                <!-- Postal mark effect -->
                                <div class="inline-block mb-4 px-4 py-1 border-2 rounded-full" style="border-color: ${accent};">
                                    <span class="text-xs font-bold uppercase tracking-widest" style="color: ${accent};">Official Response</span>
                                </div>

                                <p class="text-sm sm:text-base mb-6" style="color: ${textColor}; font-family: 'Courier New', monospace;">${data.message || "Let us know if you can join the celebration"}</p>

                                ${data.deadline ? `
                                <div class="mb-6 p-3 sm:p-4 border-2 rounded-lg" style="border-color: ${accent}; background: ${accent}10;">
                                    <div class="flex items-center justify-center gap-2">
                                        <span class="text-lg sm:text-xl">⏰</span>
                                        <div>
                                            <div class="text-xs opacity-60 uppercase">Postmark Deadline</div>
                                            <div class="font-bold text-sm sm:text-base" style="font-family: 'Courier New', monospace;">${formattedDeadline}</div>
                                        </div>
                                    </div>
                                </div>` : ''}

                                <button class="w-full px-6 py-3 sm:py-4 ${buttonClass} font-bold text-white shadow-lg hover:shadow-xl transition uppercase tracking-wide text-sm sm:text-base" style="background: ${buttonColor}; font-family: 'Courier New', monospace;">
                                    ✉️ Send Response
                                </button>
                            </div>
                        </div>
                    </div>
                `;

            case 'folded':
                return `
                    <div class="py-10 sm:py-12 px-4 sm:px-6" style="background: ${bg};">
                        <div class="max-w-md mx-auto">
                            <div class="relative">
                                <!-- Folded paper effect -->
                                <div class="absolute top-0 right-0 w-0 h-0 border-l-[60px] sm:border-l-[80px] border-l-transparent border-t-[60px] sm:border-t-[80px]" style="border-top-color: ${accent}40;"></div>

                                <div class="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 text-center relative overflow-hidden">
                                    <!-- Fold line effect -->
                                    <div class="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 border-l-2 border-b-2" style="border-color: ${accent}20;"></div>

                                    <div class="text-4xl sm:text-5xl mb-4">✉️</div>
                                    <h2 class="text-2xl sm:text-3xl font-bold mb-4" style="color: ${textColor};">${data.title || 'Please RSVP'}</h2>

                                    <div class="mb-6 p-4 sm:p-6 rounded-xl" style="background: ${accent}10; border-left: 4px solid ${accent};">
                                        <p class="text-sm sm:text-base" style="color: ${textColor};">${data.message || "Let us know if you can join the celebration"}</p>
                                    </div>

                                    ${data.deadline ? `
                                    <div class="mb-6 inline-flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-lg border-2" style="border-color: ${accent}; background: white;">
                                        <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-lg sm:text-xl" style="background: ${accent}; color: white;">📅</div>
                                        <div class="text-left">
                                            <div class="text-xs opacity-60">Kindly reply by</div>
                                            <div class="font-bold text-xs sm:text-sm">${formattedDeadline}</div>
                                        </div>
                                    </div>` : ''}

                                    <button class="w-full px-8 py-3 sm:py-4 ${buttonClass} font-bold text-white shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1 text-sm sm:text-base" style="background: linear-gradient(135deg, ${buttonColor}, ${accent});">
                                        Confirm Attendance
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'centered':
            default:
                return `
                    <div class="py-12 px-6 text-center" style="background: ${bg};">
                        <div class="max-w-md mx-auto">
                            <div class="text-5xl mb-4">✉️</div>
                            <h2 class="text-2xl font-bold mb-4" style="color: ${textColor};">${data.title || 'Please RSVP'}</h2>
                            <p class="mb-6" style="color: ${textColor}; opacity: 0.75;">${data.message || "Let us know if you can join the celebration"}</p>
                            ${data.deadline ? `<p class="text-sm mb-6" style="color: ${textColor}; opacity: 0.6;">Deadline: ${formattedDeadline}</p>` : ''}
                            <button class="px-8 py-3 ${buttonClass} font-semibold text-white hover:shadow-lg transition" style="background: ${buttonColor};">
                                RSVP Now
                            </button>
                        </div>
                    </div>
                `;
        }
    }
};
