// Hero Banner Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.hero = {
                name: '💼 Hero Banner',
                allowMultiple: false,  // Only one hero section allowed
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
                            <input type="text" placeholder="Your Business Name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent section-data" data-field="name" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Tagline</label>
                            <input type="text" placeholder="Your business tagline" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent section-data" data-field="tagline" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Hero Image</label>
                            <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 cursor-pointer" onclick="this.querySelector('input').click()">
                                <div class="text-3xl mb-2">📸</div>
                                <div class="text-sm text-gray-600">Click to upload</div>
                                <input type="file" class="hidden section-data" data-field="image" accept="image/*" onchange="handleImageUpload(this)">
                            </div>
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#2563eb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                            <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                render: (data, style) => `
                    <div class="text-center py-16 px-6" style="background: ${style.bg || '#2563eb'}; color: ${style.text || '#ffffff'}">
                        ${data.image ? `<img src="${data.image}" class="w-24 h-24 rounded-lg mx-auto mb-6 object-cover border-4 border-white">` : '<div class="text-6xl mb-6">💼</div>'}
                        <h1 class="text-3xl font-bold mb-2">${data.name || 'Business Name'}</h1>
                        <p class="text-lg opacity-90">${data.tagline || 'Your professional tagline'}</p>
                    </div>
                `
            };
