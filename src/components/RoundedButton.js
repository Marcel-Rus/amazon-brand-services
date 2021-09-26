import React from 'react';
import styles from './RoundedButton.module.scss';

function RoundedButton(props) {
    return (
        <a href="#0" className={`button ${styles.rounded}`}>{props.text}</a>
    )
}

export default RoundedButton;