import React, { useEffect } from 'react';
import "./Login.css";
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginModel } from '../../Models/LoginModel';
import axios from 'axios';
import globals from '../../services/globals';
import AuthService from '../../services/AuthService';
import authService from '../../services/AuthService';
import { string } from 'yup';


function Login(): JSX.Element {

    const schema = z.object({

        email: z.string().email().nonempty("Email is required"),
        password: z.string().min(4).max(15).nonempty("Password is required"),
        clientType: z.string().nonempty("Client Type is required")

    });

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isDirty, isValid },
    } = useForm<LoginModel>({
        mode: "all",
        resolver: zodResolver(schema),
    });
    const loginToServer = async (login: LoginModel) => {
        const formData = new FormData();
        formData.append("email", login.email as string);
        formData.append("password", login.password as string);
        formData.append("clientType", login.clientType as string);
        console.log(FormData);
        console.log(login.clientType);

        let type = login.clientType;
        type=type?.toString().toLowerCase();

        await axios.post<LoginModel>("http://localhost:8080/guest/login" , login)
            .then(res => (active(res.data as string, login.clientType as string)))
            .catch((err: any) => { console.log(err + " "+ login); })
    }
   
    function active(data: string, clientType: string): void {
        authService.setToken(data);
        authService.setIsLoggenedIn(true);
        authService.setType(clientType);
        console.log(authService.getToken());
        console.log(authService.getIsLoggenedIn());
    }


    return (

        <div className="Login">

            <h2>Login</h2>
            <form onSubmit={handleSubmit(loginToServer)}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input {...register("email")} placeholder="Email Address" type="text" className="form-control" aria-describedby="emailHelpBlock" required />

                </div>
                <span className="bad">{errors.email?.message}</span>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input {...register("password")} placeholder="don't show your password with others" type="text" className="form-control" aria-describedby="passwordHelpBlock" required />
                </div>
                <span id="passwordHelpBlock" className="bad">{errors.password?.message}</span>

                <div className="form-group">
                    <label htmlFor="select">Select</label>
                    <div>
                        <select {...register("clientType")} className="custom-select" required>
                            <option></option>
                            <option value="ADMINISTRATOR">Admin</option>
                            <option value="COMPANY">Company</option>
                            <option value="CUSTOMER">Customer</option>

                        </select>

                    </div>
                    <span className="bad">{errors.clientType?.message}</span>
                </div>
                <div className="form-group">
                    <button disabled={!isDirty || !isValid} name="submit" type="submit" className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;

