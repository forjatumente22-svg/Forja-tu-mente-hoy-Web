import React, { useState } from 'react';
import { ShoppingBag, Download, Star } from 'lucide-react';

const Store = () => {
  const [filter, setFilter] = useState('all');

  const products = [
    { id: 1, name: "Mi Primer Libro: El Martillo", price: "24.99€", type: "book", image: "https://via.placeholder.com/300x400/111/333?text=LIBRO", bestSeller: true },
    { id: 2, name: "Plantilla Notion: Segundo Cerebro", price: "0€", type: "free", image: "https://via.placeholder.com/300x400/111/333?text=NOTION" },
    { id: 3, name: "Pack Meditaciones Estoicas (MP3)", price: "14.99€", type: "digital", image: "https://via.placeholder.com/300x400/111/333?text=AUDIO" },
    { id: 4, name: "Journal de Gratitud (PDF)", price: "9.99€", type: "digital", image: "https://via.placeholder.com/300x400/111/333?text=PDF" },
    { id: 5, name: "Ebook: 72h Anti-Procrastinación", price: "0€", type: "free", image: "https://via.placeholder.com/300x400/111/333?text=EBOOK" },
  ];

  const filteredProducts = filter === 'all' ? products : products.filter(p => p.type === filter || (filter === 'free' && p.price === "0€"));

  return (
    <div className="pt-24 min-h-screen px-6 max-w-7xl mx-auto pb-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-white uppercase tracking-tighter mb-4">La Armería</h1>
        <p className="text-gray-400">Herramientas digitales para potenciar tu rendimiento.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {['all', 'book', 'digital', 'free'].map(f => (
          <button 
            key={f}
            onClick={() => setFilter(f)}
            className={`px-6 py-2 text-xs font-bold uppercase tracking-widest border ${filter === f ? 'bg-[#ff4400] text-black border-[#ff4400]' : 'bg-transparent text-gray-400 border-[#333] hover:border-white'}`}
          >
            {f === 'all' ? 'Todo' : f === 'free' ? 'Gratis' : f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group">
            <div className="bg-[#111] aspect-[3/4] mb-4 relative overflow-hidden border border-[#222] group-hover:border-[#ff4400] transition-all">
               {product.bestSeller && <div className="absolute top-2 right-2 bg-[#ff4400] text-black text-[10px] font-bold px-2 py-1 uppercase">Best Seller</div>}
               <div className="w-full h-full bg-[#1a1a1a] flex items-center justify-center text-gray-700 font-black text-2xl uppercase tracking-widest">
                  {product.type}
               </div>
               {/* Overlay */}
               <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <button className="bg-white text-black font-bold px-6 py-3 uppercase text-xs tracking-widest hover:bg-[#ff4400]">Ver Detalles</button>
               </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-white font-bold uppercase text-sm mb-1 group-hover:text-[#ff4400] transition-colors">{product.name}</h3>
                <p className="text-gray-500 text-xs capitalize">{product.type}</p>
              </div>
              <span className={`font-mono font-bold ${product.price === "0€" ? 'text-[#ff4400]' : 'text-white'}`}>{product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;