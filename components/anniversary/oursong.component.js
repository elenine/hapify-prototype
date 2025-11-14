// Our Song Component for Anniversary Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.oursong = {
    name: '🎵 Our Song',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Our Special Song" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Song Name</label>
                <input type="text" placeholder="Perfect - Ed Sheeran" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="songname" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Artist</label>
                <input type="text" placeholder="Ed Sheeran" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="artist" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Album (optional)</label>
                <input type="text" placeholder="÷ (Divide)" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="album" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Why This Song?</label>
                <textarea placeholder="This was playing when we first danced together..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="story" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Spotify/YouTube Link (optional)</label>
                <input type="url" placeholder="https://..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="link" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="classic">Classic Card</option>
                    <option value="vinyl">Vinyl Record</option>
                    <option value="album">Album Cover</option>
                    <option value="minimal">Minimal</option>
                    <option value="modern">Modern Player</option>
                    <option value="romantic">Romantic</option>
                    <option value="lyrics">Lyrics Style</option>
                    <option value="playlist">Playlist Card</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#ef4444" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Secondary Color</label>
                <input type="color" value="#f87171" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="secondaryColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#fef2f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Font Weight</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="fontWeight" onchange="updatePreview()">
                    <option value="light">Light</option>
                    <option value="normal">Normal</option>
                    <option value="medium">Medium</option>
                    <option value="semibold" selected>Semi Bold</option>
                    <option value="bold">Bold</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Shadow</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="sm">Small</option>
                    <option value="md" selected>Medium</option>
                    <option value="lg">Large</option>
                    <option value="xl">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Border Radius</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="borderRadius" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg" selected>Large</option>
                    <option value="xl">Extra Large</option>
                    <option value="full">Full</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Spacing</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="spacing" onchange="updatePreview()">
                    <option value="compact">Compact</option>
                    <option value="normal" selected>Normal</option>
                    <option value="relaxed">Relaxed</option>
                    <option value="loose">Loose</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Icon Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="iconSize" onchange="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large" selected>Large</option>
                    <option value="xlarge">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Music Icon</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="musicIcon" onchange="updatePreview()">
                    <option value="note">Music Note 🎵</option>
                    <option value="notes">Music Notes 🎶</option>
                    <option value="headphone">Headphone 🎧</option>
                    <option value="microphone">Microphone 🎤</option>
                    <option value="guitar">Guitar 🎸</option>
                    <option value="heart">Heart 💕</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Button Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="buttonStyle" onchange="updatePreview()">
                    <option value="solid" selected>Solid</option>
                    <option value="outline">Outline</option>
                    <option value="gradient">Gradient</option>
                    <option value="ghost">Ghost</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Hover Effect</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="hoverEffect" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="lift" selected>Lift</option>
                    <option value="grow">Grow</option>
                    <option value="glow">Glow</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'classic';
        const bg = style.bg || '#ffffff';
        const accentColor = style.accentColor || '#ef4444';
        const secondaryColor = style.secondaryColor || '#f87171';
        const cardBg = style.cardBg || '#fef2f2';
        const fontWeight = style.fontWeight || 'semibold';
        const shadow = style.shadow || 'md';
        const borderRadius = style.borderRadius || 'lg';
        const spacing = style.spacing || 'normal';
        const iconSize = style.iconSize || 'large';
        const musicIcon = style.musicIcon || 'note';
        const buttonStyle = style.buttonStyle || 'solid';
        const hoverEffect = style.hoverEffect || 'lift';

        const fontWeightClasses = {
            light: 'font-light',
            normal: 'font-normal',
            medium: 'font-medium',
            semibold: 'font-semibold',
            bold: 'font-bold'
        };

        const shadowClasses = {
            none: '',
            sm: 'shadow-sm',
            md: 'shadow-md',
            lg: 'shadow-lg',
            xl: 'shadow-xl'
        };

        const borderRadiusClasses = {
            none: 'rounded-none',
            sm: 'rounded-sm',
            md: 'rounded-md',
            lg: 'rounded-lg',
            xl: 'rounded-xl',
            full: 'rounded-full'
        };

        const spacingClasses = {
            compact: 'py-8 px-6',
            normal: 'py-12 px-6',
            relaxed: 'py-16 px-6',
            loose: 'py-20 px-6'
        };

        const iconSizeClasses = {
            small: 'text-3xl',
            medium: 'text-5xl',
            large: 'text-6xl',
            xlarge: 'text-7xl'
        };

        const hoverEffectClasses = {
            none: '',
            lift: 'transition hover:-translate-y-1',
            grow: 'transition hover:scale-105',
            glow: 'transition hover:shadow-2xl'
        };

        const musicIconMap = {
            note: '🎵',
            notes: '🎶',
            headphone: '🎧',
            microphone: '🎤',
            guitar: '🎸',
            heart: '💕'
        };

        const listenButton = () => {
            if (!data.link) return '';

            if (buttonStyle === 'solid') {
                return `<a href="${data.link}" target="_blank"
                           class="inline-block px-6 py-3 ${borderRadiusClasses[borderRadius]} ${fontWeightClasses[fontWeight]}
                                  text-white transition"
                           style="background: ${accentColor}">
                    🎧 Listen Now
                </a>`;
            } else if (buttonStyle === 'outline') {
                return `<a href="${data.link}" target="_blank"
                           class="inline-block px-6 py-3 ${borderRadiusClasses[borderRadius]} ${fontWeightClasses[fontWeight]}
                                  bg-transparent transition"
                           style="color: ${accentColor}; border: 2px solid ${accentColor}">
                    🎧 Listen Now
                </a>`;
            } else if (buttonStyle === 'gradient') {
                return `<a href="${data.link}" target="_blank"
                           class="inline-block px-6 py-3 ${borderRadiusClasses[borderRadius]} ${fontWeightClasses[fontWeight]}
                                  text-white transition"
                           style="background: linear-gradient(135deg, ${accentColor}, ${secondaryColor})">
                    🎧 Listen Now
                </a>`;
            } else {
                return `<a href="${data.link}" target="_blank"
                           class="inline-block px-6 py-3 ${borderRadiusClasses[borderRadius]} ${fontWeightClasses[fontWeight]} transition"
                           style="color: ${accentColor}; background: ${accentColor}11">
                    🎧 Listen Now
                </a>`;
            }
        };

        // Classic Card Layout
        if (layout === 'classic') {
            return `
                <div class="${spacingClasses[spacing]} text-center" style="background: ${bg}">
                    <div class="max-w-md mx-auto">
                        <h2 class="text-2xl ${fontWeightClasses[fontWeight]} mb-6">${data.title || 'Our Special Song'}</h2>
                        <div class="p-8 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} ${hoverEffectClasses[hoverEffect]}"
                             style="background: ${cardBg}">
                            <div class="${iconSizeClasses[iconSize]} mb-4">${musicIconMap[musicIcon]}</div>
                            <h3 class="text-xl ${fontWeightClasses[fontWeight]} text-gray-900 mb-2">${data.songname || 'Song Name'}</h3>
                            ${data.artist ? `<p class="text-gray-600 mb-4">by ${data.artist}</p>` : ''}
                            ${data.album ? `<p class="text-sm text-gray-500 mb-4 italic">${data.album}</p>` : ''}
                            ${data.story ? `<p class="text-gray-700 mt-4 italic border-t pt-4" style="border-color: ${accentColor}22">"${data.story}"</p>` : ''}
                            ${data.link ? `<div class="mt-6">${listenButton()}</div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Vinyl Record Layout
        if (layout === 'vinyl') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-3xl mx-auto">
                        <h2 class="text-2xl ${fontWeightClasses[fontWeight]} text-center mb-8">${data.title || 'Our Special Song'}</h2>
                        <div class="grid md:grid-cols-2 gap-8 items-center">
                            <div class="flex justify-center">
                                <div class="relative w-64 h-64 ${borderRadiusClasses[borderRadius === 'full' ? 'full' : 'xl']} ${shadowClasses[shadow]} ${hoverEffectClasses[hoverEffect]}"
                                     style="background: radial-gradient(circle at center, ${accentColor}, ${secondaryColor})">
                                    <div class="absolute inset-0 flex items-center justify-center">
                                        <div class="w-16 h-16 bg-white ${borderRadiusClasses['full']} ${shadowClasses['lg']} flex items-center justify-center">
                                            <div class="text-2xl">${musicIconMap[musicIcon]}</div>
                                        </div>
                                    </div>
                                    <div class="absolute inset-8 ${borderRadiusClasses[borderRadius === 'full' ? 'full' : 'xl']}"
                                         style="border: 2px dashed ${bg}44"></div>
                                </div>
                            </div>
                            <div>
                                <h3 class="text-2xl ${fontWeightClasses[fontWeight]} mb-2" style="color: ${accentColor}">
                                    ${data.songname || 'Song Name'}
                                </h3>
                                ${data.artist ? `<p class="text-lg text-gray-600 mb-2">${data.artist}</p>` : ''}
                                ${data.album ? `<p class="text-sm text-gray-500 mb-4">Album: ${data.album}</p>` : ''}
                                ${data.story ? `<div class="p-4 ${borderRadiusClasses[borderRadius]} mt-4"
                                                    style="background: ${cardBg}; border-left: 4px solid ${accentColor}">
                                    <p class="text-gray-700 italic">"${data.story}"</p>
                                </div>` : ''}
                                ${data.link ? `<div class="mt-6">${listenButton()}</div>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Album Cover Layout
        if (layout === 'album') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto text-center">
                        <h2 class="text-2xl ${fontWeightClasses[fontWeight]} mb-8">${data.title || 'Our Special Song'}</h2>
                        <div class="inline-block p-8 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} ${hoverEffectClasses[hoverEffect]}"
                             style="background: linear-gradient(135deg, ${accentColor}, ${secondaryColor})">
                            <div class="bg-white p-8 ${borderRadiusClasses[borderRadius]} ${shadowClasses['lg']}">
                                <div class="${iconSizeClasses[iconSize]} mb-6">${musicIconMap[musicIcon]}</div>
                                <h3 class="text-xl ${fontWeightClasses[fontWeight]} mb-2">${data.songname || 'Song Name'}</h3>
                                ${data.artist ? `<p class="text-gray-600 text-sm uppercase tracking-wider">${data.artist}</p>` : ''}
                                ${data.album ? `<div class="mt-4 pt-4 border-t border-gray-200">
                                    <p class="text-xs text-gray-500">${data.album}</p>
                                </div>` : ''}
                            </div>
                        </div>
                        ${data.story ? `<p class="text-gray-700 mt-6 italic max-w-lg mx-auto">"${data.story}"</p>` : ''}
                        ${data.link ? `<div class="mt-6">${listenButton()}</div>` : ''}
                    </div>
                </div>
            `;
        }

        // Minimal Layout
        if (layout === 'minimal') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-md mx-auto text-center">
                        <div class="mb-4 ${iconSizeClasses[iconSize]}">${musicIconMap[musicIcon]}</div>
                        <h2 class="text-xl ${fontWeightClasses[fontWeight]} mb-2" style="color: ${accentColor}">
                            ${data.title || 'Our Special Song'}
                        </h2>
                        <div class="h-1 w-16 mx-auto mb-6 ${borderRadiusClasses[borderRadius]}"
                             style="background: linear-gradient(90deg, ${accentColor}, ${secondaryColor})"></div>
                        <h3 class="text-2xl ${fontWeightClasses[fontWeight]} mb-2">${data.songname || 'Song Name'}</h3>
                        ${data.artist ? `<p class="text-gray-600 mb-4">${data.artist}</p>` : ''}
                        ${data.story ? `<p class="text-gray-700 text-sm italic mt-6">"${data.story}"</p>` : ''}
                        ${data.link ? `<div class="mt-6">${listenButton()}</div>` : ''}
                    </div>
                </div>
            `;
        }

        // Modern Player Layout
        if (layout === 'modern') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto">
                        <h2 class="text-2xl ${fontWeightClasses[fontWeight]} text-center mb-8">${data.title || 'Our Special Song'}</h2>
                        <div class="p-8 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}"
                             style="background: ${cardBg}">
                            <div class="flex items-center gap-6">
                                <div class="flex-shrink-0 w-24 h-24 ${borderRadiusClasses[borderRadius]} ${shadowClasses['md']} flex items-center justify-center"
                                     style="background: linear-gradient(135deg, ${accentColor}, ${secondaryColor})">
                                    <div class="text-4xl text-white">${musicIconMap[musicIcon]}</div>
                                </div>
                                <div class="flex-1">
                                    <h3 class="text-xl ${fontWeightClasses[fontWeight]} mb-1">${data.songname || 'Song Name'}</h3>
                                    ${data.artist ? `<p class="text-gray-600 mb-2">${data.artist}</p>` : ''}
                                    ${data.album ? `<p class="text-sm text-gray-500">${data.album}</p>` : ''}
                                </div>
                            </div>
                            ${data.story ? `<div class="mt-6 pt-6 border-t" style="border-color: ${accentColor}22">
                                <p class="text-gray-700 italic">"${data.story}"</p>
                            </div>` : ''}
                            ${data.link ? `<div class="mt-6 flex justify-center">
                                <div class="relative w-full h-2 ${borderRadiusClasses['full']} overflow-hidden"
                                     style="background: ${accentColor}22">
                                    <div class="absolute left-0 top-0 h-full w-1/3 ${borderRadiusClasses['full']}"
                                         style="background: ${accentColor}"></div>
                                </div>
                            </div>
                            <div class="mt-4 text-center">${listenButton()}</div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Romantic Layout
        if (layout === 'romantic') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: linear-gradient(180deg, ${bg}, ${cardBg})">
                    <div class="max-w-2xl mx-auto text-center">
                        <div class="inline-block p-6 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} mb-6"
                             style="background: linear-gradient(135deg, ${accentColor}, ${secondaryColor})">
                            <div class="${iconSizeClasses[iconSize]} text-white">${musicIconMap[musicIcon]}</div>
                        </div>
                        <h2 class="text-3xl font-serif ${fontWeightClasses[fontWeight]} mb-6" style="color: ${accentColor}">
                            ${data.title || 'Our Special Song'}
                        </h2>
                        <div class="relative p-8 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}"
                             style="background: white; border: 3px double ${accentColor}">
                            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 ${borderRadiusClasses['full']}"
                                 style="background: ${accentColor}; color: white; font-size: 0.75rem; font-weight: 600;">
                                NOW PLAYING
                            </div>
                            <h3 class="text-2xl ${fontWeightClasses[fontWeight]} mb-2 mt-2">${data.songname || 'Song Name'}</h3>
                            ${data.artist ? `<p class="text-gray-600 mb-4">${data.artist}</p>` : ''}
                            ${data.story ? `<div class="mt-6 p-4 ${borderRadiusClasses[borderRadius]}" style="background: ${cardBg}">
                                <p class="text-gray-700 italic leading-relaxed">"${data.story}"</p>
                            </div>` : ''}
                            ${data.link ? `<div class="mt-6">${listenButton()}</div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Lyrics Style Layout
        if (layout === 'lyrics') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-xl mx-auto">
                        <div class="text-center mb-8">
                            <div class="inline-flex items-center gap-3 mb-3">
                                <div class="w-12 h-1 ${borderRadiusClasses[borderRadius]}" style="background: ${accentColor}"></div>
                                <div class="text-3xl">${musicIconMap[musicIcon]}</div>
                                <div class="w-12 h-1 ${borderRadiusClasses[borderRadius]}" style="background: ${secondaryColor}"></div>
                            </div>
                            <h2 class="text-2xl ${fontWeightClasses[fontWeight]}">${data.title || 'Our Special Song'}</h2>
                        </div>
                        <div class="relative p-8 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}"
                             style="background: ${cardBg}; border-left: 4px solid ${accentColor}">
                            <div class="text-6xl opacity-20 absolute top-4 left-4" style="color: ${accentColor}">"</div>
                            <div class="relative z-10 text-center">
                                <h3 class="text-xl ${fontWeightClasses[fontWeight]} mb-2 italic" style="color: ${accentColor}">
                                    ${data.songname || 'Song Name'}
                                </h3>
                                ${data.artist ? `<p class="text-sm text-gray-600 mb-4">— ${data.artist}</p>` : ''}
                                ${data.story ? `<div class="mt-6 pt-6 border-t" style="border-color: ${accentColor}22">
                                    <p class="text-gray-700 leading-relaxed">${data.story}</p>
                                </div>` : ''}
                                ${data.link ? `<div class="mt-6">${listenButton()}</div>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Playlist Card Layout
        if (layout === 'playlist') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-md mx-auto">
                        <h2 class="text-2xl ${fontWeightClasses[fontWeight]} text-center mb-6">${data.title || 'Our Special Song'}</h2>
                        <div class="p-6 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} ${hoverEffectClasses[hoverEffect]}"
                             style="background: ${cardBg}">
                            <div class="flex items-start gap-4">
                                <div class="flex-shrink-0 w-16 h-16 ${borderRadiusClasses[borderRadius]} flex items-center justify-center"
                                     style="background: linear-gradient(135deg, ${accentColor}, ${secondaryColor})">
                                    <div class="text-2xl text-white">${musicIconMap[musicIcon]}</div>
                                </div>
                                <div class="flex-1 min-w-0">
                                    <h3 class="text-lg ${fontWeightClasses[fontWeight]} truncate">${data.songname || 'Song Name'}</h3>
                                    ${data.artist ? `<p class="text-sm text-gray-600 truncate">${data.artist}</p>` : ''}
                                    ${data.album ? `<p class="text-xs text-gray-500 truncate mt-1">${data.album}</p>` : ''}
                                </div>
                                ${data.link ? `
                                    <a href="${data.link}" target="_blank"
                                       class="flex-shrink-0 w-10 h-10 ${borderRadiusClasses['full']} flex items-center justify-center transition hover:scale-110"
                                       style="background: ${accentColor}; color: white;">
                                        ▶
                                    </a>
                                ` : ''}
                            </div>
                            ${data.story ? `<div class="mt-4 pt-4 border-t" style="border-color: ${accentColor}22">
                                <p class="text-sm text-gray-700 italic">"${data.story}"</p>
                            </div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Default to classic
        return '';
    }
};
