import { Button } from '@/components/ui/button';
import { Phone, MessageCircle } from 'lucide-react';

export default function HeroSection() {
  const handleCallClick = () => {
    window.location.href = 'tel:9123779241';
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919123779241?text=Hi%2C%20I%20need%20home%20service%20assistance', '_blank');
  };

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-form');
    bookingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-technician.dim_1920x1080.png"
          alt="Professional Home Service Technician"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-primary/95 via-navy-primary/90 to-navy-primary/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Fast <span className="text-gold-accent">•</span> Reliable <span className="text-gold-accent">•</span> Affordable
            <br />
            <span className="text-gold-accent">Home Solutions</span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 font-light">
            Expert plumbing, electrical & appliance repair at your doorstep
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              onClick={handleCallClick}
              className="bg-gold-accent hover:bg-gold-accent/90 text-navy-primary font-semibold text-lg px-8 py-6 rounded-xl shadow-gold transition-all duration-300 hover:scale-105"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-white/10 hover:bg-white/20 text-white font-semibold text-lg px-8 py-6 rounded-xl backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Now
            </Button>
          </div>

          <Button
            size="lg"
            variant="outline"
            onClick={scrollToBooking}
            className="bg-transparent hover:bg-white/10 text-white border-2 border-gold-accent font-semibold text-lg px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105"
          >
            Book Service
          </Button>

          {/* Trust Badges */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="glass-card p-6 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <img
                src="/assets/generated/badge-verified.dim_96x96.png"
                alt="Verified Technicians"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-white font-semibold text-lg">Verified Technicians</h3>
            </div>
            <div className="glass-card p-6 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gold-accent/20 rounded-full">
                <svg className="w-10 h-10 text-gold-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg">Same-Day Service</h3>
            </div>
            <div className="glass-card p-6 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gold-accent/20 rounded-full">
                <svg className="w-10 h-10 text-gold-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg">Skilled Technicians</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
