import { Phone, LogIn, LogOut } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { Button } from '@/components/ui/button';

export default function Header() {
  const navigate = useNavigate();
  const { identity, clear, login, isLoggingIn } = useInternetIdentity();
  
  const isAuthenticated = identity && !identity.getPrincipal().isAnonymous();

  const handleCallClick = () => {
    window.location.href = 'tel:+919836793679';
  };

  const handleLogin = () => {
    navigate({ to: '/login' });
  };

  const handleLogout = () => {
    clear();
    navigate({ to: '/' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-primary/95 backdrop-blur-md border-b border-gold-accent/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/assets/generated/servexa-logo.dim_400x400.png"
              alt="Servexa - Professional Home Services"
              className="h-12 w-12 md:h-14 md:w-14 object-contain"
              onError={(e) => {
                console.error('Logo failed to load');
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="ml-3">
              <h1 className="text-xl md:text-2xl font-bold text-gold-accent">
                Servexa
              </h1>
              <p className="text-xs text-gray-300 hidden sm:block">
                Professional Home Services
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Auth Button */}
            {isAuthenticated ? (
              <Button
                onClick={handleLogout}
                variant="ghost"
                size="sm"
                className="text-white/80 hover:text-white hover:bg-white/10 hidden sm:flex"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            ) : (
              <Button
                onClick={handleLogin}
                variant="ghost"
                size="sm"
                disabled={isLoggingIn}
                className="text-white/80 hover:text-white hover:bg-white/10 hidden sm:flex"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </Button>
            )}

            {/* Call Button */}
            <button
              onClick={handleCallClick}
              className="flex items-center gap-2 bg-gold-accent hover:bg-gold-accent/90 text-navy-primary px-4 py-2 md:px-6 md:py-2.5 rounded-full font-semibold transition-all duration-300 shadow-gold hover:shadow-gold-lg"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden sm:inline">Call Now</span>
              <span className="sm:hidden">Call</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
