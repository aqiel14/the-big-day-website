"use client";

import { navLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="w-full bg-background py-8 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-between lg:flex-row">
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
        <div className="flex flex-col gap-6 items-center lg:items-end">
          <div className="flex gap-4">
            <Link href="https://instagram.com" target="_blank">
              <Mail className="w-6 h-6 text-primary hover:text-primary-foreground transition-colors" />
            </Link>
            <Link href="https://wa.me" target="_blank">
              <Mail className="w-6 h-6 text-primary hover:text-primary-foreground transition-colors" />
            </Link>
            <Link href="https://facebook.com" target="_blank">
              <Mail className="w-6 h-6 text-primary hover:text-primary-foreground transition-colors" />
            </Link>
            <Link href="https://tiktok.com" target="_blank">
              <Mail className="w-6 h-6 text-primary hover:text-primary-foreground transition-colors" />
            </Link>
            <Link href="mailto:your-email@example.com" target="_blank">
              <Mail className="w-6 h-6 text-primary hover:text-primary-foreground transition-colors" />
            </Link>
          </div>

          <Separator className="my-6" />

          {/* Email Contact */}
          <div className="text-sm">
            <p>
              For inquiries, contact us via email:{" "}
              <a
                href="mailto:your-email@example.com"
                className="text-primary hover:underline"
              >
                your-email@example.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
