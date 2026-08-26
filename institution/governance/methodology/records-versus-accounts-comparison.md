# Organizational Diagnostic — Generation One: Sealed Records-versus-Accounts Comparison (Stage 3)

**Classification: Institutional Record** — validation evidence (evidentiary,
non-governing). The comparison authorized by `fd-0021` §2.1 between the
**Client-Stated** half ([`stakeholder-evidence-set-session-1.md`](stakeholder-evidence-set-session-1.md),
Founder Office, 2026-08-25) and the **records-derived** half
([`records-derived-evidence-set.md`](records-derived-evidence-set.md), built at
HEAD `9659fbb` and sealed by commit `86b2b63` before any response existed,
digest `2dfd3345be7ea5b3a5897da0164a513c52e1f389f4ee9ae54ab8f0e125280210`).

- **No default preference** (`fd-0021` §2.5). Records are not preferred
  because they are written; the account is not preferred because the
  stakeholder is the Founder. Founder status does not convert testimony into
  corroborated evidence. Institutional authority and evidentiary
  classification are separate questions.
- **Contradictions are preserved**, not resolved. Where further evidence or
  the organization's own authority is required, this comparison stops.
- **Author-of-records (team).** Institutional Platform Development authored
  most of the records cited. Every outcome below carries that label.
- **Author-of-records (stakeholder) — a disclosure Draft v2 does not
  provide.** The stakeholder is also the authority that approved or issued
  most of the records being compared against. Agreement between the two halves
  is therefore, in several places, one source agreeing with itself. Every such
  case is marked **[same-source]**. Draft v2's A18 has a label for a team that
  authored the records; it has none for a stakeholder who did. That gap is
  carried to the post-test proposals (PT-03), not fixed here.
- **Nothing below is elevated.** No Founder statement is treated as a new
  determination (`fd-0021` §2.6); candidates are listed for Founder Office
  review in the completion report §30.

## 1. What was compared, and how

Seventy-two material claims were extracted from the thirty responses. A single
answer often carries several claims with different classifications; they were
split rather than forced into one (`fd-0021` §2.5). Each claim is compared
against records retrieved independently of the account, and each carries the
eleven fields the instrument requires. The seven permitted classifications are
used exactly as defined; no eighth was invented, and where none fits, the
misfit itself is recorded and carried to the post-test proposals.

**Claims not compared.** The nineteen *not supplied* rows (`S-N01`…`S-N19`)
are not claims and are not classified. They appear in §4 as evidence gaps and
in the completion report §21.

## 2. Supplementary records retrieval — declared, and outside the seal

The sealed set was built before the answers existed and **was not adjusted
after they arrived**. Several answers, however, named subjects the sealed set
had no row for. Those required fresh retrieval, performed at HEAD `21cbb78`
after the account existed. **This retrieval does not carry the seal's
protection** — it was directed by the account, and is labelled here so that no
reader mistakes it for pre-response evidence.

| Ref | Retrieved | Method | Why it was not in the sealed set |
| --- | --- | --- | --- |
| X-01 | "ChatGPT" appears **zero times** in the governed corpus (`institution/**`, `docs/**`) | word search at HEAD `21cbb78` | The sealed set could not know the account would name it |
| X-02 | "VS Code" appears **zero times**; "Claude Code" appears **once**, inside the preserved text of a Founder Office instrument (`fd-0020` line 272, "Claude Code execution context") | word search at HEAD `21cbb78` | Same |
| X-03 | "Claude Design" is an adopted design source: `ddr-0011-claude-design-adoption.md`, the passover evaluation, the implementation completion report | targeted read | Same |
| X-04 | `SOP` appears **once** in the corpus — Vision Foundation §7 step 10, "SOP and documentation development," a step of the intended *client* engagement lifecycle | word search | Same |
| X-05 | No legal-formation or ownership record exists in the corpus: "operating agreement," "sole member," "member-managed," "Articles of Organization" all return zero | word search | The sealed set records the absence of a *people* inventory (R-02) but never tested legal ownership |
| X-06 | `official-launch-layer` capability: "Domain, registrar, apex/www, DNS, notification activation, analytics, and legal review are owner decisions (launch checklist Phase 1)"; `docs/launch/official-launch-checklist.md` holds **40 unchecked items**, the first two being "Confirm official domain (`huertagroupllc.com`) and acquire it" and "Select registrar" | targeted read | R-17 counted open lists; it did not read the launch layer against a domain claim |
| X-07 | `lib/site.ts:14–21`: "TEMPORARY — the intended custom domain (huertagroupllc.com) is not yet connected or confirmed in Vercel" | targeted read | Same |
| X-08 | Public copy at HEAD: About's structure claims now read in forward tense ("is being developed," "is intended to," `components/sections/about/LongTerm.tsx:17–29`), while engagement-implying copy survives at `components/sections/ip/IpHero.tsx:9`, `ip/InstitutionalContinuity.tsx:26`, `ip/KnowledgeBeyondEngagement.tsx:13`, `services/ServiceAreas.tsx:85`, `Contact.tsx:10` | targeted read | R-08 cited the 2026-08-11 audit and the `fd-0006` correction; it did not re-read the copy as it now stands |
| X-09 | `capability-registry.json`: `notification-service` = **standby**, "implemented and hardened but deliberately not_configured in production," activation "an owner decision"; `operations-systems` = **standby**, production cost "deferred, not closed" | targeted read | R-28 recorded the states; the account's "nothing yet" required the exact registry wording |
| X-10 | `fd-0015` §2: "Production Supabase expenditure: not authorized… The organization is on the Free plan and will remain so for now"; local authentic Founder use authorized and "expressly not deployment" | targeted read | R-28 cited `fd-0015` for hosting; the account raised the *sequencing* question |
| X-11 | Discovery Report L19 and §5 item 10: HGP's "author, imprint staff, Founder Office and human sign-off editor 'resolve to one person'"; acceptance criteria "A real author (you)… A real book (yours)" | targeted read of an admitted record | R-20 traced the parent's last work cycle, not HGP's |
| X-12 | HGP admission record Lesson 5 evidence basis: "one observation (FVO-001-001, engineering-found); 'No themes opened yet'; 'No Validation Decisions recorded yet'; corrections attributed to 'Founder Validation Cycle 001' reaching the record by direct authorization" | targeted read of an admitted record | Same |

**Boundary observed:** X-11 and X-12 are read from *parent* records that
already admitted the HGP evidence through the FD-V1 §14 boundary (`fd-0020`
§2.3). No HGP repository material was read for this comparison, and nothing
was admitted, broadened, or attributed beyond the admission record.

## 3. The comparison, claim by claim

Each block records: question · stakeholder statement · stakeholder
terminology · records-derived evidence · record source · record authority and
status · classification · reason · remaining uncertainty · additional evidence
needed · effect on diagnostic advancement.

### Q1 — what the organization is and what its parts are called

**C-01 · Naming of work outside the organizational-systems line — Difference in terminology**

- **Stakeholder statement (S-01):** "ventures/projects" is what such work is called.
- **Stakeholder terminology:** "ventures/projects"; "Huerta Group LLC organizational systems stuff."
- **Records-derived evidence:** the records use **venture** as a governed status conferred by determination — admission, charter, name grant, per-dimension lifecycle — and hold exactly one: Huerta Group Publishing. "Project" carries no governed meaning anywhere in the corpus.
- **Record source:** R-01; `fd-0007`; FD-V1 charter; FD-V2 register topology.
- **Record authority / status:** current governing determinations.
- **Reason:** the account pairs a governed term with an ungoverned one as if interchangeable. Both halves point at the same organizational reality — work held apart from the parent's own line — in different words.
- **Remaining uncertainty:** whether "project" names anything the records do not already hold as a venture, or is loose speech for the same thing.
- **Additional evidence needed:** the stakeholder's list of what is a "project" and what is a "venture," if the two differ.
- **Effect on advancement:** A1 terminology row recorded; no finding rests on the distinction.

**C-02 · The organization's own names for its units, areas, roles and offices — Unresolved**

- **Stakeholder statement:** not supplied (`S-N01`). The response addressed only the venture/project class.
- **Stakeholder terminology:** none offered for the internal parts.
- **Records-derived evidence:** the records name Founder Office, Corporate Headquarters, four functions, four "rooms," Design System, Branding (future), and one venture — as **written** terms; whether they are spoken terms was already recorded as unknown.
- **Record source:** R-01; Vision Foundation; `fd-0007`; dry run §3.4, §3.11.
- **Record authority / status:** current; naming drift recorded and unchanged.
- **Reason:** the question was put and the answer did not reach this limb. Records establish written usage only; the account did not supply spoken usage. Neither corroborates nor contradicts.
- **Remaining uncertainty:** all of it — this is the largest A1 gap in the session.
- **Additional evidence needed:** the stakeholder naming the parts in the stakeholder's own words; observation of the terms in use.
- **Effect on advancement:** A1 is **incomplete**; every instrument that would carry the organization's terms carries the records' terms instead, and says so.

**C-03 · "HGP" — Corroboration**

- **Stakeholder statement (S-02):** HGP is an instance of the venture/project class.
- **Stakeholder terminology:** "HGP."
- **Records-derived evidence:** the corpus uses both "Huerta Group Publishing" and "HGP"; HGP is the one chartered venture, holding delegated authority whose detail is not reproduced at the parent level.
- **Record source:** FD-V1 charter; `fd-0007`; R-01.
- **Record authority / status:** current governing determination.
- **Reason:** account and records name the same thing the same way and place it in the same relation to the parent.
- **Remaining uncertainty:** none material. **[same-source]** — the charter is the stakeholder's own determination.
- **Additional evidence needed:** none.
- **Effect on advancement:** supports the A7 boundary between parent work and venture work.

### Q2 — who works in or for the organization

**C-04 · Operational staffing is one person — Corroboration**

- **Stakeholder statement (S-03, S-24):** "Me, myself and I right now — lone wolf"; "[o]nly one-man show here right now."
- **Stakeholder terminology:** "lone wolf"; "one-man show."
- **Records-derived evidence:** no people inventory exists; the records name offices, functions and rooms, never persons. The Local Operations Activation Report states "[i]n practice the Founder wears both hats and signs in as whichever the task calls for." All twenty determination records resolve to the Founder Office. No delegation, employment, contractor or advisor record is accessible. The dry run's Instrument 6 records "the organization is one person," loss risk **Total**.
- **Record source:** R-02, R-11, R-13; Local Operations Activation Report; dry run §3.3, §3.9, E-12, HK-6; Discovery Report L19.
- **Record authority / status:** current; the activation report is an evidentiary record the team wrote; the determination count is observable independently.
- **Reason:** the two halves agree, and one strand of the records evidence — twenty determinations with a single signatory and the complete absence of any second-actor record — is observable without relying on any assertion.
- **Remaining uncertainty:** **[same-source]** for the activation report's "both hats" sentence, which is an assertion in a record the same authority approved. Absence of a people record is not proof that no other person exists (A17 rule 4).
- **Additional evidence needed:** none for the operational finding at this scale.
- **Effect on advancement:** the single-actor condition is established well enough to carry A6, A7 and A12 findings — as a **current-state condition of this organization**, never as a property the method assumes (Draft v2 A1).

**C-05 · Legal ownership — Missing records**

- **Stakeholder statement:** none. Q2 asked who works in or for the organization, not who owns it.
- **Stakeholder terminology:** —
- **Records-derived evidence:** the corpus contains no operating agreement, membership record, Articles of Organization, or any other formation instrument (X-05). Administration & Compliance filings are recorded as not accessible.
- **Record source:** X-05; R-04.
- **Record authority / status:** absence at HEAD `21cbb78`.
- **Reason:** the instrument requires legal ownership to be distinguished from operational staffing. It cannot be established here: the durable record holds nothing on it, and the account was not asked.
- **Remaining uncertainty:** ownership is presumed by everyone and evidenced by no one in this corpus.
- **Additional evidence needed:** the formation instrument, or a Founder Office statement of where it is held.
- **Effect on advancement:** recorded as an evidence gap; no finding depends on it. Legal ownership is **not** inferred from operational staffing, and operational staffing is **not** inferred from ownership.

**C-06 · Tools and services treated as doing work — Unresolved**

