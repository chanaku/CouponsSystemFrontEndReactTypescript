 import React from 'react';
// import { Controller, useForm } from 'react-hook-form';

// interface FindCouponForm {category: string;
// }

// interface ICategory {
//   value: string;
//   label: string;
// }
// function CouponsCategoryForm(): JSX.Element {
//     const { handleSubmit, control, formState:{errors}} = useForm<FindCouponForm>();

//     const handleOnSubmit = (data:FindCouponForm) => {
//         console.log(data);
//     }
//     const categoryOptions: ICategory[] = [
//         {value:"Food", label:"Food" },
//         {value:"Electricity", label:"Electricity"},
//         {value:"Restaurant", label:"Restaurant"},
//         {value:"Vacation", label:"Vacation"},
//     ];
//     return(
//         <React.Fragment>
//            <form onSubmit={handleSubmit(handleOnSubmit)}>
//                <Controller
//                    control={control}
//                    render={({ field: { onChange, value, name, ref } }) => (
//                      <select
//                       inputRef={ref}
//                       value={categoryOptions.find((c) => c.value === value)}
//                       name={name}
//                       options={categoryOptions}
//                       onChange={(selectedOption: ICategory) => {
//                         onChange(selectedOption.value);
//                       }}
//                      />
//                    )}
//                    name={"category"}
//                 />
//                <button type={"submit"}>submit</button>
//             </form>
//         </React.Fragment>
// );
// }