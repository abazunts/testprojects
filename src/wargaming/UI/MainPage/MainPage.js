import React from 'react';
import SelectElement from '../SelectElement/SelectElement';
import styles from './mainPage.module.css';
import Button from "../Button/Button";


const MainPage = (props) => {

    let {selectElements = [], openCloseDialogSelector, selectButtonEnabled, setUnSelectElement} = props;

    return <div className={styles.mainPage}>
        <span>На данный момент у Вас выбрано {selectElements.length}
        {selectElements.length === 0 && <span> элементов:</span>}
        {selectElements.length === 1 && <span> элемент:</span>}
        {selectElements.length > 1 && <span> элемента</span>}
        </span>
        <div className={styles.selectElement}>

            {selectElements.map(e => <div key={e.id}>
                <SelectElement element={e.element} selectButton={selectButtonEnabled} id={e.id} setUnSelectElement={setUnSelectElement}/>
            </div>)}
        </div>
        <div className={styles.customButton}>
            <Button onClick={openCloseDialogSelector} disabled={selectButtonEnabled}>Изменить мой выбор</Button>
        </div>
    </div>
};

export default MainPage;