// src/components/Navbar.tsx
"use client"; // Important for Thirdweb hooks to work

import { ConnectWallet } from "thirdweb/react";

export function Navbar() {
  return (
    <nav className="p-4 flex justify-end shadow-md bg-white sticky top-0 z-50">
      <ConnectWallet />
    </nav>
  );
}
