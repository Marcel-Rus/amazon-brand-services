import React from 'react';
import styles from './Headline.module.scss';

function Headline(props) {
    return (
        <div className={styles.container}>
            <p>{props.subtitle}</p>
            <h1>{props.title}</h1>
            <p>{props.paragraph}</p>
        </div>
    );
}

export default Headline;