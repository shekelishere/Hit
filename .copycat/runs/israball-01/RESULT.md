---
artifact: copycat-round-result
schema_version: 1
run_id: israball-01
round: 1
portfolio_outcome: MIXED
workflow_status: pivot
candidates: israball-ballsports,israball-gadgets
decision_candidate: israball-ballsports
---

# Copycat result — Round 1

## Portfolio decision

**MIXED. The two candidates reached different outcomes: `israball-ballsports` is PIVOT and `israball-gadgets` is VALIDATE.**

**Recommended decision candidate: `israball-ballsports` (PIVOT, giving `workflow_status: pivot`).** Because the portfolio is mixed, the user must confirm the decision candidate before anything is published or acted on.

Why I recommend ballsports over gadgets, weighing evidence quality, falsifiability, user constraints and surviving risk:

1. **Both results point to the same weakness.** The strongest evidence in each file is counterevidence against charging a premium over AliExpress or Temu: price drives retention, no trust premium is shown, and the price gap is visible (ballsports E5–E7; gadgets C1, C4, C5). The ballsports result acts on this. It drops the premium model and re-anchors against local-chain prices. The gadgets result keeps the premium (A1, 20–30%) as its central untested bet. It also names "a small-batch, locally stocked curator anchored against local-retail prices" as its most likely PIVOT target, which has the same structure as the ballsports pivot.
2. **The cheaper first step decides more.** Ballsports' next action (R1) is a zero-spend desk gate with fixed pass, pivot and kill thresholds. It needs no traffic, no customer contact and no payment. Gadgets' next action is a live Hebrew fake door. Before it can run, it needs a qualified review of the "tested" claim wording, consent handling, and possibly approval of a paid budget. Even if its T1 passes, it still faces the T2–T4 gates and the tax, regulatory and trademark reviews.
3. **Ballsports has less regulatory exposure.** Gadgets carries an `UNVERIFIED` Critical risk (R1+R2): Israeli VAT, plus standards and wireless type approval for electrical or RF items, which could widen the gap the thesis already loses on. Ballsports has its own `UNVERIFIED` items (children's-product standards, privacy for minors, IP and trade dress), but no type-approval exposure.
4. **Confidence is similar, slightly higher for ballsports.** About 0.55 versus about 0.5. Both are low enough that this is a preference, not a clear win.

**What would make gadgets the better pick:** R1 for ballsports hits its kill threshold (fewer than 3 of 10 SKUs reach ≥10% contribution at or below the lowest comparable chain price), or the user prefers a general gadget store to a ball-sports store for the Israball brand.

**Status of the round:**
- Neither candidate is at BUILD.
- No candidate has a BLOCK.
- `us` and `gb` are not supported by either candidate.

## Candidate decisions

| Candidate | Outcome | Confidence | Markets | Decisive open question | Strongest surviving objection |
|---|---|---|---|---|---|
| `israball-ballsports` | PIVOT | moderate-low (~0.55) | `il` only; `us`/`gb` killed | Does VAT-paid landed cost, plus buffer stock and exchange cost, leave margin below local-chain prices? (R1) | The pivoted model's margin below chain prices is unmeasured (`UNVERIFIED`); if chains are cheap or already offer easy exchange, there is no room |
| `israball-gadgets` | VALIDATE | low-medium (~0.5) | `il` only; `us`/`gb` not supported | A1: do Israeli gadget buyers commit at the worst-case all-in ₪ price while the cheaper marketplace price is visible? (redesigned T1) | R1+R2 (`UNVERIFIED`, Critical): Israeli VAT and electrical/RF compliance costs widen the visible price gap |

**`israball-ballsports`: PIVOT.**
- **Material change:** move from "VAT-exempt dropship plus a premium over AliExpress" to "a small, VAT-paid, locally stocked range of youth football boots and shin guards, priced at or below 90% of the lowest comparable local-chain price".
- **Kept:** measured sizing, Hebrew service, and exchange inside Israel with refund to the original card.
- **Stays killed:**
  - any premium over AliExpress as the source of margin;
  - the VAT-exempt dropship basket as the way to fund local exchange;
  - the three-sport, 20–40 SKU catalogue;
  - delivery speed as part of the wedge;
  - `us`/`gb`;
  - Blue's four-arm, 300-per-arm T1;
  - native apps before validation.
- **Reversal evidence:**
  - *Back to VALIDATE on the original model:* tax review keeps the basket economics for local stock, **or** exchange cost is ≤8% of basket with no local stock.
  - *To NO_GO:* R1 or R2 hits its kill threshold.
  - *To BUILD:* R1 passes, R2 passes (B ≥ A and ≥50 reservations), and the qualified reviews raise no blocker.

**`israball-gadgets`: VALIDATE.**
- **Single decisive uncertainty:** A1. The adjudicator replaced Blue's T1 with Red's redesigned three-arm T1:
  - committed "continue to checkout" action;
  - ≥600 visitors per arm and ≥15 committed actions in the leading arm before reading;
  - the INPUT falsifier is unchanged.
- **Reversal evidence:**
  - *To NO_GO:* the T1 falsifier fires, **or** tax review shows VAT breaks the margin, **or** regulatory cost is too high for 30–50 SKUs.
  - *To PIVOT:* T1 is below the 3% floor, **or** it wins only among KSP/Ivory buyers, **or** lot drift is 5–15%, **or** RF/electrical items are excluded.
  - *To BUILD:* T1 through T4 pass, all reviews are clear, and 4.1/4.2 move to PASS.

**Cross-candidate conflict to resolve before any test runs:** Arm C of the gadgets T1 is "the ball-sports card, with the same mechanics". The ballsports result has since killed the premium-over-AliExpress framing and Blue's T1 for that card. So Arm C, as written, would test a variant that is already killed. If the gadgets test ever runs, Arm C has to be redefined against the pivoted ballsports card (chain-anchored price, local swap), or dropped.

## Evidence coverage

| Market | `israball-ballsports` | `israball-gadgets` | Portfolio |
|---|---|---|---|
| `il` | observed, partial and indirect; Israeli demand unmeasured | observed on second-hand evidence only; E2/E3 treated as `UNVERIFIED` | **observed (partial, indirect)** |
| `us` | failed: no evidence, and the wedge does not transfer | failed: no evidence, and every differentiator is Israel-specific | **failed** |
| `gb` | failed: no evidence, and the wedge does not transfer | failed: no evidence, and every differentiator is Israel-specific | **failed** |

**Shared evidence limits:**
- **Not Israeli data:** the review corpus (P1–P3) is global English Google Play. It has no Hebrew and no country routing, and the Israeli share is unknown.
- **Nothing behavioral:** neither candidate has any behavioral evidence. All support is observational or market-level.
- **Thin profiles:** competitor profiles are partial. Ballsports notes that local chains, its main substitute after the pivot, are not profiled.
- **Undated:** neither candidate gives dates for its evidence.

**Gaps that control the decision in both candidates:**
- Israeli VAT, customs and exemption-threshold treatment of a local reseller compared with a buyer importing directly ($75 vs $130/$150).
- Local-retail price anchors: 3–5 chains for youth football boots, or KSP/Ivory for gadgets.
- Israeli demand and Hebrew search volume.
- Israeli consumer-protection rules: distance-sale cancellation, and the wording of any "tested" claim.
- Product standards: children's sports products (ballsports), and electrical or RF type approval (gadgets).
- Which landed-cost and shipping fields can be obtained without the gated Value-Added APIs.

**This round's budget:** 0 requests. No refresh was possible, so every refresh request is carried forward.

## What changed this round

This is the first round, so there is no earlier baseline. Compared with the candidate inputs, the round:

- **Weakened the premium premise in both candidates.** For ballsports it is killed outright. For gadgets it is kept only as the one hypothesis to test, priced at the worst case.
- **Narrowed both candidates to `il`.** Neither carries evidence for `us` or `gb`.
- **Replaced both Blue falsification tests**, which could not decide their own question:
  - *Ballsports:* Blue's four-arm fake door is replaced by an R1 landed-cost desk gate, then a two-arm R2 price-shown test with ≥1,600 visitors per arm.
  - *Gadgets:* Blue's notify-me T1 is replaced by Red's committed-action T1.
- **Cut the scope:**
  - *Ballsports:* three sports and 20–40 SKUs become one category and about 10 SKUs.
  - *Gadgets:* a few hundred SKUs become 30–50 tested SKUs.
- **Moved both candidates to web-first:** native iOS and Android are deferred until validation passes in each.
- **Made local stock, anchored to local prices, the shared fallback.** It is the ballsports outcome now and the gadgets' most likely PIVOT target.
- **New risks surfaced:**
  - inventory and cash tied up in local stock (ballsports);
  - a constraint tension between bulk AliExpress sourcing and the "Dropshipping Center / Open Platform" sourcing constraint (ballsports, needs user confirmation);
  - "tested" not being literally true under dropshipping because of lot drift (gadgets R4);
  - possible name confusion between Israball and WE BALL (gadgets, `UNVERIFIED`).

## Originality and App Review

| Item | `israball-ballsports` | `israball-gadgets` | Portfolio (shared Israball brand) |
|---|---|---|---|
| Originality | PASS | PASS (conditional on own photos and Hebrew test notes only) | **PASS (conditional)** |
| Guideline 4.1 Copycats | PASS | RISK (the "-ball" overlap with WE BALL, `UNVERIFIED`; needs trademark clearance plus an original icon and screenshots) | **RISK** |
| Guideline 4.2 Minimum Functionality | RISK (a native app over ~10 SKUs is close to a repackaged website) | RISK (a thin wrapper over 30–50 SKUs) | **RISK** |
| Guideline 4.3 Spam | PASS | PASS (conditional; RISK if built on a templated storefront or if near-identical apps are shipped per card) | **PASS (conditional)** |
| Other | RISK under 5.2 IP if branded or lookalike SKUs are listed; privacy of minors' size profiles (`UNVERIFIED`) | Consumer-protection review of the "tested" claim; fake-door consent and deletion (`UNVERIFIED`) | carried per candidate |
| BLOCK | none | none | **none** |

**Why the portfolio 4.1 status is RISK.** Both candidates share the store name "Israball", so the possible confusion with WE BALL raised in the gadgets result applies whichever candidate is chosen. The ballsports result did not assess it. Until qualified trademark clearance is done in IL (and in US/GB before any later launch), the portfolio carries 4.1 as RISK. The confusion itself is `UNVERIFIED`; it is an open question, not a finding.

**Why 4.2 stays RISK for now.** Both candidates are web-only during validation. Any later native app needs real app-specific function. Examples: child size profile, fit check and exchange booking (ballsports); order tracking, photo-based mismatch claims and push notifications (gadgets).

**Rule for 4.3.** If both cards ever go ahead, they share one app under one brand.

## Recommended next action

**This is a mixed portfolio, so the first step is the user's confirmation of the decision candidate.** The recommendation is `israball-ballsports`. Nothing should be published, contacted or spent until the user confirms.

**After confirmation, there is one bounded action: run the ballsports R1 landed-cost desk gate for 10 youth football boot and shin-guard SKUs, at zero spend.**

1. **Targeted refresh.** This needs a request budget in the next dispatch, because this round had 0. No purchases and no contact. Gather:
   - an official source for Israeli VAT, customs and exemption-threshold treatment of a reseller's imported stock;
   - price points and exchange policies for youth football boots at 3–5 Israeli chains;
   - AliExpress bulk unit costs for unbranded or private-label SKUs only.
2. **Model.** Include:
   - landed cost: unit, VAT, customs and inbound freight;
   - buffer stock for the top sizes, with a dead-size write-off;
   - exchange cost at a 15% exchange rate;
   - an allowance for Buyer Protection losses.
3. **Decide using the fixed thresholds:**
   - *Pass:* ≥6 SKUs reach ≥20% contribution at ≤90% of the lowest comparable chain price.
   - *Pivot:* 3–5 SKUs qualify.
   - *Kill:* fewer than 3 SKUs reach ≥10% contribution.

**Also needs a user decision:** whether bulk AliExpress sourcing for local stock satisfies the sourcing constraint ("Dropshipping Center / Open Platform"). If it does not, the ballsports pivot is not available. The gadgets VALIDATE path would then become the recommended candidate.

**Still blocked:**
- R2, ad spend, outreach, payments, sample purchases, qualified reviews and any build. Sample purchases and qualified reviews each need separate user approval.
- The gadgets fake door is paused while the ballsports card is the decision candidate. If the user picks gadgets instead, its next action is the redesigned Hebrew fake door, with the stated preconditions and Arm C redefined (see Candidate decisions).
