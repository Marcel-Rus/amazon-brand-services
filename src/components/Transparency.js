import React from 'react';
import Section from './Section.js';
import CallToAction from './CallToAction.js';
import styles from './Transparency.module.scss';

import transparencyLogo from '../assets/images/amazon/transparecy_logo.png';
import transparencyVideo from '../assets/images/amazon/transparency.png';

function Transparency() {
    return (
        <div className={styles.topPage}>
            <Section
                columnsLeft={"large-6"}
                columnsMiddle={"large-1"}
                columnsRight={"large-6"}
                left={
                    <CallToAction
                        image={transparencyLogo}
                        heading={"Proactively prevent counterfeits"}
                        paragraph={"Transparency is a product serialization service that helps identify individual units and proactively prevent counterfeits from reaching customers."}
                        button={"Get started"}
                    />
                }
                right={
                    <img src={transparencyVideo}/>
                }
            />
        </div>
    );
}

export default Transparency;