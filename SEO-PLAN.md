## SEO Requirements

These rules are mandatory for every implementation, refactor, content update, and production deployment.

### 1. SEO Objective

Optimize the website for relevant local searches in Tiraspol, primarily:

**Russian search intent**

* массаж Тирасполь
* массажист Тирасполь
* массаж на Балке
* общий массаж Тирасполь
* лечебный массаж Тирасполь
* оздоровительный массаж Тирасполь
* релакс-массаж Тирасполь
* мадеротерапия Тирасполь
* антицеллюлитный массаж Тирасполь
* лимфодренажный массаж Тирасполь

**English search intent**

* massage Tiraspol
* massage therapist Tiraspol
* therapeutic massage Tiraspol
* relaxation massage Tiraspol
* maderotherapy Tiraspol

Use these phrases naturally. Never repeat exact-match keywords unnaturally, hide keywords, generate doorway pages, or sacrifice readability to increase keyword frequency.

Never promise a particular Google ranking, ranking timeline, traffic volume, or number of customers.

---

### 2. Factual Accuracy

Only publish information confirmed by the client or contained in the approved project content.

Currently verified information includes:

* Olga provides massage services in Tiraspol.
* The massage room is located on Balka, in the “Prichernomorye” building.
* Services include general massage, therapeutic massage, wellness massage, relaxation massage, and maderotherapy.
* Maderotherapy services include anti-cellulite and lymphatic-drainage massage.
* Sessions generally last 60–90 minutes, depending on the treatment and client.
* Olga is a medical worker.
* She has more than three years of professional massage experience.
* She is studying rehabilitation for people with disabilities.
* The contact number is `+373 778 99 366`.
* Telegram, WhatsApp, and Viber are available.
* A complete English version is required.
* The verified Instagram URL is the one provided in the project brief.

Do not invent or infer:

* An official business name
* Exact street address
* Room or floor number
* Opening hours
* Prices
* Certificates
* Licences
* Review text
* Review authors
* Star ratings
* Exact number of clients
* Medical qualifications
* Medical outcomes
* Years of experience beyond the confirmed value

Unknown information must remain absent or be represented by an explicit development placeholder. No placeholder may remain in the production build.

Do not expand the abbreviated name of Olga’s educational institution unless she supplies the official wording.

---

### 3. Medical and Wellness Claims

Massage-related content must remain factual and conservative.

Allowed language includes:

* Supports relaxation
* Helps reduce everyday muscle tension
* Promotes comfort and general wellbeing
* Treatment adapted to individual needs
* May help the client feel more relaxed after a session

Do not claim that massage:

* Cures diseases
* Treats diagnosed medical conditions
* Replaces medical treatment
* Guarantees pain relief
* Detoxifies the body
* Produces guaranteed weight loss
* Permanently removes cellulite
* Restores damaged organs or tissues

The service name “лечебный массаж” may be used because it is the client’s declared service, but its description must not contain unsupported treatment claims.

Add a concise notice where appropriate:

> Massage services do not replace examination, diagnosis, or treatment by a qualified physician.

---

### 4. Language and URL Architecture

Use separately crawlable URLs for each language.

Preferred structure:

* Russian: `/`
* English: `/en/`

Requirements:

* The Russian page must use `<html lang="ru">`.
* The English page must use `<html lang="en">`.
* Do not place both complete languages in one HTML document and hide one with CSS or JavaScript.
* Do not use query parameters such as `?lang=en`.
* Do not use hash URLs such as `#en`.
* Do not automatically redirect users based only on browser language or IP address.
* Provide a visible Russian/English language selector using standard `<a>` elements.
* Each language page must be accessible without JavaScript.
* English copy must be properly localized rather than translated word-for-word.

Add reciprocal language annotations to both pages:

