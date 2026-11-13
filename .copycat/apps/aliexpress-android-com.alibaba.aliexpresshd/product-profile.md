# Product profile — AliExpress \- Shopping App

Generated: 2026-11-13T10:30:00Z
Product ID: `android-com-alibaba-aliexpresshd` · Identity: platform-specific · Platform: android · Stable ID: `com.alibaba.aliexpresshd`
Developer: Alibaba Mobile

## Positioning

- Category: Cross\-border discount marketplace \(shopping\)
- Promise: Low\-priced cross\-border marketplace for goods mostly shipped from China, with a curated 'Choice' tier that adds free shipping above a low threshold, delivery commitments, and free returns in selected countries\.
- Sources: S01, S12, S14

## Official domains

| URL | Status | Evidence | Accessed |
|---|---|---|---|
| https://www\.aliexpress\.com | probable | Play listing brand name AliExpress by Alibaba Mobile; Alibaba Group corporate page describes AliExpress Choice; AliExpress API Use Agreement is hosted on Alibaba's terms\.alicdn\.com\. Not fetched directly: in\-session page fetches to non\-allowlisted hosts failed, and the store developer link was not inspected\. | 2026\-11\-13 |
| https://ds\.aliexpress\.com | ambiguous | Only third\-party dropshipping\-tool blogs name this as the Dropshipping Center address; not fetched or confirmed on an AliExpress\-controlled page\. | 2026\-11\-13 |

## Features

| Workflow | Capability | Evidence | Tier | Audiences | Confidence | Sources |
|---|---|---|---|---|---|---|
| browse/purchase | Large third\-party seller marketplace for inexpensive goods from China, bought through the mobile app | user\_validated | — | Israeli price\-sensitive online shoppers, US/UK bargain shoppers | high | S01, S02 |
| shipping/fulfilment | Choice items: free shipping on orders over $10 or of three or more items in most markets | official\_claim | Choice\-labelled items | Israeli price\-sensitive online shoppers, US/UK bargain shoppers | medium | S12, S03 |
| shipping/fulfilment | Free doorstep delivery to Israel on orders over $45 \(report undated; current status unverified\) | third\_party\_signal | — | Israeli price\-sensitive online shoppers | low | S03 |
| shipping/fulfilment | China\-to\-Israel delivery reported at about one week to 10 days; Israeli warehouses allow faster delivery for stocked items | third\_party\_signal | — | Israeli price\-sensitive online shoppers | medium | S03, S05, S06 |
| shipping/fulfilment | Israeli last\-mile logistics arm \(Parcel Home\), launched 2024, with about 45 distribution points as of April 2026 | third\_party\_signal | — | Israeli price\-sensitive online shoppers | medium | S06 |
| marketplace supply | Israeli\-registered businesses can sell directly to Israeli shoppers on AliExpress, with faster domestic shipping for electronics, appliances, and e\-bikes | third\_party\_signal | — | Israeli local merchants, Israeli price\-sensitive online shoppers | medium | S04 |
| trust/privacy | Buyer Protection: disputes or refunds for non\-delivery within the guaranteed window or for items not as described or damaged \(about 15 days after receipt, per guides that disagree on the window\) | third\_party\_signal | — | Israeli price\-sensitive online shoppers, US/UK bargain shoppers | low | S15 |
| support/recovery | Choice delivery guarantee in Israel: refund if an order is lost or not delivered after 45 days \(reported, undated\) | third\_party\_signal | Choice\-labelled items | Israeli price\-sensitive online shoppers | low | S03 |
| support/recovery | US: $1 coupon for a missed Choice delivery date; first return per parent order free; returns start within 90 days of payment | official\_claim | Choice\-labelled items | US/UK bargain shoppers | medium | S13 |
| support/recovery | Dispute and customer\-service experience: users report bot\-only support, being charged return postage for wrong or faulty items, and difficulty disputing misleading listings | requested\_gap | — | US/UK bargain shoppers, Israeli price\-sensitive online shoppers | medium | S02 |
| trust/privacy | Listing trust: users report fake 5\-star reviews, misleading photos and descriptions, and scam shops | requested\_gap | — | US/UK bargain shoppers, Israeli price\-sensitive online shoppers | medium | S02 |
| browse/purchase | App usability: users report a cluttered UI, confusing games and coins, navigation that jumps to the home page, slowdowns, and a cart that fails to accept items | requested\_gap | — | US/UK bargain shoppers | medium | S02 |
| integrations | Dropshipping Center: free in\-account tool for product research, supplier vetting, and volume\-based dropshipper tiers | third\_party\_signal | Dropshipper program \(rules acceptance required\) | Dropshippers and small branded storefronts | medium | S16 |
| integrations | AliExpress Open Platform: Basic APIs open to all business types; Value\-Added APIs need an AliExpress\-approved application, under an API Use Agreement last updated January 2022 | official\_claim | Developer account; Value\-Added APIs gated | Dropshippers and small branded storefronts | medium | S17 |
| integrations | Dropshipper order placement and logistics\-tracking endpoints \(about 185 endpoints overall, with no official OpenAPI spec\) | third\_party\_signal | Developer account | Dropshippers and small branded storefronts | low | S18 |
| billing/credits | Israeli customer club \(loyalty program\), reportedly launched alongside expectations of more than 20 million packages a month | third\_party\_signal | — | Israeli price\-sensitive online shoppers | low | S20 |
| localization | Hebrew/RTL interface and ILS checkout in the app and web store | unknown | — | Israeli price\-sensitive online shoppers | low | — |

