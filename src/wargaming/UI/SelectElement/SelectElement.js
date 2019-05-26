import React from 'react';
import styles from './selectElement.module.css'

const SelectElement = (props) => {
    return <div className={styles.selectElement}>
            <span>Элемент 5</span>
            <button>X</button>
    </div>
};

export default SelectElement;