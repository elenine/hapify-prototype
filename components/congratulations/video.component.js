// Video component for congratulations card
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.video = {
    name: '🎥 Video Message',
    allowMultiple: true,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Video URL</label>
                <input type="text" class="section-data w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-field="videoUrl" placeholder="https://youtube.com/..." onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input type="text" class="section-data w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-field="title" placeholder="A Special Message for You" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Description (Optional)</label>
                <textarea class="section-data w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-field="description" rows="2" placeholder="Watch this special congratulations message..." onchange="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="section-style w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-style="layout" onchange="updatePreview()">
                    <option value="full">Full Width</option>
                    <option value="centered">Centered</option>
                    <option value="card">Card Style</option>
                    <option value="framed">Framed</option>
                    <option value="modern">Modern</option>
                    <option value="featured">Featured</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Aspect Ratio</label>
                <select class="section-style w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-style="aspectRatio" onchange="updatePreview()">
                    <option value="16-9">16:9 (Widescreen)</option>
                    <option value="4-3">4:3 (Standard)</option>
                    <option value="1-1">1:1 (Square)</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const videoUrl = data.videoUrl || '';
        const title = data.title || 'A Special Message for You';
        const description = data.description || '';
        const layout = style.layout || 'full';
        const aspectRatio = style.aspectRatio || '16-9';

        const aspectClass = aspectRatio === '16-9' ? 'aspect-video' : aspectRatio === '4-3' ? 'aspect-[4/3]' : 'aspect-square';

        const videoPlaceholder = `
            <div class="w-full ${aspectClass} bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div class="text-center text-white">
                    <div class="text-6xl mb-4">🎥</div>
                    <p class="text-xl">Video Player</p>
                    <p class="text-sm opacity-70 mt-2">Add a video URL to display here</p>
                </div>
            </div>
        `;

        if (layout === 'full') {
            return `
                <div class="relative">
                    <div class="p-6 bg-white">
                        <h3 class="text-3xl font-bold mb-3 text-center" style="color: ${globalStyles.primaryColor};">${title}</h3>
                        ${description ? `<p class="text-base mb-6 text-center opacity-80" style="color: ${globalStyles.textColor};">${description}</p>` : ''}
                    </div>
                    ${videoPlaceholder}
                </div>
            `;
        } else if (layout === 'centered') {
            return `
                <div class="p-6">
                    <div class="max-w-3xl mx-auto">
                        <h3 class="text-3xl font-bold mb-3 text-center" style="color: ${globalStyles.primaryColor};">${title}</h3>
                        ${description ? `<p class="text-base mb-6 text-center opacity-80" style="color: ${globalStyles.textColor};">${description}</p>` : ''}
                        <div class="rounded-2xl overflow-hidden shadow-2xl">
                            ${videoPlaceholder}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'card') {
            return `
                <div class="p-6">
                    <div class="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
                        <div class="p-8 text-center">
                            <h3 class="text-3xl font-bold mb-3" style="color: ${globalStyles.primaryColor};">${title}</h3>
                            ${description ? `<p class="text-base mb-6 opacity-80" style="color: ${globalStyles.textColor};">${description}</p>` : ''}
                        </div>
                        <div class="relative">
                            ${videoPlaceholder}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'framed') {
            return `
                <div class="p-6">
                    <div class="max-w-3xl mx-auto">
                        <h3 class="text-3xl font-bold mb-3 text-center" style="color: ${globalStyles.primaryColor};">${title}</h3>
                        ${description ? `<p class="text-base mb-6 text-center opacity-80" style="color: ${globalStyles.textColor};">${description}</p>` : ''}
                        <div class="border-8 rounded-2xl overflow-hidden shadow-2xl" style="border-color: ${globalStyles.primaryColor};">
                            ${videoPlaceholder}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'modern') {
            return `
                <div class="p-6">
                    <div class="max-w-3xl mx-auto">
                        <h3 class="text-3xl font-bold mb-3 text-center" style="color: ${globalStyles.primaryColor};">${title}</h3>
                        ${description ? `<p class="text-base mb-6 text-center opacity-80" style="color: ${globalStyles.textColor};">${description}</p>` : ''}
                        <div class="p-2 rounded-3xl" style="background: linear-gradient(135deg, ${globalStyles.primaryColor}, ${globalStyles.secondaryColor});">
                            <div class="rounded-2xl overflow-hidden">
                                ${videoPlaceholder}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'featured') {
            return `
                <div class="p-6" style="background: linear-gradient(135deg, ${globalStyles.primaryColor}10, ${globalStyles.secondaryColor}10);">
                    <div class="max-w-4xl mx-auto py-8">
                        <div class="text-center mb-8">
                            <div class="inline-block px-6 py-2 rounded-full text-white font-bold mb-4" style="background: linear-gradient(90deg, ${globalStyles.primaryColor}, ${globalStyles.secondaryColor});">
                                FEATURED VIDEO
                            </div>
                            <h3 class="text-4xl font-bold mb-3" style="color: ${globalStyles.primaryColor};">${title}</h3>
                            ${description ? `<p class="text-lg opacity-80" style="color: ${globalStyles.textColor};">${description}</p>` : ''}
                        </div>
                        <div class="rounded-3xl overflow-hidden shadow-2xl">
                            ${videoPlaceholder}
                        </div>
                    </div>
                </div>
            `;
        }

        return `<div class="p-6">
            <h3 class="text-2xl font-bold mb-3" style="color: ${globalStyles.primaryColor};">${title}</h3>
            ${description ? `<p class="text-base mb-4" style="color: ${globalStyles.textColor};">${description}</p>` : ''}
            ${videoPlaceholder}
        </div>`;
    }
};
