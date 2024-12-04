'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ComponentType } from 'react';

const withAuth = <P extends object>(WrappedComponent: ComponentType<P>): ComponentType<P> => {
  const Auth = (props: P) => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      // Check authentication only on the client side
      const checkAuth = () => {
        const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;
        
        if (!token) {
          router.replace('/auth');
        } else {
          setIsAuthenticated(true);
        }
      };

      checkAuth();
    }, [router]);

    // Prevent rendering until authentication check is complete
    if (!isAuthenticated) {
      return null; // or a loading spinner
    }

    return <WrappedComponent {...props} />;
  };

  return Auth;
};

export default withAuth;