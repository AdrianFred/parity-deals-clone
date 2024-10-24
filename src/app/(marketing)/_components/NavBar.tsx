import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export function NavBar() {
  return (
    <header className="flex py-6 shadow-xl fixed top-0 w-full z-10 bg-background/95">
      <nav className="flex items-center gap-10 container font-semibold">
        <Link href="/" className="mr-auto">
          <BrandLogo />
        </Link>
        <Link href="/" className="text-lg">
          Features
        </Link>
        <Link href="/" className="text-lg">
          Pricing
        </Link>
        <Link href="/" className="text-lg">
          About
        </Link>
        <span className="text-lg">
          <SignedIn>
            <Link href="/dashboard" className="text-lg">
              Dashboard
            </Link>
          </SignedIn>
          <SignedOut>
            <Link href="/login" className="text-lg">
              Login
            </Link>
          </SignedOut>
        </span>
      </nav>
    </header>
  );
}
