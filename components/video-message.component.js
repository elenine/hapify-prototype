// Video Message Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents['video-message'] = {
    name: '🎥 Video Message',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="A Special Message" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" value="A Special Message" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Video Introduction</label>
                <textarea placeholder="Watch this special video message from my heart to yours..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="intro" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Video URL (YouTube, Vimeo, or other embed link)</label>
                <input type="url" placeholder="https://www.youtube.com/watch?v=..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="videoUrl" oninput="updatePreview()">
                <p class="text-xs text-gray-500 mt-1">Paste a YouTube or Vimeo link</p>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Video Thumbnail (optional)</label>
                <input type="file" accept="image/*" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="thumbnail" onchange="handleImageUpload(this)">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Caption Below Video</label>
                <textarea placeholder="This video captures what words cannot express..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="caption" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f5f3ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Video Frame Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="frameStyle" onchange="updatePreview()">
                    <option value="modern" selected>Modern</option>
                    <option value="classic">Classic Frame</option>
                    <option value="minimal">Minimal</option>
                    <option value="theater">Theater Mode</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const frameStyle = style.frameStyle || 'modern';

        // Extract video ID from YouTube URL
        let videoEmbed = '';
        if (data.videoUrl) {
            let videoId = '';
            if (data.videoUrl.includes('youtube.com') || data.videoUrl.includes('youtu.be')) {
                const match = data.videoUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
                videoId = match ? match[1] : '';
                if (videoId) {
                    videoEmbed = `https://www.youtube.com/embed/${videoId}`;
                }
            } else if (data.videoUrl.includes('vimeo.com')) {
                const match = data.videoUrl.match(/vimeo\.com\/(\d+)/);
                videoId = match ? match[1] : '';
                if (videoId) {
                    videoEmbed = `https://player.vimeo.com/video/${videoId}`;
                }
            }
        }

        let videoHTML = '';

        if (videoEmbed) {
            let frameClass = '';
            let containerClass = 'max-w-4xl mx-auto';

            if (frameStyle === 'modern') {
                frameClass = 'rounded-2xl overflow-hidden shadow-2xl';
            } else if (frameStyle === 'classic') {
                frameClass = 'rounded-lg overflow-hidden border-8 border-white shadow-2xl';
            } else if (frameStyle === 'minimal') {
                frameClass = 'rounded overflow-hidden shadow-lg';
            } else if (frameStyle === 'theater') {
                containerClass = 'max-w-6xl mx-auto';
                frameClass = 'rounded-3xl overflow-hidden shadow-2xl bg-black p-4';
            }

            videoHTML = `
                <div class="${containerClass}">
                    <div class="${frameClass}">
                        <div class="relative" style="padding-bottom: 56.25%; height: 0;">
                            <iframe
                                src="${videoEmbed}"
                                class="absolute top-0 left-0 w-full h-full"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            `;
        } else if (data.thumbnail) {
            videoHTML = `
                <div class="max-w-4xl mx-auto">
                    <div class="relative rounded-2xl overflow-hidden shadow-2xl">
                        <img src="${data.thumbnail}" alt="Video Thumbnail" class="w-full h-auto">
                        <div class="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <div class="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-xl">
                                <div class="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-rose-600 border-b-[12px] border-b-transparent ml-1"></div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else {
            videoHTML = `
                <div class="max-w-4xl mx-auto">
                    <div class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl aspect-video flex flex-col items-center justify-center text-white shadow-2xl">
                        <div class="text-6xl mb-4">🎥</div>
                        <p class="text-xl font-semibold mb-2">Video Preview</p>
                        <p class="text-gray-400">Add a video URL to display your message</p>
                    </div>
                </div>
            `;
        }

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#f5f3ff'}">
                <div class="max-w-6xl mx-auto">
                    <div class="text-center mb-10">
                        <div class="text-5xl mb-4">🎥</div>
                        <h2 class="text-3xl font-bold text-gray-900 mb-4">${data.title || 'A Special Message'}</h2>
                        ${data.intro ? `<p class="text-lg text-gray-600 max-w-3xl mx-auto">${data.intro}</p>` : ''}
                    </div>

                    ${videoHTML}

                    ${data.caption ? `
                        <div class="text-center mt-8 max-w-3xl mx-auto">
                            <p class="text-gray-700 italic text-lg">${data.caption}</p>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }
};
