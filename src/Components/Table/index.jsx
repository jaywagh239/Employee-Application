import './table.scss';
import React from 'react';
import CachedIcon from '@mui/icons-material/Cached';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

// import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import ParkIcon from '@mui/icons-material/Park';
// import InsightsIcon from '@mui/icons-material/Insights';

import { SportsBaseball, GitHub, Park, Insights } from '@mui/icons-material';

const Table = () => {
    const rows = [
        { id: 1, intName: 'Asana', type: 'Asana', lastSync: '18.12.2015', logo: <SportsBaseball className='mainlogo' style={{color:'#55A8FD'}} /> },
        { id: 2, intName: 'Github', type: 'Github', lastSync: '12.05.2000', logo: <GitHub className='mainlogo' style={{color:'#000000'}}/> },
        { id: 3, intName: 'Freshdesk', type: 'Freshdesk', lastSync: '04.02.2016', logo: <Park className='mainlogo' style={{color:'#89eb17'}}/> },
        { id: 4, intName: 'Insightly', type: 'Insightly', lastSync: '01.06..2018', logo: <Insights className='mainlogo' style={{color:'#ff5722'}}/> }
      ];
    return ( 
        <div className="table">
            <table className='table'>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Last Sync</th>
                    <th>Actions</th>
                </tr>
                <tbody>
                    {rows.map((row, rowID) => 
                    <tr key={rowID}>
                        <td>{row.id}</td>
                        <td>{row.logo} {row.intName}</td>
                        <td>{row.type}</td>
                        <td>{row.lastSync}</td>
                        <td>
                            <CachedIcon className='icon blue' />
                            <NotInterestedIcon className='icon red' />
                            <DeleteOutlineIcon className='icon darkblue'/>
                            </td>
                    </tr>)}
                </tbody>
            </table>
        </div>
     );
}

export default Table;