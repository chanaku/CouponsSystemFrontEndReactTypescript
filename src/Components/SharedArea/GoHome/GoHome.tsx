import React from 'react';
import { Link } from "react-router-dom";
import "./GoHome.css";

function GoHome(): JSX.Element {
    return (
        <div className="GoHome">
			<p>
                <Link to="/">Go to home page</Link>
            </p>
        </div>
    );
}

export default GoHome;
