import { Wrench, Droplet, Zap } from 'lucide-react';

const services = [
  {
    title: 'Home Appliance Repair',
    icon: Wrench,
    items: [
      'Refrigerator repair',
      'Washing machine repair',
      'AC & Window AC service',
      'Microwave & oven repair',
      'Geyser & chimney repair',
    ],
  },
  {
    title: 'Plumbing Services',
    icon: Droplet,
    items: [
      'Leak detection & repair',
      'Water heater installation & repair',
      'Drain cleaning & blockage removal',
      'Bathroom & kitchen fittings',
    ],
  },
  {
    title: 'Electrical Services',
    icon: Zap,
    items: [
      'Wiring & rewiring',
      'Light & fan installation',
      'Switchboard & socket repair',
      'Circuit breaker & panel repair',
    ],
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-gold-accent">Services</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Professional home services for all your repair and maintenance needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="glass-card p-8 rounded-3xl backdrop-blur-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-gold-lg"
              >
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-gold-accent/20 rounded-2xl">
                  <Icon className="w-10 h-10 text-gold-accent" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-6 text-center">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-white/90">
                      <svg
                        className="w-5 h-5 text-gold-accent mr-3 mt-0.5 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
