import React from 'react';
import Image from 'next/image';
import styles from './doc.module.css';
import NavBar from '../../components/navbar/navbar';
import withAuth from '../../../lib/withAuth';

const Doc = () => {
    let document = { name: "oui" };
    document.name = "Ambassador Program XRPL";
    return (
        <div className={styles.container}>
            <NavBar />
            <h2 className={styles.title}>Document: {document.name}</h2>
            <Image
                src="/ambaxrpl.png"
                alt="Centered Image"
                className={styles.image}
                width={500}
                height={500}
            />
            <div className={styles.popup}>
                Sign Here: <input type="text" />
            </div>
            <button>Submit</button>
        </div>
    );
};

export default withAuth(Doc);
