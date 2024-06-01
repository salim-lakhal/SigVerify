// lib/withAuth.tsx
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const withAuth = (Component: any) => {
  const AuthenticatedComponent = (props: any) => {
    const { isLoaded, isSignedIn } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (isLoaded && !isSignedIn) {
        if (typeof window !== 'undefined') {
          router.push('/sign-in');
        }
      }
    }, [isLoaded, isSignedIn, router]);

    if (!isLoaded || !isSignedIn) {
      return null;
    }

    return <Component {...props} />;
  };

  AuthenticatedComponent.displayName = `withAuth(${Component.displayName || Component.name || 'Component'})`;

  return AuthenticatedComponent;
};

export default withAuth;
