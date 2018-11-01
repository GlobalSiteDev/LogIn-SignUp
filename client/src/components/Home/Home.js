import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const home = () => (
    <div className={styles.Container}>
        <div className={styles.Content}>
            <h3>Welcome to my test asignment!</h3>
            <p>To enter your profile</p>
            <Link to="/login" className={styles.LoginLink}>LOG IN</Link>
            <p>or</p>
            <Link to="/register" className={styles.SignupLink}>SIGN UP</Link>
        </div>
    </div>
)

export default home;
