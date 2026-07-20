---
title: Supported File Formats
type: help-center doc
parent_category: Design & Printing
tags:
  - help-center
  - design
  - visual-identity
  - manufacturing
---

# Supported File Formats

Completeful accepts several file formats depending on the product and design type. This guide covers what each format is best for, what requirements apply, and what to avoid.

## PNG (Recommended for Most Products)

PNG is the preferred format for the majority of products in the Completeful catalog.

- **Supports transparency:** Use a transparent background so your design sits cleanly on the product color without a white box.
- **Lossless compression:** No quality loss during compression, unlike JPG.
- **Best for:** Apparel (DTG), sublimation products, UV prints, most hard goods.
- **Requirements:** RGB color mode, minimum 150 DPI at print size (300 DPI recommended), maximum file size 50 MB.
- **Watch out for:** PNG files saved with a white background instead of transparency. Always check in a viewer that shows the checkerboard transparency grid.

## JPG / JPEG

JPG files are accepted but have limitations you should be aware of.

- **No transparency support:** JPG always has a background. If your design has a white background in the JPG, that white area will be printed.
- **Lossy compression:** Repeated saves or heavy compression creates visible artifacts, especially on text edges and fine lines.
- **Best for:** Full-bleed photographic designs where the entire print area is covered by image content (no transparency needed).
- **Not recommended for:** Designs with text, logos, sharp edges, or any area intended to be transparent.
- **Requirements:** RGB color mode, maximum file size 50 MB.

## SVG (Vector)

SVG (Scalable Vector Graphics) is supported for certain products, particularly those with laser engraving or UV printing on hard surfaces.

- **Resolution-independent:** SVG scales to any size without quality loss, which is ideal for products with large or variable print areas.
- **Best for:** Laser engraving (wood, metal), clean logo artwork, bold graphic designs.
- **Requirements:** Flatten all text to outlines/paths before uploading to prevent font substitution. Remove embedded raster images if possible, or ensure they meet the PNG/JPG requirements above.
- **Watch out for:** SVG files that reference external fonts or linked images — the server may not have your font installed.

## PDF

PDF files are accepted for select products, primarily for designs that originated in professional design software.

- **Best for:** Multi-layer designs from Illustrator or InDesign, designs with precise bleed and crop marks already set.
- **Requirements:** RGB color mode, all fonts embedded or converted to outlines, resolution of embedded raster elements at 300 DPI, maximum file size 50 MB.
- **Watch out for:** PDFs exported from office applications (Word, Keynote) rather than design software. These often produce low-resolution or incorrectly formatted output. Use a design tool for production-quality PDFs.

## Formats NOT Accepted

The following formats are not accepted and will be rejected at upload:

- TIFF / TIF
- PSD (Photoshop native format — export as PNG instead)
- AI (Illustrator native format — export as SVG or PDF)
- BMP, GIF, WebP
- HEIC / HEIF

## Quick Reference Table

| Format | Transparency | Best Use | Max Size |
|--------|-------------|----------|----------|
| PNG | Yes | Most products | 50 MB |
| JPG | No | Full-bleed photo designs | 50 MB |
| SVG | Yes | Laser engraving, vector art | 50 MB |
| PDF | Depends | Professional design output | 50 MB |

If you are unsure which format to use, export as a 300 DPI PNG with a transparent background and you will be covered for nearly every product in the catalog. For questions about a specific product or edge case, contact support@completeful.com.

## Related
- [[03 Help Center/Design & Printing/Artwork Upload Guidelines|Artwork Upload Guidelines]]
- [[03 Help Center/Design & Printing/Color Accuracy and profiles|Color Accuracy and Profiles]]
- [[03 Help Center/Design & Printing/Design Resolution & Print Area Guide|Design Resolution & Print Area Guide]]
- [[03 Help Center/Company/Careers|Careers]]
- [[03 Help Center/Getting Started/How Completeful Works|How Completeful Works]]
