// pages/_app.tsx
import { ClerkProvider } from '@clerk/nextjs';
import { AppProps } from 'next/app';

import '../app/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  if (!publishableKey) {
    throw new Error("NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY is not set");
  }

  return (
    <ClerkProvider publishableKey={publishableKey}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp;
