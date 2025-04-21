"use client";
import Link from "next/link";
import { ConnectWallet } from "@thirdweb-dev/react";

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-100 flex items-center justify-between shadow">
      <div className="flex gap-4">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <Link href="/about" className="hover:text-blue-600">About</Link>
      </div>
      <ConnectWallet />
    </nav>
  );
}