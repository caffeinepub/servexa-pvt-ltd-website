import { useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { Button } from '@/components/ui/button';
import { Shield, Loader2, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function LoginPage() {
  const { login, identity, isLoggingIn, isLoginError, loginError, loginStatus } = useInternetIdentity();
  const navigate = useNavigate();

  // Redirect to admin if already authenticated
  useEffect(() => {
    const isAuthenticated = identity && !identity.getPrincipal().isAnonymous();
    if (isAuthenticated && loginStatus === 'success') {
      navigate({ to: '/admin' });
    }
  }, [identity, loginStatus, navigate]);

  const handleLogin = () => {
    login();
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="glassmorphism rounded-2xl p-8 md:p-12 max-w-md w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-accent/20 mb-4">
            <Shield className="w-8 h-8 text-gold-accent" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Admin Access
          </h1>
          <p className="text-white/70">
            Authentication required to access the admin dashboard
          </p>
        </div>

        {isLoginError && loginError && (
          <Alert className="mb-6 bg-red-500/10 border-red-500/30">
            <AlertCircle className="h-4 w-4 text-red-400" />
            <AlertTitle className="text-red-400">Login Failed</AlertTitle>
            <AlertDescription className="text-red-300/80">
              {loginError.message}
            </AlertDescription>
          </Alert>
        )}

        <div className="space-y-4">
          <Button
            onClick={handleLogin}
            disabled={isLoggingIn}
            className="w-full bg-gold-accent hover:bg-gold-accent/90 text-navy-primary font-semibold py-6 text-lg shadow-gold hover:shadow-gold-lg transition-all duration-300"
          >
            {isLoggingIn ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin mr-2" />
                Connecting...
              </>
            ) : (
              <>
                <Shield className="h-5 w-5 mr-2" />
                Login with Internet Identity
              </>
            )}
          </Button>

          <p className="text-white/50 text-sm text-center">
            Secure authentication using Internet Identity
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10">
          <Button
            onClick={() => navigate({ to: '/' })}
            variant="ghost"
            className="w-full text-white/70 hover:text-white hover:bg-white/5"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
