// Case Study Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.casestudy = {
    name: '📊 Case Study',
    allowMultiple: true,
    info: `
        <div class="space-y-4">
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                <p class="text-xs text-blue-700">💡 Tip: You can add multiple case studies to showcase different projects!</p>
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Project Name</label>
                <input type="text" placeholder="e.g., E-Commerce Platform Redesign" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="projectName" oninput="updatePreview()">
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Client Name</label>
                <input type="text" placeholder="e.g., ABC Corporation" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="clientName" oninput="updatePreview()">
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Industry/Category</label>
                <input type="text" placeholder="e.g., E-Commerce, Technology, Healthcare" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="industry" oninput="updatePreview()">
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">📋 The Challenge</h4>
                <textarea placeholder="Describe the problem or challenge the client was facing..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="challenge" oninput="updatePreview()"></textarea>
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">💡 Our Solution</h4>
                <textarea placeholder="Explain how you solved the problem and your approach..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="solution" oninput="updatePreview()"></textarea>
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">🎯 Results & Impact</h4>
                <textarea placeholder="Share the outcomes, improvements, and success metrics..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="results" oninput="updatePreview()"></textarea>
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">📊 Key Metrics</h4>
                <div class="space-y-3">
                    <div>
                        <label class="block text-xs text-gray-600 mb-1">Metric 1</label>
                        <div class="grid grid-cols-2 gap-2">
                            <input type="text" placeholder="150%" class="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="metric1value" oninput="updatePreview()">
                            <input type="text" placeholder="Increase in Sales" class="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="metric1label" oninput="updatePreview()">
                        </div>
                    </div>
                    <div>
                        <label class="block text-xs text-gray-600 mb-1">Metric 2 (Optional)</label>
                        <div class="grid grid-cols-2 gap-2">
                            <input type="text" placeholder="40%" class="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="metric2value" oninput="updatePreview()">
                            <input type="text" placeholder="Time Saved" class="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="metric2label" oninput="updatePreview()">
                        </div>
                    </div>
                    <div>
                        <label class="block text-xs text-gray-600 mb-1">Metric 3 (Optional)</label>
                        <div class="grid grid-cols-2 gap-2">
                            <input type="text" placeholder="5K+" class="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="metric3value" oninput="updatePreview()">
                            <input type="text" placeholder="New Users" class="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="metric3label" oninput="updatePreview()">
                        </div>
                    </div>
                </div>
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">🖼️ Project Image (Optional)</h4>
                <input type="file" accept="image/*" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="projectImage" onchange="handleImageUpload(this)">
                <p class="text-xs text-gray-500 mt-1">Upload a screenshot or visual of the project</p>
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Project Duration</label>
                <input type="text" placeholder="e.g., 3 months, 6 weeks" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="duration" oninput="updatePreview()">
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Project Link (Optional)</label>
                <input type="url" placeholder="https://project-url.com" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="projectUrl" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="detailed">Detailed View</option>
                    <option value="compact">Compact View</option>
                    <option value="visual">Visual Focus</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f8fafc" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#0ea5e9" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'detailed';
        const bgColor = style.bg || '#f8fafc';
        const accentColor = style.accent || '#0ea5e9';
        const cardBg = style.cardBg || '#ffffff';

        // Build metrics array
        const metrics = [];
        if (data.metric1value && data.metric1label) {
            metrics.push({ value: data.metric1value, label: data.metric1label });
        }
        if (data.metric2value && data.metric2label) {
            metrics.push({ value: data.metric2value, label: data.metric2label });
        }
        if (data.metric3value && data.metric3label) {
            metrics.push({ value: data.metric3value, label: data.metric3label });
        }

        const metricsHtml = metrics.length > 0 ? `
            <div class="grid ${metrics.length === 1 ? 'grid-cols-1' : metrics.length === 2 ? 'grid-cols-2' : 'grid-cols-3'} gap-4 mb-6">
                ${metrics.map(metric => `
                    <div class="text-center p-4 rounded-lg" style="background: ${accentColor}15;">
                        <div class="text-2xl font-bold mb-1" style="color: ${accentColor};">${metric.value}</div>
                        <div class="text-xs text-gray-600">${metric.label}</div>
                    </div>
                `).join('')}
            </div>
        ` : '';

        if (layout === 'compact') {
            return `
                <div class="py-8 px-6" style="background: ${bgColor};">
                    <div class="max-w-2xl mx-auto">
                        <div class="p-6 rounded-lg shadow-md" style="background: ${cardBg};">
                            <div class="flex items-start justify-between mb-4">
                                <div class="flex-1">
                                    <h3 class="text-xl font-bold mb-1">${data.projectName || 'Case Study Project'}</h3>
                                    ${data.clientName ? `<p class="text-sm text-gray-600 mb-1">Client: ${data.clientName}</p>` : ''}
                                    ${data.industry ? `<span class="inline-block px-2 py-1 text-xs rounded-full" style="background: ${accentColor}20; color: ${accentColor};">${data.industry}</span>` : ''}
                                </div>
                                ${data.duration ? `<div class="text-right"><div class="text-xs text-gray-500">⏱️ ${data.duration}</div></div>` : ''}
                            </div>

                            ${metricsHtml}

                            ${data.results ? `
                                <div class="mb-4">
                                    <h4 class="font-semibold text-sm mb-2" style="color: ${accentColor};">Results</h4>
                                    <p class="text-sm text-gray-700">${data.results}</p>
                                </div>
                            ` : ''}

                            ${data.projectUrl ? `
                                <a href="${data.projectUrl}" target="_blank" class="inline-block text-sm font-medium hover:underline" style="color: ${accentColor};">
                                    View Project →
                                </a>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'visual') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <div class="max-w-2xl mx-auto">
                        ${data.projectImage ? `
                            <div class="mb-6 rounded-xl overflow-hidden shadow-lg">
                                <img src="${data.projectImage}" alt="${data.projectName || 'Project'}" class="w-full h-48 object-cover">
                            </div>
                        ` : `
                            <div class="mb-6 rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-100 to-cyan-100 h-48 flex items-center justify-center">
                                <div class="text-center">
                                    <div class="text-6xl mb-2">📊</div>
                                    <p class="text-sm text-gray-600">Project Visual</p>
                                </div>
                            </div>
                        `}

                        <div class="p-8 rounded-xl shadow-md" style="background: ${cardBg};">
                            <div class="text-center mb-6">
                                <h3 class="text-2xl font-bold mb-2">${data.projectName || 'Case Study Project'}</h3>
                                ${data.clientName ? `<p class="text-gray-600 mb-2">${data.clientName}</p>` : ''}
                                <div class="flex items-center justify-center gap-3 text-sm text-gray-500">
                                    ${data.industry ? `<span class="px-3 py-1 rounded-full" style="background: ${accentColor}15; color: ${accentColor};">${data.industry}</span>` : ''}
                                    ${data.duration ? `<span>⏱️ ${data.duration}</span>` : ''}
                                </div>
                            </div>

                            ${metricsHtml}

                            ${data.results ? `
                                <div class="text-center">
                                    <p class="text-gray-700 leading-relaxed">${data.results}</p>
                                </div>
                            ` : ''}

                            ${data.projectUrl ? `
                                <div class="text-center mt-6">
                                    <a href="${data.projectUrl}" target="_blank" class="inline-block px-6 py-3 rounded-lg text-white font-medium shadow-lg hover:shadow-xl transition" style="background: ${accentColor};">
                                        View Full Case Study →
                                    </a>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Default: detailed layout
        return `
            <div class="py-12 px-6" style="background: ${bgColor};">
                <div class="max-w-2xl mx-auto">
                    <div class="p-8 rounded-xl shadow-lg" style="background: ${cardBg};">
                        <!-- Header -->
                        <div class="mb-6 pb-6 border-b">
                            <div class="text-center">
                                <div class="text-5xl mb-3">📊</div>
                                <h3 class="text-2xl font-bold mb-2">${data.projectName || 'Case Study Project'}</h3>
                                ${data.clientName ? `<p class="text-lg text-gray-600 mb-3">for ${data.clientName}</p>` : ''}
                                <div class="flex items-center justify-center gap-3 text-sm">
                                    ${data.industry ? `<span class="px-3 py-1 rounded-full" style="background: ${accentColor}20; color: ${accentColor};">${data.industry}</span>` : ''}
                                    ${data.duration ? `<span class="text-gray-500">⏱️ ${data.duration}</span>` : ''}
                                </div>
                            </div>
                        </div>

                        ${data.projectImage ? `
                            <div class="mb-8 rounded-lg overflow-hidden shadow-md">
                                <img src="${data.projectImage}" alt="${data.projectName || 'Project'}" class="w-full h-64 object-cover">
                            </div>
                        ` : ''}

                        <!-- Challenge -->
                        ${data.challenge ? `
                            <div class="mb-6">
                                <h4 class="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span style="color: ${accentColor};">📋</span>
                                    <span>The Challenge</span>
                                </h4>
                                <p class="text-gray-700 leading-relaxed pl-7">${data.challenge}</p>
                            </div>
                        ` : ''}

                        <!-- Solution -->
                        ${data.solution ? `
                            <div class="mb-6">
                                <h4 class="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span style="color: ${accentColor};">💡</span>
                                    <span>Our Solution</span>
                                </h4>
                                <p class="text-gray-700 leading-relaxed pl-7">${data.solution}</p>
                            </div>
                        ` : ''}

                        <!-- Results -->
                        ${data.results ? `
                            <div class="mb-6">
                                <h4 class="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span style="color: ${accentColor};">🎯</span>
                                    <span>Results & Impact</span>
                                </h4>
                                <p class="text-gray-700 leading-relaxed pl-7">${data.results}</p>
                            </div>
                        ` : ''}

                        <!-- Metrics -->
                        ${metricsHtml}

                        <!-- Project Link -->
                        ${data.projectUrl ? `
                            <div class="text-center mt-6 pt-6 border-t">
                                <a href="${data.projectUrl}" target="_blank" class="inline-block px-6 py-3 rounded-lg text-white font-medium shadow-lg hover:shadow-xl transition transform hover:scale-105" style="background: ${accentColor};">
                                    View Full Case Study →
                                </a>
                            </div>
                        ` : ''}

                        ${!data.challenge && !data.solution && !data.results ? `
                            <div class="text-center text-gray-500 py-8">
                                <p>Add case study details to display here</p>
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
    }
};
