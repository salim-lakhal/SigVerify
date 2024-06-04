'use client';

import React from 'react';
import styles from './manage.module.css';
import NavBar from '../../components/navbar/navbar';
import withAuth from '../../lib/withAuth';

const Manage = () => {
    return (
        <div>
            <NavBar />
            <div className={styles.container}>
                <div className={styles.document}>
                    <div className={styles.header}>
                        <h1 className={styles.h1}>XRPL Campus Ambassador Program Task Completion Form</h1>
                        <p className={styles.p}>This document outlines the tasks required for the XRPL Campus Ambassador Program. Ambassadors must initial each task upon completion, with confirmation initials from an Administrator. Payouts are dependent on the completion conditions outlined below.</p>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.section}>
                            <h2 className={styles.h2}>1. Complete a Project on the XRP Ledger</h2>
                            <p className={`${styles.description} ${styles.p}`}>Description: Successfully design and implement a project utilizing the XRP Ledger, showcasing its capabilities and potential applications.</p>
                            <p className={`${styles.initials} ${styles.p}`}>Ambassador Initials: <span className={styles.box}></span></p>
                            <p className={`${styles.initials} ${styles.p}`}>Administrator Initials: <span className={styles.box}></span></p>
                        </div>
                        <div className={styles.section}>
                            <h2 className={styles.h2}>2. Complete a Second Project</h2>
                            <p className={`${styles.description} ${styles.p}`}>Description: Develop a second, distinct project that either extends the first project or explores a new application of the XRP Ledger.</p>
                            <p className={`${styles.initials} ${styles.p}`}>Ambassador Initials: <span className={styles.box}></span></p>
                            <p className={`${styles.initials} ${styles.p}`}>Administrator Initials: <span className={styles.box}></span></p>
                        </div>
                        <div className={styles.section}>
                            <h2 className={styles.h2}>3. Host a Campus Meetup</h2>
                            <p className={`${styles.description} ${styles.p}`}>Description: Organize and conduct a meetup on campus to promote understanding and engagement with the XRP Ledger among students and faculty.</p>
                            <p className={`${styles.description} ${styles.p}`}>Payout Options:</p>
                            <div className={styles.payoutOption}>
                                <input type="checkbox" className={styles.checkbox} />
                                <p className={`${styles.payout} ${styles.p}`}>$150 (Up to 49 attendees)</p>
                            </div>
                            <div className={styles.payoutOption}>
                                <input type="checkbox" className={styles.checkbox} />
                                <p className={`${styles.payout} ${styles.p}`}>$250 (50-99 attendees)</p>
                            </div>
                            <div className={styles.payoutOption}>
                                <input type="checkbox" className={styles.checkbox} />
                                <p className={`${styles.payout} ${styles.p}`}>$400 (100+ attendees)</p>
                            </div>
                            <p className={`${styles.initials} ${styles.p}`}>Ambassador Initials: <span className={styles.box}></span></p>
                            <p className={`${styles.initials} ${styles.p}`}>Administrator Initials: <span className={styles.box}></span></p>
                        </div>
                    </div>
                </div>
                <div className={styles.document}>
                    <div className={styles.section}>
                        <h2 className={styles.h2}>4. Participate in a Hackathon</h2>
                        <p className={`${styles.description} ${styles.p}`}>Description: Participate in a hackathon, employing the XRP Ledger in your project submission to solve challenges or create innovative solutions.</p>
                        <p className={`${styles.payoutTitle} ${styles.p}`}>Payout Options:</p>
                        <div className={styles.payoutOption}>
                            <input type="checkbox" className={styles.checkbox} />
                            <p className={`${styles.payout} ${styles.p}`}>$100 (Participation)</p>
                        </div>
                        <div className={styles.payoutOption}>
                            <input type="checkbox" className={styles.checkbox} />
                            <p className={`${styles.payout} ${styles.p}`}>$500 (Top 3)</p>
                        </div>
                        <p className={`${styles.initials} ${styles.p}`}>Ambassador Initials: <span className={styles.box}></span></p>
                        <p className={`${styles.initials} ${styles.p}`}>Administrator Initials: <span className={styles.box}></span></p>
                    </div>
                    <div className={styles.section}>
                        <p className={styles.p}>Upon completion of all tasks, signatures from both the Ambassador and the Administrator are required below to verify all tasks have been completed and to authorize the issuance of the agreed payout.</p>
                        <h2 className={styles.h3}>Ambassador Signature:</h2>
                        <p className={`${styles.initials} ${styles.p}`}>Signature: <span className={styles.s1}></span> Date: <span className={styles.s1}></span></p>
                        <h2 className={styles.h3}>Administrator Signature:</h2>
                        <p className={`${styles.initials} ${styles.p}`}>Signature: <span className={styles.s1}></span> Date: <span className={styles.s1}></span></p>
                    </div>
                </div>
            </div>
			<div className={styles.popup}>
                Sign Here: <input type="text" />
            </div>
        </div>
    );
};

export default withAuth(Manage);
