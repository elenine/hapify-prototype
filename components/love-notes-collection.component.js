// Love Notes Collection Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents['love-notes-collection'] = {
    name: '💝 Love Notes Collection',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Little Love Notes" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" value="Little Love Notes" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Introduction</label>
                <textarea placeholder="Sweet little messages from my heart to yours..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="intro" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Love Notes (one per line)</label>
                <textarea placeholder="You make my heart smile
I fall for you more every day
You're my favorite person
Thank you for being you
You're the best part of my day
I love your laugh
You make everything better
I'm so lucky to have you
You're my happy place
Forever grateful for you
You complete me
Every moment with you is precious" rows="15" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="notes" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Notes Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="notesStyle" onchange="updatePreview()">
                    <option value="sticky" selected>Sticky Notes</option>
                    <option value="cards">Love Cards</option>
                    <option value="bubbles">Speech Bubbles</option>
                    <option value="handwritten">Handwritten Style</option>
                    <option value="envelopes">Love Envelopes</option>
                    <option value="hearts">Floating Hearts</option>
                    <option value="ribbon">Ribbon Notes</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fefce8" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#f59e0b" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const notes = (data.notes || '').split('\n').filter(n => n.trim());
        const notesStyle = style.notesStyle || 'sticky';
        const accentColor = style.accent || '#f59e0b';

        let notesHTML = '';

        if (notesStyle === 'sticky') {
            const colors = ['#fef9c3', '#fed7aa', '#fecaca', '#ddd6fe', '#bae6fd', '#bbf7d0'];
            notesHTML = notes.map((note, i) => {
                const color = colors[i % colors.length];
                const rotate = ['rotate-2', '-rotate-2', 'rotate-1', '-rotate-1', 'rotate-3', '-rotate-3'][i % 6];

                return `
                    <div class="transform ${rotate} hover:rotate-0 transition-transform duration-300">
                        <div class="p-6 shadow-lg hover:shadow-xl transition" style="background: ${color}; min-height: 120px;">
                            <p class="text-gray-900 text-center font-medium italic">${note.trim()}</p>
                        </div>
                    </div>
                `;
            }).join('');
            notesHTML = `<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">${notesHTML}</div>`;
        } else if (notesStyle === 'cards') {
            notesHTML = notes.map((note, i) => {
                return `
                    <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                        <div class="text-4xl mb-3 text-center">💕</div>
                        <p class="text-gray-700 text-center italic">"${note.trim()}"</p>
                    </div>
                `;
            }).join('');
            notesHTML = `<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">${notesHTML}</div>`;
        } else if (notesStyle === 'bubbles') {
            notesHTML = notes.map((note, i) => {
                const isLeft = i % 2 === 0;
                const alignClass = isLeft ? 'mr-auto' : 'ml-auto';

                return `
                    <div class="max-w-md ${alignClass}">
                        <div class="rounded-3xl p-5 shadow-md relative" style="background: ${accentColor}20;">
                            <p class="text-gray-900">${note.trim()}</p>
                            <div class="absolute ${isLeft ? 'left-0 -ml-2' : 'right-0 -mr-2'} bottom-4 w-4 h-4 transform rotate-45" style="background: ${accentColor}20;"></div>
                        </div>
                    </div>
                `;
            }).join('');
            notesHTML = `<div class="space-y-4">${notesHTML}</div>`;
        } else if (notesStyle === 'handwritten') {
            notesHTML = notes.map((note, i) => {
                return `
                    <div class="bg-white border-2 border-gray-300 rounded p-5 shadow-sm relative">
                        <div class="absolute top-2 right-2 opacity-20 text-4xl" style="color: ${accentColor}">💌</div>
                        <p class="text-gray-900 italic" style="font-family: 'Comic Sans MS', cursive;">${note.trim()}</p>
                    </div>
                `;
            }).join('');
            notesHTML = `<div class="grid md:grid-cols-2 gap-4">${notesHTML}</div>`;
        } else if (notesStyle === 'envelopes') {
            notesHTML = notes.map((note, i) => {
                const rotation = (i % 2 === 0 ? 1 : -1) * (Math.random() * 3 + 1);

                return `
                    <div class="transform hover:scale-105 transition" style="transform: rotate(${rotation}deg);">
                        <div class="bg-white rounded-lg overflow-hidden shadow-xl" style="border: 3px solid ${accentColor}40;">
                            <div class="h-3" style="background: linear-gradient(to right, ${accentColor}, ${accentColor}dd);"></div>
                            <div class="p-6">
                                <div class="flex items-center gap-3 mb-4">
                                    <div class="text-3xl" style="color: ${accentColor}">💌</div>
                                    <div class="flex-1 h-0.5" style="background: ${accentColor}40;"></div>
                                </div>
                                <p class="text-gray-700 italic text-center">"${note.trim()}"</p>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
            notesHTML = `<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">${notesHTML}</div>`;
        } else if (notesStyle === 'hearts') {
            notesHTML = notes.map((note, i) => {
                return `
                    <div class="relative">
                        <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
                            <div class="absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg" style="background: ${accentColor};">
                                💕
                            </div>
                            <p class="text-gray-700 text-center pr-4">${note.trim()}</p>
                        </div>
                    </div>
                `;
            }).join('');
            notesHTML = `<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">${notesHTML}</div>`;
        } else if (notesStyle === 'ribbon') {
            notesHTML = notes.map((note, i) => {
                return `
                    <div class="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition overflow-hidden">
                        <div class="absolute top-0 left-0 right-0 h-2" style="background: linear-gradient(to right, ${accentColor}, ${accentColor}dd);"></div>
                        <div class="absolute bottom-0 left-0 right-0 h-2" style="background: linear-gradient(to right, ${accentColor}dd, ${accentColor});"></div>
                        <div class="flex items-start gap-4">
                            <div class="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style="background: ${accentColor}20; color: ${accentColor};">
                                💝
                            </div>
                            <p class="flex-1 text-gray-700 pt-2">${note.trim()}</p>
                        </div>
                    </div>
                `;
            }).join('');
            notesHTML = `<div class="grid md:grid-cols-2 gap-6">${notesHTML}</div>`;
        }

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#fefce8'}">
                <div class="max-w-6xl mx-auto">
                    <div class="text-center mb-10">
                        <div class="text-5xl mb-4">💝</div>
                        <h2 class="text-3xl font-bold text-gray-900 mb-3">${data.title || 'Little Love Notes'}</h2>
                        ${data.intro ? `<p class="text-lg text-gray-600">${data.intro}</p>` : ''}
                    </div>
                    ${notesHTML || '<p class="text-center text-gray-400">Add your love notes...</p>'}
                </div>
            </div>
        `;
    }
};
