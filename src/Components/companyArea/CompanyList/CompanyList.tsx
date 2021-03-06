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
import UpdateCompany from '../UpdateCompany/UpdateCompany';
import { CompanyService } from '../../services/CompanyService';
import authService from '../../services/AuthService';


function CompanyList(): JSX.Element {
    const init: CompanyModel[] = []
    const [companies, setCompanies] = useState<any>(init)

    const onChange = (id: any) => {
        CompanyService.setId(id);
        console.log(CompanyService.getId());
        return id;
    }
    let clientType : any= authService.getType();
    const headers: any = { authorization :  authService.getToken() };
    const getCompanies = async () => {
        return await axios.get<CompanyModel[]>("http://localhost:8080/"+clientType.toLowerCase()+"/company", {headers})
    }
    const deleteCompany = async (id: number, e: any) => {
        // console.log("this is from delete " + id)
        // const u = "http://localhost:8080/"+clientType.toLowerCase()+"/company/${id}";
        // console.log(u);
        await axios.delete(`http://localhost:8080/`+clientType.toLowerCase()+`/company/${id}`,{headers})
            .then(res => {
                getCompanies();
                console.log(res.data);
            })
            .catch((err) => {
                notify.error(err)
            });
    };

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
                            <th>Actions <Link to="/companies/add"><button className="button-26">Add Company</button></Link></th>
                        </tr>
                    </thead>


                    <tbody>

                        {companies.map((company: CompanyModel) => {

                            return [
                                <tr key={company.id}>
                                    <td>{company.id}</td>
                                    <td>{company.name}</td>
                                    <td>{company.email}</td>
                                    <td>{company.password}</td>
                                    <td><button className="button-26" onClick={(e) => deleteCompany(company.id || 0, e)}>Delete Company</button>&nbsp;
                                        <Link to="/companies/update">
                                            <button className="button-26" onClick={onChange(company.id)}>Update Company</button>
                                        </Link>
                                    </td>
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
