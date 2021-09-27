import React from 'react';
import styles from './SecondaryBar.module.scss';
import RoundedButton from './RoundedButton';

function TopBar() {
    return (
        <div className={`${styles.container}`}>
            <div className={`top-bar ${styles.topBar}`}>
                <div className="top-bar-left">
                    <ul className="menu">
                        <li><a href="#0">FAQ</a></li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li><a href="#" className={`${styles.signIn}`}>Sign in</a></li>
                        <li><RoundedButton text={"Get started"}></RoundedButton></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TopBar;