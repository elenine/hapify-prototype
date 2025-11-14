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
