---
artifact: copycat-candidate-result
schema_version: 1
run_id: israball-01
candidate_id: israball-ballsports
round: 1
outcome: PIVOT
input: INPUT.md
blue: BLUE.md
red: RED.md
input_sha256: 3e2e031bf015be41dd1c6aa679760df39488e702bd1d250ac2624bcf770a6b52
blue_sha256: 8a95ac225e6de28c3b4a66f447616cd7d7931091fb25980b0e2aa6aa221f7afc
red_sha256: 87690e031a0e59af76df5e9b1124a5e873f890a3581ce816fa3cbb0e38b1e553
---

# Candidate result: Israball, Hebrew-first youth ball-sports gear with Israel-side size exchange

## Decision

**PIVOT. Confidence: moderate-low (about 0.55).**

Blue and Red agree that BUILD is not justified. There is no behavioral evidence, Israeli demand is unmeasured, and `us`/`gb` have no evidence. They disagree on VALIDATE (Blue) versus PIVOT (Red). PIVOT is the better-supported outcome, for three reasons:

1. **The strongest evidence in the file contradicts the monetization premise.** Price is the main retention reason in every corpus, no trust premium is shown, and Wish users left for Temu on price (INPUT Counterevidence; BLUE E5–E7). Blue itself calls the INPUT's 25–40% premium "unsupported and contradicted," then replaces it with a 15–25% range that has no more support (RED evidence audit). As stated, the business model depends on a premium the evidence argues against.
2. **More than one decisive uncertainty remains under the stated model, so VALIDATE does not fit.** Blue's own handoff lists premium acceptance (T1), demand (E9), the VAT threshold (E10) and exchange cost (T4) as blocking. Red adds a structural conflict that Blue named but did not resolve: the "no international return postage" exchange needs local buffer stock (BLUE I2), and a reseller's local stock probably cannot ride the per-parcel VAT exemption that the basket model relies on (RED objection 1; tax treatment `UNVERIFIED`). Without local stock, each exchange is a second cross-border shipment paid by the reseller (BLUE E11). Passing T1 would still leave the model unfundable.
3. **Blue's decisive test cannot decide.** At ≥300 visitors per arm with a ≥20% relative-lift threshold across four arms, T1 cannot detect its own threshold at plausible base rates (RED objection 3; Red's arithmetic, not evidence, but not contested by Blue and falsifiable). A VALIDATE that rests on T1 would very likely return noise.

**The one material change:** move the operating model from "VAT-exempt dropship plus a premium over AliExpress" to "a small, VAT-paid, locally stocked range in one size-sensitive category (youth football boots and shin guards first), priced against local chains rather than AliExpress." The customer promise stays the same: measured sizing, Hebrew service, and exchange inside Israel with refund to the original card. What changes is the reference price. Certainty becomes a discount against chains, not a premium over AliExpress, so price dominance (E5–E7) works for the candidate instead of against it.

**What stays killed:**
- Any premium over AliExpress as the source of margin, at either the 25–40% (INPUT) or 15–25% (BLUE) figure.
- The VAT-exempt dropship basket as the funding model for the local-exchange promise.
- The three-sport, 20–40 SKU launch catalogue. Balls are a commodity line with little size risk (BLUE I1), and padel is a separate buyer.
- Delivery speed as any part of the wedge (BLUE E8).
- `us` and `gb` for this candidate. The wedge (Hebrew, Israel-side exchange, Israeli VAT) does not transfer, and there is no evidence for either market.
- Blue's four-arm, 300-per-arm fake door (T1) as the falsifier.
- Native iOS/Android apps before validation.

**Reversal evidence:**
- *Toward Blue's VALIDATE on the original model:* qualified tax/customs review confirms that replacements shipped from local stock keep the stated basket economics, **or** a dropship-only desk model shows exchange cost ≤8% of basket at a 15% exchange rate with no local stock.
- *Toward NO_GO:* the R1 landed-cost gate finds fewer than 3 of 10 SKUs reaching ≥10% contribution at a price at or below the lowest comparable local-chain price, **or** the later R2 price-shown test hits its kill threshold (certainty arm < 0.7× the lowest-price arm, or both arms < 1% of visitors).
- *Toward BUILD (after the pivot):* R1 passes, then R2 passes with B ≥ A and ≥50 reservations, and the qualified tax, IP, privacy and consumer-protection reviews raise no blocker.

## Target and job