```html
<link rel="alternate" hreflang="ru" href="https://olga-dorma-massage.netlify.app/">
<link rel="alternate" hreflang="en" href="https://olga-dorma-massage.netlify.app/en/">
<link rel="alternate" hreflang="x-default" href="https://olga-dorma-massage.netlify.app/">
```

Use absolute production URLs. Production domain: `https://olga-dorma-massage.netlify.app/`.

Each language page must have a self-referencing canonical URL:

```html
<!-- Russian page -->
<link rel="canonical" href="https://olga-dorma-massage.netlify.app/">

<!-- English page -->
<link rel="canonical" href="https://olga-dorma-massage.netlify.app/en/">
```

Never canonicalize the English page to the Russian page or vice versa.

---

### 5. Page Titles and Meta Descriptions

Every indexable page must have a unique, descriptive `<title>` and meta description in its own language.

Recommended Russian title:

```html
<title>Массаж в Тирасполе — Ольга | Запись онлайн</title>
```

Recommended Russian description:

```html
<meta
  name="description"
  content="Общий, лечебный, оздоровительный и релакс-массаж, а также мадеротерапия в Тирасполе. Кабинет на Балке. Запись через Telegram, WhatsApp или Viber."
>
```

Recommended English title:

```html
<title>Massage in Tiraspol — Olga | Book an Appointment</title>
```

Recommended English description:

```html
<meta
  name="description"
  content="General, therapeutic, wellness and relaxation massage, plus maderotherapy in Tiraspol. Book an appointment through Telegram, WhatsApp or Viber."
>
```

Treat approximately 50–65 characters for titles and 140–165 characters for descriptions as editorial targets, not strict technical limits.

Requirements:

* Put the primary service and location near the beginning of the title.
* Do not repeat “massage” or “Tiraspol” unnecessarily.
* Do not use titles such as “Home”, “Welcome”, or “Olga”.
* Keep the visible H1, `<title>`, and `og:title` semantically consistent.
* Do not use promotional claims such as “best massage in Tiraspol” unless supported by objective evidence.

---

### 6. Heading and Content Structure

Use semantic HTML and a logical heading hierarchy.

Each language page must contain one primary H1.

Recommended Russian H1:

```text
Профессиональный массаж в Тирасполе
```

Recommended English H1:

```text
Professional Massage in Tiraspol
```

Use H2 headings for the main sections:

* Services
* About Olga
* Reviews
* Frequently Asked Questions
* Contacts and Booking

Use H3 headings for individual services when appropriate.

Do not use heading elements solely for visual styling. Do not skip levels without a structural reason.

The opening paragraph must clearly explain:

* What Olga offers
* That the service is in Tiraspol
* Where the massage room is located
* How the visitor can book

Every service must have an original, useful description. Avoid repeating the same generic paragraph under multiple service names.

---

### 7. Local SEO and NAP Consistency

NAP means business name, address, and phone number.

Once the official business name, complete address, and working hours are confirmed, use exactly the same spelling and formatting across:

* Website header or contact section
* Website footer
* Google Business Profile
* Structured data
* Instagram
* Booking platform
* Other local directories

Do not create alternative versions of the business name for keyword targeting.

The visible contact section must contain:

* Official business name
* Olga’s name
* Complete address
* “Tiraspol” in text
* Telephone number
* Working hours
* Instagram
* Booking links

Use a clickable telephone link:

```html
<a href="tel:+37377899366">+373 778 99 366</a>
```

Messenger links must lead directly to the correct account or chat wherever technically possible.

Include a human-readable location description such as:

```text
Тирасполь, район Балка, здание «Причерноморье»
```

Replace it with the complete confirmed postal address once available.

Do not insert “рядом со мной”, “near me”, or similar artificial keyword phrases into visible copy.

---

### 8. Structured Data

Use JSON-LD.

Implement `HealthAndBeautyBusiness` only after the official business name and sufficiently precise physical address have been confirmed.

Do not classify Olga as:

* Physician
* Doctor
* MedicalClinic
* Hospital
* Physiotherapist

