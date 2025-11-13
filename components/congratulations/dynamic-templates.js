// Dynamic Item Templates for Congratulations Card
// Used by sections that support adding/removing multiple items

window.dynamicItemTemplates = window.dynamicItemTemplates || {};

// Milestone items
window.dynamicItemTemplates.milestone = (id, num) => `
    <div class='flex justify-between items-center mb-3'>
        <h5 class='font-medium text-gray-600'>Milestone ${num}</h5>
        <button onclick='removeDynamicItem(this)' type='button' class='text-red-600 hover:text-red-800 text-sm px-3 py-1 border border-red-300 rounded hover:bg-red-50'>✕ Remove</button>
    </div>
    <div class='space-y-3'>
        <input type='text' placeholder='Number (e.g., 5+, 100K)' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data' data-field='number' oninput='updatePreview()'>
        <input type='text' placeholder='Label (e.g., Years, Projects)' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data' data-field='label' oninput='updatePreview()'>
        <input type='text' placeholder='Description' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data' data-field='description' oninput='updatePreview()'>
    </div>
`;

// Timeline event items
window.dynamicItemTemplates.timeline = (id, num) => `
    <div class='flex justify-between items-center mb-3'>
        <h5 class='font-medium text-gray-600'>Event ${num}</h5>
        <button onclick='removeDynamicItem(this)' type='button' class='text-red-600 hover:text-red-800 text-sm px-3 py-1 border border-red-300 rounded hover:bg-red-50'>✕ Remove</button>
    </div>
    <div class='space-y-3'>
        <input type='text' placeholder='Year (e.g., 2023)' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data' data-field='year' oninput='updatePreview()'>
        <input type='text' placeholder='Event Title' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data' data-field='title' oninput='updatePreview()'>
        <textarea placeholder='Event description...' rows='2' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data' data-field='description' oninput='updatePreview()'></textarea>
    </div>
`;

// Recognition/Award items
window.dynamicItemTemplates.recognition = (id, num) => `
    <div class='flex justify-between items-center mb-3'>
        <h5 class='font-medium text-gray-600'>Award ${num}</h5>
        <button onclick='removeDynamicItem(this)' type='button' class='text-red-600 hover:text-red-800 text-sm px-3 py-1 border border-red-300 rounded hover:bg-red-50'>✕ Remove</button>
    </div>
    <div class='space-y-3'>
        <input type='text' placeholder='Icon (emoji, e.g., 🏆)' value='🏆' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data' data-field='icon' oninput='updatePreview()'>
        <input type='text' placeholder='Award Title' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data' data-field='title' oninput='updatePreview()'>
        <textarea placeholder='Award description...' rows='2' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data' data-field='description' oninput='updatePreview()'></textarea>
    </div>
`;
