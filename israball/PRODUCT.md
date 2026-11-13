# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

The storefront is a static web page (`index.html`), installable as a PWA. The phone app (`app/`) is a separate web app wrapped for iOS and Android with Capacitor (`mobile/`), and the PC app is the site wrapped with Electron (`desktop/`). The wrappers keep the web design language; none of them is a native-UI product.

## Users

Online shoppers in Israel, Hebrew first, who buy low-cost gadgets and usually go straight to AliExpress or Temu. English-speaking shoppers are a full secondary audience (confirmed: "Israel first, English second"). The job: buy a cheap gadget that actually does what the listing says, at a price that is clear before checkout, with a way to get help if it doesn't.

## Product Purpose

A small gadget shop that sells a curated set of low-cost gadgets sourced from AliExpress and tells the shopper what the product really does: the maker's claim next to a measured result. Success means shoppers in Israel trust Israball enough to pay a little more than the AliExpress listing because the choice and the recourse are handled for them.

## Positioning

Curation with evidence, in Hebrew: each listed model was bought and tested by Israball, the measured result is shown beside the claim, shortfalls are stated, and models that fail are not sold. Research for this product (`../.copycat/RESULT.md`) found that shoppers stay with Temu and AliExpress for price, that listing honesty and returns are their main complaints, and that no evidence yet shows they will pay a premium for trust. That premium is the open bet.

## Operating Context

- Fulfilment model (confirmed): **dropshipping from AliExpress**. Israball holds no stock in Israel; orders ship from AliExpress sellers.
- Testing covers a sample unit of each model, not the unit each customer receives. Supplier lots can change between batches.
- Personal imports to Israel are subject to a VAT exemption threshold that has changed repeatedly (recorded values: $75, $130, $150); the current value must be confirmed before prices are presented as all-in.
- Shopping happens mostly on phones; desktop browsing is supported.

## Capabilities and Constraints

- Hebrew right-to-left by default, with a full English version; prices in ₪, with $ as an estimate.
- Browse with search, categories, price filter, "only items that met the claim", and sorting; cart; a phone app with purchases, return windows and warranty dates.
- Checkout and payments are not connected. Nothing sends orders, pickups or messages yet.
- **Copy that conflicts with the dropship model and must change before launch:** "ships from stock in Israel", "arrives in 2–4 days", "a courier collects it from home" for returns, and any wording that implies the shipped unit itself was tested. Delivery time, return path and return cost need real terms from the AliExpress/dropship setup.
- Electrical and wireless products sold commercially in Israel may need standards approval; this is unchecked.
- Reusing AliExpress branding, listing copy or seller photos is out of bounds; product pictures must be Israball's own.

## Brand Commitments

- Name: "Israball" is a **placeholder** (the user is open to a new name). It came from an earlier ball-sports idea and no longer describes a gadget shop. A US brand holds "WE BALL" trademarks; any name needs a trademark check before launch.
- Voice so far: plain, first-person plural, specific numbers, admits shortfalls. Not confirmed as binding.

## Evidence on Hand

- Market research: `../.copycat/runs/israball-01/` (review analyses of AliExpress, Temu, Wish; market profiles; round 1 decision). Sources are public reviews and search snippets; there is no Israel-specific or Hebrew review data.
- **No real test results exist yet.** Every product, price, claimed value, measured value, tester note and "didn't make it" entry on the site and in the app is sample content.
- **No product photos exist.** `img/*.jpg` are 3D renders made with `tools/render-products.*`.
- No customers, reviews, ratings, sales figures, support phone number or WhatsApp number. Future work must not invent any of these.

## Product Principles

1. Never show a number that wasn't measured. Sample data stays labelled as sample until real tests replace it.
2. Say what the shopper will actually get: delivery time, return path and cost must match the dropship reality.
3. Lead with the evidence (claim vs measured), not with discounts or urgency. No countdowns, coins or gamified promotions.
4. Hebrew is the primary experience, not a translation; English must be equally complete.
5. Fewer, checked products beat a large catalogue.
