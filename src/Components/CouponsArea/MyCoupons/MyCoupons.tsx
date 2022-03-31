import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CouponModel } from "../../Models/CouponModel";
import authService from "../../services/AuthService";
import globals from "../../services/globals";
import notify, { SccMsg } from "../../services/Notification2";
import EmptyView from "../../SharedArea/EmptyView/EmptyView";
import "./MyCoupons.css";

function MyCoupons(): JSX.Element {

      const init: CouponModel[] = [];
      const[coupons, setCoupons] =useState<CouponModel[]>(init);
      const navigate = useNavigate();
  
      let clientType : any= authService.getType();
      let urlmap = new Map<string, string>();
      urlmap.set('ADMINISTRATOR', globals.urlsAdmin.coupons)
      urlmap.set('COMPANY', globals.urlsCompany.coupons)
      urlmap.set('CUSTOMER', globals.urlsCustomer.coupons)
      // urlmap.set('null' , globals.urlsMain.coupons)
      const headers: any = { authorization :  authService.getToken() };
  
  
      
      const  getCoupons = async()=>{
       
          return await axios.get<CouponModel[]>('http://localhost:8080/'+(clientType).toLowerCase()+'/mycoupons' ,{headers});
          
          }
  
          const body = document.body;
       
          useEffect(() => {
              // switch (category) {
              //   case "FOOD":
              //     body.style.background= '#fff';
              //     break;
              // }
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
                              
                            </div>
                            
                          </div>
                          </div>
                  </>
                ]
              })
         
          
        }
  
        {coupons?.length === 0 && <EmptyView msg="No Coupons for you" />}
  
      </div >
    );
  }
  

export default MyCoupons;
