// Dynamic Item Templates for Birthday Wishes
// Used by sections that support adding/removing multiple items

window.dynamicItemTemplates = window.dynamicItemTemplates || {};

// Example: Could be used for multiple photos in gallery
window.dynamicItemTemplates.photos = (id, num) => `
    <div class='flex justify-between items-center mb-3'>
        <h5 class='font-medium text-gray-600'>Photo ${num}</h5>
        <button onclick='removeDynamicItem(this)' type='button' class='text-red-600 hover:text-red-800 text-sm px-3 py-1 border border-red-300 rounded hover:bg-red-50'>✕ Remove</button>
    </div>
    <div class='space-y-3'>
        <div class="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-pink-400 cursor-pointer" onclick="this.querySelector('input').click()">
            <div class="text-2xl mb-1">📸</div>
            <div class="text-xs text-gray-600">Click to upload</div>
            <input type="file" class="hidden section-data" data-field="photo-${id}" accept="image/*" onchange="handleImageUpload(this)">
        </div>
        <input type='text' placeholder='Photo caption (optional)' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data' data-field='photo-caption-${id}' oninput='updatePreview()'>
    </div>
`;

// Example: Guest list items
window.dynamicItemTemplates.guests = (id, num) => `
    <div class='flex justify-between items-center mb-3'>
        <h5 class='font-medium text-gray-600'>Guest ${num}</h5>
        <button onclick='removeDynamicItem(this)' type='button' class='text-red-600 hover:text-red-800 text-sm px-3 py-1 border border-red-300 rounded hover:bg-red-50'>✕ Remove</button>
    </div>
    <div class='space-y-3'>
        <input type='text' placeholder='Guest Name' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data' data-field='guest-name-${id}' oninput='updatePreview()'>
        <textarea placeholder='Special message or note...' rows='2' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data' data-field='guest-message-${id}' oninput='updatePreview()'></textarea>
    </div>
`;

// Example: Birthday wishes from different people
window.dynamicItemTemplates.birthdayWishes = (id, num) => `
    <div class='flex justify-between items-center mb-3'>
        <h5 class='font-medium text-gray-600'>Wish ${num}</h5>
        <button onclick='removeDynamicItem(this)' type='button' class='text-red-600 hover:text-red-800 text-sm px-3 py-1 border border-red-300 rounded hover:bg-red-50'>✕ Remove</button>
    </div>
    <div class='space-y-3'>
        <input type='text' placeholder='From (Name)' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data' data-field='wish-from-${id}' oninput='updatePreview()'>
        <textarea placeholder='Birthday wish message...' rows='3' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data' data-field='wish-message-${id}' oninput='updatePreview()'></textarea>
    </div>
`;
