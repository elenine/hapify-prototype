// Dynamic Item Templates
// Used by sections that support adding/removing multiple items

window.dynamicItemTemplates = {
    plans: (id, num) => `
        <div class='flex justify-between items-center mb-3'>
            <h5 class='font-medium text-gray-600'>Plan ${num}</h5>
            <button onclick='removeDynamicItem(this)' type='button' class='text-red-600 hover:text-red-800 text-sm px-3 py-1 border border-red-300 rounded hover:bg-red-50'>✕ Remove</button>
        </div>
        <div class='space-y-3'>
            <input type='text' placeholder='Plan Name' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='plan-name-${id}' oninput='updatePreview()'>
            <input type='text' placeholder='$99/mo' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='plan-price-${id}' oninput='updatePreview()'>
            <textarea placeholder='Feature 1&#10;Feature 2&#10;Feature 3' rows='3' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='plan-features-${id}' oninput='updatePreview()'></textarea>
        </div>
    `,
    faqs: (id, num) => `
        <div class='flex justify-between items-center mb-3'>
            <h5 class='font-medium text-gray-600'>Question ${num}</h5>
            <button onclick='removeDynamicItem(this)' type='button' class='text-red-600 hover:text-red-800 text-sm px-3 py-1 border border-red-300 rounded hover:bg-red-50'>✕ Remove</button>
        </div>
        <div class='space-y-3'>
            <input type='text' placeholder='Question' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='faq-q-${id}' oninput='updatePreview()'>
            <textarea placeholder='Answer...' rows='2' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='faq-a-${id}' oninput='updatePreview()'></textarea>
        </div>
    `,
    awards: (id, num) => `
        <div class='flex justify-between items-center mb-3'>
            <h5 class='font-medium text-gray-600'>Award ${num}</h5>
            <button onclick='removeDynamicItem(this)' type='button' class='text-red-600 hover:text-red-800 text-sm px-3 py-1 border border-red-300 rounded hover:bg-red-50'>✕ Remove</button>
        </div>
        <div class='space-y-3'>
            <input type='text' placeholder='Award Name' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='award-name-${id}' oninput='updatePreview()'>
            <input type='text' placeholder='Year' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='award-year-${id}' oninput='updatePreview()'>
            <textarea placeholder='Description...' rows='2' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='award-desc-${id}' oninput='updatePreview()'></textarea>
        </div>
    `,
    features: (id, num) => `
        <div class='flex justify-between items-center mb-3'>
            <h5 class='font-medium text-gray-600'>Feature ${num}</h5>
            <button onclick='removeDynamicItem(this)' type='button' class='text-red-600 hover:text-red-800 text-sm px-3 py-1 border border-red-300 rounded hover:bg-red-50'>✕ Remove</button>
        </div>
        <div class='space-y-3'>
            <input type='text' placeholder='Icon (emoji)' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='feature-icon-${id}' oninput='updatePreview()'>
            <input type='text' placeholder='Feature Title' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='feature-title-${id}' oninput='updatePreview()'>
            <textarea placeholder='Description...' rows='2' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='feature-desc-${id}' oninput='updatePreview()'></textarea>
        </div>
    `,
    steps: (id, num) => `
        <div class='flex justify-between items-center mb-3'>
            <h5 class='font-medium text-gray-600'>Step ${num}</h5>
            <button onclick='removeDynamicItem(this)' type='button' class='text-red-600 hover:text-red-800 text-sm px-3 py-1 border border-red-300 rounded hover:bg-red-50'>✕ Remove</button>
        </div>
        <div class='space-y-3'>
            <input type='text' placeholder='Step Title' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='step-title-${id}' oninput='updatePreview()'>
            <textarea placeholder='Step description...' rows='2' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='step-desc-${id}' oninput='updatePreview()'></textarea>
        </div>
    `,
    stats: (id, num) => `
        <div class='flex justify-between items-center mb-3'>
            <h5 class='font-medium text-gray-600'>Stat ${num}</h5>
            <button onclick='removeDynamicItem(this)' type='button' class='text-red-600 hover:text-red-800 text-sm px-3 py-1 border border-red-300 rounded hover:bg-red-50'>✕ Remove</button>
        </div>
        <div class='grid grid-cols-2 gap-3'>
            <input type='text' placeholder='Value (e.g. 500+)' class='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='stat-value-${id}' oninput='updatePreview()'>
            <input type='text' placeholder='Label (e.g. Projects)' class='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='stat-label-${id}' oninput='updatePreview()'>
        </div>
    `,
    blogPosts: (id, num) => `
        <div class='flex justify-between items-center mb-3'>
            <h5 class='font-medium text-gray-600'>Post ${num}</h5>
            <button onclick='removeDynamicItem(this)' type='button' class='text-red-600 hover:text-red-800 text-sm px-3 py-1 border border-red-300 rounded hover:bg-red-50'>✕ Remove</button>
        </div>
        <div class='space-y-3'>
            <input type='text' placeholder='Post Title' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='postTitle' oninput='updatePreview()'>
            <input type='date' placeholder='Date' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='postDate' oninput='updatePreview()'>
            <textarea placeholder='Brief excerpt or summary...' rows='2' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='postExcerpt' oninput='updatePreview()'></textarea>
            <input type='url' placeholder='Link to full article (optional)' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='postLink' oninput='updatePreview()'>
        </div>
    `,
    timelineEvents: (id, num) => `
        <div class='flex justify-between items-center mb-3'>
            <h5 class='font-medium text-gray-600'>Event ${num}</h5>
            <button onclick='removeDynamicItem(this)' type='button' class='text-red-600 hover:text-red-800 text-sm px-3 py-1 border border-red-300 rounded hover:bg-red-50'>✕ Remove</button>
        </div>
        <div class='space-y-3'>
            <input type='text' placeholder='Year' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='eventYear' oninput='updatePreview()'>
            <input type='text' placeholder='Event Title' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='eventTitle' oninput='updatePreview()'>
            <textarea placeholder='Event description...' rows='2' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='eventDescription' oninput='updatePreview()'></textarea>
        </div>
    `,
    caseStudies: (id, num) => `
        <div class='flex justify-between items-center mb-3'>
            <h5 class='font-medium text-gray-600'>Case Study ${num}</h5>
            <button onclick='removeDynamicItem(this)' type='button' class='text-red-600 hover:text-red-800 text-sm px-3 py-1 border border-red-300 rounded hover:bg-red-50'>✕ Remove</button>
        </div>
        <div class='space-y-3'>
            <input type='text' placeholder='Project Title' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='caseTitle' oninput='updatePreview()'>
            <input type='text' placeholder='Client Name' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='caseClient' oninput='updatePreview()'>
            <textarea placeholder='Challenge...' rows='2' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='caseChallenge' oninput='updatePreview()'></textarea>
            <textarea placeholder='Solution...' rows='2' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='caseSolution' oninput='updatePreview()'></textarea>
            <textarea placeholder='Result...' rows='2' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='caseResult' oninput='updatePreview()'></textarea>
        </div>
    `
};
