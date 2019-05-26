import React from 'react';
import styles from './app.module.css'
import {NavLink, Route} from "react-router-dom";
import UsersContainer from "./dndUsers/UI/UsersContainer";
import WarGaming from "./wargaming/UI/WarGaming";



function App() {
    return (
        <div>
            <div className={styles.navbar}>
                <NavLink  to={'/dndusers'}>DnDUsers</NavLink>
                <NavLink  to={'/wargaming'}>WarGaming</NavLink>
            </div>
            <Route path={'/dndusers'} render={() => <UsersContainer/>}/>
            <Route path={'/wargaming'} render={() => <WarGaming/>}/>
        </div>
    );
}

export default App;
