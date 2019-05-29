const DIALOG_SELECTOR_SHOW = 'WG/DIALOG_SELECTOR/DIALOG_SELECTOR_SHOW';
const CREATE_ELEMENTS = 'WG/DIALOG_SELECTOR/CREATE_ELEMENTS';
const SET_SELECT_ELEMENTS = 'WG/DIALOG_SELECTOR/SET_SELECT_ELEMENTS';
const SET_UN_SELECT_ELEMENT = 'WG/DIALOG_SELECTOR/SET_UN_SELECT_ELEMENT';
const SET_SEARCH = 'WG/DIALOG_SELECTOR/SET_SEARCH';
const SET_FILTER = 'WG/DIALOG_SELECTOR/SET_FILTER';
const SELECT_BUTTON_ENABLED = 'WG/DIALOG_SELECTOR/SELECT_BUTTON_ENABLED';

let initState = {
    elements: [
        {id: 1, element: 'Элемент 1'},
        {id: 2, element: 'Элемент 2'},
        {id: 3, element: 'Элемент 3'},
        {id: 4, element: 'Элемент 4'},
        {id: 5, element: 'Элемент 5'},
        {id: 6, element: 'Элемент 6'},
    ],

    selectElements: [],

    dialogSelectorShow: false,
    selectButtonEnabled: false,
    search: '',
    filter: '',
};


let mainPageReducer = (state = initState, action) => {
    switch (action.type) {
        case CREATE_ELEMENTS:
            let newElements = [];
            for (let i = 1; i <= 300; i++) {
                newElements.push({id: String(i), element: 'Элемент ' + i})
            }
            return {...state, elements: newElements};
        case DIALOG_SELECTOR_SHOW:
            return {...state, dialogSelectorShow: !state.dialogSelectorShow};
        case SELECT_BUTTON_ENABLED:
            return {...state, selectButtonEnabled: !state.selectButtonEnabled};
        case SET_SELECT_ELEMENTS:
            return {...state, selectElements: action.selectElements};
        case SET_UN_SELECT_ELEMENT:
            let newSelectElements = [...state.selectElements];
            for (let i = 0; i < newSelectElements.length; i++) {
                newSelectElements[i].id === action.id && newSelectElements.splice(i, 1);
            }
            return {...state, selectElements: newSelectElements,};
        case SET_SEARCH:
            return {...state, search: action.value,};
        case SET_FILTER:
            return {...state, filter: action.value,};
        default:
            return state
    }
};

export const showDialogSelector = () => ({type: DIALOG_SELECTOR_SHOW});
export const selectButtonEnabled = () => ({type: SELECT_BUTTON_ENABLED});
export const elementsCreate = () => ({type: CREATE_ELEMENTS});
export const setSelectElementsGlobalState = (selectElements) => ({type: SET_SELECT_ELEMENTS, selectElements});
export const setUnSelectElement = (id) => ({type: SET_UN_SELECT_ELEMENT, id});
export const setSearch = (value) => ({type: SET_SEARCH, value});
export const setFilter = (value) => ({type: SET_FILTER, value});


export const openCloseDialogSelector = () => (dispatch) => {
    dispatch(showDialogSelector());
    dispatch(selectButtonEnabled());
};

export const setSelectElements = (selectElements) => (dispatch) => {
    dispatch(setSelectElementsGlobalState(selectElements));
    dispatch(showDialogSelector());
    dispatch(selectButtonEnabled());
}


export default mainPageReducer;