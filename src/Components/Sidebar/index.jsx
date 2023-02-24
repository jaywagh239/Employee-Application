import React from 'react';
import './sidebar.scss';
import { Link } from 'react-router-dom';

import {Dashboard, PeopleAltOutlined, FolderOutlined, AssessmentOutlined, LogoutOutlined,
    PaymentOutlined, SettingsInputCompositeOutlined, MonetizationOnOutlined, GridView} from '@mui/icons-material';
const Sidebar = () => {
    const getActiveClass = (locationPath, item) => {
        console.log('locationPath', locationPath)
        console.log('item', item)
        let activeClass = '';
        if ( locationPath === item || locationPath === item.alterNatePath ) {
          activeClass = 'sidebar-item-active';
        }
        return activeClass;
      };

      console.log('window.location?.pathname', window.location?.pathname)
      
    return (
         <div className='sidebar'>
            <div className="top">
                <Link to="/">
                    <span className="logo">HUBSTAFF</span>
                </Link>
            </div>
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                    <Link to="/">
                        <GridView className='icon'/>
                        <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                    <Link to="/integration" className={getActiveClass(window.location?.pathname, 'integration')}>
                        <Dashboard className='icon' />
                        <span>Integrations</span>
                    </Link>
                    </li>
                    <li>
                        <PaymentOutlined  className='icon' />
                        <span>Payroll</span>
                    </li>
                    <li>
                        <PeopleAltOutlined className='icon'  />
                        <span>Members</span>
                    </li>
                    <li>
                        <FolderOutlined className='icon' />
                        <span>Projects</span>
                    </li>
                    <li>
                        <MonetizationOnOutlined className='icon'/>
                        <span>Plans & Billing</span>
                    </li>
                    <li>
                        <SettingsInputCompositeOutlined className='icon' />
                        <span>Settings</span>
                    </li>
                </ul>
            </div>
    </div> );
}
 
export default Sidebar;