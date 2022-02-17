import React from 'react';
import globals from "../services/globals";
import "./Avatar.css";

interface AvatarProps{
    uuid:any;
}
function Avatar(props: AvatarProps): JSX.Element {

    const url = globals.urls.images +props.uuid;
    console.log(url);
    return (
        <div className="Avatar">
			<img src={url} ></img>
        </div>
    );
}

export default Avatar;
