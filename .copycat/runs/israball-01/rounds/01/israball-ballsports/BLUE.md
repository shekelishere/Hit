---
artifact: copycat-candidate-blue
schema_version: 1
run_id: israball-01
candidate_id: israball-ballsports
round: 1
input: INPUT.md
input_sha256: 3e2e031bf015be41dd1c6aa679760df39488e702bd1d250ac2624bcf770a6b52
---

# Blue: Israball, a Hebrew-first ball-sports store with Israel-side size exchange

## Verdict

**VALIDATE.** The thesis holds together: a small, vetted catalogue of football, basketball and padel gear, sizes measured by Israball, and an Israel-side human exchange/return in Hebrew. It goes after a failure the evidence names (P2/P3 listing-vs-reality and return pain; the WE BALL size-exchange gap; no dedicated Israeli online ball-sport specialist found). Every supporting signal is a public review or a market observation. There is no behavioral evidence. The counterevidence goes straight at the monetization premise: price is the main retention reason in every corpus, no trust premium is shown, and Wish users left for Temu on price. A `BUILD` verdict is not justified. The one decisive test that is ready is the Hebrew fake-door three-way message split from INPUT.md, tightened below so price-led traffic cannot mask the result and with an added price-premium arm. Running it needs separate user approval for ad spend or community outreach, because both are out of scope under the current constraints.

## Evidence ledger

Source for every row: INPUT.md (which cites 03-review-evidence.md, 03-market-evidence.md and 04-candidates.md). Underlying files were not opened by this worker, per the boundary.

| # | Premise | Status | Note |
|---|---|---|---|
| E1 | Shoppers complain that photos and sizes do not match what arrives (P2), and about return and refund friction (P3) | EVIDENCE | Global English Google Play reviews. No Hebrew reviews, not country-routed |
| E2 | WE BALL has a size-exchange gap | EVIDENCE (thin) | Rests on **one review** |
| E3 | No dedicated Israeli online ball-sport specialist was found | EVIDENCE (absence) | Partial profiles. Absence of evidence, not proof of absence |
| E4 | Category table stakes: competitive price, free shipping above a low threshold, stage-by-stage tracking, ~90-day refund for non-delivery/damage/not-as-described, ILS pricing, accounts, fast checkout | EVIDENCE | 03-market-evidence.md §7 |
| E5 | Price is the main retention reason in every corpus | EVIDENCE (contradicting) | Goes straight at the 25–40% premium |
| E6 | No trust premium is shown anywhere | EVIDENCE (gap, contradicting) | |
| E7 | Wish churn went to Temu on price | EVIDENCE (contradicting) | Analogue: trust/quality loses to price |
| E8 | AliExpress local warehouses and Parcel Home are closing the speed gap | EVIDENCE (contradicting) | Delivery speed is not a durable wedge |
| E9 | Israeli ball-sport demand is unmeasured | GAP | Decision-critical |
| E10 | Israeli VAT exemption threshold is unknown ($75 vs $130/$150) | GAP | Sets basket cap and pricing |
| E11 | Reseller owns Buyer Protection disputes and return costs | EVIDENCE (constraint) | Unit-economics risk |
| E12 | Wartime delivery shocks | EVIDENCE (risk) | Delivery reliability and trust |
| E13 | Sourcing via AliExpress Dropshipping Center / Open Platform. Value-Added APIs gated | EVIDENCE (constraint) | Limits automation and data |
| I1 | Size error is concentrated in footwear, apparel, goalkeeper gloves, shin guards and padel grip/weight, not in balls (standard sizes 3–7) | INFERENCE | Narrows where the wedge bites |
| I2 | An Israel-side exchange needs a small local buffer stock of fast-moving sizes, or the reseller absorbs a second cross-border shipment | INFERENCE | Main feasibility cost |
| I3 | Parents buying youth gear across seasons (kids outgrow sizes) are the most exchange-sensitive segment | INFERENCE | Basis for ICP |
| A1 | Israeli shoppers will pay 25–40% over AliExpress for vetted sizing plus local exchange | ASSUMPTION | Contradicted in direction by E5–E7 |
| A2 | Clubs, youth leagues and WhatsApp groups can be reached cheaply and convert | ASSUMPTION | Untested channel |
| A3 | Israball-measured size guides cut exchange rates enough to make local exchange affordable | ASSUMPTION | |
| A4 | Hebrew-first UI and service is valued beyond what translated marketplaces already give | ASSUMPTION | Review corpus has no Hebrew data |

Coverage: `il` is the primary market, but the Israeli signal comes indirectly from market evidence. The review corpus is not Israeli. `us` and `gb` are listed as secondary, with no market-specific evidence in INPUT.md. The wedge (Hebrew-first, Israel-side returns) does not carry over to them.

## Target, job, and wedge

