'use client'
import { motion } from "motion/react"

export default function CTASection() {
    return (
        <motion.section
            className="relative max-w-4xl mt-40 mx-auto px-8 py-16 rounded-2xl 
      bg-gradient-to-b from-red-900 via-purple-900 to-neutral-950 
      overflow-hidden"
            initial={{ y: 120, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 260, damping: 60 }}
        >

            {/* Subtle glow
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          size-[420px] rounded-full 
          bg-gradient-to-r from-red-600/30 to-stone-700/30 
          blur-[120px]" />
            </div> */}

            <div className="flex flex-col md:flex-row items-center justify-between gap-10 text-left">
                <div>
                    <motion.h2
                        className="text-4xl md:text-5xl font-semibold 
            bg-gradient-to-r from-blue to-black-900 bg-clip-text"
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 220 }}
                    >
                        Find your signature scent
                    </motion.h2>

                    <motion.p
                        className="mt-4 max-w-md text-neutral-300"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Crafted fragrances designed to stay with you, long after you leave.
                    </motion.p>
                </div>

                <motion.button
                    className="rounded-full bg-white text-neutral-900 
          px-10 h-12 text-sm font-medium 
          hover:bg-neutral-200 transition"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    Explore fragrances
                </motion.button>
            </div>
        </motion.section>
    )
}
