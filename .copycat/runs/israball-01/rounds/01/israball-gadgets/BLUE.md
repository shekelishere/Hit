---
artifact: copycat-candidate-blue
schema_version: 1
run_id: israball-01
candidate_id: israball-gadgets
round: 1
input: INPUT.md
input_sha256: 51491b6ece45f1080d4c1f37edae503d9661345984d154accbb61c9a3bd04834
---

# Blue: Israball Gadgets

## Verdict

**VALIDATE.** The thesis holds together: accountable curation for Israeli buyers of small gadgets, sold as one promise. The item matches its test note, the shown ₪ price is the full landed price, and returns are handled inside Israel. One decisive external test is ready: the Hebrew fake-door test from INPUT.md, tightened below so that the price gap is visible.

A build verdict is not justified. The only support for this candidate is public review themes (P1–P3) and a market-level statement that curation is a credible space (03-market-evidence.md §7). There is no behavioral evidence. There is no evidence specific to gadgets or to Israel. The counterevidence goes straight at the core premise: price is the main reason people stay, and nobody has shown a trust premium. This is a trust-premium bet with no direct evidence for the premium so far. If the test shows that, the card dies.

Scope: the result applies to `il` only. The `us` and `gb` markets are not supported, because the wedge (Hebrew-first service, return inside Israel, Israeli landed cost) is specific to Israel. No evidence for us or gb is cited.

Boundary note: as dispatched, this pass read only INPUT.md. The evidence files on the allowlist are cited through INPUT.md's summaries and were not re-read. The exact text of review themes P1–P3 is not in INPUT.md, so the mapping from each P to each differentiator is uncertain (see G4).

## Evidence ledger

| ID | Premise | Status | Source (via INPUT.md) |
|---|---|---|---|
| E1 | Category table stakes: competitive prices against marketplace references, free shipping above a low threshold, stage-by-stage tracking, a refund for non-delivery, damage or items not as described within about 90 days, ILS pricing, accounts, fast checkout | EVIDENCE | 03-market-evidence.md §7 |
| E2 | Accountable curation is a credible space for differentiation | EVIDENCE (market level, not specific to gadgets) | 03-market-evidence.md §7 |
| E3 | Review themes P1, P2 and P3 support the differentiators (hand-tested catalogue, honest landed cost, human return in Israel, Hebrew-first service) | EVIDENCE as a pointer only; the content and the mapping are not in INPUT.md | 03-review-evidence.md |
| E4 | Current workaround: buy direct on AliExpress or Temu, or pay more at KSP or Ivory | INFERENCE (a candidate premise, not observed behavior) | 04-candidates.md |
| C1 | Identical items are easy to find cheaper on AliExpress or Temu, so the price gap is visible | EVIDENCE (contradicts the premium) | INPUT.md Counterevidence |
| C2 | Local e-tailers such as KSP and Ivory can copy the approach | EVIDENCE/INFERENCE (contradicts defensibility) | INPUT.md Counterevidence |
| C3 | No evidence specific to gadgets | GAP | INPUT.md Counterevidence |
| C4 | Price is the main reason people stay | EVIDENCE (contradicts the thesis) | INPUT.md Counterevidence |
| C5 | No trust premium is shown | GAP (decision-critical) | INPUT.md Counterevidence |
| G1 | All four profiles are partial | GAP | INPUT.md Constraints |
| G2 | The review corpus is global English Google Play: no Hebrew, not routed by country | GAP (the Israeli and Hebrew premises are unverified) | INPUT.md Constraints |
| G3 | Israel's VAT exemption threshold is unknown ($75 vs $130/$150) | GAP (decision-critical for "honest landed cost") | INPUT.md Constraints |
| G4 | Which of P1–P3 supports which differentiator | GAP | INPUT.md Differentiation |
| F1 | Sourcing goes through the AliExpress Dropshipping Center / Open Platform, and the Value-Added APIs are gated | EVIDENCE (constraint). INFERENCE: shipping-cost and logistics data needed for landed cost may sit behind the gated APIs | INPUT.md Constraints |
| F2 | Dropshipped units are not the unit that was tested, and supplier lots can vary | INFERENCE (threatens the "tested" claim) | derived from F1 |
| A1 | Israeli gadget buyers will pay a visible premium of 20–30% for the match promise | ASSUMPTION (directly contradicted by C1, C4 and C5) | — |
| A2 | Problems specific to Israel (Type H plug, 230V, no Hebrew instructions, customs or VAT surprises) are frequent enough in gadget purchases to motivate switching | ASSUMPTION | — |
| A3 | A return point inside Israel can be run within the margin | ASSUMPTION | — |
| A4 | Hebrew social video can bring in buyers organically at a workable cost per buyer | ASSUMPTION | — |

