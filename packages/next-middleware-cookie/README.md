# Next Middleware Cookie

A straight forward authentication-only application. Shows logging in and logging out while protecting routes that are unauthenticated.

## Techniques employed

- middleware detects session ID and from there redirects route
- cookie is set from the client using `js-cookie`.
- practice of client and server component divide
