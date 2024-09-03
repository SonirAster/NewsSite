import React from 'react';
import { NavLink } from 'react-router-dom';
import './main.css';
import cloud1 from '../../assets/clouds/Vector.png';
import cloud2 from '../../assets/clouds/Vector (1).png';
import cloud3 from '../../assets/clouds/Vector (2).png';
import cloud4 from '../../assets/clouds/Vector (3).png';
import cloud5 from '../../assets/clouds/Vector (4).png';
import cloud6 from '../../assets/clouds/Vector (5).png';
import cloud7 from '../../assets/clouds/Vector (6).png';
import cloud8 from '../../assets/clouds/Vector (7).png';
import cloud9 from '../../assets/clouds/Vector (8).png';
import bg from '../../assets/ball.gif';

const MainPage = (props) => {
    const clouds = [cloud4, cloud2, cloud3,  cloud1,cloud5, cloud6, cloud7, cloud8, cloud9];
    
    return (
        <div className='main-page'>
            <h1 className="main-page__logo logo">nameisannoun</h1>
            <img src={bg} className="main-page__banner" />
            <ul className='main-page__menu'> 
                {props.categories.map(item => {
                    return (
                        <li className='main-page__menu__item secondary-title'>
                            <span>
                                <img src={clouds[props.categories.indexOf(item)]} />
                                <NavLink to={'/' + item.url}>{item.name}</NavLink>
                            </span>
                        </li>
                    )
                })}
                <li className='main-page__menu__item secondary-title'>
                    <span>
                        <img src={clouds[8]} />
                        <NavLink to='/news'>Log in</NavLink>
                    </span>
                </li>
            </ul>
            <button className='main-page__skip-button secondary-title'>
                <NavLink to='/news'>skip</NavLink>
            </button>
            <div className="main-page__title primary-title">let's get started</div>
        </div>
    )
}

export default MainPage;