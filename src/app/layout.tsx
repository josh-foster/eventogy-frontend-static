import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import { Search, User } from "lucide-react";

import "./globals.css";
import eventogyLogo from "../../public/eventogy-logo.svg";
import { Input } from "@/components/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/popover";
import Link from "next/link";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Eventogy - Static",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex justify-between items-center px-8 py-2.5 bg-muted z-20 w-full sticky top-0 left-0 overflow-x-hidden">
          <Link href="/">
            <Image
              priority
              height={24}
              src={eventogyLogo}
              alt="Eventogy Logo"
            />
          </Link>
          <div className="relative inline-block w-6/12">
            <Search
              color="grey"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none p-0.5"
            />
            <Input
              className="pl-12 w-full rounded-full"
              type="search"
              placeholder="Search Events, Attendees, Venues..."
            />
          </div>

          <Popover>
            <PopoverTrigger className="bg-background rounded-full w-10 h-10 flex justify-center items-center">
              <User color="grey" />
            </PopoverTrigger>
            <PopoverContent className="mr-2">
              test-user@gmail.com
            </PopoverContent>
          </Popover>
        </header>

        {children}
      </body>
    </html>
  );
}
