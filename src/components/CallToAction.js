import React from 'react';
import styles from './CallToAction.module.scss';
import RoundedButton from './RoundedButton';

function CallToAction(props) {
    return (
        <div className={`${styles.container}`}>
            <img src={props.image}></img>
            <h1>{props.heading}</h1>
            <p>{props.paragraph}</p>
            <RoundedButton text={props.button}></RoundedButton>
        </div>
    );
}

export default CallToAction;