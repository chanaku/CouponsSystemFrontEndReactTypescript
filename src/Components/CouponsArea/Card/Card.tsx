import { Component } from "react";
import { CouponModel } from "../../Models/CouponModel";
import "./Card.css";

interface CouponCardProps{
    coupon: CouponModel;
}


function Card(props: CouponCardProps): JSX.Element {
    return (
        <div className="Card Box2">
			<div>
                {props.coupon?.title} <br/>
                company: {props.coupon?.company} <br/>
                {props.coupon?.description} <br/>
            </div>
        <div>
                    <img src={props.coupon?.image} alt={props.coupon?.title} />
              </div>
           </div>
    );
}

export default Card;
