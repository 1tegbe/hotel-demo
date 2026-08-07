import React, { useState } from 'react';
import { Gallery as GalleryData } from '../assets/Gallerydata';

const Gallery = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="min-h-screen bg-stone-50 px-6 py-16 md:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
            Gallery
          </p>
          <h1 className="text-4xl font-semibold sm:text-5xl">Explore our spaces</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {(GalleryData?.gallery || []).map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounde shadow-sm"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={item.url}
                alt={item.alt || item.caption}
                className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div
                className={`absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-5 transition ${
                  hoveredId === item.id ? 'opacity-100' : 'opacity-80'
                }`}
              >
                <div className="text-white">
                  <p className="text-lg font-semibold">{item.caption}</p>
                  <p className="text-sm text-stone-200">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery