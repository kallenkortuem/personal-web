import { ThemeProvider } from "@/components/ThemeProvider";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DarkModeToggle } from "@/components/DarkModeToggle";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Kallen Kortuem",
  description: "Kallen Kortuem's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <UserProvider>
            <div className="grid grid-rows-[auto_20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
              <main className="flex flex-col gap-6 row-start-3 items-center sm:items-start ">
                {children}
              </main>
              <footer className="w-full p-4 flex items-center justify-between fixed bottom-0 left-0 right-0">
                <nav>
                  <ul className="flex gap-4">
                    {["Home", "Experience", "Contact"].map(
                      (label, index) => (
                        <li key={index}>
                          <Link
                            href={
                              label === "Home"
                                ? "/"
                                : `/${label.replace(" ", "-").toLowerCase()}`
                            }
                            className={cn(
                              "inline-flex items-center px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors",
                              "rounded-lg hover:bg-muted",
                              "aria-[current]:font-bold aria-[current]:text-foreground"
                            )}
                            aria-current={
                              typeof window !== "undefined" &&
                              window.location.pathname ===
                                (label === "Home"
                                  ? "/"
                                  : `/${label.replace(" ", "-").toLowerCase()}`)
                                ? "page"
                                : undefined
                            }
                          >
                            {label}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </nav>
                <DarkModeToggle />
              </footer>
            </div>
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
