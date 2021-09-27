import React from 'react';
import Section from './Section.js';
import CallToAction from './CallToAction.js';
import styles from './IPAccelerator.module.scss';

import ipAcceleratorLogo from '../assets/images/amazon/ip-accelerator-logo.png';
import ipImage1 from '../assets/images/amazon/ip-image-1.png';

function IPAccelerator() {
    return (
        <div className={styles.topPage}>
            <Section
                columnsLeft={"large-7"}
                columnsMiddle={"large-1"}
                columnsRight={"large-5"}
                left={
                    <CallToAction
                        image={ipAcceleratorLogo}
                        heading={"Protect your intellectual property"}
                        paragraph={"Amazon IP Accelerator helps businesses more quickly obtain intellectual property (IP) rights and brand protection in Amazon’s stores."}
                        button={"Get started"}
                    />
                }
                right={
                    <img src={ipImage1}/>
                }
            />
        </div>
    );
}

export default IPAccelerator;