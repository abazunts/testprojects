import React from 'react';
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import usersReducer from "./usersReducer";



const reducers = combineReducers({
    users: usersReducer,
});


let storednd = createStore(reducers, applyMiddleware(thunk));

export default storednd;