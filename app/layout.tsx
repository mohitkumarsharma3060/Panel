
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import type React from "react";
import Link from "next/link";
import { Wallet, LayoutDashboard, BarChart3, Globe, Home, LifeBuoy, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen`}>
        {/* Sidebar (Fixed) */}
        <aside className="w-72 border-x-white bg-sky-800 backdrop-blur min-h-screen">
          <div className="flex h-16 items-center gap-2 border px-6 text-white">
            <Wallet className="h-6 w-6" />
            <span className="font-bold">Dashboard</span>
          </div>
          <div className="px-4 py-4">
            <Input placeholder="Search" className="bg-background/50 " />
          </div>
          <nav className="space-y-2 px-2">
            <Link href="/dashboard">
              <Button variant="ghost" className="w-full justify-start gap-2 text-white">
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Button>
            </Link>
            <Link href="/dashboard/leads">
              <Button variant="ghost" className="w-full justify-start gap-2 text-white">
                <BarChart3 className="h-4 w-4" />
                Leads
              </Button>
            </Link>
            <Link href="/dashboard/users">
              <Button variant="ghost" className="w-full justify-start gap-2 text-white">
                <Globe className="h-4 w-4" />
                Users
              </Button>
            </Link>
            <Link href="/dashboard/statistics">
              <Button variant="ghost" className="w-full justify-start gap-2 text-white">
                <Home className="h-4 w-4" />
                Statistics & Income
              </Button>
            </Link>
            <Link href="/dashboard/support">
              <Button variant="ghost" className="w-full justify-start gap-2 text-white">
                <LifeBuoy className="h-4 w-4" />
                Support
              </Button>
            </Link>
            <Link href="/dashboard/settings">
              <Button variant="ghost" className="w-full justify-start gap-2 text-white">
                <Settings className="h-4 w-4" />
                Settings
              </Button>
            </Link>
          </nav>
        </aside>

        {/* Dynamic Content (Changes on Button Click) */}
        <main className="flex-1 p-6 bg-white text-black">{children}</main>
      </body>
    </html>
  );
}
