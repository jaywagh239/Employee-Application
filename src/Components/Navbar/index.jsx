import React from 'react';
import './navbar.scss';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { KeyboardArrowDownOutlined } from '@mui/icons-material';
import Dropdown from 'react-bootstrap/Dropdown';
import PercentIcon from '@mui/icons-material/Percent';
import GroupIcon from '@mui/icons-material/Group';

const Navbar = ({handleSidebarClick, logoutUser, user}) => {
    return ( 
    <div className='mainnavbar'>
        <div className="wrapper">
            <div className='items'>
            <div className='menuitem' onClick={handleSidebarClick}>
                <MenuIcon className='icon'/>
                </div>
            </div>

            <div className='items'>
                <div className='item'>
                    <NotificationsOutlinedIcon className='icon'/>
                    <div className="counter">2</div>
                </div>
                <div className='item'>
                    <PercentIcon className='icon' />
                </div>
                <div className='item'>
                    <GroupIcon className='icon'/>
                </div>
                <div className="item">
                    
                <img
                    src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress"
                    className='avatar' />

                    <Dropdown>
                    <Dropdown.Toggle className='user'>
                    <span className='username'> Maria
                    <KeyboardArrowDownOutlined/>
                    </span>
              </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                <Dropdown.Item href="#/action-2" onClick={logoutUser}>Logout</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>

                </div>
            </div>
       
        </div>
        
    </div> );
}
 
export default Navbar;