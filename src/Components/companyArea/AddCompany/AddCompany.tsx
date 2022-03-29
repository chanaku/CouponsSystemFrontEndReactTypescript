import "./AddCompany.css";
import * as yup from "yup";
import { CompanyModel } from "../../Models/CompanyModel";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import globals from "../../services/globals";
import axios from "axios";
import notify from "../../services/Notification2";


function AddCompany(): JSX.Element {

    const schema =yup.object().shape({
        name:
            yup.string()
                .required("company's name is required"),
        email:
            yup.string()
                .email()
                .required("company's email is required"),
        password:
            yup.string()
                .required("please enter password")
                .min(6, "password is too short")
    });
    const { register, handleSubmit, formState: { errors, isDirty, isValid } } =
    useForm<CompanyModel>({ mode: "all", resolver: yupResolver(schema) });

const addCompany = async (company: CompanyModel) => {
    const formData = new FormData();
    formData.append("name", company.name as string);
    formData.append("email", company.email as string);
    formData.append("password", company.password as string);
    console.log(FormData);

    await axios.post<CompanyModel>(globals.urlsAdmin.companies, company)
        .then(res => { console.log(JSON.stringify(res.data)) })
        .catch(err => { console.log(err); });
}
return (
    <div className="AddCompany">
        <form onSubmit={handleSubmit(addCompany)}>
            {
                errors.name?.message ?
                    <>
                        <span>{errors?.name?.message}</span>
                    </> :
                    <>
                        <label htmlFor="name">name</label>
                    </>
            }

            <input
                {...register("name")}
                id="name"
                name="name"
                type="text"
                placeholder="company name..." />

            {
                errors.email?.message ?
                    <>
                        <span>{errors?.email?.message}</span>
                    </> :
                    <>
                        <label htmlFor="email">email</label>
                    </>
            }
            <input
                {...register("email")}
                id="email"
                name="email"
                type="text"
                placeholder="email..." />

            {
                errors.password?.message ?
                    <>
                        <span>{errors?.password?.message}</span>
                    </> :
                    <>
                        <label htmlFor="password">password</label>
                    </>
            }
            <input
                {...register("password")}
                id="password"
                name="password"
                type="password"
                placeholder="password..." />

            {
                

            <button disabled={!isValid}>ADD</button>
            }
        </form>
    </div>
);
}

export default AddCompany;


