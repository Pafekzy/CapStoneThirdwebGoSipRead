import Link from 'next/link'; // Import Link

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <nav className="p-4 bg-gray-100 flex gap-6 shadow-md">
          <Link href="/" className="hover:text-blue-600">Home</Link> {/* Replace <a> with <Link> */}
          <Link href="/about" className="hover:text-blue-600">About</Link> {/* Replace <a> with <Link> */}
        </nav>
        <main className="p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