- **ICP:** Hebrew-speaking parents in Israel who buy football or basketball gear (boots, kits, shin guards, goalkeeper gloves, balls) for children in organized youth leagues or clubs, plus adult amateur padel players buying a first or replacement racket (I3; INPUT target).
- **Trigger:** start of season or league registration, a child outgrowing a size, or a new padel player choosing a first racket.
- **JTBD:** "Get the right-size, as-pictured ball-sport gear before the next practice, at a price I don't feel cheated on, without gambling on a return I can't make."
- **Current workaround:** buy direct on AliExpress/Temu and guess the size, pay local chain prices, or use a foreign specialist with costly international returns (INPUT).
- **Consequence:** wrong size or not-as-described item (E1), a dead-end or expensive return (E1, E2), a child without usable gear on time, and the money lost or spent twice.
- **Switching reason:** one Hebrew-speaking place where the size you pick is the size that fits, and a wrong size is swapped inside Israel without international return postage, at a price close enough to AliExpress to make the certainty worth it.
- **Wedge:** *size certainty + local exchange* for youth and amateur ball-sport gear. Not price, not speed (E5, E8).

## Originality and differentiation

**Generic table stakes, adopted and not differentiating:** competitive ILS prices, free shipping above a low threshold, stage-by-stage tracking, a ~90-day refund for non-delivery, damage or not-as-described, accounts and fast checkout (E4). These are needed just to be considered. None of them makes a reason to switch.

**Not differentiation:** a lower price, a free tier, more SKUs, renamed features, and Hebrew translation on its own (A4 untested).

**Differentiation thesis:** Israball changes the *outcome* and the *recovery workflow*, not the catalogue size. (1) A curated, small catalogue where each SKU's size chart and photos come from Israball's own measurement of received samples. The promise is "what you see is what arrives." (2) An Israel-side human size exchange: the customer gets a Hebrew-speaking contact and a local drop-off or pickup, the replacement ships from local buffer stock, and refunds go to the original card. Marketplaces give a dispute process. Israball takes on sizing risk as a service. If it can be operated, this differs from AliExpress/Temu (dispute-centred, cross-border), local chains (higher price, broad and not specialist) and foreign specialists (costly returns).

**Defensibility path (hypothesis):** a proprietary measured-size dataset per SKU, accumulated exchange data that sharpens size recommendations (for example "kids in this league size up a half"), and relationships with clubs and leagues. All of it is slow-building and nothing is proven.

**Originality guardrails:** original name (Israball), Hebrew copy, own product photography of received samples, own size-guide format and interaction design. No AliExpress, Temu or WE BALL listing copy, photos, marks or branding. No gamification, coins or click-to-buy mechanics. The incumbent's bundle is not reproduced: the catalogue stays deliberately narrow.

## MVP boundary and critical flow

**Smallest test of the wedge (pre-build):** a Hebrew fake-door landing page with three message arms, and a fourth arm that shows the price premium (see T1).

**Bounded validation build, only after T1–T3 pass:**

- **Entry:** a Hebrew landing page reached from a club or league WhatsApp share or a Hebrew search. A sport → age/size → item picker.
- **Activation:** the user enters the child's foot length or age and gets an Israball-measured size recommendation for one of roughly 20–40 SKUs (boots, shin guards, GK gloves, balls, 3–5 padel rackets).
- **Success:** checkout in ILS under the VAT-safe basket cap (cap set once E10 is resolved), tracking, item arrives and fits, confirmed by a post-delivery "did it fit?" prompt.
- **Failure/recovery:** "doesn't fit" → Hebrew human contact → local drop-off/pickup → replacement from Israel buffer stock, or a refund to the original card. Non-delivery or damage → refund under the ~90-day policy. Wartime delay → proactive Hebrew status message and a refund option.
- **Repeat-use loop:** a size profile per child, a season-start reminder ("size up?"), and a club group link for teammates.
- **Non-goals:** a broad catalogue or sports outside football, basketball and padel; marketplace or third-party sellers; gamification; competing on lowest price or fastest delivery; full native iOS/Android apps before validation (mobile web first; native apps are a stated constraint, deferred to post-validation); `us`/`gb` launch; automated supplier APIs beyond Dropshipping Center basics.

## Business hypotheses

- **Monetization:** product margin over AliExpress landed cost. The INPUT's 25–40% "trust premium" is **unsupported and contradicted** (E5–E7). Hypothesis to test: a premium of 15–25% is acceptable when tied to a visible guarantee ("fits or swapped locally"). Margin has to cover buffer stock, exchange logistics and Buyer Protection losses (E11).
- **Primary acquisition channel:** youth football and basketball club and league WhatsApp groups, reached through coaches or parent committees (A2). Hebrew search is secondary. Outreach needs separate approval.
- **Defensibility:** the measured-size dataset and exchange history, plus club relationships (hypothesis; slow-building).
- **Largest feasibility/trust risk:** local exchange economics. Dropshipped single units with no local stock mean every exchange is a second cross-border shipment plus return cost owned by the reseller (I2, E11). Without a cheap buffer-stock model, the promise cannot be kept.

## Assumptions and falsification tests

Ranked by risk × decisiveness.

