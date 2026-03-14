'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './page.module.css';

const Page = () => {
  const router = useRouter();

  const handleSignIn = () => {
    router.push('/sign-in');
  };

  const handleSignUp = () => {
    router.push('/sign-up');
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <a href="#" className={styles.logo}>
          <Image src="/logo.jpg" alt="Logo" width={40} height={40} />
          <h1 className={styles.h1}>SigVerify</h1>
        </a>
        <button onClick={handleSignIn} className={styles.button} style={{ fontWeight: '600', padding: '10px 30px', fontSize: '1rem'}}>
          Sign In
        </button>
      </header>
      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.content}>
            <h2>The Smart Way to Sign...</h2>
            <div className={styles.card}>
              <h3>We Make Signing Safe and Transparent</h3>
              <p>
                Sig Verify will help keep your documents, signatures, and identity safe. <br />
                <a href="#" aria-label="Sign up to learn more">
                  Sign up to learn more.
                </a>
              </p>
              <div className={styles.inputGroup}>
                <input type="email" placeholder="Your email here..." aria-label="Email input" />
                <button onClick={handleSignUp} aria-label="Sign Up">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.fixedIcons} aria-label="Social Media Links">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6 6 18M6 6l12 12" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
            />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
            />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10 15 5-3-5-3z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="2" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
            />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </section>
      </main>
    </div>
  );
};

export default Page;
