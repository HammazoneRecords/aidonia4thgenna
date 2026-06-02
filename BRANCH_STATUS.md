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
| master | 2026-05-31 | ✅ Production | Eye-Donia V2: RAAS interest capture wired to live API (`raas-api.mindwaveja.com`) |
| dev | — | — | Not in use |

## Last Action

**Date:** 2026-05-31  
**Branch:** master  
**Action:** Deploy production (rebuild with VITE_RAAS_API)  
**What changed:**  
- Added `ARG VITE_RAAS_API` / `ENV VITE_RAAS_API=$VITE_RAAS_API` to Dockerfile  
- Rebuilt VPS container with `VITE_RAAS_API=https://raas-api.mindwaveja.com` build arg  
- PreOrderCapture now submits to live Express API (no longer console.log stub)  

**Schema migration:** none

---

## Previous Action (2026-05-27)

**Date:** 2026-05-27  
**Branch:** master  
**Action:** Deploy production  
**What changed:**  
- Added raas-catalog.ts (4 Eye-Donia products: The 4th, The Don, The Shell, The Clear)  
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
| 2026-05-31 | master | Deploy production | V2 rebuild — VITE_RAAS_API wired, PreOrderCapture live |
| 2026-05-27 | master | Deploy production | Eye-Donia V1 shipped to VPS at aidonia4thgenna.com |
| 2026-05-26 | master | Commit Eye-Donia feature | Real images, interest capture form, hover interactions |
| 2026-05-04 | master | Initial repo | Gemini-extracted site |
