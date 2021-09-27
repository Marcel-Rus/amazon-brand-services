import React from 'react';
import styles from './TextBlock.module.scss';

function TextBlock(props) {
    
    return (
        <div className={styles.container}>
            <h2>{props.heading}</h2>
            {
                props.blocks.map(block => {
                    return (
                        <div>
                            <h3>{block[0]}</h3>
                            <p>{block[1]}</p>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default TextBlock;