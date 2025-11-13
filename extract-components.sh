#!/bin/bash

# Script to extract section components from business-portfolio.html
# and create individual component files

echo "Extracting components from business-portfolio.html..."

# This script provides a template for manual extraction
# Due to the complexity of JavaScript parsing in bash, components should be:
# 1. Manually copied from the sectionTemplates object
# 2. Wrapped in the window.sectionComponents[name] pattern
# 3. Saved as individual .js files

echo ""
echo "To complete component extraction:"
echo "1. Open business-portfolio.html"
echo "2. Find the 'const sectionTemplates = {' object"
echo "3. For each section (layout, hero, about, etc.):"
echo "   - Copy the entire section object"
echo "   - Create a new file: components/{name}.component.js"
echo "   - Wrap it with: window.sectionComponents = window.sectionComponents || {};"
echo "   - Add: window.sectionComponents.{name} = { ...copied content... };"
echo ""
echo "Example structure for each component file:"
echo "----------------------------------------"
cat << 'EOF'
// Section Name Component
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.sectionname = {
    name: '📋 Section Name',
    allowMultiple: false,
    info: `...`,
    style: `...`,
    render: (data, style) => { ... }
};
EOF
echo "----------------------------------------"
echo ""
echo "Pricing component has been created as an example in:"
echo "  components/pricing.component.js"
echo ""
echo "Remaining sections to extract:"
echo "  - layout, hero, about, services, portfolio"
echo "  - team, testimonials, contact, social, cta"
echo "  - skills, faq, stats, gallery, clients"
echo "  - awards, video, features, process"

