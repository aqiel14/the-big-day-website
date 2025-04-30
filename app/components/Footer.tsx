"use client";

import { navLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="w-full py-8 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col md:items-center justify-between lg:flex-row">
        {/* Navigation Links in Footer */}
        <div className="flex flex-col gap-4 mb-8 lg:mb-0 lg:flex-row">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Social Media Links and Contact Info */}
        <div className="flex flex-col gap-6 md:items-center lg:items-end">
          <div className="flex gap-4">
            <Link href="https://wa.link/q4gia5" target="_blank">
              <Phone className="w-6 h-6 text-primary transition-colors" />
            </Link>
            <Link href="mailto:aqiel1414@gmail.com" target="_blank">
              <Mail className="w-6 h-6 text-primary transition-colors" />
            </Link>
          </div>

          <Separator className="my-6" />

          {/* Disclaimer */}
          <div className="text-sm">
            <p>Made with ❤️ by The Big Day 2025</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
