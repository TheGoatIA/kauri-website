# Contributing to Kauri Website

Thanks for helping! This repository is a small static site; the rules below keep it safe and fast.

## Workflow

1. Branch from `main` (`feature/…` or `fix/…`) — or from `dev` if it exists.
2. Open a Pull Request; describe the change and attach a screenshot for visual changes.
3. After merge, **`main` deploys to production automatically**.

## Rules

- **No inline `<script>` and no inline event handlers (`onclick=…`)**: the CSP blocks them. Put code in `scripts.js`, `legal.js`, `about.js` or a new `.js` file (and copy it in the `Dockerfile`).
- **New external resources** (fonts, CDN, analytics) must be allowed explicitly in `security-headers.conf`; prefer self-hosting.
- **Both languages**: every content change must be made in the French page and its `en/` counterpart.
- **Legal pages**: keep `privacy` / `terms` URLs stable (referenced by the apps and the stores) and keep the dates up to date.
- Keep images optimized (`og-*.jpg`, screenshots) and give every image an `alt`.

## Check before pushing

```bash
docker build -t kauri-website . && docker run --rm -p 8080:80 kauri-website
# then verify http://localhost:8080 and /en/, the browser console shows no CSP violation
```

## License

Contributions are licensed under the [MIT License](LICENSE).
