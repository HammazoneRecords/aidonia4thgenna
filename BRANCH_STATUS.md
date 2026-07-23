# BRANCH_STATUS — Aidonia Eye-Donia

**App path:** `active_apps/artise_sites/aidonia-_-4th-genna`  
**Live domain:** `aidonia4thgenna.com`  
**VPS container:** `mw-aidonia`  
**VPS port:** `7005`  
**Repo:** `https://github.com/HammazoneRecords/aidonia4thgenna`

---

## Current State

| Branch | Last Updated | Deployed? | Notes |
|---|---|---|---|
| master | 2026-07-20 | ✅ Production | Eye-Donia fail-safe interest capture live; browser-to-DB QA verified |
| dev | — | — | Not in use |

## Last Action

**Date:** 2026-07-20
**Branch:** master
**Action:** Aidonia polish — nav rename, YouTube link, disclaimer
**What changed:**
- Nav: removed "Lookbook" link (Eye-donia overlay replaces it); "Explore the Vault" → "Frsh Drop" in Hero CTA
- YouTube link updated to `https://www.youtube.com/@AidoniaVEVO/videos` (Header, Footer, constants)
- Added working-draft disclaimer in Footer: "Buyer assumes responsibility for clearing image & likeness rights with Aidonia. This site or one like it is available for purchase."
- Hero now accepts `onEyeDonia` prop — second CTA triggers Eye-donia overlay

**Schema migration:** none

## Previous Actions

**Date:** 2026-07-20
**Branch:** master
**Action:** Harden and verify production interest capture
**What changed:**
- Removed the missing-endpoint local stub and false-success path from `PreOrderCapture.tsx`.
- Missing endpoint, network failure, and non-2xx responses now remain retryable and never display success.
- Rebuilt only `mw-aidonia`; live browser submission matched production QA row id 7.

**Schema migration:** none

---

## Previous Action (2026-05-31)

---

## Previous Action (2026-05-27)

**Date:** 2026-05-27  
**Branch:** master  
**Action:** Deploy production  
**What changed:**  
- Added interest-catalog.ts (4 Eye-Donia products: The 4th, The Don, The Shell, The Clear)  
- Added PreOrderCapture.tsx multi-product interest form (email, location, price tier, merch checkbox)  
- Updated EyeDonia.tsx with real background-removed product images + 20% hover-scale effect  
- Added eyedonia-*.png product shots (isnet + cleanup via rembg)  
- Changed dev port to 3004  

**Schema migration:** none

---

## Active Feature Branches

None — all work merged to master for production.

## Pending Merges

None

---

## History

| Date | Branch | Action | Notes |
|---|---|---|---|
| 2026-07-20 | master | Deploy and verify capture | Fail-safe form live; QA row id 7 confirmed in production database |
| 2026-06-02 | master | Deploy production | Merch image swap — front-31-cutout.png in FrshDrop |
| 2026-05-31 | master | Deploy production | V2 rebuild — interest-capture endpoint wired, PreOrderCapture live |
| 2026-05-27 | master | Deploy production | Eye-Donia V1 shipped to VPS at aidonia4thgenna.com |
| 2026-05-26 | master | Commit Eye-Donia feature | Real images, interest capture form, hover interactions |
| 2026-05-04 | master | Initial repo | Gemini-extracted site |
