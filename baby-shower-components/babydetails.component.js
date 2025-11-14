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
                    <option value="grid">Grid - Icon Boxes</option>
                    <option value="circles">Circles - Round Cards</option>
                    <option value="ribbon">Ribbon - Banner Style</option>
                    <option value="sticker">Sticker - Playful Cards</option>
                    <option value="wave">Wave - Flowing Design</option>
                    <option value="minimal">Minimal - Clean Layout</option>
                    <option value="boxes">Boxes - 3D Effect</option>
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
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Icon Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-style" data-style="iconSize" oninput="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium" selected>Medium</option>
                    <option value="large">Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Shadow</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-style" data-style="shadow" oninput="updatePreview()">
                    <option value="none">None</option>
                    <option value="small">Small</option>
                    <option value="medium" selected>Medium</option>
                    <option value="large">Large</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'card';
        const bg = style.bg || '#ffffff';
        const cardBg = style.cardBg || '#fffbeb';
        const accent = style.accent || '#fbbf24';
        const textColor = style.textColor || '#1f2937';
        const iconSize = style.iconSize || 'medium';
        const shadow = style.shadow || 'medium';

        const iconSizes = {
            small: 'text-xl sm:text-2xl',
            medium: 'text-2xl sm:text-3xl',
            large: 'text-3xl sm:text-4xl'
        };

        const shadowClasses = {
            none: '',
            small: 'shadow-sm',
            medium: 'shadow-lg',
            large: 'shadow-2xl'
        };

        const genderIcon = data.gender === 'boy' ? '💙' : data.gender === 'girl' ? '💗' : '💛';
        const genderText = data.gender === 'boy' ? 'Baby Boy' : data.gender === 'girl' ? 'Baby Girl' : "It's a Surprise!";
        const formattedDate = data.duedate ? new Date(data.duedate).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'}) : '';

        switch(layout) {
            case 'timeline':
                return `
                    <div class="py-10 sm:py-12 px-4 sm:px-6" style="background: ${bg}; color: ${textColor};">
                        <div class="max-w-md mx-auto">
                            <h2 class="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">About Baby</h2>
                            <div class="space-y-3 sm:space-y-4">
                                ${data.babyname ? `
                                <div class="flex items-center gap-3 sm:gap-4">
                                    <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 ${iconSizes[iconSize]}" style="background: ${accent};">👶</div>
                                    <div class="flex-1 min-w-0">
                                        <div class="text-xs opacity-60">Baby's Name</div>
                                        <div class="font-bold text-base sm:text-lg truncate">${data.babyname}</div>
                                    </div>
                                </div>` : ''}
                                ${data.gender ? `
                                <div class="flex items-center gap-3 sm:gap-4">
                                    <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 ${iconSizes[iconSize]}" style="background: ${cardBg};">${genderIcon}</div>
                                    <div class="flex-1 min-w-0">
                                        <div class="text-xs opacity-60">Gender</div>
                                        <div class="font-bold text-sm sm:text-base">${genderText}</div>
                                    </div>
                                </div>` : ''}
                                ${data.duedate ? `
                                <div class="flex items-center gap-3 sm:gap-4">
                                    <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 ${iconSizes[iconSize]}" style="background: ${cardBg};">📅</div>
                                    <div class="flex-1 min-w-0">
                                        <div class="text-xs opacity-60">Expected Date</div>
                                        <div class="font-bold text-sm sm:text-base">${formattedDate}</div>
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

            case 'grid':
                return `
                    <div class="py-12 px-6" style="background: ${bg}; color: ${textColor};">
                        <div class="max-w-3xl mx-auto">
                            <h2 class="text-2xl font-bold mb-8 text-center">About Baby</h2>
                            <div class="grid grid-cols-${data.babyname && data.gender && data.duedate ? '3' : '2'} gap-4">
                                ${data.babyname ? `
                                <div class="p-6 rounded-xl text-center border-2 hover:shadow-lg transition" style="background: ${cardBg}; border-color: ${accent};">
                                    <div class="w-16 h-16 mx-auto mb-3 rounded-lg flex items-center justify-center text-3xl" style="background: ${accent}; color: white;">👶</div>
                                    <div class="text-xs opacity-60 mb-1">Name</div>
                                    <div class="font-bold text-lg">${data.babyname}</div>
                                </div>` : ''}
                                ${data.gender ? `
                                <div class="p-6 rounded-xl text-center border-2 hover:shadow-lg transition" style="background: ${cardBg}; border-color: ${accent};">
                                    <div class="w-16 h-16 mx-auto mb-3 rounded-lg flex items-center justify-center text-3xl" style="background: ${accent}; color: white;">${genderIcon}</div>
                                    <div class="text-xs opacity-60 mb-1">Gender</div>
                                    <div class="font-bold">${genderText}</div>
                                </div>` : ''}
                                ${data.duedate ? `
                                <div class="p-6 rounded-xl text-center border-2 hover:shadow-lg transition" style="background: ${cardBg}; border-color: ${accent};">
                                    <div class="w-16 h-16 mx-auto mb-3 rounded-lg flex items-center justify-center text-3xl" style="background: ${accent}; color: white;">📅</div>
                                    <div class="text-xs opacity-60 mb-1">Expected</div>
                                    <div class="font-bold text-sm">${formattedDate}</div>
                                </div>` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'circles':
                return `
                    <div class="py-12 px-6" style="background: ${bg}; color: ${textColor};">
                        <div class="max-w-4xl mx-auto">
                            <h2 class="text-2xl font-bold mb-8 text-center">About Baby</h2>
                            <div class="flex flex-wrap justify-center gap-6">
                                ${data.babyname ? `
                                <div class="text-center">
                                    <div class="w-40 h-40 rounded-full flex items-center justify-center shadow-xl mb-3" style="background: linear-gradient(135deg, ${accent}, ${cardBg});">
                                        <div>
                                            <div class="text-4xl mb-2">👶</div>
                                            <div class="font-bold text-sm">${data.babyname}</div>
                                        </div>
                                    </div>
                                    <div class="text-xs opacity-60">Baby's Name</div>
                                </div>` : ''}
                                ${data.gender ? `
                                <div class="text-center">
                                    <div class="w-40 h-40 rounded-full flex items-center justify-center shadow-xl mb-3" style="background: linear-gradient(135deg, ${accent}, ${cardBg});">
                                        <div>
                                            <div class="text-5xl mb-2">${genderIcon}</div>
                                            <div class="font-bold text-sm">${genderText}</div>
                                        </div>
                                    </div>
                                    <div class="text-xs opacity-60">Gender</div>
                                </div>` : ''}
                                ${data.duedate ? `
                                <div class="text-center">
                                    <div class="w-40 h-40 rounded-full flex items-center justify-center shadow-xl mb-3" style="background: linear-gradient(135deg, ${accent}, ${cardBg});">
                                        <div class="p-4">
                                            <div class="text-4xl mb-2">📅</div>
                                            <div class="font-bold text-xs leading-tight">${formattedDate}</div>
                                        </div>
                                    </div>
                                    <div class="text-xs opacity-60">Expected Date</div>
                                </div>` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'ribbon':
                return `
                    <div class="py-12 px-6" style="background: ${bg}; color: ${textColor};">
                        <div class="max-w-2xl mx-auto">
                            <h2 class="text-2xl font-bold mb-8 text-center">About Baby</h2>
                            <div class="space-y-4">
                                ${data.babyname ? `
                                <div class="relative">
                                    <div class="py-4 px-8 text-center font-bold text-xl shadow-lg" style="background: ${accent}; color: white; clip-path: polygon(0 0, 95% 0, 100% 50%, 95% 100%, 0 100%, 5% 50%);">
                                        <div class="flex items-center justify-center gap-3">
                                            <span class="text-2xl">👶</span>
                                            <span>${data.babyname}</span>
                                        </div>
                                    </div>
                                    <div class="absolute top-0 left-0 w-0 h-0 border-t-[48px] border-t-transparent border-l-[20px] border-b-[48px] border-b-transparent" style="border-left-color: ${accent};"></div>
                                </div>` : ''}
                                ${data.gender ? `
                                <div class="relative">
                                    <div class="py-4 px-8 text-center font-bold text-lg shadow-lg" style="background: ${cardBg}; border: 3px solid ${accent}; clip-path: polygon(5% 0, 100% 0, 95% 100%, 0 100%);">
                                        <div class="flex items-center justify-center gap-3">
                                            <span class="text-2xl">${genderIcon}</span>
                                            <span>${genderText}</span>
                                        </div>
                                    </div>
                                </div>` : ''}
                                ${data.duedate ? `
                                <div class="relative">
                                    <div class="py-4 px-8 text-center font-bold shadow-lg" style="background: ${accent}; color: white; clip-path: polygon(0 0, 95% 0, 100% 50%, 95% 100%, 0 100%, 5% 50%);">
                                        <div class="flex items-center justify-center gap-3">
                                            <span class="text-2xl">📅</span>
                                            <span class="text-sm">${formattedDate}</span>
                                        </div>
                                    </div>
                                </div>` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'sticker':
                return `
                    <div class="py-10 sm:py-12 px-4 sm:px-6" style="background: ${bg}; color: ${textColor};">
                        <div class="max-w-2xl mx-auto">
                            <h2 class="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">About Baby</h2>
                            <div class="flex flex-wrap justify-center gap-3 sm:gap-4">
                                ${data.babyname ? `
                                <div class="transform -rotate-2 hover:rotate-0 transition">
                                    <div class="px-4 sm:px-6 py-3 sm:py-4 rounded-2xl ${shadowClasses[shadow]}" style="background: ${accent}; color: white;">
                                        <div class="${iconSizes[iconSize]} mb-1">👶</div>
                                        <div class="font-bold text-sm sm:text-base">${data.babyname}</div>
                                    </div>
                                </div>` : ''}
                                ${data.gender ? `
                                <div class="transform rotate-2 hover:rotate-0 transition">
                                    <div class="px-4 sm:px-6 py-3 sm:py-4 rounded-2xl ${shadowClasses[shadow]}" style="background: ${cardBg}; border: 3px solid ${accent};">
                                        <div class="${iconSizes[iconSize]} mb-1">${genderIcon}</div>
                                        <div class="font-bold text-sm sm:text-base">${genderText}</div>
                                    </div>
                                </div>` : ''}
                                ${data.duedate ? `
                                <div class="transform -rotate-1 hover:rotate-0 transition">
                                    <div class="px-4 sm:px-6 py-3 sm:py-4 rounded-2xl ${shadowClasses[shadow]}" style="background: ${cardBg}; border: 3px solid ${accent};">
                                        <div class="${iconSizes[iconSize]} mb-1">📅</div>
                                        <div class="font-bold text-xs sm:text-sm">${formattedDate}</div>
                                    </div>
                                </div>` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'wave':
                return `
                    <div class="py-10 sm:py-12 px-4 sm:px-6 relative overflow-hidden" style="background: ${bg}; color: ${textColor};">
                        <svg class="absolute bottom-0 left-0 w-full opacity-20" viewBox="0 0 1440 120" fill="none">
                            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L0,120Z" fill="${accent}"/>
                        </svg>
                        <div class="max-w-2xl mx-auto relative z-10">
                            <h2 class="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">About Baby</h2>
                            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                                ${data.babyname ? `
                                <div class="text-center p-4 sm:p-6 rounded-2xl ${shadowClasses[shadow]}" style="background: ${cardBg};">
                                    <div class="${iconSizes[iconSize]} mb-2">👶</div>
                                    <div class="text-xs opacity-60 mb-1">Name</div>
                                    <div class="font-bold text-sm sm:text-base">${data.babyname}</div>
                                </div>` : ''}
                                ${data.gender ? `
                                <div class="text-center p-4 sm:p-6 rounded-2xl ${shadowClasses[shadow]}" style="background: ${cardBg};">
                                    <div class="${iconSizes[iconSize]} mb-2">${genderIcon}</div>
                                    <div class="text-xs opacity-60 mb-1">Gender</div>
                                    <div class="font-bold text-sm sm:text-base">${genderText}</div>
                                </div>` : ''}
                                ${data.duedate ? `
                                <div class="text-center p-4 sm:p-6 rounded-2xl ${shadowClasses[shadow]}" style="background: ${cardBg};">
                                    <div class="${iconSizes[iconSize]} mb-2">📅</div>
                                    <div class="text-xs opacity-60 mb-1">Expected</div>
                                    <div class="font-bold text-xs sm:text-sm">${formattedDate}</div>
                                </div>` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'minimal':
                return `
                    <div class="py-10 sm:py-12 px-4 sm:px-6" style="background: ${bg}; color: ${textColor};">
                        <div class="max-w-lg mx-auto text-center">
                            <h2 class="text-xl sm:text-2xl font-bold mb-8 sm:mb-10">About Baby</h2>
                            <div class="space-y-6">
                                ${data.babyname ? `
                                <div>
                                    <div class="text-xs uppercase tracking-wider opacity-50 mb-2">Name</div>
                                    <div class="font-bold text-2xl sm:text-3xl" style="color: ${accent};">${data.babyname}</div>
                                    <div class="h-1 w-12 mx-auto mt-2" style="background: ${accent};"></div>
                                </div>` : ''}
                                ${data.gender ? `
                                <div>
                                    <div class="text-xs uppercase tracking-wider opacity-50 mb-2">Gender</div>
                                    <div class="font-semibold text-lg sm:text-xl">${genderIcon} ${genderText}</div>
                                </div>` : ''}
                                ${data.duedate ? `
                                <div>
                                    <div class="text-xs uppercase tracking-wider opacity-50 mb-2">Expected Arrival</div>
                                    <div class="font-semibold text-base sm:text-lg">${formattedDate}</div>
                                </div>` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'boxes':
                return `
                    <div class="py-10 sm:py-12 px-4 sm:px-6" style="background: ${bg}; color: ${textColor};">
                        <div class="max-w-2xl mx-auto">
                            <h2 class="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">About Baby</h2>
                            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                                ${data.babyname ? `
                                <div class="relative group">
                                    <div class="absolute inset-0 rounded-xl opacity-50 transform translate-x-1 translate-y-1" style="background: ${accent};"></div>
                                    <div class="relative p-4 sm:p-6 rounded-xl text-center ${shadowClasses[shadow]} transform group-hover:-translate-y-1 transition" style="background: ${cardBg};">
                                        <div class="${iconSizes[iconSize]} mb-2">👶</div>
                                        <div class="text-xs opacity-60 mb-1">Name</div>
                                        <div class="font-bold text-sm sm:text-base">${data.babyname}</div>
                                    </div>
                                </div>` : ''}
                                ${data.gender ? `
                                <div class="relative group">
                                    <div class="absolute inset-0 rounded-xl opacity-50 transform translate-x-1 translate-y-1" style="background: ${accent};"></div>
                                    <div class="relative p-4 sm:p-6 rounded-xl text-center ${shadowClasses[shadow]} transform group-hover:-translate-y-1 transition" style="background: ${cardBg};">
                                        <div class="${iconSizes[iconSize]} mb-2">${genderIcon}</div>
                                        <div class="text-xs opacity-60 mb-1">Gender</div>
                                        <div class="font-bold text-sm sm:text-base">${genderText}</div>
                                    </div>
                                </div>` : ''}
                                ${data.duedate ? `
                                <div class="relative group">
                                    <div class="absolute inset-0 rounded-xl opacity-50 transform translate-x-1 translate-y-1" style="background: ${accent};"></div>
                                    <div class="relative p-4 sm:p-6 rounded-xl text-center ${shadowClasses[shadow]} transform group-hover:-translate-y-1 transition" style="background: ${cardBg};">
                                        <div class="${iconSizes[iconSize]} mb-2">📅</div>
                                        <div class="text-xs opacity-60 mb-1">Expected</div>
                                        <div class="font-bold text-xs sm:text-sm">${formattedDate}</div>
                                    </div>
                                </div>` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'card':
            default:
                return `
                    <div class="py-10 sm:py-12 px-4 sm:px-6" style="background: ${bg}; color: ${textColor};">
                        <div class="max-w-md mx-auto">
                            <h2 class="text-xl sm:text-2xl font-bold mb-5 sm:mb-6 text-center">About Baby</h2>
                            <div class="p-5 sm:p-6 rounded-xl text-center ${shadowClasses[shadow]}" style="background: ${cardBg};">
                                <div class="text-4xl sm:text-5xl mb-3">👶</div>
                                ${data.babyname ? `<div class="font-bold text-lg sm:text-xl mb-2">${data.babyname}</div>` : ''}
                                ${data.gender ? `<div class="text-sm sm:text-base mb-2">${genderIcon} ${genderText}</div>` : ''}
                                ${data.duedate ? `<div class="text-xs sm:text-sm opacity-75">Expected: ${formattedDate}</div>` : ''}
                            </div>
                        </div>
                    </div>
                `;
        }
    }
};
