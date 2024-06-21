declare global {
  namespace NodeJS {
    interface ProcessEnv {
      VITE_CLERK_PUBLISHABLE_KEY: string;
    }
  }
}