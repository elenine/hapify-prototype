// Party Details Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.partydetails = {
                name: '🎉 Party Details',
                allowMultiple: false,
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Party Date</label>
                            <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="date" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Time</label>
                            <input type="time" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="time" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Venue Name</label>
                            <input type="text" placeholder="Office Rooftop Lounge" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="venue" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Address</label>
                            <textarea placeholder="Full venue address..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="address" oninput="updatePreview()"></textarea>
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="layout" onchange="updatePreview()">
                                <option value="cards">Cards - Individual Boxes</option>
                                <option value="list">List - Compact View</option>
                                <option value="timeline">Timeline - Event Flow</option>
                                <option value="grid">Grid - 2 Column Layout</option>
                                <option value="modern">Modern - Icon Banner</option>
                                <option value="elegant">Elegant - Centered Display</option>
                                <option value="minimal">Minimal - Clean Lines</option>
                                <option value="bold">Bold - Large Icons</option>
                                <option value="ticket">Ticket - Event Pass Style</option>
                                <option value="calendar">Calendar - Date Block</option>
                                <option value="infographic">Infographic - Visual Stats</option>
                                <option value="postcard">Postcard - Invitation Card</option>
                                <option value="metro">Metro - Transit Style</option>
                                <option value="newspaper">Newspaper - Classified Ad</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#faf5ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                            <input type="color" value="#8b5cf6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentColor" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Card Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="cardStyle" onchange="updatePreview()">
                                <option value="elevated">Elevated - Shadow</option>
                                <option value="bordered">Bordered - Clean Lines</option>
                                <option value="filled">Filled - Solid Background</option>
                                <option value="gradient">Gradient - Color Blend</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Icon Size</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="iconSize" onchange="updatePreview()">
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
                    const layout = style.layout || 'cards';
                    const bg = style.bg || '#faf5ff';
                    const accentColor = style.accentColor || '#8b5cf6';
                    const cardStyle = style.cardStyle || 'elevated';
                    const iconSize = style.iconSize || 'md';
                    const borderRadius = style.borderRadius || 'md';
                    const textSize = style.textSize || 'normal';

                    const iconSizeClass = iconSize === 'sm' ? 'text-xl' :
                                         iconSize === 'lg' ? 'text-4xl' :
                                         iconSize === 'xl' ? 'text-5xl' : 'text-2xl';

                    const roundedClass = borderRadius === 'sm' ? 'rounded-lg' :
                                        borderRadius === 'lg' ? 'rounded-2xl' :
                                        borderRadius === 'xl' ? 'rounded-3xl' : 'rounded-xl';

                    const textSizeClass = textSize === 'small' ? 'text-sm' : textSize === 'large' ? 'text-lg' : 'text-base';

                    const getCardClasses = () => {
                        if (cardStyle === 'elevated') return `bg-white ${roundedClass} shadow-md`;
                        if (cardStyle === 'bordered') return `bg-white ${roundedClass} border-2`;
                        if (cardStyle === 'gradient') return `${roundedClass}`;
                        return roundedClass;
                    };

                    const getCardBg = () => {
                        if (cardStyle === 'gradient') return `background: linear-gradient(135deg, ${accentColor}15, ${accentColor}05);`;
                        if (cardStyle === 'filled') return `background: ${accentColor}15;`;
                        return '';
                    };

                    // Cards Layout - Individual Boxes
                    if (layout === 'cards') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <h2 class="text-2xl font-bold text-center mb-8">Party Details</h2>
                                <div class="max-w-md mx-auto space-y-4">
                                    ${data.date ? `
                                        <div class="flex items-start gap-4 p-5 ${getCardClasses()}" style="${cardStyle === 'filled' ? `background: ${accentColor}15` : ''}">
                                            <div class="${iconSizeClass}">📅</div>
                                            <div class="flex-1">
                                                <div class="text-xs uppercase tracking-wide mb-1" style="color: ${accentColor}">Date</div>
                                                <div class="font-semibold text-lg">${new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                                            </div>
                                        </div>
                                    ` : ''}
                                    ${data.time ? `
                                        <div class="flex items-start gap-4 p-5 ${getCardClasses()}" style="${cardStyle === 'filled' ? `background: ${accentColor}15` : ''}">
                                            <div class="${iconSizeClass}">🕐</div>
                                            <div class="flex-1">
                                                <div class="text-xs uppercase tracking-wide mb-1" style="color: ${accentColor}">Time</div>
                                                <div class="font-semibold text-lg">${data.time}</div>
                                            </div>
                                        </div>
                                    ` : ''}
                                    ${data.venue ? `
                                        <div class="flex items-start gap-4 p-5 ${getCardClasses()}" style="${cardStyle === 'filled' ? `background: ${accentColor}15` : ''}">
                                            <div class="${iconSizeClass}">🏛️</div>
                                            <div class="flex-1">
                                                <div class="text-xs uppercase tracking-wide mb-1" style="color: ${accentColor}">Venue</div>
                                                <div class="font-semibold text-lg">${data.venue}</div>
                                            </div>
                                        </div>
                                    ` : ''}
                                    ${data.address ? `
                                        <div class="flex items-start gap-4 p-5 ${getCardClasses()}" style="${cardStyle === 'filled' ? `background: ${accentColor}15` : ''}">
                                            <div class="${iconSizeClass}">📍</div>
                                            <div class="flex-1">
                                                <div class="text-xs uppercase tracking-wide mb-1" style="color: ${accentColor}">Address</div>
                                                <div class="text-sm">${data.address}</div>
                                            </div>
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                        `;
                    }

                    // List Layout - Compact View
                    if (layout === 'list') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <h2 class="text-2xl font-bold text-center mb-8">Party Details</h2>
                                <div class="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-6">
                                    <div class="space-y-4 divide-y">
                                        ${data.date ? `
                                            <div class="flex items-center gap-4 pt-4 first:pt-0">
                                                <div class="${iconSizeClass} w-12 text-center">📅</div>
                                                <div class="flex-1">
                                                    <div class="text-xs opacity-60">Date</div>
                                                    <div class="font-semibold">${new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                                                </div>
                                            </div>
                                        ` : ''}
                                        ${data.time ? `
                                            <div class="flex items-center gap-4 pt-4">
                                                <div class="${iconSizeClass} w-12 text-center">🕐</div>
                                                <div class="flex-1">
                                                    <div class="text-xs opacity-60">Time</div>
                                                    <div class="font-semibold">${data.time}</div>
                                                </div>
                                            </div>
                                        ` : ''}
                                        ${data.venue ? `
                                            <div class="flex items-center gap-4 pt-4">
                                                <div class="${iconSizeClass} w-12 text-center">🏛️</div>
                                                <div class="flex-1">
                                                    <div class="text-xs opacity-60">Venue</div>
                                                    <div class="font-semibold">${data.venue}</div>
                                                </div>
                                            </div>
                                        ` : ''}
                                        ${data.address ? `
                                            <div class="flex items-center gap-4 pt-4">
                                                <div class="${iconSizeClass} w-12 text-center">📍</div>
                                                <div class="flex-1">
                                                    <div class="text-xs opacity-60">Address</div>
                                                    <div class="text-sm">${data.address}</div>
                                                </div>
                                            </div>
                                        ` : ''}
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Timeline Layout - Event Flow
                    if (layout === 'timeline') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <h2 class="text-2xl font-bold text-center mb-8">Party Details</h2>
                                <div class="max-w-md mx-auto relative">
                                    <div class="absolute left-6 top-0 bottom-0 w-1" style="background: ${accentColor}30"></div>
                                    <div class="space-y-6 relative">
                                        ${data.date ? `
                                            <div class="flex gap-4">
                                                <div class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${iconSizeClass} bg-white shadow-lg z-10" style="border: 3px solid ${accentColor}">📅</div>
                                                <div class="flex-1 bg-white rounded-xl p-4 shadow-md">
                                                    <div class="text-xs font-semibold mb-1" style="color: ${accentColor}">DATE</div>
                                                    <div class="font-bold">${new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                                                </div>
                                            </div>
                                        ` : ''}
                                        ${data.time ? `
                                            <div class="flex gap-4">
                                                <div class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${iconSizeClass} bg-white shadow-lg z-10" style="border: 3px solid ${accentColor}">🕐</div>
                                                <div class="flex-1 bg-white rounded-xl p-4 shadow-md">
                                                    <div class="text-xs font-semibold mb-1" style="color: ${accentColor}">TIME</div>
                                                    <div class="font-bold">${data.time}</div>
                                                </div>
                                            </div>
                                        ` : ''}
                                        ${data.venue ? `
                                            <div class="flex gap-4">
                                                <div class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${iconSizeClass} bg-white shadow-lg z-10" style="border: 3px solid ${accentColor}">🏛️</div>
                                                <div class="flex-1 bg-white rounded-xl p-4 shadow-md">
                                                    <div class="text-xs font-semibold mb-1" style="color: ${accentColor}">VENUE</div>
                                                    <div class="font-bold">${data.venue}</div>
                                                </div>
                                            </div>
                                        ` : ''}
                                        ${data.address ? `
                                            <div class="flex gap-4">
                                                <div class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${iconSizeClass} bg-white shadow-lg z-10" style="border: 3px solid ${accentColor}">📍</div>
                                                <div class="flex-1 bg-white rounded-xl p-4 shadow-md">
                                                    <div class="text-xs font-semibold mb-1" style="color: ${accentColor}">ADDRESS</div>
                                                    <div class="text-sm">${data.address}</div>
                                                </div>
                                            </div>
                                        ` : ''}
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Grid Layout - 2 Column
                    if (layout === 'grid') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <h2 class="text-2xl font-bold text-center mb-8">Party Details</h2>
                                <div class="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                                    ${data.date ? `
                                        <div class="p-6 ${getCardClasses()} text-center" style="${cardStyle === 'filled' ? `background: ${accentColor}15` : ''}">
                                            <div class="${iconSizeClass} mb-3">📅</div>
                                            <div class="text-xs uppercase tracking-wide mb-2" style="color: ${accentColor}">Date</div>
                                            <div class="font-bold">${new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                                        </div>
                                    ` : ''}
                                    ${data.time ? `
                                        <div class="p-6 ${getCardClasses()} text-center" style="${cardStyle === 'filled' ? `background: ${accentColor}15` : ''}">
                                            <div class="${iconSizeClass} mb-3">🕐</div>
                                            <div class="text-xs uppercase tracking-wide mb-2" style="color: ${accentColor}">Time</div>
                                            <div class="font-bold">${data.time}</div>
                                        </div>
                                    ` : ''}
                                    ${data.venue ? `
                                        <div class="p-6 ${getCardClasses()} text-center" style="${cardStyle === 'filled' ? `background: ${accentColor}15` : ''}">
                                            <div class="${iconSizeClass} mb-3">🏛️</div>
                                            <div class="text-xs uppercase tracking-wide mb-2" style="color: ${accentColor}">Venue</div>
                                            <div class="font-bold">${data.venue}</div>
                                        </div>
                                    ` : ''}
                                    ${data.address ? `
                                        <div class="p-6 ${getCardClasses()} text-center" style="${cardStyle === 'filled' ? `background: ${accentColor}15` : ''}">
                                            <div class="${iconSizeClass} mb-3">📍</div>
                                            <div class="text-xs uppercase tracking-wide mb-2" style="color: ${accentColor}">Address</div>
                                            <div class="text-sm">${data.address}</div>
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                        `;
                    }

                    // Modern Layout - Icon Banner
                    if (layout === 'modern') {
                        return `
                            <div class="py-12 px-6" style="background: linear-gradient(135deg, ${bg}, ${accentColor}15)">
                                <h2 class="text-3xl font-bold text-center mb-10">Party Details</h2>
                                <div class="max-w-3xl mx-auto">
                                    <div class="bg-white rounded-3xl shadow-2xl overflow-hidden">
                                        <div class="p-2" style="background: linear-gradient(90deg, ${accentColor}, ${accentColor}90)">
                                            <div class="flex justify-around text-white ${iconSizeClass}">
                                                ${data.date ? '<div>📅</div>' : ''}
                                                ${data.time ? '<div>🕐</div>' : ''}
                                                ${data.venue ? '<div>🏛️</div>' : ''}
                                                ${data.address ? '<div>📍</div>' : ''}
                                            </div>
                                        </div>
                                        <div class="p-6 space-y-4">
                                            ${data.date ? `
                                                <div class="border-l-4 pl-4" style="border-color: ${accentColor}">
                                                    <div class="text-xs uppercase tracking-wide opacity-60 mb-1">Date</div>
                                                    <div class="font-bold text-xl">${new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                                                </div>
                                            ` : ''}
                                            ${data.time ? `
                                                <div class="border-l-4 pl-4" style="border-color: ${accentColor}">
                                                    <div class="text-xs uppercase tracking-wide opacity-60 mb-1">Time</div>
                                                    <div class="font-bold text-xl">${data.time}</div>
                                                </div>
                                            ` : ''}
                                            ${data.venue ? `
                                                <div class="border-l-4 pl-4" style="border-color: ${accentColor}">
                                                    <div class="text-xs uppercase tracking-wide opacity-60 mb-1">Venue</div>
                                                    <div class="font-bold text-xl">${data.venue}</div>
                                                </div>
                                            ` : ''}
                                            ${data.address ? `
                                                <div class="border-l-4 pl-4" style="border-color: ${accentColor}">
                                                    <div class="text-xs uppercase tracking-wide opacity-60 mb-1">Address</div>
                                                    <div class="text-sm">${data.address}</div>
                                                </div>
                                            ` : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Elegant Layout - Centered Display
                    if (layout === 'elegant') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-lg mx-auto text-center">
                                    <h2 class="text-3xl font-bold mb-8">Party Details</h2>
                                    <div class="inline-block w-full bg-white ${roundedClass} shadow-2xl p-8" style="border-top: 6px solid ${accentColor}">
                                        ${data.date ? `
                                            <div class="mb-6 pb-6 border-b" style="border-color: ${accentColor}20">
                                                <div class="${iconSizeClass} mb-2">📅</div>
                                                <div class="text-xs uppercase tracking-widest mb-1 ${textSizeClass}" style="color: ${accentColor}">Date</div>
                                                <div class="font-bold text-2xl">${new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                                            </div>
                                        ` : ''}
                                        ${data.time ? `
                                            <div class="mb-6 pb-6 border-b" style="border-color: ${accentColor}20">
                                                <div class="${iconSizeClass} mb-2">🕐</div>
                                                <div class="text-xs uppercase tracking-widest mb-1 ${textSizeClass}" style="color: ${accentColor}">Time</div>
                                                <div class="font-bold text-2xl">${data.time}</div>
                                            </div>
                                        ` : ''}
                                        ${data.venue ? `
                                            <div class="mb-6 pb-6 border-b" style="border-color: ${accentColor}20">
                                                <div class="${iconSizeClass} mb-2">🏛️</div>
                                                <div class="text-xs uppercase tracking-widest mb-1 ${textSizeClass}" style="color: ${accentColor}">Venue</div>
                                                <div class="font-bold text-xl">${data.venue}</div>
                                            </div>
                                        ` : ''}
                                        ${data.address ? `
                                            <div>
                                                <div class="${iconSizeClass} mb-2">📍</div>
                                                <div class="text-xs uppercase tracking-widest mb-1 ${textSizeClass}" style="color: ${accentColor}">Address</div>
                                                <div class="text-sm ${textSizeClass}">${data.address}</div>
                                            </div>
                                        ` : ''}
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Minimal Layout - Clean Lines
                    if (layout === 'minimal') {
                        return `
                            <div class="py-10 px-6" style="background: ${bg}">
                                <h2 class="text-2xl font-bold text-center mb-8">Party Details</h2>
                                <div class="max-w-xl mx-auto space-y-3">
                                    ${data.date ? `
                                        <div class="flex items-center gap-4 py-4 px-6 bg-white ${roundedClass} ${textSizeClass}">
                                            <div class="${iconSizeClass}" style="color: ${accentColor}">📅</div>
                                            <div class="flex-1">
                                                <div class="font-semibold">${new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                                                <div class="text-xs opacity-60">Date</div>
                                            </div>
                                        </div>
                                    ` : ''}
                                    ${data.time ? `
                                        <div class="flex items-center gap-4 py-4 px-6 bg-white ${roundedClass} ${textSizeClass}">
                                            <div class="${iconSizeClass}" style="color: ${accentColor}">🕐</div>
                                            <div class="flex-1">
                                                <div class="font-semibold">${data.time}</div>
                                                <div class="text-xs opacity-60">Time</div>
                                            </div>
                                        </div>
                                    ` : ''}
                                    ${data.venue ? `
                                        <div class="flex items-center gap-4 py-4 px-6 bg-white ${roundedClass} ${textSizeClass}">
                                            <div class="${iconSizeClass}" style="color: ${accentColor}">🏛️</div>
                                            <div class="flex-1">
                                                <div class="font-semibold">${data.venue}</div>
                                                <div class="text-xs opacity-60">Venue</div>
                                            </div>
                                        </div>
                                    ` : ''}
                                    ${data.address ? `
                                        <div class="flex items-center gap-4 py-4 px-6 bg-white ${roundedClass} ${textSizeClass}">
                                            <div class="${iconSizeClass}" style="color: ${accentColor}">📍</div>
                                            <div class="flex-1">
                                                <div class="text-sm">${data.address}</div>
                                                <div class="text-xs opacity-60">Address</div>
                                            </div>
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                        `;
                    }

                    // Bold Layout - Large Icons
                    if (layout === 'bold') {
                        return `
                            <div class="py-14 px-6" style="background: linear-gradient(135deg, ${bg}, white)">
                                <div class="max-w-2xl mx-auto">
                                    <h2 class="text-4xl font-black text-center mb-12" style="color: ${accentColor}">PARTY DETAILS</h2>
                                    <div class="grid grid-cols-1 gap-6">
                                        ${data.date ? `
                                            <div class="flex items-start gap-6 p-6 bg-white ${roundedClass} shadow-lg border-l-8" style="border-color: ${accentColor}; ${getCardBg()}">
                                                <div class="text-6xl flex-shrink-0">📅</div>
                                                <div class="flex-1">
                                                    <div class="text-xs font-bold uppercase tracking-wider mb-2" style="color: ${accentColor}">Date of Party</div>
                                                    <div class="font-black text-2xl mb-1">${new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                                                </div>
                                            </div>
                                        ` : ''}
                                        ${data.time ? `
                                            <div class="flex items-start gap-6 p-6 bg-white ${roundedClass} shadow-lg border-l-8" style="border-color: ${accentColor}; ${getCardBg()}">
                                                <div class="text-6xl flex-shrink-0">🕐</div>
                                                <div class="flex-1">
                                                    <div class="text-xs font-bold uppercase tracking-wider mb-2" style="color: ${accentColor}">Time</div>
                                                    <div class="font-black text-2xl mb-1">${data.time}</div>
                                                </div>
                                            </div>
                                        ` : ''}
                                        ${data.venue ? `
                                            <div class="flex items-start gap-6 p-6 bg-white ${roundedClass} shadow-lg border-l-8" style="border-color: ${accentColor}; ${getCardBg()}">
                                                <div class="text-6xl flex-shrink-0">🏛️</div>
                                                <div class="flex-1">
                                                    <div class="text-xs font-bold uppercase tracking-wider mb-2" style="color: ${accentColor}">Venue</div>
                                                    <div class="font-black text-2xl mb-1">${data.venue}</div>
                                                </div>
                                            </div>
                                        ` : ''}
                                        ${data.address ? `
                                            <div class="flex items-start gap-6 p-6 bg-white ${roundedClass} shadow-lg border-l-8" style="border-color: ${accentColor}; ${getCardBg()}">
                                                <div class="text-6xl flex-shrink-0">📍</div>
                                                <div class="flex-1">
                                                    <div class="text-xs font-bold uppercase tracking-wider mb-2" style="color: ${accentColor}">Location</div>
                                                    <div class="font-semibold text-lg ${textSizeClass}">${data.address}</div>
                                                </div>
                                            </div>
                                        ` : ''}
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Ticket Layout - Event Pass Style
                    if (layout === 'ticket') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-2xl mx-auto">
                                    <div class="bg-white ${roundedClass} shadow-2xl overflow-hidden" style="border: 2px dashed ${accentColor}">
                                        <div class="p-2" style="background: linear-gradient(90deg, ${accentColor}, ${accentColor}90);"></div>
                                        <div class="p-8">
                                            <div class="text-center mb-8">
                                                <div class="text-xs font-bold tracking-widest mb-2" style="color: ${accentColor}">ADMIT ONE</div>
                                                <h2 class="text-3xl font-black uppercase" style="color: ${accentColor}">Farewell Party</h2>
                                            </div>
                                            <div class="grid grid-cols-2 gap-6">
                                                ${data.date ? `
                                                    <div class="text-center p-4 ${roundedClass}" style="background: ${accentColor}10">
                                                        <div class="text-3xl mb-2">📅</div>
                                                        <div class="text-xs uppercase tracking-wide mb-1 opacity-60">Date</div>
                                                        <div class="font-bold">${new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                                                    </div>
                                                ` : ''}
                                                ${data.time ? `
                                                    <div class="text-center p-4 ${roundedClass}" style="background: ${accentColor}10">
                                                        <div class="text-3xl mb-2">🕐</div>
                                                        <div class="text-xs uppercase tracking-wide mb-1 opacity-60">Time</div>
                                                        <div class="font-bold">${data.time}</div>
                                                    </div>
                                                ` : ''}
                                            </div>
                                            ${data.venue ? `
                                                <div class="mt-6 p-4 border-t-2 border-dashed" style="border-color: ${accentColor}30">
                                                    <div class="text-center">
                                                        <div class="text-xs uppercase tracking-wide mb-1 opacity-60">Venue</div>
                                                        <div class="font-bold text-lg">${data.venue}</div>
                                                        ${data.address ? `<div class="text-sm mt-2 opacity-70">${data.address}</div>` : ''}
                                                    </div>
                                                </div>
                                            ` : ''}
                                        </div>
                                        <div class="h-12 relative overflow-hidden" style="background: ${accentColor}">
                                            <div class="absolute inset-0 flex items-center justify-center">
                                                <div class="text-xs font-bold tracking-widest text-white opacity-75">EVENT PASS • NON-TRANSFERABLE</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Calendar Layout - Date Block
                    if (layout === 'calendar') {
                        const dateObj = data.date ? new Date(data.date) : new Date();
                        const month = dateObj.toLocaleDateString('en-US', {month: 'short'}).toUpperCase();
                        const day = dateObj.getDate();
                        const year = dateObj.getFullYear();

                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-md mx-auto">
                                    <div class="bg-white ${roundedClass} shadow-2xl overflow-hidden">
                                        <div class="text-center p-4" style="background: ${accentColor}">
                                            <div class="text-xs font-bold tracking-wider text-white opacity-90">${month}</div>
                                        </div>
                                        <div class="text-center p-8" style="background: white; border-left: 4px solid ${accentColor}; border-right: 4px solid ${accentColor}">
                                            <div class="text-7xl font-black mb-2" style="color: ${accentColor}">${day}</div>
                                            <div class="text-2xl font-bold mb-6">${year}</div>
                                            ${data.time ? `
                                                <div class="flex items-center justify-center gap-2 mb-4">
                                                    <div class="text-2xl">🕐</div>
                                                    <div class="font-bold text-xl">${data.time}</div>
                                                </div>
                                            ` : ''}
                                        </div>
                                        ${data.venue || data.address ? `
                                            <div class="p-6 border-t-2" style="border-color: ${accentColor}20">
                                                ${data.venue ? `
                                                    <div class="flex items-center gap-3 mb-2">
                                                        <div class="text-xl">🏛️</div>
                                                        <div class="font-bold">${data.venue}</div>
                                                    </div>
                                                ` : ''}
                                                ${data.address ? `
                                                    <div class="flex items-start gap-3">
                                                        <div class="text-xl">📍</div>
                                                        <div class="text-sm opacity-70">${data.address}</div>
                                                    </div>
                                                ` : ''}
                                            </div>
                                        ` : ''}
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Infographic Layout - Visual Stats
                    if (layout === 'infographic') {
                        return `
                            <div class="py-12 px-6" style="background: linear-gradient(135deg, ${bg}, ${accentColor}05)">
                                <div class="max-w-3xl mx-auto">
                                    <h2 class="text-3xl font-black text-center mb-12 uppercase tracking-wide" style="color: ${accentColor}">Event Information</h2>
                                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        ${data.date ? `
                                            <div class="relative">
                                                <div class="absolute inset-0 ${roundedClass}" style="background: ${accentColor}; opacity: 0.1;"></div>
                                                <div class="relative p-6 text-center">
                                                    <div class="w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center text-2xl" style="background: ${accentColor}; color: white;">📅</div>
                                                    <div class="text-xs uppercase tracking-wide mb-2 opacity-60">Date</div>
                                                    <div class="font-bold text-sm leading-tight">${new Date(data.date).toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'})}</div>
                                                </div>
                                            </div>
                                        ` : ''}
                                        ${data.time ? `
                                            <div class="relative">
                                                <div class="absolute inset-0 ${roundedClass}" style="background: ${accentColor}; opacity: 0.1;"></div>
                                                <div class="relative p-6 text-center">
                                                    <div class="w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center text-2xl" style="background: ${accentColor}; color: white;">🕐</div>
                                                    <div class="text-xs uppercase tracking-wide mb-2 opacity-60">Time</div>
                                                    <div class="font-bold text-sm">${data.time}</div>
                                                </div>
                                            </div>
                                        ` : ''}
                                        ${data.venue ? `
                                            <div class="relative">
                                                <div class="absolute inset-0 ${roundedClass}" style="background: ${accentColor}; opacity: 0.1;"></div>
                                                <div class="relative p-6 text-center">
                                                    <div class="w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center text-2xl" style="background: ${accentColor}; color: white;">🏛️</div>
                                                    <div class="text-xs uppercase tracking-wide mb-2 opacity-60">Venue</div>
                                                    <div class="font-bold text-sm leading-tight">${data.venue}</div>
                                                </div>
                                            </div>
                                        ` : ''}
                                        ${data.address ? `
                                            <div class="relative">
                                                <div class="absolute inset-0 ${roundedClass}" style="background: ${accentColor}; opacity: 0.1;"></div>
                                                <div class="relative p-6 text-center">
                                                    <div class="w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center text-2xl" style="background: ${accentColor}; color: white;">📍</div>
                                                    <div class="text-xs uppercase tracking-wide mb-2 opacity-60">Location</div>
                                                    <div class="font-bold text-xs leading-tight">${data.address}</div>
                                                </div>
                                            </div>
                                        ` : ''}
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Postcard Layout - Invitation Card
                    if (layout === 'postcard') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-lg mx-auto">
                                    <div class="bg-white ${roundedClass} shadow-2xl overflow-hidden transform rotate-1 hover:rotate-0 transition-transform">
                                        <div class="h-4" style="background: repeating-linear-gradient(90deg, ${accentColor} 0px, ${accentColor} 10px, white 10px, white 20px);"></div>
                                        <div class="p-8">
                                            <div class="text-center mb-6">
                                                <div class="text-5xl mb-3">🎉</div>
                                                <div class="text-xs uppercase tracking-widest mb-2" style="color: ${accentColor}">You're Invited To</div>
                                                <h2 class="text-2xl font-bold">A Farewell Celebration</h2>
                                            </div>
                                            <div class="space-y-4">
                                                ${data.date ? `
                                                    <div class="flex items-center gap-3 pb-3 border-b" style="border-color: ${accentColor}20">
                                                        <div class="text-2xl">📅</div>
                                                        <div>
                                                            <div class="text-xs opacity-60">When</div>
                                                            <div class="font-semibold">${new Date(data.date).toLocaleDateString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}</div>
                                                        </div>
                                                    </div>
                                                ` : ''}
                                                ${data.time ? `
                                                    <div class="flex items-center gap-3 pb-3 border-b" style="border-color: ${accentColor}20">
                                                        <div class="text-2xl">🕐</div>
                                                        <div>
                                                            <div class="text-xs opacity-60">Time</div>
                                                            <div class="font-semibold">${data.time}</div>
                                                        </div>
                                                    </div>
                                                ` : ''}
                                                ${data.venue ? `
                                                    <div class="flex items-center gap-3 pb-3 border-b" style="border-color: ${accentColor}20">
                                                        <div class="text-2xl">🏛️</div>
                                                        <div>
                                                            <div class="text-xs opacity-60">Where</div>
                                                            <div class="font-semibold">${data.venue}</div>
                                                            ${data.address ? `<div class="text-xs mt-1 opacity-70">${data.address}</div>` : ''}
                                                        </div>
                                                    </div>
                                                ` : ''}
                                            </div>
                                        </div>
                                        <div class="p-4 text-center text-xs" style="background: ${accentColor}10">
                                            <div class="font-semibold" style="color: ${accentColor}">We hope to see you there!</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Metro Layout - Transit Style
                    if (layout === 'metro') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-lg mx-auto">
                                    <div class="bg-white ${roundedClass} shadow-xl p-6" style="border: 3px solid ${accentColor}">
                                        <div class="flex items-center gap-3 mb-6">
                                            <div class="w-12 h-12 rounded-full flex items-center justify-center font-black text-xl text-white" style="background: ${accentColor}">🎉</div>
                                            <div>
                                                <div class="text-xs uppercase tracking-wider opacity-60">Destination</div>
                                                <div class="font-black text-lg uppercase">Farewell Party</div>
                                            </div>
                                        </div>
                                        <div class="relative">
                                            <div class="absolute left-6 top-0 bottom-0 w-1" style="background: ${accentColor}30"></div>
                                            <div class="space-y-6 relative">
                                                ${data.date ? `
                                                    <div class="flex items-start gap-4">
                                                        <div class="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white z-10" style="background: ${accentColor}">1</div>
                                                        <div class="flex-1 pt-2">
                                                            <div class="text-xs uppercase tracking-wide mb-1 opacity-60">Date</div>
                                                            <div class="font-bold">${new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                                                        </div>
                                                    </div>
                                                ` : ''}
                                                ${data.time ? `
                                                    <div class="flex items-start gap-4">
                                                        <div class="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white z-10" style="background: ${accentColor}">2</div>
                                                        <div class="flex-1 pt-2">
                                                            <div class="text-xs uppercase tracking-wide mb-1 opacity-60">Time</div>
                                                            <div class="font-bold">${data.time}</div>
                                                        </div>
                                                    </div>
                                                ` : ''}
                                                ${data.venue ? `
                                                    <div class="flex items-start gap-4">
                                                        <div class="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white z-10" style="background: ${accentColor}">3</div>
                                                        <div class="flex-1 pt-2">
                                                            <div class="text-xs uppercase tracking-wide mb-1 opacity-60">Station</div>
                                                            <div class="font-bold">${data.venue}</div>
                                                            ${data.address ? `<div class="text-xs mt-1 opacity-60">${data.address}</div>` : ''}
                                                        </div>
                                                    </div>
                                                ` : ''}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Newspaper Layout - Classified Ad
                    if (layout === 'newspaper') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}; font-family: 'Georgia', serif;">
                                <div class="max-w-md mx-auto">
                                    <div class="bg-white p-6 ${roundedClass} shadow-lg" style="border: 4px double ${accentColor}">
                                        <div class="text-center border-b-2 pb-4 mb-4" style="border-color: ${accentColor}">
                                            <div class="text-xs uppercase tracking-widest mb-2 opacity-60">Public Notice</div>
                                            <h2 class="text-2xl font-black uppercase" style="letter-spacing: 0.1em; color: ${accentColor}">Farewell Event</h2>
                                        </div>
                                        <div class="space-y-3 text-sm">
                                            ${data.date ? `
                                                <div>
                                                    <span class="font-bold">DATE:</span> ${new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}
                                                </div>
                                            ` : ''}
                                            ${data.time ? `
                                                <div>
                                                    <span class="font-bold">TIME:</span> ${data.time}
                                                </div>
                                            ` : ''}
                                            ${data.venue ? `
                                                <div>
                                                    <span class="font-bold">LOCATION:</span> ${data.venue}
                                                </div>
                                            ` : ''}
                                            ${data.address ? `
                                                <div>
                                                    <span class="font-bold">ADDRESS:</span> ${data.address}
                                                </div>
                                            ` : ''}
                                        </div>
                                        <div class="mt-4 pt-4 border-t" style="border-color: ${accentColor}">
                                            <div class="text-center text-xs italic">All are cordially invited to attend</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    return '';
                }

            };
