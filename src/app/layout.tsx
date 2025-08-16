import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "B7Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
      >
        <Header />
        <main className="w-full max-w-6xl mx-auto p-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
