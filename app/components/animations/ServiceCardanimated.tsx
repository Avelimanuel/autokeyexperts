"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  img: string;
  title: string;
  desc: string;
}

export default function ServiceCardAnimated({ img, title, desc }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden"
    >
      <Image
        src={img}
        alt={title.toLowerCase()}
        width={600}
        height={400}
        className="w-full h-[250px] object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p>{desc}</p>
      </div>
    </motion.div>
  );
}
