import React from 'react';
import DialogSelector from "./DialogSelector";
import {connect} from "react-redux";
import {setFilter, setSearch, setSelectElementsGlobalState, showHideDialogSelector} from "../../BLL/mainPageReducer";
import {elementsSelector, searchSelector, selectElementsSelector} from "./dialogSelectors";

class DialogSelectorContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            selectElements: this.props.selectElements,
        }
    };

    setSelectElement = (selectElementId, selectElementelement) => {
        this.setState({selectElements: [...this.state.selectElements, {id: selectElementId, element: selectElementelement}]})
    };

    setUnSelectElement = (id) => {
        let newSelectElements = [...this.state.selectElements];
        for (let i = 0; i < newSelectElements.length; i++)
            newSelectElements[i].id === id && newSelectElements.splice(i, 1);
        this.setState({selectElements: newSelectElements});
    };

    onSaveSelectElements = () => {
        this.props.setSelectElementsGlobalState(this.state.selectElements)
    };


    render() {
        return <DialogSelector selectElements = {this.state.selectElements}
                               showHideDialogSelector = {this.props.showHideDialogSelector}
                               elements = {this.props.elements}
                               setSelectElement = {this.setSelectElement}
                               setUnSelectElement = {this.setUnSelectElement}
                               onSaveSelectElements = {this.onSaveSelectElements}
                               search = {this.props.search}
                               setChangeSearch = {this.props.setSearch}
                               setChangeFilter = {this.props.setFilter}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        selectElements: selectElementsSelector(state),
        elements: elementsSelector(state),
        search: searchSelector(state),
    }
}


export default connect(mapStateToProps, {showHideDialogSelector, setSelectElementsGlobalState, setSearch, setFilter})(DialogSelectorContainer);