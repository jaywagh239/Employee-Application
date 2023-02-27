import React from 'react';
import './pagination.scss';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { KeyboardArrowDownOutlined } from '@mui/icons-material';
import Dropdown from 'react-bootstrap/Dropdown';
import PercentIcon from '@mui/icons-material/Percent';
import GroupIcon from '@mui/icons-material/Group';

const Pagination = ({itemsCount, pageSize, currentPage, onPageChange}) => {

    const pagesCount = Math.ceil(itemsCount / pageSize);
    if(pagesCount === 1) return null;
    const pages = Array.from({length: pagesCount}, (_, i) => i + 1);

    return ( 
    <div className='mainnavbar'>
        <nav>
            <ul className="pagination justify-content-end">
            <li className="page-item">
                    <button  onClick={() => onPageChange(currentPage-1)} className={currentPage === 1? "page-link disabled" : "page-link"} >
                        <NavigateBeforeIcon/> Previous</button>
                </li>
                {pages.map(page => (
                    <li key={page} className={page === currentPage? "page-item active" : "page-item"}>
                        <button onClick={() => onPageChange(page)} className="page-link" >{page}</button></li>
                ))}
                <li className="page-item">
                    <button onClick={() => onPageChange(currentPage+1)} className={currentPage === pages.length? "page-link disabled" : "page-link"} >Next
                    <NavigateNextIcon/> </button>
                </li>
            </ul>
        </nav>
    </div> );
}
 
export default Pagination;