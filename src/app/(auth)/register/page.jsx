"use client"
import { authClient } from '@/lib/auth-client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [isShowPassword, setIsShowPassword] = useState(false)

    const handleRegisterFunc = async (data) => {
        // console.log(data, "data")
        const { email, name, photo, password } = data;
        // console.log(name, photo)

        const { data: res, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: photo,
            callbackURL: "/"
        })
        console.log(res, error)

        if (error) {
            alert(error.message)
        }

        if (res) {
            alert('SignUp successfull')
        }
    }

    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
            <div className='p-4 rounded-xl bg-white'>
                <h2 className="font-bold text-3xl text-center mb-6">
                    Register your account
                </h2>

                <form className='space-y-4' onSubmit={handleSubmit(handleRegisterFunc)}>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name</legend>
                        <input
                            type="Name"
                            className="input"
                            placeholder="Type Your Name"
                            {...register("name", {
                                required: `"Name fild is required"`
                            })}
                        />
                        {errors.name && (
                            <p className='text-red-600'>{errors.name.message}</p>
                        )}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo URL</legend>
                        <input
                            type="text"
                            className="input"
                            placeholder="Type Your Photo URL"
                            {...register("photo", {
                                required: `"photo fild is required"`

                            })}
                        />
                        {errors.photo && (
                            <p className='text-red-600'>{errors.photo.message}</p>
                        )}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input
                            type="email"
                            className="input"
                            placeholder="Type Your Email"
                            {...register("email", {
                                required: `"Email fild is required"`

                            })}
                        />
                        {errors.email && (
                            <p className='text-red-600'>{errors.email.message}</p>
                        )}
                    </fieldset>

                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend">Password</legend>
                        <input
                            type={isShowPassword ? 'text' : "password"}
                            className="input"
                            placeholder="Type your password"
                            {...register("password", {
                                required: `"Password fild is required"`

                            })}
                        />
                        <span
                            className='absolute flex gap-2 items-center right-2 top-4 cursor-pointer'
                            onClick={() =>
                                setIsShowPassword(!isShowPassword)}>
                            Show password{isShowPassword ? <FaEye /> : <FaEyeSlash />}
                        </span>
                        {errors.password && (
                            <p className='text-red-600'>{errors.password.message}</p>
                        )}
                    </fieldset>

                    <button className="btn w-full bg-slate-800 text-white">Register</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;