| Rank | Assumption | Cheap test | Success | Pivot | Kill |
|---|---|---|---|---|---|
| 1 | A1 + wedge: trust/returns messaging beats price messaging, and survives showing the price premium | T1: Hebrew fake door, 4 arms (cheapest / fits-or-swapped-locally / delivery date / fits-or-swapped at +20% shown price), ≥300 Israeli ball-sport visitors per arm, recruited from sports-intent sources rather than discount sources | The trust arm beats cheapest on pre-order/waitlist signups by ≥20% relative **and** the +20% arm keeps ≥70% of the trust arm's rate | Trust ≈ cheapest (within ±20%) or the premium arm falls below 70% → pivot to thin-margin, size-guide-led content/affiliate | Cheapest beats trust by >20% → NO_GO on the trust wedge |
| 2 | I3/A2: youth-league parents are reachable and responsive | T2: share the landing page in 5–10 club/league groups (with approval); count clicks and signups | ≥10% click-to-signup and ≥50 signups from community sources | Low community conversion but good search conversion → switch primary channel to search | <15 signups across all groups → ICP or channel invalid |
| 3 | E9: enough Israeli ball-sport demand exists | T3: Hebrew keyword volume for target items plus waitlist size from T1/T2 | Waitlist ≥200 within 3 weeks | 80–200 → narrow to a single sport (e.g. youth football boots) | <80 → NO_GO |
| 4 | I2/A3: local exchange is affordable | T4: desk-model exchange cost from 5–10 sample orders measured on receipt (no customer contact) and quoted local buffer-stock cost | Exchange cost per order ≤8% of basket at a ≤15% expected exchange rate | 8–15% → restrict exchange to the top 10 SKUs or charge a small swap fee | >15% → drop the local-exchange promise (wedge collapses) |
| 5 | E10: baskets fit under the VAT exemption | T5: confirm the current Israeli threshold from an official source | Typical basket (≤1 pair of boots + accessories) fits under the cap | Cap at $75 → sell single items only, rework bundles | Typical basket items exceed the cap → re-price with VAT |
| 6 | A4: Hebrew-first service is valued | Fold into T1 as a secondary measure (Hebrew-service mention in copy vs control) | Measurable lift | No lift → keep Hebrew as table stakes only | n/a |

Thresholds are proposals. The adjudicator should fix them before the test runs.

## Risks

- **Price dominance (E5–E7):** the biggest strategic risk. Shoppers may say they value trust and then buy on price. The T1 premium arm exists to expose this.
- **Thin and non-local evidence:** the size-exchange gap rests on one review (E2). The review corpus is global English with no Hebrew, so Israeli pain is inferred.
- **Speed parity (E8):** AliExpress local warehouses and Parcel Home remove any delivery-speed angle. The wedge must not depend on it.
- **Unit economics (E11, I2):** the reseller owns disputes and return costs, and a local buffer stock ties up cash and adds inventory risk.
- **Sourcing quality:** vetted listings can still drift (a supplier swaps the product). Re-measurement and supplier monitoring are ongoing costs. Gated Value-Added APIs limit automation (E13).
- **Wartime delivery shocks (E12):** a trust brand is hurt more than a marketplace when delivery fails.
- **Regulatory (E10):** the unknown VAT threshold can break the basket model.
- **Scope/approval:** T1/T2 need ad spend or community contact, which are out of scope without separate approval. Payments are needed for real pre-orders, so T1 should use waitlist and deposit-intent signals unless payments are approved.
- **Secondary markets:** `us`/`gb` have no supporting evidence, and the Hebrew/Israel-side wedge does not transfer to them.

## Adjudicator handoff

- **Recommendation:** VALIDATE, not BUILD. Coherent wedge (size certainty + Israel-side exchange for youth and amateur ball-sport gear); zero behavioral evidence.
- **Decisive test:** T1, a 4-arm Hebrew fake door including a shown-premium arm, with sports-intent traffic and ≥300 visitors per arm. Kill if "cheapest" beats "fits-or-swapped-locally" by >20%. Pivot if the trust arm wins but the +20% arm keeps under 70% of its rate.
- **Changes Blue made to the INPUT thesis:** (1) narrowed the ICP to youth-league parents and padel beginners, since balls carry little size risk (I1); (2) cut the premium hypothesis from 25–40% to 15–25%, because the higher figure has no support (E5–E7); (3) added a premium-shown arm to the falsifier so price-led traffic or a free promise cannot fake a "trust wins" result; (4) named local buffer stock as the main feasibility cost (I2).
- **Strongest counterevidence for Red to press:** E5/E6/E7 (price dominance, no trust premium), E2 (one-review basis), E8 (speed parity), E11 (reseller-owned disputes).
- **Gaps that block BUILD:** Israeli demand (E9), VAT threshold (E10), exchange cost model (T4), no Hebrew or Israel-routed review data, no `us`/`gb` evidence.
- **Approvals needed before testing:** ad spend or community outreach for T1/T2. Payments if real pre-orders or deposits are used.
