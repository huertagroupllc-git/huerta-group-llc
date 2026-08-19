# OSPA Custody Record — Post-Admission Residue

**Classification: custody metadata — not OSPA source, not canonical
corpus, not institutional authority.** This file and `SHA256SUMS` are
repository custody records. They describe preserved material; they never
speak for it.

## 1. Current state — six sections have left this directory

**FD-V7 (recorded at `fd-0011`) admitted the six surviving recovered
sections to the canonical corpus.** They are no longer here. They now
live at `institution/foundations/operations/`, byte-identical, with
`institution/foundations/operations/ospa-foundation-v1-admission-and-provenance.md`
recording their admission, scope limits, integrity, and provenance.

What remains in this directory:

| Artifact | Kind | Status |
| --- | --- | --- |
| `OSPA-FND-V1-RS05-EV01-verified-canonical-evidence-packet.md` | **Derived** verified evidence packet | **Not admitted, and never admissible as canonical source.** Derived evidence only (`fd-0003`), corrected by its sources wherever they disagree. Must not be used to supply Section 5 wording. |
| `CUSTODY.md` | Custody metadata | This file |
| `SHA256SUMS` | Integrity manifest | Covers the derived packet |

Integrity of the derived packet, unchanged since Phase 1 custody
preservation:

```
eeba13d0fc736b73406e3f2f8960dd3cbc16e5a6c2d92f712aa7be7db391dd0a  OSPA-FND-V1-RS05-EV01-verified-canonical-evidence-packet.md
```

Verify with `shasum -a 256 -c SHA256SUMS`.

## 2. Custody history — retained deliberately

Admission does not erase the fact that custody preservation happened
first, and the sequence matters to anyone auditing how this material
survived.

1. **Recognized** as recovered canonical sources (`fd-0003`), staged
   outside the governed canonical corpus (`fd-0002` D-3), and held
   **uncommitted** — existing on one working machine and in the
   sponsoring authority's custody, and nowhere in version control.
2. **Custody-preserved** under `fd-0010` (Phase 1): the seven artifacts
   were placed under version control byte-identically, with SHA-256
   digests recorded, removing a compounding permanent-loss risk. Custody
   was explicitly **not** admission, and FD-V7 remained unmade.
3. **Admitted** under `fd-0011` / FD-V7 (Phase 2): the six surviving
   sections became recovered canonical authority, limited strictly to
   their surviving text, and moved to the canonical corpus. The derived
   packet was **not** admitted and remains here.

Digests recorded at step 2 remain valid at the canonical paths — no
header was prepended and no normalization occurred — so integrity is
continuously verifiable from recovery through admission.

## 3. Permanently unavailable sections

**S05–S08 and S11–S15 are permanently unavailable** and must never be
reconstructed, inferred, paraphrased, or substituted by professional
convention. This includes reconstructing Section 5 from the derived
packet in this directory, which is the specific temptation this
directory's contents create.

## 4. Scope of the custody exception — read before adding anything here

The `.gitignore` exception that makes anything in this directory tracked
is **narrow and closed**. It enumerates three paths. It exists under
`fd-0010` as scoped by `fd-0011`, which confirms that the exception to
`fd-0001` determination 1 covers **only the exact seven Phase 1 preserved
artifacts**.

**`fd-0001` determination 1 remains governing for every other workbench or
reconstruction artifact: "OSPA reconstruction working documents remain
untracked working material and shall not be committed."** There is no
blanket supersession, no general workbench admission, and no general
OSPA-working-material exception. New material placed in this directory is
ignored by default and must stay that way absent its own Founder Office
determination.
