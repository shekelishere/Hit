---
artifact: copycat-candidate-result
schema_version: 1
run_id: israball-01
candidate_id: israball-gadgets
round: 1
outcome: VALIDATE
input: INPUT.md
blue: BLUE.md
red: RED.md
input_sha256: 51491b6ece45f1080d4c1f37edae503d9661345984d154accbb61c9a3bd04834
blue_sha256: 59c3c25cb544464843eecc6f7e9cd59d2c7151a593f530440c6260e6f01d389f
red_sha256: bbd84551eb3dd98763fae25712a26b8381c11ee5607e6a72ec879e5ba032e68a
---

# Candidate result: israball-gadgets

## Decision

**VALIDATE. Scope: `il` only. Confidence: low to medium (about 0.5).**

Blue and Red both reach VALIDATE (BLUE.md Verdict; RED.md Verdict). I accept that, for these reasons:

- **Why not BUILD:** there is no behavioral evidence of any kind. The central premise (A1: Israeli gadget buyers will pay a visible premium of 20–30% for accountable curation) has never been tested. The only behavioral statements in the inputs (C1 visible price gap, C4 price drives retention, C5 no trust premium shown) all go against it. Two App Review RISKs are open, and the tax, regulatory, trademark and claim-wording reviews have not been done.
- **Why not NO_GO:** the premise has not been disproven. It is untested. The counterevidence is summary-level and not specific to gadgets or to Israel (C3, G2), so it does not fatally settle the question. No proven fatal flaw was identified (RED.md Fatal flaws).
- **Why not PIVOT now:** the narrower small-batch, local-stock, local-retail-anchored version (RED.md Strongest surviving case) is a conditional fallback. Its triggers (R1, R2, R4, a weak T1 absolute rate) have not fired yet.

**The one decisive uncertainty:** A1 at the real price. Do Israeli gadget buyers take a committed action at the worst-case all-in ₪ price while the cheaper marketplace reference is visible, and does that beat both the cheapest message and the ball-sports card?

I adopt Red's redesigned T1 in place of Blue's T1. Red's objections to Blue's T1 are grounded in Blue's own text (RED.md R3, EVIDENCE status):
- The "notify me" action costs the visitor nothing.
- About 6 events per arm is too few to read.
- A separate video per card confounds the comparison by traffic source.
- The ±15% pivot band contradicts the kill rule.

The redesign keeps the INPUT.md falsifier unchanged. Pricing the trust arm at the worst-case all-in price, VAT included, also pulls R1's price effect into the same test.

**Markets:**
- `il`: adjudicated, on second-hand evidence only.
- `us` and `gb`: **not supported.** No evidence for either is cited, and every differentiator is specific to Israel (INPUT.md Differentiation; BLUE.md Scope; RED.md Verdict).

**Reversal evidence:**
- **To NO_GO:** any of the following.
  - The redesigned T1 fires the falsifier at the read rule: trust arm < cheapest arm, or trust arm < ball-sports arm.
  - Qualified tax review confirms that Israeli VAT on the local sale pushes the visible gap well beyond the margin.
  - Qualified regulatory review finds per-model standards or wireless approval obligations across most of the candidate SKU types, at a cost 30–50 SKUs cannot carry.
- **To PIVOT:** any of the following.
  - T1 passes relative to the other arms but falls under the 3% floor.
  - T1 wins only among visitors who usually buy at KSP or Ivory.
  - T3 lot drift comes in at 5–15%.
  - Regulatory review excludes electrical or RF items.
- **To BUILD:** all of the following.
  - The redesigned T1 passes.
  - T2, T3 and T4 pass.
  - The tax, regulatory, trademark and "tested"-claim wording reviews come back clear.
  - App Review 4.1 and 4.2 move from RISK to PASS.

## Target and job

- **Target (narrowed by Blue, INFERENCE / ASSUMPTION):** Israeli adults who buy small home and tech gadgets, roughly in the ₪50–300 band, who know AliExpress or Temu and have had, or fear, an item that arrives not as described (BLUE.md ICP).
- **Job:** buy a cheap, useful gadget that matches what was shown, at a final ₪ price known in advance, without a return across borders (INPUT.md Target; BLUE.md JTBD).
- **Current workaround:** buy direct on AliExpress or Temu and accept the risk, or pay the KSP or Ivory markup (E4, INFERENCE).
- **Wedge:** sit between the cheap-but-risky marketplaces and the safe-but-marked-up local retailers. Charge only for removing risk.
- **Retained caveat (RED.md R5, INFERENCE):** an ICP defined as people who already know AliExpress or Temu selects the buyers best able to find the identical cheaper item. The anchor that could favour Israball is the KSP or Ivory price. T1 must segment by usual store. A result that is strong only among local-retail buyers is a PIVOT signal, not a pass.
- **Unresolved (RED.md Product challenge):** the inputs do not separate fear of loss from annoyance at refund hassle. Marketplace buyer protection within about 90 days is already a table stake. Only fear of loss supports a 20–30% premium.

