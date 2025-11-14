// Celebration Event Component for Engagement Announcement

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.celebration = {
    name: '🎉 Celebration Event',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Event Title</label>
                <input type="text" placeholder="Engagement Party" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Event Date</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="date" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Event Time</label>
                <input type="time" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="time" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Venue</label>
                <input type="text" placeholder="Venue name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="venue" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <textarea placeholder="Full address..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="address" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="cards">Info Cards</option>
                    <option value="timeline">Timeline View</option>
                    <option value="elegant">Elegant List</option>
                    <option value="modern">Modern Blocks</option>
                    <option value="ticket">Ticket Style</option>
                    <option value="invitation">Formal Invitation</option>
                    <option value="festive">Festive Party</option>
                    <option value="minimalist">Minimalist Clean</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card/Accent Color</label>
                <input type="color" value="#fdf2f8" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Highlight Color</label>
                <input type="color" value="#e11d48" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="highlight" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Icon Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="iconStyle" onchange="updatePreview()">
                    <option value="circle">Circle Background</option>
                    <option value="square">Square Background</option>
                    <option value="none">No Background</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'cards';
        const bg = style.bg || '#ffffff';
        const cardBg = style.cardBg || '#fdf2f8';
        const highlight = style.highlight || '#e11d48';
        const iconStyle = style.iconStyle || 'circle';

        const iconBg = iconStyle === 'circle' ? 'rounded-full' : iconStyle === 'square' ? 'rounded-lg' : '';
        const iconPadding = iconStyle === 'none' ? '' : 'p-3';

        if (layout === 'timeline') {
            return `
                <div class="py-12 px-6" style="background: ${bg};">
                    <h2 class="text-2xl font-bold text-center mb-12">${data.title || 'Engagement Party'}</h2>
                    <div class="max-w-lg mx-auto relative">
                        <div class="absolute left-8 top-0 bottom-0 w-0.5" style="background: ${highlight};"></div>
                        ${data.date ? `
                        <div class="relative pl-16 pb-8">
                            <div class="absolute left-6 w-5 h-5 rounded-full shadow-md" style="background: ${highlight};"></div>
                            <div class="p-4 rounded-lg shadow-md" style="background: ${cardBg};">
                                <div class="flex items-center gap-3 mb-2">
                                    <span class="text-2xl">📅</span>
                                    <span class="font-semibold" style="color: ${highlight};">Date</span>
                                </div>
                                <p class="text-sm">${new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>
                            </div>
                        </div>` : ''}
                        ${data.time ? `
                        <div class="relative pl-16 pb-8">
                            <div class="absolute left-6 w-5 h-5 rounded-full shadow-md" style="background: ${highlight};"></div>
                            <div class="p-4 rounded-lg shadow-md" style="background: ${cardBg};">
                                <div class="flex items-center gap-3 mb-2">
                                    <span class="text-2xl">🕐</span>
                                    <span class="font-semibold" style="color: ${highlight};">Time</span>
                                </div>
                                <p class="text-sm">${data.time}</p>
                            </div>
                        </div>` : ''}
                        ${data.venue ? `
                        <div class="relative pl-16 pb-8">
                            <div class="absolute left-6 w-5 h-5 rounded-full shadow-md" style="background: ${highlight};"></div>
                            <div class="p-4 rounded-lg shadow-md" style="background: ${cardBg};">
                                <div class="flex items-center gap-3 mb-2">
                                    <span class="text-2xl">🏛️</span>
                                    <span class="font-semibold" style="color: ${highlight};">Venue</span>
                                </div>
                                <p class="text-sm">${data.venue}</p>
                            </div>
                        </div>` : ''}
                        ${data.address ? `
                        <div class="relative pl-16">
                            <div class="absolute left-6 w-5 h-5 rounded-full shadow-md" style="background: ${highlight};"></div>
                            <div class="p-4 rounded-lg shadow-md" style="background: ${cardBg};">
                                <div class="flex items-center gap-3 mb-2">
                                    <span class="text-2xl">📍</span>
                                    <span class="font-semibold" style="color: ${highlight};">Address</span>
                                </div>
                                <p class="text-sm">${data.address}</p>
                            </div>
                        </div>` : ''}
                    </div>
                </div>
            `;
        } else if (layout === 'elegant') {
            return `
                <div class="py-12 px-6" style="background: ${bg};">
                    <h2 class="text-3xl font-bold text-center mb-2">${data.title || 'Engagement Party'}</h2>
                    <div class="w-16 h-0.5 mx-auto mb-12" style="background: ${highlight};"></div>
                    <div class="max-w-md mx-auto space-y-6">
                        ${data.date ? `
                        <div class="flex items-center gap-6 py-4 border-b" style="border-color: ${cardBg};">
                            <span class="text-4xl">📅</span>
                            <div class="flex-1">
                                <div class="text-xs uppercase tracking-wide mb-1" style="color: ${highlight};">Date</div>
                                <div class="font-medium">${new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                            </div>
                        </div>` : ''}
                        ${data.time ? `
                        <div class="flex items-center gap-6 py-4 border-b" style="border-color: ${cardBg};">
                            <span class="text-4xl">🕐</span>
                            <div class="flex-1">
                                <div class="text-xs uppercase tracking-wide mb-1" style="color: ${highlight};">Time</div>
                                <div class="font-medium">${data.time}</div>
                            </div>
                        </div>` : ''}
                        ${data.venue ? `
                        <div class="flex items-center gap-6 py-4 border-b" style="border-color: ${cardBg};">
                            <span class="text-4xl">🏛️</span>
                            <div class="flex-1">
                                <div class="text-xs uppercase tracking-wide mb-1" style="color: ${highlight};">Venue</div>
                                <div class="font-medium">${data.venue}</div>
                            </div>
                        </div>` : ''}
                        ${data.address ? `
                        <div class="flex items-center gap-6 py-4">
                            <span class="text-4xl">📍</span>
                            <div class="flex-1">
                                <div class="text-xs uppercase tracking-wide mb-1" style="color: ${highlight};">Address</div>
                                <div class="text-sm">${data.address}</div>
                            </div>
                        </div>` : ''}
                    </div>
                </div>
            `;
        } else if (layout === 'modern') {
            return `
                <div class="py-12 px-6" style="background: ${bg};">
                    <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Engagement Party'}</h2>
                    <div class="max-w-2xl mx-auto grid md:grid-cols-2 gap-4">
                        ${data.date ? `
                        <div class="p-6 rounded-xl shadow-lg text-center" style="background: ${cardBg};">
                            <div class="text-4xl mb-3">📅</div>
                            <div class="text-xs uppercase tracking-wide mb-2 font-semibold" style="color: ${highlight};">Date</div>
                            <div class="font-bold">${new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                        </div>` : ''}
                        ${data.time ? `
                        <div class="p-6 rounded-xl shadow-lg text-center" style="background: ${cardBg};">
                            <div class="text-4xl mb-3">🕐</div>
                            <div class="text-xs uppercase tracking-wide mb-2 font-semibold" style="color: ${highlight};">Time</div>
                            <div class="font-bold">${data.time}</div>
                        </div>` : ''}
                        ${data.venue ? `
                        <div class="p-6 rounded-xl shadow-lg text-center" style="background: ${cardBg};">
                            <div class="text-4xl mb-3">🏛️</div>
                            <div class="text-xs uppercase tracking-wide mb-2 font-semibold" style="color: ${highlight};">Venue</div>
                            <div class="font-bold">${data.venue}</div>
                        </div>` : ''}
                        ${data.address ? `
                        <div class="p-6 rounded-xl shadow-lg text-center" style="background: ${cardBg};">
                            <div class="text-4xl mb-3">📍</div>
                            <div class="text-xs uppercase tracking-wide mb-2 font-semibold" style="color: ${highlight};">Address</div>
                            <div class="text-sm">${data.address}</div>
                        </div>` : ''}
                    </div>
                </div>
            `;
        } else if (layout === 'ticket') {
            return `
                <div class="py-12 px-6" style="background: ${bg};">
                    <div class="max-w-lg mx-auto">
                        <div class="relative p-8 rounded-2xl shadow-2xl overflow-hidden" style="background: linear-gradient(135deg, ${cardBg} 0%, ${bg} 100%); border: 3px dashed ${highlight};">
                            <div class="absolute top-4 right-4 text-4xl opacity-20">🎉</div>
                            <h2 class="text-3xl font-bold text-center mb-8" style="color: ${highlight};">${data.title || 'Engagement Party'}</h2>
                            <div class="space-y-4">
                                ${data.date ? `
                                <div class="flex items-center gap-4">
                                    <div class="${iconBg} ${iconPadding} text-2xl" style="background: ${iconStyle !== 'none' ? highlight : 'transparent'}; ${iconStyle !== 'none' ? 'color: white;' : ''}">📅</div>
                                    <div>
                                        <div class="text-xs text-gray-500 mb-1">Date</div>
                                        <div class="font-bold">${new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                                    </div>
                                </div>` : ''}
                                ${data.time ? `
                                <div class="flex items-center gap-4">
                                    <div class="${iconBg} ${iconPadding} text-2xl" style="background: ${iconStyle !== 'none' ? highlight : 'transparent'}; ${iconStyle !== 'none' ? 'color: white;' : ''}">🕐</div>
                                    <div>
                                        <div class="text-xs text-gray-500 mb-1">Time</div>
                                        <div class="font-bold">${data.time}</div>
                                    </div>
                                </div>` : ''}
                                ${data.venue ? `
                                <div class="flex items-center gap-4">
                                    <div class="${iconBg} ${iconPadding} text-2xl" style="background: ${iconStyle !== 'none' ? highlight : 'transparent'}; ${iconStyle !== 'none' ? 'color: white;' : ''}">🏛️</div>
                                    <div>
                                        <div class="text-xs text-gray-500 mb-1">Venue</div>
                                        <div class="font-bold">${data.venue}</div>
                                    </div>
                                </div>` : ''}
                                ${data.address ? `
                                <div class="flex items-center gap-4">
                                    <div class="${iconBg} ${iconPadding} text-2xl" style="background: ${iconStyle !== 'none' ? highlight : 'transparent'}; ${iconStyle !== 'none' ? 'color: white;' : ''}">📍</div>
                                    <div>
                                        <div class="text-xs text-gray-500 mb-1">Address</div>
                                        <div class="text-sm">${data.address}</div>
                                    </div>
                                </div>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'invitation') {
            return `
                <div class="py-16 px-6" style="background: ${bg};">
                    <div class="max-w-2xl mx-auto">
                        <div class="relative p-12 rounded-3xl shadow-2xl" style="background: white; border: 4px double ${highlight};">
                            <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 px-8 py-3 rounded-full shadow-lg" style="background: ${highlight};">
                                <span class="text-3xl">🎉</span>
                            </div>
                            <div class="text-center mt-6 mb-10">
                                <div class="text-xs uppercase tracking-[0.3em] mb-3" style="color: ${highlight};">You Are Invited To</div>
                                <h2 class="text-4xl font-bold mb-2" style="font-family: 'Georgia', serif; color: ${highlight};">
                                    ${data.title || 'Engagement Party'}
                                </h2>
                                <div class="w-24 h-px mx-auto mt-6 mb-6" style="background: ${highlight};"></div>
                            </div>
                            <div class="max-w-md mx-auto space-y-6">
                                ${data.date ? `
                                <div class="text-center py-4 border-b" style="border-color: ${cardBg};">
                                    <div class="text-xs uppercase tracking-widest mb-2" style="color: ${highlight}; font-weight: 600;">Date</div>
                                    <div class="text-lg" style="font-family: 'Georgia', serif;">${new Date(data.date).toLocaleDateString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}</div>
                                </div>` : ''}
                                ${data.time ? `
                                <div class="text-center py-4 border-b" style="border-color: ${cardBg};">
                                    <div class="text-xs uppercase tracking-widest mb-2" style="color: ${highlight}; font-weight: 600;">Time</div>
                                    <div class="text-lg" style="font-family: 'Georgia', serif;">${data.time}</div>
                                </div>` : ''}
                                ${data.venue ? `
                                <div class="text-center py-4 border-b" style="border-color: ${cardBg};">
                                    <div class="text-xs uppercase tracking-widest mb-2" style="color: ${highlight}; font-weight: 600;">Venue</div>
                                    <div class="text-lg font-semibold">${data.venue}</div>
                                </div>` : ''}
                                ${data.address ? `
                                <div class="text-center py-4">
                                    <div class="text-xs uppercase tracking-widest mb-2" style="color: ${highlight}; font-weight: 600;">Address</div>
                                    <div class="text-sm leading-relaxed">${data.address}</div>
                                </div>` : ''}
                            </div>
                            <div class="mt-10 text-center">
                                <div class="w-24 h-px mx-auto mb-6" style="background: ${highlight};"></div>
                                <div class="text-sm italic" style="font-family: 'Georgia', serif; color: ${highlight};">
                                    We look forward to celebrating with you
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'festive') {
            return `
                <div class="relative py-16 px-6 overflow-hidden" style="background: linear-gradient(135deg, ${bg} 0%, ${cardBg} 100%);">
                    <div class="absolute inset-0 opacity-10">
                        <div class="absolute top-10 left-10 text-7xl animate-bounce">🎈</div>
                        <div class="absolute top-20 right-20 text-6xl animate-bounce" style="animation-delay: 0.5s;">🎊</div>
                        <div class="absolute bottom-20 left-20 text-6xl animate-bounce" style="animation-delay: 1s;">🎉</div>
                        <div class="absolute bottom-10 right-10 text-7xl animate-bounce" style="animation-delay: 1.5s;">🎁</div>
                    </div>
                    <div class="relative max-w-3xl mx-auto">
                        <div class="text-center mb-10">
                            <div class="flex items-center justify-center gap-3 mb-4">
                                <span class="text-4xl">🎉</span>
                                <span class="text-4xl">🎊</span>
                                <span class="text-4xl">🎉</span>
                            </div>
                            <h2 class="text-5xl font-black uppercase mb-2" style="color: ${highlight}; text-shadow: 3px 3px 0px rgba(0,0,0,0.1);">
                                ${data.title || 'Engagement Party'}
                            </h2>
                            <div class="text-2xl font-bold" style="color: ${highlight};">Let's Celebrate!</div>
                        </div>
                        <div class="grid md:grid-cols-2 gap-6">
                            ${data.date ? `
                            <div class="relative p-6 rounded-2xl shadow-xl transform hover:scale-105 transition" style="background: white;">
                                <div class="absolute -top-3 -right-3 w-12 h-12 rounded-full flex items-center justify-center shadow-lg" style="background: ${highlight};">
                                    <span class="text-2xl">📅</span>
                                </div>
                                <div class="text-sm font-bold uppercase tracking-wide mb-2" style="color: ${highlight};">Date</div>
                                <div class="text-xl font-bold">${new Date(data.date).toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'})}</div>
                            </div>` : ''}
                            ${data.time ? `
                            <div class="relative p-6 rounded-2xl shadow-xl transform hover:scale-105 transition" style="background: white;">
                                <div class="absolute -top-3 -right-3 w-12 h-12 rounded-full flex items-center justify-center shadow-lg" style="background: ${highlight};">
                                    <span class="text-2xl">🕐</span>
                                </div>
                                <div class="text-sm font-bold uppercase tracking-wide mb-2" style="color: ${highlight};">Time</div>
                                <div class="text-xl font-bold">${data.time}</div>
                            </div>` : ''}
                            ${data.venue ? `
                            <div class="relative p-6 rounded-2xl shadow-xl transform hover:scale-105 transition md:col-span-2" style="background: white;">
                                <div class="absolute -top-3 -right-3 w-12 h-12 rounded-full flex items-center justify-center shadow-lg" style="background: ${highlight};">
                                    <span class="text-2xl">🏛️</span>
                                </div>
                                <div class="text-sm font-bold uppercase tracking-wide mb-2" style="color: ${highlight};">Venue</div>
                                <div class="text-xl font-bold mb-2">${data.venue}</div>
                                ${data.address ? `<div class="text-sm text-gray-600">${data.address}</div>` : ''}
                            </div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'minimalist') {
            return `
                <div class="py-20 px-6" style="background: ${bg};">
                    <div class="max-w-xl mx-auto">
                        <div class="space-y-12">
                            <div class="text-center">
                                <div class="w-20 h-px mx-auto mb-8" style="background: ${highlight};"></div>
                                <h2 class="text-5xl font-light mb-4" style="font-family: 'Georgia', serif; letter-spacing: 0.05em;">
                                    ${data.title || 'Engagement Party'}
                                </h2>
                                <div class="w-20 h-px mx-auto" style="background: ${highlight};"></div>
                            </div>
                            <div class="space-y-8">
                                ${data.date ? `
                                <div class="flex items-baseline gap-8 border-b pb-6" style="border-color: ${cardBg};">
                                    <div class="text-4xl" style="color: ${highlight};">📅</div>
                                    <div class="flex-1">
                                        <div class="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">Date</div>
                                        <div class="text-xl font-light">${new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                                    </div>
                                </div>` : ''}
                                ${data.time ? `
                                <div class="flex items-baseline gap-8 border-b pb-6" style="border-color: ${cardBg};">
                                    <div class="text-4xl" style="color: ${highlight};">🕐</div>
                                    <div class="flex-1">
                                        <div class="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">Time</div>
                                        <div class="text-xl font-light">${data.time}</div>
                                    </div>
                                </div>` : ''}
                                ${data.venue ? `
                                <div class="flex items-baseline gap-8 border-b pb-6" style="border-color: ${cardBg};">
                                    <div class="text-4xl" style="color: ${highlight};">🏛️</div>
                                    <div class="flex-1">
                                        <div class="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">Venue</div>
                                        <div class="text-xl font-light">${data.venue}</div>
                                    </div>
                                </div>` : ''}
                                ${data.address ? `
                                <div class="flex items-baseline gap-8">
                                    <div class="text-4xl" style="color: ${highlight};">📍</div>
                                    <div class="flex-1">
                                        <div class="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">Address</div>
                                        <div class="text-base font-light leading-relaxed">${data.address}</div>
                                    </div>
                                </div>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else {
            // Info Cards (default)
            return `
                <div class="py-12 px-6" style="background: ${bg};">
                    <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Engagement Party'}</h2>
                    <div class="max-w-md mx-auto space-y-4">
                        ${data.date ? `
                        <div class="flex items-start gap-4 p-4 rounded-lg shadow-md" style="background: ${cardBg};">
                            <div class="text-2xl">📅</div>
                            <div>
                                <div class="text-xs text-gray-500 mb-1">Date</div>
                                <div class="font-medium">${new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                            </div>
                        </div>` : ''}
                        ${data.time ? `
                        <div class="flex items-start gap-4 p-4 rounded-lg shadow-md" style="background: ${cardBg};">
                            <div class="text-2xl">🕐</div>
                            <div>
                                <div class="text-xs text-gray-500 mb-1">Time</div>
                                <div class="font-medium">${data.time}</div>
                            </div>
                        </div>` : ''}
                        ${data.venue ? `
                        <div class="flex items-start gap-4 p-4 rounded-lg shadow-md" style="background: ${cardBg};">
                            <div class="text-2xl">🏛️</div>
                            <div>
                                <div class="text-xs text-gray-500 mb-1">Venue</div>
                                <div class="font-medium">${data.venue}</div>
                            </div>
                        </div>` : ''}
                        ${data.address ? `
                        <div class="flex items-start gap-4 p-4 rounded-lg shadow-md" style="background: ${cardBg};">
                            <div class="text-2xl">📍</div>
                            <div>
                                <div class="text-xs text-gray-500 mb-1">Address</div>
                                <div class="text-sm">${data.address}</div>
                            </div>
                        </div>` : ''}
                    </div>
                </div>
            `;
        }
    }
};
