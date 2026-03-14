"use client";
import { useRef, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function NewEntryForm() {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const entry = textareaRef.current?.value || "";
    console.log("Textarea value:", entry);
    if (!entry.trim()) return;

    try {
      setIsLoading(true); // start loading
      console.log("Uploading to IPFS...");

      console.log("isLoading...", isLoading);

      const res = await fetch("/api/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: entry }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(
          errorData.error || `Upload failed with status ${res.status}`,
        );
      }

      const data = await res.json();

      if (!data.cid) {
        throw new Error("Upload succeeded but CID is missing from response");
      }

      console.log("✅ Uploaded to IPFS with CID:", data.cid);
      alert(`Uploaded successfully! CID: ${data.cid}`);

      // Optional: clear textarea after success
      if (textareaRef.current) textareaRef.current.value = "";
    } catch (error: unknown) {
      console.error("❌ Error uploading to IPFS:", error);

      let message = "An unknown error occurred";
      if (error instanceof Error) message = error.message;
      else if (typeof error === "string") message = error;

      alert(`Upload failed: ${message}`);
    } finally {
      setIsLoading(false); // stop loading
    }
  }

  return (
    <div className="p-2 sm:p-8">
      <div className="p-2 sm:p-6 rounded-md border-2 mb-6 border-primary shadow-md shadow-primary">
        <Textarea
          ref={textareaRef}
          placeholder="What's on your mind today?"
          className="w-full h-64 border-none focus-visible:ring-0 resize-none text-lg placeholder:secondary"
          disabled={isLoading} // disable textarea while loading
        />
      </div>

      <Button
        onClick={handleSubmit}
        disabled={isLoading} // disable button while loading
        className={`py-5 font-semibold border-2 border-primary w-full rounded-md text-xl cursor-pointer transition-all duration-400 ease-in-out ${
          isLoading
            ? "opacity-20 cursor-not-allowed"
            : "hover:scale-[0.95] active:scale-[0.99]"
        }`}
      >
        {isLoading ? "Uploading..." : "Post to Immutable Ledger"}
      </Button>

      <p className="mt-2 text-center text-gray-400 text-sm">
        Estimated Gas: 0.0001 Sepolia ETH (Paid by sender)
      </p>
    </div>
  );
}
