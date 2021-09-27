import React from 'react';
import TopBar from './TopBar.js';
import SecondaryBar from './SecondaryBar.js';
import Section from './Section.js';
import CallToAction from './CallToAction.js';
import TextBlock from './TextBlock.js';
import Headline from './Headline.js';
import Card from './Card.js';
import LearnMoreButton from './LearnMoreButton';
import styles from './BrandRegistry.module.scss';

import logoBrandRegistry from '../assets/images/amazon/logo-amazon_brand_registry-black_text-orange_smile-transparent_50.png'
import stockPhotoPeople from '../assets/images/amazon/Homepage_subjects_combined_v3b.png'
import graphicBuilder from '../assets/images/amazon/Homepage_-_Build_Brand_resize.png';
import officeDesk from '../assets/images/amazon/BR_Homepage_Protect_New.png';
import amazonShield from '../assets/images/amazon/orange-shield._CB1525824425_.svg';

function BrandRegistry() {
  return (
    <div>
        <div className={styles.navBar}>
            <TopBar/>
            <SecondaryBar/>
        </div>
        <div className={styles.topPage}>
            <Section
                columnsLeft={"large-6"}
                columnsMiddle={"large-1"}
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
            columnsMiddle={"large-1"}
            columnsRight={"large-6"}
            left={
                <div>
                    <img src={graphicBuilder}/>
                    <LearnMoreButton 
                        text={"Learn more about additional brand building benefits."}
                        buttonText={"Seller Central"}    
                    />
                </div>
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
            columnsMiddle={"large-1"}
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
        <Section 
            columnsLeft={"large-8"}
            columnsMiddle={"large-1"}
            columnsRight={"large-4"}
            left={
                <Headline
                    subtitle={"BRAND PROTECTION REPORT"}
                    title={"Protecting more than 500,000 brands"}
                    paragraph={"We work hard to be the world’s most customer centric-company, so we’re constantly improving the ways we detect and block counterfeit products."}
                />
            }
        />
        <Section 
            columnsLeft={"large-4"}
            columnsMiddle={"large-4"}
            columnsRight={"large-4"}
            left={
                <Card 
                    image={amazonShield}
                    heading={"Proactive"}
                    paragraph={"Over 6 million bad actor accounts were stopped before they published a single listing for sale and our verification processes stopped more than 10 billion suspected bad listings before they were published to our store."}
                />
            }
            middle={
                <div>
                    <Card 
                        image={amazonShield}
                        heading={"Effective"}
                        paragraph={"On average, enrolled brands report a 99% reduction in suspected infringements since Brand Registry launched."}
                    />
                    <LearnMoreButton 
                        text={"Read our Brand Protection Report to learn more about the work we are doing to protect brands and customers."}
                        buttonText={"Brand Protection Report"}
                    />
                </div>
            }
            right={
                <Card 
                    image={amazonShield}
                    heading={"Dedicated"}
                    paragraph={"Our global team of investigators is available 24 hours a day, 7 days a week to respond to potential infringements."}
                />
            }
        />
        <div style={{height: "640px", width: "100%", backgroundColor: "#232f3e"}}></div>
        <div style={{height: "430px", width: "100%", backgroundColor: "#fff"}}></div>
        <div style={{height: "370px", width: "100%", backgroundColor: "#232f3e"}}></div>
    </div>
  );
}

export default BrandRegistry;
