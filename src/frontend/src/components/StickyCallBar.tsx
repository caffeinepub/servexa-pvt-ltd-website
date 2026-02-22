import { Phone } from 'lucide-react';

export default function StickyCallBar() {
  const handleCall = () => {
    window.location.href = 'tel:9123779241';
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-navy-primary/95 backdrop-blur-lg border-t border-gold-accent/30 shadow-2xl">
      <div className="container mx-auto px-4 py-4">
        <button
          onClick={handleCall}
          className="w-full bg-gold-accent hover:bg-gold-accent/90 text-navy-primary font-bold py-4 rounded-xl flex items-center justify-center transition-all duration-300 shadow-gold"
        >
          <Phone className="w-5 h-5 mr-2" />
          Call Now: 91237 79241
        </button>
      </div>
    </div>
  );
}
