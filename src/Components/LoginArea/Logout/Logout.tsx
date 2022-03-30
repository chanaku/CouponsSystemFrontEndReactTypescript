import { useEffect } from "react";
import  { useNavigate }   from "react-router-dom";
import authService from "../../services/AuthService";
import notify, { SccMsg } from "../../services/Notification2";
import "./Logout.css";

function Logout(): JSX.Element {

    const navigate = useNavigate();

    useEffect(()=> //React Hook for running side effects inside a fc
    { 
        authService.setToken(" ");
        authService.setIsLoggenedIn(false);
        authService.setType("");
        notify.success(SccMsg.LOGOUT_SUCCESS);
        navigate("/home");
        console.log(authService.getToken());
        console.log(authService.getIsLoggenedIn());
    });

    
    return (
        <></>
    );
}

export default Logout;

function logoutAction(): any {
    throw new Error("Function not implemented.");
}
