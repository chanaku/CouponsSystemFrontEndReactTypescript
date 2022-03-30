import React, { useContext, useState, useEffect } from 'react';
import authService from '../../services/AuthService';
import CustomLink from "../CustomeLinks/CustomLink";
import "./Nav.css";

function Nav(): JSX.Element {
    const [loggedIn, setLoggedIn] = useState(authService.getIsLoggenedIn());
    const [clientType, setClientType] = useState(authService.getType());

    useEffect(() => {
        setInterval(() => {
            setLoggedIn(authService.getIsLoggenedIn());
            setClientType(authService.getType());
        }, 1000)
    }, []);

    const isVisible = (feature: string = '') => {
        switch (clientType) {
            case 'ADMINISTRATOR':
                return true;
            case 'COMPANY':
                if (feature === 'Add Coupon') {
                    return true;
                } else if (feature === 'My Coupons') {
                    return true;
                }
                return false;
            case 'CUSTOMER': 
                if (feature === 'My Coupons') {
                    return true;
                }
                return false;
            default:
                return false;
        }
    }
    return (
        <div>
            <nav>
                <div id='outer'>
                    <div className='inner'>
                        <button className="button-28">
                            <CustomLink to="/home">Home</CustomLink>
                        </button>
                    </div>
                    <div className='inner'>
                        <ul className="menus">
                            <li className="menu-items">
                                <button className="button-28">Available Coupons</button>
                                <ul className="sub-menus">
                                    <li className="menu-items">
                                            <button className="button-28 menu-button">
                                                <CustomLink to="/coupons/FOOD">FOOD</CustomLink>
                                            </button>
                                    </li>
                                    <li className="menu-items">
                                        <button className="button-28 menu-button">
                                            <CustomLink to="/coupons/ELECTRICITY">ELECTRICITY</CustomLink>
                                        </button>
                                    </li>
                                    <li className="menu-items">
                                        <button className="button-28 menu-button">
                                            <CustomLink to="/coupons/RESTAURANT">RESTAURANT</CustomLink>
                                        </button>
                                    </li>
                                    <li className="menu-items">
                                        <button className="button-28 menu-button">
                                            <CustomLink to="/coupons/VACATION">VACATION</CustomLink>
                                        </button>
                                    </li>
                                </ul>
                            </li>    
                        </ul>
                    </div>
                    <div className={`inner ${!isVisible('My Coupons') ? 'hide' : ''}`}>
                        <button className="button-28">
                            <CustomLink to="/coupons/mycoupons">My Coupons</CustomLink>
                        </button>
                    </div>
                    <div className='inner'>
                        <button className="button-28">
                            <CustomLink to="/about">About</CustomLink>
                        </button>
                    </div>
                    <div className={`inner ${!isVisible() ? 'hide' : ''}`}>
                        <button className="button-28">
                            <CustomLink to="/companies">Companies</CustomLink>
                        </button>
                    </div>
                    <div className={`inner ${!isVisible() ? 'hide' : ''}`}>
                        <button className="button-28">
                            <CustomLink to="/companies/add">Add Company</CustomLink>
                        </button>
                    </div>
                    <div className={`inner ${!isVisible('Add Coupon') ? 'hide' : ''}`}>
                        <button className="button-28">
                            <CustomLink to="/coupons/add">Add Coupon</CustomLink>
                        </button>
                    </div>
                    <div className={`inner ${loggedIn ? 'hide' : ''}`}>
                        <button className="button-28">
                            <CustomLink to="/login">Login</CustomLink>
                        </button>
                    </div>
                    <div className={`inner ${!loggedIn ? 'hide' : ''}`}>
                        <button className="button-28">
                            <CustomLink to="/logout">Logout</CustomLink>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
