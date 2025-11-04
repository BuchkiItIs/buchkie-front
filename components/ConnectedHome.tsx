import { NewEntryForm } from "@/components/NewEntryForm";
import { useAppKitAccount } from "@reown/appkit/react";
import { AddressDisplay } from "./AddressDisplay";
import { JournalSidebar } from "./JournalSidebar";

export default function ConnectedHome() {
  const { address } = useAppKitAccount();

  return (
    <div className="border border-dashed border-border rounded-xl sm:p-12 w-full flex flex-col items-center justify-center text-primary">
      {/* Header (Top Bar) */}
      <div className="flex sm:flex-row flex-col gap-4 items-center p-4 border-b border-border">
        <h1 className="text-xl font-bold flex items-center">
          {/* Logo with Lime Green Accent */}
          <span className="mr-2 text-primary"></span>
          IMMUTABLE JOURNAL
        </h1>
        <div className="text-gray-400 flex gap-2 items-center">
          <span>Connected as:</span> <AddressDisplay address={address} />
        </div>
      </div>

      {/* Main Content: Two Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-2 sm:p-4 lg:p-8">
        {/* LEFT COLUMN: New Entry Form (70% width on large screens) */}
        <div className="lg:col-span-2">
          <NewEntryForm />
        </div>

        {/* RIGHT COLUMN: Journal History & Status (30% width on large screens) */}
        <JournalSidebar />
      </div>
    </div>
  );
}
