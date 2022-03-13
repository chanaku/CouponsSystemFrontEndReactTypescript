 import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from "../../../App";
import About from "../../LayotArea/About/About";
import AddCoupon from "../../CouponsArea/AddCoupon/AddCoupon";
import CouponsList from "../../CouponsArea/CouponsList/CouponsList";
import Home from "../../LayotArea/Home/Home";
import Login from '../../LoginArea/Login/Login';
import Page404 from "../../SharedArea/Page404/Page404";
import "./Routing.css";
import CompanyList from '../../companyArea/CompanyList/CompanyList';
import AddCompany from '../../companyArea/AddCompany/AddCompany';
import Logout from '../../LoginArea/Logout/Logout';
import UpdateCompany from '../../companyArea/UpdateCompany/UpdateCompany';

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route index element={<Home/>}/>
                <Route path="coupons" element={<CouponsList/>}/>
                <Route path="companies" element={<CompanyList/>}/>
                <Route path="companies/add" element={<AddCompany/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="logout" element={<Logout/>}/>
                <Route path="coupons/add" element={<AddCoupon/>}/>
                <Route path="companies/update" element={<UpdateCompany/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </div>
    );
}

export default Routing;
