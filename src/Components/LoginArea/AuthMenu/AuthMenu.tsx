import { useState } from "react";
import { Link } from "react-router-dom";
import CustomLink from "../../RoutingArea/CustomeLinks/CustomLink";
import authService from "../../services/AuthService";
import "./AuthMenu.css";



function AuthMenu(): JSX.Element {
    const [isLoggenedIn, setIsLoggenedIn] = useState<boolean>(authService.getIsLoggenedIn());

    const changeStateLoggedIn = ()=>{
       

    }
    return (
        <div className="AuthMenu">
            <CustomLink to="/logout">Logout</CustomLink>
            <CustomLink to="/login">Login</CustomLink>
            {/* {(authService.getIsLoggenedIn) ? 
            <><span>Hello Chana</span> <div className='inner'>
                                    <button className="button-28"><CustomLink to="/logout">Logout</CustomLink></button></div></> :
               <><span>hello guest</span><div className='inner'>
                                    <button className="button-28"><CustomLink to="/login">Login</CustomLink></button></div></>} */}
        </div>
    );
}

export default AuthMenu;
