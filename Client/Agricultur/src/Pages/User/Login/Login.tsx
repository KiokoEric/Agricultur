import AOS from 'aos';
import * as z from 'zod';
import axios from "axios";
import { useSnackbar } from 'notistack';
import { FaLeaf } from "react-icons/fa6";
import React, { useEffect } from 'react';
import { useCookies } from "react-cookie";
import LoginImage from '../../../assets/Login.png';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '../../../Components/Common/Button/Button';

interface FormValues {
    Email: string;
    Password: string;
};

const Login:React.FC  = () => {

    useEffect(() => {
        AOS.init();
    })

    // CREATION OF THE LOGIN ZOD SCHEMA

    const LoginSchema = z.object({
        Email: z.string().min(1, { message: 'Email is required'}),
        Password: z.string().min(1, { message: 'Password is required'}),
    });

    // const [ _, setCookie] = useCookies(["auth_token"]); 
    const { enqueueSnackbar } = useSnackbar();

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(LoginSchema)
    });

    // ONLOGIN FUNCTION

    const onLogin : SubmitHandler<FormValues> = async (data) => {
        try {
            const response = await axios.post("https://localhost:4000/Users/Login", data)
                // setCookie("auth_token", response.data.Token)
                window.localStorage.setItem("UserID", response.data.UserID)
                enqueueSnackbar("Logged in successfully!" , {variant: "success"}) 
                setTimeout(() => {
                    window.location.reload();
                }, 1500);
        } catch (error) { 
            enqueueSnackbar("Login unsuccessful!" , {variant: "error"})
            console.log(error)
        }
    }

    const DemoLogin = async (e: any) => {
        e.preventDefault()
        const data = {
            Email : "kiokoerick040@gmail.com" , Password : "Victory2024"
        }
        try {
            const response = await axios.post("https://localhost:4000/Users/Login", data)
                // setCookie("auth_token", response.data.Token)
                window.localStorage.setItem("UserID", response.data.UserID)
                enqueueSnackbar("Logged in successfully!" , {variant: "success"}) 
                window.location.reload();
        } catch (error) { 
            enqueueSnackbar("Login unsuccessful!" , {variant: "error"}) 
            console.log(error) 
        }
    }

return (
    <div id='Login' className='grid grid-cols-2 items-center justify-center'>
        <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500" className='flex items-center justify-center' >
            <img src={LoginImage} alt="" className='w-11/12' />
        </div>
        <form id='Loginform' method="post" onSubmit={handleSubmit(onLogin)} encType="multipart/form-data" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1500" className='flex flex-col items-center gap-2'>
            <div className='my-10'>
                <h2 className='flex text-5xl'>Welcome to Agri {<FaLeaf color="green" />} cultur</h2>
                <p className='mt-5 text-xl text-center'>Kindly Login</p>
            </div>
            <div className='flex flex-col gap-2'>
                <label className='font-bold' htmlFor="Email">Email</label> 
                <input placeholder="Enter Email..." {...register('Email', { required: 'Email is required' })} className='border-black border-b h-8 outline-none truncate px-1 py-2 text-black w-80 sm:w-96' required />
                {errors.Email && <p className="text-center text-red-700">{errors.Email.message}</p>}
            </div>
            <div className='flex flex-col gap-2'>
                <label className='font-bold' htmlFor="Password">Password</label> 
                <input placeholder="Enter Password..." {...register('Password', { required: 'Password is required' })} className='border-black border-b h-8 outline-none truncate px-1 py-2 text-black w-80 sm:w-96' required />
                {errors.Password && <p className="text-center text-red-700">{errors.Password.message}</p>}
            </div>
            <div className='flex gap-5 mt-5'>
                <Button
                    ButtonText='Login'
                    ButtonStyle='bg-green-600 cursor-pointer flex items-center justify-center h-8 text-center text-white px-3 py-1 rounded w-40'
                    onClick={handleSubmit(onLogin)}
                />
                <Button
                    ButtonText='Demo Login'
                    ButtonStyle='bg-green-600 cursor-pointer flex items-center justify-center h-8 text-center text-white px-3 py-1 rounded w-40'
                    onClick={DemoLogin}
                />
            </div>
        </form>
    </div>
)
}

export default Login