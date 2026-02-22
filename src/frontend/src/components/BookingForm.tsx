import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useSubmitBooking } from '../hooks/useQueries';
import { Loader2, CheckCircle } from 'lucide-react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    customerName: '',
    phoneNumber: '',
    serviceCategory: '',
    address: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const submitBooking = useSubmitBooking();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.customerName || !formData.phoneNumber || !formData.serviceCategory || !formData.address) {
      alert('Please fill in all fields');
      return;
    }

    try {
      await submitBooking.mutateAsync(formData);
      setShowSuccess(true);
      setFormData({
        customerName: '',
        phoneNumber: '',
        serviceCategory: '',
        address: '',
      });
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error('Booking submission error:', error);
      alert('Failed to submit booking. Please try again or call us directly.');
    }
  };

  return (
    <section className="py-20 px-4 relative" id="booking-form">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Book Your <span className="text-gold-accent">Service</span>
          </h2>
          <p className="text-xl text-white/80">Fill out the form and we'll get back to you shortly</p>
        </div>

        <div className="glass-card p-8 md:p-12 rounded-3xl backdrop-blur-lg bg-white/5 border border-white/10">
          {showSuccess ? (
            <div className="text-center py-12">
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">Booking Received!</h3>
              <p className="text-xl text-white/80 mb-6">
                Thank you for choosing Servexa. We'll contact you shortly to confirm your service appointment.
              </p>
              <Button
                onClick={() => setShowSuccess(false)}
                className="bg-gold-accent hover:bg-gold-accent/90 text-navy-primary font-semibold"
              >
                Book Another Service
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="customerName" className="text-white text-lg mb-2 block">
                  Full Name *
                </Label>
                <Input
                  id="customerName"
                  type="text"
                  value={formData.customerName}
                  onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-gold-accent h-12"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phoneNumber" className="text-white text-lg mb-2 block">
                  Phone Number *
                </Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-gold-accent h-12"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div>
                <Label htmlFor="serviceCategory" className="text-white text-lg mb-2 block">
                  Service Category *
                </Label>
                <Select
                  value={formData.serviceCategory}
                  onValueChange={(value) => setFormData({ ...formData, serviceCategory: value })}
                >
                  <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-gold-accent h-12">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-navy-primary border-white/20">
                    <SelectItem value="Home Appliance Repair" className="text-white hover:bg-white/10">
                      Home Appliance Repair
                    </SelectItem>
                    <SelectItem value="Plumbing Services" className="text-white hover:bg-white/10">
                      Plumbing Services
                    </SelectItem>
                    <SelectItem value="Electrical Services" className="text-white hover:bg-white/10">
                      Electrical Services
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="address" className="text-white text-lg mb-2 block">
                  Service Address *
                </Label>
                <Textarea
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-gold-accent min-h-[120px]"
                  placeholder="Enter your complete address"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={submitBooking.isPending}
                className="w-full bg-gold-accent hover:bg-gold-accent/90 text-navy-primary font-bold text-lg py-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-gold"
              >
                {submitBooking.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Booking Request'
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
