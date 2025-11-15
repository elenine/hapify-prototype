// Our Favorite Things Component for Anniversary

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.favorites = {
    name: '❤️ Our Favorite Things',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Our Favorite Things" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="title" value="Our Favorite Things" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Introduction</label>
                <textarea placeholder="The little things we love to do together..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="intro" oninput="updatePreview()"></textarea>
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">🍽️ Favorite Restaurant</h4>
                <input type="text" placeholder="Name of restaurant" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data mb-2" data-field="restaurant" oninput="updatePreview()">
                <textarea placeholder="Why it's special..." rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="restaurantReason" oninput="updatePreview()"></textarea>
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">🌍 Favorite Place</h4>
                <input type="text" placeholder="Beach, mountains, city, etc." class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data mb-2" data-field="place" oninput="updatePreview()">
                <textarea placeholder="Why it's special..." rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="placeReason" oninput="updatePreview()"></textarea>
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">🎬 Favorite Movie/Show</h4>
                <input type="text" placeholder="Movie or TV show title" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data mb-2" data-field="movie" oninput="updatePreview()">
                <textarea placeholder="Why we love it..." rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="movieReason" oninput="updatePreview()"></textarea>
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">🎮 Favorite Activity</h4>
                <input type="text" placeholder="Hiking, cooking, gaming, etc." class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data mb-2" data-field="activity" oninput="updatePreview()">
                <textarea placeholder="Why we enjoy it..." rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="activityReason" oninput="updatePreview()"></textarea>
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">🎉 Favorite Tradition</h4>
                <input type="text" placeholder="Annual trip, weekly ritual, etc." class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data mb-2" data-field="tradition" oninput="updatePreview()">
                <textarea placeholder="Why it matters to us..." rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="traditionReason" oninput="updatePreview()"></textarea>
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">💭 Favorite Memory</h4>
                <textarea placeholder="Our favorite shared memory..." rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="memory" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef2f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const bgColor = style.bg || '#fef2f2';

        const favorites = [
            { icon: '🍽️', title: 'Favorite Restaurant', value: data.restaurant, reason: data.restaurantReason },
            { icon: '🌍', title: 'Favorite Place', value: data.place, reason: data.placeReason },
            { icon: '🎬', title: 'Favorite Movie/Show', value: data.movie, reason: data.movieReason },
            { icon: '🎮', title: 'Favorite Activity', value: data.activity, reason: data.activityReason },
            { icon: '🎉', title: 'Favorite Tradition', value: data.tradition, reason: data.traditionReason }
        ].filter(item => item.value);

        return `
            <div class="py-12 px-6" style="background: ${bgColor};">
                <div class="max-w-3xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="text-6xl mb-3">❤️</div>
                        <h2 class="text-2xl font-bold mb-2">${data.title || 'Our Favorite Things'}</h2>
                        ${data.intro ? `<p class="text-gray-600">${data.intro}</p>` : ''}
                    </div>

                    <div class="space-y-4">
                        ${favorites.map(item => `
                            <div class="bg-white rounded-xl p-6 shadow-md">
                                <div class="flex items-start gap-4">
                                    <div class="text-3xl flex-shrink-0">${item.icon}</div>
                                    <div class="flex-1">
                                        <h3 class="font-semibold text-gray-900 mb-1">${item.title}</h3>
                                        <p class="text-red-700 font-medium mb-2">${item.value}</p>
                                        ${item.reason ? `<p class="text-gray-600 text-sm">${item.reason}</p>` : ''}
                                    </div>
                                </div>
                            </div>
                        `).join('')}

                        ${data.memory ? `
                            <div class="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 shadow-md border-2 border-red-200">
                                <div class="flex items-start gap-4">
                                    <div class="text-3xl flex-shrink-0">💭</div>
                                    <div class="flex-1">
                                        <h3 class="font-bold text-lg text-red-700 mb-2">Favorite Memory</h3>
                                        <p class="text-gray-700 leading-relaxed">${data.memory}</p>
                                    </div>
                                </div>
                            </div>
                        ` : ''}
                    </div>

                    ${favorites.length === 0 && !data.memory ? `
                        <p class="text-center text-gray-500 py-8">Add your favorite things to display here</p>
                    ` : ''}
                </div>
            </div>
        `;
    }
};
