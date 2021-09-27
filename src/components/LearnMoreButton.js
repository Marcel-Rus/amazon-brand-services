import React from 'react';
import styles from './LearnMoreButton.module.scss';

function LearnMoreButton(props) {
    return (
        <div className={styles.container}>
            <p>{props.text}</p>
            <a href="#0" className={`button ${styles.rounded}`}>{props.buttonText}</a>
        </div>
    );
}

export default LearnMoreButton;