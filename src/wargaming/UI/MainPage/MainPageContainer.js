import {connect} from "react-redux";
import MainPage from "./MainPage";
import {selectButtonSelector, selectElementsSelector} from "./mainPageSelector";
import {setUnSelectElement, showHideDialogSelector} from "../../BLL/mainPageReducer";

let mapStateToProps = (state) => {
    return {
        selectElements: selectElementsSelector(state),
        selectButton: selectButtonSelector(state),
    }
}

export default connect(mapStateToProps, {showHideDialogSelector, setUnSelectElement})(MainPage);