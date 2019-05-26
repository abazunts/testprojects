import React from 'react';
import styles from './dialogSelector.module.css'
import SelectElement from "../SelectElement/SelectElement";
import Button from "../Button/Button";


const DialogSelector = (props) => {
    return <div className={styles.dialogSelector}>
        <button className={styles.closeButton}>X</button>
        <div className={styles.header}>
            <span>Диалог выбора элементов</span>
        </div>
        <div className={styles.search}>
            <label>Поиск<input/></label>
            <label>Фильтр<select>
                <option value="">Без фильтра</option>
                <option value="">Номер > 10</option>
                <option value="">Номер > 100</option>
                <option value="">Номер > 200</option>
            </select></label>
        </div>
        <div className={styles.elements}>
            <div>
                <input type={'checkbox'}/><span>Элемент 1</span>
            </div>
            <div>
                <input type={'checkbox'}/><span>Элемент 2</span>
            </div>
            <div>
                <input type={'checkbox'}/><span>Элемент 3</span>
            </div>
            <div>
                <input type={'checkbox'}/><span>Элемент 4</span>
            </div>
            <div>
                <input type={'checkbox'}/><span>Элемент 5</span>
            </div>
            <div>
                <input type={'checkbox'}/><span>Элемент 6</span>
            </div>
            <div>
                <input type={'checkbox'}/><span>Элемент 7</span>
            </div>
            <div>
                <input type={'checkbox'}/><span>Элемент 8</span>
            </div>
            <div>
                <input type={'checkbox'}/><span>Элемент 9</span>
            </div>
            <div>
                <input type={'checkbox'}/><span>Элемент 10</span>
            </div>
        </div>

            <div>
                Выбранные элементы на данный момент:
            </div>
            <div className={styles.selectElements}>
                <div>
                    <SelectElement/>
                </div>
                <div>
                    <SelectElement/>
                </div>
                <div>
                    <SelectElement/>
                </div>
            </div>
        <div className={styles.buttons}>
            <Button>Сохранить</Button>
            <Button>Отмена</Button>

        </div>


    </div>
};

export default DialogSelector;