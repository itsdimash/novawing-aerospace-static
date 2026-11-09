# Aviorafly search setup

## Included in the code

- A descriptive homepage title and description, canonical URLs, and social metadata.
- A permanent `/products/<slug>` page for every catalog item, generated at build time.
- Complete product specifications in each page's initial HTML, without requiring a click or JavaScript.
- Catalog links to each product page, working homepage navigation from product pages, and breadcrumbs.
- Product, BreadcrumbList, Organization, and WebSite JSON-LD using existing catalog information.
- `/sitemap.xml` containing the homepage and all product pages, and `/robots.txt` referencing it.
- Product summaries derived from supplied specifications in place of generic placeholder descriptions.

The production domain is configured in `lib/site.ts`. Keep product slugs stable;
if a published slug changes, add a permanent redirect from its old address.

## After merging and deploying

1. Open https://search.google.com/search-console/ using the business's Google account.
2. Add the **Domain** property `aviorafly.com` and verify ownership using the DNS TXT record Google provides. Keep that verification record in DNS.
3. Confirm `https://aviorafly.com/robots.txt` and `https://aviorafly.com/sitemap.xml` return successfully on the live domain.
4. Submit `https://aviorafly.com/sitemap.xml` in the Sitemaps report.
5. Inspect `https://aviorafly.com/` and an important product URL. Run **Test live URL**, check Google's selected canonical, and request indexing if appropriate.
6. Monitor the Page indexing and Performance reports for crawl errors, indexed pages, brand searches, and product queries.

Code changes cannot verify domain ownership or guarantee indexing or rankings.
Google can take days or weeks to crawl pages; search performance can take longer to improve.

## Product information to confirm

Existing prices use a dollar symbol without an explicit currency code. The code
preserves those displayed prices and does not assume USD or HKD. Product JSON-LD
therefore deliberately omits `Offer`, currency, and stock claims. Once the
business confirms currency and availability, add accurate Offer data; the current
Product markup alone does not meet Google's product rich-result requirements.
Do not add invented reviews, ratings, stock levels, delivery promises, or identifiers.

Review product photographs against specifications before promoting listings.
For example, the existing SKYFORGE FPV battery entry specifies 6S / 1500 mAh,
while its supplied image shows an HRB 2200 mAh / 11.1 V battery. This change
preserves the source catalog; the business should confirm the correct image and specifications.

Argillaart uses a separate repository and needs its own changes and Search
Console property. This repository only configures Aviorafly.

References:

- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl
- https://developers.google.com/search/docs/appearance/structured-data/product
