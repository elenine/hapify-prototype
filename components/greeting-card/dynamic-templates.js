// Dynamic Item Templates for Greeting Card sections
// These templates are used for sections that allow multiple items (like gallery, memories, etc.)

window.dynamicItemTemplates = window.dynamicItemTemplates || {};

// Gallery Item Template
window.dynamicItemTemplates.galleryItem = (itemId, itemNumber) => `
    <div class="flex justify-between items-start">
        <div class="flex-1 space-y-2">
            <div>
                <label class="block text-xs font-medium text-gray-600 mb-1">Photo ${itemNumber}</label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-pink-400 cursor-pointer" onclick="this.querySelector('input').click()">
                    <div class="text-2xl mb-1">📸</div>
                    <div class="text-xs text-gray-600">Upload photo</div>
                    <input type="file" class="hidden section-data" data-field="photo_${itemId}" accept="image/*" onchange="handleImageUpload(this)">
                </div>
            </div>
            <div>
                <label class="block text-xs font-medium text-gray-600 mb-1">Caption (Optional)</label>
                <input type="text" placeholder="Photo caption" class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="caption_${itemId}" oninput="updatePreview()">
            </div>
        </div>
        <button type="button" onclick="removeDynamicItem(this)" class="ml-2 text-red-500 hover:text-red-700 text-sm">✕</button>
    </div>
`;

// Memory Item Template
window.dynamicItemTemplates.memoryItem = (itemId, itemNumber) => `
    <div class="flex justify-between items-start">
        <div class="flex-1 space-y-2">
            <div>
                <label class="block text-xs font-medium text-gray-600 mb-1">Memory ${itemNumber} Title</label>
                <input type="text" placeholder="A Special Moment" class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="memoryTitle_${itemId}" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-xs font-medium text-gray-600 mb-1">Story</label>
                <textarea placeholder="Share a memorable moment..." rows="3" class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="memoryStory_${itemId}" oninput="updatePreview()"></textarea>
            </div>
        </div>
        <button type="button" onclick="removeDynamicItem(this)" class="ml-2 text-red-500 hover:text-red-700 text-sm">✕</button>
    </div>
`;
