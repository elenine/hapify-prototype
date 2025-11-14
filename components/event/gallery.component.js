// Photo Gallery Component
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.gallery = {
    name: '📸 Photo Gallery',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Gallery Title</label>
                <input type="text" placeholder="e.g., Memories"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="galleryTitle" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Photo 1</label>
                <input type="file" accept="image/*"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg section-data"
                    data-field="photo1" onchange="handleImageUpload(this)">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Photo 2</label>
                <input type="file" accept="image/*"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg section-data"
                    data-field="photo2" onchange="handleImageUpload(this)">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Photo 3</label>
                <input type="file" accept="image/*"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg section-data"
                    data-field="photo3" onchange="handleImageUpload(this)">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Photo 4</label>
                <input type="file" accept="image/*"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg section-data"
                    data-field="photo4" onchange="handleImageUpload(this)">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style"
                    data-style="layoutStyle" onchange="updatePreview()">
                    <option value="grid">Grid</option>
                    <option value="masonry">Masonry</option>
                    <option value="carousel">Carousel</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff"
                    class="w-full h-10 border border-gray-300 rounded-lg section-style"
                    data-style="bgColor" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Image Border Radius</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style"
                    data-style="borderRadius" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="rounded">Rounded</option>
                    <option value="full">Circle</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles = {}) => {
        const bgColor = style.bgColor || '#ffffff';
        const layoutStyle = style.layoutStyle || 'grid';
        const borderRadius = style.borderRadius || 'rounded';
        const title = data.galleryTitle || 'Photo Gallery';

        const radiusClasses = {
            none: '',
            rounded: 'rounded-lg',
            full: 'rounded-full'
        };

        const photos = [data.photo1, data.photo2, data.photo3, data.photo4].filter(p => p);

        if (photos.length === 0) {
            return `
                <div class="py-16 px-6 text-center" style="background-color: ${bgColor};">
                    <h2 class="text-3xl font-bold mb-8" style="color: ${globalStyles.primaryColor || '#059669'};">${title}</h2>
                    <p class="text-gray-500">No photos uploaded yet</p>
                </div>
            `;
        }

        let gridClasses = 'grid grid-cols-2 gap-4';
        if (layoutStyle === 'masonry') {
            gridClasses = 'grid grid-cols-2 gap-4';
        } else if (layoutStyle === 'carousel') {
            gridClasses = 'flex overflow-x-auto gap-4';
        }

        const photosHtml = photos.map(photo => `
            <img src="${photo}" alt="Gallery photo" class="w-full h-48 object-cover ${radiusClasses[borderRadius]} shadow-md">
        `).join('');

        return `
            <div class="py-16 px-6" style="background-color: ${bgColor};">
                <h2 class="text-3xl font-bold mb-8 text-center" style="color: ${globalStyles.primaryColor || '#059669'};">${title}</h2>
                <div class="${gridClasses} max-w-4xl mx-auto">
                    ${photosHtml}
                </div>
            </div>
        `;
    }
};