Contradictions kept open: E2 and E3 point toward curation. C1, C4 and C5 point toward price winning. Neither side has data specific to gadgets or to Israel (C3, G2).

## Target, job, and wedge

- **ICP:** Israeli adults who buy small home and tech gadgets in roughly the ₪50–300 range, already know AliExpress or Temu, and have either had an item arrive not as described or held back from buying because of that risk. This narrows the input's target. *(Narrowing: INFERENCE. Price band: ASSUMPTION.)*
- **Trigger:** they see a specific gadget, often in Hebrew social video, and then hit the choice between a cheap but risky import and a safe but marked-up local shop. *(INFERENCE from E4)*
- **JTBD:** "When I want a cheap, useful gadget, help me get one that actually matches what I saw, at a final ₪ price I know in advance, without the risk of sending a return to China." *(Restates the INPUT.md job.)*
- **Workaround:** buy direct on AliExpress or Temu and accept the risk, or pay the KSP or Ivory markup. *(E4)*
- **Consequence:** the item is not as described, the plug or power does not fit, VAT or customs adds to the price, a return across borders is too much work so the money is written off, or the buyer overpays locally. *(A2, ASSUMPTION)*
- **Switching reason:** one bound promise (tested match, all-in landed ₪, return inside Israel) at a premium smaller than the local-retail markup. *(A1, ASSUMPTION)*
- **Wedge:** sit between AliExpress/Temu (lowest price, risk on the buyer) and KSP/Ivory (safe, broad, expensive). Charge only for removing risk, not for the catalogue being bigger or easier to browse.

## Originality and differentiation

**Generic table stakes to adopt (E1):** marketplace-competitive reference pricing (needed, but not the lever), free shipping above a low threshold, stage-by-stage tracking, a refund within about 90 days for non-delivery, damage or items not as described, ILS pricing, accounts and fast checkout. These are category norms, not anyone's product expression.

**Incumbent expression to avoid (INPUT.md Constraints):** AliExpress, Temu and WE BALL names, marks, listing copy and photos. Also no Temu-style games, coins, spin wheels or click-to-buy mechanics. No mirrored catalogue structure, and no copied supplier listings. Use our own photos of the test units, our own Hebrew test notes, our own name and design (Israball), and collect only the data needed for the order and the return.

**Differentiation thesis (one):** *the match promise as the product.* Every SKU ships with a published Israball test note: what was checked, measured dimensions and function, plug and voltage fit for Israel, and what is in the box. It also shows one all-in ₪ price (item, shipping, VAT/customs as applicable) and a guarantee that a mismatch against the note gets a return handled inside Israel by a person who speaks Hebrew.

This is meaningfully different on **outcome** (the certainty of a match, not the lowest price) and **workflow** (the return ends inside Israel, not across borders). It is not a cheaper version, not a bigger catalogue, and not renamed features.

**Why the parts must stay together:** each part alone is a copyable feature (C2). Together they make an accountable, measurable promise with a public mismatch rate. That is the only form a local e-tailer cannot copy immediately without changing its sourcing model. *(INFERENCE)*

**Defensibility path (hypothesis):** (1) a body of test notes plus return data showing which suppliers and SKUs drift, which becomes private sourcing intelligence; (2) a public Hebrew track record of the mismatch rate as a trust signal. It is weak against C2 until the mismatch-rate data builds up. Label it fragile.

