# Brampton FBLC & TA Website Content Extractor

This project contains scripts and tools to download and extract content from the Brampton Future Business Leaders of Canada (FBLC) & Target Alpha (TA) Google Site.

## Project Structure

- `extracted_content/` - Contains text files with content extracted from the original wget download
- `httrack_mirror/` - Complete mirror of the website created using HTTrack
- `httrack_extracted_content/` - Content extracted from the HTTrack mirror
- `FBLC_complete_content.txt` - All website content combined into a single text file
- `content_viewer.html` - A simple HTML viewer for browsing the extracted content
- `extract_content.py` - Python script for extracting content from HTML files
- `site_downloader.py` - Python script to download website content

## Tools Used

1. **wget** - Used for the initial download of HTML pages
2. **HTTrack** - Used for creating a complete mirror of the website
3. **BeautifulSoup4** - Python library used for HTML parsing
4. **Custom Python script** - For extracting readable content from HTML files

## How to Use

### Viewing the Extracted Content

The simplest way to browse the extracted content is to open the `content_viewer.html` file in a web browser. This provides a clean interface for navigating through all the website content.

### Re-downloading the Website

If you want to re-download the website, you can use one of the following commands:

```bash
# Using wget (basic HTML only)
wget -r -k -p -np -E https://sites.google.com/view/bramptonfblc/

# Using HTTrack (complete mirror with assets)
httrack "https://sites.google.com/view/bramptonfblc/" -O "httrack_mirror" -r2
```

### Extracting Content from HTML Files

The `extract_content.py` script can be used to extract readable content from HTML files:

```bash
python3 extract_content.py <html_directory> <output_directory>
```

## Website Content Overview

The Brampton FBLC & TA website contains information about:

- The organization's mission and values
- How to join the chapter
- Competitions (CNLC, SPC, STC, FPC)
- Team members and leadership
- Educational opportunities
- AI-related blog posts
- Connection information

## Contact Information

As listed on the website:
- Instagram: @bramptonfblc & @targetalpha_brampton
- Google Public Classroom Code: hfxswrh