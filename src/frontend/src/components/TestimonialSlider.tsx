import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    service: 'AC Repair',
    rating: 5,
    text: 'Excellent service! The technician arrived on time and fixed my AC within an hour. Very professional and affordable.',
  },
  {
    name: 'Priya Sharma',
    service: 'Washing Machine Repair',
    rating: 5,
    text: 'Highly recommend Servexa! They repaired my washing machine the same day I called. Great service and reasonable pricing.',
  },
  {
    name: 'Amit Das',
    service: 'Electrical Work',
    rating: 5,
    text: 'Professional and skilled technicians. They rewired my entire house efficiently. Very satisfied with their work.',
  },
  {
    name: 'Sneha Banerjee',
    service: 'Plumbing Service',
    rating: 5,
    text: 'Quick response and excellent work. Fixed my leaking pipes and installed new fittings. Will definitely call again!',
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our <span className="text-gold-accent">Customers Say</span>
          </h2>
          <p className="text-xl text-white/80">Real experiences from satisfied customers</p>
        </div>

        <div className="relative">
          <div className="glass-card p-12 rounded-3xl backdrop-blur-lg bg-white/5 border border-white/10 min-h-[300px] flex flex-col justify-center">
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-gold-accent fill-gold-accent" />
              ))}
            </div>
            <p className="text-xl text-white/90 text-center mb-6 leading-relaxed italic">
              "{testimonials[currentIndex].text}"
            </p>
            <div className="text-center">
              <p className="text-xl font-bold text-white">{testimonials[currentIndex].name}</p>
              <p className="text-gold-accent">{testimonials[currentIndex].service}</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-gold-accent hover:bg-gold-accent/90 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-gold"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-navy-primary" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-gold-accent hover:bg-gold-accent/90 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-gold"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-navy-primary" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-gold-accent w-8' : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
