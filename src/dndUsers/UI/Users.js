import React from 'react';
import s from './users.module.css'

let Users = ({users, admins, setUsers, setAdmins}) => {

    let onDragOver = (e) => {
        e.preventDefault()
    };
    let onDragStart = (e) => {
        e.dataTransfer.setData("userId", e.target.id);
        e.dataTransfer.setData("fullName", e.target.textContent);
    };
    let onDrop = (e) => {
        e.preventDefault();

        let userId = e.dataTransfer.getData("userId");
        let fullName = e.dataTransfer.getData("fullName");
        let objectElement = {userId, fullName}

        if (e.currentTarget.id === "admins") {
            let newUsers = [...users];
            let resAdmins = admins.map(a => a.userId).indexOf(objectElement.userId);
            if (resAdmins === -1) {
                for (let i = 0; i < newUsers.length; i++)
                    newUsers[i].userId === objectElement.userId && newUsers.splice(i, 1);
                setAdmins(objectElement, newUsers)
            }
        }

        if (e.currentTarget.id === "users") {
            let newAdmins = [...admins];
            let resUsers = users.map(u => u.userId).indexOf(objectElement.userId);
            if (resUsers === -1) {
                for (let i = 0; i < newAdmins.length; i++)
                    newAdmins[i].userId === objectElement.userId && newAdmins.splice(i, 1);
                setUsers(objectElement, newAdmins)
            }
        }
    };

    return (
        <div className={s.container}>
            <div id="users" className={s.users} onDrop={onDrop} onDragOver={onDragOver}>
                <h2 className={s.usersTitle}>USERS</h2>
                {users.map(u => <span draggable onDragStart={onDragStart} id={u.userId}
                                      key={u.userId}>{u.fullName}</span>)}
            </div>
            <div id="admins" className={s.admins} onDrop={onDrop} onDragOver={onDragOver}>
                <h2 className={s.adminsTitle}>ADMINS</h2>
                {admins.map(a => <span draggable onDragStart={onDragStart} id={a.userId}
                                       key={a.userId}>{a.fullName}</span>)}
            </div>
        </div>
    )
};
export default Users;