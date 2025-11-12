"use client";

import { JournalRecord } from "@/components/JournalRecord";
import { formatBalance } from "@/lib/utils";
import { useEffect, useState } from "react";
import {
  useAppKitAccount,
  useAppKitBalance,
  AdapterBlueprint,
} from "@reown/appkit/react";

// Define the expected structure of the object returned by fetchBalance()
interface BalanceState {
  data: AdapterBlueprint.GetBalanceResult | undefined;
  error: string | null;
  isSuccess: boolean;
  isError: boolean;
}

// Placeholder data for the history sidebar
const mockHistory = [
  {
    date: "October 26, 2025",
    snippet: "Started coding the new feature...",
    txHash:
      "0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b",
  },
  {
    date: "October 26, 2025",
    snippet: "Attended n web3 conference...",
    txHash:
      "0xf1e2d3c4b5a69876543210fedcba9876543210fedcba9876543210fedcba9876",
  },
  {
    date: "October 25, 2025",
    snippet: "Reflect on yesterday's work and plan the next steps...",
    txHash:
      "0x5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b",
  },
];

export function JournalSidebar() {
  const { fetchBalance } = useAppKitBalance();

  const { isConnected } = useAppKitAccount();

  useEffect(() => {
    if (isConnected) {
      fetchBalance().then((result) => {
        setBalance(result);
      });
    }
  }, [isConnected, fetchBalance]);

  const [balance, setBalance] = useState<BalanceState | null>(null);

  return (
    <div className="lg:col-span-1 p-6 bg-gray-950 rounded-md border border-gray-800 h-fit">
      <h2 className="text-2xl font-semibold mb-6">Journal History</h2>

      {/* Wallet Balance Badge */}
      <div className="mb-6">
        <div
          className="rounded-md flex items-center justify-center border border-primary text-primary w-full p-4 bg-transparent hover:bg-transparent
          text-2x"
        >
          {balance && balance.isSuccess && balance.data ? (
            <p>
              Balance: {formatBalance(balance.data.balance)}{" "}
              {balance.data.symbol}
            </p>
          ) : (
            <p>Loading Balance...</p>
          )}
        </div>
      </div>

      {/* History Feed */}
      <div>
        {mockHistory.map((record, index) => (
          <JournalRecord key={index} {...record} />
        ))}
        <p className="text-center text-gray-600 mt-4 text-sm">
          --- End of Visible History ---
        </p>
      </div>
    </div>
  );
}
