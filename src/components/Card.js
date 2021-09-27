import React from 'react';
import styles from './Card.module.scss';

function Card(props) {
    return (
        <div className={`card ${styles.container}`}>
            <div>
                <img src={props.image}></img>
                <h3>{props.heading}</h3>
                <p>{props.paragraph}</p>
            </div>
        </div>
    );
}

export default Card;