- **ICP (narrowed, agreed by Blue and Red):** Hebrew-speaking parents in Israel who buy youth football boots and shin guards for children in organized clubs or leagues. Padel beginners and goalkeeper gloves are possible later categories, not launch scope.
- **Trigger:** start of season, league registration, or a child outgrowing a size.
- **JTBD:** "Get the right-size, as-pictured boots and shin guards before the next practice, for less than the local chain, without gambling on a return I can't make."
- **Current workaround:** AliExpress/Temu with a guessed size, local chain prices (with in-person exchange, `UNVERIFIED`), or a foreign specialist with costly returns (INPUT).
- **Consequence:** wrong size or not-as-described item, a dead-end or expensive return, a child without usable gear on time.
- **Switching reason after the pivot:** below-chain price, plus measured size certainty, plus a local Hebrew swap.
- **Correction carried from Red:** a child outgrowing a size drives *repeat purchase*, not exchange. Only wrong-size-at-purchase drives exchange cost. The youth segment's value is the seasonal repeat loop and the per-child size profile, not exchange volume (RED evidence audit on BLUE I3).

## Evidence and counterevidence

**Supporting (all observational, none behavioral):**
- Listing-vs-reality (P2) and return/refund friction (P3) complaints. These are global English Google Play reviews: no Hebrew, not country-routed, counts and category relevance not stated. Weak for an Israeli decision.
- WE BALL size-exchange gap. One review; anecdote.
- No dedicated Israeli online ball-sport specialist found. Absence of evidence from partial profiles. Local chains, the closest substitute, are not profiled.
- Category table stakes from 03-market-evidence.md §7. Solid as norms, not a differentiator.

**Counterevidence (the strongest material in the file):**
- Price is the main retention reason in every corpus; no trust premium shown; Wish to Temu churn on price (E5–E7). This is decisive against a premium model and is why the outcome is PIVOT, not VALIDATE.
- AliExpress local warehouses and Parcel Home are closing the speed gap (E8).
- The reseller owns Buyer Protection disputes and return costs (E11).
- Wartime delivery shocks (E12).
- Value-Added APIs are gated (E13), so catalogue and order sync are manual or semi-manual.

**Market coverage:**
- `il`: observed, partial and indirect. Market observations only, no Israeli or Hebrew review data, demand unmeasured.
- `us`: failed. No evidence; wedge does not transfer.
- `gb`: failed. No evidence; wedge does not transfer.

**Decision-controlling gaps:**
- Israeli VAT and customs treatment of a reseller's commercially imported stock versus personal parcels, and the current exemption threshold ($75 vs $130/$150).
- Price points and exchange policies for youth football boots at 3–5 Israeli chains.
- Israeli ball-sport demand and Hebrew search volume.
- Share of branded or lookalike-branded listings among AliExpress youth boots.
- Israeli distance-sale cancellation rules and any standards for children's sports products.
- Whether AliExpress/Temu already offer a Hebrew interface or Hebrew support.

**Load-bearing assumptions after the pivot (all unverified):**
- Landed cost including VAT, customs, inbound freight, buffer stock and exchange cost leaves room under chain prices.
- Bulk sourcing a single inbound batch is permissible under the "sourcing from AliExpress" constraint and removes per-order supplier drift.
- Club and league channels are reachable once outreach is approved.
- A Hebrew size-profile flow gets completed by parents.

## Product boundary

**Pre-build only.** Nothing is built until R1 passes and then R2 passes.

**Pivoted validation build (only after R1 and R2 pass):**
- **Scope:** one sport (football), one size-sensitive category (youth boots plus shin guards), roughly 10 SKUs that passed R1, held as local stock from a single inbound batch, VAT-paid, priced at or below 90% of the lowest comparable chain price.
- **Entry:** Hebrew landing page reached from Hebrew search or, with approval, a club/league share.
- **Activation:** enter the child's foot length or age and get a size recommendation from Israball's own measurement of received stock.
- **Success:** ILS checkout, local delivery, item fits, confirmed by a post-delivery "did it fit?" prompt.
- **Failure/recovery:** "doesn't fit" leads to a Hebrew human contact, then local drop-off or pickup, then a replacement from local stock or a refund to the original card. Non-delivery or damage is refunded under the ~90-day policy.
- **Repeat loop:** a per-child size profile and a season-start "size up?" reminder.

**Non-goals:** balls, padel, basketball, and other sports at launch; a broad catalogue; marketplace or third-party sellers; gamification, coins or click-to-buy; competing against AliExpress on price or speed; `us`/`gb`; native apps before validation (mobile web first).

**Out of scope without separate user approval:** sample or inventory purchases, payments or deposits, ad spend, community outreach, supplier contact, and customer contact.

## Originality and App Review

