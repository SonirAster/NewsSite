import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './AdminPanel.css';

const AdminPanel = () => {
    return (
        <div className='admin'>
            <header className='admin__header'>admin header</header>
            <nav className='admin__navigation'>
                <ul>
                    <li><NavLink to='users'>Users</NavLink></li>
                </ul>
            </nav>
            <main className='admin__main'>
                <Outlet/>
            </main>
        </div>
    )
}

export default AdminPanel;