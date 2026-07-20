---
title: Mockup & Content Library
type: reference
tags:
  - mockups
  - content
  - assets
  - visual-identity
  - automation
  - tiktok-shop
---

# Mockup & Content Library

## Drive Folders

**Clothing Mockups:**
https://drive.google.com/drive/folders/1F56li7zjuPpfA0u6oHkKmkYXH1MjWTSi

**Bulk Content (social, video, graphic exports):**
https://drive.google.com/drive/folders/1QHup-aFkeONCFBIq8naOAPGkRDkXTXzf

---

## Clothing Mockups Folder

This Drive contains finished product mockup images produced through the content pipeline using Photoroom and Nano Banana Pro. These are the visual assets used in social posts, product education content, blog headers, and any seller-facing material where showing a finished product in context is needed.

### Mockup Production Tools

**Photoroom** — Primary tool. Handles most standard apparel mockup scenarios: clean lifestyle shots, ghost mannequin, flat lay. Produces professional, well-lit outputs suitable for direct use in social or listing content.

**Nano Banana Pro** — Supplemental tool. Used for mockup styles outside of Photoroom's library, particularly certain lifestyle compositions and flat-lay configurations with props or environmental styling. See [[Decision Log]] D-006 for the adoption decision.

### What Is in the Folder

Mockup images are organized by product category where the volume warrants it. Expect to find:

- Apparel mockups: t-shirts, hoodies, sweatshirts in lifestyle and flat-lay formats
- Drinkware, accessory, and hard goods mockups as applicable to catalog additions
- Clean-background cut-outs suitable for platform listings
- Lifestyle compositions showing products in a real-world context for social use

### Requesting New Mockups

If content requires a mockup style not already in the folder:
1. Specify the product, style (lifestyle / flat lay / ghost mannequin / etc.), and the design file in the Notion content brief.
2. The pipeline will invoke Photoroom or Nano Banana Pro via the n8n workflow.
3. Output will be added to this Drive folder and linked back in the Notion card.

---

## Bulk Content Folder

This Drive contains batched content exports produced by the Content Orchestra pipeline. When the Formatter and Publisher agents produce content at volume, the output files land here.

### What Is in the Folder

- Social caption batches (text files or Notion exports, organized by platform or date)
- Carousel graphics (exported from Canva Connect API via the Formatter agent)
- Video exports from Remotion (short-form, TikTok-format, and tutorial-length outputs)
- Any other bulk export from a content production run

### Content Status

Content in the Bulk Content folder has passed the QC agent review and received human approval unless a subfolder is explicitly labeled "Review Required" or "Draft." If you are unsure of a file's status, cross-reference the Notion content DB for the corresponding card.

### File Naming Convention

The pipeline outputs files using the format:
`[Platform]_[ContentType]_[YYYYMMDD]_[BriefID]`

Example: `TikTok_Caption_20260520_BRF-114`

Manual exports or one-off assets should follow the same pattern for consistency.

---

## Using These Assets

- **For social posts:** Pull from the Clothing Mockups folder for product visuals, and from the Bulk Content folder for approved captions.
- **For blog or YouTube:** Pull relevant mockup images and any long-form script exports from Bulk Content.
- **For seller education content:** The Clothing Mockups folder is the primary visual resource.
- **Do not use mockup images from Etsy listings or third-party sources** — always use assets produced through the Completeful pipeline or officially sourced originals from the Logos Drive.

---

## Related References

- [[_Asset Library Index]] — full asset map
- [[Logos & Brand Files]] — logo and brand mark files
- [[Tools & Tech Stack]] — Photoroom, Nano Banana Pro, Canva, Remotion documentation
- [[10 Maps/Topic - Visual Identity MOC|Visual Identity]] — brand color and type specs for reviewing visual output compliance

## Related
- [[99 Assets/_Asset Library Index|Asset Library Index]]
- [[99 Assets/Logos & Brand Files|Logos & Brand Files]]
- [[08 Reference/Key Links & Resources|Key Links & Resources]]
- [[07 Meetings/Standing Agendas|Standing Agendas]]
- [[01 Marketing/Nano Banana Pro Mockup Prompts/_Mockup Prompt Overview|Mockup Prompt Overview]]
