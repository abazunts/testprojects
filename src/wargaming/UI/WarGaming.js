import React from 'react';
import MainPage from "./MainPage/MainPage";
import DialogSelector from "./DialogSelector/DialogSelector";
import styles from './wargaming.module.css'


const WarGaming = (props) => {
    return <div className={styles.warGaming}>
        <div>
            <MainPage/>
        </div>
        <div className={styles.dialogSelector}>
            <DialogSelector/>
        </div>
    </div>
};

export default WarGaming;