'use client'

import { motion } from "motion/react"
import { ChevronRightIcon } from "lucide-react"
import TiltedImage from "../components/TiltImage"

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden flex flex-col items-center px-4 md:px-16 lg:px-24 xl:px-32 pt-44">

            {/* Glow behind image */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 size-[500px] 
          bg-gradient-to-tr from-red-500 via-brown-600 to-grey-700 
          blur-[220px] opacity-70" />
            </div>

            {/* Badge */}
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mb-6"
            >
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm text-pink-200">
                    New drop available
                    <ChevronRightIcon size={14} />
                </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 220 }}
                className="text-5xl md:text-6xl font-semibold text-center max-w-3xl"
            >
                Scents that leave a{" "}
                <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                    lasting impression
                </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="mt-6 max-w-lg text-center text-slate-300"
            >
                Crafted fragrances for those who don’t blend in. Clean. Bold. Unforgettable.
            </motion.p>

            {/* CTA */}
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="mt-10"
            >
                <button className="rounded-full bg-purple-600 hover:bg-red-700 transition px-8 h-12 text-white text-sm font-medium">
                    Explore fragrances
                </button>
            </motion.div>

            {/* Product image area */}
            <img src="public/assets/roja1.png" alt="jpg" />
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring" }}
                className="relative mt-20"
            >

                <div className="absolute inset-0 -z-10 flex items-center justify-center">
                    <div className="size-[420px] rounded-full 
            bg-gradient-to-tr from-red-500 to-stone-600 
            blur-[120px] opacity-80" />
                </div>

                <TiltedImage />
            </motion.div>
        </section>
    )
}
