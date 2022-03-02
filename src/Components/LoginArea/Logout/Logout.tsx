import { Link } from "react-router-dom";
import "./Logout.css";

function Logout(): JSX.Element {

    const logoutNow =()=>{
        
    }

    return (
        <div className="Logout">
			<p>are you sure you want to log out?</p>
            <button onClick={logoutNow}>yes</button><button><Link to="/">No</Link></button>
        </div>
    );
}

export default Logout;
