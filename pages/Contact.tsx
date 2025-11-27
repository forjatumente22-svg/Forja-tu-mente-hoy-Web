import React from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-24 min-h-screen px-6 max-w-4xl mx-auto pb-20">
      <div className="bg-[#111] border border-[#222] p-8 md:p-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-[#ff4400]"></div>
        
        <h1 className="text-4xl font-black text-white uppercase tracking-tighter mb-8">Contacto Directo</h1>
        <p className="text-gray-400 mb-12">
          ¿Tienes preguntas sobre el Método Forja? ¿Quieres colaborar? Rellena el formulario. 
          Respondemos en menos de 24h.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <form className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Nombre</label>
              <input type="text" className="w-full bg-[#0a0a0a] border border-[#333] text-white px-4 py-3 focus:border-[#ff4400] focus:outline-none" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Email</label>
              <input type="email" className="w-full bg-[#0a0a0a] border border-[#333] text-white px-4 py-3 focus:border-[#ff4400] focus:outline-none" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Asunto</label>
              <select className="w-full bg-[#0a0a0a] border border-[#333] text-white px-4 py-3 focus:border-[#ff4400] focus:outline-none">
                <option>Interés en Mentoría (90 días)</option>
                <option>Soporte Técnico</option>
                <option>Prensa / Colaboración</option>
                <option>Otro</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Mensaje</label>
              <textarea rows={4} className="w-full bg-[#0a0a0a] border border-[#333] text-white px-4 py-3 focus:border-[#ff4400] focus:outline-none"></textarea>
            </div>
            <button className="bg-[#ff4400] text-black font-bold px-8 py-4 uppercase tracking-widest hover:bg-white transition-colors flex items-center gap-2">
              Enviar Mensaje <Send size={18} />
            </button>
          </form>

          <div className="space-y-8 border-t md:border-t-0 md:border-l border-[#222] pt-8 md:pt-0 md:pl-8">
            <div>
              <h3 className="text-white font-bold uppercase mb-2 flex items-center gap-2">
                <MapPin className="text-[#ff4400]" size={18} /> Sede
              </h3>
              <p className="text-gray-500 text-sm">Calle Aurora 5,<br/>03203 Elche, Alicante<br/>España</p>
            </div>
            <div>
              <h3 className="text-white font-bold uppercase mb-2 flex items-center gap-2">
                <Mail className="text-[#ff4400]" size={18} /> Email
              </h3>
              <p className="text-gray-500 text-sm">contacto@forjatumente.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;