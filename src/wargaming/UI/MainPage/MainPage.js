import React from 'react';
import SelectElement from '../SelectElement/SelectElement';
import styles from './mainPage.module.css';
import Button from "../Button/Button";


const MainPage = (props) => {

    let {selectElements = [], showHideDialogSelector, selectButton, setUnSelectElement} = props;

    return <div className={styles.mainPage}>
        <span>На данный момент у Вас выбрано {selectElements.length} элемент[а]:</span>
        <div className={styles.selectElement}>

            {selectElements.map(e => <div key={e.id}>
                <SelectElement element={e.element} selectButton={selectButton} id={e.id} setUnSelectElement={setUnSelectElement}/>
            </div>)}
        </div>
        <div className={styles.customButton}>
            <Button onClick={showHideDialogSelector} disabled={selectButton}>Изменить мой выбор</Button>
        </div>
    </div>
};

export default MainPage;