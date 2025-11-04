"use client";
import { useRef } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function NewEntryForm() {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit = () => {
    const value = textareaRef.current?.value || "";
    console.log("Textarea value:", value);
  };

  return (
    <div className="p-2 sm:p-8">
      <div className="p-2 sm:p-6 rounded-md border-2 mb-6 border-primary shadow-md shadow-primary">
        <Textarea
          ref={textareaRef}
          placeholder="What's on your mind today?"
          className="w-full h-64 border-none focus-visible:ring-0 resize-none text-lg placeholder:secondary"
        />
      </div>

      <Button
        onClick={handleSubmit}
        className="py-5 font-semibold border-2 border-primary w-full rounded-md
          text-xl cursor-pointer hover:scale-[0.95] active:scale-[0.99] transition-all duration-400 ease-in-out"
      >
        Post to Immutable Ledger
      </Button>

      <p className="mt-2 text-center text-gray-400 text-sm">
        Estimated Gas: 0.0001 Sepolia ETH (Paid by sender)
      </p>
    </div>
  );
}
