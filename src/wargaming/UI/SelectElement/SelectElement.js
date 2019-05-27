import React from 'react';
import styles from './selectElement.module.css'

const SelectElement = ({id, element, setUnSelectElement, selectButton = false}) => {
    return <div className={styles.selectElement}>
            <span>{element}</span>
            <button onClick={()=>setUnSelectElement(id)} disabled={selectButton}>X</button>
    </div>
};
export default SelectElement;