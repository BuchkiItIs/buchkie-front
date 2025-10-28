"use client";
import { modal } from "@/context/";
import { useAppKitAccount } from "@reown/appkit/react";

export const Header = () => {
  const { isConnected } = useAppKitAccount();
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md shadow-md border-b border-b-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo/Title */}
        <div className="shrink-0">
          <span className="text-xl font-extrabold tracking-wider">Buchkie</span>
        </div>
        {isConnected ? (
          <appkit-account-button />
        ) : (
          <button
            className="border border-primary text-primary rounded-none py-2 px-6
          text-sm cursor-pointer hover:scale-[0.99] active:scale-[0.99] transition-all duration-300 ease-in-out"
            onClick={() => modal.open()}
          >
            Connect wallet
          </button>
        )}
      </div>
    </header>
  );
};
