"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { hargaList } from "@/lib/data";
import Link from "next/link";

export default function Harga() {
  return (
    <section id="harga" className="px-4 py-12 lg:px-16">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-2xl font-bold">Paket Harga</h2>
        <p className="text-muted-foreground mt-2">
          Pilih paket yang sesuai dengan kebutuhanmu
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {hargaList.map((paket, index) => (
          <motion.div
            key={paket.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="flex flex-col justify-between h-full bg-[var(--background-color-primary)]">
              <CardHeader>
                <CardTitle className="text-lg">{paket.title}</CardTitle>
                <p className="text-xl font-bold mt-2">{paket.price}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {paket.description}
                </p>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <ul className="space-y-2 text-sm">
                  {paket.features.map((fitur, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-1" />
                      <span>{fitur}</span>
                    </li>
                  ))}
                </ul>
                <Link href={paket.link} target="_blank">
                  <Button className="mt-4 w-full transition-all duration-300 hover:bg-primary/90 hover:scale-105">
                    Pilih Paket
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