- **Originality: PASS.** Original name (Israball), Hebrew copy, own photography of received samples, own size-guide format and interaction design. No AliExpress, Temu or WE BALL branding, listing copy, photos or marks. No gamification. The narrow measured catalogue with local exchange does not reproduce the incumbent bundle. Added guardrails: no supplier listing photos even as placeholders; no branded or lookalike-branded SKUs; no implied affiliation with clubs, leagues or brands; every fake-door arm discloses that signup joins a waitlist; no "cheapest" claim unless it is true.
- **Guideline 4.1 Copycats: PASS.** Original identity and assets. Becomes RISK if supplier photos or listing copy enter the app.
- **Guideline 4.2 Minimum Functionality: RISK.** A native app over a ~10 SKU store is close to a repackaged website. It needs native value (child size profile, fit check, exchange booking, season reminders) before submission. Native apps are deferred until after validation.
- **Guideline 4.3 Spam: PASS.** One app with its own catalogue. Becomes RISK if separate sport-specific apps or a templated storefront are shipped.
- **Outside 4.1–4.3: RISK under 5.2 (Intellectual Property)** if counterfeit or lookalike-branded goods are listed (RED objection 4, `UNVERIFIED`). Not a BLOCK now, because no SKU list exists and the app is deferred. Qualified IP and trade-dress review of the SKU list is required before listing.
- **Privacy:** per-child size profiles collect data about minors. Consent and minimisation need qualified review under Israeli law (`UNVERIFIED`).

## Red Team residue

**Strongest surviving objection:** the pivoted model is unproven at its centre. Nobody has measured whether VAT-paid landed cost plus buffer stock plus exchange cost leaves a margin below local-chain prices (`UNVERIFIED`). If chains are cheap or already offer easy in-person exchange, the pivot has no room. R1 exists to settle this before any traffic spend.

**Other unresolved items:**
- Tax/customs treatment of local stock (objection 1). Needs qualified review. It now drives the pivot's cost model rather than blocking the original one.
- Counterfeit, IP and trade-dress exposure in branded-category SKUs (objection 4). Restrict to unbranded or private-label SKUs, pending qualified review.
- Supplier drift (objection 5). Reduced by single-batch local stock, but re-measurement per inbound batch is an ongoing cost.
- Local chains are unprofiled (objection 6). This is the targeted refresh R1 depends on.
- Channel gatekeeping, and club kit arrangements may already exist (objection 7, `UNVERIFIED`).
- Inventory risk introduced by the pivot: cash tied up in stock, dead sizes, carrying cost. Neither artifact quantifies it. It must be an explicit R1 input.
- Constraint tension: local stock means bulk purchases and supplier interaction, which are out of scope without approval. The INPUT sourcing constraint names Dropshipping Center / Open Platform. Whether bulk AliExpress sourcing satisfies it needs user confirmation.
- Consumer-protection (distance-sale cancellation) and children's-product standards (`UNVERIFIED`; qualified review).
- Wartime delivery shocks. Partly insulated by local stock; inbound batches remain exposed.

**Adjudicator-fixed test thresholds (adopting Red's design; the power arithmetic is Red's and not evidence):**
- **R1 landed-cost gate, 10 youth boot and shin-guard SKUs.** Pass if ≥6 reach ≥20% contribution at ≤90% of the lowest comparable chain price. Pivot if 3–5 qualify (launch only those, or a disclosed swap fee). Kill if fewer than 3 reach ≥10% contribution.
- **R2 price-shown test, only after R1 passes.** Two randomised arms, one category, sports-intent traffic, ≥1,600 visitors per arm fixed in advance, no peeking-based stopping. Primary metric: completed size-profile reservation. Pass if B ≥ A, B ≥ 3% of visitors, and ≥50 reservations. Pivot if B is between 0.7× and 1.0× A. Kill if B < 0.7× A or both arms < 1%. Under the pivot, the arms are re-anchored to chain pricing (A: lowest price with standard terms; B: certainty plus local swap at the R1 target price), and the premium gap is set from R1 output rather than assumed.

## Next action

**One bounded action: run the R1 landed-cost desk gate for 10 youth football boot and shin-guard SKUs, at zero spend first.**

1. **Inputs gathered by targeted refresh (no purchases, no contact):**
   - an official source for Israeli VAT, customs and exemption-threshold treatment of a reseller's commercially imported stock;
   - price points and exchange policies for youth football boots at 3–5 Israeli chains;
   - AliExpress bulk unit costs for unbranded or private-label SKUs only.
2. **Model:** landed cost (unit, VAT, customs, inbound freight), buffer stock for top sizes including dead-size write-off, exchange cost at a 15% exchange rate, and a Buyer Protection loss allowance.
3. **Decide** against the R1 thresholds above.

Sample purchases to measure received units, and the qualified tax/customs review, are the only follow-on steps inside R1. They need separate user approval before they happen. R2, ad spend, outreach, payments and any build stay blocked until R1 passes.
