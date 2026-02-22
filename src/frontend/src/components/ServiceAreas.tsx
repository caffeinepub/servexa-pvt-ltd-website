import { MapPin } from 'lucide-react';

export default function ServiceAreas() {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="glass-card p-12 rounded-3xl backdrop-blur-lg bg-white/5 border border-white/10">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Service <span className="text-gold-accent">Areas</span>
            </h2>
            <p className="text-xl text-white/80">We proudly serve the following areas</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center p-8 rounded-2xl bg-gold-accent/10 border border-gold-accent/30 hover:bg-gold-accent/20 transition-all duration-300">
              <MapPin className="w-8 h-8 text-gold-accent mr-4" />
              <span className="text-3xl font-bold text-white">Kolkata</span>
            </div>
            <div className="flex items-center justify-center p-8 rounded-2xl bg-gold-accent/10 border border-gold-accent/30 hover:bg-gold-accent/20 transition-all duration-300">
              <MapPin className="w-8 h-8 text-gold-accent mr-4" />
              <span className="text-3xl font-bold text-white">Howrah</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
