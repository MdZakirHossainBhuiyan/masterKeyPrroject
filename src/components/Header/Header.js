import React from 'react';
import './Header.css'
import EmailIcon from '@mui/icons-material/Email';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Person2Icon from '@mui/icons-material/Person2';

const Header = () => {
    return (
        <div className='headerArea'>
            <div className='headerHeading'>
                <h3>Headphone</h3>
                <p>For the top band</p>
            </div>
            <div className='headerSearch'>
                <input type="search"></input>
                <EmailIcon style={{"width": "34px", "height":"34px", "marginRight": "10px"}} />
                <NotificationsActiveIcon style={{"width": "34px", "height":"34px", "marginRight": "10px"}} />
                <Person2Icon style={{"width": "34px", "height":"34px", "marginRight": "30px"}} />
            </div>
        </div>
    );
};

export default Header;