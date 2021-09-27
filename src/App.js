import React from 'react';
import TopBar from './components/TopBar.js';
import SecondaryBar from './components/SecondaryBar.js';
import Section from './components/Section.js';
import CallToAction from './components/CallToAction.js';
import TextBlock from './components/TextBlock.js';
import styles from './App.module.scss';
import './App.scss';

import logoBrandRegistry from './assets/images/amazon/logo-amazon_brand_registry-black_text-orange_smile-transparent_50.png'
import stockPhotoPeople from './assets/images/amazon/Homepage_subjects_combined_v3b.png'
import graphicBuilder from './assets/images/amazon/Homepage_-_Build_Brand_resize.png';
import officeDesk from './assets/images/amazon/BR_Homepage_Protect_New.png';

function App() {
  return (
    <div>
        <div className={styles.navBar}>
            <TopBar/>
            <SecondaryBar/>
        </div>
        <div className={styles.topPage}>
            <Section
                columnsLeft={"large-6"}
                columnsRight={"large-6"}
                left={
                    <CallToAction
                        image={logoBrandRegistry}
                        heading={"Build and protect your brand"}
                        paragraph={"Enrolling in Amazon Brand Registry unlocks a suite of tools designed to help you build and protect your brand, creating a better experience for customers."}
                        button={"Get started"}
                    />
                }
                right={
                    <img src={stockPhotoPeople}/>
                }
            />
        </div>
        <Section 
            columnsLeft={"large-6"}
            columnsRight={"large-6"}
            left={
                <img src={graphicBuilder}/>
            }
            right={
                <TextBlock 
                    heading={"Build your brand"}
                    blocks={[
                        ["A+ Content", "A+ Content helps businesses showcase their brand story and product features using rich text and images on the Amazon detail page to help drive conversion, and potentially increase traffic and sales."],
                        ["Sponsored Brands", "Grow your brand awareness with ads that feature your logo, a custom headline, and up to three of your products."],
                        ["Amazon Stores", "Promote your brand and products with your own multi-page Store on Amazon for free."],
                        ["Amazon Brand Analytics", "Make informed and strategic decisions with powerful data. Learn more about customers, including search terms and more customer behavior data reports, which can help you to make smarter, faster business decisions."]
                    ]}
                />
            }
        />
        <Section 
            columnsLeft={"large-6"}
            columnsRight={"large-6"}
            left={
                <TextBlock 
                    heading={"Protect your brand"}
                    blocks={[
                        ["Accurate listings", "Better manage your brand’s product listings so that customers see accurate information."],
                        ["Proactive brand protection", "Our automated protections use information about your brand to proactively remove suspected infringing or inaccurate content. The more information you provide, the better Brand Registry can help you protect and improve your brand experience."],
                        ["Report violations", "Our powerful search tools let you find and report suspected violations with a simple, guided process."]
                    ]}
                />
            }
            right={
                <img src={officeDesk}/>
            }
        />
    </div>
  );
}

export default App;
