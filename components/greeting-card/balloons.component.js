// Balloons Celebration Component for Birthday Greeting Card

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.balloons = {
    name: '🎈 Balloons',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input type="text" placeholder="Let's Celebrate!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Celebration Message</label>
                <textarea placeholder="Here's to another year of joy, laughter, and unforgettable moments!" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="floating">Floating Balloons - Fun</option>
                    <option value="arch">Balloon Arch - Elegant</option>
                    <option value="centered">Centered - Classic</option>
                    <option value="scattered">Scattered - Playful</option>
                    <option value="bouquet">Balloon Bouquet</option>
                    <option value="minimal">Minimal - Clean</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fce7f3" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Balloon Colors</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="balloonColors" onchange="updatePreview()">
                    <option value="mixed">Mixed Colors</option>
                    <option value="pink">Pink Theme</option>
                    <option value="rainbow">Rainbow</option>
                    <option value="gold">Gold & White</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Animation</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="animation" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="hover">Hover Effect</option>
                    <option value="float">Float Animation</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'floating';
        const bgColor = style.bg || '#fce7f3';
        const textColor = style.text || '#1f2937';
        const title = data.title || "Let's Celebrate!";
        const message = data.message || "Here's to another year of joy, laughter, and unforgettable moments!";

        const balloonSets = {
            mixed: '🎈🎉🎊🎈',
            pink: '🎀💗🎈🌸',
            rainbow: '❤️🧡💛💚💙💜',
            gold: '⭐🎈✨🎊'
        };
        const balloons = balloonSets[style.balloonColors] || balloonSets.mixed;

        const animationClass = style.animation === 'hover' ? 'transform hover:scale-110 transition-transform duration-300' : 
                              style.animation === 'float' ? 'animate-bounce' : '';

        if (layout === 'floating') {
            return `
                <div class="py-12 px-6 text-center" style="background: ${bgColor}; color: ${textColor}">
                    <div class="text-7xl mb-4 ${animationClass}">${balloons}</div>
                    <h3 class="text-2xl font-bold mb-4">${title}</h3>
                    <p class="text-lg max-w-2xl mx-auto leading-relaxed">${message}</p>
                    <div class="text-7xl mt-6 ${animationClass}">${balloons}</div>
                </div>
            `;
        }

        if (layout === 'arch') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-3xl mx-auto text-center">
                        <div class="flex justify-center items-start text-6xl mb-4">
                            <span class="${animationClass}">🎈</span>
                            <span class="${animationClass}">🎊</span>
                            <span class="${animationClass}">🎉</span>
                            <span class="${animationClass}">🎊</span>
                            <span class="${animationClass}">🎈</span>
                        </div>
                        <h3 class="text-2xl font-bold mb-4">${title}</h3>
                        <p class="text-lg leading-relaxed">${message}</p>
                    </div>
                </div>
            `;
        }

        if (layout === 'centered') {
            return `
                <div class="py-12 px-6 text-center" style="background: ${bgColor}; color: ${textColor}">
                    <div class="text-8xl mb-6 ${animationClass}">🎈</div>
                    <h3 class="text-2xl font-bold mb-4">${title}</h3>
                    <p class="text-lg max-w-2xl mx-auto">${message}</p>
                </div>
            `;
        }

        if (layout === 'scattered') {
            return `
                <div class="py-12 px-6 relative" style="background: ${bgColor}; color: ${textColor}">
                    <div class="absolute top-8 left-8 text-5xl opacity-70 ${animationClass}">🎈</div>
                    <div class="absolute top-16 right-12 text-4xl opacity-60 ${animationClass}">🎊</div>
                    <div class="absolute bottom-16 left-16 text-4xl opacity-60 ${animationClass}">🎉</div>
                    <div class="absolute bottom-8 right-8 text-5xl opacity-70 ${animationClass}">🎈</div>
                    <div class="relative z-10 text-center">
                        <h3 class="text-2xl font-bold mb-4">${title}</h3>
                        <p class="text-lg max-w-2xl mx-auto">${message}</p>
                    </div>
                </div>
            `;
        }

        if (layout === 'bouquet') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-xl mx-auto text-center p-8 rounded-2xl" style="background: rgba(255,255,255,0.3)">
                        <div class="text-7xl mb-4 ${animationClass}">${balloons}</div>
                        <h3 class="text-2xl font-bold mb-4">${title}</h3>
                        <p class="text-lg">${message}</p>
                    </div>
                </div>
            `;
        }

        if (layout === 'minimal') {
            return `
                <div class="py-12 px-6 text-center" style="background: ${bgColor}; color: ${textColor}">
                    <div class="text-4xl mb-4">🎈</div>
                    <h3 class="text-2xl font-bold mb-4">${title}</h3>
                    <p class="text-base max-w-md mx-auto">${message}</p>
                </div>
            `;
        }

        return `
            <div class="py-12 px-6 text-center" style="background: ${bgColor}; color: ${textColor}">
                <div class="text-7xl mb-4">${balloons}</div>
                <h3 class="text-2xl font-bold mb-4">${title}</h3>
                <p class="text-lg max-w-2xl mx-auto leading-relaxed">${message}</p>
            </div>
        `;
    }
};
