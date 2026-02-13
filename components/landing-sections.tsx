"use client"

import Image from "next/image"
import { Check, X, BarChart3, MessageSquare, GraduationCap, Radio, Trophy, Youtube, Instagram } from "lucide-react"

// --- Icons Map ---
// Usaremos Lucide icons en lugar de emojis donde sea posible para un look más pro, 
// o mantendremos emojis si el usuario prefiere, pero Lucide es más "shadcn".
// Original usaba emojis en features.

export function ProblemSection() {
    return (
        <section className="py-24 opacity-100 transition-all duration-700">
            <div className="bg-white/[0.02] rounded-[40px] mx-4 md:mx-auto max-w-[1100px] p-12 text-center border border-white/5">
                <h2 className="font-poppins font-bold text-[2.5rem] mb-6">Nadie nos enseñó cuánto cuesta vivir</h2>
                <div className="mb-8 flex justify-center">
                    <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                        <img
                            src="https://res.cloudinary.com/db7fnd2u9/image/upload/v1771009495/Reinterpreta_y_estiliza_elemen_Nano_Banana_53103_1_ga1hhl.jpg"
                            alt="Poster La Mesa Financiera"
                            className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-500"
                        />
                    </div>
                </div>
                <p className="text-xl text-[#A0A0A8] mb-4">Nos dijeron: <strong className="text-[#4d65ff] font-semibold">"Estudia, trabaja, ahorra."</strong></p>
                <p className="text-xl text-[#A0A0A8] mb-8 max-w-3xl mx-auto">
                    Pero nadie nos explicó cuánto cuesta <strong className="text-[#4d65ff] font-semibold">mantener un carro</strong>, cuánto se va en <strong className="text-[#4d65ff] font-semibold">una relación a distancia</strong>, o qué pasa cuando <strong className="text-[#4d65ff] font-semibold">tienes hijos</strong> y el sueldo no crece al mismo ritmo.
                </p>
                <div className="mt-8">
                    <p className="text-xl text-[#A0A0A8]">
                        El problema no es que ganes poco. El problema es que <strong className="text-[#4d65ff] font-semibold">nadie te dice cuánto cuestan las decisiones que tomas todos los días.</strong>
                    </p>
                </div>
            </div>
        </section>
    )
}

import { EvervaultCard } from "@/components/ui/evervault-card" // Remove unused import if deleting usage, but user might revert. Keeping for now or removing? Removing to be clean.

