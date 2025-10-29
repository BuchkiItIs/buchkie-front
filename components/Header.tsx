"use client";
// import { modal } from "@/context/";
import { useAppKitAccount } from "@reown/appkit/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ConnectButton from "./ConnectButton";

export const Header = () => {
  const { isConnected } = useAppKitAccount();
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md shadow-md border-b border-b-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo/Title */}
        <div className="shrink-0 flex items-center gap-2 relative cursor-po">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 32 32"
          >
            <path
              fill="#5ea500"
              d="M30.48 17.52H32v4.57h-1.52Zm-1.53 4.57h1.53v3.05h-1.53Zm0-6.09h1.53v1.52h-1.53Zm-1.52-3.05h1.52V16h-1.52ZM25.9 25.14h3.05v1.52H25.9Zm0-15.24h1.53v3.05H25.9Zm-1.52 12.19h1.52v1.53h-1.52ZM25.9 16h-1.52v1.52h-1.52v1.52h1.52v1.53h1.52v-1.53h1.53v-1.52H25.9zm-1.52-7.62h1.52V9.9h-1.52ZM6.09 26.66H25.9v1.53H6.09Zm16.77-15.23h1.52v1.52h-1.52Zm-1.53 12.19h3.05v1.52h-3.05ZM18.28 9.9h4.58v1.53h-4.58Zm3.05-3.05h3.05v1.53h-3.05Zm-3.05 10.67h1.53v1.52h-1.53Zm0-12.19h3.05v1.52h-3.05Zm-1.52 15.24h-1.52v1.52h-1.53v1.53h1.53v1.52h1.52v-1.52h1.52v-1.53h-1.52zM15.24 6.85h1.52v1.53h-1.52Zm-1.53-3.04h4.57v1.52h-4.57Zm0 12.19h1.53v-1.53h1.52v-1.52h-1.52v-1.52h-1.53v1.52h-1.52v1.52h1.52zM10.67 5.33h3.04v1.52h-3.04Zm0 15.24h1.52v1.52h-1.52Zm-3.05-9.14h3.05v1.52H7.62Zm0-4.58h3.05v1.53H7.62Zm0 16.77h1.52v1.52H7.62Zm0-6.1H6.09v1.52H4.57v1.53h1.52v1.52h1.53v-1.52h1.52v-1.53H7.62zM6.09 8.38h1.53V9.9H6.09ZM3.05 25.14h3.04v1.52H3.05ZM4.57 9.9h1.52v1.53H4.57Zm-1.52 1.53h1.52V16H3.05ZM1.52 22.09h1.53v3.05H1.52Zm0-6.09h1.53v1.52H1.52ZM0 17.52h1.52v4.57H0Z"
            />
          </svg>
          <p className="text-xl font-extrabold tracking-wider absolute left-8 px-2 bg-background">
            Buchkie
          </p>
        </div>
        {isConnected ? <appkit-account-button /> : <ConnectButton />}
      </div>
    </header>
  );
};