## MVP boundary and critical flow

**Validation stage (now, no build):** a Hebrew fake door only (see Test T1). No payments, no stock, no supplier contact (all out of scope without approval).

**Bounded validation build (only if T1–T3 pass):**
- **Catalogue:** 30–50 tested SKUs, cut from the input's "a few hundred". Enough to test repeat purchases. Larger is a non-goal.
- **Surfaces:** a Hebrew RTL website and a mobile version for iOS and Android, as the constraint requires. To keep the build bounded, use one shared codebase or a thin wrapper rather than separate native apps. *(ASSUMPTION that this satisfies the constraint)*
- **Entry:** a Hebrew video or press link opens one SKU page with the test note and the all-in ₪ price shown above the fold.
- **Activation:** the user opens the test note and sees the landed-price breakdown. Metric: the share of SKU-page visitors who expand the note.
- **Success:** the order arrives, the buyer confirms "matches the note" with one tap on delivery, and there are no extra charges.
- **Failure / recovery:** "doesn't match the note" → a photo and short form in Hebrew → a human replies within one business day → a return label or drop-off inside Israel → a refund, inside the 90-day window from E1. Every mismatch is logged against the SKU and supplier. SKUs over the threshold are pulled.
- **Repeat-use loop:** a small monthly drop of "tested this month" items, plus opt-in alerts tied to past purchases. No points, coins or games.
- **Non-goals:** launching in us or gb; marketplace or third-party sellers; price matching; user-generated reviews; a loyalty currency; gamification; a broad electronics range competing with KSP or Ivory; warranty or repair beyond the match promise; automated sourcing through the gated Value-Added APIs.

## Business hypotheses

- **Monetization:** product margin at AliExpress cost plus 20–30% (INPUT.md). Hypothesis: on a basket of about ₪100, gross margin of about ₪20–30 has to cover the test-unit cost spread across sales, the return/refund rate, human Hebrew support and payment fees. *(ASSUMPTION. Likely tight. Model it before any build.)*
- **Primary acquisition channel:** organic Hebrew short-form social video that shows the test of one gadget, with the price gap stated openly. Consumer press is secondary. Paid ads are out of scope without approval.
- **Defensibility:** the data on supplier and SKU mismatches plus a public track record of the mismatch rate (above). Fragile against C2.
- **Largest feasibility / trust risk:** the "tested" claim with dropshipping (F1, F2). The unit the buyer gets is not the unit that was tested, and supplier lots drift. If mismatches happen often, the main promise becomes false advertising and destroys the trust it is selling. A second risk sits next to it: the landed price cannot be stated honestly while the VAT threshold (G3) and the shipping data (F1) are unresolved.

## Assumptions and falsification tests

Ranked by risk to the decision:

1. **A1: a visible premium for the match promise** (contradicted by C1, C4, C5).
   **T1: Hebrew fake door with the price gap shown** (the falsifier from INPUT.md, tightened). Three arms, all priced in ₪ with the cheaper AliExpress-style reference price visible next to ours:
   - A: trust message (tested, all-in ₪, return in Israel) at +25%
   - B: cheapest message at the reference price
   - C: the ball-sports card

   Action: "reserve / notify me" with an email or phone number. No payment. Organic traffic only unless ad spend is approved.
   - **Success:** A ≥ B and A ≥ C, *and* A's visitor-to-reserve rate is at least 3%, with at least 200 unique visitors per arm. *(The absolute rate and the sample size are proposed. The coordinator may change them.)*
   - **Pivot:** A ≥ B but A < C, which means the trust message works but the gadgets category loses. Move the match promise to the ball-sports card. Or A falls within ±15% of B, which means trust is neutral. Pivot to price parity plus a returns-only promise, and drop the 20–30% premium.
   - **Kill:** A < B, or A < C. This is the falsifier from INPUT.md.
