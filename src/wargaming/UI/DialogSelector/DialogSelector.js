import React from 'react';
import styles from './dialogSelector.module.css'
import SelectElement from "../SelectElement/SelectElement";
import Button from "../Button/Button";


const DialogSelector = (props) => {

    let {selectElements, elements, search, filter} = props;
    let {
        setUnSelectElement, onSaveSelectElements, setSelectElement,
        showHideDialogSelector, setChangeSearch, setChangeFilter
    } = props;


    let onCloseDialog = () => {
        showHideDialogSelector();
    };

    let onChangeSearch = (e) => {
        setChangeSearch(e.currentTarget.value)
    };

    let onChangeFilter = (e) => {
        setChangeFilter(e.currentTarget.value)
    };

    let onClickElement = (e) => {
        if (e.target.tagName === 'INPUT') {
            selectElements.map(se => se.id).indexOf(e.target.dataset.id)
                ? setSelectElement(e.target.dataset.id, e.target.dataset.element)
                : setUnSelectElement(e.target.dataset.id)
        }
    };

    return <div className={styles.dialogSelector}>
        <button className={styles.closeButton} onClick={onCloseDialog}>X</button>
        <div className={styles.header}>
            <span>Диалог выбора элементов</span>
        </div>
        <div className={styles.search}>
            <label>Поиск<input value={search} onChange={onChangeSearch}/></label>
            <label>Фильтр<select onChange={onChangeFilter} value={filter}>
                <option value="">Без фильтра</option>
                <option value="10">Номер > 10</option>
                <option value="100">Номер > 100</option>
                <option value="200">Номер > 200</option>
            </select></label>
        </div>
        <div className={styles.elements} onClick={onClickElement}>
            {elements.map(el => <div key={el.id}>
                <input type={'checkbox'} checked={selectElements.map(sel => sel.id).indexOf(el.id) > -1}
                       data-id={el.id} data-element={el.element}
                       disabled={selectElements.length >= 3}/><span>{el.element}</span>
            </div>)
            }
        </div>
        <div>
            Выбранные элементы на данный момент:
        </div>
        <div className={styles.selectElements}>
            {selectElements.map(el => <div key={el.id}>
                <SelectElement element={el.element} id={el.id} setUnSelectElement={setUnSelectElement}/>
            </div>)}
        </div>
        <div className={styles.buttons}>
            <Button onClick={onSaveSelectElements}>Сохранить</Button>
            <Button onClick={onCloseDialog}>Отмена</Button>
        </div>
    </div>
};

export default DialogSelector;