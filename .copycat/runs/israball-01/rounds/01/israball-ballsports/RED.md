---
artifact: copycat-candidate-red
schema_version: 1
run_id: israball-01
candidate_id: israball-ballsports
round: 1
input: INPUT.md
input_sha256: 3e2e031bf015be41dd1c6aa679760df39488e702bd1d250ac2624bcf770a6b52
blue: BLUE.md
blue_sha256: 8a95ac225e6de28c3b4a66f447616cd7d7931091fb25980b0e2aa6aa221f7afc
---

# Red: Israball, a Hebrew-first ball-sports store with Israel-side size exchange

## Verdict and reversal evidence

**PIVOT. Confidence: moderate-low (about 0.55).**

The wedge itself (measured sizes plus a Hebrew, Israel-side exchange) holds up as a coherent customer promise. The operating model it sits on does not. INPUT sets up three things that work against each other:

1. Fulfilment is dropshipped from AliExpress (INPUT Constraints).
2. Margin is "AliExpress cost plus a 25–40% trust premium" on "baskets kept under the VAT exemption" (INPUT Distribution and monetization).
3. The promise is an exchange "without international return postage" (INPUT Differentiation).

Blue concedes that (3) needs a local buffer stock or a second cross-border shipment per exchange (BLUE I2). Stock held in Israel is commercially imported, so it probably cannot ride on a per-parcel personal-import VAT exemption (`UNVERIFIED`; needs qualified Israeli tax/customs review). A second cross-border shipment per exchange eats the margin the premium was meant to pay for (BLUE E11, I2). Price is also the main retention reason in every corpus, and no trust premium shows up anywhere (INPUT Counterevidence; BLUE E5–E7). So the model needs a premium the evidence argues against to fund an exchange the tax position may not allow.

**The one material change:** move from "VAT-exempt dropship plus premium over AliExpress" to "a small, VAT-paid, locally stocked range in one size-sensitive category (youth football boots and shin guards first), priced against local chains rather than AliExpress." Measured sizing, Hebrew service and local exchange all stay. What changes is where the money comes from: certainty becomes a discount against chains, not a premium over AliExpress.