- **Stakeholder statement:** not supplied (`S-N02`). Q2 expressly invited services and tools "that you treat as doing work"; none were named.
- **Stakeholder terminology:** —
- **Records-derived evidence:** the records evidence an AI development office performing essentially all execution (the last complete cycle: "Founder Office (instrument, acceptance); IPD (everything else); CI (gate)"), a governing standard written for a development model with a bounded execution budget, and four external services holding organizational data or configuration.
- **Record source:** R-20, R-24, R-25; bounded-autonomous-completion standard §§22, 41–43, 50.
- **Record authority / status:** current.
- **Reason:** the account's silence is not a denial, and the instrument forbids collapsing tool use into human staffing. Whether the stakeholder regards these as doing work is exactly what was asked and not answered.
- **Remaining uncertainty:** the whole subject.
- **Additional evidence needed:** the stakeholder's own account of what the tools do and what they decide.
- **Effect on advancement:** the A7 function map cannot state how much of the organization's work is performed by non-human means on the stakeholder's own understanding; it states what the records show and marks the gap.

### Q3 — the organization's words for tracking, waiting, deciding, being told

**C-07 · One word for the concept set — Difference in terminology**

- **Stakeholder statement (S-04):** "Process."
- **Stakeholder terminology:** "Process."
- **Records-derived evidence:** the adopted operations doctrine defines eleven distinct terms for this territory — Operational Record, State, Material Change, Founder Attention, Dependency, Blocker, Handoff, Deadline, Renewal, Follow-Up, Since Last Review — and the determinations register uses "determination," "instrument," "return," "reserved to the Founder Office."
- **Record source:** R-03; Corporate Operations Semantics Foundation v1 and its adoption at `fd-0012`; determinations register.
- **Record authority / status:** current adopted doctrine, prospective in effect; the system it governs is in local pre-production use.
- **Reason:** Q3 exists to test Draft v2 A1's terminology discovery — the organization's own words *before* any neutral term. The answer supplies one word where the records supply eleven, and it is none of them. That is a difference in terminology, not a defect in either half: adopted doctrine is not falsified by the fact that its author does not speak it, and a one-word answer is not made wrong by a long glossary.
- **Remaining uncertainty:** whether "Process" is the stakeholder's genuine single term for all four things the question named, or a short answer to a long question. The single-pass channel gave no way to ask (Deficiency 2, `fd-0021` §4).
- **Additional evidence needed:** a clarification-only follow-up under procedure §4; or observation of the terms actually used in work.
- **Effect on advancement:** A1 is under-determined here as at C-02. The doctrine's vocabulary is **not** written into the account, and the account's word is **not** expanded. The instruments carry "Process." as given.

### Q4 — what the team lacks access to

**C-08 · Curbside Spa — Missing records**

- **Stakeholder statement (S-05):** "Curbside Spa" holds information the team has not been given access to.
- **Stakeholder terminology:** "Curbside Spa."
- **Records-derived evidence:** `fd-0019` §2.7 classifies Curbside Spa as an "[i]nternal business/venture idea; not client-delivery work; not external organizational-engagement evidence," "[n]ot expected to proceed," with its Supabase project "expected to be retired through ordinary cleanup on an approximately 60-day horizon." The Discovery Report records a sibling repository read to `README.md` head only and states it was **not** treated as Huerta Group evidence. The parent corpus holds nothing else about it.
- **Record source:** `fd-0019` §2.7; Discovery Report §2 baseline table; audit §6; Stage 2 report §60.
- **Record authority / status:** current governing determination (classification and exclusion); no operational record.
- **Reason:** the account identifies an information holding for which no durable record exists beyond a determination excluding it from methodology evidence. That is the definition of the missing-records classification.
- **Remaining uncertainty:** what information it holds, in what form, and whether any of it bears on the organization being diagnosed.
- **Additional evidence needed:** a Founder Office decision on whether any of it is in scope. None was sought and none is implied by its mention.
- **Effect on advancement:** the **access statement** now records a named holding at access = **none** (A3 step 10). Under A18 no material finding may *proceed* on anything depending on it — and none does. **Governance confirmation:** naming it in Q4 does not convert it into external evidence; the `fd-0019` §2.7 classification stands untouched (`fd-0021` §2.7 validation 8).

**C-09 · Anything the team should not rely on — Unresolved**

- **Stakeholder statement:** not supplied (`S-N03`).
- **Stakeholder terminology:** —
- **Records-derived evidence:** the records themselves flag material that should be read with care: four capability-registry values "stale but not false," contributor AI memory found stale twice, launch validation commands superseded.
- **Record source:** R-19, R-26; records-derived set §2.
- **Record authority / status:** current dispositions of stale records.
- **Reason:** the limb was not reached; the records-side caveats stand on their own and are not attributed to the stakeholder.
- **Remaining uncertainty:** whether the stakeholder would exclude anything the team relied on.
- **Additional evidence needed:** the second limb of Q4.
- **Effect on advancement:** none beyond the caveats already carried.

### Q5 — knowledge that exists only in heads or conversations

**C-10 · Unwritten knowledge lives in conversation — Corroboration**

- **Stakeholder statement (S-06):** it is "all… in various ChatGPT rooms within the project."
- **Stakeholder terminology:** "rooms," "the project."
- **Records-derived evidence:** four accepted historical instruments existed only in the implementer's session records until recovered; two are lost; nine OSPA sections are permanently lost; contributor memory was found stale twice; HGP's own records cite Founder Office directives that its repository does not hold. The organization's refined memory principle names conversation and transient environments as never authoritative by existence.
- **Record source:** R-05; `historical-instrument-retrieval-record.md`; OSPA admission record; `fd-0019` §2.9; Discovery Report §2 item 9.
- **Record authority / status:** current; the losses are recorded events, not assertions.
- **Reason:** the account states the condition the records independently evidence — institutionally significant knowledge held in conversation — and states it of the present, not only the past.
- **Remaining uncertainty:** the *quantity* and *significance* of what is held there. "All" is the stakeholder's word and cannot be sized from either half.
- **Additional evidence needed:** an inventory of the rooms, or access; neither was sought.
- **Effect on advancement:** this is the session's principal A12 finding and it is **corroborated**. It also creates the access gap at C-11.

**C-11 · The named location appears nowhere in the corpus — Missing records**

- **Stakeholder statement (S-06, S-22):** "ChatGPT rooms," "ChatGPT projects."
- **Stakeholder terminology:** as above.
- **Records-derived evidence:** "ChatGPT" occurs **zero times** across `institution/**` and `docs/**` (X-01). The corpus's systems inventory names the repository, the operational register, Vercel, Supabase, Resend, QuickBooks and the venture platform — and not this.
- **Record source:** X-01; R-25; dry run §3.10.
- **Record authority / status:** absence at HEAD `21cbb78`.
- **Reason:** the accountable authority identifies a holding of organizational knowledge that the organization's own systems record does not know exists.
- **Remaining uncertainty:** whether the omission is oversight, or a deliberate boundary between personal and institutional tools.
- **Additional evidence needed:** a Founder Office statement of whether these rooms are inside the organization; then, if inside, an Instrument 4 and Instrument 6 row for them.
- **Effect on advancement:** access = **none** for a holding that a material A12/A9 finding depends on. Under A18 this alone **prevents proceeding** on institutional-memory findings.

**C-12 · "rooms" — Difference in terminology**

- **Stakeholder statement (S-06):** "various ChatGPT rooms within the project."
- **Stakeholder terminology:** "rooms."
- **Records-derived evidence:** the corpus uses "room" for institutional deliberative bodies — Vision Room, Methodology room, IP, Education — with authority attached.
- **Record source:** R-01; Vision Foundation; Methodology Foundation; Discovery Report §5 item 1.
- **Record authority / status:** current governing usage.
- **Reason:** one word carries two unrelated meanings across the two halves — an institutional authority and a conversation container. Draft v2 A1 requires recording the divergence as a finding rather than substituting either.
- **Remaining uncertainty:** whether the stakeholder experiences these as the same kind of thing.
- **Additional evidence needed:** clarification-only follow-up.
- **Effect on advancement:** recorded as an A1 divergence; no instrument silently translates one into the other.

### Q6 — purpose

**C-13 · "Organizational systems company" — Corroboration [same-source]**

- **Stakeholder statement (S-07):** "Organizational systems company — help businesses/organizations run effectively and be able to scale if wanted."
- **Stakeholder terminology:** "organizational systems company"; "scale if wanted."
- **Records-derived evidence:** Vision Foundation §1: "Huerta Group LLC is an organizational systems company. The Company helps organizations understand, design, improve, implement, and continuously strengthen the systems through which they operate" — and is "not fundamentally" an AI, software, marketing, automation, reseller, or web-development company. §2: organizations reach a point where growth or complexity exceeds operational capacity; the Company exists to help them "build durable operational capability," so that "growth does not depend on unsustainable individual effort."
- **Record source:** R-06; `institution/governance/strategic/vision-foundation-for-development.md` §§1–2; propagated to `lib/site.ts:10–11` and every public route.
- **Record authority / status:** Approved Strategic Authority, current. Approval date and instrument not held (a standing deficiency).
- **Reason:** the account and the governing statement agree at the identity level, in nearly the same words.
- **Remaining uncertainty:** **[same-source]** — the stakeholder is the approving authority of the document being agreed with, and used its exact phrase. This is the clearest instance in the session of agreement that is not independent evidence. It is recorded as corroboration of *consistency*, not of *accuracy*.
- **Additional evidence needed:** for accuracy rather than consistency, evidence of operation matching the stated purpose — which is what Q7–Q10 address, and which the records do not yet show for external work.
- **Effect on advancement:** A4 purpose is sufficiently understood **as stated**. The A18 minimum-evidence element "organizational purpose sufficiently understood" is answered *Client-Stated*, not *Observed*.

**C-14 · Scope: "run effectively and be able to scale" — Difference in terminology**

- **Stakeholder statement (S-07):** the help offered is to "run effectively and be able to scale if wanted."
- **Stakeholder terminology:** as above.
- **Records-derived evidence:** the governing statement enumerates a wider field — operations consulting, organizational systems design, process improvement, documentation, workflow automation, AI implementation, technology strategy, data systems, performance measurement, change management, project leadership, long-term advisory — and a five-branch value model (services, methodology and IP, education, technology, managed services).
- **Record source:** Vision Foundation §§1, 5; public routes for education, IP, managed services, technology.
- **Record authority / status:** current governing statement.
- **Reason:** the stakeholder's formulation is materially **narrower** than the governing records, and omits four of the five branches entirely. It is less precise stakeholder language about the same identity, not a competing purpose.
- **Remaining uncertainty:** whether the omission reflects present focus, present belief about the Company's scope, or brevity.
- **Additional evidence needed:** the stakeholder's account of the branches, which Q6 did not ask for and no other question reached.
- **Effect on advancement:** recorded. The A5 and A7 treatment of the non-services branches rests on records alone and says so.

### Q7 — what the last three months were spent on

**C-15 · Company-building and institution-building — Corroboration**

- **Stakeholder statement (S-08):** "Creating the company, and creating the institution that everything will essentially be underneath."
- **Stakeholder terminology:** "the institution that everything will essentially be underneath."
- **Records-derived evidence:** between 2026-08-07 and 2026-08-25 the records show repository foundation and migration; a public website and design system; venture admission and governance; operations doctrine and the Corporate Command Center; and the methodology program. **No client engagement is evidenced.**
- **Record source:** R-07; Evolution Log evo-0001…evo-0006; determinations register; git history.
- **Record authority / status:** current; observed recorded work.
- **Reason:** the account's two categories map onto what the records show was actually done, and the records show nothing outside those categories.
- **Remaining uncertainty:** none for the recorded period.
- **Additional evidence needed:** none.
- **Effect on advancement:** supports A4's finding that observed operation is inward-facing institution-building; the account now says so in the stakeholder's own words rather than the team inferring it.

**C-16 · The earlier part of the three-month window — Unresolved**

- **Stakeholder statement:** the account does not bound its period.
- **Stakeholder terminology:** —
- **Records-derived evidence:** the governed record begins 2026-08-07 (`fd-0001`); before that the records are silent. Roughly seventy of the ninety days the question asked about are unevidenced on both sides.
- **Record source:** R-07.
- **Record authority / status:** absence.
- **Reason:** neither half speaks to the earlier period.
- **Remaining uncertainty:** everything before 2026-08-07.
- **Additional evidence needed:** the stakeholder's account of that period, or pre-repository artifacts.
- **Effect on advancement:** the A4/A5 picture is bounded to nineteen days of evidence and every instrument says so.

### Q8 — where what it says and what it does differ

**C-17 · Stated exceeds actual — Corroboration**

