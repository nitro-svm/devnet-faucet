# Solana Devnet Faucet

A Next.js-based Solana devnet faucet with rate limiting, GitHub authentication, and Cloudflare protection.

## Features

- **Rate Limiting**: Configurable limits for airdrop requests
- **GitHub Authentication**: Enhanced limits for authenticated users
- **Cloudflare Turnstile**: Bot protection
- **PostgreSQL**: Request tracking and monitoring
- **Responsive UI**: Built with Tailwind CSS and Radix UI

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
- **Default users**: 2 requests per 8 hours, max 5 tokens per request
- **GitHub users**: 2 requests per 8 hours, max 5 tokens per request

## API Endpoints

- `POST /api/request` - Request tokens from the faucet

## Monitoring

Access the monitoring dashboard at `/monitor` to view recent requests and system status.
