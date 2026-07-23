# MW Truth Tree — Aidonia (aidonia4thgenna.com)
**Root question:** Is aidonia4thgenna.com ready for public launch?
**Last assessed:** 2026-06-24
**Overall status:** [v] Live — interest-capture wiring is enhancement only, not a launch blocker

---
> **Symbol key:** `[v]` verified · `[?]` unverified · `[x]` broken/false · `[o]` open/unproven · `[!]` blocked by ext. dep · `[H]` historical · `[*]` personal insight
> **Canonical doc:** `MW Truth Tree.md` at workspace root


### MW-1: Is the core product built?

**MW-1.a — Artist site live**
- MW-1.a.c: Site is accessible at aidonia4thgenna.com
- MW-1.a.e1: Container `mw-aidonia`, port 7005, SSL active
- MW-1.a.e2: Vite + React + TS + nginx, two-stage Docker build
- MW-1.a.s: `[v]` Live

**MW-1.b — Interest capture**
- MW-1.b.c: Fan interest is captured for Aidonia products
- MW-1.b.ce1: shared interest endpoint DNS not set — API not wired into this container
- MW-1.b.s: `[!]` Blocked by shared endpoint DNS — enhancement, site still live

---
> **Symbol key:** `[v]` verified · `[?]` unverified · `[x]` broken/false · `[o]` open/unproven · `[!]` blocked by ext. dep · `[H]` historical · `[*]` personal insight
> **Canonical doc:** `MW Truth Tree.md` at workspace root


### MW-2: Auth / user flow

- MW-2.s: `[v]` N/A — static artist site, no auth

---
> **Symbol key:** `[v]` verified · `[?]` unverified · `[x]` broken/false · `[o]` open/unproven · `[!]` blocked by ext. dep · `[H]` historical · `[*]` personal insight
> **Canonical doc:** `MW Truth Tree.md` at workspace root


### MW-3: Is it deployed and accessible?

**MW-3.a — VPS + GitHub**
- MW-3.a.c: Code on VPS and GitHub, serving live traffic
- MW-3.a.e1: HammazoneRecords/aidonia-4th-genna, branch main, `/opt/mw/aidonia/`
- MW-3.a.e2: SPA cache-bust headers on nginx.conf
- MW-3.a.s: `[v]` Live

---
> **Symbol key:** `[v]` verified · `[?]` unverified · `[x]` broken/false · `[o]` open/unproven · `[!]` blocked by ext. dep · `[H]` historical · `[*]` personal insight
> **Canonical doc:** `MW Truth Tree.md` at workspace root


### MW-4: External dependencies

**MW-4.a — Interest Capture API**
- MW-4.a.c: Fan interest form submits to the central interest API
- MW-4.a.ce1: DNS for the shared interest endpoint not set → SSL not issued → container not rebuilt with `VITE_INTEREST_API`
- MW-4.a.s: `[!]` One DNS record away

---
> **Symbol key:** `[v]` verified · `[?]` unverified · `[x]` broken/false · `[o]` open/unproven · `[!]` blocked by ext. dep · `[H]` historical · `[*]` personal insight
> **Canonical doc:** `MW Truth Tree.md` at workspace root


### MW-5: Documentation

- MW-5.e1: `FEATURES.md` — created 2026-06-24
- MW-5.e2: Entry in `vps_management/APPS.md`
- MW-5.s: `[v]` Adequate

---
> **Symbol key:** `[v]` verified · `[?]` unverified · `[x]` broken/false · `[o]` open/unproven · `[!]` blocked by ext. dep · `[H]` historical · `[*]` personal insight
> **Canonical doc:** `MW Truth Tree.md` at workspace root


### MW-6: Active blockers

| ID | Blocker | Severity |
|---|---|---|
| MW-6.1 | Shared interest endpoint DNS not set | Medium (enhancement only — site already live) |
