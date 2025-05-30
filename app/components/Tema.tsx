"use client";

import { themes } from "@/lib/data";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Tema() {
  return (
    <div className="px-4 py-12 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Tema</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((theme, index) => (
            <motion.div
              key={theme.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className="overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <Card className="relative group h-full py-0">
                {/* Green Overlay */}

                {/* Image and Content */}
                <CardHeader className="relative">
                  {/* <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" /> */}

                  <Image
                    src={theme.image}
                    alt={theme.name}
                    width={1080}
                    height={1080}
                    className="md:w-full h-full object-cover"
                  />
                  <CardTitle className="mt-4">{theme.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {theme.description}
                  </p>
                </CardContent>

                {/* DEMO Button */}
                {theme.description !== "" && (
                  <div className="absolute inset-0 flex items-start justify-end opacity-0 transition-opacity duration-300 hover:opacity-100 z-20">
                    {theme.url ? (
                      <Link href={theme.url}>
                        <Button variant="link" size="lg">
                          Lihat Desain
                        </Button>
                      </Link>
                    ) : (
                      <Button variant="link" size="lg">
                        Lihat Desain
                      </Button>
                    )}
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* <div className="mt-8 text-center">
          <Button variant="default" size="lg" className="animate-bounce">
            Explore More Themes
          </Button>
        </div> */}
      </div>
    </div>
  );
}
