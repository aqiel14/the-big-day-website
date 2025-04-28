"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { navLinks } from "@/lib/data";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("home");

  // Function to handle the intersection observer
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveLink(entry.target.id);
      }
    });
  };

  // Set up the intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Trigger when 50% of the section is visible
    });

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className="sticky top-0 w-full px-4 py-3 flex justify-between items-center  bg-[var(--background-color-primary)] z-50">
      {/* Left side: Home Icon */}
      <div className="flex items-center gap-6">
        <Image src={"/white-rose.svg"} width={24} height={24} alt="rose" />
        <Link href="/" className="text-xl font-semibold">
          THE BIG DAY
        </Link>
      </div>

      {/* Right side: Hamburger for Mobile or Navigation for Desktop */}
      <div className="flex items-center gap-4">
        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="p-2 rounded-md">
                <Menu className="w-5 h-5" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className=" max-w-none h-full rounded-none flex flex-col"
            >
              <SheetHeader className="px-6 pt-8">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetClose className="absolute top-4 right-4">
                  <span className="sr-only">Close</span>
                </SheetClose>
              </SheetHeader>
              <nav className="flex flex-col gap-6 mt-4 text-lg px-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`hover:text-primary ${
                      activeLink === link.href.substring(1)
                        ? "font-bold underline"
                        : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                {/* WIP */}
                {/* <div className="mt-6 border-t pt-4">
                  <Button variant="outline" className="w-full px-4 py-2 mb-2">
                    Login
                  </Button>
                  <Button className="w-full px-4 py-2">Register</Button>
                </div> */}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:underline text-sm ${
                activeLink === link.href.substring(1)
                  ? "font-bold underline"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Login and Register Buttons */}
        {/* WIP */}
        {/* <div className="hidden lg:flex gap-2">
          <Button variant="outline" size="sm">
            Login
          </Button>
          <Button size="sm">Register</Button>
        </div> */}
      </div>
    </header>
  );
}
