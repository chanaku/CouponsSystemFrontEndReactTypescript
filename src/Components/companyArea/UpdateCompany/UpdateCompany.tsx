
import { useForm } from "react-hook-form";
import { CompanyModel } from "../../Models/CompanyModel";
import "./UpdateCompany.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import globals from "../../services/globals";
import axios from "axios";
import { CompanyService } from "../../services/CompanyService";

function UpdateCompany(): JSX.Element {
 
    const schema =yup.object().shape({
        name:
            yup.string(),
        email:
            yup.string()
                .email(),
        password:
            yup.string()
                .min(6, "password is too short")
    });
    const { register, handleSubmit, formState: { errors, isDirty, isValid } } =
    useForm<CompanyModel>({ mode: "all", resolver: yupResolver(schema) });

const UpdateCompany = async (company: CompanyModel) => {
    // const formData = new FormData();
    // formData.append("id", CompanyService.getId() as unknown as string);
    // formData.append("name", company.name as string);
    // formData.append("email", company.email as string);
    // formData.append("password", company.password as string);
    // console.log(FormData);
        console.log(company);
        const id = CompanyService.getId() || 0 ;
        company.id = id as number
        
        console.log(company);
    await axios.put<CompanyModel>(globals.urlsAdmin.companies, company)
        .then(res => { console.log(JSON.stringify(res.data)) })
        .catch(err => { console.log(err); });
}
console.log("Updating Company");
    console.log(CompanyService.getId());
return (
    <div className="UpdateCompany">
           
        <form onSubmit={handleSubmit(UpdateCompany)}>
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
                

            <button disabled={!isValid}>Update</button>
            }
        </form>
    </div>
);
}

export default UpdateCompany;
