# Security

## Known Vulnerabilities

### Fixed

| Package | Vulnerability | Fixed Version |
|---------|--------------|---------------|
| `axios` | DoS via `__proto__` key in `mergeConfig` ([GHSA-jr5f-v2jv-69x6](https://github.com/advisories/GHSA-jr5f-v2jv-69x6)) | `1.13.6` |
| `undici` | Unbounded memory consumption in WebSocket permessage-deflate decompression ([GHSA-655v-q4r5-7fmx](https://github.com/advisories/GHSA-655v-q4r5-7fmx)), Unhandled exception in WebSocket client ([GHSA-h4rr-jgjh-9hqr](https://github.com/advisories/GHSA-h4rr-jgjh-9hqr)), Malicious WebSocket 64-bit length overflows parser ([GHSA-vr78-v855-x6v8](https://github.com/advisories/GHSA-vr78-v855-x6v8)) | `7.24.4` (via pnpm override; `undici` is a transitive dependency of `i18next-parser`) |

### Not Fixed

| Package | Vulnerability | Reason |
|---------|--------------|--------|
| `next` | HTTP request deserialization can lead to DoS when using insecure React Server Components ([GHSA-f82x-m585-4h3f](https://github.com/advisories/GHSA-f82x-m585-4h3f)). Affected: `>=13.0.0, <15.0.8`. Patched: `15.0.8`. | **No impact on this project.** The vulnerability only affects apps using React Server Components (RSC) with insecure data. This project uses the Next.js [Pages Router](https://nextjs.org/docs/pages), not the App Router, and does not use RSC. Upgrading from Next.js 14 to 15 is a major version change (see [Next.js 15 changelog](https://nextjs.org/blog/next-15)) with breaking changes including React 19 peer dependency requirements, and is therefore deferred. |
