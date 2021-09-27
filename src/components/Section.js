import React from 'react';
import styles from './Section.module.scss';

function Section(props) {
    return (
        <div className={styles.container}>
            <div className="row">
                <div className={`${props.columnsLeft} columns`}>
                    {props.left}
                </div>
                <div className={`${props.columnsRight} columns`}>
                    {props.right}
                </div>
            </div>
        </div>
    );
}

export default Section;