- **Stakeholder statement (S-09):** "Says we do plenty but we haven't done anything really aside from HGP."
- **Stakeholder terminology:** "says we do plenty."
- **Records-derived evidence:** the organization's own audit (2026-08-11) found the About page asserting that the work "*already* takes more than one form," naming an Education "division that teaches" and a Managed Services "function that sustains," against records showing "no program, course, learner, credential or LMS exists" and Managed-Service Infrastructure classified "public description only" — a contravention of Vision Foundation Guardrail 8 ("Public systems must not present planned or aspirational capabilities as though they already exist"). The audit further found copy implying an engagement history the repository could not evidence, and classified that *Insufficient Repository Evidence*. `fd-0006` FO-04 and FO-05 ordered both corrected.
- **Record source:** R-08; Corporate Platform Alignment Audit §2 findings 1–2, §4 Q3, §5; `fd-0006` FO-04, FO-05; dry run §3.1.
- **Record authority / status:** the audit is a historical accepted record; the determinations are current; the corrections are executed (commit `f10394a`).
- **Reason:** the organization's own audit reached the same direction of divergence the stakeholder now states, on independently observable copy, before the account existed.
- **Remaining uncertainty:** the account does not say *which* statements it means, so the correspondence is at the level of direction, not of specific text.
- **Additional evidence needed:** the stakeholder identifying the copy in question.
- **Effect on advancement:** A4's stated-versus-actual divergence moves from *Inferred* (dry run) to *Inferred + Client-Stated corroborated by an independent audit record*. It remains a finding about representation, not about intent.

**C-18 · Direction of the divergence, against the preserved Founder Observation — Contradiction [same-source, across time]**

- **Stakeholder statement (S-09):** representation says more than has been done.
- **Stakeholder terminology:** as above.
- **Records-derived evidence:** `fd-0006` preserves a Founder Observation, verbatim and non-governing: "**FVO — Public Platform Maturity.** Across the current institutional evidence, Huerta Group LLC has matured faster than its public representation." That is the opposite direction — representation lagging maturity. The audit itself found both: overstatement of internal structure and external reach (findings 1–2) and understatement of the venture (finding 3).
- **Record source:** `fd-0006` "Founder Observation (preserved at proposed state)"; audit §2 findings 1–3, §6.
- **Record authority / status:** the FVO is preserved as a **proposed, non-governing** observation, 2026-08-12; the account is 2026-08-25.
- **Reason:** two statements from the same source, thirteen days apart, point in opposite directions about the same subject. They are reconcilable only by reading them as being about different objects (the venture understated; the practice overstated) — and that reconciliation is the diagnostic team's inference, which the instrument forbids substituting for evidence. **The contradiction is preserved.**
- **Remaining uncertainty:** whether the stakeholder now regards the FVO as superseded, still true of the venture, or wrong.
- **Additional evidence needed:** a Founder Office statement on the standing of the FVO. It is expressly *not* sought here and *not* inferred.
- **Effect on advancement:** any finding about public representation is returned to client authority rather than resolved (A18 outcome "return unresolved questions"). The FVO is not rewritten, and the account is not treated as superseding it.

**C-19 · "Haven't done anything really aside from HGP" — Difference in terminology (alternative reading: Contradiction, preserved)**

- **Stakeholder statement (S-09, S-11, S-13):** nothing done or delivered aside from HGP; "no immediate value as I haven't officially produced anything."
- **Stakeholder terminology:** "done anything," "officially produced."
- **Records-derived evidence:** the parent has produced a public website (deployed, `operational`), an inquiry-intake capability (`operational`, "the only substantive runtime institutional capability today"), a governance corpus now of 177 governed documents with six registries, deterministic validators and a CI gate, an operational register in local authentic Founder use, and a methodology draft with two frozen versions. Against that: **no external recipient of a parent output is evidenced**, the sole inquiry row is marked TEST, and official launch is not authorized.
- **Record source:** R-09; capability registry; manifest; `fd-0015`; X-06.
- **Record authority / status:** current; observed.
- **Reason:** read as "nothing has been delivered to anyone outside," the claim is **corroborated** and the difference is one of vocabulary — the stakeholder uses "done/produced" for externally delivered work. Read literally as "nothing has been produced," it is **contradicted** by substantial recorded output. The instrument forbids silently translating the stakeholder's terminology; both readings are therefore recorded, with the terminological reading primary because Q9 and Q10 use "delivered" and "officially produced" in the same sense.
- **Remaining uncertainty:** which the stakeholder meant. The single-pass channel gave no way to ask.
- **Additional evidence needed:** clarification-only follow-up.
- **Effect on advancement:** A5 records both the internal output inventory and the absence of external consumption, and does not choose between the readings.

**C-20 · Systems before outsiders — Contradiction (narrow, on sequencing)**

