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
                    <option value="sky">Sky - Flying High</option>
                    <option value="string">String - Tied Together</option>
                    <option value="cluster">Cluster - Grouped Bundle</option>
                    <option value="release">Release - Magical Moment</option>
                    <option value="party">Party - Confetti Blast</option>
                    <option value="gradient">Gradient - Color Fade</option>
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

        if (layout === 'sky') {
            return `
                <div class="py-12 px-6 relative overflow-hidden" style="background: linear-gradient(to bottom, ${bgColor} 0%, #e0f2fe 100%); color: ${textColor}">
                    <div class="absolute top-4 left-1/4 text-6xl opacity-80 ${animationClass} animate-pulse" style="animation-delay: 0s">🎈</div>
                    <div class="absolute top-12 right-1/3 text-5xl opacity-70 ${animationClass} animate-pulse" style="animation-delay: 0.5s">🎈</div>
                    <div class="absolute top-20 left-1/2 text-7xl opacity-90 ${animationClass} animate-pulse" style="animation-delay: 1s">🎈</div>
                    <div class="absolute top-8 right-1/4 text-4xl opacity-60 ${animationClass} animate-pulse" style="animation-delay: 1.5s">🎈</div>
                    <div class="absolute top-32 left-1/3 text-5xl opacity-75 ${animationClass} animate-pulse" style="animation-delay: 2s">🎈</div>
                    <div class="relative z-10 pt-40 text-center">
                        <div class="bg-white bg-opacity-90 rounded-2xl p-8 max-w-xl mx-auto shadow-xl">
                            <h3 class="text-2xl font-bold mb-4">${title}</h3>
                            <p class="text-lg leading-relaxed">${message}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'string') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-2xl mx-auto text-center">
                        <div class="relative mb-8">
                            <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-30"></div>
                            <div class="flex justify-around items-start pt-4">
                                <div class="flex flex-col items-center ${animationClass}">
                                    <div class="w-0.5 h-16 bg-current opacity-30"></div>
                                    <div class="text-5xl">🎈</div>
                                </div>
                                <div class="flex flex-col items-center ${animationClass}" style="padding-top: 20px">
                                    <div class="w-0.5 h-12 bg-current opacity-30"></div>
                                    <div class="text-6xl">🎈</div>
                                </div>
                                <div class="flex flex-col items-center ${animationClass}">
                                    <div class="w-0.5 h-16 bg-current opacity-30"></div>
                                    <div class="text-5xl">🎈</div>
                                </div>
                                <div class="flex flex-col items-center ${animationClass}" style="padding-top: 10px">
                                    <div class="w-0.5 h-14 bg-current opacity-30"></div>
                                    <div class="text-5xl">🎈</div>
                                </div>
                            </div>
                        </div>
                        <h3 class="text-2xl font-bold mb-4">${title}</h3>
                        <p class="text-lg leading-relaxed">${message}</p>
                    </div>
                </div>
            `;
        }

        if (layout === 'cluster') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-2xl mx-auto">
                        <div class="flex justify-center items-end mb-8 gap-2">
                            <div class="flex flex-col items-center">
                                <div class="text-6xl ${animationClass}">🎈</div>
                                <div class="text-5xl -mt-4 ${animationClass}">🎈</div>
                            </div>
                            <div class="flex flex-col items-center -mb-4">
                                <div class="text-7xl ${animationClass}">🎈</div>
                                <div class="text-6xl -mt-4 ${animationClass}">🎈</div>
                                <div class="text-5xl -mt-4 ${animationClass}">🎈</div>
                            </div>
                            <div class="flex flex-col items-center">
                                <div class="text-6xl ${animationClass}">🎈</div>
                                <div class="text-5xl -mt-4 ${animationClass}">🎈</div>
                            </div>
                        </div>
                        <div class="text-center bg-white bg-opacity-20 rounded-2xl p-6 backdrop-blur-sm">
                            <h3 class="text-2xl font-bold mb-4">${title}</h3>
                            <p class="text-lg leading-relaxed">${message}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'release') {
            return `
                <div class="py-12 px-6 relative overflow-hidden" style="background: linear-gradient(to top, ${bgColor} 0%, #fef3c7 100%); color: ${textColor}">
                    <div class="absolute bottom-20 left-1/4 text-5xl opacity-90 ${animationClass}" style="animation: float-up 3s ease-in-out infinite; animation-delay: 0s">🎈</div>
                    <div class="absolute bottom-16 right-1/3 text-6xl opacity-80 ${animationClass}" style="animation: float-up 3s ease-in-out infinite; animation-delay: 0.5s">🎈</div>
                    <div class="absolute bottom-24 left-1/2 text-7xl opacity-95 ${animationClass}" style="animation: float-up 3s ease-in-out infinite; animation-delay: 1s">🎈</div>
                    <div class="absolute bottom-20 right-1/4 text-5xl opacity-85 ${animationClass}" style="animation: float-up 3s ease-in-out infinite; animation-delay: 1.5s">🎈</div>
                    <style>
                        @keyframes float-up {
                            0% { transform: translateY(0) rotate(0deg); }
                            50% { transform: translateY(-30px) rotate(5deg); }
                            100% { transform: translateY(0) rotate(0deg); }
                        }
                    </style>
                    <div class="relative z-10 text-center pt-48">
                        <div class="inline-block bg-white bg-opacity-95 rounded-3xl px-8 py-6 shadow-2xl">
                            <div class="text-6xl mb-4">✨</div>
                            <h3 class="text-2xl font-bold mb-4">${title}</h3>
                            <p class="text-lg leading-relaxed max-w-lg">${message}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'party') {
            return `
                <div class="py-12 px-6 relative overflow-hidden" style="background: ${bgColor}; color: ${textColor}">
                    ${[...Array(20)].map((_, i) => {
                        const emojis = ['🎊', '🎉', '✨', '⭐', '💫', '🎈'];
                        const emoji = emojis[i % emojis.length];
                        const top = Math.random() * 100;
                        const left = Math.random() * 100;
                        const rotation = Math.random() * 360;
                        const size = Math.random() > 0.5 ? 'text-3xl' : 'text-2xl';
                        const opacity = 0.3 + Math.random() * 0.4;
                        return `<div class="absolute ${size}" style="top: ${top}%; left: ${left}%; transform: rotate(${rotation}deg); opacity: ${opacity}">${emoji}</div>`;
                    }).join('')}
                    <div class="relative z-10 text-center">
                        <div class="text-7xl mb-6 ${animationClass}">${balloons}</div>
                        <div class="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-2xl p-8 max-w-xl mx-auto shadow-2xl transform hover:scale-105 transition-transform">
                            <h3 class="text-3xl font-bold mb-4 drop-shadow-lg">${title}</h3>
                            <p class="text-lg leading-relaxed drop-shadow">${message}</p>
                        </div>
                        <div class="text-7xl mt-6 ${animationClass}">${balloons}</div>
                    </div>
                </div>
            `;
        }

        if (layout === 'gradient') {
            return `
                <div class="py-12 px-6 text-center" style="background: linear-gradient(135deg, ${bgColor} 0%, #ec4899 25%, #8b5cf6 50%, #3b82f6 75%, #10b981 100%); color: white">
                    <div class="max-w-2xl mx-auto">
                        <div class="relative mb-8">
                            <div class="absolute inset-0 bg-white opacity-10 rounded-3xl blur-xl"></div>
                            <div class="relative bg-white bg-opacity-20 backdrop-blur-md rounded-3xl p-8 border border-white border-opacity-30">
                                <div class="flex justify-center gap-3 mb-6 text-6xl ${animationClass}">
                                    <span style="filter: drop-shadow(0 0 10px rgba(255,255,255,0.8))">🎈</span>
                                    <span style="filter: drop-shadow(0 0 10px rgba(255,255,255,0.8))">🎊</span>
                                    <span style="filter: drop-shadow(0 0 10px rgba(255,255,255,0.8))">🎉</span>
                                    <span style="filter: drop-shadow(0 0 10px rgba(255,255,255,0.8))">🎈</span>
                                </div>
                                <h3 class="text-3xl font-bold mb-4 drop-shadow-lg">${title}</h3>
                                <p class="text-lg leading-relaxed drop-shadow">${message}</p>
                            </div>
                        </div>
                    </div>
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
