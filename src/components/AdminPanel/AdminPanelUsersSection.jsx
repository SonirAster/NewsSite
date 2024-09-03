import React from 'react';
import './AdminPanel.css';
import { useRef } from 'react';
import AdminSectionListItem from './AdminPanelSectionItem';
import { addUserActionCreator } from '../../redux/usersReducer';

const AdminPanelUsersSection = (props) => {
    const editorNameInput = useRef(null);
    //const editorIdInput = useRef(null);
    const editor = useRef(null);

    return (
        <section className='admin-section'>
            <header className='admin-section__header'>
                <div className='admin-section__header__main'>
                    <h2 className='admin-section__title'>Users</h2>
                    <button onClick={() => {editor.current.style.height = '120px'}}>Add User</button>
                </div>
                <div ref={editor} className='admin-section__editUser'>
                    <div className="admin-section__editUser__item">
                        <label htmlFor="name">Name:</label>
                        <input ref={editorNameInput} id='name' type="text" />
                    </div>
                    {/* <div className="admin-section__editUser__item">
                        <label htmlFor="id">Id:</label>
                        <input ref={editorIdInput} readOnly value={props.users.length} id='id' type="number" />
                    </div> */}
                    <button onClick={() => {
                        let action = addUserActionCreator(editorNameInput.current.value);
                        props.dispatch(action);
                        editor.current.style.height = '0px';
                    }}>ADD</button>
                </div>
            </header>
            <ul className='admin-section__list'>
                {props.users.map(item => <AdminSectionListItem 
                    user={item} 
                    dispatch={props.dispatch} 
                />)}
            </ul>
        </section>
    )
}

export default AdminPanelUsersSection;