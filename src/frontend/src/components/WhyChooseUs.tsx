import { Shield, Clock, DollarSign, Award, Zap } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Skilled & Verified Technicians',
    description: 'All our technicians are thoroughly vetted and certified professionals',
  },
  {
    icon: Zap,
    title: 'Fast Doorstep Service',
    description: 'Quick response time with service at your convenience',
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    description: 'Transparent pricing with no hidden charges',
  },
  {
    icon: Award,
    title: 'Service for All Major Brands',
    description: 'Expert service for all leading appliance and equipment brands',
  },
  {
    icon: Clock,
    title: 'Same Day Service Available',
    description: 'Emergency repairs available with same-day service options',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose <span className="text-gold-accent">Servexa</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Your trusted partner for reliable home services in Kolkata & Howrah
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="glass-card p-8 rounded-3xl backdrop-blur-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 mb-6 flex items-center justify-center bg-gold-accent/20 rounded-xl">
                  <Icon className="w-8 h-8 text-gold-accent" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-white/80 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
