import React from 'react';
import { NavLink } from 'react-router-dom';
import * as FontAwesome from 'react-icons/fa';

export const Menu = () => (
    <nav className='menu'>
        <NavLink to='/' activeClassName='selected'>
            <FontAwesome.FaHome />
        </NavLink>
        <NavLink to='/add-day' activeClassName='selected'>
            <FontAwesome.FaCalendarPlus />
        </NavLink>
        <NavLink to='/list-days' activeClassName='selected'>
            <FontAwesome.FaTable />
        </NavLink>
    </nav>
)
