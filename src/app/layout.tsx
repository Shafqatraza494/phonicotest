'use client'
import { Providers } from "./provider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "sonner";
import { SessionProvider } from "next-auth/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const queryClient = new QueryClient();
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <SessionProvider>

          <QueryClientProvider client={queryClient}>
            <Providers>
              <Header />

              <main className="container mx-auto flex-1">{children}</main>

              <Footer />


              <Toaster style={{ marginTop: '10px' }} position="top-right" richColors />
            </Providers>
          </QueryClientProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
