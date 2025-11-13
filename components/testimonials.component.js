// Testimonials Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.testimonials = {
                name: '💬 Testimonials',
                allowMultiple: false,
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                            <input type="text" placeholder="What Clients Say" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="title" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Testimonial</label>
                            <textarea placeholder="Add a client testimonial..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="testimonial" oninput="updatePreview()"></textarea>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Client Name</label>
                            <input type="text" placeholder="Client Name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="client" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                render: (data, style) => `
                    <div class="py-12 px-6" style="background: ${style.bg || '#ffffff'}">
                        <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'What Clients Say'}</h2>
                        <div class="max-w-md mx-auto">
                            <div class="p-6 bg-blue-50 rounded-lg">
                                <div class="text-3xl mb-3 text-center">💬</div>
                                <p class="text-gray-700 italic text-center mb-4">"${data.testimonial || 'Add a client testimonial...'}"</p>
                                <div class="text-center font-semibold text-sm">- ${data.client || 'Client Name'}</div>
                            </div>
                        </div>
                    </div>
                `
            };
