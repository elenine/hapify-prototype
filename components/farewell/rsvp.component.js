// RSVP Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.rsvp = {
                name: '✉️ RSVP',
                allowMultiple: false,
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">RSVP Title</label>
                            <input type="text" placeholder="Please Join Us" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="title" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                            <textarea placeholder="Please let us know if you can join us..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">RSVP Deadline</label>
                            <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="deadline" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="layout" onchange="updatePreview()">
                                <option value="simple">Simple - Centered</option>
                                <option value="card">Card - Elevated Box</option>
                                <option value="split">Split - Form & Info</option>
                                <option value="banner">Banner - Full Width CTA</option>
                                <option value="elegant">Elegant - Bordered</option>
                                <option value="minimal">Minimal - Clean Design</option>
                                <option value="bold">Bold - Large CTA</option>
                                <option value="modern">Modern - Gradient Box</option>
                                <option value="invitation">Invitation - Classic Style</option>
                                <option value="ticket">Ticket - Event Pass</option>
                                <option value="compact">Compact - Space Efficient</option>
                                <option value="floating">Floating - Elevated Card</option>
                                <option value="envelope">Envelope - Mail Style</option>
                                <option value="formal">Formal - Professional</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#faf5ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                            <input type="color" value="#c4b5fd" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentColor" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Button Color</label>
                            <input type="color" value="#8b5cf6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="buttonColor" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Button Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="buttonStyle" onchange="updatePreview()">
                                <option value="solid">Solid</option>
                                <option value="outline">Outline</option>
                                <option value="gradient">Gradient</option>
                                <option value="shadow">Shadow Effect</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Button Size</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="buttonSize" onchange="updatePreview()">
                                <option value="sm">Small</option>
                                <option value="md">Medium</option>
                                <option value="lg">Large</option>
                                <option value="xl">Extra Large</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Border Radius</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="borderRadius" onchange="updatePreview()">
                                <option value="sm">Small</option>
                                <option value="md">Medium</option>
                                <option value="lg">Large</option>
                                <option value="xl">Extra Large</option>
                                <option value="full">Pill Shape</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Text Size</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="textSize" onchange="updatePreview()">
                                <option value="small">Small</option>
                                <option value="normal">Normal</option>
                                <option value="large">Large</option>
                            </select>
                        </div>
                    </div>
                `,
                render: (data, style) => {
                    const layout = style.layout || 'simple';
                    const bg = style.bg || '#faf5ff';
                    const buttonColor = style.buttonColor || '#8b5cf6';
                    const buttonStyle = style.buttonStyle || 'solid';
                    const buttonSize = style.buttonSize || 'md';

                    const buttonSizeClass = buttonSize === 'sm' ? 'px-6 py-2 text-sm' : buttonSize === 'lg' ? 'px-12 py-4 text-lg' : 'px-8 py-3';

                    const getButtonClasses = () => {
                        if (buttonStyle === 'outline') {
                            return `border-2 hover:bg-opacity-10`;
                        }
                        if (buttonStyle === 'gradient') {
                            return '';
                        }
                        return 'hover:opacity-90';
                    };

                    const getButtonStyles = () => {
                        if (buttonStyle === 'outline') {
                            return `border-color: ${buttonColor}; color: ${buttonColor}; background: transparent`;
                        }
                        if (buttonStyle === 'gradient') {
                            return `background: linear-gradient(135deg, ${buttonColor}, ${buttonColor}90); color: white`;
                        }
                        return `background: ${buttonColor}; color: white`;
                    };

                    // Simple Layout - Centered
                    if (layout === 'simple') {
                        return `
                            <div class="py-12 px-6 text-center" style="background: ${bg}">
                                <div class="max-w-md mx-auto">
                                    <div class="text-5xl mb-4">✉️</div>
                                    <h2 class="text-3xl font-bold mb-4">${data.title || 'Please RSVP'}</h2>
                                    <p class="text-gray-600 mb-6 text-lg">${data.message || "Let us know if you can join the celebration"}</p>
                                    ${data.deadline ? `<p class="text-sm text-gray-500 mb-8">⏰ Please respond by ${new Date(data.deadline).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>` : ''}
                                    <button class="${buttonSizeClass} ${getButtonClasses()} rounded-xl font-semibold transition shadow-md" style="${getButtonStyles()}">
                                        RSVP Now
                                    </button>
                                </div>
                            </div>
                        `;
                    }

                    // Card Layout - Elevated Box
                    if (layout === 'card') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-lg mx-auto bg-white rounded-3xl shadow-2xl p-8">
                                    <div class="text-center">
                                        <div class="inline-block p-4 rounded-full mb-4" style="background: ${buttonColor}15">
                                            <div class="text-4xl">✉️</div>
                                        </div>
                                        <h2 class="text-3xl font-bold mb-4">${data.title || 'Please RSVP'}</h2>
                                        <p class="text-gray-600 mb-6">${data.message || "Let us know if you can join the celebration"}</p>
                                        ${data.deadline ? `
                                            <div class="mb-6 p-3 rounded-lg" style="background: ${buttonColor}10">
                                                <p class="text-sm font-semibold">Deadline: ${new Date(data.deadline).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>
                                            </div>
                                        ` : ''}
                                        <button class="${buttonSizeClass} ${getButtonClasses()} w-full rounded-xl font-semibold transition shadow-lg" style="${getButtonStyles()}">
                                            Confirm Attendance
                                        </button>
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Split Layout - Form & Info
                    if (layout === 'split') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                                    <div class="grid md:grid-cols-2">
                                        <div class="p-8" style="background: ${buttonColor}15">
                                            <div class="text-5xl mb-4">✉️</div>
                                            <h2 class="text-2xl font-bold mb-3">${data.title || 'Please RSVP'}</h2>
                                            <p class="text-gray-700 mb-4">${data.message || "Let us know if you can join the celebration"}</p>
                                            ${data.deadline ? `
                                                <div class="flex items-center gap-2 text-sm">
                                                    <span>⏰</span>
                                                    <span class="font-semibold">Deadline: ${new Date(data.deadline).toLocaleDateString('en-US', {month: 'short', day: 'numeric'})}</span>
                                                </div>
                                            ` : ''}
                                        </div>
                                        <div class="p-8 flex items-center justify-center">
                                            <div class="w-full">
                                                <button class="${buttonSizeClass} ${getButtonClasses()} w-full rounded-xl font-semibold transition shadow-md mb-3" style="${getButtonStyles()}">
                                                    ✓ I'll Be There
                                                </button>
                                                <button class="w-full px-8 py-3 rounded-xl font-semibold transition border-2" style="border-color: #e5e7eb; color: #6b7280">
                                                    ✗ Can't Make It
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Banner Layout - Full Width CTA
                    if (layout === 'banner') {
                        return `
                            <div class="py-16 px-6" style="background: linear-gradient(135deg, ${buttonColor}, ${buttonColor}90)">
                                <div class="max-w-3xl mx-auto text-center text-white">
                                    <div class="text-6xl mb-6">✉️</div>
                                    <h2 class="text-4xl font-bold mb-4">${data.title || 'Please RSVP'}</h2>
                                    <p class="text-xl mb-8 opacity-90">${data.message || "Let us know if you can join the celebration"}</p>
                                    ${data.deadline ? `
                                        <p class="text-sm mb-8 opacity-80">⏰ Respond by ${new Date(data.deadline).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>
                                    ` : ''}
                                    <button class="${buttonSizeClass} bg-white rounded-full font-bold transition hover:scale-105 shadow-2xl" style="color: ${buttonColor}">
                                        RSVP Now →
                                    </button>
                                </div>
                            </div>
                        `;
                    }

                    // Elegant Layout - Bordered
                    if (layout === 'elegant') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-lg mx-auto border-4 rounded-2xl p-10 bg-white shadow-lg" style="border-color: ${buttonColor}">
                                    <div class="text-center">
                                        <div class="w-16 h-1 mx-auto mb-6" style="background: ${buttonColor}"></div>
                                        <div class="text-4xl mb-4">✉️</div>
                                        <h2 class="text-3xl font-bold mb-4" style="color: ${buttonColor}">${data.title || 'Please RSVP'}</h2>
                                        <div class="w-24 h-1 mx-auto mb-6" style="background: ${buttonColor}30"></div>
                                        <p class="text-gray-700 mb-6 leading-relaxed">${data.message || "Let us know if you can join the celebration"}</p>
                                        ${data.deadline ? `
                                            <div class="mb-8 pb-6 border-b" style="border-color: ${buttonColor}20">
                                                <p class="text-sm font-semibold" style="color: ${buttonColor}">Kindly respond by</p>
                                                <p class="text-lg font-bold">${new Date(data.deadline).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>
                                            </div>
                                        ` : ''}
                                        <button class="${buttonSizeClass} ${getButtonClasses()} rounded-full font-semibold transition shadow-md" style="${getButtonStyles()}">
                                            Send RSVP
                                        </button>
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Minimal Layout - Clean Design
                    if (layout === 'minimal') {
                        return `
                            <div class="py-16 px-6" style="background: ${bg}">
                                <div class="max-w-sm mx-auto text-center">
                                    <h2 class="text-2xl font-bold mb-3">${data.title || 'Please RSVP'}</h2>
                                    <p class="text-gray-600 mb-6 text-sm">${data.message || "Let us know if you can join the celebration"}</p>
                                    ${data.deadline ? `<p class="text-xs text-gray-500 mb-6">Respond by ${new Date(data.deadline).toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'})}</p>` : ''}
                                    <button class="${buttonSizeClass} ${getButtonClasses()} rounded-lg font-semibold transition" style="${getButtonStyles()}">
                                        RSVP
                                    </button>
                                </div>
                            </div>
                        `;
                    }

                    // Bold Layout - Large CTA
                    if (layout === 'bold') {
                        return `
                            <div class="py-16 px-6" style="background: ${bg}">
                                <div class="max-w-2xl mx-auto text-center">
                                    <div class="text-7xl mb-6">✉️</div>
                                    <h2 class="text-5xl font-black mb-6" style="color: ${buttonColor}">${data.title || 'RSVP NOW'}</h2>
                                    <p class="text-xl text-gray-700 mb-8 max-w-lg mx-auto font-medium">${data.message || "Let us know if you can join the celebration"}</p>
                                    ${data.deadline ? `
                                        <div class="inline-block mb-8 px-6 py-3 rounded-full text-sm font-bold" style="background: ${buttonColor}20; color: ${buttonColor}">
                                            ⏰ Deadline: ${new Date(data.deadline).toLocaleDateString('en-US', {month: 'short', day: 'numeric'})}
                                        </div>
                                    ` : ''}
                                    <div>
                                        <button class="px-16 py-5 text-2xl rounded-2xl font-black transition hover:scale-105 shadow-2xl" style="${getButtonStyles()}">
                                            RESPOND NOW →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Modern Layout - Gradient Box
                    if (layout === 'modern') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-lg mx-auto rounded-3xl shadow-2xl overflow-hidden" style="background: linear-gradient(135deg, ${buttonColor}15, ${buttonColor}05)">
                                    <div class="p-10">
                                        <div class="flex items-center gap-4 mb-6">
                                            <div class="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg" style="background: ${buttonColor}">
                                                <span class="text-white">✉️</span>
                                            </div>
                                            <h2 class="text-3xl font-bold">${data.title || 'Please RSVP'}</h2>
                                        </div>
                                        <p class="text-gray-700 mb-6 leading-relaxed">${data.message || "Let us know if you can join the celebration"}</p>
                                        ${data.deadline ? `
                                            <div class="mb-6 p-4 rounded-xl bg-white shadow-sm">
                                                <div class="flex items-center gap-3">
                                                    <span class="text-2xl">⏰</span>
                                                    <div>
                                                        <p class="text-xs text-gray-500 uppercase tracking-wide">Respond Before</p>
                                                        <p class="font-bold">${new Date(data.deadline).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ` : ''}
                                        <button class="${buttonSizeClass} ${getButtonClasses()} w-full rounded-xl font-semibold transition shadow-lg" style="${getButtonStyles()}">
                                            Confirm Your Attendance
                                        </button>
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Invitation Layout - Classic Style
                    if (layout === 'invitation') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-md mx-auto bg-white shadow-xl" style="border: 12px solid ${buttonColor}20; padding: 3rem">
                                    <div class="text-center">
                                        <div class="mb-6">
                                            <div class="w-20 h-20 mx-auto rounded-full flex items-center justify-center text-4xl" style="background: ${buttonColor}; color: white">
                                                ✉️
                                            </div>
                                        </div>
                                        <div class="mb-4" style="font-family: serif">
                                            <h2 class="text-3xl font-bold mb-2">${data.title || 'Please RSVP'}</h2>
                                            <div class="w-32 h-0.5 mx-auto" style="background: ${buttonColor}"></div>
                                        </div>
                                        <p class="text-gray-700 mb-6 leading-relaxed italic">${data.message || "Let us know if you can join the celebration"}</p>
                                        ${data.deadline ? `
                                            <div class="mb-6 py-3 border-t border-b" style="border-color: ${buttonColor}30">
                                                <p class="text-sm">Kindly respond by</p>
                                                <p class="font-bold text-lg">${new Date(data.deadline).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>
                                            </div>
                                        ` : ''}
                                        <button class="${buttonSizeClass} ${getButtonClasses()} rounded-none font-semibold transition" style="${getButtonStyles()}; font-family: serif; letter-spacing: 2px">
                                            RESPOND
                                        </button>
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Ticket Layout - Event Pass
                    if (layout === 'ticket') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-md mx-auto">
                                    <div class="bg-white rounded-2xl shadow-2xl overflow-hidden" style="border: 3px dashed ${buttonColor}">
                                        <div class="h-3" style="background: linear-gradient(90deg, ${buttonColor}, ${buttonColor}70)"></div>
                                        <div class="p-8">
                                            <div class="flex items-center justify-between mb-6">
                                                <div class="text-4xl">✉️</div>
                                                <div class="text-xs font-bold tracking-widest opacity-60">RSVP REQUIRED</div>
                                            </div>
                                            <h2 class="text-2xl font-bold mb-3">${data.title || 'Please RSVP'}</h2>
                                            <p class="text-gray-600 mb-6 text-sm">${data.message || "Let us know if you can join the celebration"}</p>
                                            ${data.deadline ? `
                                                <div class="mb-6 p-3 rounded-lg" style="background: ${buttonColor}10">
                                                    <div class="flex items-center gap-2 text-sm">
                                                        <span>⏰</span>
                                                        <span class="font-semibold">Valid Until: ${new Date(data.deadline).toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'})}</span>
                                                    </div>
                                                </div>
                                            ` : ''}
                                            <button class="${buttonSizeClass} ${getButtonClasses()} w-full rounded-lg font-bold transition shadow-md" style="${getButtonStyles()}">
                                                CONFIRM ATTENDANCE
                                            </button>
                                        </div>
                                        <div class="h-3" style="background: linear-gradient(90deg, ${buttonColor}, ${buttonColor}70)"></div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Compact Layout - Space Efficient
                    if (layout === 'compact') {
                        return `
                            <div class="py-8 px-6" style="background: ${bg}">
                                <div class="max-w-sm mx-auto bg-white rounded-xl shadow-lg p-6">
                                    <div class="flex items-center gap-4 mb-4">
                                        <div class="text-3xl">✉️</div>
                                        <div class="flex-1">
                                            <h2 class="text-lg font-bold">${data.title || 'Please RSVP'}</h2>
                                            ${data.deadline ? `<p class="text-xs text-gray-500">By ${new Date(data.deadline).toLocaleDateString('en-US', {month: 'short', day: 'numeric'})}</p>` : ''}
                                        </div>
                                    </div>
                                    <p class="text-sm text-gray-600 mb-4">${data.message || "Let us know if you can join the celebration"}</p>
                                    <button class="px-6 py-2 w-full rounded-lg font-semibold transition text-sm shadow-md" style="${getButtonStyles()}">
                                        RSVP Now
                                    </button>
                                </div>
                            </div>
                        `;
                    }

                    // Floating Layout - Elevated Card
                    if (layout === 'floating') {
                        return `
                            <div class="py-12 px-6 relative" style="background: ${bg}; min-height: 400px">
                                <div class="max-w-md mx-auto">
                                    <div class="bg-white rounded-3xl shadow-2xl p-8 transform hover:-translate-y-2 transition-transform" style="box-shadow: 0 25px 50px -12px ${buttonColor}40">
                                        <div class="absolute -top-8 left-1/2 -translate-x-1/2">
                                            <div class="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-xl" style="background: ${buttonColor}">
                                                <span class="text-white">✉️</span>
                                            </div>
                                        </div>
                                        <div class="text-center pt-6">
                                            <h2 class="text-3xl font-bold mb-4">${data.title || 'Please RSVP'}</h2>
                                            <p class="text-gray-600 mb-6">${data.message || "Let us know if you can join the celebration"}</p>
                                            ${data.deadline ? `
                                                <div class="mb-6 inline-block px-4 py-2 rounded-full text-sm font-semibold" style="background: ${buttonColor}15; color: ${buttonColor}">
                                                    ⏰ ${new Date(data.deadline).toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'})}
                                                </div>
                                            ` : ''}
                                            <div>
                                                <button class="${buttonSizeClass} ${getButtonClasses()} rounded-full font-semibold transition shadow-lg" style="${getButtonStyles()}">
                                                    Send Response
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Envelope Layout - Mail Style
                    if (layout === 'envelope') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-md mx-auto">
                                    <div class="bg-white rounded-lg shadow-xl overflow-hidden">
                                        <div class="relative" style="background: linear-gradient(to bottom right, ${buttonColor}90 0%, ${buttonColor}90 50%, transparent 50%, transparent 100%), linear-gradient(to bottom left, ${buttonColor}90 0%, ${buttonColor}90 50%, transparent 50%, transparent 100%); height: 120px">
                                            <div class="absolute inset-0 flex items-center justify-center">
                                                <div class="text-5xl text-white">✉️</div>
                                            </div>
                                        </div>
                                        <div class="p-8">
                                            <h2 class="text-2xl font-bold mb-3 text-center">${data.title || 'Please RSVP'}</h2>
                                            <p class="text-gray-600 mb-6 text-center text-sm">${data.message || "Let us know if you can join the celebration"}</p>
                                            ${data.deadline ? `
                                                <div class="mb-6 text-center">
                                                    <div class="inline-flex items-center gap-2 px-4 py-2 rounded-lg" style="background: ${buttonColor}10">
                                                        <span class="text-sm">⏰</span>
                                                        <span class="text-sm font-semibold">Reply by ${new Date(data.deadline).toLocaleDateString('en-US', {month: 'short', day: 'numeric'})}</span>
                                                    </div>
                                                </div>
                                            ` : ''}
                                            <button class="${buttonSizeClass} ${getButtonClasses()} w-full rounded-lg font-semibold transition shadow-md" style="${getButtonStyles()}">
                                                Respond Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Formal Layout - Professional
                    if (layout === 'formal') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-lg mx-auto bg-white shadow-lg p-12" style="border-top: 8px solid ${buttonColor}">
                                    <div class="text-center">
                                        <div class="mb-8">
                                            <div class="text-5xl mb-4">✉️</div>
                                            <div class="w-24 h-1 mx-auto mb-6" style="background: ${buttonColor}"></div>
                                        </div>
                                        <h2 class="text-3xl font-bold mb-6" style="font-family: serif; color: ${buttonColor}">${data.title || 'Request for Response'}</h2>
                                        <p class="text-gray-700 mb-8 leading-relaxed" style="font-family: serif">${data.message || "Your presence is requested. Kindly confirm your attendance at your earliest convenience."}</p>
                                        ${data.deadline ? `
                                            <div class="mb-8 p-4" style="border: 2px solid ${buttonColor}20">
                                                <p class="text-xs uppercase tracking-widest mb-1 text-gray-500">Response Deadline</p>
                                                <p class="text-lg font-bold" style="font-family: serif">${new Date(data.deadline).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>
                                            </div>
                                        ` : ''}
                                        <button class="${buttonSizeClass} ${getButtonClasses()} rounded-sm font-semibold transition uppercase tracking-widest text-sm" style="${getButtonStyles()}; font-family: serif">
                                            Submit Response
                                        </button>
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    return '';
                }

            };
