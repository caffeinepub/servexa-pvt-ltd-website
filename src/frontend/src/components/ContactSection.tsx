import { Phone, MapPin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SiWhatsapp } from 'react-icons/si';

const phoneNumbers = [
  { number: '91237 79241', tel: '9123779241' },
  { number: '70443 23746', tel: '7044323746' },
  { number: '81006 39423', tel: '8100639423' },
];

export default function ContactSection() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919123779241?text=Hi%2C%20I%20need%20home%20service%20assistance', '_blank');
  };

  return (
    <section className="py-20 px-4 relative" id="contact">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-gold-accent">Touch</span>
          </h2>
          <p className="text-xl text-white/80">We're here to help with all your home service needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Phone Numbers */}
          <div className="glass-card p-8 rounded-3xl backdrop-blur-lg bg-white/5 border border-white/10">
            <div className="flex items-center mb-6">
              <Phone className="w-8 h-8 text-gold-accent mr-3" />
              <h3 className="text-2xl font-bold text-white">Call Us</h3>
            </div>
            <div className="space-y-4">
              {phoneNumbers.map((phone, index) => (
                <a
                  key={index}
                  href={`tel:${phone.tel}`}
                  className="block p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold-accent/50 transition-all duration-300"
                >
                  <span className="text-xl text-white font-semibold">{phone.number}</span>
                </a>
              ))}
            </div>
            <Button
              onClick={handleWhatsAppClick}
              className="w-full mt-6 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold py-6 rounded-xl transition-all duration-300"
            >
              <SiWhatsapp className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </Button>
          </div>

          {/* Address & Social */}
          <div className="glass-card p-8 rounded-3xl backdrop-blur-lg bg-white/5 border border-white/10">
            <div className="flex items-center mb-6">
              <MapPin className="w-8 h-8 text-gold-accent mr-3" />
              <h3 className="text-2xl font-bold text-white">Visit Us</h3>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 mb-6">
              <p className="text-lg text-white/90 leading-relaxed">
                G-175/A Dhankheti, Garden Reach,
                <br />
                Kolkata – 700024
              </p>
            </div>

            <div className="flex items-center mb-4">
              <Instagram className="w-8 h-8 text-gold-accent mr-3" />
              <h3 className="text-2xl font-bold text-white">Follow Us</h3>
            </div>
            <a
              href="https://instagram.com/servexa_pvt_ltd"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 border border-white/10 hover:border-gold-accent/50 transition-all duration-300"
            >
              <span className="text-xl text-white font-semibold">@servexa_pvt_ltd</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