unless the client supplies credentials that legally and factually support that classification.

The structured data should use verified values for:

* `@context`
* `@type`
* `@id`
* `name`
* `url`
* `image`
* `telephone`
* `address`
* `areaServed`
* `sameAs`
* `openingHoursSpecification`
* `hasOfferCatalog`

Recommended base structure:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "@id": "https://olga-dorma-massage.netlify.app/#business",
  "name": "[CONFIRMED BUSINESS NAME]",
  "url": "https://olga-dorma-massage.netlify.app/",
  "telephone": "+37377899366",
  "image": [
    "https://olga-dorma-massage.netlify.app/images/olga-massage-1x1.jpg",
    "https://olga-dorma-massage.netlify.app/images/olga-massage-4x3.jpg",
    "https://olga-dorma-massage.netlify.app/images/olga-massage-16x9.jpg"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[CONFIRMED STREET ADDRESS]",
    "addressLocality": "Tiraspol",
    "addressCountry": "MD"
  },
  "areaServed": {
    "@type": "City",
    "name": "Tiraspol"
  },
  "sameAs": [
    "[VERIFIED INSTAGRAM URL]"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Massage services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "General massage",
          "areaServed": "Tiraspol"
        }
      }
    ]
  }
}
</script>
```

Rules:

* Structured data must describe content visible on the page.
* Never publish development placeholders in JSON-LD.
* Do not include unconfirmed opening hours, prices, coordinates, or ratings.
* Add `geo` only after coordinates are confirmed from the correct Google Business Profile pin.
* Add `priceRange` only after prices are confirmed.
* Do not add `aggregateRating` or review markup to the business’s own testimonials.
* Do not add fake or reformatted reviews.
* Do not add `FAQPage` markup solely to obtain an FAQ rich result.
* Validate production JSON-LD with Google Rich Results Test and Schema Markup Validator.

---

### 9. Images

Every content image must have:

* A descriptive filename
* Correct dimensions
* Explicit `width` and `height`
* Responsive `srcset` and `sizes` where appropriate
* WebP or AVIF output where supported
* A useful `alt` attribute

Good filenames:

```text
olga-massage-therapist-tiraspol.webp
relaxation-massage-tiraspol.webp
maderotherapy-session-tiraspol.webp
massage-room-balka-tiraspol.webp
```

Good alt text:

```text
Ольга проводит массаж спины в кабинете в Тирасполе
```

Bad alt text:

```text
массаж массажист Тирасполь лучший массаж недорого
```

Rules:

* Describe what is genuinely visible.
* Do not insert keywords unrelated to the image.
* Use `alt=""` for purely decorative images.
* Do not describe decorative icons as meaningful content.
* Place service images near their corresponding service descriptions.
* Do not use the same alt text for multiple different images.
* Do not lazy-load the primary hero/LCP image.
* Apply `loading="lazy"` to below-the-fold images.
* Add `fetchpriority="high"` only to the primary above-the-fold image.
* Never use CSS background images for essential business or service imagery.

---

### 10. Crawlability and Indexing

The production website must:

* Be served over HTTPS.
* Return `200` for valid pages.
* Return a real `404` status for missing pages.
* Use one canonical hostname.
* Redirect HTTP to HTTPS.
* Redirect alternate hostname variants with permanent `301` redirects.
* Use one consistent trailing-slash convention.
* Render primary content in the initial HTML.
* Remain understandable if JavaScript fails.
* Allow search engines to load required CSS, JavaScript, fonts, and images.

Production `robots.txt`:

```text
User-agent: *
Allow: /

