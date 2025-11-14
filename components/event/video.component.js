// Video/Media Embed Component
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.video = {
    name: '🎥 Video',
    allowMultiple: true,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="e.g., Watch Our Story"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="videoTitle" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea placeholder="A special video message..." rows="2"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="videoDescription" onkeyup="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Video URL</label>
                <input type="url" placeholder="YouTube, Vimeo, or other video link"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="videoUrl" onkeyup="updatePreview()">
                <p class="text-xs text-gray-500 mt-1">Supported: YouTube, Vimeo embed URLs</p>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f9fafb"
                    class="w-full h-10 border border-gray-300 rounded-lg section-style"
                    data-style="bgColor" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Video Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style"
                    data-style="videoSize" onchange="updatePreview()">
                    <option value="large">Large</option>
                    <option value="medium">Medium</option>
                    <option value="small">Small</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles = {}) => {
        const bgColor = style.bgColor || '#f9fafb';
        const videoSize = style.videoSize || 'large';
        const title = data.videoTitle || 'Video';

        const sizeClasses = {
            large: 'max-w-5xl',
            medium: 'max-w-3xl',
            small: 'max-w-xl'
        };

        let videoHtml = '';
        if (data.videoUrl) {
            // Simple embed - just show the URL as a link for now
            // In a real implementation, you'd parse YouTube/Vimeo URLs and create proper iframes
            videoHtml = `
                <div class="bg-gray-800 rounded-xl overflow-hidden shadow-2xl aspect-video flex items-center justify-center">
                    <div class="text-center text-white">
                        <div class="text-6xl mb-4">🎥</div>
                        <a href="${data.videoUrl}" target="_blank" class="text-blue-300 hover:text-blue-200 underline">
                            Watch Video
                        </a>
                    </div>
                </div>
            `;
        } else {
            videoHtml = `
                <div class="bg-gray-200 rounded-xl overflow-hidden shadow-lg aspect-video flex items-center justify-center">
                    <p class="text-gray-500">No video added yet</p>
                </div>
            `;
        }

        return `
            <div class="py-16 px-6" style="background-color: ${bgColor};">
                <h2 class="text-3xl font-bold mb-4 text-center" style="color: ${globalStyles.primaryColor || '#059669'};">${title}</h2>
                ${data.videoDescription ? `<p class="text-gray-700 mb-8 text-center max-w-2xl mx-auto">${data.videoDescription}</p>` : ''}
                <div class="${sizeClasses[videoSize]} mx-auto">
                    ${videoHtml}
                </div>
            </div>
        `;
    }
};
