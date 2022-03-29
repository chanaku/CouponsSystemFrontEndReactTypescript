import React, { useState } from 'react';
import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./AddCoupon.css";
import { CouponPayloadModel } from '../../Models/CouponPayloadModel';
import axios from 'axios';
import { CouponModel } from '../../Models/CouponModel';
import globals from '../../services/globals';

function AddCoupon(): JSX.Element {
    const [image, setImage] = useState('');

    const handleChangeImage = (e: any) => {
        setImage(URL.createObjectURL(e.target.files[0]));
    }

    const schema = yup.object().shape({
        company:
            yup.string()
                .required("company is required"),
        title:
            yup.string()
                .required("title is required"),
        description:
            yup.string()
                .required("description is required"),
        startDate:
            yup.date()
                .min(new Date(), "can't start from future")
                .typeError("you must specify a start date")
                .required("start date is required")
                .nullable().default(() => new Date()),
        endDate:
            yup.date()
                .when("startDate", (startDate, schema) => startDate && schema.min(startDate))
                .typeError("you must specify a end date")
                .required("end date is required")
                .nullable().default(() => new Date()),
        amount:
            yup.number()
                .moreThan(0)
                .typeError("you must insert only numbers")
                .required("amount is required"),
        price:
            yup.number()
                .moreThan(0)
                .typeError("you must insert only numbers")
                .required("amount is required"),
        image:
            yup.mixed()
                .test('required', "you need to provide a file", (value) => {
                    return value && value.length;
                })
                .test('fileSize', "the file is too large", (value, context) => {
                    return value && value[0].size <= 200000;
                })
                .test("type", "we only support png", function (value) {
                    return value && value[0].type === "image/png";
                })




    });

    const { register, handleSubmit, formState: { errors, isDirty, isValid } } =
        useForm<CouponPayloadModel>({ mode: "all", resolver: yupResolver(schema) });

    const addCoupon = async (coupon: CouponPayloadModel) => {
        const formData = new FormData();
        formData.append("company", coupon.company as string);
        formData.append("title", coupon.title as string);
        formData.append("description", coupon.description as string);
        const exp = (coupon.startDate?.toISOString().split('T')[0]);
        formData.append("startDate", exp as string);
        const exp2 = (coupon.startDate?.toISOString().split('T')[0]);
        formData.append("endDate", exp2 as string);
        formData.append("amount", (coupon.amount as number).toString());
        formData.append("price", (coupon.price as number).toString());
        formData.append("image", coupon.image?.item(0) as any);
    
    //sending post request to spring boot
    console.log(FormData);
    await axios.post<CouponModel>(globals.urlsMain.coupons, FormData)
        .then(res => { alert(JSON.stringify(res.data)) })
        .catch(err => { console.log(err); });
}

    return (
        <div className="AddCoupon">
            <form onSubmit={handleSubmit(addCoupon)}>
                {
                    errors.company?.message ?
                        <>
                            <span>{errors?.company?.message}</span>
                        </> :
                        <>
                            <label htmlFor="company">company</label>
                        </>
                }

                <input
                    {...register("company")}
                    id="company"
                    name="company"
                    type="text"
                    placeholder="coupon company..." />

                {
                    errors.title?.message ?
                        <>
                            <span>{errors?.title?.message}</span>
                        </> :
                        <>
                            <label htmlFor="title">title</label>
                        </>
                }
                <input
                    {...register("title")}
                    id="title"
                    name="title"
                    type="text"
                    placeholder="title..." />

                {
                    errors.description?.message ?
                        <>
                            <span>{errors?.description?.message}</span>
                        </> :
                        <>
                            <label htmlFor="description">description</label>
                        </>
                }
                <input
                    {...register("description")}
                    id="description"
                    name="description"
                    type="text"
                    placeholder="description..." />

                {
                    errors.startDate?.message ?
                    <>
                        <span>{errors?.startDate?.message}</span>
                    </>:
                    <>
                        <label htmlFor="startDate">start date </label>
                    </>
                }

                <input
                    {...register("startDate")}
                    id="startDate"
                    name="startDate"
                    type="date"
                    placeholder="start date.."/>
                {
                    errors.endDate?.message?
                    <>
                        <span>{errors?.endDate?.message}</span>
                    </>:
                    <>
                        <label htmlFor="endDate">end date</label>
                    </>
                }
                <input
                    {...register("endDate") }
                    id="endDate"
                    name="endDate"
                    type="date"
                    placeholder="end date.."/>
                {
                    errors.amount?.message ?
                    <>
                        <span>{errors.amount?.message}</span>
                    </>:
                    <>
                        <label htmlFor="amount">amount</label>
                    </>
                }
                <input
                    {...register("amount")}
                    id="amount"
                    name="amount"
                    type="number"
                    placeholder="amount.."/>

                {
                    errors.price?.message ?
                    <>
                        <span>{errors.price?.message}</span>   
                    </>:
                    <>
                        <label htmlFor="price">price</label>
                    </>
                }
                <input
                    {...register("price")}
                    id="price"
                    name="price"
                    type="number"
                    placeholder="price.."/> 
                {
                    errors.image?.message ?
                    <>
                        <span>{errors.image?.message}</span> 
                    </>:
                    <>
                        <label htmlFor="image">image</label>
                    </>
                }
                <input
                    {...register("image")}
                    id="image"
                    name="image"
                    type="file"
                    placeholder="coupon image.."/>
                <div className="wrap-box">
                    {image?<img src={image} alt=""></img>: 'no image yet!'}
                </div>

                <button disabled={!isValid}>ADD</button>

            </form>

        </div>
    );
}

export default AddCoupon;
