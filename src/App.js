import React from 'react';
import TopBar from './components/TopBar.js';
import SecondaryBar from './components/SecondaryBar.js';
import Section from './components/Section.js';
import CallToAction from './components/CallToAction.js';
import styles from './App.module.scss';
import './App.scss';

import logoBrandRegistry from './assets/images/amazon/logo-amazon_brand_registry-black_text-orange_smile-transparent_50.png'
import stockPhotoPeople from './assets/images/amazon/Homepage_subjects_combined_v3b.png'

function App() {
  return (
    <div>
        <div className={styles.navBar}>
            <TopBar/>
            <SecondaryBar/>
        </div>
        <div className={styles.topPage}>
            <Section
                left={
                    <CallToAction
                        image={logoBrandRegistry}
                        heading={"Build and protect your brand"}
                        paragraph={"Enrolling in Amazon Brand Registry unlocks a suite of tools designed to help you build and protect your brand, creating a better experience for customers."}
                        button={"Get started"}
                    />
                }
                right={
                    <img src={stockPhotoPeople}></img>
                }
            />
        </div>
    </div>
  );
}

export default App;
