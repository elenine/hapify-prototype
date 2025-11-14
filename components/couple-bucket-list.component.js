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
                <label class="block text-sm font-medium text-gray-700 mb-2">List Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="listStyle" onchange="updatePreview()">
                    <option value="checkboxes" selected>Interactive Checkboxes</option>
                    <option value="cards">Card Grid</option>
                    <option value="simple">Simple List</option>
                    <option value="timeline">Timeline View</option>
                    <option value="badges">Badge Style</option>
                    <option value="progress">Progress Tiles</option>
                    <option value="goals">Goals Board</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f0fdf4" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#22c55e" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const items = (data.items || '').split('\n').filter(i => i.trim());
        const listStyle = style.listStyle || 'checkboxes';
        const accentColor = style.accent || '#22c55e';

        let itemsHTML = '';
        let completedCount = items.filter(item => item.trim().startsWith('✓')).length;

        if (listStyle === 'checkboxes') {
            itemsHTML = items.map((item, i) => {
                const isCompleted = item.trim().startsWith('✓');
                const text = item.replace(/^✓\s*/, '').trim();
                const checkIcon = isCompleted ? '✓' : '';
                const checkClass = isCompleted ? `text-white` : 'bg-white border-2 border-gray-300';
                const textClass = isCompleted ? 'line-through text-gray-500' : 'text-gray-900';

                return `
                    <div class="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition">
                        <div class="flex-shrink-0 w-8 h-8 ${checkClass} rounded-lg flex items-center justify-center font-bold text-lg" style="${isCompleted ? `background: ${accentColor}` : ''}">
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
                        <span class="text-sm font-bold" style="color: ${accentColor}">${completedCount}/${items.length} Complete</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                        <div class="h-4 rounded-full transition-all duration-500" style="width: ${progress}%; background: linear-gradient(to right, ${accentColor}, ${accentColor}dd);"></div>
                    </div>
                    <div class="text-center mt-2 text-2xl font-bold text-gray-900">${progress}%</div>
                </div>
            `;
            itemsHTML = progressBar + `<div class="space-y-3">${itemsHTML}</div>`;
        } else if (listStyle === 'cards') {
            itemsHTML = items.map((item, i) => {
                const isCompleted = item.trim().startsWith('✓');
                const text = item.replace(/^✓\s*/, '').trim();
                const cardClass = isCompleted ? `border-2` : 'bg-white border-2 border-gray-300';
                const bgStyle = isCompleted ? `background: ${accentColor}10; border-color: ${accentColor}` : '';
                const badge = isCompleted ? `<span class="absolute top-3 right-3 text-white text-xs px-3 py-1 rounded-full font-bold" style="background: ${accentColor}">✓ Done</span>` : '';

                return `
                    <div class="relative p-6 ${cardClass} rounded-xl shadow-md hover:shadow-lg transition" style="${bgStyle}">
                        ${badge}
                        <div class="text-4xl mb-3">${isCompleted ? '✅' : '🎯'}</div>
                        <p class="text-gray-900 font-medium pr-20">${text}</p>
                    </div>
                `;
            }).join('');
            itemsHTML = `<div class="grid md:grid-cols-2 gap-4">${itemsHTML}</div>`;
        } else if (listStyle === 'simple') {
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
        } else if (listStyle === 'timeline') {
            itemsHTML = `
                <div class="relative">
                    <div class="absolute left-8 top-0 bottom-0 w-1" style="background: ${accentColor}40"></div>
                    <div class="space-y-6">
                        ${items.map((item, i) => {
                            const isCompleted = item.trim().startsWith('✓');
                            const text = item.replace(/^✓\s*/, '').trim();
                            const icon = isCompleted ? '✅' : '⏳';

                            return `
                                <div class="flex items-start gap-4 relative">
                                    <div class="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl z-10 shadow-lg" style="background: ${isCompleted ? accentColor : 'white'}; border: 3px solid ${accentColor};">
                                        ${icon}
                                    </div>
                                    <div class="flex-1 bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition mt-3">
                                        <p class="text-gray-900 font-medium">${text}</p>
                                        ${isCompleted ? `<span class="inline-block mt-2 text-xs font-bold px-2 py-1 rounded" style="background: ${accentColor}20; color: ${accentColor}">Completed</span>` : ''}
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;
        } else if (listStyle === 'badges') {
            itemsHTML = items.map((item, i) => {
                const isCompleted = item.trim().startsWith('✓');
                const text = item.replace(/^✓\s*/, '').trim();

                return `
                    <div class="inline-block m-2">
                        <div class="px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition ${isCompleted ? 'text-white' : 'bg-white text-gray-900'}" style="${isCompleted ? `background: ${accentColor}` : ''}">
                            <div class="flex items-center gap-2">
                                <span class="text-xl">${isCompleted ? '✓' : '○'}</span>
                                <span class="font-medium">${text}</span>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
            itemsHTML = `<div class="text-center">${itemsHTML}</div>`;
        } else if (listStyle === 'progress') {
            itemsHTML = items.map((item, i) => {
                const isCompleted = item.trim().startsWith('✓');
                const text = item.replace(/^✓\s*/, '').trim();

                return `
                    <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
                        <div class="flex items-center gap-4 mb-3">
                            <div class="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style="background: ${isCompleted ? accentColor : accentColor + '20'};">
                                ${isCompleted ? '✓' : '○'}
                            </div>
                            <p class="flex-1 text-gray-900 font-medium">${text}</p>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2">
                            <div class="h-2 rounded-full transition-all" style="width: ${isCompleted ? '100' : '0'}%; background: ${accentColor};"></div>
                        </div>
                    </div>
                `;
            }).join('');
            itemsHTML = `<div class="space-y-4">${itemsHTML}</div>`;
        } else if (listStyle === 'goals') {
            const pending = items.filter(i => !i.trim().startsWith('✓'));
            const completed = items.filter(i => i.trim().startsWith('✓'));

            const renderGoal = (item, isCompleted) => {
                const text = item.replace(/^✓\s*/, '').trim();
                return `
                    <div class="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                        <div class="flex items-start gap-3">
                            <div class="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-xl" style="background: ${isCompleted ? accentColor : accentColor + '20'};">
                                ${isCompleted ? '✓' : '🎯'}
                            </div>
                            <p class="flex-1 text-gray-900 font-medium ${isCompleted ? 'line-through opacity-75' : ''}">${text}</p>
                        </div>
                    </div>
                `;
            };

            itemsHTML = `
                ${pending.length > 0 ? `
                    <div class="mb-8">
                        <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span>🎯</span>
                            <span>To Do (${pending.length})</span>
                        </h3>
                        <div class="grid md:grid-cols-2 gap-4">
                            ${pending.map(item => renderGoal(item, false)).join('')}
                        </div>
                    </div>
                ` : ''}
                ${completed.length > 0 ? `
                    <div>
                        <h3 class="text-xl font-bold mb-4 flex items-center gap-2" style="color: ${accentColor}">
                            <span>✓</span>
                            <span>Completed (${completed.length})</span>
                        </h3>
                        <div class="grid md:grid-cols-2 gap-4">
                            ${completed.map(item => renderGoal(item, true)).join('')}
                        </div>
                    </div>
                ` : ''}
            `;
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
