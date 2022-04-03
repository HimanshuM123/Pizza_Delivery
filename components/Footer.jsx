import Image from 'next/image'
import styles from '../styles/Footer.module.css'
import React from 'react'

export const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src='/img/bg.png' layout='fill' alt='' />
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.moto}>
                        OH YES, WE DID . THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}> FIND OUR RESTAURENTS
                    </h1>
                    <p className={styles.text}>
                        1054 R DON ROAD #125
                        <br /> New York
                        <b /> (602) 867-1010
                    </p>
                    <p className={styles.text}>
                        1054 R DON ROAD #125
                        <br /> New York
                        <b /> (602) 867-1010
                    </p>
                    <p className={styles.text}>
                        1054 R DON ROAD #125
                        <br /> New York
                        <b /> (602) 867-1010
                    </p>
                    <p className={styles.text}>
                        1054 R DON ROAD #125
                        <br /> New York
                        <b /> (602) 867-1010
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>WORKING HOURS</h1>
                    <p className={styles.text}>
                        MONDAY UNTIL FRIDAY
                        <br /> 9:00 - 22:00

                    </p>

                    <p className={styles.text}>
                        SATURDAY - SUNDAY
                        <br /> 12:00 - 24:00

                    </p>
                </div>
            </div>
        </div>
    )
}

