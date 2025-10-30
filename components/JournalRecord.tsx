import { ArrowUpRight } from "lucide-react";

interface JournalRecordProps {
  date: string; // e.g., "October 26, 2025"
  snippet: string; // The first sentence or truncated entry
  txHash: string; // The transaction hash for Etherscan/Sepolia Scan link
}

export function JournalRecord({ date, snippet, txHash }: JournalRecordProps) {
  // Function to create the Etherscan link (assuming Sepolia testnet)
  const getEtherscanLink = (hash: string) =>
    `https://sepolia.etherscan.io/tx/${hash}`;

  return (
    <div className="py-3 border-b border-gray-800 last:border-b-0">
      <p className="text-gray-400 text-sm">{date}</p>
      <p className="text-white mt-1 mb-2 leading-snug">{snippet}</p>

      {/* On-Chain Proof Link */}
      <a
        href={getEtherscanLink(txHash)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-[oklch(84.1% 0.238 128.85)] hover:underline text-sm font-medium transition-colors"
      >
        On-Chain Proof <ArrowUpRight className="w-3 h-3 ml-1" />
      </a>
    </div>
  );
}
