export const SITE = {
  domain: process.env.NEXT_PUBLIC_DOMAIN ?? "faucet.solaxy.io",
  url: process.env.NEXT_PUBLIC_URL ?? "https://faucet.solaxy.io",
};

export type AirdropRateLimit = {
  /** number of previous hours covered by the rate limit, in a rolling period */
  coveredHours: number;
  /** max number of requests to allow per `coveredHours` time period */
  allowedRequests: number;
  /** max amount of SOL allowed per individual request */
  maxAmountPerRequest: number;
};

/**
 * Unique keys used to identify a specific airdrop limit
 */
export type AirdropLimitKeys = "default" | "github";

/**
 * Define the standard airdrop limits for requesting users
 * (including the base and elevated)
 */
export const AIRDROP_LIMITS: {
  [key in AirdropLimitKeys]: AirdropRateLimit;
} = {
  default: {
    coveredHours: 8,
    allowedRequests: 2,
    maxAmountPerRequest: 5,
  },
  github: {
    coveredHours: 8,
    allowedRequests: 2,
    maxAmountPerRequest: 5,
  },
};

// Environment variables for endpoints
// Number of lamports per SOLX token (Solana convention: 1 SOLX = 1,000,000 lamports)
export const LAMPORTS_PER_SOLX = 1_000_000;
export const devnetFaucetURL = process.env.NEXT_PUBLIC_RPC_URL;
export const appName = process.env.NEXT_PUBLIC_APP_NAME;
export const appDescription = process.env.NEXT_PUBLIC_APP_DESCRIPTION;
export const ticker = process.env.NEXT_PUBLIC_TICKER;