Sitemap: https://olga-dorma-massage.netlify.app/sitemap.xml
```

The XML sitemap must:

* Use absolute canonical production URLs.
* Include the Russian and English pages.
* Exclude redirects, error pages, previews, and duplicate URLs.
* Use accurate `<lastmod>` dates only when content actually changes.

Do not block an indexable page in `robots.txt`.

Development environments, Netlify deploy previews, test domains, and unfinished versions must use:

```html
<meta name="robots" content="noindex, nofollow">
```

or an equivalent `X-Robots-Tag` response header.

The production build must not contain `noindex`.

---

### 11. Links and Navigation

All navigation and language links must use crawlable HTML anchors:

```html
<a href="#services">Услуги</a>
<a href="/en/">English</a>
```

Do not implement important navigation using:

* `onclick` without an `href`
* `<div>` elements
* Empty links
* JavaScript-only route changes
* Non-indexable hash-based language routes

Section IDs should be stable and descriptive:

```text
#services
#about
#reviews
#faq
#contacts
```

Booking CTAs must use descriptive labels such as:

* Записаться на массаж
* Написать в WhatsApp
* Book a massage
* Contact Olga

Avoid vague labels such as “Click here”.

---

### 12. Social Metadata

Add localized Open Graph metadata to every language page:

```html
<meta property="og:type" content="website">
<meta property="og:locale" content="ru_RU">
<meta property="og:title" content="Массаж в Тирасполе — Ольга">
<meta property="og:description" content="Профессиональный массаж и мадеротерапия в Тирасполе.">
<meta property="og:url" content="https://olga-dorma-massage.netlify.app/">
<meta property="og:image" content="https://olga-dorma-massage.netlify.app/assets/images/OG%20Image.png">
<meta property="og:image:type" content="image/png">
<meta property="og:image:width" content="1731">
<meta property="og:image:height" content="909">
<meta property="og:image:alt" content="Массажный кабинет Дормы Ольги в Тирасполе">
```

English page:

```html
<meta property="og:locale" content="en_US">
<meta property="og:locale:alternate" content="ru_RU">
```

Requirements:

* Use an absolute image URL.
* Recommended social image size: `1200 × 630`.
* Do not use a generic stock photograph unrelated to Olga.
* Keep social titles consistent with the corresponding page language.
* Include equivalent Twitter/X card metadata.

---

### 13. Performance Requirements

Meet the following Core Web Vitals targets at the 75th percentile:

* LCP: `≤ 2.5 seconds`
* INP: `≤ 200 milliseconds`
* CLS: `≤ 0.1`

Implementation rules:

* Keep the landing page primarily static HTML, CSS, and minimal JavaScript.
* Do not add a heavy framework solely for SEO.
* Minify production HTML, CSS, and JavaScript.
* Defer non-critical JavaScript.
* Remove unused CSS and JavaScript.
* Do not load large animation libraries for simple transitions.
* Compress and resize all photographs.
* Do not serve desktop-size images to mobile devices.
* Reserve image and media dimensions to prevent layout shifts.
* Self-host fonts where practical.
* Use WOFF2 fonts.
* Preload only critical font files and the LCP image.
* Use `font-display: swap`.
* Limit third-party widgets and tracking scripts.
* Lazy-load maps, Instagram embeds, and other heavy third-party content.
* Do not autoplay a large background video above the fold.

Mobile Lighthouse targets for the production URL:

* SEO: `95+`
* Accessibility: `90+`
* Best Practices: `90+`
* Performance: `90+`

Do not manipulate the interface solely to achieve a laboratory score. Preserve usability and conversion clarity.

---

### 14. Content Quality and Spam Prevention

Never implement:

* Keyword stuffing
* Hidden text
* White text on a white background
* Duplicate city pages
* Thin pages for individual keyword variations
* Automatically generated location pages
* Fake testimonials
* Fake review schema
* Misleading redirects
* Cloaking
* Purchased-link schemes
* Copied competitor descriptions
* AI-generated filler published without factual review

If individual service pages are added later, each page must contain substantial, unique, client-approved information. Do not generate separate pages merely for singular/plural or minor keyword variations.

---

### 15. Production SEO Checklist

### Что уже есть

В локальной версии лендинга уже реализовано:

* ~~A separate working SEO optimization checklist exists.~~ См. `SEO-OPTIMIZATION-CHECKLIST.md`.
* ~~Russian and English pages have separate crawlable URLs.~~ `/` и `/en/`.
* ~~Each page has the correct `lang` attribute.~~ `ru` и `en`.
* ~~Reciprocal `hreflang` annotations are present.~~ Добавлены для RU, EN и `x-default`.
* ~~Canonical URLs are absolute and self-referencing.~~ Используется production URL `https://olga-dorma-massage.netlify.app/`.
* ~~Temporary production URLs have been replaced.~~ Production-домен используется в canonical, hreflang, Open Graph и SEO-примерах.
* ~~Production robots.txt exists.~~ Разрешает индексацию и указывает `https://olga-dorma-massage.netlify.app/sitemap.xml`.
* ~~Production sitemap.xml exists.~~ Включает только канонические URL `/` и `/en/` с production-доменом.
* ~~LocalBusiness JSON-LD exists.~~ Добавлен `HealthAndBeautyBusiness` на RU и EN страницы без цен, рейтингов, координат и медицинских типов.
* ~~Open Graph image uses the dedicated social image.~~ `og:image` и `twitter:image` указывают на `assets/images/OG Image.png`.
* ~~Titles and descriptions are unique and localized.~~ Добавлены русские и английские title/meta description.
* ~~Each page has one clear H1.~~
* ~~Heading hierarchy is valid.~~
* ~~Tiraspol and the confirmed location appear naturally in visible content.~~
* ~~The telephone number is correct and clickable.~~
* ~~No unconfirmed prices, hours, credentials, or reviews are present.~~ Цены не указаны; отзывы оформлены как нейтральные локальные карточки без рейтингов и schema-разметки.
* ~~No unsupported medical claims are present.~~ Добавлено медицинское предупреждение.
* ~~Images have dimensions, descriptive filenames, and correct alt text.~~
* ~~Hero image is not lazy-loaded.~~
* ~~Below-the-fold images are lazy-loaded.~~
* ~~No broken internal navigation links remain in the local static build.~~

