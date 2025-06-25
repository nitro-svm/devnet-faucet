# Solana Devnet Faucet

A Next.js-based Solana devnet faucet with configurable rate limiting and Cloudflare protection.

## Features

- **Rate Limiting**: Configurable limits for airdrop requests
- **Cloudflare Turnstile**: Bot protection
- **PostgreSQL**: Request tracking and monitoring (currently disabled)
- **Responsive UI**: Built with Tailwind CSS and Radix UI

> **Note**: GitHub authentication is currently disabled in the codebase. All auth-related code is commented out.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure environment variables:
   ```bash
   cp .env.example .env.local
   ```

   Fill in the required values:
   ```
   # Server-side variables
   RPC_URL=your_solana_rpc_url
   FAUCET_KEYPAIR=your_faucet_keypair
   POSTGRES_STRING=your_postgres_connection_string
   CLOUDFLARE_SECRET=your_cloudflare_turnstile_secret
   IP_ALLOW_LIST=comma_separated_allowed_ips
   GITHUB_CLIENT_ID=your_github_oauth_client_id
   GITHUB_CLIENT_SECRET=your_github_oauth_client_secret

   # Public variables (exposed to client)
   NEXT_PUBLIC_RPC_URL=your_public_rpc_url
   NEXT_PUBLIC_APP_NAME=your_app_name
   NEXT_PUBLIC_APP_DESCRIPTION=your_app_description
   NEXT_PUBLIC_TICKER=your_token_ticker
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Rate Limits

Default limits are configured in `lib/constants.ts`:
- **Default users**: 1 request per 6 hours, max .25 tokens per request

> **Note**: GitHub-based rate limiting is currently disabled. All users use the default limits.

## API Endpoints

- `POST /api/request` - Request tokens from the faucet

## Monitoring

Access the monitoring dashboard at `/monitor` to view recent requests and system status.
