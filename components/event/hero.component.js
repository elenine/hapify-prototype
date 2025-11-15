// Hero Header Component for Event Invitation

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.hero = {
    name: '🎉 Hero Header',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Event Name</label>
                <input type="text" placeholder="Annual Tech Conference" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent section-data" data-field="name" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Tagline</label>
                <input type="text" placeholder="Join us for an inspiring event" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent section-data" data-field="tagline" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Cover Photo</label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-400 cursor-pointer" onclick="this.querySelector('input').click()">
                    <div class="text-3xl mb-2">📸</div>
                    <div class="text-sm text-gray-600">Click to upload</div>
                    <input type="file" class="hidden section-data" data-field="image" accept="image/*" onchange="handleImageUpload(this)">
                </div>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Banner Image (Optional)</label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-400 cursor-pointer" onclick="this.querySelector('input').click()">
                    <div class="text-3xl mb-2">🖼️</div>
                    <div class="text-sm text-gray-600">Click to upload banner</div>
                    <input type="file" class="hidden section-data" data-field="bannerImage" accept="image/*" onchange="handleImageUpload(this)">
                </div>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="layoutStyle" onchange="updatePreview()">
                    <option value="classic">Classic - Centered</option>
                    <option value="modern">Modern - Split Layout</option>
                    <option value="minimal">Minimal - Clean & Simple</option>
                    <option value="bold">Bold - Large Typography</option>
                    <option value="overlay">Image Overlay</option>
                    <option value="gradient">Gradient Background</option>
                    <option value="card">Card Style - Elevated</option>
                    <option value="geometric">Geometric Shapes</option>
                    <option value="wave">Wave Pattern</option>
                    <option value="diagonal">Diagonal Split</option>
                    <option value="stacked">Stacked Content</option>
                    <option value="floating">Floating Elements</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#059669" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Secondary Color (for gradients)</label>
                <input type="color" value="#10b981" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="secondaryBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Alignment</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="textAlign" onchange="updatePreview()">
                    <option value="center">Center</option>
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Content Position</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="contentPosition" onchange="updatePreview()">
                    <option value="center">Center</option>
                    <option value="top">Top</option>
                    <option value="bottom">Bottom</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Image Display Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="imageStyle" onchange="updatePreview()">
                    <option value="default">Default - Rounded</option>
                    <option value="circular">Circular</option>
                    <option value="full-width">Full Width</option>
                    <option value="contained">Contained Box</option>
                    <option value="none">Hide Image</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Padding Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="padding" onchange="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="xlarge">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Border Radius</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="borderRadius" onchange="updatePreview()">
                    <option value="none">No Radius</option>
                    <option value="small">Small (4px)</option>
                    <option value="medium">Medium (8px)</option>
                    <option value="large">Large (16px)</option>
                    <option value="xl">Extra Large (24px)</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Banner Display Mode</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="bannerMode" onchange="updatePreview()">
                    <option value="none">No Banner</option>
                    <option value="background">Background</option>
                    <option value="top">Top Banner</option>
                    <option value="bottom">Bottom Banner</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Banner Opacity (%)</label>
                <input type="range" min="0" max="100" value="30" class="w-full section-style" data-style="bannerOpacity" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Banner Overlay Color</label>
                <input type="color" value="#000000" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bannerOverlay" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Banner Overlay Opacity (%)</label>
                <input type="range" min="0" max="100" value="50" class="w-full section-style" data-style="bannerOverlayOpacity" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Banner Blur (px)</label>
                <input type="range" min="0" max="10" value="0" class="w-full section-style" data-style="bannerBlur" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Banner Height</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="bannerHeight" onchange="updatePreview()">
                    <option value="small">Small (200px)</option>
                    <option value="medium">Medium (300px)</option>
                    <option value="large">Large (400px)</option>
                    <option value="full">Full Height</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Shadow Effect</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">No Shadow</option>
                    <option value="soft">Soft Shadow</option>
                    <option value="medium">Medium Shadow</option>
                    <option value="large">Large Shadow</option>
                    <option value="inner">Inner Shadow</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Shadow</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="textShadow" onchange="updatePreview()">
                    <option value="none">No Shadow</option>
                    <option value="soft">Soft Shadow</option>
                    <option value="strong">Strong Shadow</option>
                    <option value="glow">Glow Effect</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Animation Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="animation" onchange="updatePreview()">
                    <option value="none">No Animation</option>
                    <option value="fade">Fade In</option>
                    <option value="slide">Slide Up</option>
                    <option value="zoom">Zoom In</option>
                    <option value="bounce">Bounce</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Font Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="fontSize" onchange="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium" selected>Medium</option>
                    <option value="large">Large</option>
                    <option value="xlarge">Extra Large</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const bgColor = style.bg || '#059669';
        const secondaryBg = style.secondaryBg || '#10b981';
        const textColor = style.text || '#ffffff';
        const layoutStyle = style.layoutStyle || 'classic';
        const textAlign = style.textAlign || 'center';
        const contentPosition = style.contentPosition || 'center';
        const imageStyle = style.imageStyle || 'default';
        const padding = style.padding || 'medium';
        const borderRadius = style.borderRadius || 'medium';
        const shadow = style.shadow || 'none';
        const textShadow = style.textShadow || 'none';
        const animation = style.animation || 'none';
        const fontSize = style.fontSize || 'medium';

        // Banner image properties
        const bannerImage = data.bannerImage || '';
        const bannerMode = style.bannerMode || 'none';
        const bannerOpacity = style.bannerOpacity || 30;
        const bannerOverlay = style.bannerOverlay || '#000000';
        const bannerOverlayOpacity = style.bannerOverlayOpacity || 50;
        const bannerBlur = style.bannerBlur || 0;
        const bannerHeight = style.bannerHeight || 'medium';

        // Padding mapping
        const paddingMap = {
            small: 'py-8 px-4',
            medium: 'py-16 px-6',
            large: 'py-24 px-8',
            xlarge: 'py-32 px-10'
        };

        // Border radius mapping
        const borderRadiusMap = {
            none: '0px',
            small: '4px',
            medium: '8px',
            large: '16px',
            xl: '24px'
        };

        // Content position mapping
        const positionMap = {
            top: 'items-start',
            center: 'items-center',
            bottom: 'items-end'
        };

        // Banner height mapping
        const bannerHeights = {
            small: '200px',
            medium: '300px',
            large: '400px',
            full: '100%'
        };

        // Shadow mapping
        const shadowMap = {
            none: 'none',
            soft: '0 2px 8px rgba(0,0,0,0.1)',
            medium: '0 4px 16px rgba(0,0,0,0.15)',
            large: '0 8px 32px rgba(0,0,0,0.2)',
            inner: 'inset 0 2px 8px rgba(0,0,0,0.1)'
        };

        // Text shadow mapping
        const textShadowMap = {
            none: 'none',
            soft: '0 1px 3px rgba(0,0,0,0.3)',
            strong: '0 2px 6px rgba(0,0,0,0.5)',
            glow: `0 0 20px ${bgColor}, 0 0 40px ${bgColor}`
        };

        // Animation mapping
        const animationMap = {
            none: '',
            fade: 'animation: fadeIn 0.6s ease-out;',
            slide: 'animation: slideUp 0.6s ease-out;',
            zoom: 'animation: zoomIn 0.6s ease-out;',
            bounce: 'animation: bounceIn 0.8s ease-out;'
        };

        // Font size mapping
        const fontSizeMap = {
            small: { title: 'text-2xl md:text-3xl', tagline: 'text-base md:text-lg' },
            medium: { title: 'text-3xl md:text-4xl', tagline: 'text-lg md:text-xl' },
            large: { title: 'text-4xl md:text-5xl', tagline: 'text-xl md:text-2xl' },
            xlarge: { title: 'text-5xl md:text-6xl', tagline: 'text-2xl md:text-3xl' }
        };

        const fontSizes = fontSizeMap[fontSize];
        const animationCSS = animationMap[animation];

        // Add keyframe animations
        const animations = `
            <style>
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes zoomIn {
                    from { opacity: 0; transform: scale(0.9); }
                    to { opacity: 1; transform: scale(1); }
                }
                @keyframes bounceIn {
                    0% { opacity: 0; transform: scale(0.3); }
                    50% { opacity: 1; transform: scale(1.05); }
                    70% { transform: scale(0.9); }
                    100% { transform: scale(1); }
                }
            </style>
        `;

        // Generate banner HTML based on mode
        const generateBanner = (mode) => {
            if (!bannerImage || mode === 'none') return '';

            const opacity = bannerOpacity / 100;
            const overlayOp = bannerOverlayOpacity / 100;
            const blur = bannerBlur > 0 ? `blur(${bannerBlur}px)` : 'none';

            if (mode === 'background') {
                return `
                    <div class="absolute inset-0 overflow-hidden">
                        <img src="${bannerImage}" class="w-full h-full object-cover" style="opacity: ${opacity}; filter: ${blur};">
                        <div class="absolute inset-0" style="background: ${bannerOverlay}; opacity: ${overlayOp};"></div>
                    </div>
                `;
            } else if (mode === 'top' || mode === 'bottom') {
                const positionClass = mode === 'top' ? 'top-0' : 'bottom-0';
                const height = bannerHeights[bannerHeight];
                return `
                    <div class="absolute ${positionClass} left-0 right-0 overflow-hidden" style="height: ${height};">
                        <img src="${bannerImage}" class="w-full h-full object-cover" style="opacity: ${opacity}; filter: ${blur};">
                        <div class="absolute inset-0" style="background: ${bannerOverlay}; opacity: ${overlayOp};"></div>
                    </div>
                `;
            }
            return '';
        };

        // Generate image HTML based on style
        const generateImage = () => {
            if (!data.image || imageStyle === 'none') {
                return '<div class="text-6xl mb-4">🎉</div>';
            }

            const radius = borderRadiusMap[borderRadius];

            switch (imageStyle) {
                case 'circular':
                    return `<img src="${data.image}" class="w-32 h-32 object-cover mb-6 rounded-full mx-auto shadow-lg">`;
                case 'full-width':
                    return `<img src="${data.image}" class="w-full h-56 object-cover mb-6" style="border-radius: ${radius};">`;
                case 'contained':
                    return `<div class="max-w-md mx-auto mb-6 p-2 bg-white/10 backdrop-blur-sm" style="border-radius: ${radius};"><img src="${data.image}" class="w-full h-48 object-cover" style="border-radius: ${radius};"></div>`;
                default:
                    return `<img src="${data.image}" class="w-full h-48 object-cover mb-6 shadow-lg" style="border-radius: ${radius};">`;
            }
        };

        // Generate content based on layout style
        const generateContent = () => {
            const titleStyle = `text-shadow: ${textShadowMap[textShadow]}; text-align: ${textAlign};`;
            const content = `
                ${generateImage()}
                <h1 class="${fontSizes.title} font-bold mb-3" style="${titleStyle}">${data.name || 'Event Name'}</h1>
                <p class="${fontSizes.tagline} opacity-90" style="text-align: ${textAlign};">${data.tagline || 'Join us for an inspiring event'}</p>
            `;

            switch (layoutStyle) {
                case 'classic':
                    return `<div class="relative z-10 max-w-2xl mx-auto" style="${animationCSS}">${content}</div>`;

                case 'modern':
                    return `
                        <div class="relative z-10 grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
                            <div class="order-2 md:order-1" style="text-align: ${textAlign};">
                                <h1 class="text-3xl font-bold mb-2">${data.name || 'Event Name'}</h1>
                                <p class="text-lg opacity-90">${data.tagline || 'Join us for an inspiring event'}</p>
                            </div>
                            <div class="order-1 md:order-2">${generateImage()}</div>
                        </div>
                    `;

                case 'minimal':
                    return `
                        <div class="relative z-10 max-w-xl mx-auto">
                            ${data.image && imageStyle !== 'none' ? `<div class="mb-8">${generateImage()}</div>` : ''}
                            <h1 class="text-2xl font-light mb-3 tracking-wide" style="text-align: ${textAlign};">${data.name || 'Event Name'}</h1>
                            <p class="text-base opacity-80 font-light" style="text-align: ${textAlign};">${data.tagline || 'Join us for an inspiring event'}</p>
                        </div>
                    `;

                case 'bold':
                    return `
                        <div class="relative z-10 max-w-3xl mx-auto">
                            ${data.image && imageStyle !== 'none' ? `<div class="mb-10">${generateImage()}</div>` : '<div class="text-8xl mb-6">🎉</div>'}
                            <h1 class="text-5xl md:text-6xl font-extrabold mb-4 leading-tight" style="text-align: ${textAlign};">${data.name || 'Event Name'}</h1>
                            <p class="text-xl md:text-2xl font-medium" style="text-align: ${textAlign};">${data.tagline || 'Join us for an inspiring event'}</p>
                        </div>
                    `;

                case 'overlay':
                    const overlayImage = data.image ? `
                        <div class="absolute inset-0 overflow-hidden">
                            <img src="${data.image}" class="w-full h-full object-cover opacity-40">
                            <div class="absolute inset-0 bg-black/40"></div>
                        </div>
                    ` : '';
                    return `
                        ${overlayImage}
                        <div class="relative z-10 max-w-2xl mx-auto">
                            <h1 class="text-4xl font-bold mb-3 drop-shadow-lg" style="text-align: ${textAlign};">${data.name || 'Event Name'}</h1>
                            <p class="text-xl opacity-95 drop-shadow-md" style="text-align: ${textAlign};">${data.tagline || 'Join us for an inspiring event'}</p>
                        </div>
                    `;

                case 'gradient':
                    return `
                        <div class="relative z-10 max-w-2xl mx-auto" style="${animationCSS}">
                            ${data.image && imageStyle !== 'none' ? `<div class="mb-8">${generateImage()}</div>` : '<div class="text-6xl mb-4">🎉</div>'}
                            <h1 class="${fontSizes.title} font-bold mb-3" style="${titleStyle}">${data.name || 'Event Name'}</h1>
                            <p class="${fontSizes.tagline} opacity-90" style="text-align: ${textAlign};">${data.tagline || 'Join us for an inspiring event'}</p>
                        </div>
                    `;

                case 'card':
                    return `
                        <div class="relative z-10 max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12" style="box-shadow: ${shadowMap[shadow] || '0 8px 32px rgba(0,0,0,0.2)'}; ${animationCSS}">
                            ${data.image && imageStyle !== 'none' ? `<div class="mb-6">${generateImage()}</div>` : '<div class="text-6xl mb-6">🎉</div>'}
                            <h1 class="${fontSizes.title} font-bold mb-3" style="${titleStyle}">${data.name || 'Event Name'}</h1>
                            <p class="${fontSizes.tagline} opacity-90" style="text-align: ${textAlign};">${data.tagline || 'Join us for an inspiring event'}</p>
                        </div>
                    `;

                case 'geometric':
                    return `
                        <div class="relative z-10 max-w-3xl mx-auto" style="${animationCSS}">
                            <div class="absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                            <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 transform rotate-45"></div>
                            <div class="relative">
                                ${data.image && imageStyle !== 'none' ? `<div class="mb-6">${generateImage()}</div>` : '<div class="text-6xl mb-6">🎉</div>'}
                                <h1 class="${fontSizes.title} font-bold mb-3" style="${titleStyle}">${data.name || 'Event Name'}</h1>
                                <p class="${fontSizes.tagline} opacity-90" style="text-align: ${textAlign};">${data.tagline || 'Join us for an inspiring event'}</p>
                            </div>
                        </div>
                    `;

                case 'wave':
                    return `
                        <div class="relative z-10 max-w-2xl mx-auto" style="${animationCSS}">
                            <svg class="absolute bottom-0 left-0 w-full" style="transform: translateY(50%);" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
                                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
                                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
                            </svg>
                            ${data.image && imageStyle !== 'none' ? `<div class="mb-6">${generateImage()}</div>` : '<div class="text-6xl mb-6">🎉</div>'}
                            <h1 class="${fontSizes.title} font-bold mb-3" style="${titleStyle}">${data.name || 'Event Name'}</h1>
                            <p class="${fontSizes.tagline} opacity-90" style="text-align: ${textAlign};">${data.tagline || 'Join us for an inspiring event'}</p>
                        </div>
                    `;

                case 'diagonal':
                    return `
                        <div class="relative z-10 grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto" style="${animationCSS}">
                            <div class="order-2 md:order-1 bg-white/10 backdrop-blur-sm rounded-2xl p-8 transform md:-rotate-2" style="box-shadow: ${shadowMap[shadow] || '0 4px 16px rgba(0,0,0,0.15)'};">
                                <h1 class="${fontSizes.title} font-bold mb-3" style="${titleStyle}">${data.name || 'Event Name'}</h1>
                                <p class="${fontSizes.tagline} opacity-90" style="text-align: ${textAlign};">${data.tagline || 'Join us for an inspiring event'}</p>
                            </div>
                            <div class="order-1 md:order-2 transform md:rotate-2">
                                ${data.image && imageStyle !== 'none' ? generateImage() : '<div class="text-8xl text-center">🎉</div>'}
                            </div>
                        </div>
                    `;

                case 'stacked':
                    return `
                        <div class="relative z-10 max-w-xl mx-auto space-y-6" style="${animationCSS}">
                            ${data.image && imageStyle !== 'none' ? `<div class="transform hover:scale-105 transition-transform duration-300">${generateImage()}</div>` : '<div class="text-6xl text-center mb-4">🎉</div>'}
                            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6" style="box-shadow: ${shadowMap[shadow] || '0 4px 16px rgba(0,0,0,0.15)'};">
                                <h1 class="${fontSizes.title} font-bold mb-3" style="${titleStyle}">${data.name || 'Event Name'}</h1>
                            </div>
                            <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-6" style="box-shadow: ${shadowMap[shadow] || '0 2px 8px rgba(0,0,0,0.1)'};">
                                <p class="${fontSizes.tagline} opacity-90" style="text-align: ${textAlign};">${data.tagline || 'Join us for an inspiring event'}</p>
                            </div>
                        </div>
                    `;

                case 'floating':
                    return `
                        <div class="relative z-10 max-w-2xl mx-auto" style="${animationCSS}">
                            <div class="relative">
                                <div class="absolute top-0 left-1/4 w-24 h-24 bg-white/5 rounded-full animate-pulse" style="animation-delay: 0s;"></div>
                                <div class="absolute top-1/4 right-1/4 w-16 h-16 bg-white/5 rounded-full animate-pulse" style="animation-delay: 0.3s;"></div>
                                <div class="absolute bottom-1/4 left-1/3 w-20 h-20 bg-white/5 rounded-full animate-pulse" style="animation-delay: 0.6s;"></div>

                                <div class="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 transform hover:scale-105 transition-transform duration-300" style="box-shadow: ${shadowMap[shadow] || '0 8px 32px rgba(0,0,0,0.2)'};">
                                    ${data.image && imageStyle !== 'none' ? `<div class="mb-6">${generateImage()}</div>` : '<div class="text-6xl mb-6 text-center">🎉</div>'}
                                    <h1 class="${fontSizes.title} font-bold mb-3" style="${titleStyle}">${data.name || 'Event Name'}</h1>
                                    <p class="${fontSizes.tagline} opacity-90" style="text-align: ${textAlign};">${data.tagline || 'Join us for an inspiring event'}</p>
                                </div>
                            </div>
                        </div>
                    `;

                default:
                    return `<div class="relative z-10 max-w-2xl mx-auto" style="${animationCSS}">${content}</div>`;
            }
        };

        // Background style based on layout
        const getBackground = () => {
            if (layoutStyle === 'gradient') {
                return `background: linear-gradient(135deg, ${bgColor} 0%, ${secondaryBg} 100%);`;
            }
            return `background: ${bgColor};`;
        };

        return `
            ${animations}
            <div class="relative ${paddingMap[padding]} ${positionMap[contentPosition]} flex overflow-hidden" style="${getBackground()} color: ${textColor}; min-height: 300px; box-shadow: ${shadowMap[shadow]};">
                ${generateBanner(bannerMode)}
                ${generateContent()}
            </div>
        `;
    }
};
