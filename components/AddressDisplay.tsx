"use client";

import React, { useState } from "react";
import { maskAddressRegex } from "../lib/utils";
import { CheckCheck } from "lucide-react";

export function AddressDisplay({ address }: { address?: string }) {
  const [copied, setCopied] = useState(false);
  const masked = maskAddressRegex(address);

  const handleCopy = async () => {
    if (!address) return;
    await navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2 relative">
      <span title={address} className="font-mono text-sm">
        {masked || "—"}
      </span>

      <button
        onClick={handleCopy}
        aria-label="Copy address"
        className="relative px-2 py-1 text-xs rounded border cursor-pointer hover:scale-95 transition"
      >
        {copied && (
          <CheckCheck
            size={14}
            className="absolute -top-1 -right-1 text-primary animate-fade-in"
          />
        )}
        Copy
      </button>
    </div>
  );
}
