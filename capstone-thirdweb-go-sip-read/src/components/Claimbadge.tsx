"use client";
import { useContract, useClaimNFT, useAddress } from "@thirdweb-dev/react";

const CONTRACT = "0x91Ef65e759C3F9eaeAfF78E95c2a16896BBD129c";

export default function ClaimBadge() {
  const address = useAddress();
  const { contract } = useContract(CONTRACT);
  const { mutate: claim, isLoading, error } = useClaimNFT(contract);

  // Type-safe check for the error object
  const errorMessage = error instanceof Error ? error.message : null;

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        disabled={!address || isLoading}
        onClick={() => claim({ to: address, quantity: 1 })}
        className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
      >
        {isLoading ? "Claiming…" : address ? "Claim Badge" : "Connect Wallet"}
      </button>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
}
