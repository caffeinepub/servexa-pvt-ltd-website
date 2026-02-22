import { useState } from 'react';

const galleryItems = [
  {
    before: '/assets/generated/gallery-before-1.dim_600x400.png',
    after: '/assets/generated/gallery-after-1.dim_600x400.png',
    title: 'Appliance Repair',
    description: 'Refrigerator cooling issue resolved',
  },
  {
    before: '/assets/generated/gallery-before-2.dim_600x400.png',
    after: '/assets/generated/gallery-after-2.dim_600x400.png',
    title: 'Plumbing Service',
    description: 'Leaking pipe fixed and fittings replaced',
  },
];

export default function BeforeAfterGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-gold-accent">Work</span>
          </h2>
          <p className="text-xl text-white/80">See the quality of our service</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-3xl backdrop-blur-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-white/80 mb-6">{item.description}</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="relative group">
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-semibold z-10">
                    Before
                  </div>
                  <img
                    src={item.before}
                    alt={`Before ${item.title}`}
                    className="w-full h-48 object-cover rounded-xl border-2 border-white/20 group-hover:border-gold-accent/50 transition-all duration-300"
                  />
                </div>
                <div className="relative group">
                  <div className="absolute top-2 left-2 bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-semibold z-10">
                    After
                  </div>
                  <img
                    src={item.after}
                    alt={`After ${item.title}`}
                    className="w-full h-48 object-cover rounded-xl border-2 border-white/20 group-hover:border-gold-accent/50 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
