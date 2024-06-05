"use client";

import React from 'react';
import styles from './create-document.module.css';
import NavBar from '../../components/navbar/navbar';
import withAuth from '@/lib/withAuth';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const NewDoc = () => {
    let document = {name:"oui"};
    document.name = "Ambassador Program XRPL";
    return (
      <div className={styles.container}>
        <NavBar />
        <Card className="col-span-1 my-6 mx-auto w-[90vw] max-w-[400px] sm:max-w-[520px] md:max-w-[660px]">
          <CardHeader>
            <CardTitle>Choose A Template</CardTitle>
            <CardDescription>Browse and select from our collection of pre-built templates.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="relative group p-4 max-w-[] border-2 rounded-md transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View Template</span>
                </Link>
                <img
                  src="/placeholder.svg"
                  alt="Template Preview"
                  width={200}
                  height={200}
                  className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                />
                <div className="flex-1 pt-2 mt-2">
                  <h3 className="font-semibold tracking-tight leading-[5px] text-sm">Ripple Pledge</h3>
                  <small className="text-xs leading-[2px] tracking-tight text-gray-500 dark:text-gray-400">Campus Ambassador Program</small>
                </div>
              </div>
              <div className="relative group p-4 border-2 rounded-md transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View Template</span>
                </Link>
                <img
                  src="/placeholder.svg"
                  alt="Template Preview"
                  width={200}
                  height={200}
                  className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                />
                <div className="flex-1 pt-2 mt-2">
                  <h3 className="font-semibold tracking-tight leading-[5px] text-sm">Ripple Pledge</h3>
                  <small className="text-xs leading-[2px] tracking-tight text-gray-500 dark:text-gray-400">Campus Ambassador Program</small>
                </div>
              </div>
              <div className="relative group p-4 border-2 rounded-md transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View Template</span>
                </Link>
                <img
                  src="/placeholder.svg"
                  alt="Template Preview"
                  width={200}
                  height={200}
                  className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                />
                <div className="flex-1 pt-2 mt-2">
                  <h3 className="font-semibold tracking-tight leading-[5px] text-sm">Ripple Pledge</h3>
                  <small className="text-xs leading-[2px] tracking-tight text-gray-500 dark:text-gray-400">Campus Ambassador Program</small>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
};

export default withAuth(NewDoc)