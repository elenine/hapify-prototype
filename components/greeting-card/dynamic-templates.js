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

// Fun Fact Item Template
window.dynamicItemTemplates.funfact = (itemId, itemNumber) => `
    <div class="flex justify-between items-start">
        <div class="flex-1 space-y-2">
            <div>
                <label class="block text-xs font-medium text-gray-600 mb-1">Fun Fact ${itemNumber}</label>
                <input type="text" placeholder="They can juggle!" class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="fact" oninput="updatePreview()">
            </div>
        </div>
        <button type="button" onclick="removeDynamicItem(this)" class="ml-2 text-red-500 hover:text-red-700 text-sm">✕</button>
    </div>
`;

// Group Wish Item Template
window.dynamicItemTemplates.groupwish = (itemId, itemNumber) => `
    <div class="flex justify-between items-start">
        <div class="flex-1 space-y-2">
            <div>
                <label class="block text-xs font-medium text-gray-600 mb-1">From (Name ${itemNumber})</label>
                <input type="text" placeholder="Sarah" class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="name" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-xs font-medium text-gray-600 mb-1">Birthday Wish</label>
                <textarea placeholder="Wishing you the happiest of birthdays!" rows="2" class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
        </div>
        <button type="button" onclick="removeDynamicItem(this)" class="ml-2 text-red-500 hover:text-red-700 text-sm">✕</button>
    </div>
`;

// Timeline Item Template
window.dynamicItemTemplates.timeline = (itemId, itemNumber) => `
    <div class="flex justify-between items-start">
        <div class="flex-1 space-y-2">
            <div>
                <label class="block text-xs font-medium text-gray-600 mb-1">Date ${itemNumber}</label>
                <input type="text" placeholder="January 2024" class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="date" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-xs font-medium text-gray-600 mb-1">Event</label>
                <input type="text" placeholder="Started a new adventure..." class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="event" oninput="updatePreview()">
            </div>
        </div>
        <button type="button" onclick="removeDynamicItem(this)" class="ml-2 text-red-500 hover:text-red-700 text-sm">✕</button>
    </div>
`;

// Bucket List Item Template
window.dynamicItemTemplates.bucketlist = (itemId, itemNumber) => `
    <div class="flex justify-between items-start">
        <div class="flex-1 space-y-2">
            <div>
                <label class="block text-xs font-medium text-gray-600 mb-1">Goal ${itemNumber}</label>
                <input type="text" placeholder="Travel to Japan" class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="goal" oninput="updatePreview()">
            </div>
        </div>
        <button type="button" onclick="removeDynamicItem(this)" class="ml-2 text-red-500 hover:text-red-700 text-sm">✕</button>
    </div>
`;

// Award Item Template
window.dynamicItemTemplates.award = (itemId, itemNumber) => `
    <div class="flex justify-between items-start">
        <div class="flex-1 space-y-2">
            <div>
                <label class="block text-xs font-medium text-gray-600 mb-1">Award ${itemNumber} Title</label>
                <input type="text" placeholder="Best Sense of Humor" class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="awardName" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-xs font-medium text-gray-600 mb-1">Description (Optional)</label>
                <input type="text" placeholder="Always makes everyone laugh" class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="description" oninput="updatePreview()">
            </div>
        </div>
        <button type="button" onclick="removeDynamicItem(this)" class="ml-2 text-red-500 hover:text-red-700 text-sm">✕</button>
    </div>
`;

// Achievement Item Template
window.dynamicItemTemplates.achievement = (itemId, itemNumber) => `
    <div class="flex justify-between items-start">
        <div class="flex-1 space-y-2">
            <div>
                <label class="block text-xs font-medium text-gray-600 mb-1">Achievement ${itemNumber}</label>
                <input type="text" placeholder="Completed a marathon" class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="achievement" oninput="updatePreview()">
            </div>
        </div>
        <button type="button" onclick="removeDynamicItem(this)" class="ml-2 text-red-500 hover:text-red-700 text-sm">✕</button>
    </div>
`;

// Collage Photo Item Template
window.dynamicItemTemplates.collagePhoto = (itemId, itemNumber) => `
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
        </div>
        <button type="button" onclick="removeDynamicItem(this)" class="ml-2 text-red-500 hover:text-red-700 text-sm">✕</button>
    </div>
`;

// Trivia Item Template
window.dynamicItemTemplates.trivia = (itemId, itemNumber) => `
    <div class="flex justify-between items-start">
        <div class="flex-1 space-y-2">
            <div>
                <label class="block text-xs font-medium text-gray-600 mb-1">Question ${itemNumber}</label>
                <input type="text" placeholder="What's my favorite food?" class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="question" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-xs font-medium text-gray-600 mb-1">Answer</label>
                <input type="text" placeholder="Pizza!" class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="answer" oninput="updatePreview()">
            </div>
        </div>
        <button type="button" onclick="removeDynamicItem(this)" class="ml-2 text-red-500 hover:text-red-700 text-sm">✕</button>
    </div>
`;