- **Stakeholder statement (S-10, S-12):** "[n]ow we need our own systems in place so we can take on outsiders and produce"; the systems and processes for clients are still being built.
- **Stakeholder terminology:** "outsiders."
- **Records-derived evidence:** the capability registry records the opposite order for the same subject: `client-delivery-systems` is `conceptual`, and its description states "**Early engagements can be delivered with disciplined governed documents; systems come later.** Inquiry intake is the only implemented sliver," with the unresolved decisions "[e]ngagement-record conventions and confidentiality practice precede any system" and "[c]lient portals are explicitly deferred until identity, data governance, and demonstrated need exist."
- **Record source:** capability registry `client-delivery-systems`; R-09.
- **Record authority / status:** current registry entry; the registry "records, never creates," and its governing references are the Vision Foundation and ADR practice.
- **Reason:** the account makes systems a precondition of taking on outside work; the record makes documents sufficient and systems a consequence. Both are about when external work may begin. They conflict.
- **Remaining uncertainty:** whether the stakeholder means client-*delivery* systems (the registry's subject) or the internal institution-building of Q7 — the two are not distinguished in the answer.
- **Additional evidence needed:** clarification, or a Founder Office decision on the sequencing question. Not resolved here.
- **Effect on advancement:** returned to client authority. It is also a candidate for elevation and appears in the completion report §30.

**C-21 · Public copy that still implies an operating practice — Records that no longer describe actual operation**

- **Stakeholder statement (S-09):** the "says we do plenty" side of the divergence.
- **Stakeholder terminology:** as above.
- **Records-derived evidence:** at HEAD `21cbb78` the About page's structure claims read in forward tense, as `fd-0006` required. Engagement-implying copy survives elsewhere: "what the Company learns can strengthen any organization **it serves**, not only **the engagement** where the learning occurs" (`components/sections/ip/IpHero.tsx:9`); "**Every engagement done well** strengthens the foundation" (`ip/InstitutionalContinuity.tsx:26`); "**Each engagement** produces…" (`ip/KnowledgeBeyondEngagement.tsx:13`); "No engagement includes all of them by default" (`services/ServiceAreas.tsx:85`); "**Every engagement begins the same way**" (`Contact.tsx:10`). The records evidence zero engagements.
- **Record source:** X-08; audit §2 finding 2; `fd-0006` FO-04.
- **Record authority / status:** current public copy, produced under a **closed** authorization (`fd-0006` Phase 1, executed at `f10394a`); FO-04 expressly permitted "truthful forward-looking or capability-oriented language" chosen "according to page context and repository truth rather than applying one phrase mechanically everywhere."
- **Reason:** these lines were reviewed and kept under FO-04 as capability-oriented language. They nonetheless describe a practice conducting engagements, which the records do not evidence, and the accountable authority now states the same in its own words. That is a record whose current descriptive accuracy is in question — classified as such, on evidence, and **not corrected**.
- **Remaining uncertainty:** whether these readings exceed what FO-04 intended to permit. That is the Founder Office's judgement, not Development's.
- **Additional evidence needed:** a Founder Office reading of FO-04 against these five lines.
- **Effect on advancement:** **no website or record was modified** (`fd-0021` §2.7 validation 4; no separate authority requires correction). The finding is returned, not executed.

### Q9 — outputs and recipients

**C-22 · No external delivery — Corroboration**

- **Stakeholder statement (S-11, S-12):** "[h]aven't delivered anything aside from HGP"; client systems and processes still being built.
- **Stakeholder terminology:** "delivered."
- **Records-derived evidence:** no external recipient of a parent output is evidenced beyond website visitors; the single inquiry row is marked TEST; `client-delivery-systems` is `conceptual`; no engagement record, deliverable, invoice, or client artifact exists anywhere in the corpus.
- **Record source:** R-09; capability registry; dry run §3.2, E-05, E-09–E-11.
- **Record authority / status:** current; observed absence across an exhaustively indexed corpus.
- **Reason:** both halves say the same thing, and the records' side rests on the absence of any artifact in a corpus whose coverage is validated as exact — a stronger form of absence than usual.
- **Remaining uncertainty:** the corpus cannot speak to off-repository engagements; the audit recorded the same limit ("cannot verify or refute an off-repository client base"). The account now closes that gap from the other side, subject to being Client-Stated.
- **Additional evidence needed:** none proportionate.
- **Effect on advancement:** the external-delivery maturity finding (completion report §17) is **corroborated from both halves**.

**C-23 · Whether HGP's outputs are the organization's deliveries — Difference in terminology**

- **Stakeholder statement (S-11):** "aside from HGP" — HGP is the exception to "delivered nothing."
- **Stakeholder terminology:** "delivered … aside from HGP."
- **Records-derived evidence:** the records hold HGP's outputs as **the venture's**, not the parent's; the venture holds delegated authority whose detail is not reproduced at parent level; the parent/venture relationship in public representation is expressly an unresolved institutional-governance matter (`fd-0006` FO-03).
- **Record source:** R-09; FD-V1 charter; FD-V2; `fd-0006` FO-03.
- **Record authority / status:** current governing determinations; the public-representation limb open by determination.
- **Reason:** the account attributes to the organization what the records attribute to a subordinate unit. The referent is the same; the attribution boundary differs.
- **Remaining uncertainty:** whether the stakeholder distinguishes parent from venture in this sentence at all.
- **Additional evidence needed:** none for the diagnostic; the attribution question is already reserved by `fd-0006` FO-03.
- **Effect on advancement:** the A5 output inventory records parent outputs and venture outputs separately and does not merge them on the strength of this sentence.

**C-24 · Who outside depends on the organization's outputs — Unresolved**

- **Stakeholder statement:** not supplied (`S-N04`).
- **Stakeholder terminology:** —
- **Records-derived evidence:** no dependant is evidenced; website visitors are the only external contact recorded.
- **Record source:** R-09.
- **Record authority / status:** absence.
- **Reason:** the limb was not reached; absence of record is not proof of non-occurrence (A17 rule 4).
- **Remaining uncertainty:** whether anyone outside relies on anything.
- **Additional evidence needed:** the second limb of Q9.
- **Effect on advancement:** A5's consumption classification is recorded as internally consumed with an explicit gap.

### Q10 — value-creating versus habit activities

**C-25 · "No immediate value" — Unsupported stakeholder assertion**

- **Stakeholder statement (S-13):** "There's no immediate value as I haven't officially produced anything."
- **Stakeholder terminology:** "immediate value," "officially produced."
- **Records-derived evidence:** the dry run's relevance test found a **present operational answer** for four bodies of work — the determinations register, the Generation One requirements, the operations doctrine, and venture governance — and none for the Education and IP foundations. The operational register is in authentic Founder use. The governance corpus is what every determination in the program is executed against.
- **Record source:** R-10; dry run §3.2, Instrument 8.
- **Record authority / status:** current; the relevance test is the team's *Inferred* classification, marked as such.
- **Reason:** the totality claim is not corroborated: independent evidence shows work presently answering an operational question. The claim is not *contradicted* either — the stakeholder is speaking about value delivered outward, and no such value is evidenced. It is recorded as unsupported at the level of totality, with the outward-value reading corroborated separately at C-26.
- **Remaining uncertainty:** what the stakeholder counts as value.
- **Additional evidence needed:** clarification; or the second limb of Q10 (which activities exist because of habit, tooling, or process), which was not reached.
- **Effect on advancement:** A5's value discussion is recorded with both halves and no conclusion drawn about what is or is not valuable — a determination reserved to the organization (A19).

**C-26 · "Haven't officially produced anything" — Corroboration**

- **Stakeholder statement (S-13):** as above.
- **Stakeholder terminology:** "officially."
- **Records-derived evidence:** official launch is not authorized: `official-launch-layer` is `launch_phase`, "[f]ully planned; technically ready; entirely owner-authorized"; the launch checklist holds forty unchecked items; the launch-readiness record classifies the platform "READY FOR OWNER-AUTHORIZED OFFICIAL LAUNCH (pending the owner decisions listed below)"; production expenditure is not authorized (`fd-0015`).
- **Record source:** X-06; `docs/launch/launch-readiness.md`; `fd-0015`.
- **Record authority / status:** current.
- **Reason:** the stakeholder's word "officially" tracks a real institutional state the records hold precisely: everything is built and nothing is launched.
- **Remaining uncertainty:** none material.
- **Additional evidence needed:** none.
- **Effect on advancement:** corroborated; supports the external-delivery maturity finding.

**C-27 · "SOPs-type stuff" — Difference in terminology**

- **Stakeholder statement (S-14):** present work is "building SOPs-type stuff, infrastructure."
- **Stakeholder terminology:** "SOPs-type stuff," "infrastructure."
- **Records-derived evidence:** "SOP" occurs **once** in the corpus — Vision Foundation §7 step 10, "SOP and documentation development," a step of the intended **client** engagement lifecycle. The internal equivalents are named otherwise: foundations, standards, doctrine, operating procedures, determinations.
- **Record source:** X-04; Vision Foundation §7.
- **Record authority / status:** current governing statement.
- **Reason:** the stakeholder applies the organization's client-work vocabulary to the organization's own institution-building. The referent overlaps the records' internal instruments; the word belongs to a different plane in the records.
- **Remaining uncertainty:** whether the stakeholder distinguishes internal instruments from client deliverables at all.
- **Additional evidence needed:** clarification-only follow-up.
- **Effect on advancement:** A1 row recorded; no substitution made.

### Q11 — who can decide what

**C-28 · Decision-making is concentrated in one actor — Corroboration**

- **Stakeholder statement (S-15):** "For right now it's just me."
- **Stakeholder terminology:** —
- **Records-derived evidence:** formally, decision rights are distributed by name — Vision Room / Founder Office for strategy, the Methodology room (interim: Founder authority) for methodology, Institutional Platform Development for "how," Corporate Headquarters for legally operative acts, Founder Office for ventures, launch and public representation. Observed: the Founder Office in **every** recorded decision, twenty-one determination records. Decision-rights architecture is recorded as "pending."
- **Record source:** R-11; dry run Instrument 2; determinations register.
- **Record authority / status:** the formal map is Client-Stated in the records; the twenty-one recorded acts are Observed.
- **Reason:** account and records agree on observed authority, and the records add what the account does not: the formal map names several authorities that resolve to the same actor. Draft v2's Instrument 2 field "**held by the same actor as…**" is exactly the field this needs, and it fired.
- **Remaining uncertainty:** none for the current state. The condition is **of this organization now**, not a property the method presumes (Draft v2 A1 makes a distributed structure equally non-assumed).
- **Additional evidence needed:** none.
- **Effect on advancement:** the A6 role-compression finding is recorded with its continuity consequence, corroborated from both halves.

**C-29 · Consultation and escalation — Missing records**

- **Stakeholder statement:** not supplied (`S-N05`).
- **Stakeholder terminology:** —
- **Records-derived evidence:** **consultation: none evidenced. Escalation: none evidenced.** The Discovery Report records that most "escalations" were "the Founder returning questions to the Founder."
- **Record source:** R-11; dry run Instrument 2; Discovery Report §5 item 10.
- **Record authority / status:** current; recorded absence.
- **Reason:** the organization has no consultation or escalation record, and the account did not supply one. Instrument 2 forbids writing "not applicable" here, and it was not written; the rows read "none evidenced."
- **Remaining uncertainty:** whether the stakeholder consults anyone informally.
- **Additional evidence needed:** the unanswered limbs of Q11.
- **Effect on advancement:** recorded; the rule that consultation and escalation are never "n/a" survived a single-actor organization, which is what correction C-4 was accepted to achieve.

**C-30 · "Haven't really shared this with anyone else" — Missing records**

- **Stakeholder statement (S-16):** the work has not been shared with anyone else, "not yet."
- **Stakeholder terminology:** —
- **Records-derived evidence:** the corpus holds no disclosure record, distribution list, or sharing register. Every governed record carries `disclosure: repository-internal`; zero governed records are approved for public disclosure.
- **Record source:** X-05 pattern (absence); manifest `disclosure` values; audit §3.
- **Record authority / status:** current.
- **Reason:** the account states a condition — non-disclosure — for which the records hold a consistent posture but no positive record. The disclosure classification is about permission, not about what was actually shared.
- **Remaining uncertainty:** what "this" refers to, and what counts as sharing.
- **Additional evidence needed:** none proportionate.
- **Effect on advancement:** none; recorded for A12 context.

### Q12 — decisions not formally yours, or held by no one

**C-31 · "Nothing yet" against recorded unheld decisions — Contradiction**

- **Stakeholder statement (S-17):** "Nothing yet."
- **Stakeholder terminology:** —
- **Records-derived evidence:** the organization's own records name decisions no one clearly holds: **Branding** decisions are routed to "a future institutional authority" with **no governing document** (`fd-0001` determination 6); **permanent methodology approvers** are "unresolved" (Methodology Foundation v1 §10.6, interim Founder authority); the **constitutional amendment process** is named but not defined; and the ratified constitutional text is held outside the durable record.
- **Record source:** R-12; `fd-0001` det. 6; Methodology Foundation §10.6; dry run Instruments 2 and 8; R-04.
- **Record authority / status:** current; each gap is recorded by the organization in its own governing records.
- **Reason:** the records identify at least three decision domains with no holder; the account says there are none. Both halves originate with the same authority, which makes the divergence a finding about visibility rather than about fact — but the instrument forbids resolving it that way, and it is preserved as a contradiction.
- **Remaining uncertainty:** whether "Nothing yet" answers all three limbs of Q12 or only the first (decisions the stakeholder makes that are not formally the stakeholder's). The text does not say.
- **Additional evidence needed:** the unowned-decision limb, asked directly (`S-N06`).
- **Effect on advancement:** preserved as a contradiction; the A6 ambiguity finding stands on the records and is **not** withdrawn because the stakeholder did not name it.

**C-32 · Consultation deferred until the model and infrastructure exist — Missing records**

- **Stakeholder statement (S-18):** the stakeholder plans to "pick[] people's brains once the business model and infrastructure are in place," expecting "only small tweaks to the process."
- **Stakeholder terminology:** "picking people's brains," "infrastructure."
- **Records-derived evidence:** nothing in the corpus records a plan, trigger, or intent to consult anyone outside the organization, at any point.
- **Record source:** absence across the corpus; R-11.
- **Record authority / status:** absence.
- **Reason:** the account supplies a forward-looking organizational intention for which no durable record exists.
- **Remaining uncertainty:** who, when, and on what.
- **Additional evidence needed:** none for the diagnostic. It is listed in the completion report §30 as a candidate for elevation, and is **not** elevated here.
- **Effect on advancement:** recorded as Client-Stated intent; no instrument treats it as a plan of record.

### Q13 — if the accountable person were unavailable

**C-33 · No one else could decide — Corroboration**

- **Stakeholder statement (S-19, S-20):** "No one at the moment. We will figure that out when I'm actually launched."
- **Stakeholder terminology:** "launched."
- **Records-derived evidence:** **no delegation, continuity, or succession record exists.** The dry run recorded role compression (`AS-2`) and, in Instrument 6, "the organization is one person," loss risk **Total**, continuity consequence "[e]verything."
- **Record source:** R-13; dry run §3.3, §3.9.
- **Record authority / status:** current; recorded absence plus an evidenced inference.
- **Reason:** the two halves agree, and the records' half rests on the total absence of any continuity instrument across a corpus with validated exact coverage.
- **Remaining uncertainty:** none for the finding. The deferral to "launched" is the stakeholder's own sequencing and is recorded, not evaluated.
- **Additional evidence needed:** none.
- **Effect on advancement:** the A12 continuity finding is corroborated from both halves and is the strongest single-source-independent result of the session, alongside C-04.

### Q14 — what functions exist, on paper and in practice

**C-34 · The functions originated with the stakeholder — Missing records**

- **Stakeholder statement (S-21):** "All of them came from me."
- **Stakeholder terminology:** —
- **Records-derived evidence:** the corpus records what each function is and what evidences it, never where its name or definition originated. No provenance record for the function taxonomy exists.
- **Record source:** R-14; dry run Instrument 3.
- **Record authority / status:** current; the origin question is simply not a subject the records address.
- **Reason:** the account asserts an organizational fact — the origin of the function set — for which no durable record can be located.
- **Remaining uncertainty:** the assertion is plausible on every surrounding fact and corroborated by none.
- **Additional evidence needed:** none proportionate; origin is not load-bearing for any finding.
- **Effect on advancement:** none.

**C-35 · The inventory itself — Unresolved**

- **Stakeholder statement:** not supplied (`S-N07`). What each function does, which exist on paper only, and which exist in practice without being written down were not addressed.
- **Stakeholder terminology:** —
- **Records-derived evidence:** the dry run classified functions as evidenced **by work** (Founder Office; Institutional Platform Development; Corporate Operations; HGP), **by document only** (Methodology / IP / Education rooms; Design System), **by name only** (Branding; Corporate Headquarters — authority named, no exercise observed), and **not evidenced** (Accounting; Administration & Compliance, evidenced by one represented fact).
- **Record source:** R-14; dry run Instrument 3.
- **Record authority / status:** current; classification marked *Inferred*.
- **Reason:** the account did not reach the limb the classification most needed — which functions exist in practice without being written down. Records cannot supply that.
- **Remaining uncertainty:** the entire practice-not-written-down category.
- **Additional evidence needed:** the unanswered limbs of Q14; observation of work.
- **Effect on advancement:** Instrument 3 is populated **from records only** and labelled as such; the A7 output is incomplete on the stakeholder's side.

**C-36 · The functions are held in ChatGPT projects — Corroboration (of transient, externally-held custody)**

- **Stakeholder statement (S-22):** they "are on here in ChatGPT projects."
- **Stakeholder terminology:** "ChatGPT projects," "on here."
- **Records-derived evidence:** the corpus's institutional-memory record already establishes that significant organizational material has lived in transient environments and been lost or recovered from them; the refined principle names transient working environments as never authoritative by existence. The corpus does not name this particular environment (X-01).
- **Record source:** R-05, R-24; `fd-0019` §2.9; Draft v2 A12 principle.
- **Record authority / status:** current adopted principle; the specific holding is unrecorded.
- **Reason:** the account places a category of institutional content — the organization's functions — in a transient, vendor-held environment. That is the condition the principle addresses, assessed **mechanism-neutrally**: the finding is about control and retrievability, not about the tool.
- **Remaining uncertainty:** what is actually there, and whether it duplicates or exceeds the corpus.
- **Additional evidence needed:** an inventory or access; and the boundary question at C-11.
- **Effect on advancement:** an Instrument 6 row exists with organizational control **unknown**, independent retrievability **unknown**, access **none**. Conflicts directly with C-49 (Q24) and is cross-referenced there.

### Q15 — habit-held and unowned work

**C-37 · "All of it goes through me and comes from me" — Unsupported stakeholder assertion**

- **Stakeholder statement (S-23):** as quoted.
- **Stakeholder terminology:** "one-man show."
- **Records-derived evidence:** the records identify specific work **with no recorded owner and no recorded action by anyone**: brand decisions; reconciliation of the IP and Education taxonomies; inquiry follow-up (no recorded next actor). Preservation of Founder Office instruments was unowned until `fd-0020` §2.4 created the duty — and a responsible function is **still not named**.
- **Record source:** R-15; dry run §3.4, Instrument 3; `fd-0020` §2.4.
- **Record authority / status:** current; observed.
- **Reason:** the totality claim is not corroborated for these matters: nothing shows them going through the stakeholder, and nothing shows them going through anyone. The claim is recorded as unsupported at the level of totality, not contradicted — the stakeholder did not assert that these particular matters are handled.
- **Remaining uncertainty:** whether the stakeholder regards unowned matters as "going through me" by default.
- **Additional evidence needed:** the unowned-work limb (`S-N08`), asked directly.
- **Effect on advancement:** the A7 unowned-work finding stands on records and is not withdrawn.

**C-38 · Habit-held responsibility — Unresolved**

- **Stakeholder statement:** not supplied (`S-N08`). Q15's first limb — work that happens only because the stakeholder personally does it out of habit — was not answered; the response generalized.
- **Stakeholder terminology:** —
- **Records-derived evidence:** records can show that work occurs and that no assignment covers it; they **cannot show habit**. The sealed set says so.
- **Record source:** R-15.
- **Record authority / status:** a stated limit of the records half.
- **Reason:** the one capability `fd-0020` §2.11 required to be tested that could only come from the account did not arrive, because the answer covered the territory at a level that dissolves the distinction: where one actor does everything, habit and role are indistinguishable without observing the work.
- **Remaining uncertainty:** all of it.
- **Additional evidence needed:** direct re-asking; or observation of work as performed (A10), which no internal application has yet exercised.
- **Effect on advancement:** **the habit-held-responsibility finding is empty**, and the completion report §14 says so rather than filling it. Carried to the post-test proposals (PT-07).

### Q16 — recurring decisions, triggers, cadence

**C-39 · What triggers things — Difference in terminology**

- **Stakeholder statement (S-25):** "Conversation with Founder Office and books are what trigger things/ideas."
- **Stakeholder terminology:** "things/ideas," "trigger."
- **Records-derived evidence:** the recurring **decisions** the records evidence are: authorization of each bounded stage; acceptance of returns; adoption of doctrine; preservation; admission; disposition of deficiencies. Their trigger is "a returned report or a discovered gap." Twenty-one determination records in nineteen days.
- **Record source:** R-16; determinations register; dry run §3.5.
- **Record authority / status:** current; observed acts and counts.
- **Reason:** the question asked which **decisions** recur; the answer describes what triggers **ideas**. The two halves are about adjacent but different objects. Recorded as a terminology difference rather than a conflict, because nothing in either half denies the other.
- **Remaining uncertainty:** whether the stakeholder distinguishes deciding from having an idea in this context.
- **Additional evidence needed:** the decision limb of Q16, re-asked.
- **Effect on advancement:** A8's recurring-decision inventory is records-only; the account contributes the idea-origination pattern instead, which is used at C-41.

**C-40 · Books as an input — Missing records**

- **Stakeholder statement (S-25):** books trigger things and ideas.
- **Stakeholder terminology:** "books."
- **Records-derived evidence:** no record anywhere in the corpus names reading, books, or any external intellectual input as a source of organizational ideas.
- **Record source:** absence.
- **Record authority / status:** absence.
- **Reason:** the account names an input the organization has never recorded.
- **Remaining uncertainty:** which books, and what came from them — which matters for the IP Foundation's provenance rules if any method ever derives from them.
- **Additional evidence needed:** none for this stage; flagged for the IP plane rather than resolved here.
- **Effect on advancement:** recorded; no finding rests on it.

**C-41 · Formalization happens inside the conversation — Corroboration**

- **Stakeholder statement (S-26):** "From there, within those conversations, we formalize the idea, etc."
- **Stakeholder terminology:** —
- **Records-derived evidence:** the program's own history evidences the pattern: Founder Office directives cited by records but absent from the repository that cites them; four accepted historical instruments that existed only in session records until recovered; "operation may precede governance… governance can be regularized over it" (Discovery Report L18); HGP's "Founder Office" vocabulary first appearing in its records after most of the product existed.
- **Record source:** R-05; Discovery Report §2 item 9, L18; `historical-instrument-retrieval-record.md`.
- **Record authority / status:** current; recorded events.
- **Reason:** the account describes the mechanism the records evidence the consequences of — ideas taking institutional form inside conversation, with the durable record following later or not at all.
- **Remaining uncertainty:** none material.
- **Additional evidence needed:** none.
- **Effect on advancement:** with C-10, C-36 and C-46, this is the corroborated core of the session's institutional-memory finding.

**C-42 · Cadence — Unresolved**

- **Stakeholder statement:** not supplied (`S-N09`).
- **Stakeholder terminology:** —
- **Records-derived evidence:** **cadence is not recorded** — instrument timestamps are not preserved. The records can count acts (twenty-one in nineteen days) but not intervals.
- **Record source:** R-16; dry run §3.5.
- **Record authority / status:** recorded absence.
- **Reason:** neither half holds it. This is the same gap correction C-6 was accepted to expose, and it is still open after a stakeholder session.
- **Remaining uncertainty:** all of it.
- **Additional evidence needed:** the cadence limb of Q16, or preserved timestamps.
- **Effect on advancement:** A8 latency and cadence are recorded as unavailable; no distribution is estimated.

### Q17 — what is waiting, where the list is, how long things wait

**C-43 · The domain and the paid services — Corroboration**

- **Stakeholder statement (S-27):** what is waiting is the "[d]omain and all the additional things that cost money."
- **Stakeholder terminology:** "the little services I will use."
- **Records-derived evidence:** `official-launch-layer` is "[o]wner-gated official-launch execution: domain acquisition/attachment, DNS, canonical cutover, notification activation, launch verification. Fully planned; technically ready; entirely owner-authorized," with the unresolved decision "[d]omain, registrar, apex/www, DNS, notification activation, analytics, and legal review are owner decisions." The launch checklist's first two items are "Confirm official domain (`huertagroupllc.com`) and acquire it" and "Select registrar," among forty unchecked. `lib/site.ts:14–21` records the domain as "not yet connected or confirmed in Vercel." `fd-0015`: "Production Supabase expenditure: **not authorized**… The organization is on the Free plan and will remain so for now."
- **Record source:** X-06, X-07, X-10; capability registry; `docs/launch/official-launch-checklist.md`; `fd-0015` §2.
- **Record authority / status:** current; a governing determination plus operational artifacts.
- **Reason:** the account names precisely what the records show is owner-gated and unpurchased, item for item.
- **Remaining uncertainty:** none material.
- **Additional evidence needed:** none.
- **Effect on advancement:** corroborated; the A16 reserved-questions inventory is confirmed from the stakeholder's side for this item.

**C-44 · The reason — infrastructure before paid services — Missing records**

- **Stakeholder statement (S-28):** "I want infrastructure done before I start paying for the little services I will use."
- **Stakeholder terminology:** "infrastructure."
- **Records-derived evidence:** `fd-0015` records the **decision** — a capital-allocation deferral, "deferred, not closed," returning to the Founder Office "when authentic use demonstrates that persistent hosted availability would materially improve operations, when local operation becomes materially limiting, or when another significant circumstance justifies reconsideration." It records no sequencing rationale of this kind.
- **Record source:** X-10; `fd-0015` §§2–3.
- **Record authority / status:** current governing determination.
- **Reason:** the account supplies a rule ("infrastructure first, then recurring cost") that no record holds, and whose stated trigger differs from the trigger the determination records.
- **Remaining uncertainty:** whether this restates `fd-0015`'s reasoning informally or states a different rule.
- **Additional evidence needed:** none for the diagnostic. Listed in the completion report §30 as a candidate for elevation; **not elevated**, and `fd-0015` is not rewritten.
- **Effect on advancement:** recorded as Client-Stated.

**C-45 · Where the waiting list is kept, and for how long — Unresolved**

- **Stakeholder statement:** not supplied (`S-N10`); the account names one waiting item and no list.
- **Stakeholder terminology:** —
- **Records-derived evidence:** open owner items are kept in **at least four places**: the launch checklist (forty unchecked), the capability registry (roughly twenty-four open of fifty), the "Reserved to the Founder Office" sections of determination records (twenty-four across five records at the dry run; `fd-0020` §6 adds five; `fd-0021` §6 adds seven), and the operational register's attention layer. **Waiting times are not recorded anywhere.**
- **Record source:** R-17; X-06; dry run §3.5, §3.11, E-07, E-08.
- **Record authority / status:** current; observed counts, recorded absence of durations.
- **Reason:** the one-matter-in-N-places condition that correction C-9 was accepted to expose is evidenced in the records and **not recognized by the account**, which names neither a list nor a multiplicity. Neither corroboration nor contradiction: the account simply does not reach it.
- **Remaining uncertainty:** whether the stakeholder experiences these as one list or four.
- **Additional evidence needed:** the unanswered limbs of Q17.
- **Effect on advancement:** Instrument 7 records the multiplicity from records alone; A14's friction finding is not attributed to the stakeholder.

### Q18 — definitive sources

**C-46 · The definitive source is the Founder Office conversation — Contradiction**

- **Stakeholder statement (S-29):** "Founder Office conversation."
- **Stakeholder terminology:** "Founder Office conversation."
- **Records-derived evidence:** the records name a definitive source **per domain**: the repository for governing records; Founder Office custody for instruments and constitutional text; QuickBooks for finance; the external authority for filings; the operational register for what it owns; the venture's systems for venture detail; Supabase for inquiries; Vercel for deployment state. Against that, the organization's own adopted principle holds that "[i]ndividual memory, conversation, contributor memory, and transient working environments do not become authoritative merely because they exist," and Draft v2's Instrument 4 requires conversation and working notes to be recorded as "never authoritative by existence." `CLAUDE.md` states the rule in its sharpest form: "where memory and repository evidence disagree, the repository is correct."
- **Record source:** R-18; dry run Instrument 4; `fd-0019` §2.9 (refined memory principle); Draft v2 A12, Instrument 4; `CLAUDE.md`; `AGENTS.md`.
- **Record authority / status:** current governing rules and current operational inventory.
- **Reason:** the question asked where the definitive version is kept — "the place you would go if two records disagreed." The accountable authority names the mechanism its own governing rule declares never authoritative by existence. Both halves are about the same thing and they conflict. **Preserved.**
- **Remaining uncertainty:** material. "Founder Office conversation" may name the Founder Office **as an authority** (which is consistent with the records, since the Founder Office is the apex authority) rather than the conversation **as an artifact of record** (which is not). The wording does not settle it, and the single-pass channel offered no clarification-only follow-up. **The diagnostic does not choose.**
- **Additional evidence needed:** a clarification-only follow-up under procedure §4 — the highest-value single follow-up available from this session.
- **Effect on advancement:** A9's source-of-truth boundary is **not** established for the organization's own information. Under A18's minimum-evidence test, "key source-of-truth boundaries are identified" is answered **no**, on this claim alone, and advancement is refused.

**C-47 · Personal retrievability without searching chat or session history — Unresolved**

- **Stakeholder statement:** not supplied (`S-N11`). The question expressly excluded chat and session history; the answer named a conversation and did not address retrievability.
- **Stakeholder terminology:** —
- **Records-derived evidence:** retrievable by the organization from its durable record: governing records **yes**; instruments for `fd-0001`–`fd-0018` **no**; ratified constitutional text **no**; the operational register only on one machine behind one passphrase.
- **Record source:** R-18; dry run Instrument 4, Instrument 6.
- **Record authority / status:** current.
- **Reason:** the limb was not reached. Correction C-7's "retrievable by the organization" field is populated from records alone.
- **Remaining uncertainty:** what the stakeholder can actually retrieve unaided.
- **Additional evidence needed:** the second limb of Q18.
- **Effect on advancement:** contributes to the same refusal as C-46.

### Q19 — authoritative in practice versus officially

**C-48 · "No." — Contradiction**

- **Stakeholder statement (S-30):** nothing is treated as authoritative in practice that is not officially so, and nothing officially authoritative is disregarded.
- **Stakeholder terminology:** —
- **Records-derived evidence:** the records hold several such divergences, most recorded by the organization about itself. Contributor AI memory is non-authoritative by rule and was **found stale twice** while in use. The operational register is, by doctrine, "a representation for all but what it owns," yet is operated as the place state is read. Four capability-registry values are dispositioned "**stale but not false**" — retained, not corrected, with the true position stated elsewhere. At the venture, constitutions read "proposed, awaiting approval" while being **treated as law**. And the account's own Q18 answer names a source of resort that the corpus does not treat as authoritative.
- **Record source:** R-19; `CLAUDE.md`; Corporate Operations Semantics Foundation; capability registry (`operations-systems`, four dispositioned values); Discovery Report L18; dry run E-07, E-11; and S-29 within the account itself.
- **Record authority / status:** current; each divergence is recorded by the organization's own governing or evidentiary records.
- **Reason:** the account denies a class of condition the records evidence repeatedly, and the account contradicts itself between Q18 and Q19. **Both contradictions preserved** — against the records, and inside the account (evidence set §6 pair B).
- **Remaining uncertainty:** whether the stakeholder reads "authoritative" narrowly, as meaning formally designated.
- **Additional evidence needed:** clarification; and, for the venture limb, the venture plane's own authority.
- **Effect on advancement:** A9's three facts — that a source exists, that it is trusted, and that it is treated as authoritative — **diverge for the first time in this program**. In the dry run they collapsed because the team held all three. See §7.

### Q20 — the last piece of work, start to finish

**C-49 · HGP built "as if I was an author" — Corroboration (within the admitted HGP boundary)**

- **Stakeholder statement (S-31):** HGP "went through the whole process as if I was an author."
- **Stakeholder terminology:** "the whole process," "as if I was an author."
- **Records-derived evidence:** the admitted parent record states that in HGP the "author, imprint staff, Founder Office and human sign-off editor 'resolve to one person'," with acceptance criteria "**A real author (you)… A real book (yours)**," and the venture's own evidence scale climbing from "Repeated by Founder" to "Independently Corroborated" — recorded as "an admission that current evidence is single-founder."
- **Record source:** X-11; Discovery Report L19 and §5 item 10 (an admitted Institutional Record); HGP admission record.
- **Record authority / status:** admitted **provisional evidentiary methodology support** through the FD-V1 §14 boundary (`fd-0020` §2.3). Not doctrine; not external validity.
- **Reason:** the account states in the stakeholder's own words the condition the admitted evidence already records, and the records' phrasing ("a real author (you)") is a direct match.
- **Remaining uncertainty:** "the whole process" is not enumerated; the correspondence is at the level of the role, not of the steps.
- **Additional evidence needed:** none within this stage's boundary. **No HGP repository material was read**; nothing was admitted or broadened (`fd-0021` §2.7 validation 9).
- **Effect on advancement:** supports the completion report §18. It is venture-plane evidence used only as admitted, and it establishes nothing about external validity.

**C-50 · "Built it out as I found pain points" — Unsupported stakeholder assertion (and corroboration of admitted Lesson 5)**

- **Stakeholder statement (S-32):** HGP was "built… out as I found pain points or wanted it to be a certain way."
- **Stakeholder terminology:** "pain points."
- **Records-derived evidence:** the venture designed a mechanism for exactly this — the Founder Validation Program, an observation → theme → decision chain. The admitted evidence basis for it: "**one observation (FVO-001-001, engineering-found)**; '**No themes opened yet**'; '**No Validation Decisions recorded yet**'; corrections attributed to 'Founder Validation Cycle 001' reaching the record by **direct authorization**; FVP §8 licensing 'routine refinement' outside the ledger." The Discovery Report classifies the FVP as "evidence of a design, not of a working method."
- **Record source:** X-12; HGP admission record Lesson 5; Discovery Report §5 item 7.
- **Record authority / status:** admitted provisional evidentiary support, *evidence from use*, **no cross-case support — HGP-only**.
- **Reason:** the account asserts a practice — finding pain points and building from them — for which the organization's own capture mechanism holds **one entry, and that one found by engineering rather than by the Founder**. The learning is not corroborated as a recorded practice. It is not contradicted either: the records show the ledger was bypassed, not that the learning did not happen.
- **Remaining uncertainty:** what was actually learned; none of it is retrievable from a durable record.
- **Additional evidence needed:** the pain points themselves — which, on the account's own Q5 and Q14, live in conversation.
- **Effect on advancement:** this is the session's most consequential methodological result. Admitted **Lesson 5** — "*a learning record that is slower than the principal's direct authorization will be bypassed unless the path of least resistance passes through it*" — previously rested on the empty ledger alone. The account now supplies the missing half: the principal states the learning occurred. Corroboration **of the lesson as evidence**, at working-concept status, inside the admitted boundary. It is **not** promoted to doctrine, not broadened, and not attributed beyond `fd-0020` §2.3.

**C-51 · "With the help of Founder Office chat" — Corroboration**

- **Stakeholder statement (S-33):** the build proceeded with that help.
- **Stakeholder terminology:** "Founder Office chat."
- **Records-derived evidence:** HGP's records cite Founder Office directives its own repository does not hold — the FVP authorizing directive, the Phase 2 publication directives, the "Claude Design" directive — and the venture's own rule that "nothing important lives only in conversation" is recorded as violated by its own records.
- **Record source:** Discovery Report §2 item 9; dry run §3.9 (subordinate unit's cited directives: independent retrievability **no**, loss risk **high**).
- **Record authority / status:** current; recorded absence of cited sources.
- **Reason:** the account names the channel; the records evidence its consequence — directives that exist only as citations.
- **Remaining uncertainty:** none material.
- **Additional evidence needed:** none.
- **Effect on advancement:** reinforces the A12 finding with a second, independent case at the venture plane.

**C-52 · The trail of the last piece of work — Unresolved**

- **Stakeholder statement:** not supplied (`S-N12`). What was produced, what touched it, what it waited on, and how completion was known were not addressed.
- **Stakeholder terminology:** —
- **Records-derived evidence:** the records hold a complete trail of the parent's most recent cycle: instrument received → execution in five commits → sixty-five-section report returned → next instrument received → three further commits; waited on: nothing recorded except an execution-session pause; done when: the report was returned and the next instrument accepted it.
- **Record source:** R-20; git log; `fd-0019`; `fd-0020` §1.
- **Record authority / status:** current; observed.
- **Reason:** Draft v2's A10 requires a **trail row before any described row**. The trail exists — from the team's own records, of the team's own work. The stakeholder supplied no trail, and the one the records hold is of a different piece of work than the one the account described.
- **Remaining uncertainty:** the actual flow of HGP's development, which neither half traces here.
- **Additional evidence needed:** the unanswered limbs of Q20.
- **Effect on advancement:** A10 is exercised **on the team's own workflow only** — the same condition Stage 2 recorded as `AS-9`, unchanged by this session. Instrument 5 says so.

### Q21 — where work stalls, gets handed off, or waits

**C-53 · Money as a constraint — Corroboration**

- **Stakeholder statement (S-34):** "Money."
- **Stakeholder terminology:** —
- **Records-derived evidence:** production expenditure not authorized; Free plan; production launch deferred at the owner/cost gate, "deferred, not closed"; the domain unpurchased; forty launch items unchecked.
- **Record source:** X-06, X-07, X-10; `fd-0015`.
- **Record authority / status:** current governing determination.
- **Reason:** the constraint the account names is the constraint a determination records.
- **Remaining uncertainty:** none material.
- **Additional evidence needed:** none.
- **Effect on advancement:** corroborated; a **current operating constraint**, expressly not a methodology principle (`fd-0021` §2.7 validation 10).

**C-54 · Technical implementation dependency — Corroboration**

- **Stakeholder statement (S-34):** "technical work with Claude Code."
- **Stakeholder terminology:** "Claude Code."
- **Records-derived evidence:** the records evidence the dependency without naming the tool: the last complete work cycle records "Founder Office (instrument, acceptance); IPD (everything else); CI (gate)"; a governing standard is written for "a development model" with a bounded execution budget and expressly "binds no permanent model; each task instrument states the current" one. "Claude Code" itself appears once in the corpus, inside a preserved Founder Office instrument (X-02).
- **Record source:** R-20; bounded-autonomous-completion standard §§22, 41–43, 50, 251; X-02.
- **Record authority / status:** current Development Standard; current observed practice.
- **Reason:** account and records agree that essentially all implementation passes through an AI development capability, and that this is a constraint on throughput. The records deliberately name the *role* rather than the *vendor*; the account names the vendor.
- **Remaining uncertainty:** none material for the constraint. See C-56 on the tool's absence from the systems record.
- **Additional evidence needed:** none.
- **Effect on advancement:** corroborated as a current operating constraint, not as a methodology principle.

**C-55 · Stalls and handoffs — Unresolved**

- **Stakeholder statement:** the account names resource classes (money, technical work, time); the question asked where work stalls, is handed off, and how the next actor is known (`S-N13`).
- **Stakeholder terminology:** "time."
- **Records-derived evidence:** the records hold specific stalls: **missing sources stopped execution five times in six days** during the operations track (`fd-0010`–`fd-0016`); inquiry follow-up has **no recorded next actor**; venture supply has no cadence (five of twelve fields not supplied). Handoffs are recorded in the operational register for Headquarters matters; elsewhere the owner of the next expected action is unrecorded. **The cause of the source-transmission failures is unrecorded.**
- **Record source:** R-21; dry run Instrument 5, §3.7.
- **Record authority / status:** current; observed stops.
- **Reason:** the two halves address different objects — resource constraints versus workflow stops — and neither corroborates nor contradicts the other. The most-evidenced stall in the organization's history is not mentioned by the account; the account's constraints are not visible as stalls in the records.
- **Remaining uncertainty:** why sources failed to arrive, which the sealed set expressly listed as something only the stakeholder could say — and which the account did not say.
- **Additional evidence needed:** the unanswered limbs of Q21, and a direct question about the five recorded stops.
- **Effect on advancement:** Instrument 5's failure points are records-only. **Classification note:** none of the seven classifications names "a condition evidenced in one half that the other half never addresses." *Unresolved* is carrying it here, and the misfit is carried to post-test proposal PT-01.

### Q22 — formality: where there is too much, and too little

**C-56 · "Everything is pretty governed" — Unsupported stakeholder assertion**

- **Stakeholder statement (S-35, S-36, S-37):** "I feel like everything is pretty governed. The process building and governance go hand in hand. The projects and Founder Office are aware of that…"
- **Stakeholder terminology:** "pretty governed," "those methodologies."
- **Records-derived evidence:** the organization's own records name specific, currently open governance gaps: **decision-rights architecture "pending"**; **no retention, deletion, archival or disclosure doctrine** (`fd-0014` §6); **Branding — a future authority with no governing document** (`fd-0001` det. 6); **permanent methodology approvers unresolved** (MF v1 §10.6); **the constitutional amendment process named but not defined**; **the ratified constitutional text not held** in the durable record; **nine OSPA sections permanently lost**; **Deliverables A and A.1 unavailable**; **seven approval-provenance deficiencies open** (`fd-0004`); **Draft v2 itself not adopted**. Governance **excess** is recorded too: the Education and IP foundations run to roughly fourteen thousand words with zero programs and no admitted asset.
- **Record source:** R-22, R-12, R-04, R-23; `fd-0001` det. 6; `fd-0004`; `fd-0014` §6; MF v1 §10.6; OSPA admission record; dry run Instrument 8.
- **Record authority / status:** current; each gap recorded by the organization about itself.
- **Reason:** Q22 elicited a **perception**, and it is recorded as one. It is not converted into an institutional finding (`fd-0021` §2.7 validation 11). Independent evidence does not corroborate completeness: ten named governance gaps stand open, several recorded by the same authority that holds the perception.
- **Remaining uncertainty:** what standard of "pretty governed" is meant, and whether the stakeholder is speaking of coverage or of quality.
- **Additional evidence needed:** the unanswered limbs of Q22 (which matters need durable decisions; where formality exceeds or falls short) — the limbs that would have made this comparable.
- **Effect on advancement:** A11's gap-and-excess assessment stands on records; the perception is preserved beside it, unresolved and unconverted.

**C-57 · Breadth of governance — Corroboration**

- **Stakeholder statement (S-36):** process building and governance "go hand in hand."
- **Stakeholder terminology:** —
- **Records-derived evidence:** 177 governed documents under an exact-coverage manifest; six registries with schemas; nine deterministic validators plus lint, type-check and build in one gate; a CI gate on `main`; a determinations register; an evolution log; a canonical-source preservation standard. Every institutional act in this program passed through them.
- **Record source:** manifest; `institution/validation/`; `npm run verify`; determinations register.
- **Record authority / status:** current; observed mechanism.
- **Reason:** as a statement about how the organization builds — governance and construction proceeding together — the records corroborate it plainly.
- **Remaining uncertainty:** none for breadth. Breadth is not completeness; C-56 holds the other half.
- **Additional evidence needed:** none.
- **Effect on advancement:** recorded.

### Q23 — what would be lost

**C-58 · A lot would be lost — Corroboration**

- **Stakeholder statement (S-38, S-39):** "There would be a lot lost. I have the model and idea in my head, but all the technicalities and actual structure are built within those things."
- **Stakeholder terminology:** "those things."
- **Records-derived evidence:** Instrument 6 (dry run §3.9) records, per domain: ratified constitutional text — independently retrievable **no**; Founder Office instruments — retrievable **no**, loss risk **high (two lost, four recovered)**; OSPA S05–S08 and S11–S15 — loss **realized, permanent**; Headquarters operational history — dependent on **one person's passphrase**; the governance corpus — loss risk **low**; and "[k]nowledge held only by the one individual… loss risk **Total**: the organization is one person… continuity consequence: **Everything**."
- **Record source:** R-23; dry run §3.9; OSPA admission record; `historical-instrument-retrieval-record.md`.
- **Record authority / status:** current; realized losses are recorded events.
- **Reason:** both halves agree on the exposure, and they agree on its shape: the account says the model is in the person and the structure is in the systems; the records show durable memory strong for the governed corpus and weak at both ends of the chain — the apex and the implementer.
- **Remaining uncertainty:** "those things" is not named. The referent is presumably the repositories and tools, but the diagnostic does not fill it.
- **Additional evidence needed:** clarification of the referent.
- **Effect on advancement:** the A12 loss finding is corroborated from both halves.

**C-59 · What has already been lost — Unresolved**

- **Stakeholder statement:** not supplied (`S-N15`). The limb "[w]hat has already been lost, and how did you find out?" was not answered.
- **Stakeholder terminology:** —
- **Records-derived evidence:** realized losses are recorded: nine OSPA sections, permanent; Repository Audit Deliverables A and A.1; the instruments behind `fd-0001`–`fd-0018` (two lost, four recovered from the implementer's session records). Discovery occurred through bounded retrieval (`fd-0019`) and the OSPA admission.
- **Record source:** R-23; `historical-instrument-retrieval-record.md`; OSPA admission record.
- **Record authority / status:** current; recorded events.
- **Reason:** the records hold the answer; the account did not reach it. Whether the stakeholder holds the same picture of what has been lost is unknown — and that is a materially different question from whether the loss occurred.
- **Remaining uncertainty:** whether the accountable authority knows the extent of realized loss.
- **Additional evidence needed:** the second limb of Q23, asked directly.
- **Effect on advancement:** recorded as a gap. Note the account **does** acknowledge loss elsewhere, at Q27, in the past tense — cross-referenced at C-63.

### Q24 — knowledge held only outside the organization

**C-60 · "None." — Contradiction**

- **Stakeholder statement (S-40):** no knowledge about the organization exists only with people or services outside it.
- **Stakeholder terminology:** —
- **Records-derived evidence:** the implementer's session records held the **only copies** of four accepted instruments until they were recovered, and of the program instruments until they were preserved; hosting, inquiry and notification configuration lives with **Vercel, Supabase and Resend**; contributor AI memory lives in session files; the venture's records live in its own repository; nine OSPA sections were lost precisely because they were held outside the durable record. And within the account itself, Q5 and Q14 place unwritten knowledge and the organization's functions in ChatGPT rooms and projects.
- **Record source:** R-24; `historical-instrument-retrieval-record.md`; `fd-0020` §3; repository operations record; dry run E-09, E-16, §3.9; and S-06, S-22 within the account.
- **Record authority / status:** current; recovery and loss are recorded events.
- **Reason:** the account denies a condition the records evidence in five distinct forms, and the account's own other answers assert it. **Both contradictions preserved** — against the records, and inside the account (evidence set §6 pair A).
- **Remaining uncertainty:** material, and it is a **boundary** question rather than a factual one: whether the stakeholder regards ChatGPT, Vercel, Supabase and the AI development office as *outside the organization* at all. Nothing in the method establishes the organization's boundary before asking what lies beyond it. The diagnostic does not decide it.
- **Additional evidence needed:** the stakeholder's own statement of where the organization ends.
- **Effect on advancement:** A12's implementer- and vendor-side custody inventory (correction C-10) is populated from records and marked contradicted by the account. The boundary gap is carried to post-test proposal PT-06.

### Q25 — systems and tools

**C-61 · Four of the seven tools are evidenced — Corroboration**

- **Stakeholder statement (S-41):** "Claude Code, VS Code, Supabase, GitHub, Vercel, ChatGPT, Claude Design."
- **Stakeholder terminology:** as listed.
- **Records-derived evidence:** **Supabase** — ADR-0004 and ADR-0009, the migration set, the inquiry store; **GitHub** — the origin remote, the private runtime repository, the CI gate; **Vercel** — the production origin, deployment state as a source of truth, the domain-attachment step; **Claude Design** — adopted at `ddr-0011`, with a passover evaluation and an implementation completion report.
- **Record source:** X-03; R-25; capability registry; `lib/site.ts`; `institution/design/`.
- **Record authority / status:** current.
- **Reason:** four of the seven named tools are independently evidenced in the roles the account implies.
- **Remaining uncertainty:** none material.
- **Additional evidence needed:** none.
- **Effect on advancement:** A13's system inventory is corroborated in part. **Treated as current tooling evidence, not as organizational methodology** (`fd-0021` §2.7 validation 13).

**C-62 · Three of the seven appear nowhere in the systems record — Missing records**

- **Stakeholder statement (S-41):** ChatGPT, VS Code and Claude Code are among the systems the organization runs on.
- **Stakeholder terminology:** as listed.
- **Records-derived evidence:** "ChatGPT" — **zero** occurrences in `institution/**` and `docs/**`; "VS Code" — **zero**; "Claude Code" — **one**, and only inside the preserved text of a Founder Office instrument, not as a recorded institutional tool.
- **Record source:** X-01, X-02.
- **Record authority / status:** absence at HEAD `21cbb78`.
- **Reason:** three of the seven tools the accountable authority names as running the organization — including the one the account elsewhere identifies as holding the organization's functions and unwritten knowledge — are absent from the organization's own systems record.
- **Remaining uncertainty:** whether the omission is oversight or a deliberate personal/institutional boundary (the same boundary question as C-60).
- **Additional evidence needed:** a Founder Office statement on the boundary; then Instrument 4 and Instrument 6 rows.
- **Effect on advancement:** A13's inventory is **incomplete on the records side, and the account is what shows it**. This is the clearest case in the session of the stakeholder session producing evidence the records could not.

**C-63 · Systems in the records the account does not name — Unresolved**

- **Stakeholder statement:** the list does not include them.
- **Stakeholder terminology:** —
- **Records-derived evidence:** **Resend** (notification service, standby); **QuickBooks** (named as the financial source of truth, never observed); the **local Docker runtime** holding the operational register on one machine; **GitHub Actions CI**; the venture's own platform.
- **Record source:** R-25; capability registry; dry run §3.10.
- **Record authority / status:** current.
- **Reason:** non-mention is not denial. The question also asked which systems hold the definitive version, which impose unwanted ways of working, and what is deliberately manual — none of which was reached (`S-N16`).
- **Remaining uncertainty:** whether the stakeholder regards these as systems the organization runs on.
- **Additional evidence needed:** the unanswered limbs of Q25.
- **Effect on advancement:** Instrument 4's definitive-holder column is records-only; the operating procedure's fifteen deliberately-manual workflows are recorded as the organization's own written statement, not as the stakeholder's account.

### Q26 — routine acts with irreversible or visible consequences

**C-64 · "I don't know" — Unresolved**

- **Stakeholder statement (S-42):** the stakeholder does not know whether such acts exist.
- **Stakeholder terminology:** —
- **Records-derived evidence:** they exist and have already had consequences. A push to `main` **deploys to production** — recorded as having caused one unintended deployment. A reset script **destroyed the operating database** until environment separation was introduced. A **seed credential was published** and later retired. The backup passphrase is held by one person, and losing it makes the register unrecoverable. On authorization practice: **the instrument authorizing the push did not carry the deployment consequence.**
- **Record source:** R-26; dry run §3.10, §3.11; design completion report §60; activation report.
- **Record authority / status:** current; recorded events.
- **Reason:** "I don't know" asserts nothing and therefore contradicts nothing. It is evidence about the stakeholder's knowledge, and the records supply the condition the account cannot. The gap between them is an **awareness gap**, recorded as such and not dressed as a conflict.
- **Remaining uncertainty:** whether the authorization practice carries the consequence — the limb the account could not reach (`S-N17`).
- **Additional evidence needed:** the stakeholder's account of how such acts are authorized.
- **Effect on advancement:** A13's consequence question is answered from records; the authorization limb is open. Correction C-11 (widening the consequence question, conditioned on evidence) worked: the evidence warranted the question, and it produced a finding the account alone would not have.

**C-65 · "Haven't tested anything yet to see these things in action" — Contradiction**

- **Stakeholder statement (S-43):** as quoted.
- **Stakeholder terminology:** "these things."
- **Records-derived evidence:** systems are already in authentic operation. The public website is deployed and serving (`operational`); inquiry intake is `operational` and is "the only substantive runtime institutional capability today"; the operational register is in **LOCAL / PRE-PRODUCTION authentic Founder use** by determination (`fd-0015` §2.5) — expressly "authentic operational use by the Founder," distinguished from deployment; and the consequential events at C-64 all occurred in real operation.
- **Record source:** capability registry; `fd-0015` §2.5; R-26; dry run §3.10.
- **Record authority / status:** current; a governing determination plus observed events.
- **Reason:** the premise that nothing has been seen in action conflicts with a determination authorizing authentic use and with four recorded operational consequences.
- **Remaining uncertainty:** "these things" is deictic and may refer only to client-facing operation, which genuinely has not occurred. The contradiction is recorded at the level of the sentence as given, with this uncertainty attached.
- **Additional evidence needed:** clarification of the referent.
- **Effect on advancement:** preserved. It bears on how much weight the account can carry about operational conditions the stakeholder has not observed.

### Q27 — reconstruction, lost context, one item in many places

**C-66 · Things were getting lost in conversation history — Corroboration, and a cause supplied**

- **Stakeholder statement (S-44):** "ChatGPT before we structured things, because they were getting lost in conversation history."
- **Stakeholder terminology:** "before we structured things."
- **Records-derived evidence:** the founding friction of the operational register is recorded as the accountable authority **reconstructing state, attention, dependencies and change by hand**; stale obligations were rediscovered and corrected; the same open matter is kept in at least four places; four accepted instruments survived only in session records; nine OSPA sections did not survive at all.
- **Record source:** R-27, R-05, R-23; dry run Instrument 7; GEN1 requirements; condition reconciliation report.
- **Record authority / status:** current; recorded events and an accepted requirements record.
- **Reason:** the account corroborates the condition, and supplies something the records lacked: R-21 recorded that the **cause** of source-transmission failures was unrecorded. The account now supplies a cause for a closely related class — material lost inside conversation history. An Instrument 1 row moves from "not supplied" to Client-Stated.
- **Remaining uncertainty:** whether the same cause explains the five recorded execution stops, which the account did not address (C-55).
- **Additional evidence needed:** none for this claim.
- **Effect on advancement:** corroborated; a principal A14 finding.

**C-67 · The remedy in the past tense, against present conversation-dependence — Contradiction (within the account)**

- **Stakeholder statement (S-44 against S-06, S-22, S-29):** loss in conversation history is described as a problem from "before we structured things," while Q5 places unwritten knowledge in ChatGPT rooms **now**, Q14 places the organization's functions in ChatGPT projects **now**, and Q18 names the Founder Office conversation as the definitive source **now**.
- **Stakeholder terminology:** as recorded.
- **Records-derived evidence:** the structuring did occur and is real — a governed corpus with exact coverage, validators, a CI gate, canonical-source preservation, and the recovery of four instruments. It is equally recorded that the two ends of the chain remain outside it: constitutional text, Founder Office instruments before `fd-0019`, and the implementer's session records.
- **Record source:** R-05, R-18, R-24; dry run §3.9 finding; `historical-instrument-retrieval-record.md`.
- **Record authority / status:** current.
- **Reason:** the account treats the conversation-loss problem as solved while locating current organizational knowledge in the same mechanism. The records show the remedy is real **and** partial, which is consistent with both halves of the account being true of different material — but that reconciliation is the team's inference and is not substituted for the evidence. **Preserved** (evidence set §6 pair D).
- **Remaining uncertainty:** which material the stakeholder considers structured and which still conversational.
- **Additional evidence needed:** clarification.
- **Effect on advancement:** the A12 finding is stated with the contradiction visible, not resolved.

### Q28 — software wanted, not ready, or built and waiting

**C-68 · "Nothing yet" against capabilities built and waiting — Contradiction**

- **Stakeholder statement (S-45):** "Nothing yet."
- **Stakeholder terminology:** —
- **Records-derived evidence:** three capabilities are built and waiting on the stakeholder's decision. **`notification-service`: standby** — "implemented and hardened but deliberately `not_configured` in production," with "[a]ctivation timing and recipient confirmation are owner decisions." **`operations-systems`: standby** — Generation One and Two built and validated, production hosting withheld, "the production-cost question is **deferred, not closed**." **`official-launch-layer`: launch_phase** — "[f]ully planned; technically ready; **entirely owner-authorized**."
- **Record source:** X-06, X-09; capability registry; `fd-0015` §3.
- **Record authority / status:** current registry entries and a current determination.
- **Reason:** Q28's third limb asks whether anything already built is waiting on a decision of the stakeholder's rather than on a build. Three things are, by the organization's own registry. The account says nothing is. **Preserved.** The account also conflicts with itself: Q17 names the domain and the paid services as exactly what is waiting on the stakeholder (evidence set §6 pair C).
- **Remaining uncertainty:** whether "Nothing yet" was directed only at the first limb (a recurring problem software should solve), leaving the third limb simply unanswered. The text does not distinguish, and `S-N19` records the limb as unreached.
- **Additional evidence needed:** the third limb, asked separately.
- **Effect on advancement:** Instrument 9's preceding question on existing or standby capability (correction C-12) fired and produced the finding; the account did not.

**C-69 · Expected future problems — Unresolved**

- **Stakeholder statement (S-46):** "I'm sure I will find one of these problems at some point and will need to address it."
- **Stakeholder terminology:** —
- **Records-derived evidence:** none. No record predicts future friction, and none is manufactured here.
- **Record source:** —
- **Record authority / status:** —
- **Reason:** an expectation about the future is not a present organizational condition and is not evidence of one. **No predicted problems are constructed from it** (`fd-0021` §2.7 validation 14).
- **Remaining uncertainty:** inherent.
- **Additional evidence needed:** none. This is a question that time answers.
- **Effect on advancement:** none. Instrument 9 records no candidate problem on this basis.

### Q29 — questions reserved to the accountable authority

**C-70 · "All of them" — Corroboration as to authority; Unresolved as to the list**

- **Stakeholder statement (S-47):** "All of them."
- **Stakeholder terminology:** —
- **Records-derived evidence:** the records hold a specific set of reserved-and-open questions: eight recorded by the dry run (decision-rights architecture; instrument preservation — since determined; hosting cost; retention doctrine; financial and administrative visibility; Branding; venture launch; whether present purpose is service or institution-building), plus five added by `fd-0020` §6 and seven by `fd-0021` §6. Every one resolves to the Founder Office, and no other authority is evidenced anywhere.
- **Record source:** R-29; dry run Instrument 10; `fd-0020` §6; `fd-0021` §6.
- **Record authority / status:** current; recorded as open.
- **Reason:** read within the scope of the question actually asked — *which questions about the organization's direction are yours alone to decide and are currently undecided* — the account corroborates that they are the stakeholder's alone, which the records independently show. It does **not** enumerate, so totality cannot be verified or falsified. The phrase is not read outside its question (`fd-0021` §2.7 validation 15).
- **Remaining uncertainty:** what "all of them" ranges over — the recorded set, a larger set the stakeholder holds, or the class in general.
- **Additional evidence needed:** enumeration, or confirmation against the recorded list.
- **Effect on advancement:** Instrument 10 is populated **from records**, with the account confirming the authority and not the contents.

### Q30 — expectations and corrections

**C-71 · "None and nope." — Corroboration (trivially)**

- **Stakeholder statement (S-48):** nothing expected and unasked; nothing corrected or withdrawn.
- **Stakeholder terminology:** —
- **Records-derived evidence:** the sealed set holds nothing on this subject (R-30, "not supplied").
- **Record source:** R-30.
- **Record authority / status:** —
- **Reason:** the closing question's value is procedural: no answer was withdrawn, so the capture stands as recorded.
- **Remaining uncertainty:** none.
- **Additional evidence needed:** none.
- **Effect on advancement:** the Client-Stated set is closed and sealed as captured.

### Records that no longer describe actual operation, arising from this comparison

**C-72 · The Stage 3 pre-response report's status — Record no longer describes actual operation**

- **Stakeholder statement:** n/a — this is a records-side condition created by the session itself.
- **Stakeholder terminology:** —
- **Records-derived evidence:** `generation-one-stage-3-draft-v2-and-stakeholder-evidence-validation-report.md` states in its header "**Stage 3 is not complete**," and §§17–34 record the dependency rather than results. That was true when returned and is no longer true.
- **Record source:** the pre-response report, commit `21cbb78`.
- **Record authority / status:** current Institutional Record, preserved **as returned**.
- **Reason:** the record accurately describes the state at its own date and no longer describes the present one. The repository convention for this is disposition, not rewriting (as with the four capability-registry values "stale but not false").
- **Remaining uncertainty:** none.
- **Additional evidence needed:** none.
- **Effect on advancement:** the report's **text is not altered**. Its manifest `statusNote` and index row are updated to point at the completion record, which is a metadata act, disclosed in the completion report §29.

## 4. Classification summary

Seventy-two comparisons. Where a block carries a qualified classification, it
is counted under its primary class; the qualification stays in the block.

| Classification | Count | Comparisons |
| --- | --- | --- |
| **Corroboration** | 23 | C-03, C-04, C-10, C-13, C-15, C-17, C-22, C-26, C-28, C-33, C-36, C-41, C-43, C-49, C-51, C-53, C-54, C-57, C-58, C-61, C-66, C-70, C-71 |
| **Unresolved — further evidence required** | 16 | C-02, C-06, C-09, C-16, C-24, C-35, C-38, C-42, C-45, C-47, C-52, C-55, C-59, C-63, C-64, C-69 |
| **Missing records** | 10 | C-05, C-08, C-11, C-29, C-30, C-32, C-34, C-40, C-44, C-62 |
| **Contradiction** | 9 | C-18, C-20, C-31, C-46, C-48, C-60, C-65, C-67, C-68 |
| **Difference in terminology** | 8 | C-01, C-07, C-12, C-14, C-19, C-23, C-27, C-39 |
| **Unsupported stakeholder assertion** | 4 | C-25, C-37, C-50, C-56 |
| **Records that no longer describe actual operation** | 2 | C-21, C-72 |

**Distribution of the corroborations.** Of the twenty-three, six are marked
**[same-source]** or rest on a record the stakeholder authored or approved
(C-03, C-13, C-49, C-51, C-57, and in part C-17). Six rest on evidence that is
independent of any assertion — recorded acts, recorded absences across a corpus
with validated exact coverage, or recorded events: C-04, C-22, C-26, C-28,
C-33, C-43. The remainder rest on records the team wrote but that record
events rather than assertions.

**The nineteen unanswered limbs** (`S-N01`…`S-N19`) are not counted above.
Their significance is that the implementing office held an answer for most of
them from its own records and wrote none of them into the account.

## 5. Informal authority findings (procedure §7.6)

Recorded as findings with their evidence class; none is resolved.

1. **A transient mechanism is named as the place of resort** (*Client-Stated*,
   C-46). The accountable authority identifies the "Founder Office
   conversation" as the definitive source, while the organization's own
   adopted principle holds conversation never authoritative by existence and
   its governing instruction files state that where memory and repository
   disagree, the repository is correct. Whether this names an authority or an
   artifact is unresolved and material.
2. **Custody without a record** (*Client-Stated*, C-36, C-62). ChatGPT rooms
   and projects are stated to hold the organization's functions and its
   unwritten knowledge. No governing record names them, assigns them, or
   grants them any standing. Authority by custody, with no instrument behind
   it.
3. **Authority by convenience is recorded by the organization and denied by
   the account** (*Observed* / *Client-Stated*, C-48). Contributor AI memory
   found stale twice while in use; a representation operated as the place
   state is read; four registry values retained as "stale but not false"; a
   venture's constitutions treated as law while reading "proposed, awaiting
   approval." The account says there is no such divergence. Both stand.
4. **Formal and informal authority cannot be told apart by actor here**
   (*Inferred*, from C-28). Every formal authority the records name resolves
   to the same person. Draft v2's Instrument 2 exposes divergence between
   formal and observed authority by comparing actors; with one actor the
   comparison has nothing to bite on. The finding is about the instrument's
   reach in single-actor organizations, and is carried to PT-08.

## 6. Habit-held responsibility findings (procedure §7.6)

**None could be established.** This is a result, not an omission.

- The question was asked (Q15, first limb) and the answer generalized: "all of
  it goes through me and comes from me." The limb is recorded as not supplied
  (`S-N08`).
- The records cannot supply it: they show that work occurs and that no
  assignment covers it; they cannot show habit (R-15).
- Three matters are recorded as having **no owner and no recorded action by
  anyone** — brand decisions, IP/Education taxonomy reconciliation, inquiry
  follow-up — which is unowned work, not habit-held work.
- **Why it failed:** where one actor performs everything, habit and role are
  indistinguishable without observing work as performed. Draft v2's A7 and
  Instrument 3 obtain habit only by asking. Carried to PT-07.

Of the nine capabilities `fd-0020` §2.11 required this application to test,
this is the one that did not produce a finding. The completion report §14 says
so rather than filling it.

## 7. Source-authority findings (A9's three facts)

Draft v2 separated three facts that Draft v1 collapsed: **that a source
exists**, **how much confidence is placed in it**, and **whether it is treated
as authoritative**. In the Stage 2 dry run they never diverged, because the
team held all three. In this session they diverged for the first time.

| Information domain | Exists (Observed) | Treated as authoritative — records | Treated as authoritative — account | Divergence |
| --- | --- | --- | --- | --- |
| Governing records | repository, remote, CI | the repository | "Founder Office conversation" (C-46) | **Yes — the central one** |
| Instruments `fd-0001`–`fd-0018` | not held | Founder Office custody | not addressed | Retrievability unresolved (C-47) |
| Ratified constitutional text | not held | Founder Office custody | not addressed | Same |
| The organization's functions | not recorded as a set | Instrument 3, from evidence of work | "ChatGPT projects" (C-36) | **Yes** |
| Unwritten operating knowledge | not recorded | — | "ChatGPT rooms" (C-10) | Account-only holding |
| Finance | QuickBooks (named, never observed) | QuickBooks | not named (C-63) | Unresolved |
| Operational state | the register, one machine, one passphrase | the register for what it owns | not named | Unresolved |
| Deployment state | Vercel | Vercel | Vercel named as a tool (C-61) | No |

**Finding.** For the organization's own governing information, existence and
treated-as-authoritative point at different places, and the divergence is
stated by the accountable authority. Under A18 this is sufficient on its own
to answer "key source-of-truth boundaries are identified" with **no**.

## 8. Advancement logic applied (A18)

**Labels carried.** Author-of-records (team): yes, and on most records cited.
**Records-only:** **no longer applicable** — one account now exists; this is
the first application in the program to which that label does not attach.
**Stakeholder-author-of-records:** applicable and unlabelled by the method
(see the header disclosure and PT-03).

**Access statement at this application** (A3 step 10, revised by the account):

| Corpus / system / person | Access | What "partial" or "none" excludes |
| --- | --- | --- |
| Governed repository `huerta-group-llc` | **full** | — |
| Public application and its deployment | **full** (code), **partial** (deployed configuration) | Vercel/Supabase settings as deployed |
| Founder Office, as stakeholder | **partial** | One written pass; no follow-ups; nineteen question limbs unanswered |
| Founder Office instruments `fd-0001`–`fd-0018` | **none** | The reasoning behind eighteen determinations |
| Ratified constitutional text | **none** | The highest internal authority's text |
| **ChatGPT rooms / projects** *(named by the account)* | **none** | Unwritten operating knowledge; the organization's functions |
| **The "Founder Office conversation"** *(named by the account)* | **none** | The source the account calls definitive |
| **Curbside Spa holdings** *(named by the account)* | **none** | Unknown; expressly not sought |
| QuickBooks; Administration & Compliance filings | **none** | Financial and compliance state |
| Operational register (local runtime) | **partial** | As read by the dry run only |
| Venture repository | **partial** | As already read and admitted |

Three of these "none" rows exist **because the stakeholder named them**. The
access statement is materially worse after the stakeholder session than
before — which is the session working correctly.

**Minimum-evidence test, each element evidence-classed:**

| Element | Answer | Basis |
| --- | --- | --- |
| Material evidence limitations explicit | **yes** (*Observed*) | This document; the access statement; nineteen not-supplied rows |
| Purpose and outputs sufficiently understood | **yes as stated** (*Client-Stated*) | C-13, C-14, C-22 — corroboration is [same-source] on purpose |
| Authority / decision-rights ambiguity visible | **yes** (*Observed + Client-Stated*) | C-28, C-29, C-31 — including a preserved contradiction |
| Key source-of-truth boundaries identified | **no** (*Client-Stated, contradicted*) | C-46, C-47, §7 |
| Critical workflows and dependencies sufficiently understood | **no** (*Inferred*) | C-52, C-55 — trail from the team's own records only |
| Major contradictions preserved rather than hidden | **yes** (*Observed*) | Nine contradictions, five of them inside the account |
| Client-authority questions separated from findings | **yes** (*Observed*) | Completion report §30; nothing elevated |
| Prescription would not depend primarily on unverified inference | **no** (*Inferred*) | Memory, functions and systems findings depend on holdings at access = none |

**Outcome.** **Advancement to design is refused.** The permitted outcomes
exercised are **request additional evidence** and **return unresolved
questions to client authority**. The engagement problem is not narrowed, and
no conclusion is drawn that intervention is or is not warranted.

**Grounds, precisely.** Three of eight minimum-evidence elements are answered
no; A18's access constraint independently bars proceeding on any finding that
depends on a corpus, system or person recorded at access = **none**, and the
institutional-memory, function-map and systems findings all do.

## 9. Seal

Performed 2026-08-25 at HEAD `21cbb78`, against the Client-Stated set captured
at commit `f0b1964` and the records-derived set sealed at `86b2b63`
(digest `2dfd3345…`), which was **not adjusted after the account arrived**.
Supplementary retrieval (§2) is declared as post-response and outside the
seal. Frozen Draft v1 (`6fb2fb84…`) and frozen Draft v2 (`9e2976e1…`) were
verified unchanged before and after this comparison and were not modified.
No institutional record was rewritten to resolve any contradiction recorded
here.
