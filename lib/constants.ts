export const SITE = {
  domain: "faucet.solaxy.io",
  url: "https://faucet.solaxy.io",
};

export type AirdropRateLimit = {
  /** number of previous hours covered by the rate limit, in a rolling period */
  coveredHours: number;
  /** max number of requests to allow per `coveredHours` time period */
  allowedRequests: number;
  /** max amount of SOl allowed per individual request */
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

// Environment variables
// Centralized here for consistent usage across the codebase
export const devnetFaucetURL = process.env.NEXT_PUBLIC_RPC_URL;

// Number of lamports per SOLX token (Solana convention: 1 SOLX = 1,000,000 lamports)
export const LAMPORTS_PER_SOLX = 1_000_000;