import { SiWhatsapp } from 'react-icons/si';

export default function FloatingWhatsApp() {
  const handleClick = () => {
    window.open('https://wa.me/919123779241?text=Hi%2C%20I%20need%20home%20service%20assistance', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#20BD5A] rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 animate-pulse hover:animate-none"
      aria-label="Chat on WhatsApp"
    >
      <SiWhatsapp className="w-8 h-8 text-white" />
    </button>
  );
}
