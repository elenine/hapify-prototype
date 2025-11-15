// Video Component for Farewell Party

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.video = {
    name: '🎥 Video Messages',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Video Messages" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="title" value="Video Messages" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Introduction</label>
                <textarea placeholder="Watch heartfelt video messages from friends and colleagues..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="intro" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Video Link (YouTube, Vimeo, etc.)</label>
                <input type="url" placeholder="https://youtube.com/watch?v=..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="videoUrl" oninput="updatePreview()">
                <p class="text-xs text-gray-500 mt-1">Paste the full video URL or embed link</p>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Video Description</label>
                <textarea placeholder="A compilation of messages from the team..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="videoDesc" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Call to Action</label>
                <input type="text" placeholder="Submit your own video message!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="cta" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Submission Link (Optional)</label>
                <input type="url" placeholder="https://forms.google.com/..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="submissionUrl" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#faf5ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const bgColor = style.bg || '#faf5ff';

        // Extract video ID for embedding
        let embedUrl = '';
        if (data.videoUrl) {
            if (data.videoUrl.includes('youtube.com') || data.videoUrl.includes('youtu.be')) {
                const videoId = data.videoUrl.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
                if (videoId) embedUrl = `https://www.youtube.com/embed/${videoId[1]}`;
            } else if (data.videoUrl.includes('vimeo.com')) {
                const videoId = data.videoUrl.match(/vimeo\.com\/(\d+)/);
                if (videoId) embedUrl = `https://player.vimeo.com/video/${videoId[1]}`;
            }
        }

        return `
            <div class="py-12 px-6" style="background: ${bgColor};">
                <div class="max-w-3xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="text-6xl mb-3">🎥</div>
                        <h2 class="text-2xl font-bold mb-2">${data.title || 'Video Messages'}</h2>
                        ${data.intro ? `<p class="text-gray-600">${data.intro}</p>` : ''}
                    </div>

                    ${embedUrl ? `
                        <div class="mb-6">
                            <div class="relative bg-black rounded-xl overflow-hidden shadow-2xl" style="padding-bottom: 56.25%;">
                                <iframe
                                    class="absolute top-0 left-0 w-full h-full"
                                    src="${embedUrl}"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen>
                                </iframe>
                            </div>
                        </div>
                    ` : data.videoUrl ? `
                        <div class="mb-6 p-8 bg-white rounded-xl shadow-lg text-center">
                            <div class="text-4xl mb-3">🎬</div>
                            <a href="${data.videoUrl}" target="_blank" class="text-violet-600 font-medium hover:underline">
                                Watch Video →
                            </a>
                        </div>
                    ` : `
                        <div class="mb-6 p-12 bg-white rounded-xl shadow-lg text-center">
                            <div class="text-6xl mb-3">📹</div>
                            <p class="text-gray-500">Add video link to display here</p>
                        </div>
                    `}

                    ${data.videoDesc ? `
                        <div class="text-center mb-6">
                            <p class="text-gray-700">${data.videoDesc}</p>
                        </div>
                    ` : ''}

                    ${data.submissionUrl ? `
                        <div class="text-center">
                            ${data.cta ? `<p class="text-lg font-medium text-gray-900 mb-4">${data.cta}</p>` : ''}
                            <a href="${data.submissionUrl}" target="_blank" class="inline-block bg-violet-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-violet-700 transition shadow-lg">
                                📤 Submit Your Video
                            </a>
                        </div>
                    ` : data.cta ? `
                        <div class="text-center p-4 bg-violet-50 rounded-lg">
                            <p class="text-gray-700">${data.cta}</p>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }
};
