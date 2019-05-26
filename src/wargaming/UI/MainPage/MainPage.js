import React from 'react';
import SelectElement from '../SelectElement/SelectElement';
import styles from './mainPage.module.css';
import Button from "../Button/Button";


const MainPage = ({elements = []}) => {
    return <div className={styles.mainPage}>
                <span>На данный момент у Вас выбрано {elements.length} элемент[а]:</span>
        <div className={styles.selectElement}>
            <div>
                <SelectElement/>
            </div>
            <div>
                <SelectElement/>
            </div>
        </div>
        <div className={styles.customButton}>
            <Button>Изменить мой выбор</Button>
        </div>
    </div>
};

export default MainPage;