**Reversal evidence (moves Red to Blue's VALIDATE):**
- Qualified tax/customs review confirms that exchange replacements shipped from local stock keep the stated basket economics, **or** a dropship-only desk model (Blue T4) shows exchange cost ≤8% of basket at a 15% exchange rate with no local stock; **and**
- an adequately powered, price-shown message test (R2 below) shows the certainty arm at a premium over the AliExpress reference is not worse than the cheapest arm.

**Moves Red to NO_GO:** R1 shows no SKU set clears 10% contribution after VAT, customs and exchange cost at a price at or below the lowest comparable local-chain price, **or** R2 hits its kill threshold.

## Evidence audit

| Claim | Source | Red status | Problem |
|---|---|---|---|
| Listing-vs-reality pain (P2) and return pain (P3) | INPUT Differentiation; BLUE E1 | Weak for this decision | The corpus is global English Google Play, has no Hebrew, and is not country-routed (INPUT Constraints). Review counts and denominators are not given in INPUT or BLUE (`UNVERIFIED`). Whether the reviews concern ball-sports gear or general marketplace orders is not stated (`UNVERIFIED`). This is generic marketplace complaint data and does not measure Israeli ball-sport demand. Negative-review selection bias applies. Freshness is not stated |
| WE BALL size-exchange gap | INPUT; BLUE E2 | Anecdote | One review (INPUT Counterevidence). It cannot carry a wedge |
| No dedicated Israeli online ball-sport specialist | INPUT; BLUE E3 | Absence of evidence | All four profiles are partial (INPUT Constraints). Local chains and their exchange policies are not profiled in INPUT or BLUE, yet they are the substitute that already offers local, Hebrew exchange (`UNVERIFIED`) |
| Price dominates retention; no trust premium; Wish churn went to Temu on price | INPUT Counterevidence; BLUE E5–E7 | Strongest evidence in the file | It appears "in every corpus." It directly contradicts the monetization premise and outweighs every pro-signal |
| Speed gap closing (AliExpress local warehouses, Parcel Home) | INPUT; BLUE E8 | Credible | Removes speed as a wedge. It may also cut into "dead-end return" pain if local warehouses ease returns (`UNVERIFIED`) |
| Israeli ball-sport demand | INPUT; BLUE E9 | Missing | Decision-critical, and no proxy is offered |
| VAT exemption threshold ($75 vs $130/$150) | INPUT; BLUE E10 | Missing | Not just the threshold: whether the exemption applies at all to a reseller's stocked or replacement units is the controlling question (`UNVERIFIED`) |
| 25–40% premium (INPUT); 15–25% premium (BLUE) | INPUT; BLUE Business hypotheses | Unsupported | Blue rightly drops the INPUT figure, but its own range has no support either. Both are guesses |
| Youth parents are the most exchange-sensitive segment (BLUE I3) | BLUE inference | Conflated | A child outgrowing a size is a repeat purchase, not an exchange. Only wrong-size-at-purchase drives exchange cost. The inference supports repeat buying, not exchange demand |
| Hebrew-first beats translated marketplaces (BLUE A4) | BLUE assumption | `UNVERIFIED` | Whether AliExpress or Temu already serve a Hebrew interface or Hebrew support is not in the inputs |

Coverage: `il` is covered only indirectly (market observations, no Israeli review data). `us` and `gb` have no evidence at all, and the wedge (Hebrew, Israel-side exchange, Israeli VAT) does not carry over to them (BLUE Coverage). Treat `us` and `gb` as failed coverage, not deferred coverage.

## Fatal flaws and ranked objections

No proven fatal flaw. Objection 1 is a likely structural blocker that only a qualified review can clear.

| # | Objection | Severity | Likelihood | Evidence status | Affected assumption | Smallest mitigation or test |
|---|---|---|---|---|---|---|
| 1 | **Exchange vs. VAT-exempt dropship.** A local exchange needs local stock (BLUE I2). Local stock is a commercial import that probably owes VAT and customs, which breaks "baskets under the VAT exemption." Without local stock, each exchange is a second cross-border shipment that the reseller pays for (BLUE E11) | Critical | High | Mechanism: BLUE I2/E11. Tax treatment: `UNVERIFIED` | Monetization; differentiation | Qualified Israeli tax/customs review plus the R1 landed-cost desk model, before any traffic spend |
| 2 | **No premium survives price dominance.** Every corpus says price drives retention, and no trust premium is shown (BLUE E5–E7). A 15–40% premium over AliExpress puts Israball in the price band where local chains also offer local exchange | Critical | High | Evidence contradicts the premise | A1 | R2: a price-shown, powered two-arm test |
| 3 | **The falsifier as designed cannot decide anything.** Blue's T1 asks for a ≥20% relative lift at ≥300 visitors per arm. At a 10% base signup rate, 300 per arm can only detect a gap of about 7 points (about 70% relative). Detecting 10% vs 12% needs about 3,800 per arm (two-sided α 0.05, power 0.8; Red's arithmetic, not evidence). T1 will very likely produce noise that gets read as "trust ≈ cheapest → pivot" | High | High | Arithmetic | Every downstream decision | Two arms instead of four, a larger precommitted effect, n set by power (R2) |
| 4 | **Counterfeit and IP exposure in the category.** Branded football boots, basketballs and padel rackets sold at "AliExpress cost" carry a high risk of being counterfeit (`UNVERIFIED`; no evidence in the inputs). An Israeli reseller would carry the liability. Unbranded alternatives may weaken parental appeal (`UNVERIFIED`) | High | Medium | `UNVERIFIED` | Sourcing; catalogue; trust | Restrict to unbranded or private-label SKUs with no marks. Qualified IP review of the SKU list |
| 5 | **Supplier drift breaks "what you see is what arrives."** A measured sample does not guarantee later units from a dropship supplier (BLUE Risks: sourcing quality). Each failure lands on the exact trust promise Israball sells | High | Medium | Mechanism acknowledged by Blue; rate `UNVERIFIED` | Differentiation | Local stock from a single inbound batch (the pivot) removes per-order drift |
| 6 | **Local chains are the real competitor and are unprofiled.** INPUT names "local chain prices" as a workaround, but neither artifact gives chain prices, exchange policies or online presence. The wedge may be a feature chains already provide in person | High | Medium | `UNVERIFIED` | Market; wedge | Targeted refresh: 3–5 chains, youth boot price points, exchange policy |
| 7 | **The channel is out of scope and gatekept.** Club and league WhatsApp groups need community contact, which is excluded without approval (INPUT Constraints). Coaches and parent committees are gatekeepers. Clubs may already arrange kit suppliers (`UNVERIFIED`) | Medium | Medium | Constraint cited; substitute `UNVERIFIED` | A2 | Approval request; ask 2–3 clubs about existing kit arrangements |
| 8 | **Tests need unapproved spend.** T1/T2 need ad spend or outreach. T4 "sample orders" need purchases. Deposits need payments. All are out of scope without approval (INPUT Constraints) | Medium | Certain | Cited | Test plan | Ask for one bounded approval covering R1 sample purchases and R2 traffic |
| 9 | **Wartime delivery shocks hurt a trust brand more than a marketplace** (BLUE E12) | Medium | Medium | Cited | Retention | Local stock (the pivot) separates delivery from cross-border shocks |

