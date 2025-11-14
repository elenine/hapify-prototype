// Love Promises Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents['love-promises'] = {
    name: '💍 Love Promises',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="My Promises to You" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" value="My Promises to You" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Opening Message</label>
                <textarea placeholder="I promise to love you unconditionally, today and always..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Your Promises (one per line)</label>
                <textarea placeholder="I promise to always support your dreams
I promise to be your best friend
I promise to make you laugh every day
I promise to love you more with each passing day
I promise to grow old with you" rows="8" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="promises" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Promise Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="promiseStyle" onchange="updatePreview()">
                    <option value="elegant">Elegant Cards</option>
                    <option value="vows">Vow Cards</option>
                    <option value="ribbon">Ribbon Style</option>
                    <option value="scroll">Scroll Parchment</option>
                    <option value="rings">Wedding Rings</option>
                    <option value="certificate">Certificate Style</option>
                    <option value="hearts">Heart Collection</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef3c7" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#f59e0b" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const promises = (data.promises || '').split('\n').filter(p => p.trim());
        const promiseStyle = style.promiseStyle || 'elegant';
        const bgColor = style.bg || '#fef3c7';
        const accentColor = style.accent || '#f59e0b';

        if (promises.length === 0) {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-3xl mx-auto text-center">
                        <div class="text-5xl mb-4">💍</div>
                        <h2 class="text-3xl font-bold text-gray-900 mb-4">${data.title || 'My Promises to You'}</h2>
                        <p class="text-gray-500">Add your heartfelt promises</p>
                    </div>
                </div>
            `;
        }

        let promisesHTML = '';

        if (promiseStyle === 'elegant') {
            promisesHTML = `
                <div class="grid gap-4">
                    ${promises.map(promise => `
                        <div class="bg-white rounded-lg p-5 shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
                            <div class="flex items-start gap-3">
                                <span class="text-2xl">💍</span>
                                <p class="text-gray-700 flex-1">${promise.trim()}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        } else if (promiseStyle === 'vows') {
            promisesHTML = `
                <div class="space-y-6">
                    ${promises.map((promise, i) => `
                        <div class="bg-white rounded-2xl p-8 shadow-lg border-t-4" style="border-color: ${accentColor}">
                            <div class="flex items-start gap-4">
                                <div class="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0" style="background: ${accentColor}">
                                    ${i + 1}
                                </div>
                                <div class="flex-1">
                                    <p class="text-lg text-gray-800 italic">"${promise.trim()}"</p>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        } else if (promiseStyle === 'ribbon') {
            promisesHTML = `
                <div class="space-y-6">
                    ${promises.map(promise => `
                        <div class="relative">
                            <div class="bg-white rounded-lg p-6 shadow-md" style="border-left: 6px solid ${accentColor}">
                                <div class="flex items-start gap-4">
                                    <span class="text-3xl">💍</span>
                                    <p class="text-gray-700 flex-1 pt-1">${promise.trim()}</p>
                                </div>
                            </div>
                            <!-- Ribbon end -->
                            <div class="absolute top-0 left-0 w-2 h-full" style="background: ${accentColor}; transform: translateX(-6px);"></div>
                        </div>
                    `).join('')}
                </div>
            `;
        } else if (promiseStyle === 'scroll') {
            promisesHTML = `
                <div class="space-y-8">
                    ${promises.map(promise => `
                        <div class="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg p-6 shadow-lg relative" style="border: 3px solid ${accentColor}40; font-family: Georgia, serif;">
                            <!-- Decorative corners -->
                            <div class="absolute top-2 left-2 w-6 h-6" style="border-top: 2px solid ${accentColor}; border-left: 2px solid ${accentColor};"></div>
                            <div class="absolute top-2 right-2 w-6 h-6" style="border-top: 2px solid ${accentColor}; border-right: 2px solid ${accentColor};"></div>
                            <div class="absolute bottom-2 left-2 w-6 h-6" style="border-bottom: 2px solid ${accentColor}; border-left: 2px solid ${accentColor};"></div>
                            <div class="absolute bottom-2 right-2 w-6 h-6" style="border-bottom: 2px solid ${accentColor}; border-right: 2px solid ${accentColor};"></div>

                            <div class="text-center">
                                <div class="text-3xl mb-3">💍</div>
                                <p class="text-lg italic text-gray-800">${promise.trim()}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        } else if (promiseStyle === 'rings') {
            promisesHTML = `
                <div class="grid md:grid-cols-2 gap-6">
                    ${promises.map(promise => `
                        <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
                            <div class="flex flex-col items-center text-center">
                                <div class="w-20 h-20 rounded-full mb-4 flex items-center justify-center text-4xl" style="background: linear-gradient(135deg, ${accentColor}20, ${accentColor}40); border: 3px solid ${accentColor}">
                                    💍
                                </div>
                                <p class="text-gray-700">${promise.trim()}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        } else if (promiseStyle === 'certificate') {
            promisesHTML = `
                <div class="bg-white rounded-lg p-10 shadow-2xl max-w-4xl mx-auto" style="border: 8px double ${accentColor}; font-family: Georgia, serif;">
                    <div class="text-center mb-8">
                        <div class="text-6xl mb-4">💍</div>
                        <div class="text-2xl font-bold mb-4" style="color: ${accentColor}">Certificate of Love Promises</div>
                        <div class="w-32 h-1 mx-auto" style="background: ${accentColor}"></div>
                    </div>
                    <div class="space-y-4">
                        ${promises.map((promise, i) => `
                            <div class="flex items-start gap-3 pl-4">
                                <span class="font-bold" style="color: ${accentColor}">${i + 1}.</span>
                                <p class="text-gray-800 flex-1">${promise.trim()}</p>
                            </div>
                        `).join('')}
                    </div>
                    <div class="text-center mt-8">
                        <div class="w-32 h-1 mx-auto mb-4" style="background: ${accentColor}"></div>
                        <p class="text-sm text-gray-600 italic">These promises are made with love and commitment</p>
                    </div>
                </div>
            `;
        } else if (promiseStyle === 'hearts') {
            promisesHTML = `
                <div class="grid md:grid-cols-2 gap-4">
                    ${promises.map(promise => `
                        <div class="flex items-start gap-4 bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition">
                            <div class="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white text-xl" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd)">
                                ❤️
                            </div>
                            <p class="text-gray-700 flex-1 pt-2">${promise.trim()}</p>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        return `
            <div class="py-12 px-6" style="background: ${bgColor}">
                <div class="max-w-4xl mx-auto">
                    <div class="text-center mb-10">
                        <div class="text-5xl mb-4">💍</div>
                        <h2 class="text-3xl font-bold text-gray-900 mb-4">${data.title || 'My Promises to You'}</h2>
                        ${data.message ? `<p class="text-lg text-gray-600 italic max-w-2xl mx-auto">${data.message}</p>` : ''}
                    </div>
                    ${promisesHTML}
                </div>
            </div>
        `;
    }
};
