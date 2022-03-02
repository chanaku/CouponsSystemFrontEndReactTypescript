import React from 'react';
import AuthMenu from '../../LoginArea/AuthMenu/AuthMenu';
import Nav from '../../RoutingArea/Nav/Nav';
import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header">
			<h1>Coupon System</h1>
            <h6>by Chana Kurtz</h6>
            <AuthMenu />
           <Nav/>
        </div>
    );
}

export default Header;
