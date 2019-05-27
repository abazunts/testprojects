import {connect} from "react-redux";
import Users from "./Users";
import {setAdmins, setUsers} from "../BLL/usersReducer";
import {adminsSelector, usersSelector} from "../BLL/selectors";


let mapStateToProps = (state) => {
    return ({
        users: usersSelector(state),
        admins: adminsSelector(state),
    })
};

export default connect(mapStateToProps, {setUsers, setAdmins})(Users);