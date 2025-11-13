// Well Wishes Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.wellwishes = {
                name: '💌 Well Wishes',
                allowMultiple: false,
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                            <input type="text" placeholder="Messages & Well Wishes" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="title" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                            <textarea placeholder="Share your favorite memories and wishes for the future..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                render: (data, style) => `
                    <div class="py-12 px-6" style="background: ${style.bg || '#ffffff'}">
                        <div class="max-w-md mx-auto text-center">
                            <div class="text-5xl mb-4">💌</div>
                            <h2 class="text-2xl font-bold mb-4">${data.title || 'Well Wishes'}</h2>
                            <p class="text-gray-600 mb-6">${data.description || 'Share your messages and well wishes'}</p>
                            <div class="grid grid-cols-2 gap-3">
                                <div class="p-4 bg-violet-50 rounded-lg text-left">
                                    <p class="text-sm text-gray-600 italic">"Will miss our coffee chats!"</p>
                                    <p class="text-xs text-gray-500 mt-2">- Team Member</p>
                                </div>
                                <div class="p-4 bg-violet-50 rounded-lg text-left">
                                    <p class="text-sm text-gray-600 italic">"Good luck in your next adventure!"</p>
                                    <p class="text-xs text-gray-500 mt-2">- Colleague</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            };
