# FEATURES — aidonia-4th-genna
**Last updated:** 2026-06-24
**App:** aidonia4thgenna.com — Aidonia ADTL artist site

---

## Live Features

| Feature | Shipped | Notes |
|---|---|---|
| Site live on owned domain | — | aidonia4thgenna.com, VPS port 7005, container `mw-aidonia` |
| SSL certificate | — | HTTPS live |
| Vite + React + TS + nginx build | — | Two-stage Docker: node builder → nginx server |
| SPA cache-bust headers | — | `index.html` no-cache, hashed assets 1y |

---

## In Development

| Feature | Started | Owner | Notes |
|---|---|---|---|
| — | — | — | — |

---

## Design (Spec'd, Not Yet Built)

| Feature | Spec date | Notes |
|---|---|---|
| Interest capture API wiring | — | Once the shared interest endpoint DNS + SSL is set: add `ARG VITE_INTEREST_API` to Dockerfile + `args:` in compose, rebuild container |
| Domain ad creative | 2026-06-24 | Frame 2 — ad using `aidonia4thgenna.com` as the creative; site positioned for sale/license |

---

## Theory

| Feature | Date stated | Notes |
|---|---|---|
| Domain resale / licensing | 2026-06-24 | Domain available for purchase or full ADTL license — inquiry page needed |

---

## Deferred

| Feature | Deferred | Reason |
|---|---|---|
| — | — | — |

---

## Archived

| Feature | Archived | Replaced by |
|---|---|---|
| — | — | — |
