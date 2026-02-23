import { useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { Loader2 } from 'lucide-react';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { identity, isInitializing, loginStatus } = useInternetIdentity();
  const navigate = useNavigate();

  useEffect(() => {
    // Wait for initialization to complete
    if (isInitializing) return;

    // Check if user is authenticated
    const isAuthenticated = identity && !identity.getPrincipal().isAnonymous();

    // Redirect to login if not authenticated
    if (!isAuthenticated && loginStatus !== 'logging-in') {
      navigate({ to: '/login' });
    }
  }, [identity, isInitializing, loginStatus, navigate]);

  // Show loading state while initializing
  if (isInitializing) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-gold-accent mx-auto mb-4" />
          <p className="text-white/70 text-lg">Checking authentication...</p>
        </div>
      </div>
    );
  }

  // Check if authenticated
  const isAuthenticated = identity && !identity.getPrincipal().isAnonymous();

  // Don't render children if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-gold-accent mx-auto mb-4" />
          <p className="text-white/70 text-lg">Redirecting to login...</p>
        </div>
      </div>
    );
  }

  // Render protected content
  return <>{children}</>;
}
