"use client"

import { DotScreenShader } from "@/components/ui/dot-shader-background"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
    return (
        <section className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center text-center pt-[80px] pb-[80px]">
            {/* Fondo animado cubriendo todo */}
            <div className="absolute inset-0 z-0">
                <DotScreenShader />
            </div>

            {/* Gradiente de transición inferior */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#05060F] to-transparent z-0 pointer-events-none" />

            {/* Contenido (z-10 para estar sobre el canvas) */}
            <div className="relative z-10 container mx-auto px-6 max-w-[1100px] flex flex-col items-center">

                {/* Logo */}
                <div className="mb-8 relative w-32 h-32 md:w-40 md:h-40">
                    <img
                        src="https://res.cloudinary.com/db7fnd2u9/image/upload/v1771009487/Copia_de_DESMINTIENDO_BROKERS_48_laadkj.png"
                        alt="La Mesa Financiera Logo"
                        className="object-contain w-full h-full drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                    />
                </div>

                {/* Banner dorado */}
                <div className="inline-block mb-[30px] px-4 py-4 rounded-xl border border-[#D4AF37] bg-[rgba(212,175,55,0.1)] text-white font-medium backdrop-blur-sm">
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
