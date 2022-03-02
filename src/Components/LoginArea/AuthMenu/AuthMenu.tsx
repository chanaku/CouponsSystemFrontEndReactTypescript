import { Link } from "react-router-dom";
import CustomLink from "../../RoutingArea/CustomeLinks/CustomLink";
import authService from "../../services/AuthService";
import "./AuthMenu.css";

function AuthMenu(): JSX.Element {
    return (
        <div className="AuthMenu">
			{(authService.isLoggenedIn)?<><span>Hello chana</span> <div className='inner'><button className="button-28"><CustomLink to="/login">Login</CustomLink></button></div></>:
            <><span>hello guest</span><div className='inner'><button className="button-28"><CustomLink to="/logout">Logout</CustomLink></button></div></>}
        </div>
    );
}

export default AuthMenu;
