"use client";
import {
  CheckCircle,
  Sparkles,
  LayoutGrid,
  Clock,
  PenTool,
  Shield,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: "easeOut",
    },
  }),
};

const features = [
  {
    title: "Unik & Elegan",
    description: "Desain undangan yang tak terlupakan dan elegan.",
    icon: <Sparkles className="text-primary w-8 h-8" />,
  },
  {
    title: "Responsif",
    description: "Tampilan optimal di semua perangkat.",
    icon: <LayoutGrid className="text-primary w-8 h-8" />,
  },
  {
    title: "Cepat & Mudah",
    description: "Proses pembuatan dan pengiriman cepat.",
    icon: <Clock className="text-primary w-8 h-8" />,
  },
  {
    title: "Custom Sesuai Keinginan",
    description: "Sesuaikan undangan dengan cerita cinta Anda.",
    icon: <PenTool className="text-primary w-8 h-8" />,
  },
  {
    title: "Aman & Terpercaya",
    description: "Privasi dan keamanan data terjaga.",
    icon: <Shield className="text-primary w-8 h-8" />,
  },
  {
    title: "Support Terbaik",
    description: "Kami siap membantu Anda kapan saja.",
    icon: <CheckCircle className="text-primary w-8 h-8" />,
  },
];

export default function Features() {
  return (
    <div className="px-4 py-12 bg-secondary">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Kenapa Memilih Kami?
        </h2>
        <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
          Kami hadir untuk membantu Anda membuat undangan digital yang tak hanya
          cantik, tetapi juga praktis dan mudah dibagikan.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
            >
              <Card className="h-full shadow-lg cursor-default transition-transform hover:shadow-xl hover:scale-[1.02]">
                <CardHeader className="flex gap-4">
                  {feature.icon}
                  <CardTitle className="text-lg font-semibold whitespace-nowrap">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-start">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
