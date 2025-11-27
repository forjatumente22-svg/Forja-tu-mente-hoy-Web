import React from 'react';
import { PlayCircle, Lock, Clock, Star } from 'lucide-react';

const Academy = () => {
  const courses = [
    {
      title: "Bootcamp: Mentalidad de Acero",
      modules: 12,
      duration: "6 Semanas",
      price: "197€",
      image: "bg-gradient-to-br from-[#222] to-black",
      tag: "Best Seller"
    },
    {
      title: "Estoicismo Moderno",
      modules: 5,
      duration: "4 Horas",
      price: "47€",
      image: "bg-[#111]",
    },
    {
      title: "Productividad Extrema",
      modules: 8,
      duration: "6 Horas",
      price: "97€",
      image: "bg-[#0a0a0a]",
    }
  ];

  return (
    <div className="pt-24 min-h-screen px-6 max-w-7xl mx-auto pb-20">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-8">
        <div>
          <h1 className="text-4xl font-black text-white uppercase tracking-tighter mb-2">Aula Digital</h1>
          <p className="text-gray-400">Acceso vitalicio a tu entrenamiento.</p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="text-[#ff4400] font-bold text-sm uppercase tracking-widest border border-[#ff4400] px-6 py-2 hover:bg-[#ff4400] hover:text-black transition-colors">
            Acceder al Campus
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, idx) => (
          <div key={idx} className="bg-[#111] border border-[#222] group hover:border-[#ff4400] transition-all overflow-hidden">
            <div className={`h-48 ${course.image} relative flex items-center justify-center`}>
              {course.tag && (
                <div className="absolute top-4 right-4 bg-[#ff4400] text-black text-xs font-bold px-2 py-1 uppercase">
                  {course.tag}
                </div>
              )}
              <PlayCircle className="text-white opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all" size={64} />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-4 uppercase leading-tight">{course.title}</h3>
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-6 font-mono">
                <span className="flex items-center gap-1"><Star size={12} className="text-[#ff4400]"/> {course.modules} Módulos</span>
                <span className="flex items-center gap-1"><Clock size={12} /> {course.duration}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-white">{course.price}</span>
                <button className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white uppercase tracking-wider">
                  <Lock size={14} /> Desbloquear
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Academy;