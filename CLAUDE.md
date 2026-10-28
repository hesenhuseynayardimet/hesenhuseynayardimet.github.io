# Notes for Claude

Static site (index.html + style.css + script.js), served by GitHub Pages. Bump the
`?v=` query on style.css / script.js in index.html whenever either file changes.

## Paid-until lock

- `PAID_UNTIL` lives in the inline `<script>` at the top of `<head>` in `index.html`.
  It is the end of the paid day in Baku time (`...T23:59:59+04:00`).
- After that moment the page aborts loading and shows only a short
  "temporarily unavailable" message (AZ/TR/RU/EN, from the `lang` in localStorage),
  with `robots=noindex`. No styles, fonts, pixels, images or script.js load.
- To extend: `/expiry-lock <new date>`, or edit the date by hand, commit, push.

## Days-left chip

`#paidChip` in the hero's top-right corner shows the number of paid days left
(`renderPaidChip` in script.js, reading `window.PAID_UNTIL`). It is a neutral
billing marker for the site's builder, not part of the campaign: no ring, no
campaign colours. The number turns red in the last 3 days and the chip hides at 0.
Its aria-label/title text is in `I18N` under `paid.daysLeft` / `paid.lastDay`.
