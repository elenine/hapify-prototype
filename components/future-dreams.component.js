// Future Dreams Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents['future-dreams'] = {
    name: '🌟 Future Dreams',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Our Dreams Together" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Dream 1</label>
                <input type="text" placeholder="Travel the world" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="dream1" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Dream 2</label>
                <input type="text" placeholder="Build our dream home" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="dream2" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Dream 3</label>
                <input type="text" placeholder="Start a family" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="dream3" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Dream 4</label>
                <input type="text" placeholder="Grow old together" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="dream4" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Closing Message</label>
                <textarea placeholder="Here's to our future together..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="gradient">Gradient Cards</option>
                    <option value="starmap">Star Map</option>
                    <option value="pathway">Dream Pathway</option>
                    <option value="clouds">Cloud Dreams</option>
                    <option value="timeline">Future Timeline</option>
                    <option value="wishes">Wishing Stars</option>
                    <option value="goals">Goal Boxes</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Gradient Start</label>
                <input type="color" value="#f43f5e" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bgStart" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Gradient End</label>
                <input type="color" value="#ec4899" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bgEnd" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const dreams = [data.dream1, data.dream2, data.dream3, data.dream4].filter(d => d && d.trim());
        const layout = style.layout || 'gradient';
        const bgStart = style.bgStart || '#f43f5e';
        const bgEnd = style.bgEnd || '#ec4899';

        if (dreams.length === 0) {
            return `
                <div class="py-16 px-6 text-white" style="background: linear-gradient(135deg, ${bgStart}, ${bgEnd})">
                    <div class="max-w-4xl mx-auto text-center">
                        <h2 class="text-4xl font-bold mb-12">${data.title || 'Our Dreams Together'}</h2>
                        <p class="text-lg opacity-75">Add your dreams for the future together</p>
                    </div>
                </div>
            `;
        }

        let dreamsHTML = '';
        const message = data.message ? `
            <div class="text-2xl font-light italic mt-8 text-white">
                "${data.message}"
            </div>
        ` : '';

        if (layout === 'gradient') {
            dreamsHTML = `
                <div class="py-16 px-6 text-white" style="background: linear-gradient(135deg, ${bgStart}, ${bgEnd})">
                    <div class="max-w-4xl mx-auto text-center">
                        <h2 class="text-4xl font-bold mb-12">${data.title || 'Our Dreams Together'}</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                            ${dreams.map(dream => `
                                <div class="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-8 hover:bg-opacity-30 transition">
                                    <div class="text-5xl mb-4">🌟</div>
                                    <p class="text-xl font-semibold">${dream}</p>
                                </div>
                            `).join('')}
                        </div>
                        ${message}
                    </div>
                </div>
            `;
        } else if (layout === 'starmap') {
            dreamsHTML = `
                <div class="py-16 px-6 text-white relative overflow-hidden" style="background: linear-gradient(135deg, ${bgStart}, ${bgEnd})">
                    <!-- Background stars -->
                    <div class="absolute inset-0 opacity-20">
                        ${Array(20).fill(0).map((_, i) => `
                            <div class="absolute text-2xl" style="left: ${Math.random() * 100}%; top: ${Math.random() * 100}%;">⭐</div>
                        `).join('')}
                    </div>

                    <div class="max-w-5xl mx-auto text-center relative z-10">
                        <h2 class="text-4xl font-bold mb-16">${data.title || 'Our Dreams Together'}</h2>
                        <div class="relative">
                            ${dreams.map((dream, i) => {
                                const positions = [
                                    { left: '10%', top: '20%' },
                                    { left: '70%', top: '30%' },
                                    { left: '30%', top: '60%' },
                                    { left: '80%', top: '70%' }
                                ];
                                const pos = positions[i] || positions[0];
                                return `
                                    <div class="absolute transform -translate-x-1/2 -translate-y-1/2" style="left: ${pos.left}; top: ${pos.top};">
                                        <div class="bg-white bg-opacity-25 backdrop-blur-md rounded-full p-8 hover:bg-opacity-35 transition" style="width: 160px; height: 160px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                                            <div class="text-4xl mb-2">⭐</div>
                                            <p class="text-sm font-semibold text-center">${dream}</p>
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                            <div style="height: 400px;"></div>
                        </div>
                        ${message}
                    </div>
                </div>
            `;
        } else if (layout === 'pathway') {
            dreamsHTML = `
                <div class="py-16 px-6 text-white" style="background: linear-gradient(135deg, ${bgStart}, ${bgEnd})">
                    <div class="max-w-3xl mx-auto">
                        <h2 class="text-4xl font-bold text-center mb-16">${data.title || 'Our Dreams Together'}</h2>
                        <div class="relative">
                            <!-- Pathway line -->
                            <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white opacity-30"></div>

                            ${dreams.map((dream, i) => {
                                const isLeft = i % 2 === 0;
                                return `
                                    <div class="relative mb-16 flex items-center ${isLeft ? '' : 'flex-row-reverse'}">
                                        <div class="flex-1 ${isLeft ? 'pr-12 text-right' : 'pl-12 text-left'}">
                                            <div class="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 hover:bg-opacity-30 transition">
                                                <p class="text-lg font-semibold">${dream}</p>
                                            </div>
                                        </div>
                                        <div class="w-16 h-16 rounded-full bg-white bg-opacity-30 flex items-center justify-center text-3xl flex-shrink-0">
                                            🌟
                                        </div>
                                        <div class="flex-1"></div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                        <div class="text-center">${message}</div>
                    </div>
                </div>
            `;
        } else if (layout === 'clouds') {
            dreamsHTML = `
                <div class="py-16 px-6 text-white relative overflow-hidden" style="background: linear-gradient(135deg, ${bgStart}, ${bgEnd})">
                    <div class="max-w-5xl mx-auto text-center">
                        <h2 class="text-4xl font-bold mb-16">${data.title || 'Our Dreams Together'}</h2>
                        <div class="flex flex-wrap justify-center gap-8 mb-12">
                            ${dreams.map(dream => `
                                <div class="relative inline-block">
                                    <div class="bg-white bg-opacity-25 backdrop-blur-md rounded-full px-10 py-8 hover:bg-opacity-35 transition" style="border-radius: 50% 50% 50% 0;">
                                        <div class="text-4xl mb-3">☁️</div>
                                        <p class="text-lg font-semibold max-w-xs">${dream}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                        ${message}
                    </div>
                </div>
            `;
        } else if (layout === 'timeline') {
            dreamsHTML = `
                <div class="py-16 px-6 text-white" style="background: linear-gradient(135deg, ${bgStart}, ${bgEnd})">
                    <div class="max-w-4xl mx-auto">
                        <h2 class="text-4xl font-bold text-center mb-16">${data.title || 'Our Dreams Together'}</h2>
                        <div class="space-y-8">
                            ${dreams.map((dream, i) => `
                                <div class="flex items-start gap-6">
                                    <div class="flex-shrink-0 w-20 h-20 rounded-full bg-white bg-opacity-30 flex items-center justify-center text-3xl">
                                        ${i + 1}
                                    </div>
                                    <div class="flex-1 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 hover:bg-opacity-30 transition">
                                        <p class="text-xl font-semibold">${dream}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                        <div class="text-center mt-12">${message}</div>
                    </div>
                </div>
            `;
        } else if (layout === 'wishes') {
            dreamsHTML = `
                <div class="py-16 px-6 text-white relative overflow-hidden" style="background: linear-gradient(135deg, ${bgStart}, ${bgEnd})">
                    <div class="max-w-5xl mx-auto text-center">
                        <h2 class="text-4xl font-bold mb-16">${data.title || 'Our Dreams Together'}</h2>
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                            ${dreams.map(dream => `
                                <div class="flex flex-col items-center">
                                    <div class="relative mb-6">
                                        <div class="text-7xl animate-pulse">🌠</div>
                                    </div>
                                    <div class="bg-white bg-opacity-25 backdrop-blur-md rounded-xl p-4 hover:bg-opacity-35 transition">
                                        <p class="text-base font-semibold">${dream}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                        ${message}
                    </div>
                </div>
            `;
        } else if (layout === 'goals') {
            dreamsHTML = `
                <div class="py-16 px-6 text-white" style="background: linear-gradient(135deg, ${bgStart}, ${bgEnd})">
                    <div class="max-w-4xl mx-auto text-center">
                        <h2 class="text-4xl font-bold mb-16">${data.title || 'Our Dreams Together'}</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                            ${dreams.map((dream, i) => `
                                <div class="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-8 hover:bg-opacity-30 transition border-2 border-white border-opacity-30">
                                    <div class="flex items-start gap-4">
                                        <div class="w-12 h-12 rounded-lg bg-white bg-opacity-40 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                                            ${i + 1}
                                        </div>
                                        <div class="flex-1 text-left">
                                            <div class="text-3xl mb-3">🎯</div>
                                            <p class="text-lg font-semibold">${dream}</p>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                        ${message}
                    </div>
                </div>
            `;
        }

        return dreamsHTML;
    }
};
