#!/usr/bin/env python3
"""
Extract components from business-portfolio.html and create individual component files
"""

import re
import os

def find_matching_brace(content, start_pos):
    """Find the matching closing brace for an opening brace"""
    count = 1
    pos = start_pos + 1
    in_string = False
    in_template = False
    escape_next = False

    while pos < len(content) and count > 0:
        char = content[pos]

        # Handle escape characters
        if escape_next:
            escape_next = False
            pos += 1
            continue

        if char == '\\':
            escape_next = True
            pos += 1
            continue

        # Handle strings
        if char in ['"', "'"]:
            in_string = not in_string

        # Handle template literals
        elif char == '`':
            in_template = not in_template

        # Count braces only outside strings
        elif not in_string and not in_template:
            if char == '{':
                count += 1
            elif char == '}':
                count -= 1

        pos += 1

    return pos if count == 0 else -1

def extract_section(content, section_name, start_pos):
    """Extract a complete section from the content"""
    # Find the opening brace
    brace_pos = content.find('{', start_pos)
    if brace_pos == -1:
        return None

    # Find the matching closing brace
    end_pos = find_matching_brace(content, brace_pos)
    if end_pos == -1:
        return None

    # Extract the section content
    section_content = content[brace_pos:end_pos]

    return section_content

def create_component_file(section_name, section_content, emoji_map):
    """Create a component file from section content"""

    # Get emoji for section
    emoji = emoji_map.get(section_name, '📋')

    # Extract the name from the content
    name_match = re.search(r"name:\s*['\"](.+?)['\"]", section_content)
    display_name = name_match.group(1) if name_match else f"{emoji} {section_name.title()}"

    # Create the component file content
    component_content = f"""// {display_name.replace(emoji, '').strip()} Component

window.sectionComponents = window.sectionComponents || {{}};

window.sectionComponents.{section_name} = {section_content};
"""

    # Write to file
    filename = f"components/{section_name}.component.js"
    with open(filename, 'w') as f:
        f.write(component_content)

    print(f"✅ Created {filename}")

def main():
    print("Extracting components from business-portfolio.html...\n")

    # Read the HTML file
    with open('business-portfolio.html', 'r') as f:
        content = f.read()

    # Find the sectionTemplates object
    templates_start = content.find('const sectionTemplates = {')
    if templates_start == -1:
        print("❌ Could not find sectionTemplates object")
        return

    # Define sections to extract (excluding pricing which we already have)
    sections = [
        'layout', 'hero', 'about', 'services', 'portfolio',
        'team', 'testimonials', 'contact', 'social', 'cta',
        'skills', 'faq', 'stats', 'gallery', 'clients',
        'awards', 'video', 'features', 'process'
    ]

    # Emoji map for sections
    emoji_map = {
        'layout': '🎨',
        'hero': '💼',
        'about': 'ℹ️',
        'services': '⚙️',
        'portfolio': '📁',
        'team': '👥',
        'testimonials': '💬',
        'contact': '📞',
        'social': '🔗',
        'cta': '🎯',
        'skills': '🎓',
        'faq': '❓',
        'stats': '📊',
        'gallery': '🖼️',
        'clients': '🤝',
        'awards': '🏆',
        'video': '🎥',
        'features': '✨',
        'process': '🔄'
    }

    # Extract each section
    for section_name in sections:
        # Find the section in the content
        pattern = rf'\b{section_name}:\s*{{'
        match = re.search(pattern, content[templates_start:])

        if match:
            section_start = templates_start + match.start()
            section_content = extract_section(content, section_name, section_start + len(section_name) + 1)

            if section_content:
                create_component_file(section_name, section_content, emoji_map)
            else:
                print(f"⚠️  Could not extract content for {section_name}")
        else:
            print(f"⚠️  Could not find {section_name} section")

    print(f"\n✅ Extraction complete! Created {len(sections)} component files.")
    print("\nNext steps:")
    print("1. Review the generated component files")
    print("2. Update business-portfolio.html to load components")
    print("3. Remove the inline sectionTemplates object")

if __name__ == '__main__':
    main()