2. **G3 / F1: the landed ₪ can be stated honestly.**
   **T2:** a desk check of the current Israeli VAT/customs exemption rule and of which shipping-cost data the Dropshipping Center / Open Platform exposes without the gated APIs. *(Needs a request budget. This run's budget is 0.)*
   - **Success:** the threshold is confirmed and the price is computable for at least 90% of the 50 candidate SKUs.
   - **Pivot:** only computable below the threshold. Limit the catalogue to SKUs under it.
   - **Kill:** a reliable all-in price is not possible.
3. **F2: tested units represent what ships.**
   **T3:** order 2 units of each of 10 SKUs from different orders or dates and compare them with the test note. *(Needs payment and purchase approval.)*
   - **Success:** mismatch at most 5% of units.
   - **Pivot:** 5–15%. Switch to holding a small local stock of tested batches.
   - **Kill:** over 15%, or not repeatable.
4. **A3: a return inside Israel fits the margin.**
   **T4:** a spreadsheet model of return rate × cost per return against margin, using quotes from local return or drop-off partners. *(Needs approval to contact suppliers.)*
   - **Success:** return cost is at most 30% of gross margin at a 10% return rate.
   - **Pivot:** 30–60%. Raise the free-shipping threshold or narrow the SKUs.
   - **Kill:** over 60%.
5. **A4: organic Hebrew video brings in buyers.**
   **T5:** 5 organic test videos sending traffic to T1.
   - **Success:** at least 200 visitors per arm reached organically within 14 days.
   - **Pivot:** the reach is too low, so ask for approval of a small paid budget.
   - **Kill:** not applicable on its own. This test only gates whether T1 can run.
6. **A2: problems specific to Israel are common.** Covered by an optional message variant in T1 (a plug/voltage/VAT angle). There is no separate kill. It informs the copy only.

## Risks

- **Core contradiction (C1, C4, C5):** buyers can see the price gap, and price drives retention. The premium may simply fail. T1 decides this.
- **Truth risk of the "tested" claim (F2):** dropshipping lot drift turns the promise into a liability. The claim has to be worded as "tested model, mismatch guaranteed" and never as "this unit was tested".
- **Landed-cost honesty (G3, F1):** an incorrect all-in price breaks the second part of the promise.
- **Copyability (C2):** KSP or Ivory could add curated imports with local returns. The moat is only the accumulated mismatch data.
- **Evidence transfer (G2, C3, G4):** a global English review corpus may not carry over to Hebrew-speaking Israeli gadget buyers.
- **Unit economics:** the 20–30% margin may not cover tests, returns and human support. This is unmodeled.
- **Scope creep:** the iOS and Android constraint could push a premature native build. Keep it gated behind T1–T3.
- **IP/originality:** using supplier photos or listing copy would break the constraints. Use only our own test-unit photos and our own copy.

## Adjudicator handoff

- **Verdict:** VALIDATE, for `il` only. `us` and `gb` are not supported.
- **Thesis:** the match promise as the product: a tested-model note, an all-in ₪ price, and a human return inside Israel, kept together. The 20–30% premium only covers removing risk.
- **Strongest support:** E2 (curation is a credible space) and E3 (P1–P3, pointer only).
- **Strongest opposition:** C1, C4 and C5 (visible price gap, price drives retention, no trust premium shown), plus C3 and G2 (no data specific to gadgets, Hebrew or Israel).
- **Decisive test:** T1, the Hebrew fake door with the price gap shown. A < B or A < C → kill. A within ±15% of B → pivot to parity plus returns. A ≥ B, A ≥ C, at least 3% and at least 200 visitors per arm → move to T2 and T3.
- **Gates before any build:** T2 (VAT threshold and data for the landed price), T3 (mismatch at most 5%), T4 (return cost at most 30% of margin). T2–T4 need approvals or request budget that this run does not have.
- **Largest risk:** the "tested" claim breaking under dropshipping lot drift (F2).
- **Changes from the input:** the catalogue is cut from a few hundred SKUs to 30–50. The fake door must show the price gap. The claim is worded as "tested model", not "tested unit".
