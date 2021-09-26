import React from 'react';
import styles from './TopBar.module.scss';
import AmazonLogo from '../assets/images/amazon/logo-amazon-white.svg';

function TopBar() {
    return (
        <div class={`${styles.container}`}>
            <div className={`top-bar ${styles.topBar} ${styles.darkTopBar}`}>
                <div className="top-bar-left">
                    <ul className="menu">
                        <img src={AmazonLogo}></img>
                        <li><a href="#0">Brand Registry</a></li>
                        <li><a href="#0">Transparency</a></li>
                        <li><a href="#0">Project Zero</a></li>
                        <li><a href="#0">IP Accelerator</a></li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li><a href="#">Progress Report</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TopBar;