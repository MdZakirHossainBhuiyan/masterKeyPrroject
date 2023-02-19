import React from 'react';
import './SideBar.css';
import HeadsetIcon from '@mui/icons-material/Headset';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ExploreIcon from '@mui/icons-material/Explore';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import FaceIcon from '@mui/icons-material/Face';
import UpdateIcon from '@mui/icons-material/Update';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SettingsIcon from '@mui/icons-material/Settings';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const SideBar = () => {
    return (
        <div className='sidebarArea'>
            <div className='sidebar-heading'>
                <div className='imgIcon'>
                    <HeadsetIcon style={{"width": "40px", "height": "40px"}} />
                    MK Sounds
                </div>
            </div>

            <div className='sidebar-menu'>
                <div className='RouteLink'>
                    <div className='routeContent'><HomeIcon style={{"width": "24px", "height": "24px", "marginRight": "20px"}} />Home</div>
                </div>
                <div className='RouteLink'>
                    <div className='routeContent'><ExploreIcon style={{"width": "24px", "height": "24px", "marginRight": "20px"}} />Explore</div>
                </div>
                <div className='RouteLink'>
                    <div className='routeContent'><FavoriteBorderIcon style={{"width": "24px", "height": "24px", "marginRight": "20px"}} />Saved</div>
                </div>
                <div className='RouteLink'>
                    <div className='routeContent'><AddShoppingCartIcon style={{"width": "24px", "height": "24px", "marginRight": "20px"}} />Cart</div>
                </div>
                <div className='RouteLink'>
                    <div className='routeContent'><LocalAtmIcon style={{"width": "24px", "height": "24px", "marginRight": "20px"}} />Selling</div>
                </div>
                <div className='RouteLink'>
                    <div className='routeContent'><FaceIcon style={{"width": "24px", "height": "24px", "marginRight": "20px"}} />Profile</div>
                </div>
                <div className='RouteLink'>
                    <div className='routeContent'><UpdateIcon style={{"width": "24px", "height": "24px", "marginRight": "20px"}} />History</div>
                </div>
                <div className='RouteLink'>
                    <div className='routeContent'><WhatsAppIcon style={{"width": "24px", "height": "24px", "marginRight": "20px"}} />Contact Us</div>
                </div>
                <div className='RouteLink'>
                    <div className='routeContent'><SettingsIcon style={{"width": "24px", "height": "24px", "marginRight": "20px"}} />Setting</div>
                </div>
            </div>

            <div className='sidebar-poster'>
                <div className='poster'>
                    <div className='posterIcon'>
                        <AddCircleIcon style={{"width": "28px", "height": "28px", "color": "blue"}} />
                    </div>
                    <div className='posterHeader'>
                        <span>Need Help</span>
                    </div>
                    <div className='posterText'>
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</span>
                    </div>
                    <div className='posterButton'>
                        <button>
                            Customer Service
                        </button>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default SideBar;