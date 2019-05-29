export const selectElementsSelector = state => state.mainPage.selectElements;
export const searchSelector = state => state.mainPage.search;
export const filterSelector = state => state.mainPage.filter;
export const elementsSelector = state => {
    let newElements = [...state.mainPage.elements];
    if (state.mainPage.search) {
        newElements = newElements.filter(el => el.element.indexOf(state.mainPage.search) > -1);
    }
    if(state.mainPage.filter) {
        newElements = newElements.filter(el => el.id > state.mainPage.filter )
    }
    return newElements;
};