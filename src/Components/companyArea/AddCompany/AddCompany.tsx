import "./AddCompany.css";
import * as yup from "yup";
import { CompanyModel } from "../../Models/CompanyModel";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import globals from "../../services/globals";

function AddCompany(): JSX.Element {

    const schema = yup.object().shape({
        name:
            yup.string()
                .required("name is required"),
         email:
            yup.string()
                .required("email is required"),

        password:
            yup.string()
                .required("password is required"),
    }
    );
    const { register, handleSubmit, formState: { errors, isDirty, isValid } } =
        useForm<CompanyModel>({ mode: "all", resolver: yupResolver(schema) });

    const addCompany = async (company: CompanyModel) => {
        const formData = new FormData();
        formData.append("name", company.name as string);
        formData.append("email", company.email as string);
        formData.append("password", company.password as string);
        console.log(FormData);

        await axios.post<CompanyModel>(globals.urls.companies, FormData)
            .then(res => { alert(JSON.stringify(res.data)) })
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
