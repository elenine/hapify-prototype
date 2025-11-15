// RSVP Component for Engagement Announcement

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.rsvp = {
    name: '✉️ RSVP',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">RSVP Title</label>
                <input type="text" placeholder="Please RSVP" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea placeholder="Let us know if you can celebrate with us..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">RSVP Deadline</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="deadline" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="simple">Simple Center</option>
                    <option value="card">Card Style</option>
                    <option value="gradient">Gradient Banner</option>
                    <option value="bordered">Bordered Box</option>
                    <option value="modern">Modern CTA</option>
                    <option value="envelope">Envelope Style</option>
                    <option value="floating">Floating Action</option>
                    <option value="split">Split Design</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Button Color</label>
                <input type="color" value="#e11d48" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="buttonBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Button Text Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="buttonText" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Button Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="buttonSize" onchange="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium" selected>Medium</option>
                    <option value="large">Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Button Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="buttonStyle" onchange="updatePreview()">
                    <option value="solid">Solid</option>
                    <option value="outline">Outline</option>
                    <option value="rounded">Rounded Pill</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'simple';
        const bg = style.bg || '#ffffff';
        const buttonBg = style.buttonBg || '#e11d48';
        const buttonText = style.buttonText || '#ffffff';
        const buttonSize = style.buttonSize || 'medium';
        const buttonStyle = style.buttonStyle || 'solid';

        const buttonSizes = {
            small: 'px-6 py-2 text-sm',
            medium: 'px-8 py-3 text-base',
            large: 'px-10 py-4 text-lg'
        };

        const buttonStyles = {
            solid: `rounded-lg`,
            outline: `rounded-lg border-2`,
            rounded: `rounded-full`
        };

        const getButtonClass = () => {
            const sizeClass = buttonSizes[buttonSize];
            const styleClass = buttonStyles[buttonStyle];
            if (buttonStyle === 'outline') {
                return `${sizeClass} ${styleClass} font-semibold hover:opacity-80 transition`;
            }
            return `${sizeClass} ${styleClass} font-semibold hover:opacity-90 transition shadow-lg hover:shadow-xl`;
        };

        const getButtonStyles = () => {
            if (buttonStyle === 'outline') {
                return `background: transparent; color: ${buttonBg}; border-color: ${buttonBg};`;
            }
            return `background: ${buttonBg}; color: ${buttonText};`;
        };

        if (layout === 'card') {
            return `
                <div class="py-12 px-6" style="background: ${bg};">
                    <div class="max-w-lg mx-auto p-8 rounded-2xl shadow-xl bg-gradient-to-br from-white to-gray-50">
                        <div class="text-center mb-6">
                            <div class="inline-block p-4 rounded-full mb-4 shadow-md" style="background: ${buttonBg};">
                                <span class="text-4xl">✉️</span>
                            </div>
                            <h2 class="text-3xl font-bold mb-4">${data.title || 'Please RSVP'}</h2>
                            <p class="text-gray-600 leading-relaxed">${data.message || "Let us know if you can celebrate with us"}</p>
                            ${data.deadline ? `<p class="text-sm text-gray-500 mt-4">Deadline: ${new Date(data.deadline).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>` : ''}
                        </div>
                        <button class="${getButtonClass()} w-full" style="${getButtonStyles()}">
                            RSVP Now
                        </button>
                    </div>
                </div>
            `;
        } else if (layout === 'gradient') {
            return `
                <div class="py-16 px-6" style="background: linear-gradient(135deg, ${buttonBg} 0%, ${bg} 100%);">
                    <div class="max-w-2xl mx-auto text-center">
                        <div class="text-6xl mb-4">✉️</div>
                        <h2 class="text-4xl font-bold mb-4 text-white">${data.title || 'Please RSVP'}</h2>
                        <p class="text-white text-lg mb-6 opacity-90">${data.message || "Let us know if you can celebrate with us"}</p>
                        ${data.deadline ? `<p class="text-sm text-white opacity-75 mb-8">Deadline: ${new Date(data.deadline).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>` : ''}
                        <button class="${getButtonClass()}" style="background: white; color: ${buttonBg};">
                            RSVP Now
                        </button>
                    </div>
                </div>
            `;
        } else if (layout === 'bordered') {
            return `
                <div class="py-12 px-6" style="background: ${bg};">
                    <div class="max-w-lg mx-auto p-10 rounded-3xl border-4 border-double shadow-2xl" style="border-color: ${buttonBg};">
                        <div class="text-center">
                            <div class="text-5xl mb-6">✉️</div>
                            <h2 class="text-3xl font-bold mb-4">${data.title || 'Please RSVP'}</h2>
                            <div class="w-20 h-0.5 mx-auto mb-6" style="background: ${buttonBg};"></div>
                            <p class="text-gray-600 mb-6 leading-relaxed">${data.message || "Let us know if you can celebrate with us"}</p>
                            ${data.deadline ? `<p class="text-sm mb-8" style="color: ${buttonBg};">Deadline: ${new Date(data.deadline).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>` : ''}
                            <button class="${getButtonClass()}" style="${getButtonStyles()}">
                                RSVP Now
                            </button>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'modern') {
            return `
                <div class="py-16 px-6" style="background: ${bg};">
                    <div class="max-w-3xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <div class="text-6xl mb-4">✉️</div>
                            <h2 class="text-4xl font-bold mb-4">${data.title || 'Please RSVP'}</h2>
                            <p class="text-gray-600 text-lg leading-relaxed">${data.message || "Let us know if you can celebrate with us"}</p>
                            ${data.deadline ? `<p class="text-sm text-gray-500 mt-4">Deadline: ${new Date(data.deadline).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>` : ''}
                        </div>
                        <div class="text-center md:text-right">
                            <button class="${getButtonClass()}" style="${getButtonStyles()}">
                                RSVP Now
                            </button>
                            <p class="text-xs text-gray-500 mt-4">We can't wait to celebrate with you!</p>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'envelope') {
            return `
                <div class="py-16 px-6" style="background: ${bg};">
                    <div class="max-w-xl mx-auto">
                        <div class="relative">
                            <div class="absolute inset-0 rounded-lg" style="background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%); transform: perspective(1000px) rotateX(2deg);"></div>
                            <div class="relative bg-white rounded-lg shadow-2xl overflow-hidden" style="border: 2px solid ${buttonBg};">
                                <div class="absolute top-0 left-0 w-full h-2" style="background: linear-gradient(to right, ${buttonBg}, transparent, ${buttonBg});"></div>
                                <div class="p-10">
                                    <div class="text-center mb-6">
                                        <div class="inline-block p-4 rounded-full mb-4" style="background: ${buttonBg}20;">
                                            <span class="text-5xl">✉️</span>
                                        </div>
                                        <div class="text-xs uppercase tracking-[0.3em] mb-2" style="color: ${buttonBg};">You're Invited</div>
                                        <h2 class="text-3xl font-bold mb-4" style="font-family: 'Georgia', serif;">${data.title || 'Please RSVP'}</h2>
                                        <div class="w-16 h-px mx-auto mb-4" style="background: ${buttonBg};"></div>
                                    </div>
                                    <p class="text-center text-gray-600 mb-6 leading-relaxed" style="font-family: 'Georgia', serif;">${data.message || "Let us know if you can celebrate with us"}</p>
                                    ${data.deadline ? `
                                    <div class="text-center mb-6 p-3 rounded-lg" style="background: ${buttonBg}10;">
                                        <div class="text-xs uppercase tracking-wide mb-1" style="color: ${buttonBg};">RSVP By</div>
                                        <div class="font-semibold">${new Date(data.deadline).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                                    </div>` : ''}
                                    <div class="text-center">
                                        <button class="${getButtonClass()} w-full" style="${getButtonStyles()}">
                                            Confirm Attendance
                                        </button>
                                    </div>
                                </div>
                                <div class="h-2" style="background: repeating-linear-gradient(45deg, ${buttonBg}, ${buttonBg} 10px, transparent 10px, transparent 20px);"></div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'floating') {
            return `
                <div class="relative py-20 px-6 overflow-hidden" style="background: linear-gradient(135deg, ${bg} 0%, ${buttonBg}10 100%);">
                    <div class="absolute inset-0 opacity-5">
                        <div class="absolute top-10 right-10 text-8xl animate-bounce">✉️</div>
                        <div class="absolute bottom-20 left-10 text-6xl animate-bounce" style="animation-delay: 0.5s;">💌</div>
                        <div class="absolute top-1/2 right-1/4 text-5xl animate-bounce" style="animation-delay: 1s;">📮</div>
                    </div>
                    <div class="relative max-w-md mx-auto">
                        <div class="bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform" style="box-shadow: 0 20px 60px rgba(0,0,0,0.15);">
                            <div class="text-center">
                                <div class="relative inline-block mb-6">
                                    <div class="absolute inset-0 rounded-full blur-xl opacity-30" style="background: ${buttonBg};"></div>
                                    <div class="relative text-6xl">✉️</div>
                                </div>
                                <h2 class="text-3xl font-bold mb-3">${data.title || 'Please RSVP'}</h2>
                                <p class="text-gray-600 mb-6">${data.message || "Let us know if you can celebrate with us"}</p>
                                ${data.deadline ? `
                                <div class="inline-block mb-6 px-6 py-2 rounded-full" style="background: ${buttonBg}15; border: 2px dashed ${buttonBg};">
                                    <span class="text-xs font-semibold" style="color: ${buttonBg};">Deadline: ${new Date(data.deadline).toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'})}</span>
                                </div>` : ''}
                                <button class="${getButtonClass()} w-full relative overflow-hidden group" style="${getButtonStyles()}">
                                    <span class="relative z-10">RSVP Now</span>
                                    <div class="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" style="background: rgba(255,255,255,0.2);"></div>
                                </button>
                                <div class="mt-4 flex items-center justify-center gap-2">
                                    <div class="w-2 h-2 rounded-full animate-pulse" style="background: ${buttonBg};"></div>
                                    <div class="w-2 h-2 rounded-full animate-pulse" style="background: ${buttonBg}; animation-delay: 0.2s;"></div>
                                    <div class="w-2 h-2 rounded-full animate-pulse" style="background: ${buttonBg}; animation-delay: 0.4s;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'split') {
            return `
                <div class="py-12 px-6" style="background: ${bg};">
                    <div class="max-w-4xl mx-auto">
                        <div class="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl">
                            <div class="p-10 flex flex-col justify-center" style="background: linear-gradient(135deg, ${buttonBg} 0%, ${buttonBg}dd 100%); color: white;">
                                <div class="text-7xl mb-6">✉️</div>
                                <h2 class="text-4xl font-bold mb-4">${data.title || 'Please RSVP'}</h2>
                                <p class="text-lg opacity-90 leading-relaxed">${data.message || "Let us know if you can celebrate with us"}</p>
                                ${data.deadline ? `
                                <div class="mt-6 inline-block">
                                    <div class="text-xs uppercase tracking-widest opacity-75 mb-1">Deadline</div>
                                    <div class="text-2xl font-bold">${new Date(data.deadline).toLocaleDateString('en-US', {month: 'short', day: 'numeric'})}</div>
                                </div>` : ''}
                            </div>
                            <div class="p-10 bg-white flex flex-col justify-center items-center text-center">
                                <div class="text-6xl mb-6" style="color: ${buttonBg};">💌</div>
                                <p class="text-gray-600 mb-8">Join us in celebrating this special moment</p>
                                <button class="${getButtonClass()}" style="background: white; color: ${buttonBg}; border: 2px solid ${buttonBg};">
                                    Confirm Your Attendance
                                </button>
                                <p class="text-xs text-gray-400 mt-4">Click to respond</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else {
            // Simple Center (default)
            return `
                <div class="py-12 px-6 text-center" style="background: ${bg};">
                    <div class="max-w-md mx-auto">
                        <h2 class="text-2xl font-bold mb-4">${data.title || 'Please RSVP'}</h2>
                        <p class="text-gray-600 mb-6">${data.message || "Let us know if you can celebrate with us"}</p>
                        ${data.deadline ? `<p class="text-sm text-gray-500 mb-6">Deadline: ${new Date(data.deadline).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>` : ''}
                        <button class="${getButtonClass()}" style="${getButtonStyles()}">
                            RSVP Now
                        </button>
                    </div>
                </div>
            `;
        }
    }
};
