# Cloudflare Pages deployment

## Static-site verdict

This repository is a static Create React App site. It has one public HTML route (`/`), in-page hash links, and static assets. It has no React router, server rendering, API, Pages Functions, or nested browser routes.

Cloudflare Pages Git integration is the simplest deployment approach. Wrangler and Pages Functions are not needed.

## Pages project settings

| Setting | Value |
| --- | --- |
| Project name | `jaredpattison-portfolio` |
| Git repository | `jaredpattison/Portfolio` |
| Production branch | `master` |
| Build command | `npm run build` |
| Build output directory | `build` |
| Node.js | `22.x` (declared in `.nvmrc`) |
| Environment variables | None |
| Root directory | Not configured; use the repository root |

## Routing behavior

- `/` is the only application route.
- `/#intro`, `/#projects`, and `/#about` are client-side fragments, not server routes.
- `/JaredPattisonResume.pdf`, `/favicon.png`, `/manifest.json`, `/robots.txt`, and `/sitemap.xml` are public static files.
- Unknown paths should return Cloudflare Pages' normal `404`; they must not fall back to `index.html`.
- Missing assets should return `404`.

No `_redirects` file is required. In particular, do not add a broad `/* /index.html 200` SPA fallback. No `_headers` file is currently required.

## Canonical hostname redirect

After both custom domains are attached, create a Cloudflare Redirect Rule that permanently redirects:

```text
https://www.jaredpattison.com/*
```

to:

```text
https://jaredpattison.com/$1
```

Use HTTP status `301` and preserve the query string. This hostname redirect belongs in the Cloudflare zone configuration rather than a Pages `_redirects` file.

## Production cutover

1. Recreate and verify any domain email routes in Cloudflare Email Routing.
2. Change the domain's Namecheap nameservers to the assigned Cloudflare nameservers.
3. Attach `jaredpattison.com` and `www.jaredpattison.com` to the Pages project.
4. Wait until SSL is **Active** for both hostnames.
5. Test the apex, the `www` redirect, `/JaredPattisonResume.pdf`, and email delivery.
6. Enable Web Analytics under **Workers & Pages → jaredpattison-portfolio → Metrics**, then redeploy.

Keep the AWS origin available during the rollback window. Do not delete AWS resources until the Cloudflare deployment, DNS, TLS, analytics, and email have remained stable.
