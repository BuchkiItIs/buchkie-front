"use client";

import { createAppKit } from "@reown/appkit/react";
import { Ethers5Adapter } from "@reown/appkit-adapter-ethers5";
import { mainnet, sepolia } from "@reown/appkit/networks";

// 1. Get projectId at https://dashboard.reown.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) {
  throw new Error("Project ID is not defined");
}
console.log(4545454545, projectId);

// 2. Create a metadata object
const metadata = {
  name: "Buchkie",
  description: "Buchkie daily journal app",
  url: "https://www.buchkie.com/", // origin must match your domain & subdomain http://localhost:3000/
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
};

// 3. Create the AppKit instance
createAppKit({
  adapters: [new Ethers5Adapter()],
  metadata: metadata,
  networks: [mainnet, sepolia],
  projectId,
  features: {
    analytics: true,
    email: false,
    socials: [],
    emailShowWallets: true,
  },
});

export function AppKit({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