export function SolutionSection() {
    return (
        <section className="py-24 container mx-auto px-6 max-w-[1100px]">
            <div className="text-center mb-10">
                <h2 className="font-poppins font-bold text-[2.5rem] mb-6">¿Qué es La Mesa Financiera?</h2>
                <p className="text-xl text-[#A0A0A8] max-w-3xl mx-auto">
                    La Mesa Financiera es una <strong className="text-[#4d65ff] font-semibold">comunidad gratuita en Discord</strong> donde hacemos lo que nadie hace: <strong className="text-[#4d65ff] font-semibold">Sentarnos a hacer cuentas de la vida real.</strong>
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                {/* Yes Card - Simplified with Green Border */}
                <div className="p-10 rounded-3xl bg-[#11121A] border-4 border-[#24CC7E] relative overflow-hidden shadow-[0_0_30px_rgba(36,204,126,0.1)]">
                    <h3 className="text-2xl font-bold mb-2 flex items-center gap-2 text-white">
                        <span className="text-[#24CC7E]">✓</span> Esto SÍ es
                    </h3>
                    <ul className="space-y-3 text-left">
                        {[
                            "Analizar cuánto cuesta realmente tu estilo de vida",
                            "Comparar decisiones con números en Excel",
                            "Debatir con argumentos, no con opiniones",
                            "Aprender finanzas aplicadas a tu día a día"
                        ].map((item, i) => (
                            <li key={i} className="pl-6 relative text-[#A0A0A8]">
                                <Check className="absolute left-0 top-1 w-4 h-4 text-[#24CC7E]" />
                                <span dangerouslySetInnerHTML={{ __html: item.replace(/estilo de vida|números en Excel|Debatir con argumentos|finanzas aplicadas/g, '<strong>$&</strong>') }} />
                            </li>
                        ))}
                    </ul>
                </div>

                {/* No Card */}
                <div className="p-10 rounded-3xl bg-[#11121A] border border-white/5 border-t-4 border-t-[#FF4D4D] h-full">
                    <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                        <span className="text-[#FF4D4D]">✗</span> Esto NO es
                    </h3>
                    <ul className="space-y-3 text-left">
                        {[
                            "No es motivación de Instagram",
                            "No es un gurú prometiéndote riqueza",
                            "No es 'invierte en cripto y serás libre'",
                            "No es contenido genérico que no dice nada"
                        ].map((item, i) => (
                            <li key={i} className="pl-6 relative text-[#A0A0A8]">
                                <X className="absolute left-0 top-1 w-4 h-4 text-[#FF4D4D]" />
                                <span dangerouslySetInnerHTML={{ __html: item.replace(/'invierte en cripto y serás libre'/g, '<strong>$&</strong>') }} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export function FeaturesSection() {
    const features = [
        { icon: BarChart3, title: "Excels prácticos", desc: "Relaciones, gastos, estilo de vida, hijos, tarjetas. Todo con números reales que puedes usar hoy." },
        { icon: MessageSquare, title: "Foros de discusión con argumentos", desc: "Nada de “yo creo”. Aquí se habla con datos." },
        { icon: GraduationCap, title: "Clases en vivo", desc: "Cada martes a las 8:00 PM (hora CDMX). Temas reales, explicados claro." },
        { icon: Radio, title: "Debates en Discord", desc: "Cada jueves a las 8:00 PM. Preguntas en vivo, respuestas con cuentas." },
        { icon: Trophy, title: "Sistema de participación", desc: "Creces según lo que aportas. Los miembros activos tienen prioridad." }
    ]

    return (
        <section className="py-24 container mx-auto px-6 max-w-[1100px]">
            <h2 className="font-poppins font-bold text-[2.5rem] mb-12 text-center">¿Qué encuentras dentro?</h2>
            {/* Centered grid items */}
            <div className="flex flex-wrap justify-center gap-5">
                {features.map((f, i) => (
                    <div key={i} className="bg-[#11121A] p-8 rounded-[20px] hover:bg-[#181924] transition-colors duration-300 border border-white/5 w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] min-w-[300px]">
                        <f.icon className="w-8 h-8 mb-4 text-[#4d65ff]" />
                        <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                        <p className="text-[#A0A0A8]">{f.desc}</p>
                    </div>
                ))}
            </div>
            <div className="text-center mt-10">
                <a
                    href="https://discord.gg/SQ6quQ2jCg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-[1.1rem] font-bold text-[#05060F] bg-[#24CC7E] hover:scale-[1.02] hover:brightness-110 transition-all duration-200"
                >
                    👉 Quiero entrar a La Mesa Financiera
                </a>
            </div>
        </section>
    )
}

export function WhoIsItSection() {
    return (
        <section className="py-24 container mx-auto px-6 max-w-[1100px]">
            <h2 className="font-poppins font-bold text-[2.5rem] mb-10 text-center">¿Esto es para ti?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Yes */}
                <div className="p-10 rounded-3xl bg-[#11121A] border border-white/5 border-t-4 border-t-[#24CC7E]">
                    <h3 className="text-2xl font-bold mb-5">Es para ti si:</h3>
                    <ul className="space-y-3">
                        {[
                            "Quieres entender tu dinero de verdad",
                            "Te interesa saber cuánto cuesta tu estilo de vida",
                            "Te gusta aprender con números, no con frases bonitas",
                            "Buscas una comunidad que hable con datos",
                            "Estás cansado del humo financiero en redes"
                        ].map((item, i) => (
                            <li key={i} className="pl-6 relative text-[#A0A0A8]">
                                <Check className="absolute left-0 top-1 w-4 h-4 text-[#24CC7E]" />
                                <span dangerouslySetInnerHTML={{ __html: item.replace(/entender tu dinero de verdad|estilo de vida|aprender con números|comunidad que hable con datos|humo financiero en redes/g, '<strong>$&</strong>') }} />
                            </li>
                        ))}
                    </ul>
                </div>

                {/* No */}
                <div className="p-10 rounded-3xl bg-[#11121A] border border-white/5 border-t-4 border-t-[#FF4D4D]">
                    <h3 className="text-2xl font-bold mb-5">No es para ti si:</h3>
                    <ul className="space-y-3">
                        {[
                            "Buscas dinero rápido o fácil",
                            "Solo quieres motivación, no acción",
                            "No quieres pensar ni cuestionar",
                            "Esperas que alguien te diga qué hacer sin explicarte por qué",
                            "No estás dispuesto a participar"
                        ].map((item, i) => (
                            <li key={i} className="pl-6 relative text-[#A0A0A8]">
                                <X className="absolute left-0 top-1 w-4 h-4 text-[#FF4D4D]" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export function AboutSection() {
    return (
        <section className="py-24 container mx-auto px-6 max-w-[1100px]">
            <div className="flex flex-col md:flex-row items-center gap-16">
                <div className="flex-1 min-w-[300px]">
                    {/* Imagen de Luis Pa actualizada */}
                    <img
                        src="https://res.cloudinary.com/db7fnd2u9/image/upload/v1771009500/redonda_2_vfhhpm.png"
                        alt="Luis Pa"
                        className="w-full max-w-[400px] mx-auto rounded-full border-4 border-[#4d65ff] shadow-[0_0_30px_rgba(77,101,255,0.3)]"
                    />
                </div>
                <div className="flex-[1.5] min-w-[300px]">
                    <h2 className="font-poppins font-bold text-[2.5rem] mb-6">Quién está detrás de esto</h2>
                    <p className="text-xl text-[#A0A0A8] mb-2 leading-relaxed">
                        Soy <strong className="text-[#4d65ff] font-semibold">Luis Pa</strong>. Estudio <strong className="text-[#4d65ff] font-semibold">finanzas</strong> y creo contenido sobre el <strong className="text-[#4d65ff] font-semibold">costo real de la vida en México.</strong>
                    </p>
                    <p className="text-xl text-[#A0A0A8] mb-2 leading-relaxed">
                        No soy gurú. No prometo riqueza. Hago <strong className="text-[#4d65ff] font-semibold">Excels</strong>, hago <strong className="text-[#4d65ff] font-semibold">cuentas</strong> y comparto lo que aprendo.
                    </p>
                    <p className="text-xl text-[#A0A0A8] mb-8 leading-relaxed">
                        Creé <strong className="text-[#4d65ff] font-semibold">La Mesa Financiera</strong> porque me di cuenta de que el contenido de finanzas en México necesita menos motivación y más <strong className="text-[#4d65ff] font-semibold">números.</strong>
                    </p>

                    <div className="flex gap-4 flex-wrap">
                        <a href="https://youtube.com/@finanzas_con_luispa" target="_blank" className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full hover:bg-white/10 transition-colors">
                            <Youtube className="w-5 h-5" /> YouTube
                        </a>
                        <a href="https://www.instagram.com/finanzas.con.luispa/" target="_blank" className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full hover:bg-white/10 transition-colors">
                            <Instagram className="w-5 h-5" /> Instagram
                        </a>
                        {/* TikTok icon fallback to youtube/generic simply or text */}
                        <a href="https://www.tiktok.com/@finanzas_con_luis_pa" target="_blank" className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full hover:bg-white/10 transition-colors">
                            <span>🎵</span> TikTok
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function FinalCTA() {
    return (
        <section className="py-24 text-center bg-gradient-to-b from-[#05060F] to-[#0A0C1F]">
            <div className="container mx-auto px-6 max-w-[1100px]">
                <h2 className="font-poppins font-bold text-[2.5rem] mb-6">Deja de adivinar. Empieza a hacer cuentas.</h2>
                <p className="text-xl text-[#A0A0A8] mb-8 max-w-2xl mx-auto">
                    Si quieres dejar de depender de lo que dicen los demás sobre el dinero y <strong className="text-[#4d65ff] font-semibold">empezar a entenderlo con tus propios números</strong>, este es tu lugar.
                </p>
                <p className="text-xl mb-10">
                    <strong className="text-[#4d65ff] font-semibold">La Mesa Financiera</strong> es gratis. Está en <strong className="text-[#4d65ff] font-semibold">Discord</strong>. Y está esperando que llegues a hacer cuentas.
                </p>

                <a
                    href="https://discord.gg/SQ6quQ2jCg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-12 py-6 rounded-xl text-[1.3rem] font-bold text-[#05060F] bg-[#24CC7E] hover:scale-[1.02] hover:brightness-110 transition-all duration-200"
                >
                    👉 Únete a La Mesa Financiera
                </a>

                <p className="mt-16 text-sm text-[#A0A0A8]">© 2026 La Mesa Financiera — Aquí se hacen cuentas.</p>
            </div>
        </section>
    )
}
