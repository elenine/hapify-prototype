// Couple Bucket List Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents['couple-bucket-list'] = {
    name: '✅ Couple Bucket List',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Our Bucket List Together" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" value="Our Bucket List Together" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Introduction Message</label>
                <textarea placeholder="Adventures we dream of sharing, goals we'll achieve together..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="intro" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Bucket List Items (one per line, add ✓ at start if completed)</label>
                <textarea placeholder="✓ Watch the sunrise together
✓ Cook a meal from scratch together
Learn to dance together
Travel to Paris
Build our dream home
Grow old together watching sunsets
Renew our vows on our 25th anniversary
Write love letters to each other
Plant a tree together
Create a photo album of our adventures" rows="15" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="items" oninput="updatePreview()"></textarea>
                <p class="text-xs text-gray-500 mt-1">Start completed items with ✓ to mark them as done</p>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f0fdf4" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">List Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="listStyle" onchange="updatePreview()">
                    <option value="checkboxes" selected>Interactive Checkboxes</option>
                    <option value="cards">Card Grid</option>
                    <option value="simple">Simple List</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const items = (data.items || '').split('\n').filter(i => i.trim());
        const listStyle = style.listStyle || 'checkboxes';

        let itemsHTML = '';
        let completedCount = items.filter(item => item.trim().startsWith('✓')).length;

        if (listStyle === 'checkboxes') {
            itemsHTML = items.map((item, i) => {
                const isCompleted = item.trim().startsWith('✓');
                const text = item.replace(/^✓\s*/, '').trim();
                const checkIcon = isCompleted ? '✓' : '';
                const checkClass = isCompleted ? 'bg-green-500 text-white' : 'bg-white border-2 border-gray-300';
                const textClass = isCompleted ? 'line-through text-gray-500' : 'text-gray-900';

                return `
                    <div class="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition">
                        <div class="flex-shrink-0 w-8 h-8 ${checkClass} rounded-lg flex items-center justify-center font-bold text-lg">
                            ${checkIcon}
                        </div>
                        <p class="flex-1 text-lg ${textClass} pt-1">${text}</p>
                    </div>
                `;
            }).join('');

            const progress = items.length > 0 ? Math.round((completedCount / items.length) * 100) : 0;
            const progressBar = `
                <div class="mb-8 bg-white rounded-xl p-6 shadow-lg">
                    <div class="flex justify-between items-center mb-3">
                        <span class="text-sm font-medium text-gray-700">Progress</span>
                        <span class="text-sm font-bold text-green-600">${completedCount}/${items.length} Complete</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                        <div class="bg-gradient-to-r from-green-500 to-emerald-500 h-4 rounded-full transition-all duration-500" style="width: ${progress}%"></div>
                    </div>
                    <div class="text-center mt-2 text-2xl font-bold text-gray-900">${progress}%</div>
                </div>
            `;
            itemsHTML = progressBar + `<div class="space-y-3">${itemsHTML}</div>`;
        } else if (listStyle === 'cards') {
            itemsHTML = items.map((item, i) => {
                const isCompleted = item.trim().startsWith('✓');
                const text = item.replace(/^✓\s*/, '').trim();
                const cardClass = isCompleted ? 'bg-green-50 border-green-500' : 'bg-white border-gray-300';
                const badge = isCompleted ? '<span class="absolute top-3 right-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-bold">✓ Done</span>' : '';

                return `
                    <div class="relative p-6 ${cardClass} border-2 rounded-xl shadow-md hover:shadow-lg transition">
                        ${badge}
                        <div class="text-4xl mb-3">${isCompleted ? '✅' : '🎯'}</div>
                        <p class="text-gray-900 font-medium pr-20">${text}</p>
                    </div>
                `;
            }).join('');
            itemsHTML = `<div class="grid md:grid-cols-2 gap-4">${itemsHTML}</div>`;
        } else {
            itemsHTML = items.map((item, i) => {
                const isCompleted = item.trim().startsWith('✓');
                const text = item.replace(/^✓\s*/, '').trim();
                const bullet = isCompleted ? '✅' : '🔲';
                const textClass = isCompleted ? 'line-through text-gray-500' : 'text-gray-900';

                return `
                    <div class="flex items-start gap-3">
                        <span class="text-2xl mt-1">${bullet}</span>
                        <p class="flex-1 text-lg ${textClass}">${text}</p>
                    </div>
                `;
            }).join('');
            itemsHTML = `<div class="bg-white rounded-xl p-8 shadow-lg space-y-4">${itemsHTML}</div>`;
        }

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#f0fdf4'}">
                <div class="max-w-4xl mx-auto">
                    <div class="text-center mb-10">
                        <div class="text-5xl mb-4">✅</div>
                        <h2 class="text-3xl font-bold text-gray-900 mb-3">${data.title || 'Our Bucket List Together'}</h2>
                        ${data.intro ? `<p class="text-lg text-gray-600">${data.intro}</p>` : ''}
                    </div>
                    ${itemsHTML || '<p class="text-center text-gray-400">Add your bucket list items...</p>'}
                </div>
            </div>
        `;
    }
};
