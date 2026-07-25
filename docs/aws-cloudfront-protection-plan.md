# AWS CloudFront protection plan

Date: 2026-07-07

## Context

This repo powers `jaredpattison.com` / `www.jaredpattison.com`.

A separate SheerVue incident showed that bot/scraper traffic can create large CloudFront bandwidth charges by repeatedly downloading static JS assets. This personal site has been stable for years and has not shown problematic usage, but should eventually get preventive WAF rate limits and alarms.

## Known CloudFront distribution

- `E2P4S3S9NXKCM` — `jaredpattison.com`, `www.jaredpattison.com` — enabled

## Desired AWS protection

Use AWS CLI or console to attach WAF protection to the active CloudFront distribution.

Suggested starting limits:

1. Per-IP rate limit
   - name: `ip-rate-limit-200-per-5min`
   - aggregation: source IP address
   - limit: `200`
   - evaluation window: `5 minutes`
   - action: `Block`

2. Optional global rate limit
   - name: `global-rate-limit-2000-per-5min`
   - aggregation: global/count all
   - limit: `2000`
   - evaluation window: `5 minutes`
   - scope-down: URI path starts with `/`
   - action: `Block`

3. CloudWatch alarm
   - metric namespace: `AWS/CloudFront`
   - metric: `BytesDownloaded`
   - dimensions: distribution `E2P4S3S9NXKCM`, region `Global`
   - suggested alarm threshold: start at `100 MB / 5 min` or similar
   - notify the same SNS/email channel as the AWS budget alert

## Notes

- This site is lower risk because it has had normal usage historically.
- These limits are intentionally gentler than SheerVue because search crawlers and portfolio visitors should not be blocked during normal browsing.
- Budget alerts remain the account-level backstop; WAF and CloudWatch are distribution-level safeguards.
