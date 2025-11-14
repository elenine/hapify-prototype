// Together Forever Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents['together-forever'] = {
    name: '♾️ Together Forever',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Together Forever" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" value="Together Forever" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Main Message</label>
                <textarea placeholder="No matter what tomorrow brings, I want to face it with you by my side. You are my forever..." rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Future Dreams (one per line)</label>
                <textarea placeholder="Build a home filled with love and laughter
Travel the world hand in hand
Grow old together watching sunsets
Create beautiful memories every day
Support each other through everything" rows="8" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="dreams" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Closing Words</label>
                <input type="text" placeholder="Forever and always..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="closing" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Gradient Start</label>
                <input type="color" value="#fce7f3" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bgStart" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Gradient End</label>
                <input type="color" value="#ddd6fe" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bgEnd" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="layoutStyle" onchange="updatePreview()">
                    <option value="elegant" selected>Elegant</option>
                    <option value="minimal">Minimal</option>
                    <option value="dreamy">Dreamy</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const dreams = (data.dreams || '').split('\n').filter(d => d.trim());
        const layoutStyle = style.layoutStyle || 'elegant';
        const bgStart = style.bgStart || '#fce7f3';
        const bgEnd = style.bgEnd || '#ddd6fe';

        let dreamsHTML = dreams.map(dream => `
            <div class="flex items-start gap-3 mb-3">
                <span class="text-rose-500 text-xl mt-1">✨</span>
                <p class="text-gray-700 flex-1">${dream.trim()}</p>
            </div>
        `).join('');

        if (layoutStyle === 'dreamy') {
            dreamsHTML = `
                <div class="grid md:grid-cols-2 gap-4 mt-8">
                    ${dreams.map(dream => `
                        <div class="bg-white/60 backdrop-blur-sm rounded-xl p-5 shadow-md">
                            <div class="flex items-start gap-3">
                                <span class="text-2xl">✨</span>
                                <p class="text-gray-700 flex-1">${dream.trim()}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        } else if (layoutStyle === 'minimal') {
            dreamsHTML = `
                <div class="space-y-4 mt-8">
                    ${dreams.map((dream, i) => `
                        <div class="border-l-4 border-rose-500 pl-4">
                            <p class="text-gray-700 text-lg">${dream.trim()}</p>
                        </div>
                    `).join('')}
                </div>
            `;
        } else {
            dreamsHTML = `<div class="mt-8 bg-white/50 backdrop-blur-sm rounded-xl p-6">${dreamsHTML}</div>`;
        }

        return `
            <div class="py-16 px-6" style="background: linear-gradient(135deg, ${bgStart}, ${bgEnd})">
                <div class="max-w-3xl mx-auto text-center">
                    <div class="text-6xl mb-6">♾️</div>
                    <h2 class="text-4xl font-bold text-gray-900 mb-6">${data.title || 'Together Forever'}</h2>

                    ${data.message ? `
                        <div class="bg-white/70 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-lg">
                            <p class="text-xl text-gray-700 leading-relaxed whitespace-pre-wrap">${data.message}</p>
                        </div>
                    ` : ''}

                    ${dreams.length > 0 ? `
                        <div class="text-left">
                            <h3 class="text-2xl font-bold text-gray-900 mb-4 text-center">Our Dreams Together</h3>
                            ${dreamsHTML}
                        </div>
                    ` : ''}

                    ${data.closing ? `
                        <div class="mt-10">
                            <p class="text-2xl font-serif italic text-gray-800">${data.closing}</p>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }
};
