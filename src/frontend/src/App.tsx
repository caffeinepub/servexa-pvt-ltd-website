import { RouterProvider, createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import ServiceAreas from './components/ServiceAreas';
import ContactSection from './components/ContactSection';
import TestimonialSlider from './components/TestimonialSlider';
import FAQSection from './components/FAQSection';
import BeforeAfterGallery from './components/BeforeAfterGallery';
import BookingForm from './components/BookingForm';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import StickyCallBar from './components/StickyCallBar';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';

function RootLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-primary via-navy-primary/95 to-navy-primary">
      <Header />
      <Outlet />
    </div>
  );
}

function HomePage() {
  return (
    <>
      <div className="pt-16 md:pt-20">
        <HeroSection />
        <ServicesSection />
        <WhyChooseUs />
        <ServiceAreas />
        <ContactSection />
        <TestimonialSlider />
        <FAQSection />
        <BeforeAfterGallery />
        <BookingForm />
        <Footer />
      </div>
      <FloatingWhatsApp />
      <StickyCallBar />
    </>
  );
}

function AdminPage() {
  return (
    <div className="pt-16 md:pt-20 min-h-screen">
      <AdminDashboard />
      <Footer />
    </div>
  );
}

const rootRoute = createRootRoute({
  component: RootLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin',
  component: AdminPage,
});

const routeTree = rootRoute.addChildren([indexRoute, adminRoute]);

const router = createRouter({ 
  routeTree,
  defaultPreload: 'intent',
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
