import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "../../Avatar/Avatar";
import { CouponModel } from "../../Models/CouponModel";
import notify, { SccMsg } from "../../services/Notification2";
import EmptyView from "../../SharedArea/EmptyView/EmptyView";
import "./CouponsList.css";
import Card from '../Card/Card';

function CouponsList(): JSX.Element {
    const init: CouponModel[] = [];
    const[coupons, setCoupons] =useState<any>(init);


    const  getCoupons = async()=>{
        return await axios.get<any>('http://localhost:8080/admin/coupons');
        }

     
        useEffect(() => {

            const response = getCoupons();
            response
      .then((response) => {
        setCoupons(response.data);
        notify.success(SccMsg.GOT_COUPONS);
      }
      )
      .catch((err) => {
        notify.error(err)
      }
      );
        
  }, []);
    
  return (
    <div className="CouponsList">

      {coupons?.length > 0 && <h1>coupons</h1>}

      

      {coupons?.length > 0 &&

        <Card {...coupons}>{coupons}</Card>
        // <table className="mutable">

        //   <thead>
        //     <tr>
        //       <th>Id</th>
        //       <th>Company</th>
        //       <th>Title</th>
        //       <th>Description</th>
        //       <th>StartDate</th>
        //       <th>EndDate</th>
        //       <th>Amount</th>
        //       <th>Price</th>
        //       <th>Image</th>
        //       <th>Actions <Link to="/addCoupon"><button>Add Coupon</button></Link></th>
        //     </tr>
        //   </thead>


        //   <tbody>

        //     {coupons.map((coupon: CouponModel) => {
              
        //       return [
        //         <tr key={coupon.id}>
        //           <td>{coupon.id}</td>
        //           <td>{coupon.company}</td>
        //           <td>{coupon.title}</td>
        //           <td>{coupon.description}</td>
        //           <td>{coupon.startDate}</td>
        //           <td>{coupon.endDate}</td>
        //           <td>{coupon.amount}</td>
        //           <td>{coupon.price}</td>
        //           <td><Avatar uuid={coupon.image} /></td>
        //           <td><button>Delete Coupon</button>&nbsp;<button>Update Coupon</button> </td>
        //         </tr>
                
        //       ]
        //     })}
        //   </tbody>
        // </table >
        
      }

      {coupons?.length === 0 && <EmptyView msg="No Coupons for you" />}

    </div >
  );
}
export default CouponsList;
