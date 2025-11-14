// Baby Details Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.babydetails = {
    name: '👶 Baby Details',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Expected Date</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="duedate" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Baby Gender</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="gender" oninput="updatePreview()">
                    <option value="">Select...</option>
                    <option value="boy">Boy</option>
                    <option value="girl">Girl</option>
                    <option value="surprise">Surprise</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Baby Name (if known)</label>
                <input type="text" placeholder="Optional" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="babyname" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-style" data-style="layout" oninput="updatePreview()">
                    <option value="card">Card - Centered Box</option>
                    <option value="timeline">Timeline - Vertical Flow</option>
                    <option value="badges">Badges - Icon Based</option>
                    <option value="split">Split - Two Column</option>
                    <option value="modern">Modern - Gradient Card</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Color</label>
                <input type="color" value="#fffbeb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#fbbf24" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="textColor" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'card';
        const bg = style.bg || '#ffffff';
        const cardBg = style.cardBg || '#fffbeb';
        const accent = style.accent || '#fbbf24';
        const textColor = style.textColor || '#1f2937';

        const genderIcon = data.gender === 'boy' ? '💙' : data.gender === 'girl' ? '💗' : '💛';
        const genderText = data.gender === 'boy' ? 'Baby Boy' : data.gender === 'girl' ? 'Baby Girl' : "It's a Surprise!";
        const formattedDate = data.duedate ? new Date(data.duedate).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'}) : '';

        switch(layout) {
            case 'timeline':
                return `
                    <div class="py-12 px-6" style="background: ${bg}; color: ${textColor};">
                        <div class="max-w-md mx-auto">
                            <h2 class="text-2xl font-bold mb-8 text-center">About Baby</h2>
                            <div class="space-y-4">
                                ${data.babyname ? `
                                <div class="flex items-center gap-4">
                                    <div class="w-12 h-12 rounded-full flex items-center justify-center text-2xl" style="background: ${accent};">👶</div>
                                    <div>
                                        <div class="text-xs opacity-60">Baby's Name</div>
                                        <div class="font-bold text-lg">${data.babyname}</div>
                                    </div>
                                </div>` : ''}
                                ${data.gender ? `
                                <div class="flex items-center gap-4">
                                    <div class="w-12 h-12 rounded-full flex items-center justify-center text-2xl" style="background: ${cardBg};">${genderIcon}</div>
                                    <div>
                                        <div class="text-xs opacity-60">Gender</div>
                                        <div class="font-bold">${genderText}</div>
                                    </div>
                                </div>` : ''}
                                ${data.duedate ? `
                                <div class="flex items-center gap-4">
                                    <div class="w-12 h-12 rounded-full flex items-center justify-center text-2xl" style="background: ${cardBg};">📅</div>
                                    <div>
                                        <div class="text-xs opacity-60">Expected Date</div>
                                        <div class="font-bold">${formattedDate}</div>
                                    </div>
                                </div>` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'badges':
                return `
                    <div class="py-12 px-6" style="background: ${bg}; color: ${textColor};">
                        <div class="max-w-2xl mx-auto">
                            <h2 class="text-2xl font-bold mb-8 text-center">About Baby</h2>
                            <div class="flex flex-wrap justify-center gap-4">
                                ${data.babyname ? `
                                <div class="px-6 py-4 rounded-full text-center" style="background: ${accent}; color: white;">
                                    <div class="text-2xl mb-1">👶</div>
                                    <div class="font-bold">${data.babyname}</div>
                                </div>` : ''}
                                ${data.gender ? `
                                <div class="px-6 py-4 rounded-full text-center" style="background: ${cardBg};">
                                    <div class="text-2xl mb-1">${genderIcon}</div>
                                    <div class="font-semibold">${genderText}</div>
                                </div>` : ''}
                                ${data.duedate ? `
                                <div class="px-6 py-4 rounded-full text-center" style="background: ${cardBg};">
                                    <div class="text-2xl mb-1">📅</div>
                                    <div class="font-semibold text-sm">${formattedDate}</div>
                                </div>` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'split':
                return `
                    <div class="py-12 px-6" style="background: ${bg}; color: ${textColor};">
                        <div class="max-w-3xl mx-auto">
                            <h2 class="text-2xl font-bold mb-8 text-center">About Baby</h2>
                            <div class="grid md:grid-cols-2 gap-6">
                                <div class="p-8 rounded-2xl text-center" style="background: ${cardBg};">
                                    <div class="text-6xl mb-4">👶</div>
                                    <div class="text-xs opacity-60 mb-2">Baby's Name</div>
                                    <div class="font-bold text-xl">${data.babyname || 'To Be Announced'}</div>
                                </div>
                                <div class="space-y-4">
                                    ${data.gender ? `
                                    <div class="p-4 rounded-xl" style="background: ${cardBg};">
                                        <div class="flex items-center gap-3">
                                            <div class="text-3xl">${genderIcon}</div>
                                            <div>
                                                <div class="text-xs opacity-60">Gender</div>
                                                <div class="font-bold">${genderText}</div>
                                            </div>
                                        </div>
                                    </div>` : ''}
                                    ${data.duedate ? `
                                    <div class="p-4 rounded-xl" style="background: ${cardBg};">
                                        <div class="flex items-center gap-3">
                                            <div class="text-3xl">📅</div>
                                            <div>
                                                <div class="text-xs opacity-60">Expected</div>
                                                <div class="font-bold text-sm">${formattedDate}</div>
                                            </div>
                                        </div>
                                    </div>` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'modern':
                return `
                    <div class="py-12 px-6" style="background: ${bg};">
                        <div class="max-w-md mx-auto">
                            <h2 class="text-2xl font-bold mb-8 text-center" style="color: ${textColor};">About Baby</h2>
                            <div class="rounded-3xl p-8 shadow-xl" style="background: linear-gradient(135deg, ${accent} 0%, ${cardBg} 100%);">
                                <div class="text-center mb-6">
                                    <div class="text-6xl mb-4">👶</div>
                                    ${data.babyname ? `<div class="font-bold text-2xl mb-2" style="color: ${textColor};">${data.babyname}</div>` : ''}
                                </div>
                                <div class="space-y-3">
                                    ${data.gender ? `
                                    <div class="bg-white bg-opacity-50 backdrop-blur-sm rounded-xl p-4 text-center">
                                        <div class="text-2xl mb-1">${genderIcon}</div>
                                        <div class="font-semibold" style="color: ${textColor};">${genderText}</div>
                                    </div>` : ''}
                                    ${data.duedate ? `
                                    <div class="bg-white bg-opacity-50 backdrop-blur-sm rounded-xl p-4 text-center">
                                        <div class="text-xs opacity-70 mb-1">Expected Arrival</div>
                                        <div class="font-semibold" style="color: ${textColor};">${formattedDate}</div>
                                    </div>` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'card':
            default:
                return `
                    <div class="py-12 px-6" style="background: ${bg}; color: ${textColor};">
                        <div class="max-w-md mx-auto">
                            <h2 class="text-2xl font-bold mb-6 text-center">About Baby</h2>
                            <div class="p-6 rounded-lg text-center" style="background: ${cardBg};">
                                <div class="text-4xl mb-3">👶</div>
                                ${data.babyname ? `<div class="font-bold text-lg mb-2">${data.babyname}</div>` : ''}
                                ${data.gender ? `<div class="text-sm mb-2">${genderIcon} ${genderText}</div>` : ''}
                                ${data.duedate ? `<div class="text-sm opacity-75">Expected: ${formattedDate}</div>` : ''}
                            </div>
                        </div>
                    </div>
                `;
        }
    }
};
