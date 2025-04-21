// src/app/layout.tsx
import { ThirdwebProvider } from "thirdweb/react";
import { thirdwebClient } from "../lib/client";
import "../styles/globals.css";
import { Navbar } from "../components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThirdwebProvider client={thirdwebClient}>
          <Navbar />
          {children}
        </ThirdwebProvider>
      </body>
    </html>

  );
}