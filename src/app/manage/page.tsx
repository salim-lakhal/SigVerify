import React from 'react';
import styles from './manage.module.css';
import NavBar from '../../components/navbar/navbar';
import withAuth from '../../lib/withAuth';
import Image from 'next/image';

const Manage = () => {
    let document = {name:"oui"};
    document.name = "Ambassador Program XRPL";
    return (
        <div className={styles.container}>
            <NavBar />
            <h2 className={styles.title}>Document : {document.name}</h2>
            <Image src="/contract.png" alt="Document Template" className={styles.templateImage} width={500} height={500} />
        <div className={styles.popup}>
                Sign Here: <input type="text" />
            </div>
            <button>
                Submit
            </button>
        </div>
    );
};

export default withAuth(Manage);
;
