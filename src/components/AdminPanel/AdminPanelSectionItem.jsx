import React from 'react';
import { useRef } from 'react';
import { editUserActionCreator } from '../../redux/usersReducer';
import { deleteUserActionCreator } from '../../redux/usersReducer';

const AdminSectionListItem = (props) => {
    let input = useRef(null);
    //let items = [];
    //for (const property in props.user) {
    //    items.push(`${property}: ${props.user[property]}`)
    //}

    return (
        <li className='admin-section__list__item'>
            <div className="admin-section__list__item__data">
                <h3 className='admin-section__list__item__data__title'>
                    {props.user.name} 
                </h3>
            </div>
            <div className='admin-section__list__item__actions'>
                <button onClick={() => {editUserActionCreator(props.user)}}>Edit User</button>
                <button onClick={() => {
                    let action = deleteUserActionCreator(props.user);
                    props.dispatch(action);
                }}>Delete User</button>
            </div>
        </li>
    )
}

export default AdminSectionListItem;