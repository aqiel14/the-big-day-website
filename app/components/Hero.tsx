"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-4 text-center">
      {/* SVG Foreground Graphic */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-full h-96 sm:w-[28rem] sm:h-[28rem] md:w-[40rem] md:h-[40rem] mb-8"
      >
        <Image
          src="/Hero.svg"
          alt="Wedding Foreground"
          layout="fill"
          objectFit="contain"
          className="opacity-100"
        />
      </motion.div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        className="flex flex-col gap-8"
      >
        <div className="flex flex-col items-start text-7xl gap-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            The
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Big
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            Day
          </motion.h1>
        </div>

        <p className="text-lg sm:text-xl max-w-md text-start">
          Undangan Digital Kustom untuk Hari Istimewa Anda. Wujudkan impian
          pernikahan Anda dengan desain yang dipersonalisasi.
        </p>

        <Link className="flex cursor-pointer" href="#tema">
          <Button
            size="lg"
            className="h-14 text-lg cursor-pointer transition-all duration-300 hover:bg-primary/90 hover:scale-105"
          >
            Lihat Desain Kami
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
