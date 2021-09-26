import React from 'react';
import styles from './Section.module.scss';

function Section(props) {
    return (
        <div className={styles.container}>
            <div className="row">
                <div className="large-6 columns">
                    {props.left}
                </div>
                <div className="large-6 columns">
                    {props.right}
                </div>
            </div>
        </div>
    );
}

export default Section;