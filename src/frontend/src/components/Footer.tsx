import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' ? window.location.hostname : 'servexa-home-services';

  return (
    <footer className="py-8 px-4 border-t border-white/10 bg-navy-primary/50 backdrop-blur-lg">
      <div className="container mx-auto max-w-7xl text-center">
        <p className="text-white/80 text-sm">
          © {currentYear} Servexa Pvt Ltd. All rights reserved.
        </p>
        <p className="text-white/60 text-sm mt-2 flex items-center justify-center gap-1">
          Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(appIdentifier)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-accent hover:text-gold-accent/80 transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
