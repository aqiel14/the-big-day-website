"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-4 text-center">
      {/* SVG Foreground Graphic */}
      <div className="relative w-full h-96 sm:w-[28rem] sm:h-[28rem] md:w-[40rem] md:h-[40rem] mb-8">
        <Image
          src="/Hero.svg"
          alt="Wedding Foreground"
          layout="fill"
          objectFit="contain"
          className="opacity-100"
        />
      </div>

      {/* Hero Content */}
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-start text-7xl gap-8">
          <h1>The</h1>
          <h1>Big</h1>
          <h1>Day</h1>
        </div>
        <p className=" text-lg sm:text-xl max-w-md text-start">
          Undangan Digital Kustom untuk Hari Istimewa Anda. Wujudkan impian
          pernikahan Anda dengan desain yang dipersonalisasi.
        </p>

        <Link className="flex cursor-pointer" href="#tema">
          <Button size="lg" className="h-14 text-lg cursor-pointer">
            Lihat Desain Kami
          </Button>
        </Link>
      </div>
    </div>
  );
}
