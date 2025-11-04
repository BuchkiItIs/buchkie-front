import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function NewEntryForm() {
  // Placeholder logic for form submission and status
  const handleSubmit = () => {
    console.log("Submitting journal entry to the blockchain...");
    // Future: Use useWriteContract hook from Wagmi here
  };

  return (
    <div className="p-2 sm:p-8">
      {/* Text Box Area */}
      <div className="p-2 sm:p-6 rounded-lg border-2 mb-6 border-primary shadow-md shadow-primary">
        <Textarea
          placeholder="What's on your mind today? Your thoughts will immutably saved on the blockchain..."
          className="w-full h-64 border-none focus-visible:ring-0 resize-none text-lg placeholder:secondary"
        />
      </div>

      {/* Submission Button */}

      <button
        className="w-full
          text-2xl cursor-pointer hover:scale-[0.95] active:scale-[0.99] transition-all duration-400 ease-in-out"
        onClick={handleSubmit}
      >
        <Badge className="px-4 py-2 text-base font-semibold border-2 border-primary w-full">
          Post to Immutable Ledger
        </Badge>
      </button>

      {/* Gas Notice */}
      <p className="mt-2 text-center text-gray-400 text-sm">
        Estimated Gas: 0.0001 Sepolia ETH (Paid by sender)
      </p>
    </div>
  );
}
