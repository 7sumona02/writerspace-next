import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"

export default function Navbar() {
  return (
    <header className="flex h-16 w-full items-center justify-between px-4 md:px-6">
      <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <img src='/Logo.svg' alt='Logo' className="w-40 invert" />
      </Link>
      <nav className="hidden space-x-6 md:flex">
        <Link href="/" className="text-sm font-medium transition-colors hover:text-primary" prefetch={false}>
          About
        </Link>
        <Link href="/" className="text-sm font-medium transition-colors hover:text-primary" prefetch={false}>
          Contact
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="grid gap-6 p-6">
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
              <img src='/Logo.svg' alt='Logo' className="w-40 invert" />
            </Link>
            <nav className="grid gap-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
                prefetch={false}
              >
                About
              </Link>
              <Link
                href="/"
                className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
                prefetch={false}
              >
                Contact
              </Link>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}