## Strongest surviving case

After the attack, the case that survives is narrow. Wrong size is a real, expensive failure in a few categories: youth football boots, shin guards, goalkeeper gloves, and padel grip or weight (BLUE I1). No profiled online player in Israel promises Hebrew sizing certainty with a local swap (INPUT; BLUE E3, partial). Parents rebuy every season, which gives a natural repeat loop and a per-child size profile that compounds (BLUE MVP repeat-use loop; I3 read as repeat, not exchange). If Israball holds a small local stock of one category, it gets a lower price than chains, no supplier drift, an exchange inside Israel, and insulation from cross-border delivery shocks. Its rival is then "chain prices with in-store exchange," not "AliExpress prices." Price dominance (E5–E7) then helps Israball instead of hurting it. That only holds if landed cost including VAT leaves room under chain prices, which nobody has measured (`UNVERIFIED`).

## Product, market, and business challenge

- **User and job:** Blue's narrowing to youth-league parents is right, but the catalogue still spans three sports and 20–40 SKUs (BLUE MVP). Balls carry little size risk (BLUE I1), so they are a commodity line with no wedge. Padel rackets are a separate buyer and a separate trust problem. For the first test, use one sport and one size-sensitive category.
- **Advantage:** "Fits or swapped in Israel" is legible. "Israball-measured size guide" means nothing to a parent until they have had an exchange. Activation depends on the foot-length input step (BLUE MVP), and its completion rate is unknown.
- **Retention and quality:** each failed fit or drifted unit hits the core promise, and the reseller owns disputes and return costs (BLUE E11). Season-start reminders only matter if the first fit succeeded.
- **Market:** the substitutes are AliExpress or Temu (price, and speed parity is improving, BLUE E8), local chains (in-person exchange, `UNVERIFIED` price gap), and club kit arrangements (`UNVERIFIED`). Switching cost is close to zero in every direction.
- **Feasibility:** the Value-Added APIs are gated (INPUT Constraints; BLUE E13), so catalogue and order sync are manual or semi-manual. The support burden is real: every exchange is a human Hebrew contact plus pickup or drop-off logistics. Israeli consumer-protection rules on distance-sale cancellation, and any standards that apply to children's products, are not addressed (`UNVERIFIED`; needs qualified review).
- **Economics:** the margin drivers are VAT and customs treatment, exchange rate times exchange cost, buffer-stock carrying cost and dead sizes, and Buyer Protection losses. None of them is quantified in INPUT or BLUE. The premium is a guess in both artifacts.
- **Distribution:** the primary channel needs approval (INPUT Constraints). Hebrew search volume is unmeasured (BLUE E9, T3).

## Originality and App Review

- **Table stakes vs. bundle:** the table stakes (ILS pricing, tracking, ~90-day refund, a free-shipping threshold, fast checkout; INPUT, citing 03-market-evidence.md §7) are legitimate category norms. A narrow, measured catalogue with a local exchange is not a copy of the AliExpress or Temu bundle. The differentiation thesis is original in operating model, though thin in interaction design.
- **Guardrails:** the INPUT and BLUE guardrails are adequate on name, copy, photos, marks and the absence of gamification. Two additions: (a) no supplier listing photos, even as placeholders, because Blue's "own photography of received samples" requires the samples to exist first; (b) no branded or lookalike-branded SKUs (objection 4). A logo-free lookalike of a branded boot can still raise trade-dress risk (`UNVERIFIED`). Qualified IP review of the SKU list is needed before listing.
- **Deceptive affiliation:** say nothing that implies an affiliation with clubs, leagues or brands. In a fake-door test, every arm must disclose that signup joins a waitlist, and no arm may claim "cheapest" unless the shown price really is the cheapest.
- **Privacy and consent:** the per-child size profile collects data about minors (foot length, age), so consent and minimisation need qualified privacy review (`UNVERIFIED` against Israeli law). Supplier data comes through Dropshipping Center or Open Platform under their terms. No scraping.
- **App Store (iOS is in scope; INPUT Constraints):**
  - **4.1 Copycats: PASS.** Original name, assets and copy, with no AliExpress, Temu or WE BALL marks or listing content (INPUT Constraints). This becomes RISK if supplier photos or copy end up in the app.
  - **4.2 Minimum Functionality: RISK.** A native app over a 20–40 SKU web store is close to a repackaged website. It needs native value, such as a child size profile, fit check, exchange booking and season reminders, before submission. Blue already defers native apps until after validation, and that is correct.
  - **4.3 Spam: PASS.** One app with its own catalogue. This becomes RISK if separate sport-specific apps or a templated storefront are shipped.
  - **Outside 4.1–4.3: RISK under 5.2 (Intellectual Property)** if any counterfeit or lookalike-branded goods are listed. Physical goods may use non-IAP payment, but payments are out of scope without approval.

