import React from 'react';
import style from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className={style.NavBar}>
            <NavLink to='/History' className={obj => obj.isActive ? style.NavBarButton + " " + style.active : style.NavBarButton}>History</NavLink>
            <NavLink to='/Chat' className={obj => obj.isActive ? style.NavBarButton + " " + style.active : style.NavBarButton}>Chat</NavLink>
            <NavLink to='/News' className={obj => obj.isActive ? style.NavBarButton + " " + style.active : style.NavBarButton}>News</NavLink>
            <NavLink to='/Version' className={obj => obj.isActive ? style.NavBarButton + " " + style.active : style.NavBarButton}>Version</NavLink>
        </div >
    );
}


export default NavBar;