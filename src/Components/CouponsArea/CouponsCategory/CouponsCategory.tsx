import "./CouponsCategory.css";

import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "../../Avatar/Avatar";
import { CouponModel } from "../../Models/CouponModel";
import notify, { SccMsg } from "../../services/Notification2";
import EmptyView from "../../SharedArea/EmptyView/EmptyView";
import Card from '../Card/Card';

function CouponsCategory(): JSX.Element {
    const init: CouponModel[] = [];
    const[coupons, setCoupons] =useState<any>(init);
    const[category, setCategory] = useState();


    
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
      {/* {coupons?.length > 0 &&  */}
           { coupons.map((coup:any) =>{
              return[
                <>  <div key={coup.id}>
                        <div id="card">
                        <img src="https://mumlatzim.me/wp-content/uploads/2019/11/printable-coupons-1_large.png" alt="coupon" />
                          <div id="headline1">
                              <h1>{coup.title}</h1> 
                          </div>
                          <hr/>
                          <div id="headline1">
                            <p>{coup.description}</p>
                          </div>
                          <hr/>
                          <div id="price">
                            <h3>Price: {coup.price}</h3>
                            <button className="button-28">TAKE IT!</button>
                          </div>
                          
                        </div>
                        </div>
                </>
              ]
            })
       
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


export default CouponsCategory;
