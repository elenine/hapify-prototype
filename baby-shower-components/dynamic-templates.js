// Dynamic Item Templates for Baby Shower
// Used by sections that support adding/removing multiple items

window.dynamicItemTemplates = {
    // Schedule Item Template
    schedule: (itemId, itemNumber) => `
        <div class="flex items-start gap-3">
            <div class="flex-1">
                <label class="block text-xs font-medium text-gray-600 mb-1">Time</label>
                <input type="text" placeholder="2:00 PM" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 text-sm section-data" data-field="time" oninput="updatePreview()">
            </div>
            <div class="flex-1">
                <label class="block text-xs font-medium text-gray-600 mb-1">Activity</label>
                <input type="text" placeholder="Games & Activities" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 text-sm section-data" data-field="activity" oninput="updatePreview()">
            </div>
            <button type="button" onclick="removeDynamicItem(this)" class="mt-6 text-red-500 hover:text-red-700 text-sm font-medium">Remove</button>
        </div>
    `
};