## Audiences

| Segment | Classes | Trigger | Job | Pains | Channels | Markets | Confidence |
|---|---|---|---|---|---|---|---|
| Israeli price\-sensitive online shoppers | stated, paying, reachable | Wants cheap gadgets or everyday goods that local retail prices high | Buy low\-cost products online with acceptable, trackable delivery to Israel | 18% VAT on packages over $75 since the exemption hike was revoked, Delivery disruption during the March 2026 war period, Misleading listings and slow disputes | AliExpress app, Singles' Day promotions, Israeli consumer news coverage, AliExpress Israel customer club | il | medium |
| US/UK bargain shoppers | stated, paying | Item unavailable or overpriced locally | Buy inexpensive goods from China | Fake reviews and items that don't match the photos, Bot\-only customer service, Return postage charged for faulty items, Rising prices, App bugs | Google Play, AliExpress app | us, gb | medium |
| Dropshippers and small branded storefronts \(Israball's position\) | stated, reachable | Wants to sell AliExpress\-sourced goods under their own brand without holding inventory | Source products, push customer orders to AliExpress suppliers, and track fulfilment | Value\-Added API access needs AliExpress approval, No official OpenAPI spec, Supplier quality and long delivery times passed on to end customers | ds\.aliexpress\.com \(per third parties\), AliExpress Open Platform, Dropshipping\-tool marketplaces | global | medium |
| Israeli local merchants | stated | AliExpress opened its marketplace to Israeli\-registered businesses | Reach Israeli shoppers through AliExpress traffic with domestic delivery | Hard to match Chinese sellers' prices | AliExpress seller onboarding | il | medium |
| Israeli shoppers who want curated, trustworthy, fast niche selection | underserved, inferred | Bad experience with a misleading listing, a slow dispute, or war\-time shipping uncertainty | Buy a specific category \(e\.g\., sports gear\) without vetting sellers or waiting weeks | Seller and listing vetting burden, Uncertain delivery and recourse, Cluttered app with games and coins | — | il | low |

## Pricing

| Plan | Price | Currency | Period | Limits | Source |
|---|---|---|---|---|---|
| App download | 0 | ILS/USD/GBP | — | — | S01 |
| Choice free\-shipping threshold | 10 | USD | per order | Or three or more Choice items, Applies in most markets; Israel status not confirmed on an official page | S12 |
| Israel free doorstep delivery threshold | 45 | USD | per order | Reported, undated; current status unverified | S03 |
| Israel personal\-import VAT exemption \(regulatory, not an AliExpress plan\) | 75 | USD | per package | 18% VAT above the limit, Customs release date decides the rule that applies, $130/$150 hikes revoked by the Knesset, the latest in about late June 2026 | S10 |
| Choice late\-delivery compensation \(US\) | 1 | USD | per late order | First return per parent order free, Returns must start within 90 days of payment | S13 |
| Dropshipping Center | 0 | USD | — | Must accept dropshipping program rules, Volume tiers \(Normal, C, B, A\) unlock better sourcing prices | S16 |

## Source ledger

| ID | Class | Title | Market | Accessed | Prompt injection suspected |
|---|---|---|---|---|---|
| S01 | store\_listing | AliExpress \- Shopping App \(Google Play listing metadata\) | il, us, gb | 2026\-11\-13 | False |
| S02 | app\_review | Sampled Google Play reviews \(75 unique, Nov 2024 to Nov 2026\) | il, us, gb | 2026\-11\-13 | False |
| S03 | search\_result | Ynet: AliExpress begins free doorstep shipping to Israel on orders over $45 | il | 2026\-11\-13 | False |
| S04 | search\_result | Ynet: AliExpress opens platform to Israeli sellers, promising faster deliveries, competitive prices | il | 2026\-11\-13 | False |
| S05 | search\_result | Globes: AliExpress opens warehouses in Israel | il | 2026\-11\-13 | False |
| S06 | search\_result | Globes: Amazon struggles to capture online retail foothold in Israel | il | 2026\-11\-13 | False |
| S07 | search\_result | Jerusalem Post consumerism article 906396 \(Shop Analytics index\) | il | 2026\-11\-13 | False |
| S08 | search\_result | Globes: Israeli overseas online purchases plunge during Iran war | il | 2026\-11\-13 | False |
| S09 | search\_result | Times of Israel: Knesset revokes Smotrich's tax exemption for online purchases from abroad of up to $150 | il | 2026\-11\-13 | False |
| S10 | search\_result | Ynet: That package you ordered from abroad just got more expensive: VAT exemption back to $75 | il | 2026\-11\-13 | False |
| S11 | search\_result | Globes: Smotrich publishes order doubling personal imports tax exemption | il | 2026\-11\-13 | False |
| S12 | official | Alibaba Group: What is AliExpress' Choice? | global | 2026\-11\-13 | False |
| S13 | search\_result | AliExpress boosts US customer experience with new updates \(press release via Investing\.com\) | us | 2026\-11\-13 | False |
| S14 | search\_result | AAP release: AliExpress Launches AliExpress Choice and Announces First\-Ever Choice Day | global | 2026\-11\-13 | False |
| S15 | third\_party | ShopBack: Is AliExpress legit and safe for US buyers | us | 2026\-11\-13 | False |
| S16 | third\_party | Ryviu: AliExpress Dropshipping Center | global | 2026\-11\-13 | False |
| S17 | documentation | AliExpress Open Platform API Use Agreement | global | 2026\-11\-13 | False |
| S18 | third\_party | Jentic: AliExpress API catalogue | global | 2026\-11\-13 | False |
| S19 | search\_result | Ynet: Cheaper than AliExpress: Chinese website TEMU starts shipping to Israel | il | 2026\-11\-13 | False |
| S20 | search\_result | Ynet: AliExpress launches customer club in Israel, expects more than 20 million packages next month | il | 2026\-11\-13 | False |
| S21 | search\_result | Ynet business article byuzrk11rq \(AliExpress local presence in Israel\) | il | 2026\-11\-13 | False |

## Contradictions

- \{'claim': 'Israeli delivery times conflict: a 3\-7 business\-day target \(2022 warehouse pilot\), about a week to 10 days from China \(Ynet\), and 7\-10 days via local warehouses \(Globes 2026\)\.', 'source\_ids': \['S03', 'S05', 'S06'\]\}
- \{'claim': 'VAT\-exemption sources conflict \($150 effective Dec 23, 2025; $130 reissued Feb 2026; $75 restored\)\. The latest evidence points to $75 since about late June 2026\.', 'source\_ids': \['S09', 'S10', 'S11'\]\}
- \{'claim': 'Choice free\-return caps differ by source \(first return per order, up to 5 per month, up to 3 per month\), as do covered country counts\.', 'source\_ids': \['S12', 'S13'\]\}
- \{'claim': 'Israel free\-shipping thresholds differ: $45 doorstep delivery versus $10 for Choice items\.', 'source\_ids': \['S03', 'S12'\]\}
- \{'claim': 'Store ratings differ by storefront \(il 4\.56 vs gb 4\.18\), but 71 of 75 sampled reviews appeared in multiple markets, so the review sample is not market\-specific\.', 'source\_ids': \['S01', 'S02'\]\}

## Risks

- \{'claim': "AliExpress is closing the speed gap in Israel itself \(local warehouses, Parcel Home, Israeli sellers\), which erodes a 'faster than AliExpress' angle for Israball\.", 'source\_ids': \['S04', 'S05', 'S06'\]\}
- \{'claim': 'Inference: shoppers can find the same item on AliExpress, so any Israball markup is easy to expose; differentiation has to come from curation, Hebrew service, and recourse rather than access to products\.', 'source\_ids': \['S02', 'S07'\]\}
- \{'claim': 'Price ceiling pressure: Temu is positioned in Israel as cheaper than AliExpress, and users describe AliExpress prices as rising\.', 'source\_ids': \['S19', 'S02'\]\}
- \{'claim': 'Policy volatility: the VAT exemption changed three times between Dec 2025 and mid\-2026 under local\-retailer lobbying\.', 'source\_ids': \['S09', 'S10', 'S11'\]\}
- \{'claim': 'Geopolitical shocks cut cross\-border orders sharply: in March 2026, Amazon orders fell 75% and Temu 68% as Israelis shifted to local sites\.', 'source\_ids': \['S08'\]\}
- \{'claim': 'Inference: when Israball dropships, Buyer Protection disputes belong to Israball as the AliExpress buyer, so Israball absorbs refund and return costs that users already report as painful\.', 'source\_ids': \['S02', 'S15'\]\}
- \{'claim': "AliExpress's earlier local presence in Israel faded by late 2021, a signal that local\-presence initiatives can be withdrawn\.", 'source\_ids': \['S21'\]\}

## Unknowns

- \{'claim': "Official AliExpress, Alibaba Group, and Ynet pages could not be fetched \(hosts outside the session's allowed network\), so all official claims come from search\-result snippets and stay unverified\.", 'source\_ids': \['S03', 'S12'\]\}
- \{'claim': 'Current Choice terms for Israel are unknown: free\-return availability, delivery\-guarantee window, and late\-delivery compensation\.', 'source\_ids': \['S03', 'S12'\]\}
- \{'claim': 'The date and current validity of the $45 Israel free doorstep\-delivery threshold are unknown\.', 'source\_ids': \['S03'\]\}
- \{'claim': 'Whether the AliExpress app and web store offer Hebrew/RTL and ILS checkout is unknown\.', 'source\_ids': \['S01'\]\}
- \{'claim': 'Current Dropshipping Center and Open Platform terms are unknown, including whether dropship orders to Israeli addresses support neutral or unbranded packaging and Israeli logistics options\.', 'source\_ids': \['S16', 'S17'\]\}
- \{'claim': 'No price anchors were collected for candidate niches \(sports gear, home gadgets, pet supplies\) on AliExpress, Temu, Shein, or Israeli retailers\.', 'source\_ids': \[\]\}
- \{'claim': 'No current delivery terms were collected for Israeli local substitutes \(Ivory, Zap, Wallashops, KSP delivery SLAs\) or for Temu/Shein in Israel\.', 'source\_ids': \['S07'\]\}
- \{'claim': 'The official Buyer Protection dispute window and coverage rules are not confirmed on an AliExpress\-controlled page\.', 'source\_ids': \['S15'\]\}
- \{'claim': 'GB market web evidence was not gathered beyond store metadata; US evidence is limited to store metadata and one press release\.', 'source\_ids': \['S01', 'S13'\]\}
