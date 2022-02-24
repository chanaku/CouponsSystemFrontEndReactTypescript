import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CompanyModel } from "../../Models/CompanyModel";
import notify, { SccMsg } from "../../services/Notification2";
import EmptyView from "../../SharedArea/EmptyView/EmptyView";
import "./CompanyList.css";
import globals from '../../services/globals';
import { List } from 'material-ui';


function CompanyList(): JSX.Element {
    const init: CompanyModel[] = []
    const [companies, setCompanies] = useState<any>(init)
    
    const getCompanies = async () => {
        return await axios.get<CompanyModel[]>(globals.urls.companies)
    }
    useEffect(() => {
        const response = getCompanies();
        response
            .then((response) => {
                setCompanies(response.data);
                notify.success(SccMsg.GOT_COMPANIES);
            })
            .catch((err) => {
                notify.error(err)
            });
    },
        []);


    return (
        <div className="CompanyList">
            {companies?.length > 0 && <h1>companies</h1>}
            {companies?.length > 0 && 
            

                 <table className="mytable">

                     <thead>
                         <tr>
                             <th>Id</th>
                             <th>name</th>
                             <th>email</th>
                            <th>password</th>
                             <th>Actions <Link to="/addCompany"><button className="button-26">Add Company</button></Link></th>
                         </tr>
                     </thead>


                     <tbody>

                         {companies.map((coupon: CompanyModel) => {

                             return [
                                 <tr key={coupon.id}>
                                    <td>{coupon.id}</td>
                                    <td>{coupon.name}</td>
                                     <td>{coupon.email}</td>
                                 <td>{coupon.password}</td>
                                     <td><button className="button-26">Delete Company</button>&nbsp;<button className="button-26">Update Company</button> </td>
                                 </tr>
                             ]
                         })}
                     </tbody>
                 </table >

            }

            {companies?.length === 0 && <EmptyView msg="No Companies for you" />}

        </div>
    );
}

export default CompanyList;
