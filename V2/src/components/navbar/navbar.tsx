"use client";
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import styles from './navbar.module.css';
import { SignOutButton } from '@clerk/nextjs';
import type { MouseEvent, KeyboardEvent } from 'react';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const menuRef = useRef<HTMLDivElement>(null);
    const menuIconRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event: MouseEvent | Event) => {
        if (
            menuRef.current && !menuRef.current.contains(event.target as Node) &&
            menuIconRef.current && !menuIconRef.current.contains(event.target as Node)
        ) {
            setIsOpen(false);
        }
    };

    const handleKeyDown = (event: KeyboardEvent | Event) => {
        if (event instanceof KeyboardEvent && event.key === 'Escape') {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleKeyDown);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    const navigateToDashboard = () => {
        router.push('/dashboard');
    };
    const navigateToNewDoc = () => {
        router.push('/newdoc');
    };

    const navigateToManageDocs = () => {
        router.push('/managedocs');
    };

    const navigateToProfile = () => {
        router.push('/profile');
    };

    return (
        <div className={styles.header}>
            <div className={styles.logoContainer}>
                <div className={styles.logoWrapper}>
                    <Image
                        src="/contract.png"
                        alt="Document Template"
                        className={styles.logo}
                        width={500}
                        height={500}
                    />
                </div>
                <h2 className={styles.sigtitle}>SigVerify</h2>
            </div>
            <div ref={menuIconRef} className={styles.menuIcon} onClick={toggleMenu}>
                <div className={styles.burger}></div>
                <div className={styles.burger}></div>
                <div className={styles.burger}></div>
            </div>
            <div ref={menuRef} className={`${styles.navButtons} ${isOpen ? styles.showMenu : ''}`}>
                <button className={styles.navButton} onClick={navigateToDashboard}>Dashboard</button>
                <button className={styles.navButton} onClick={navigateToNewDoc}>New Document</button>
                <button className={styles.navButton} onClick={navigateToManageDocs}>Manage Documents</button>
                <button className={styles.navButton} onClick={navigateToProfile}>Profile</button>
                <SignOutButton>
                    <button className={styles.signOutButton}>Sign Out</button>
                </SignOutButton>
            </div>
        </div>
    );
}

export default NavBar;
