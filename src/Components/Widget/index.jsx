import { KeyboardArrowUpOutlined, PersonOutlineOutlined } from '@mui/icons-material';
import React from 'react';
import './widget.scss';

const Widget = () => {
    return ( 
        <div className="widget">
            <div className="left">
                <span className="title">USERS</span>
                <span className='counter'>21323</span>
                <span className="link">See all uesrs</span>
            </div>
            <div className="right">
                <div className="percentage">
                    <KeyboardArrowUpOutlined/>
                    20%
                </div>
                <PersonOutlineOutlined className='icon'/>
                <span className="title"></span>
            </div>
        </div>
     );
}
 
export default Widget;