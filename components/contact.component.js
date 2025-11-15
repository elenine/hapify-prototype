// Contact Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.contact = {
                name: '📞 Contact',
                allowMultiple: false,
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                            <input type="text" placeholder="Get In Touch" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="title" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input type="email" placeholder="contact@business.com" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="email" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                            <input type="tel" placeholder="+1 234 567 8900" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="phone" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Address</label>
                            <textarea placeholder="Business address..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="address" oninput="updatePreview()"></textarea>
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="layout" onchange="updatePreview()">
                                <option value="cards">Card Style</option>
                                <option value="list">List View</option>
                                <option value="minimal">Minimal</option>
                                <option value="boxed">Boxed Info</option>
                                <option value="modern">Modern Grid</option>
                                <option value="gradient">Gradient Cards</option>
                                <option value="timeline">Timeline Style</option>
                                <option value="floating">Floating Badges</option>
                                <option value="split-cards">Split Design Cards</option>
                                <option value="compact-badges">Compact Badges</option>
                                <option value="feature-box">Featured Box</option>
                                <option value="circular-icons">Circular Icon Grid</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                            <input type="color" value="#14b8a6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Secondary Color</label>
                            <input type="color" value="#10b981" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="secondary" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Border Radius</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="radius" onchange="updatePreview()">
                                <option value="rounded-lg">Medium</option>
                                <option value="rounded-xl">Large</option>
                                <option value="rounded-2xl">Extra Large</option>
                                <option value="rounded-none">Sharp</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Card Shadow</label>
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
                    const layout = style.layout || 'cards';
                    const bgColor = style.bg || '#ffffff';
                    const accentColor = style.accent || '#14b8a6';
                    const secondaryColor = style.secondary || '#10b981';
                    const shadow = style.shadow || 'md';
                    const shadowClass = `shadow-${shadow}`;
                    const radius = style.radius || 'rounded-lg';
                    const title = data.title || 'Get In Touch';
                    const email = data.email || '';
                    const phone = data.phone || '';
                    const address = data.address || '';

                    const headerHtml = `<h2 class="text-2xl font-bold text-center mb-8">${title}</h2>`;

                    const hasInfo = email || phone || address;

                    switch(layout) {
                        case 'cards':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-4">
                                        ${email ? `
                                        <div class="flex items-center gap-4 p-5 bg-white rounded-xl ${shadowClass} hover:shadow-xl transition-shadow border-l-4" style="border-left-color: ${accentColor}">
                                            <div class="w-14 h-14 rounded-lg flex items-center justify-center text-2xl" style="background: ${accentColor}20; color: ${accentColor};">📧</div>
                                            <div>
                                                <div class="text-xs text-gray-500 mb-1 uppercase tracking-wide">Email</div>
                                                <div class="font-semibold text-sm">${email}</div>
                                            </div>
                                        </div>` : ''}
                                        ${phone ? `
                                        <div class="flex items-center gap-4 p-5 bg-white rounded-xl ${shadowClass} hover:shadow-xl transition-shadow border-l-4" style="border-left-color: ${accentColor}">
                                            <div class="w-14 h-14 rounded-lg flex items-center justify-center text-2xl" style="background: ${accentColor}20; color: ${accentColor};">📞</div>
                                            <div>
                                                <div class="text-xs text-gray-500 mb-1 uppercase tracking-wide">Phone</div>
                                                <div class="font-semibold text-sm">${phone}</div>
                                            </div>
                                        </div>` : ''}
                                        ${address ? `
                                        <div class="flex items-start gap-4 p-5 bg-white rounded-xl ${shadowClass} hover:shadow-xl transition-shadow border-l-4" style="border-left-color: ${accentColor}">
                                            <div class="w-14 h-14 rounded-lg flex items-center justify-center text-2xl" style="background: ${accentColor}20; color: ${accentColor};">📍</div>
                                            <div>
                                                <div class="text-xs text-gray-500 mb-1 uppercase tracking-wide">Address</div>
                                                <div class="font-semibold text-sm">${address}</div>
                                            </div>
                                        </div>` : ''}
                                        ${!hasInfo ? '<div class="text-center text-gray-500 text-sm">Add contact information</div>' : ''}
                                    </div>
                                </div>
                            `;

                        case 'list':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-3">
                                        ${email ? `
                                        <div class="flex items-center justify-between border-b border-gray-200 pb-3">
                                            <div class="flex items-center gap-3">
                                                <span class="text-xl">📧</span>
                                                <span class="font-medium text-sm">${email}</span>
                                            </div>
                                        </div>` : ''}
                                        ${phone ? `
                                        <div class="flex items-center justify-between border-b border-gray-200 pb-3">
                                            <div class="flex items-center gap-3">
                                                <span class="text-xl">📞</span>
                                                <span class="font-medium text-sm">${phone}</span>
                                            </div>
                                        </div>` : ''}
                                        ${address ? `
                                        <div class="flex items-center justify-between border-b border-gray-200 pb-3">
                                            <div class="flex items-center gap-3">
                                                <span class="text-xl">📍</span>
                                                <span class="font-medium text-sm">${address}</span>
                                            </div>
                                        </div>` : ''}
                                        ${!hasInfo ? '<div class="text-center text-gray-500 text-sm">Add contact information</div>' : ''}
                                    </div>
                                </div>
                            `;

                        case 'minimal':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto text-center space-y-2">
                                        ${email ? `<div class="text-sm font-medium">📧 ${email}</div>` : ''}
                                        ${phone ? `<div class="text-sm font-medium">📞 ${phone}</div>` : ''}
                                        ${address ? `<div class="text-sm font-medium">📍 ${address}</div>` : ''}
                                        ${!hasInfo ? '<div class="text-gray-500 text-sm">Add contact information</div>' : ''}
                                    </div>
                                </div>
                            `;

                        case 'boxed':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8 border-t-4" style="border-color: ${accentColor};">
                                        <div class="space-y-6">
                                            ${email ? `
                                            <div class="text-center">
                                                <div class="text-3xl mb-2">📧</div>
                                                <div class="text-xs text-gray-500 uppercase tracking-wide mb-1">Email</div>
                                                <div class="font-semibold">${email}</div>
                                            </div>` : ''}
                                            ${phone ? `
                                            <div class="text-center">
                                                <div class="text-3xl mb-2">📞</div>
                                                <div class="text-xs text-gray-500 uppercase tracking-wide mb-1">Phone</div>
                                                <div class="font-semibold">${phone}</div>
                                            </div>` : ''}
                                            ${address ? `
                                            <div class="text-center">
                                                <div class="text-3xl mb-2">📍</div>
                                                <div class="text-xs text-gray-500 uppercase tracking-wide mb-1">Address</div>
                                                <div class="font-semibold">${address}</div>
                                            </div>` : ''}
                                            ${!hasInfo ? '<div class="text-center text-gray-500 text-sm">Add contact information</div>' : ''}
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'modern':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto grid gap-4">
                                        ${email ? `
                                        <div class="bg-white rounded-xl p-5 shadow-md border-l-4" style="border-color: ${accentColor};">
                                            <div class="flex items-center gap-3">
                                                <div class="text-2xl">📧</div>
                                                <div class="flex-1">
                                                    <div class="text-xs uppercase tracking-wide mb-1" style="color: ${accentColor};">Email</div>
                                                    <div class="font-semibold text-sm">${email}</div>
                                                </div>
                                            </div>
                                        </div>` : ''}
                                        ${phone ? `
                                        <div class="bg-white rounded-xl p-5 shadow-md border-l-4" style="border-color: ${accentColor};">
                                            <div class="flex items-center gap-3">
                                                <div class="text-2xl">📞</div>
                                                <div class="flex-1">
                                                    <div class="text-xs uppercase tracking-wide mb-1" style="color: ${accentColor};">Phone</div>
                                                    <div class="font-semibold text-sm">${phone}</div>
                                                </div>
                                            </div>
                                        </div>` : ''}
                                        ${address ? `
                                        <div class="bg-white rounded-xl p-5 shadow-md border-l-4" style="border-color: ${accentColor};">
                                            <div class="flex items-center gap-3">
                                                <div class="text-2xl">📍</div>
                                                <div class="flex-1">
                                                    <div class="text-xs uppercase tracking-wide mb-1" style="color: ${accentColor};">Address</div>
                                                    <div class="font-semibold text-sm">${address}</div>
                                                </div>
                                            </div>
                                        </div>` : ''}
                                        ${!hasInfo ? '<div class="text-center text-gray-500 text-sm">Add contact information</div>' : ''}
                                    </div>
                                </div>
                            `;

                        case 'gradient':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-4">
                                        ${email ? `
                                        <div class="${radius} ${shadowClass} overflow-hidden" style="background: linear-gradient(135deg, ${accentColor}, ${secondaryColor});">
                                            <div class="flex items-center gap-4 p-5">
                                                <div class="w-14 h-14 bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-2xl backdrop-blur-sm">📧</div>
                                                <div class="flex-1">
                                                    <div class="text-xs text-white opacity-80 mb-1 uppercase tracking-wide">Email</div>
                                                    <div class="font-semibold text-sm text-white">${email}</div>
                                                </div>
                                            </div>
                                        </div>` : ''}
                                        ${phone ? `
                                        <div class="${radius} ${shadowClass} overflow-hidden" style="background: linear-gradient(135deg, ${secondaryColor}, ${accentColor});">
                                            <div class="flex items-center gap-4 p-5">
                                                <div class="w-14 h-14 bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-2xl backdrop-blur-sm">📞</div>
                                                <div class="flex-1">
                                                    <div class="text-xs text-white opacity-80 mb-1 uppercase tracking-wide">Phone</div>
                                                    <div class="font-semibold text-sm text-white">${phone}</div>
                                                </div>
                                            </div>
                                        </div>` : ''}
                                        ${address ? `
                                        <div class="${radius} ${shadowClass} overflow-hidden" style="background: linear-gradient(135deg, ${accentColor}, ${secondaryColor});">
                                            <div class="flex items-start gap-4 p-5">
                                                <div class="w-14 h-14 bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-2xl backdrop-blur-sm">📍</div>
                                                <div class="flex-1">
                                                    <div class="text-xs text-white opacity-80 mb-1 uppercase tracking-wide">Address</div>
                                                    <div class="font-semibold text-sm text-white">${address}</div>
                                                </div>
                                            </div>
                                        </div>` : ''}
                                        ${!hasInfo ? '<div class="text-center text-gray-500 text-sm">Add contact information</div>' : ''}
                                    </div>
                                </div>
                            `;

                        case 'timeline':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto relative">
                                        <div class="absolute left-8 top-0 bottom-0 w-0.5" style="background: ${accentColor}40;"></div>
                                        <div class="space-y-6">
                                            ${email ? `
                                            <div class="relative pl-16">
                                                <div class="absolute left-5 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold text-white" style="background: ${accentColor};">📧</div>
                                                <div class="bg-white p-5 ${radius} ${shadowClass} border-l-4" style="border-color: ${accentColor};">
                                                    <div class="text-xs uppercase tracking-wide mb-1" style="color: ${accentColor};">Email</div>
                                                    <div class="font-semibold text-sm">${email}</div>
                                                </div>
                                            </div>` : ''}
                                            ${phone ? `
                                            <div class="relative pl-16">
                                                <div class="absolute left-5 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold text-white" style="background: ${secondaryColor};">📞</div>
                                                <div class="bg-white p-5 ${radius} ${shadowClass} border-l-4" style="border-color: ${secondaryColor};">
                                                    <div class="text-xs uppercase tracking-wide mb-1" style="color: ${secondaryColor};">Phone</div>
                                                    <div class="font-semibold text-sm">${phone}</div>
                                                </div>
                                            </div>` : ''}
                                            ${address ? `
                                            <div class="relative pl-16">
                                                <div class="absolute left-5 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold text-white" style="background: ${accentColor};">📍</div>
                                                <div class="bg-white p-5 ${radius} ${shadowClass} border-l-4" style="border-color: ${accentColor};">
                                                    <div class="text-xs uppercase tracking-wide mb-1" style="color: ${accentColor};">Address</div>
                                                    <div class="font-semibold text-sm">${address}</div>
                                                </div>
                                            </div>` : ''}
                                            ${!hasInfo ? '<div class="text-center text-gray-500 text-sm pl-16">Add contact information</div>' : ''}
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'floating':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto">
                                        <div class="flex flex-wrap gap-4 justify-center">
                                            ${email ? `
                                            <div class="relative">
                                                <div class="bg-white ${radius} ${shadowClass} p-6 hover:shadow-2xl transition-all transform hover:-translate-y-1">
                                                    <div class="absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-lg" style="background: ${accentColor};">
                                                        📧
                                                    </div>
                                                    <div class="text-xs text-gray-500 uppercase tracking-wide mb-2">Email</div>
                                                    <div class="font-bold text-sm" style="color: ${accentColor};">${email}</div>
                                                </div>
                                            </div>` : ''}
                                            ${phone ? `
                                            <div class="relative">
                                                <div class="bg-white ${radius} ${shadowClass} p-6 hover:shadow-2xl transition-all transform hover:-translate-y-1">
                                                    <div class="absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-lg" style="background: ${secondaryColor};">
                                                        📞
                                                    </div>
                                                    <div class="text-xs text-gray-500 uppercase tracking-wide mb-2">Phone</div>
                                                    <div class="font-bold text-sm" style="color: ${secondaryColor};">${phone}</div>
                                                </div>
                                            </div>` : ''}
                                            ${address ? `
                                            <div class="relative w-full">
                                                <div class="bg-white ${radius} ${shadowClass} p-6 hover:shadow-2xl transition-all transform hover:-translate-y-1">
                                                    <div class="absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-lg" style="background: ${accentColor};">
                                                        📍
                                                    </div>
                                                    <div class="text-xs text-gray-500 uppercase tracking-wide mb-2">Address</div>
                                                    <div class="font-bold text-sm" style="color: ${accentColor};">${address}</div>
                                                </div>
                                            </div>` : ''}
                                            ${!hasInfo ? '<div class="text-center text-gray-500 text-sm w-full">Add contact information</div>' : ''}
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'split-cards':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-3">
                                        ${email ? `
                                        <div class="flex items-stretch ${radius} ${shadowClass} overflow-hidden bg-white">
                                            <div class="w-20 flex items-center justify-center text-3xl" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd);">
                                                📧
                                            </div>
                                            <div class="flex-1 p-4">
                                                <div class="text-xs uppercase tracking-wide mb-1 font-semibold" style="color: ${accentColor};">Email Address</div>
                                                <div class="font-medium text-sm text-gray-800">${email}</div>
                                            </div>
                                        </div>` : ''}
                                        ${phone ? `
                                        <div class="flex items-stretch ${radius} ${shadowClass} overflow-hidden bg-white">
                                            <div class="w-20 flex items-center justify-center text-3xl" style="background: linear-gradient(135deg, ${secondaryColor}, ${secondaryColor}dd);">
                                                📞
                                            </div>
                                            <div class="flex-1 p-4">
                                                <div class="text-xs uppercase tracking-wide mb-1 font-semibold" style="color: ${secondaryColor};">Phone Number</div>
                                                <div class="font-medium text-sm text-gray-800">${phone}</div>
                                            </div>
                                        </div>` : ''}
                                        ${address ? `
                                        <div class="flex items-stretch ${radius} ${shadowClass} overflow-hidden bg-white">
                                            <div class="w-20 flex items-center justify-center text-3xl" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd);">
                                                📍
                                            </div>
                                            <div class="flex-1 p-4">
                                                <div class="text-xs uppercase tracking-wide mb-1 font-semibold" style="color: ${accentColor};">Location</div>
                                                <div class="font-medium text-sm text-gray-800">${address}</div>
                                            </div>
                                        </div>` : ''}
                                        ${!hasInfo ? '<div class="text-center text-gray-500 text-sm">Add contact information</div>' : ''}
                                    </div>
                                </div>
                            `;

                        case 'compact-badges':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto">
                                        <div class="flex flex-wrap gap-2 justify-center">
                                            ${email ? `
                                            <div class="inline-flex items-center gap-2 px-4 py-3 ${radius} ${shadowClass}" style="background: linear-gradient(135deg, ${accentColor}20, ${accentColor}40);">
                                                <span class="text-lg">📧</span>
                                                <span class="text-xs font-bold text-gray-800">${email}</span>
                                            </div>` : ''}
                                            ${phone ? `
                                            <div class="inline-flex items-center gap-2 px-4 py-3 ${radius} ${shadowClass}" style="background: linear-gradient(135deg, ${secondaryColor}20, ${secondaryColor}40);">
                                                <span class="text-lg">📞</span>
                                                <span class="text-xs font-bold text-gray-800">${phone}</span>
                                            </div>` : ''}
                                            ${address ? `
                                            <div class="inline-flex items-center gap-2 px-4 py-3 ${radius} ${shadowClass}" style="background: linear-gradient(135deg, ${accentColor}20, ${accentColor}40);">
                                                <span class="text-lg">📍</span>
                                                <span class="text-xs font-bold text-gray-800">${address}</span>
                                            </div>` : ''}
                                            ${!hasInfo ? '<div class="text-center text-gray-500 text-sm w-full">Add contact information</div>' : ''}
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'feature-box':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto">
                                        <div class="relative ${radius} ${shadowClass} overflow-hidden" style="background: linear-gradient(135deg, ${accentColor}, ${secondaryColor});">
                                            <div class="absolute top-0 right-0 text-9xl opacity-10 -mt-6 -mr-8">📞</div>
                                            <div class="relative p-8 space-y-5">
                                                <div class="inline-block px-3 py-1 bg-white bg-opacity-20 rounded-full text-xs font-bold text-white uppercase tracking-wide mb-2">
                                                    Contact Information
                                                </div>
                                                ${email ? `
                                                <div class="flex items-center gap-3 p-4 bg-white bg-opacity-15 backdrop-blur-sm ${radius}">
                                                    <span class="text-2xl">📧</span>
                                                    <div class="flex-1">
                                                        <div class="text-xs text-white opacity-80 uppercase tracking-wide">Email</div>
                                                        <div class="font-semibold text-white">${email}</div>
                                                    </div>
                                                </div>` : ''}
                                                ${phone ? `
                                                <div class="flex items-center gap-3 p-4 bg-white bg-opacity-15 backdrop-blur-sm ${radius}">
                                                    <span class="text-2xl">📞</span>
                                                    <div class="flex-1">
                                                        <div class="text-xs text-white opacity-80 uppercase tracking-wide">Phone</div>
                                                        <div class="font-semibold text-white">${phone}</div>
                                                    </div>
                                                </div>` : ''}
                                                ${address ? `
                                                <div class="flex items-center gap-3 p-4 bg-white bg-opacity-15 backdrop-blur-sm ${radius}">
                                                    <span class="text-2xl">📍</span>
                                                    <div class="flex-1">
                                                        <div class="text-xs text-white opacity-80 uppercase tracking-wide">Address</div>
                                                        <div class="font-semibold text-white">${address}</div>
                                                    </div>
                                                </div>` : ''}
                                                ${!hasInfo ? '<div class="text-center text-white text-sm">Add contact information</div>' : ''}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'circular-icons':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto">
                                        <div class="grid gap-6">
                                            ${email ? `
                                            <div class="flex items-center gap-4">
                                                <div class="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl ${shadowClass}" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd); color: white;">
                                                    📧
                                                </div>
                                                <div class="flex-1 bg-white p-4 ${radius} ${shadowClass}">
                                                    <div class="text-xs uppercase tracking-wide mb-1" style="color: ${accentColor};">Email Address</div>
                                                    <div class="font-bold text-sm text-gray-800">${email}</div>
                                                </div>
                                            </div>` : ''}
                                            ${phone ? `
                                            <div class="flex items-center gap-4">
                                                <div class="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl ${shadowClass}" style="background: linear-gradient(135deg, ${secondaryColor}, ${secondaryColor}dd); color: white;">
                                                    📞
                                                </div>
                                                <div class="flex-1 bg-white p-4 ${radius} ${shadowClass}">
                                                    <div class="text-xs uppercase tracking-wide mb-1" style="color: ${secondaryColor};">Phone Number</div>
                                                    <div class="font-bold text-sm text-gray-800">${phone}</div>
                                                </div>
                                            </div>` : ''}
                                            ${address ? `
                                            <div class="flex items-center gap-4">
                                                <div class="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl ${shadowClass}" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd); color: white;">
                                                    📍
                                                </div>
                                                <div class="flex-1 bg-white p-4 ${radius} ${shadowClass}">
                                                    <div class="text-xs uppercase tracking-wide mb-1" style="color: ${accentColor};">Our Location</div>
                                                    <div class="font-bold text-sm text-gray-800">${address}</div>
                                                </div>
                                            </div>` : ''}
                                            ${!hasInfo ? '<div class="text-center text-gray-500 text-sm">Add contact information</div>' : ''}
                                        </div>
                                    </div>
                                </div>
                            `;

                        default:
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-4">
                                        ${email ? `
                                        <div class="flex items-center gap-4 p-4 bg-white rounded-lg">
                                            <div class="text-2xl">📧</div>
                                            <div>
                                                <div class="text-xs text-gray-500 mb-1">Email</div>
                                                <div class="font-medium text-sm">${email}</div>
                                            </div>
                                        </div>` : ''}
                                        ${phone ? `
                                        <div class="flex items-center gap-4 p-4 bg-white rounded-lg">
                                            <div class="text-2xl">📞</div>
                                            <div>
                                                <div class="text-xs text-gray-500 mb-1">Phone</div>
                                                <div class="font-medium text-sm">${phone}</div>
                                            </div>
                                        </div>` : ''}
                                        ${address ? `
                                        <div class="flex items-start gap-4 p-4 bg-white rounded-lg">
                                            <div class="text-2xl">📍</div>
                                            <div>
                                                <div class="text-xs text-gray-500 mb-1">Address</div>
                                                <div class="font-medium text-sm">${address}</div>
                                            </div>
                                        </div>` : ''}
                                        ${!hasInfo ? '<div class="text-center text-gray-500 text-sm">Add contact information</div>' : ''}
                                    </div>
                                </div>
                            `;
                    }
                }
            };