## Pre-mortem and falsification test

**Pre-mortem (12 months on):** Israball launched across three sports on dropship plus premium. Signups looked fine, but parents compared every boot with the same item on AliExpress and with chain sale prices, and bought where it was cheapest. Exchanges ran at a two-digit percentage on boots. Each one meant either a second cross-border parcel or a stocked unit that tax review later said owed VAT. Supplier drift produced "not as pictured" disputes on the very promise that was supposed to set Israball apart. The four-arm fake door at 300 visitors per arm had come back "inconclusive, pivot," and that result was read as encouragement.

**Decisive risk:** the business cannot fund a local exchange at a price buyers accept (objections 1 and 2).

**R1: landed-cost desk gate (before any traffic spend; needs approval for sample purchases and a qualified tax/customs review):**
- Model 10 youth boot and shin-guard SKUs. Inputs: AliExpress bulk unit cost; VAT and customs on commercial import (`UNVERIFIED` rates, to be sourced officially); inbound freight; buffer stock for the top sizes; exchange cost at a 15% exchange rate; Buyer Protection loss allowance. Compare against the lowest comparable local-chain price (targeted refresh).
- **Success:** at least 6 of 10 SKUs reach ≥20% contribution margin at a price ≤90% of the lowest comparable chain price.
- **Pivot:** 3–5 SKUs qualify → launch only those, or charge a disclosed swap fee.
- **Kill:** fewer than 3 SKUs reach ≥10% contribution → NO_GO on stocked exchange. Revert to Blue's content/affiliate pivot or stop.

**R2: price-shown certainty test (only if R1 passes; needs ad-spend or outreach approval):**
- Hebrew landing page, one category (youth football boots), sports-intent traffic only, two arms, randomised. Arm A: "lowest price" at the R1 target price with standard marketplace-style return terms. Arm B: the same item at A's price +15% with "measured size, fits or swapped in Israel, refund to your card." Every arm discloses that signup joins a waitlist.
- **Primary metric:** completed size-profile reservation (child's foot length plus email). If payments are approved, use a refundable deposit instead.
- **Sample:** ≥1,600 visitors per arm, fixed in advance, with no peeking-based stopping. That size is enough to detect a 30% relative drop from a ~5% base (one-sided α 0.10, power 0.8; Red's arithmetic).
- **Success:** B's rate ≥ A's rate **and** B ≥ 3% of visitors with ≥50 reservations.
- **Pivot:** B between 0.7× and 1.0× A → cut the premium to ≤5% or move to a swap-fee model, then retest once.
- **Kill:** B < 0.7× A, **or** both arms < 1% of visitors (no demand) → NO_GO.

Both R1 and R2 replace Blue's T1. Blue's T3 (demand) folds into R2's absolute floor.

## Adjudicator handoff

- **Verdict:** PIVOT, confidence about 0.55. Change one thing: the operating model goes from VAT-exempt dropship plus premium over AliExpress to a VAT-paid, locally stocked, single-category range priced against local chains. Wedge unchanged.
- **Disagreements with Blue:** (1) Blue's VALIDATE rests on a falsifier that cannot detect its own threshold at the stated n (objection 3). (2) Blue names local buffer stock as the main feasibility cost but does not see that it conflicts with the VAT-exempt basket model (objection 1). (3) Blue's 15–25% premium is no better supported than INPUT's 25–40%. (4) I3 conflates outgrowing with exchanging.
- **Agreements with Blue:** BUILD is not justified. `us` and `gb` have no evidence and should be dropped from this candidate. Native apps are deferred. The ICP narrows to youth-league parents. Balls and padel sit outside the wedge's core.
- **Unresolved RISK/BLOCK items:** App Store 4.2 RISK (native value needed before submission). 5.2 IP RISK (counterfeit or lookalike SKUs). Neither is a BLOCK at this stage, because the native app is deferred and no SKU list exists.
- **Targeted refresh requests (decision-controlling):** (a) an official source for Israeli VAT and customs treatment of personal parcels vs. a reseller's commercially imported stock, and the current exemption threshold; (b) price points and exchange policies for youth football boots at 3–5 Israeli chains; (c) the share of AliExpress youth boot, padel racket and basketball listings that are branded or lookalike; (d) Israeli distance-sale cancellation rules and any standards for children's sports products; (e) whether AliExpress and Temu offer a Hebrew interface or Hebrew support.
- **Qualified reviews required:** tax/customs (objection 1), IP/trade dress (objection 4), privacy for minors' data, consumer protection.
- **Approvals needed:** sample purchases (R1), ad spend or community outreach (R2), payments if deposits are used.
