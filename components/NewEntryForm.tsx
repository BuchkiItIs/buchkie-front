import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function NewEntryForm() {
  // Placeholder logic for form submission and status
  const handleSubmit = () => {
    console.log("Submitting journal entry to the blockchain...");
    // Future: Use useWriteContract hook from Wagmi here
  };

  return (
    <div className="p-8">
      {/* Text Box Area */}
      <div className="p-6 rounded-lg border-2 mb-6 border-primary">
        <Textarea
          placeholder="What's on your mind today? Your thoughts will immutably saved on the blockchain..."
          className="w-full h-64 text-white border-none focus-visible:ring-0 resize-none text-lg placeholder:text-gray-500"
        />
      </div>

      {/* Submission Button */}
      <Button
        onClick={handleSubmit}
        className="w-full mt-6 py-7 text-lg font-bold text-black hover:opacity-90 transition-opacity"
        style={{ backgroundColor: "oklch(84.1% 0.238 128.85)" }}
      >
        Post to Immutable Ledger
      </Button>

      {/* Gas Notice */}
      <p className="mt-2 text-center text-gray-400 text-sm">
        Estimated Gas: 0.0001 Sepolia ETH (Paid by sender)
      </p>
    </div>
  );
}
