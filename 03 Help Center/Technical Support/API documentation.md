---
title: API Documentation
type: help-center doc
parent_category: Technical Support
tags:
  - help-center
  - returns
  - content
  - design
  - pricing
  - visual-identity
---

# API Documentation

The Completeful API allows developers to interact with the platform programmatically. You can use it to manage products, retrieve order data, post blog content, and build custom integrations on top of the Completeful infrastructure.

## Authentication

All API requests require a Bearer token for authorization. You can generate an API key in your Completeful dashboard under **Settings > API**.

Include the token in the `Authorization` header of every request:

```
Authorization: Bearer YOUR_API_KEY
```

Keep your API key secure. Do not expose it in client-side code or public repositories. If a key is compromised, revoke it immediately from the API settings page and generate a new one.

## Base URL

All API endpoints use the following base URL:

```
https://completeful.com/api
```

## Blog Posts API

The Blog Posts API lets you create, retrieve, update, and delete blog content for your connected store or Completeful-hosted content.

### Create a Blog Post

**POST** `https://completeful.com/api/blog/posts`

Creates a new blog post.

**Request headers:**
```
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json
```

**Request body:**
```json
{
  "title": "5 Best-Selling Mug Designs for Summer",
  "body": "<p>Full HTML content of the blog post...</p>",
  "author": "Your Name",
  "tags": ["mugs", "summer", "POD tips"],
  "published": true,
  "published_at": "2026-06-10T09:00:00Z"
}
```

**Response (201 Created):**
```json
{
  "id": "post_abc123",
  "title": "5 Best-Selling Mug Designs for Summer",
  "status": "published",
  "url": "https://completeful.com/blog/5-best-selling-mug-designs-for-summer",
  "created_at": "2026-06-09T14:23:00Z"
}
```

### Get All Blog Posts

**GET** `https://completeful.com/api/blog/posts`

Returns a paginated list of blog posts.

**Query parameters:**
- `page` (integer, default: 1)
- `per_page` (integer, default: 20, max: 100)
- `status` (string: `published`, `draft`, or `all`)

**Response (200 OK):**
```json
{
  "posts": [ ... ],
  "total": 42,
  "page": 1,
  "per_page": 20
}
```

### Get a Single Blog Post

**GET** `https://completeful.com/api/blog/posts/{post_id}`

### Update a Blog Post

**PUT** `https://completeful.com/api/blog/posts/{post_id}`

### Delete a Blog Post

**DELETE** `https://completeful.com/api/blog/posts/{post_id}`

Returns `204 No Content` on success.

## Products API

### List Products

**GET** `https://completeful.com/api/products`

Returns products in your Completeful catalog or connected store.

**Query parameters:**
- `page`, `per_page`
- `category` (string: e.g., `apparel`, `mugs`, `home-goods`)

### Get a Product

**GET** `https://completeful.com/api/products/{product_id}`

### Create a Product

**POST** `https://completeful.com/api/products`

**Request body (example):**
```json
{
  "catalog_item_id": "ci_gildan64000_white_m",
  "title": "Summer Vibes Tee",
  "description": "...",
  "artwork_url": "https://your-cdn.com/design.png",
  "variants": [
    { "size": "S", "color": "white", "price": 24.99 },
    { "size": "M", "color": "white", "price": 24.99 }
  ]
}
```

## Orders API

### Get Orders

**GET** `https://completeful.com/api/orders`

Returns orders associated with your account.

**Query parameters:**
- `status` (string: `pending`, `in_production`, `shipped`, `delivered`, `cancelled`)
- `since` (ISO 8601 date string)
- `page`, `per_page`

### Get a Single Order

**GET** `https://completeful.com/api/orders/{order_id}`

## Rate Limits

The API is rate-limited to 120 requests per minute per API key. If you exceed this limit, the API returns a `429 Too Many Requests` response. Implement exponential backoff in your integration to handle rate limit errors gracefully.

## Error Responses

All errors follow this format:

```json
{
  "error": {
    "code": "invalid_file_format",
    "message": "The uploaded file is not a supported format. Use PNG, JPG, SVG, or PDF.",
    "status": 422
  }
}
```

Common status codes:
- `400` Bad Request — missing or invalid parameters
- `401` Unauthorized — missing or invalid API key
- `404` Not Found — resource does not exist
- `422` Unprocessable Entity — valid request but failed validation
- `429` Too Many Requests — rate limit exceeded
- `500` Internal Server Error — contact support

## Getting Help with the API

For API-specific support, include your account email, the endpoint you are calling, the request body (with any sensitive data removed), and the error response. Send to support@completeful.com with the subject line "API Support."

## Related
- [[03 Help Center/Orders & Fulfillment/Handling quality issues|Handling Quality Issues]]
- [[03 Help Center/Legal/Intellectual Property & Content Policy|Intellectual Property & Content Policy]]
- [[03 Help Center/Legal/Terms of Service|Terms of Service]]
- [[03 Help Center/Support/Returns & Refunds|Returns & Refunds]]
- [[03 Help Center/Services/Personalization & Private Label|Personalization & Private Label]]
