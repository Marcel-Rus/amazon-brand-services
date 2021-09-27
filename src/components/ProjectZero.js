import React from 'react';
import Section from './Section.js';
import CallToAction from './CallToAction.js';
import styles from './ProjectZero.module.scss';

import amazonProjectZero from '../assets/images/amazon/amazon-project-zero.png';
import happyBox from '../assets/images/amazon/Prime-JP-07c.png';

function ProjectZero() {
    return (
        <div className={styles.topPage}>
            <Section
                columnsLeft={"large-6"}
                columnsMiddle={"large-1"}
                columnsRight={"large-6"}
                left={
                    <CallToAction
                        image={amazonProjectZero}
                        heading={"Project Zero leverages the combined strengths of Amazon and brands to drive counterfeits to zero"}
                        paragraph={""}
                        button={"Get started"}
                    />
                }
                right={
                    <img src={happyBox}/>
                }
            />
        </div>
    );
}

export default ProjectZero;