Before declaring the website complete, verify all of the following:

* [ ] Russian and English pages have separate crawlable URLs.
* [ ] Each page has the correct `lang` attribute.
* [ ] Reciprocal `hreflang` annotations are present.
* [ ] Canonical URLs are absolute and self-referencing.
* [ ] Titles and descriptions are unique and localized.
* [ ] Each page has one clear H1.
* [ ] Heading hierarchy is valid.
* [ ] Tiraspol and the confirmed location appear naturally in visible content.
* [ ] The telephone number is correct and clickable.
* [ ] Messenger links open the correct accounts.
* [ ] NAP data matches the Google Business Profile.
* [ ] No unconfirmed prices, hours, credentials, or reviews are present.
* [ ] No unsupported medical claims are present.
* [ ] Images have dimensions, descriptive filenames, and correct alt text.
* [ ] Hero image is not lazy-loaded.
* [ ] Below-the-fold images are lazy-loaded.
* [ ] Structured data matches visible content.
* [ ] Structured data contains no placeholders.
* [ ] Structured data passes validation.
* [ ] `robots.txt` references the production sitemap.
* [ ] Sitemap contains only canonical indexable URLs.
* [ ] Production pages do not contain `noindex`.
* [ ] Preview and staging versions cannot be indexed.
* [ ] Invalid URLs return a proper 404 response.
* [ ] HTTPS and canonical-host redirects work.
* [ ] Mobile Core Web Vitals and Lighthouse targets are met.
* [ ] No broken internal, social, telephone, or messenger links remain.
* [ ] The final production URL is ready to be added to Google Search Console.
* [ ] The XML sitemap is ready for Search Console submission.
* [ ] The final website URL is ready to be added to the Google Business Profile.

SEO work is not complete until these checks have been performed against the deployed production URL, not only against the local development build.
