import Link from "next/link";
import { appName } from "@/lib/constants";

export function Footer() {
  return (
    <div className="p-8 space-y-1">
      <p className="text-sm text-center text-white/50">
        This faucet is for {appName} Devnet only and does not distribute mainnet tokens.
      </p>
      <p className="text-sm text-center text-white/50">
        Operated by{" "}
        <Link href={`https://${appName}.io`} target="_blank" className="underline">
          {appName}
        </Link>
        .
      </p>
    </div>
  );
}