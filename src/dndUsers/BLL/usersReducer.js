const SET_USERS = 'DND/USERS/SET_USERS';
const SET_ADMINS = 'DND/USERS/SET_ADMINS';

let initialState = {

    users: [
        {
            userId: '1',
            fullName: 'Dima',
        },
        {
            userId: '2',
            fullName: 'Artem',
        },
        {
            userId: '3',
            fullName: 'Viktor',
        },
        {
            userId: '4',
            fullName: 'Sergey',
        },
    ],

    admins: [],

};

let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, action.user],
                admins: [...action.admins],
            }
        case SET_ADMINS:
            return {
                ...state,
                admins: [...state.admins, action.admin],
                users: [...action.users],

            }
        default:
            return {...state};
    }
};

export const setUsers = (user, admins) => ({type: SET_USERS, user, admins});
export const setAdmins = (admin, users) => ({type: SET_ADMINS, admin, users});

export default usersReducer;