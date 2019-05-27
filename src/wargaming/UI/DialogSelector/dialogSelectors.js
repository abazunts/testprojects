export const selectElementsSelector = state => state.mainPage.selectElements;
export const searchSelector = state => state.mainPage.search;
export const elementsSelector = state => {
    let newElements = [...state.mainPage.elements];
    if (state.mainPage.search) {
        newElements = newElements.filter(e => e.element.indexOf(state.mainPage.search) > -1);
    }
    if(state.mainPage.filter) {
        newElements = newElements.filter(e => e.id > state.mainPage.filter )
    }
    return newElements;
};