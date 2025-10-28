"use client";
import { useAppKitAccount } from "@reown/appkit/react";
import ConnectedHome from "../components/ConnectedHome";
import PublicHome from "../components/PublicHome";

export default function HomePage() {
  const { isConnected } = useAppKitAccount();

  return isConnected ? <ConnectedHome /> : <PublicHome />;
}
