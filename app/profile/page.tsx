// 'use client'
// import React from 'react';
// import styles from './profile.module.css';
// import NavBar from '../../components/navbar/navbar';
// import withAuth from '@/lib/withAuth'; // Make sure this path is correct
// import Image from 'next/image';

// const Profile = () => {
//   let document = { name: 'oui' };
//   document.name = 'Ambassador Program XRPL';
//   return (
//     <div className={styles.container}>
//       <NavBar />
//       {/* <h2 className={styles.title}>Document: {document.name}</h2>
//       <Image src="/contract.png" alt="Document Template" className={styles.templateImage} width={500} height={500} />
//       <div className={styles.popup}>
//         Sign Here: <input type="text" />
//       </div>
//       <button>Submit</button> */}
//     </div>
//   );
// };

// export default withAuth(Profile);

'use client';
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/N0PPCsDqoRD
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import withAuth from '@/lib/withAuth'; // Make sure this path is correct
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import { Separator } from '@radix-ui/react-separator';
import NavBar from '../../components/navbar/navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useUser } from '@clerk/nextjs';
import React from 'react'; // Ensure React import is included if not already

const Component = () => {
  const { user } = useUser();
  console.log('USER: ', user);
  return (
    <div className="relative w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(/path/to/your/background.jpg)' }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-white opacity-50"></div>

      {/* Main Content */}
      <div className="relative w-full">
        <NavBar />
        <div className="w-full px-8 md:px-44 mx-auto py-12 md:py-16 lg:py-20">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="flex items-center gap-6">
              <Avatar className="w-16 h-16 md:w-20 md:h-20">
                <AvatarImage src={user?.imageUrl} alt="User Avatar" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <h1 className="text-2xl font-bold">{user?.firstName}</h1>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <InboxIcon className="w-4 h-4" />
                  <span>{user?.primaryEmailAddress?.emailAddress}</span>
                </div>
              </div>
            </div>
          </div>
          <Separator className="my-8" />
          <hr />
          <div className="grid gap-8 mt-8">
            <div>
              <h2 className="text-xl font-bold mb-4">Settings</h2>
              <div className="grid gap-4">
                <Card>
                  <CardContent className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <FileIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                      <div className="grid gap-1">
                        <div className="font-medium">KYC</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Update &quot;Know Your Customer&quot; Information.</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Change
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <UserIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                      <div className="grid gap-1">
                        <div className="font-medium">Update Profile</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Change your name, email, and profile picture</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <KeyIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                      <div className="grid gap-1">
                        <div className="font-medium">Change Password</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Update your account password</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Change
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Component);

interface IconProps {
  className?: string;
  // Add any other props that your SVG component might receive
}

function FileIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  );
}

function InboxIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>
  );
}

function KeyIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4" />
      <path d="m21 2-9.6 9.6" />
      <circle cx="7.5" cy="15.5" r="5.5" />
    </svg>
  );
}

function UserIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function WalletIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  );
}

export { FileIcon, InboxIcon, KeyIcon, UserIcon, WalletIcon };

