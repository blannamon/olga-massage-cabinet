# SEO Optimization Checklist

Рабочий чеклист для доведения сайта массажного кабинета Дормы Ольги до production-ready SEO. Отмечайте выполненные пункты через `[x]`.

## Уже сделано

- [x] Созданы отдельные crawlable URL для языков: `/` и `/en/`.
- [x] Установлены корректные `lang` атрибуты: `ru` и `en`.
- [x] Добавлены уникальные локализованные `<title>` и meta description.
- [x] Добавлены self-referencing canonical URL для обеих языковых страниц.
- [x] Добавлены reciprocal `hreflang` для `ru`, `en` и `x-default`.
- [x] Добавлены Open Graph и Twitter Card metadata.
- [x] На каждой странице есть один основной H1.
- [x] Есть логичная структура H2/H3: услуги, обо мне, отзывы, FAQ, контакты.
- [x] В контенте естественно указаны Тирасполь, Балка, ТЦ "Причерноморье" и ул. Юности, 6.
- [x] Телефон указан и кликабелен через `tel:+37377899366`.
- [x] Добавлены ссылки на Telegram, WhatsApp, Viber и Instagram.
- [x] Указаны подтвержденные часы работы: ежедневно с 09:00 до 21:00, скользящий график.
- [x] Цены не указаны, согласно ответам клиента.
- [x] Добавлено медицинское предупреждение, что массаж не заменяет врача.
- [x] У основных изображений есть `width`, `height` и осмысленный `alt`.
- [x] Hero image не lazy-loaded и имеет `fetchpriority="high"`.
- [x] Below-the-fold изображения lazy-loaded.
- [x] Добавлены favicon и apple-touch icon.

## Сделать до публикации

- [x] Production-домен установлен: `https://olga-dorma-massage.netlify.app/`.
- [x] Обновлены `canonical`, `hreflang`, `og:url` и `og:image` под production-домен.
- [x] При создании sitemap использовать production-домен.
- [x] Добавить `robots.txt`:
  - `User-agent: *`
  - `Allow: /`
  - `Sitemap: https://olga-dorma-massage.netlify.app/sitemap.xml`
- [x] Добавить `sitemap.xml` с каноническими URL:
  - `/`
  - `/en/`
- [x] Проверить, что sitemap не содержит redirect, preview, test или error URL.
- [x] Добавить JSON-LD structured data для локального бизнеса на основе подтвержденных данных.
- [x] Использовать безопасный тип structured data: `HealthAndBeautyBusiness` или подходящий `LocalBusiness` subtype.
- [x] Не добавлять `MedicalClinic`, `Physician`, `Doctor`, `Physiotherapist`, если клиент не подтвердит юридические основания.
- [x] Не добавлять `aggregateRating`, review schema, цены, координаты или неподтвержденные поля.
- [ ] Провалидировать JSON-LD через Google Rich Results Test и Schema Markup Validator.
- [x] Создать отдельное social image 1200x630 для Open Graph/Twitter.
- [x] Заменить `og:image` на production URL этой social image.
- [ ] Добавить реальную страницу политики конфиденциальности вместо ссылки `#`.
- [ ] Проверить, что отзывы являются реальными и подтвержденными клиентом.
- [ ] Если отзывы не подтверждены, удалить их или заменить на нейтральный блок без имитации клиентских цитат.

## Производительность и Core Web Vitals

- [ ] Сконвертировать крупные PNG/JPG в AVIF/WebP с fallback.
- [ ] Подготовить responsive версии изображений для mobile/tablet/desktop.
- [ ] Добавить `srcset` и `sizes` для hero, service, about и footer images.
- [ ] Уменьшить вес hero image, чтобы улучшить LCP на мобильных.
- [ ] Проверить, что мобильный браузер не загружает desktop-size изображения.
- [ ] Рассмотреть self-hosting шрифтов в WOFF2.
- [ ] Добавить `font-display: swap`, если шрифты будут self-hosted.
- [ ] Минифицировать production HTML, CSS и JS.
- [ ] Удалить неиспользуемый CSS/JS перед production.
- [ ] Проверить, что Google Maps iframe не ухудшает LCP и грузится lazy.
- [ ] Прогнать Lighthouse/PageSpeed на production URL.
- [ ] Достичь ориентиров:
  - LCP <= 2.5s
  - INP <= 200ms
  - CLS <= 0.1
  - Mobile Lighthouse SEO 95+
  - Mobile Lighthouse Accessibility 90+
  - Mobile Lighthouse Best Practices 90+
  - Mobile Lighthouse Performance 90+

## Crawlability и production-настройки

- [ ] Production сайт открывается по HTTPS.
- [ ] HTTP перенаправляется на HTTPS через 301.
- [ ] Все варианты hostname перенаправляются на один canonical hostname.
- [ ] Выбрана и соблюдается единая trailing-slash стратегия.
- [ ] `/` возвращает HTTP 200.
- [ ] `/en/` возвращает HTTP 200.
- [ ] Несуществующие URL возвращают реальный HTTP 404.
- [ ] Production pages не содержат `noindex`.
- [ ] Preview, staging и deploy-preview окружения закрыты от индексации.
- [ ] CSS, JS, fonts и изображения доступны поисковым роботам.
- [ ] Основной контент присутствует в initial HTML и понятен без JavaScript.

## Local SEO вне сайта

- [ ] Создать или обновить Google Business Profile.
- [ ] Использовать единый NAP во всех источниках:
  - Массажный кабинет Дормы Ольги
  - г. Тирасполь, Балка, ТЦ "Причерноморье", ул. Юности, 6
  - +373 778 99 366
- [ ] Добавить production URL в Google Business Profile.
- [ ] Добавить тот же production URL в Instagram.
- [ ] Проверить совпадение часов работы на сайте, Google Business Profile и Instagram.
- [ ] Добавить сайт в Google Search Console.
- [ ] Отправить `sitemap.xml` в Google Search Console.
- [ ] Проверить `/` и `/en/` через URL Inspection.
- [ ] Проверить индексируемость после публикации.

## Возможные улучшения после запуска

- [ ] Добавить отдельные страницы услуг только при наличии достаточного уникального, подтвержденного клиентом контента.
- [ ] Не создавать thin pages под варианты ключей вроде singular/plural или "near me".
- [ ] Расширить описания услуг без медицинских обещаний и keyword stuffing.
- [ ] Добавить реальные клиентские отзывы только после подтверждения их подлинности.
- [ ] Добавить FAQPage schema только если это будет соответствовать актуальным правилам Google и реальному содержимому страницы.
- [ ] Периодически обновлять sitemap `lastmod` только при реальных изменениях контента.
