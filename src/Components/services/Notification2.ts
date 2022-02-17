import React from 'react';
import {Notyf} from 'notyf'

export enum SccMsg{
    ADDED_COUPON = 'Added coupon successfully',
    UPDATED_COUPON = 'Updated coupon successfully',
    DELETED_COUPON = 'Deleted coupon successfully',
    GOT_COUPON='Got coupon successfully',
    GOT_COUPONS = 'Got coupons successfully',
    ADDED_COMPANY = 'Added company successfully',
    UPDATED_COMPANY = 'Updated company successfully',
    DELETED_COMPANY = 'Deleted company successfully',
    GOT_COMPANY='Got company successfully',
    GOT_COMPANIES = 'Got companies successfully',
    ADDED_CUSTOMER = 'Added customer successfully',
    UPDATED_CUSTOMER = 'Updated customer successfully',
    DELETED_CUSTOMER = 'Deleted customer successfully',
    GOT_CUSTOMER='Got customer successfully',
    GOT_CUSTOMERS = 'Got customers successfully',

}
export enum ErrMsg{

}
class Notify{

    private notification = new Notyf({duration:4000, position:{x:"left",y:"top"}});
    public success(message: string){
        this.notification.success(message);
    }

    public error(err: any){
        const msg = this.extractMsg(err);
        this.notification.error(msg);
    }

    private extractMsg(err: any): string{
        
				if(typeof err === 'string'){
            return err;
        }

        if(typeof err?.response?.data === 'string'){ //Backend exact error
            return err.response.data;
        }

        if(Array.isArray(err?.response?.data)){ // Backend exact error list
            return err?.response?.data[0];
        }

        
				// Must be last
        if(typeof err?.message === 'string'){
            return err.message;
        }


        return "oooooops, an error occurred, please try again.";


    }
}
const notify = new Notify();
export default notify;