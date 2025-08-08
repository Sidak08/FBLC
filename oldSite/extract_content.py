#!/usr/bin/env python3
import os
import re
import sys
import html
from bs4 import BeautifulSoup
from pathlib import Path

def extract_text_from_html(html_file):
    """Extract readable text content from an HTML file."""
    try:
        with open(html_file, 'r', encoding='utf-8') as f:
            content = f.read()

        # Parse HTML using BeautifulSoup
        soup = BeautifulSoup(content, 'html.parser')

        # Remove script and style elements
        for script in soup(["script", "style"]):
            script.extract()

        # Get the page title
        title = soup.title.string if soup.title else "No Title"

        # Extract text from specific content areas (Google Sites specific)
        main_content = []

        # Find main content elements (different possible classes in Google Sites)
        content_elements = soup.find_all(class_=re.compile(r"(tyJCtd|zfr3Q|baZpAe|mGzaTb)"))

        for element in content_elements:
            text = element.get_text().strip()
            if text and len(text) > 5:  # Filter out very short snippets
                main_content.append(text)

        # Remove duplicate content
        main_content = list(dict.fromkeys(main_content))

        # Join all content with line breaks
        full_text = "\n\n".join(main_content)

        # Clean up the text
        full_text = re.sub(r'\n{3,}', '\n\n', full_text)  # Remove excessive newlines
        full_text = html.unescape(full_text)  # Unescape HTML entities

        return {"title": title, "content": full_text}

    except Exception as e:
        return {"title": os.path.basename(html_file), "content": f"Error processing file: {str(e)}"}

def process_site_directory(site_dir, output_dir):
    """Process all HTML files in the site directory."""
    # Create output directory if it doesn't exist
    Path(output_dir).mkdir(parents=True, exist_ok=True)

    # Find all HTML files
    html_files = []
    for root, _, files in os.walk(site_dir):
        for file in files:
            if file.endswith('.html'):
                html_files.append(os.path.join(root, file))

    # Process each HTML file
    print(f"Found {len(html_files)} HTML files to process")

    for html_file in html_files:
        rel_path = os.path.relpath(html_file, site_dir)
        print(f"Processing: {rel_path}")

        # Extract content
        extracted = extract_text_from_html(html_file)

        # Create output text file path
        output_file = os.path.splitext(os.path.basename(html_file))[0] + ".txt"
        output_path = os.path.join(output_dir, output_file)

        # Save content to text file
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(f"Title: {extracted['title']}\n\n")
            f.write(extracted['content'])

        print(f"Saved: {output_file}")

    # Create a combined file with all content
    print("Creating combined content file...")
    with open(os.path.join(output_dir, "all_content.txt"), 'w', encoding='utf-8') as combined:
        for html_file in html_files:
            extracted = extract_text_from_html(html_file)
            rel_path = os.path.relpath(html_file, site_dir)

            combined.write(f"\n\n{'=' * 80}\n")
            combined.write(f"Page: {rel_path}\n")
            combined.write(f"Title: {extracted['title']}\n")
            combined.write(f"{'=' * 80}\n\n")
            combined.write(extracted['content'])
            combined.write("\n\n")

    print(f"Content extraction complete. Files saved to {output_dir}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python extract_content.py <site_directory> <output_directory>")
        print("Example: python extract_content.py sites.google.com/view/bramptonfblc extracted_content")
        sys.exit(1)

    site_dir = sys.argv[1]
    output_dir = sys.argv[2]

    if not os.path.exists(site_dir):
        print(f"Error: Site directory '{site_dir}' does not exist")
        sys.exit(1)

    process_site_directory(site_dir, output_dir)
