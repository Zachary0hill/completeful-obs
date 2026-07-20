---
title: Troubleshooting Common Issues
type: help-center doc
parent_category: Technical Support
tags:
  - help-center
  - billing
  - design
  - shipping
  - shopify
---

# Troubleshooting Common Issues

This guide covers the most frequently reported problems and how to resolve them. If you cannot find a solution here, contact support@completeful.com.

## Store Connection Issues

### My store shows as "Disconnected" or "Error"

1. Go to **Integrations** in your dashboard and click on the affected platform.
2. Click **Disconnect** and confirm.
3. Re-authorize the connection by following the steps in **Connect Your eCommerce Store**.
4. If the issue persists after reconnecting, check whether your store has any pending app permission changes. On Shopify, this can happen after a plan change or a Shopify app policy update.

### Orders are not flowing from my store into Completeful

- Confirm your store connection is Active (green status) in **Integrations**.
- Check that the product variant in your store is mapped to a Completeful catalog item. Unmapped variants are ignored.
- On Etsy, verify that the listing is linked to the correct Completeful product in your product settings.
- On WooCommerce, confirm the API key has not expired or been revoked.

## Artwork and Product Builder Issues

### My design looks blurry in the product builder

This is almost always a resolution issue with the uploaded file.

1. Check the pixel dimensions of your source file. For a standard 12" x 14" print at 300 DPI, you need at least 3600 x 4200 pixels.
2. If your file is small, redesign it at higher resolution in your design tool — do not simply upsample (increase pixel dimensions) in an image editor. Upsampling a low-res file does not add detail.
3. See **Artwork Upload Guidelines** for resolution requirements by product type.

### My design has an unexpected white background

Your file has a white background layer rather than transparency.

1. Open the file in your design tool.
2. Delete or hide the background layer.
3. Export as PNG with transparency (make sure "transparent background" is checked in the export settings).
4. Re-upload the new file.

### The product builder is not loading or is very slow

1. Clear your browser cache and reload the page.
2. Try a different browser (Chrome and Firefox are recommended).
3. Disable browser extensions temporarily — ad blockers and privacy tools can interfere with the product builder's canvas rendering.
4. Check completeful.com/status for any known platform issues.

## Order and Checkout Issues

### An order is stuck in "Pending" for more than 24 hours

Common causes:
- **Missing personalization:** If the product requires custom text (a name, date, or message), check whether the order includes that information. If not, the order cannot go to production until it is provided.
- **Payment failure:** Go to **Settings > Billing** and confirm your payment method is valid and has no failed charges.
- **Inventory hold:** A specific product variant may be temporarily unavailable. Contact support@completeful.com with the order number.

### I need to cancel or change an order

Orders can only be cancelled or modified while they are in **Pending** status.

1. Go to **Orders** in your dashboard.
2. Open the order and click **Cancel Order** if the button is available.
3. If the order is already **In Production**, contact support@completeful.com immediately. Cancellation is not guaranteed once production has started.

### A customer says they did not receive their order but tracking shows "Delivered"

1. Ask the customer to check with neighbors and in any secure delivery locations (mailroom, porch, apartment lobby).
2. Wait 48 hours — carriers occasionally mark packages as delivered slightly early.
3. If the package is still missing after 48 hours, contact support@completeful.com with the order number and delivery address. The team will open an investigation with the carrier.

## Billing Issues

### I was charged but I did not expect a charge

All charges correspond to orders placed in your connected store. Go to **Settings > Billing > Transaction History** to see a line-item breakdown. Each row corresponds to a specific order number.

If you see a charge you do not recognize, contact support@completeful.com with the charge amount, date, and any order number visible in the transaction history.

### My payment method was declined

1. Verify your card details are correct in **Settings > Billing**.
2. Confirm your billing address matches what your bank has on file.
3. Contact your bank if the card is valid but still declining — some banks flag new merchant charges and require a one-time confirmation from the cardholder.

## API Issues

See **API Documentation** for endpoint references. For API errors returning `401 Unauthorized`, regenerate your API key in **Settings > API**. For persistent errors on specific endpoints, contact support@completeful.com with your request details and the error response.

## Still Stuck?

If you have worked through the steps above and the issue is not resolved:

- Email support@completeful.com with a clear description, any error messages, screenshots, and your order or account details.
- For sales questions or larger integration discussions, contact sales@completeful.com.

## Related
- [[03 Help Center/Account & Billing/Tax information and documents|Tax information and documents]]
- [[03 Help Center/Account & Billing/Payment Methods and billing|Payment Methods and billing]]
- [[03 Help Center/Account & Billing/Understanding pricing and costs|Understanding pricing and costs]]
- [[03 Help Center/Getting Started/Account Setup & First Steps|Account Setup & First Steps]]
- [[03 Help Center/Getting Started/Onboarding Checklist|Onboarding Checklist]]
