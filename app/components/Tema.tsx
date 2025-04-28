"use client";

import { themes } from "@/lib/data";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Tema() {
  return (
    <div className="px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Tema</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((theme) => (
            <motion.div
              key={theme.id}
              className="overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden ">
                <Image
                  src={theme.image}
                  alt={theme.name}
                  width={1080}
                  height={1080}
                  className="md:w-full h-full object-cover"
                />
                <CardHeader>
                  <CardTitle>{theme.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {theme.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="default" size="lg" className="animate-bounce">
            Explore More Themes
          </Button>
        </div>
      </div>
    </div>
  );
}
