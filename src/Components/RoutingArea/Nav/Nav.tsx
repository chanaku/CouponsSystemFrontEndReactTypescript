import React from 'react';
import CustomLink from "../CustomeLinks/CustomLink";
import "./Nav.css";

function Nav(): JSX.Element {
    return (
        <div>
			<nav>
                <div id='outer'>
                    <div className='inner'><button className="button-28"><CustomLink to="/home" >Home</CustomLink></button></div>
                    <div className='inner'><button className="button-28">Available Coupons</button></div>
                    <div className='inner'><button className="button-28"><CustomLink to="/coupons">All Coupons</CustomLink></button></div>
                    <div className='inner'><button className="button-28"><CustomLink to="/coupons/FOOD">FOOD</CustomLink></button></div>
                    <div className='inner'><button className="button-28"><CustomLink to="/coupons/ELECTRICITY">ELECTRICITY</CustomLink></button></div>
                    <div className='inner'><button className="button-28"><CustomLink to="/coupons/RESTAURANT">RESTAURANT</CustomLink></button></div>
                    <div className='inner'><button className="button-28"><CustomLink to="/coupons/VACATION">VACATION</CustomLink></button></div>
                    <div className='inner'><button className="button-28"><CustomLink to="/coupons/mycoupons">My Coupons</CustomLink></button></div>
                    <div className='inner'><button className="button-28"><CustomLink to="/about">About</CustomLink></button></div>
                    <div className='inner'><button className="button-28"><CustomLink to="/companies">Companies</CustomLink></button></div>
                    <div className='inner'><button className="button-28"><CustomLink to="/companies/add">Add Company</CustomLink></button></div>
                    <div className='inner'><button className="button-28"><CustomLink to="/coupons/add">Add Coupon</CustomLink></button></div>
                    {/* <div className='inner'><button className="button-28"><CustomLink to="/login">Login</CustomLink></button></div>
                    <div className='inner'><button className="button-28"><CustomLink to="/logout">Logout</CustomLink></button></div> */}
                </div>
          </nav>
        </div>
    );
}

export default Nav;
