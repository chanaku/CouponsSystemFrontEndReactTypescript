import React from 'react';
import CustomLink from "../CustomeLinks/CustomLink";
import "./Nav.css";

function Nav(): JSX.Element {
    return (
        <div>
			<nav>
                <div id='outer'>
                    <div className='inner'><button className="button-28"><CustomLink to="/home" >Home</CustomLink></button></div>
                    <div className='inner'><button className="button-28"><CustomLink to="/coupons">Coupons</CustomLink></button></div>
                    <div className='inner'><button className="button-28"><CustomLink to="/about">About</CustomLink></button></div>
                    <div className='inner'><button className="button-28"><CustomLink to="/companies">Companies</CustomLink></button></div>
                    <div className='inner'><button className="button-28"><CustomLink to="/companies/add">Add Company</CustomLink></button></div>
                    <div className='inner'><button className="button-28"><CustomLink to="/coupons/add">Add Coupon</CustomLink></button></div>
                    <div className='inner'><button className="button-28"><CustomLink to="/login">Login</CustomLink></button></div>
                </div>
          </nav>
        </div>
    );
}

export default Nav;