## Evidence and counterevidence

**Evidence quality:** second-hand at two layers. Blue read only INPUT.md, and Red read only INPUT.md and BLUE.md. None of the allowlisted files was inspected. I treat E2 and E3 as `UNVERIFIED` for decision purposes (RED.md Evidence audit).

**Support:**
- **E1:** category table stakes (03-market-evidence.md §7, via INPUT.md).
- **E2:** accountable curation is a credible differentiation space. This is a market-level statement, not specific to gadgets.
- **E3:** review themes P1–P3 are cited as supporting the differentiators. The content and the mapping to each differentiator are not available (G4).

**Counterevidence:**
- **C1:** the price gap against AliExpress and Temu is visible.
- **C2:** local e-tailers can copy the approach. This is an assertion in the input, so I treat it as INFERENCE.
- **C3:** there is no evidence specific to gadgets.
- **C4:** price is the main reason people stay.
- **C5:** no trust premium is shown. This is decision-critical.

**Market gaps:**
- **G2:** the review corpus is global English Google Play, with no Hebrew and no country routing. The Israeli share is unknown and may be zero. Every Israel-specific premise has zero observed support.
- **`us` and `gb`:** no evidence.
- **G1:** all four profiles are partial.
- **Freshness:** the inputs give no dates.

**Other gaps:**
- **G3:** the Israeli VAT exemption threshold is unknown ($75 vs $130/$150).
- **F1:** the shipping and landed-cost data may sit behind the gated Value-Added APIs.

**Open contradiction:** E2 and E3 point toward curation. C1, C4 and C5 point toward price winning. Neither side has data specific to gadgets or to Israel. The test decides this, not either side's argument.

**Assumptions carried:**
- **A1:** a premium for the match promise. This is the decisive one.
- **A2:** problems specific to Israel (plug and voltage fit, VAT surprises) are common.
- **A3:** a return inside Israel fits the margin.
- **A4:** organic Hebrew video can fill the sample.
- **R1 and R2 premises (UNVERIFIED):**
  - Israball, as the Israeli merchant of record, may owe Israeli VAT that low-value direct imports avoid.
  - Selling electrical or RF gadgets commercially may require standards and wireless type approval that personal imports may not need.

## Product boundary

**Validation stage (now):**
- A Hebrew fake door only, run as a **web-only** surface (responsive or PWA).
- No native app, no payments, no stock, no supplier or customer contact beyond the disclosed waitlist in the test, and no ad spend without approval.

