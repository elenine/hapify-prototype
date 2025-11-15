// Years of Service Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.yearsofservice = {
    name: '📊 Years of Service',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Years of Service</label>
                <input type="number" placeholder="30" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="years" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="startdate" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Retirement Date</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="retiredate" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Company/Organization</label>
                <input type="text" placeholder="ABC Corporation" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="company" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Display Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="card">Card Style</option>
                    <option value="badge">Badge Display</option>
                    <option value="timeline">Timeline View</option>
                    <option value="circular">Circular Progress</option>
                    <option value="minimal">Minimal Elegant</option>
                    <option value="certificate">Certificate Style</option>
                    <option value="counter">Digital Counter</option>
                    <option value="ribbon">Ribbon Award</option>
                    <option value="milestone">Milestone Marker</option>
                    <option value="modern">Modern Minimalist</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ecfeff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#06b6d4" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'card';
        const bgColor = style.bg || '#ecfeff';
        const accentColor = style.accent || '#06b6d4';
        const startFormatted = data.startdate ? new Date(data.startdate).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'}) : '';
        const retireFormatted = data.retiredate ? new Date(data.retiredate).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'}) : '';

        switch(layout) {
            case 'card':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor};">
                        <div class="max-w-md mx-auto text-center">
                            <h2 class="text-2xl font-bold mb-6">Years of Service</h2>
                            <div class="p-8 bg-white rounded-lg shadow-lg">
                                <div class="text-6xl font-bold mb-2" style="color: ${accentColor};">${data.years || '0'}</div>
                                <div class="text-xl font-semibold mb-4">Years of Dedication</div>
                                ${data.company ? `<div class="text-lg text-gray-700 mb-4">${data.company}</div>` : ''}
                                ${startFormatted ? `<div class="text-sm text-gray-600">Started: ${startFormatted}</div>` : ''}
                                ${retireFormatted ? `<div class="text-sm text-gray-600">Retiring: ${retireFormatted}</div>` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'badge':
                return `
                    <div class="py-16 px-6 text-center" style="background: linear-gradient(135deg, ${bgColor} 0%, ${accentColor}20 100%);">
                        <div class="max-w-md mx-auto">
                            <div class="inline-block p-8 rounded-full mb-6" style="background: ${accentColor};">
                                <div class="text-white">
                                    <div class="text-5xl font-black mb-1">${data.years || '0'}</div>
                                    <div class="text-sm uppercase tracking-wider">Years</div>
                                </div>
                            </div>
                            <h2 class="text-2xl font-bold mb-4">Years of Service</h2>
                            ${data.company ? `<p class="text-xl mb-4" style="color: ${accentColor};">${data.company}</p>` : ''}
                            <div class="space-y-2 text-sm">
                                ${startFormatted ? `<p>Started: ${startFormatted}</p>` : ''}
                                ${retireFormatted ? `<p>Retiring: ${retireFormatted}</p>` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'timeline':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor};">
                        <div class="max-w-md mx-auto">
                            <h2 class="text-2xl font-bold text-center mb-8">Years of Service</h2>
                            <div class="relative">
                                <div class="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1" style="background: ${accentColor};"></div>
                                ${startFormatted ? `
                                <div class="relative mb-12">
                                    <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white" style="background: ${accentColor};"></div>
                                    <div class="text-center pt-10">
                                        <div class="text-sm font-semibold mb-1" style="color: ${accentColor};">Start Date</div>
                                        <div class="text-gray-700">${startFormatted}</div>
                                        ${data.company ? `<div class="text-sm text-gray-600 mt-1">${data.company}</div>` : ''}
                                    </div>
                                </div>` : ''}
                                <div class="relative mb-12">
                                    <div class="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full border-4 border-white flex items-center justify-center text-white font-bold text-2xl" style="background: ${accentColor};">
                                        ${data.years || '0'}
                                    </div>
                                    <div class="text-center pt-20">
                                        <div class="text-lg font-semibold">Years of Dedication</div>
                                    </div>
                                </div>
                                ${retireFormatted ? `
                                <div class="relative">
                                    <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white" style="background: ${accentColor};"></div>
                                    <div class="text-center pt-10">
                                        <div class="text-sm font-semibold mb-1" style="color: ${accentColor};">Retirement Date</div>
                                        <div class="text-gray-700">${retireFormatted}</div>
                                    </div>
                                </div>` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'circular':
                return `
                    <div class="py-16 px-6 text-center" style="background: ${bgColor};">
                        <div class="max-w-md mx-auto">
                            <h2 class="text-2xl font-bold mb-8">Years of Service</h2>
                            <div class="relative inline-block">
                                <svg class="transform -rotate-90" width="200" height="200">
                                    <circle cx="100" cy="100" r="80" fill="none" stroke="#e5e7eb" stroke-width="20"/>
                                    <circle cx="100" cy="100" r="80" fill="none" stroke="${accentColor}" stroke-width="20" stroke-dasharray="502" stroke-dashoffset="${502 - (502 * Math.min(data.years || 0, 40) / 40)}" stroke-linecap="round"/>
                                </svg>
                                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <div class="text-5xl font-bold" style="color: ${accentColor};">${data.years || '0'}</div>
                                    <div class="text-sm font-medium">YEARS</div>
                                </div>
                            </div>
                            ${data.company ? `<p class="text-xl font-semibold mt-8 mb-4">${data.company}</p>` : ''}
                            <div class="space-y-1 text-sm text-gray-600">
                                ${startFormatted ? `<p>${startFormatted} - ${retireFormatted || 'Present'}</p>` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'minimal':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor};">
                        <div class="max-w-md mx-auto text-center">
                            <div class="mb-6">
                                <div class="text-7xl font-light mb-2" style="color: ${accentColor};">${data.years || '0'}</div>
                                <div class="w-24 h-0.5 mx-auto mb-3" style="background: ${accentColor};"></div>
                                <p class="text-lg font-medium">Years of Service</p>
                            </div>
                            ${data.company ? `<p class="text-xl font-serif mb-6" style="color: ${accentColor};">${data.company}</p>` : ''}
                            <div class="flex justify-center gap-8 text-sm">
                                ${startFormatted ? `<div><p class="font-semibold mb-1">Started</p><p class="text-gray-600">${startFormatted}</p></div>` : ''}
                                ${retireFormatted ? `<div><p class="font-semibold mb-1">Retiring</p><p class="text-gray-600">${retireFormatted}</p></div>` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'certificate':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor};">
                        <div class="max-w-md mx-auto">
                            <div class="border-8 p-8 bg-white shadow-2xl" style="border-color: ${accentColor};">
                                <div class="border-2 border-dashed p-6" style="border-color: ${accentColor};">
                                    <div class="text-center">
                                        <div class="text-xs uppercase tracking-widest mb-3" style="color: ${accentColor};">Certificate of Appreciation</div>
                                        <div class="text-6xl font-bold mb-4" style="color: ${accentColor};">${data.years || '0'}</div>
                                        <div class="text-2xl font-serif mb-4">Years of Dedication</div>
                                        ${data.company ? `<div class="text-lg mb-4">${data.company}</div>` : ''}
                                        <div class="flex justify-center gap-1 mb-4">
                                            <div class="w-3 h-3 rounded-full" style="background: ${accentColor};"></div>
                                            <div class="w-3 h-3 rounded-full" style="background: ${accentColor};"></div>
                                            <div class="w-3 h-3 rounded-full" style="background: ${accentColor};"></div>
                                        </div>
                                        ${startFormatted && retireFormatted ? `<div class="text-sm text-gray-600">${startFormatted} - ${retireFormatted}</div>` : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'counter':
                return `
                    <div class="py-16 px-6" style="background: linear-gradient(135deg, ${bgColor} 0%, ${accentColor}20 100%);">
                        <div class="max-w-md mx-auto text-center">
                            <h2 class="text-2xl font-bold mb-8">Years of Service</h2>
                            <div class="bg-gray-900 rounded-2xl p-8 shadow-2xl">
                                <div class="font-mono text-7xl font-bold mb-4" style="color: ${accentColor}; text-shadow: 0 0 20px ${accentColor}50;">
                                    ${String(data.years || '0').padStart(2, '0')}
                                </div>
                                <div class="text-white text-sm uppercase tracking-widest">YEARS</div>
                            </div>
                            ${data.company ? `<p class="text-xl font-semibold mt-6" style="color: ${accentColor};">${data.company}</p>` : ''}
                            <div class="flex justify-center gap-6 mt-6 text-sm">
                                ${startFormatted ? `<div class="text-gray-600"><span class="font-semibold">From:</span> ${startFormatted}</div>` : ''}
                                ${retireFormatted ? `<div class="text-gray-600"><span class="font-semibold">To:</span> ${retireFormatted}</div>` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'ribbon':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor};">
                        <div class="max-w-md mx-auto text-center">
                            <div class="relative inline-block mb-8">
                                <div class="relative w-40 h-40 rounded-full flex items-center justify-center text-white shadow-2xl" style="background: ${accentColor};">
                                    <div>
                                        <div class="text-5xl font-bold">${data.years || '0'}</div>
                                        <div class="text-xs uppercase tracking-wider">YEARS</div>
                                    </div>
                                </div>
                                <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-20" style="clip-path: polygon(50% 0%, 0% 100%, 100% 100%); background: ${accentColor}; opacity: 0.8;"></div>
                            </div>
                            <h2 class="text-2xl font-bold mb-4 mt-8">Outstanding Service</h2>
                            ${data.company ? `<p class="text-xl mb-4" style="color: ${accentColor};">${data.company}</p>` : ''}
                            ${startFormatted && retireFormatted ? `<p class="text-sm text-gray-600">${startFormatted} - ${retireFormatted}</p>` : ''}
                        </div>
                    </div>
                `;

            case 'milestone':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor};">
                        <div class="max-w-md mx-auto">
                            <div class="text-center mb-8">
                                <div class="inline-block p-6 rounded-2xl shadow-xl" style="background: ${accentColor};">
                                    <div class="text-white">
                                        <div class="text-xs uppercase tracking-widest mb-2">Milestone</div>
                                        <div class="text-6xl font-bold mb-2">${data.years || '0'}</div>
                                        <div class="text-sm uppercase tracking-wide">Years</div>
                                    </div>
                                </div>
                            </div>
                            ${data.company ? `<h3 class="text-2xl font-bold text-center mb-6">${data.company}</h3>` : ''}
                            <div class="bg-white rounded-xl shadow-md p-6">
                                <div class="flex items-center justify-between">
                                    ${startFormatted ? `
                                    <div class="text-center">
                                        <div class="text-xs font-bold mb-1" style="color: ${accentColor};">START</div>
                                        <div class="text-sm">${startFormatted}</div>
                                    </div>` : ''}
                                    <div class="flex-1 mx-4 h-2 rounded-full" style="background: linear-gradient(to right, ${accentColor} 0%, ${accentColor}40 100%);"></div>
                                    ${retireFormatted ? `
                                    <div class="text-center">
                                        <div class="text-xs font-bold mb-1" style="color: ${accentColor};">RETIRE</div>
                                        <div class="text-sm">${retireFormatted}</div>
                                    </div>` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'modern':
                return `
                    <div class="py-16 px-6" style="background: ${bgColor};">
                        <div class="max-w-md mx-auto">
                            <div class="flex items-center gap-6">
                                <div class="flex-shrink-0 w-24 h-24 rounded-2xl flex items-center justify-center shadow-lg" style="background: ${accentColor};">
                                    <div class="text-white text-4xl font-black">${data.years || '0'}</div>
                                </div>
                                <div class="flex-1">
                                    <div class="text-xs uppercase tracking-widest mb-1" style="color: ${accentColor};">Years of Service</div>
                                    <h3 class="text-2xl font-bold mb-2">${data.company || 'Dedicated Service'}</h3>
                                    ${startFormatted && retireFormatted ? `<p class="text-sm text-gray-600">${startFormatted.split(',')[0]} → ${retireFormatted.split(',')[0]}</p>` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            default:
                return `
                    <div class="py-12 px-6" style="background: ${bgColor};">
                        <div class="max-w-md mx-auto text-center">
                            <h2 class="text-2xl font-bold mb-6">Years of Service</h2>
                            <div class="p-8 bg-white rounded-lg shadow-sm">
                                <div class="text-6xl font-bold mb-2" style="color: ${accentColor};">${data.years || '0'}</div>
                                <div class="text-xl font-semibold mb-4">Years of Dedication</div>
                                ${data.company ? `<div class="text-lg text-gray-700 mb-4">${data.company}</div>` : ''}
                                ${startFormatted ? `<div class="text-sm text-gray-600">Started: ${startFormatted}</div>` : ''}
                                ${retireFormatted ? `<div class="text-sm text-gray-600">Retiring: ${retireFormatted}</div>` : ''}
                            </div>
                        </div>
                    </div>
                `;
        }
    }
};
