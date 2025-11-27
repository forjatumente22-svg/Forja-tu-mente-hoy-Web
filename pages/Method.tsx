import React from 'react';
import { Hammer, CheckCircle, ArrowRight, Shield, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Method = () => {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="px-6 py-20 max-w-5xl mx-auto text-center">
        <div className="inline-block p-2 border border-[#ff4400] rounded-full mb-6">
          <Hammer className="text-[#ff4400] w-6 h-6 animate-pulse" />
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8">
          Método <span className="text-[#ff4400]">Forja</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
          Un programa de 90 días diseñado para hombres que quieren dejar de ser espectadores de su propia vida y convertirse en protagonistas. Sin excusas. Sin piedad.
        </p>
        <a href="#apply" className="bg-[#ff4400] text-black font-bold px-10 py-4 text-lg uppercase tracking-widest hover:bg-white transition-colors inline-flex items-center gap-3">
          Aplicar al Programa <ArrowRight />
        </a>
      </section>

      {/* The Pain */}
      <section className="bg-[#0a0a0a] py-20 px-6 border-y border-[#222]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center uppercase">¿Te suena familiar?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border-l-2 border-[#333] hover:border-[#ff4400] transition-colors">
              <p className="text-gray-400">Te levantas cansado, sin un propósito claro, repitiendo los mismos errores día tras día.</p>
            </div>
            <div className="p-6 border-l-2 border-[#333] hover:border-[#ff4400] transition-colors">
              <p className="text-gray-400">Empiezas proyectos con emoción pero los abandonas cuando la motivación desaparece.</p>
            </div>
            <div className="p-6 border-l-2 border-[#333] hover:border-[#ff4400] transition-colors">
              <p className="text-gray-400">Sabes que tienes potencial, pero sientes que estás desperdiciando tus mejores años.</p>
            </div>
            <div className="p-6 border-l-2 border-[#333] hover:border-[#ff4400] transition-colors">
              <p className="text-gray-400">Consumes contenido de desarrollo personal pero no tomas acción real.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution (Fases) */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-16 text-center uppercase tracking-widest">Las 3 Fases del Acero</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-[#111] p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-20 bg-[#ff4400] opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>
            <h3 className="text-5xl font-black text-[#222] group-hover:text-[#ff4400] transition-colors mb-4">01</h3>
            <h4 className="text-xl font-bold text-white mb-4 uppercase">Destrucción</h4>
            <p className="text-gray-500">Eliminamos hábitos tóxicos, creencias limitantes y el entorno que te frena. Limpiamos el terreno antes de construir.</p>
          </div>
          <div className="bg-[#111] p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-20 bg-[#ff4400] opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>
            <h3 className="text-5xl font-black text-[#222] group-hover:text-[#ff4400] transition-colors mb-4">02</h3>
            <h4 className="text-xl font-bold text-white mb-4 uppercase">Fundición</h4>
            <p className="text-gray-500">Implantamos nuevos sistemas operativos mentales. Estoicismo práctico, gestión del tiempo y rutinas de alto rendimiento.</p>
          </div>
          <div className="bg-[#111] p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-20 bg-[#ff4400] opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>
            <h3 className="text-5xl font-black text-[#222] group-hover:text-[#ff4400] transition-colors mb-4">03</h3>
            <h4 className="text-xl font-bold text-white mb-4 uppercase">Forja</h4>
            <p className="text-gray-500">Consolidación. Te sometemos a presión controlada para asegurar que los cambios sean permanentes. Te conviertes en un arma.</p>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="apply" className="bg-[#ff4400] py-20 px-6 text-center text-black">
        <h2 className="text-4xl font-black uppercase mb-6 tracking-tight">Solo 5 Plazas Este Mes</h2>
        <p className="text-xl font-bold mb-8 max-w-2xl mx-auto">
          No acepto a cualquiera. Si no estás dispuesto a invertir dinero y sudor en ti mismo, no pierdas mi tiempo.
        </p>
        <Link to="/contacto" className="bg-black text-white font-bold px-12 py-5 text-lg uppercase tracking-widest hover:bg-white hover:text-black transition-all inline-block shadow-xl">
          Agendar Entrevista
        </Link>
      </section>
    </div>
  );
};

export default Method;