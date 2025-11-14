// Party Hosts/Organizers Component for Birthday Party Invitations

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.hosts = {
    name: '👥 Party Hosts',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Hosted By" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Primary Host Name</label>
                <input type="text" placeholder="Sarah Johnson" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="hostName" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Host Title/Relation</label>
                <input type="text" placeholder="Mom / Party Planner" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="hostTitle" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Co-Hosts (Optional)</label>
                <textarea placeholder="Jane Smith - Aunt&#10;Mike Johnson - Dad&#10;The Birthday Committee" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="coHosts" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Contact Information</label>
                <textarea placeholder="📞 (555) 123-4567&#10;📧 sarah@email.com" rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="contact" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef2f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Display Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="hostStyle" oninput="updatePreview()">
                    <option value="centered">Centered</option>
                    <option value="card">Card Style</option>
                    <option value="detailed">Detailed View</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const hostStyle = style.hostStyle || 'centered';
        const coHosts = (data.coHosts || '').split('\n').filter(h => h.trim());

        if (hostStyle === 'detailed') {
            return `
                <div class="py-16 px-6" style="background: ${style.bg || '#fef2f2'}">
                    <div class="max-w-4xl mx-auto">
                        <div class="text-center mb-12">
                            <div class="text-6xl mb-4">👥</div>
                            <h2 class="text-4xl font-bold mb-3" style="background: linear-gradient(to right, #ec4899, #f43f5e); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">${data.title || 'Hosted By'}</h2>
                        </div>
                        <div class="grid md:grid-cols-${coHosts.length > 0 ? '2' : '1'} gap-8">
                            <div class="bg-white rounded-2xl p-8 shadow-lg text-center">
                                <div class="text-5xl mb-4">🌟</div>
                                <h3 class="text-2xl font-bold text-gray-900 mb-2">${data.hostName || 'Host Name'}</h3>
                                ${data.hostTitle ? `<p class="text-lg text-pink-600 mb-4">${data.hostTitle}</p>` : ''}
                                ${data.contact ? `<div class="text-gray-700 whitespace-pre-line text-sm mt-4 pt-4 border-t border-gray-200">${data.contact}</div>` : ''}
                            </div>
                            ${coHosts.length > 0 ? `
                                <div class="bg-white rounded-2xl p-8 shadow-lg">
                                    <div class="text-center mb-6">
                                        <div class="text-4xl mb-2">🎉</div>
                                        <h4 class="text-xl font-bold text-gray-900">Co-Hosts</h4>
                                    </div>
                                    <div class="space-y-3">
                                        ${coHosts.map(host => `<div class="text-gray-700 text-center">• ${host}</div>`).join('')}
                                    </div>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        if (hostStyle === 'card') {
            return `
                <div class="py-12 px-6" style="background: ${style.bg || '#fef2f2'}">
                    <div class="max-w-3xl mx-auto">
                        <div class="bg-white rounded-xl p-10 shadow-md">
                            <div class="text-center mb-8">
                                <div class="text-5xl mb-4">👥</div>
                                <h3 class="text-3xl font-bold text-gray-900">${data.title || 'Hosted By'}</h3>
                            </div>
                            <div class="text-center mb-6">
                                <h4 class="text-2xl font-bold text-pink-600 mb-2">${data.hostName || 'Host Name'}</h4>
                                ${data.hostTitle ? `<p class="text-lg text-gray-600">${data.hostTitle}</p>` : ''}
                            </div>
                            ${coHosts.length > 0 ? `
                                <div class="mb-6 pt-6 border-t border-gray-200">
                                    <h5 class="text-sm font-bold text-gray-900 uppercase mb-3 text-center">Co-Hosts</h5>
                                    <div class="text-gray-700 text-center space-y-1">
                                        ${coHosts.map(host => `<div>${host}</div>`).join('')}
                                    </div>
                                </div>
                            ` : ''}
                            ${data.contact ? `<div class="pt-6 border-t border-gray-200 text-center text-gray-700 whitespace-pre-line text-sm">${data.contact}</div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#fef2f2'}">
                <div class="max-w-3xl mx-auto text-center">
                    <div class="text-5xl mb-4">👥</div>
                    <h3 class="text-3xl font-bold mb-6 text-gray-900">${data.title || 'Hosted By'}</h3>
                    <div class="text-2xl font-bold text-pink-600 mb-2">${data.hostName || 'Host Name'}</div>
                    ${data.hostTitle ? `<p class="text-lg text-gray-600 mb-6">${data.hostTitle}</p>` : ''}
                    ${coHosts.length > 0 ? `
                        <div class="mt-8 pt-8 border-t border-gray-200">
                            <h5 class="text-sm font-bold text-gray-900 uppercase mb-4">Co-Hosts</h5>
                            <div class="text-gray-700 space-y-2">
                                ${coHosts.map(host => `<div>${host}</div>`).join('')}
                            </div>
                        </div>
                    ` : ''}
                    ${data.contact ? `<div class="mt-8 text-gray-700 whitespace-pre-line">${data.contact}</div>` : ''}
                </div>
            </div>
        `;
    }
};
