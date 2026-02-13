"use client"

import { ChevronDown } from "lucide-react"

export function HeroSection() {
    return (
        <section className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center text-center pt-[80px] pb-[80px] bg-gradient-to-b from-[#05060F] to-[#121212]">

            {/* Contenido */}
            <div className="relative z-10 container mx-auto px-6 max-w-[1100px] flex flex-col items-center">

                {/* Banner dorado como frase sutil */}
                <div className="mb-6 text-[#D4AF37] font-medium text-lg tracking-wide uppercase opacity-90">
                    ✨ Meritocracia: creces según lo que das
                </div>

                {/* Título */}
                <h1 className="font-poppins font-bold text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.1] mb-8 text-white drop-shadow-xl">
                    La comunidad donde se hacen <strong className="text-[#4d65ff] font-semibold">cuentas de la vida real</strong>
                </h1>

                {/* Descripción */}
                <p className="text-[1.25rem] text-[#A0A0A8] max-w-[700px] mx-auto mb-12 leading-relaxed font-inter drop-shadow-md">
                    Finanzas, decisiones cotidianas y dinero sin humo. Somos La Mesa Financiera: una <strong className="text-[#4d65ff] font-semibold">comunidad en Discord</strong> donde analizamos el <strong className="text-[#4d65ff] font-semibold">costo real de la vida</strong> con números, no con promesas.
                </p>

                {/* Botón CTA */}
                <a
                    href="https://discord.gg/SQ6quQ2jCg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-10 py-5 rounded-xl text-[1.2rem] font-bold text-[#05060F] bg-[#24CC7E] hover:scale-[1.02] hover:brightness-110 transition-all duration-200 shadow-lg shadow-[#24CC7E]/20"
                >
                    👉 Únete a La Mesa Financiera
                </a>
            </div>

            {/* Scroll indicator opcional */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 z-10">
                <ChevronDown className="w-8 h-8 text-white" />
            </div>
        </section>
    )
}
