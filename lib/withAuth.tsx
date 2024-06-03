'use client';

import React, { useEffect } from 'react';
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

type ComponentType = React.ComponentType<any>;
const withAuth = (Component: ComponentType) => {
  console.log("withAuth calledfdsdsf");
  const AuthenticatedComponent: React.FC = (props) => {
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