**Bounded build (gated, only if the Decision's BUILD reversal conditions are met):**
- **Catalogue:** 30–50 tested SKUs, cut from the input's few hundred.
- **SKU page:** a Hebrew RTL page showing a per-model test note and one all-in ₪ price above the fold.
- **Claim wording:** "tested model", never "this unit was tested".
- **Returns:** a human handles mismatches inside Israel, inside the roughly 90-day window. Mismatches are logged per SKU and supplier, and SKUs over the threshold are pulled.
- **Repeat loop:** a monthly "tested this month" drop.
- **Native iOS and Android:** only with real app-specific function (order tracking, a photo-based mismatch claim, delivery and return push notifications). Not a thin wrapper.

**Keep together:** the tested note, the all-in ₪ price and the return inside Israel must stay one bundle. Each part alone can be copied (C2).

**Non-goals:**
- Launching in `us` or `gb`.
- Marketplace or third-party sellers.
- Price matching.
- User-generated reviews.
- Loyalty currency, coins or games.
- A broad electronics range competing with KSP or Ivory.
- Warranty or repair beyond the match promise.
- Automated sourcing through the gated Value-Added APIs.
- Scraping listings.

**Business boundary (ASSUMPTION, unmodeled):**
- About ₪20–30 margin per ₪100 basket has to cover test units, returns, human Hebrew support, payment fees and possibly VAT (R1, R7).
- Retention is weak because purchases are occasional and price-driven (C4).
- Defensibility is a mismatch dataset that does not exist yet. It is fragile.

## Originality and App Review

- **Originality: PASS (conditional).** The differentiation is in outcome and workflow (an accountable match promise plus a return inside Israel), not a reskin or renamed feature set. Adopting E1 table stakes is legitimate. The constraints exclude AliExpress, Temu and WE BALL marks, listing copy and photos, and Temu-style games, coins and click-to-buy. The PASS depends on using only our own test-unit photos and our own Hebrew test notes.
- **Name:** "Israball" shares the "-ball" element with WE BALL, a brand the constraints list as one to avoid. Confusion or implied affiliation is `UNVERIFIED`. It needs qualified trademark clearance in IL, and in US/GB before any secondary launch.
- **Claim and consent (UNVERIFIED):**
  - The "tested" claim needs qualified review under Israeli consumer-protection rules before T1 copy goes live.
  - The fake door needs a clear "not yet on sale" disclosure, consent limited to this purpose, and deletion after the test.
- **Guideline 4.1 Copycats: RISK.** No copied UI, marks or metadata are planned. The open item is the name similarity to WE BALL. This moves to PASS after trademark clearance and an original icon and screenshots.
- **Guideline 4.2 Minimum Functionality: RISK.** Blue's "thin wrapper" around a 30–50 SKU storefront is a repackaged-website pattern. Mitigation: web only during validation, and native only with real app-specific function.
- **Guideline 4.3 Spam: PASS (conditional).** One original store under its own brand. This becomes RISK if the store is built on a templated storefront generator, or if near-identical apps are submitted for the gadgets and ball-sports cards. They should share one app if both go ahead.
- **No BLOCK identified.** Both RISKs must be cleared before BUILD.

## Red Team residue

**Strongest surviving objection: R1 together with R2 (UNVERIFIED, Critical, Medium likelihood).** Selling as an Israeli business may add Israeli VAT, and for electrical or RF items standards and type-approval costs, that buyers importing directly do not pay. That would widen the visible price gap the thesis already loses on (C1, C4, C5). Neither can be settled in this run, because the request budget is 0 and qualified review is needed.

**Other open objections:**
- **R3, resolved by adoption:** Blue's T1 cannot decide A1. It is replaced by Red's redesigned T1.
- **R4:** under dropshipping, "tested" is not literally true, because lots drift. Gate: T3, where over 5% mismatch moves the card to local stock of tested batches.
- **R5:** the ICP is drawn toward the most price-aware buyers. Handled by segmenting T1 by usual store.
- **R6:** distribution gives the price gap away, and organic reach is unproven. An unfilled sample is INCONCLUSIVE, never a pass.
- **R7:** the margin is thin before VAT. Gate: T4, extended with a VAT line.
- **Copyability (C2):** KSP or Ivory could add a curated "tested imports" shelf.

**Gates before any build (need approvals or request budget this run lacks):**
- **T2:** confirm the VAT threshold, and that the all-in price can be computed for at least 90% of candidate SKUs.
- **T3:** mismatch at most 5% across 2 units × 10 SKUs.
- **T4:** return cost at most 30% of gross margin at a 10% return rate.
- **Reviews:** qualified tax review, regulatory review by SKU type, trademark clearance, and review of the "tested" claim wording.

**Refresh requests carried forward:**
1. Israeli VAT and personal-import exemption rules for a local seller vs a buyer who imports directly.
2. Standards and wireless-approval obligations for commercial sale of small electrical and RF gadgets.
3. The exact text of P1–P3, with their country and language mix.
4. Which landed-cost and shipping fields are available without the gated Value-Added APIs.

**Most likely PIVOT target:** a small-batch, locally stocked curator anchored against local-retail prices, limited to SKU types with light compliance requirements. What stays killed in that pivot: dropshipping-as-tested, and anchoring against AliExpress prices.

## Next action

**One bounded action:** run the redesigned Hebrew fake-door test (RED.md Pre-mortem and falsification test), `il` only, web only, with no payment collected.

**Preconditions before launch:**
- The "not yet on sale" disclosure is in place.
- Consent covers only this purpose, and the data is deleted after the test.
- The copy says "tested model".
- Qualified wording review of the "tested" claim is complete.

**Test design:**
- **Traffic:** one neutral Israball Hebrew source, with visitors randomly assigned to arms.
- **Arm A:** trust message (tested model, all-in ₪, return inside Israel) at the worst-case all-in price: cost plus 25%, plus Israeli VAT on the local sale until R1 is cleared. The marketplace reference price is shown.
- **Arm B:** cheapest message at the reference price.
- **Arm C:** the ball-sports card, with the same mechanics.
- **Committed action:** "Continue to checkout" on a page showing the final ₪ total, followed by the disclosed waitlist. Log the visitor's self-reported usual store.

**Read rule (fixed before launch):**
- Read only when every arm has at least 600 randomized unique visitors **and** the leading arm has at least 15 committed actions. Below that, the result is INCONCLUSIVE.
- If organic reach cannot fill the sample within 21 days, request approval of a small paid budget only to complete it.

**Decision rules:**
- **Pass:** A ≥ B, A ≥ C, and A's committed-action rate is at least 3%. Then proceed to the T2–T4 gates and the reviews.
- **Pivot:** A ≥ B and A ≥ C, but A is under 3%. Or A beats B only among visitors who usually buy at KSP or Ivory. Either way, re-anchor against local retail and retest once.
- **Kill (this card):** A < B, or A < C. This is the INPUT.md falsifier, unchanged. If A ≥ B but A < C, kill this card and hand the trust-message result to the ball-sports card.
