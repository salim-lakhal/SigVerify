import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import styles from './navbar.module.css';
import { SignOutButton } from '@clerk/nextjs';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const menuRef = useRef(null);
    const menuIconRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (
            menuRef.current && !menuRef.current.contains(event.target) &&
            menuIconRef.current && !menuIconRef.current.contains(event.target)
        ) {
            setIsOpen(false);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
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
                    <Image src="/contract.png" alt="Logo" className={styles.logo} fill />
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
