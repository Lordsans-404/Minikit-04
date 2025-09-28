const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
  "http://localhost:3000";

/**
 * MiniApp configuration object. Must follow the mini app manifest specification.
 *
 * @see {@link https://docs.base.org/mini-apps/features/manifest}
 */
export const minikitConfig = {
  accountAssociation: {
    header: "eyJmaWQiOjEzNTYxMDQsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHhCMjkwYUY0OWFiZDI1ZTc0MmJDRDY0OWM3MjhCRUE2ODBDOTExMTkzIn0",
    payload: "eyJkb21haW4iOiJtaW5pa2l0LTA0LnZlcmNlbC5hcHAifQ",
    signature: "MHg0ZTBlMTg0ODc2YzQ1ZGFlYzc3M2FkZmRmMmM4OTE5YWY3Y2JjYTU0YTMwZTI1NjNjZWE0M2JjNjY2ZWRjNjAyMTlhNTQyZWU2MzY3NzMzNTNkM2ZkNzJkMmVjY2Q5MGM0M2IwN2FjNGU2ZDk0ZjZjM2QzZjk1YzRhNGE5M2I4MTFj",
  },
  baseBuilder: {
    allowedAddresses: [],
  },
  miniapp: {
    version: "1",
    name: "minikit-rose",
    subtitle: "",
    description: "",
    screenshotUrls: [],
    iconUrl: `${ROOT_URL}/icon.png`,
    splashImageUrl: `${ROOT_URL}/splash.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "utility",
    tags: ["example"],
    heroImageUrl: `${ROOT_URL}/hero.png`,
    tagline: "",
    ogTitle: "",
    ogDescription: "",
    ogImageUrl: `${ROOT_URL}/hero.png`,
  },
} as const;
