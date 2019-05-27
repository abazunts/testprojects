import React from 'react';
import WarGaming from "./WarGaming";
import {connect} from "react-redux";
import {dialogSelectorShowSelector} from "./warGamingSelector";
import {elementsCreate} from "../BLL/mainPageReducer";

class WarGamingContainer extends React.Component {
    componentDidMount() {
        this.props.elementsCreate();
    }

    render() {
        return <WarGaming dialogSelectorShowHide={this.props.dialogSelectorShowHide}/>
    }
}
let mapSateToProps = (state) => {
    return {
        dialogSelectorShowHide: dialogSelectorShowSelector(state),
    }
};


export default connect(mapSateToProps, {elementsCreate})(WarGamingContainer);