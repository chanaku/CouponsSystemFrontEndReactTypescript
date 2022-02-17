import { Link } from "react-router-dom";
import authService from "../services/AuthService";
import "./AuthMenu.css";

function AuthMenu(): JSX.Element {
    return (
        <div className="AuthMenu">
			{(authService.isLoggenedIn)?<><span>Hello chana</span> <Link to="/login">logout</Link></>:
            <><span>hello guest</span><Link to="/logout">logout</Link></>}
        </div>
    );
}

export default AuthMenu;
