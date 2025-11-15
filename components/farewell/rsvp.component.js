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
                        const borderRadius = style.borderRadius || 'md';
                        const roundedClass = borderRadius === 'sm' ? 'rounded-lg' :
                                           borderRadius === 'lg' ? 'rounded-2xl' :
                                           borderRadius === 'xl' ? 'rounded-3xl' :
                                           borderRadius === 'full' ? 'rounded-full' : 'rounded-xl';

                        return `
                            <div class="py-10 px-6" style="background: ${bg}">
                                <div class="max-w-md mx-auto">
                                    <div class="flex items-center gap-4 mb-6">
                                        <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center ${roundedClass}" style="background: ${buttonColor}15">
                                            <span class="text-2xl">✉️</span>
                                        </div>
                                        <div class="flex-1">
                                            <h2 class="text-xl font-bold">${data.title || 'Please RSVP'}</h2>
                                        </div>
                                    </div>
                                    <p class="text-gray-600 mb-4 text-sm">${data.message || "Let us know if you can join the celebration"}</p>
                                    ${data.deadline ? `
                                        <div class="flex items-center gap-2 mb-6 text-sm text-gray-500">
                                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8"/></svg>
                                            <span>Deadline: ${new Date(data.deadline).toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'})}</span>
                                        </div>
                                    ` : ''}
                                    <button class="${buttonSizeClass} ${getButtonClasses()} ${roundedClass} w-full font-semibold transition" style="${getButtonStyles()}">
                                        RSVP
                                    </button>
                                </div>
                            </div>
                        `;
                    }

                    // Bold Layout - Large CTA
                    if (layout === 'bold') {
                        const textSize = style.textSize || 'normal';
                        const textClass = textSize === 'small' ? 'text-base' : textSize === 'large' ? 'text-2xl' : 'text-xl';

                        return `
                            <div class="py-16 px-6" style="background: linear-gradient(to bottom, ${bg}, white)">
                                <div class="max-w-2xl mx-auto">
                                    <div class="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                                        <div class="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10" style="background: ${buttonColor}; transform: translate(30%, -30%);"></div>
                                        <div class="relative z-10 p-10 text-center">
                                            <div class="inline-block p-6 rounded-full mb-6 shadow-lg" style="background: ${buttonColor}15">
                                                <div class="text-6xl">✉️</div>
                                            </div>
                                            <h2 class="text-4xl font-black mb-4" style="color: ${buttonColor}">${data.title || 'PLEASE RSVP'}</h2>
                                            <p class="text-gray-600 mb-8 ${textClass} max-w-xl mx-auto leading-relaxed">${data.message || "We would love to have you join us for this special celebration"}</p>
                                            ${data.deadline ? `
                                                <div class="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full" style="background: ${buttonColor}10">
                                                    <span class="text-2xl">⏰</span>
                                                    <div class="text-left">
                                                        <div class="text-xs uppercase tracking-wider opacity-60">Deadline</div>
                                                        <div class="font-bold">${new Date(data.deadline).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                                                    </div>
                                                </div>
                                            ` : ''}
                                            <button class="px-16 py-5 text-xl ${getButtonClasses()} rounded-full font-black transition transform hover:scale-105 shadow-2xl" style="${getButtonStyles()}">
                                                CONFIRM NOW →
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Modern Layout - Gradient Box
                    if (layout === 'modern') {
                        const accentColor = style.accentColor || '#c4b5fd';

                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-2xl mx-auto">
                                    <div class="relative rounded-3xl overflow-hidden shadow-2xl" style="background: linear-gradient(135deg, ${buttonColor}15, ${accentColor}20)">
                                        <div class="absolute inset-0" style="background: linear-gradient(135deg, ${buttonColor}05, transparent)"></div>
                                        <div class="relative z-10 p-10">
                                            <div class="grid md:grid-cols-3 gap-8 items-center">
                                                <div class="md:col-span-1 flex justify-center">
                                                    <div class="relative">
                                                        <div class="absolute inset-0 rounded-full blur-xl opacity-50" style="background: ${buttonColor}"></div>
                                                        <div class="relative w-24 h-24 rounded-full flex items-center justify-center text-5xl bg-white shadow-xl">
                                                            ✉️
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="md:col-span-2 text-center md:text-left">
                                                    <h2 class="text-3xl font-bold mb-3">${data.title || 'Please RSVP'}</h2>
                                                    <p class="text-gray-700 mb-4">${data.message || "Let us know if you can join the celebration"}</p>
                                                    ${data.deadline ? `
                                                        <div class="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white rounded-full shadow-sm">
                                                            <span class="text-sm">⏰</span>
                                                            <span class="text-sm font-semibold">By ${new Date(data.deadline).toLocaleDateString('en-US', {month: 'short', day: 'numeric'})}</span>
                                                        </div>
                                                    ` : ''}
                                                    <div class="mt-6">
                                                        <button class="${buttonSizeClass} ${getButtonClasses()} rounded-xl font-semibold transition shadow-lg hover:shadow-xl" style="${getButtonStyles()}">
                                                            Submit RSVP →
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    return '';
                }

            };
