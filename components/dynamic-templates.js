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
    timeline: (id, num) => `
        <div class='flex justify-between items-center mb-3'>
            <h5 class='font-medium text-gray-600'>Milestone ${num}</h5>
            <button onclick='removeDynamicItem(this)' type='button' class='text-red-600 hover:text-red-800 text-sm px-3 py-1 border border-red-300 rounded hover:bg-red-50'>✕ Remove</button>
        </div>
        <div class='space-y-3'>
            <input type='text' placeholder='Date (e.g. June 2020)' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data' data-field='date' oninput='updatePreview()'>
            <input type='text' placeholder='Milestone Title' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data' data-field='title' oninput='updatePreview()'>
            <textarea placeholder='Description...' rows='2' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data' data-field='description' oninput='updatePreview()'></textarea>
        </div>
    `,
    moments: (id, num) => `
        <div class='flex justify-between items-center mb-3'>
            <h5 class='font-medium text-gray-600'>Moment ${num}</h5>
            <button onclick='removeDynamicItem(this)' type='button' class='text-red-600 hover:text-red-800 text-sm px-3 py-1 border border-red-300 rounded hover:bg-red-50'>✕ Remove</button>
        </div>
        <div class='space-y-3'>
            <input type='text' placeholder='Emoji (e.g. ✨)' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data' data-field='emoji' oninput='updatePreview()'>
            <input type='text' placeholder='Moment Title' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data' data-field='title' oninput='updatePreview()'>
            <textarea placeholder='Description...' rows='2' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data' data-field='description' oninput='updatePreview()'></textarea>
        </div>
    `,
    milestones: (id, num) => `
        <div class='flex justify-between items-center mb-3'>
            <h5 class='font-medium text-gray-600'>Milestone ${num}</h5>
            <button onclick='removeDynamicItem(this)' type='button' class='text-red-600 hover:text-red-800 text-sm px-3 py-1 border border-red-300 rounded hover:bg-red-50'>✕ Remove</button>
        </div>
        <div class='space-y-3'>
            <input type='text' placeholder='Year (e.g. 2020)' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='milestone-year-${id}' oninput='updatePreview()'>
            <input type='text' placeholder='Milestone Title' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='milestone-title-${id}' oninput='updatePreview()'>
            <textarea placeholder='Description...' rows='2' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='milestone-desc-${id}' oninput='updatePreview()'></textarea>
        </div>
    `,
    certifications: (id, num) => `
        <div class='flex justify-between items-center mb-3'>
            <h5 class='font-medium text-gray-600'>Certification ${num}</h5>
            <button onclick='removeDynamicItem(this)' type='button' class='text-red-600 hover:text-red-800 text-sm px-3 py-1 border border-red-300 rounded hover:bg-red-50'>✕ Remove</button>
        </div>
        <div class='space-y-3'>
            <input type='text' placeholder='Certification Name' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='cert-name-${id}' oninput='updatePreview()'>
            <input type='text' placeholder='Issuing Organization' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='cert-org-${id}' oninput='updatePreview()'>
            <input type='text' placeholder='Year Obtained' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='cert-year-${id}' oninput='updatePreview()'>
        </div>
    `,
    values: (id, num) => `
        <div class='flex justify-between items-center mb-3'>
            <h5 class='font-medium text-gray-600'>Value ${num}</h5>
            <button onclick='removeDynamicItem(this)' type='button' class='text-red-600 hover:text-red-800 text-sm px-3 py-1 border border-red-300 rounded hover:bg-red-50'>✕ Remove</button>
        </div>
        <div class='space-y-3'>
            <input type='text' placeholder='Icon (emoji)' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='value-icon-${id}' oninput='updatePreview()'>
            <input type='text' placeholder='Value Title' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='value-title-${id}' oninput='updatePreview()'>
            <textarea placeholder='Description...' rows='2' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='value-desc-${id}' oninput='updatePreview()'></textarea>
        </div>
    `,
    locations: (id, num) => `
        <div class='flex justify-between items-center mb-3'>
            <h5 class='font-medium text-gray-600'>Location ${num}</h5>
            <button onclick='removeDynamicItem(this)' type='button' class='text-red-600 hover:text-red-800 text-sm px-3 py-1 border border-red-300 rounded hover:bg-red-50'>✕ Remove</button>
        </div>
        <div class='space-y-3'>
            <input type='text' placeholder='Office Name' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='location-name-${id}' oninput='updatePreview()'>
            <input type='text' placeholder='Address' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='location-address-${id}' oninput='updatePreview()'>
            <input type='text' placeholder='Phone Number' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='location-phone-${id}' oninput='updatePreview()'>
        </div>
    `,
    press: (id, num) => `
        <div class='flex justify-between items-center mb-3'>
            <h5 class='font-medium text-gray-600'>Press Item ${num}</h5>
            <button onclick='removeDynamicItem(this)' type='button' class='text-red-600 hover:text-red-800 text-sm px-3 py-1 border border-red-300 rounded hover:bg-red-50'>✕ Remove</button>
        </div>
        <div class='space-y-3'>
            <input type='text' placeholder='Publication Name' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='press-publication-${id}' oninput='updatePreview()'>
            <input type='text' placeholder='Headline' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='press-headline-${id}' oninput='updatePreview()'>
            <input type='text' placeholder='Date' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='press-date-${id}' oninput='updatePreview()'>
            <input type='text' placeholder='Article URL (optional)' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='press-url-${id}' oninput='updatePreview()'>
        </div>
    `,
    blog: (id, num) => `
        <div class='flex justify-between items-center mb-3'>
            <h5 class='font-medium text-gray-600'>Blog Post ${num}</h5>
            <button onclick='removeDynamicItem(this)' type='button' class='text-red-600 hover:text-red-800 text-sm px-3 py-1 border border-red-300 rounded hover:bg-red-50'>✕ Remove</button>
        </div>
        <div class='space-y-3'>
            <input type='text' placeholder='Post Title' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='blog-title-${id}' oninput='updatePreview()'>
            <textarea placeholder='Excerpt or summary...' rows='2' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='blog-excerpt-${id}' oninput='updatePreview()'></textarea>
            <input type='text' placeholder='Date (e.g. March 15, 2024)' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='blog-date-${id}' oninput='updatePreview()'>
            <input type='text' placeholder='Category/Tag' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='blog-category-${id}' oninput='updatePreview()'>
        </div>
    `
};
