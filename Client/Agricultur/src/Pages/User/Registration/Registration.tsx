import AOS from 'aos';
import * as z from 'zod';
import axios from "axios";
import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import { FaLeaf } from "react-icons/fa6";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '../../../Components/Common/Button/Button';
import RegistrationnImage from '../../../assets/Registration.png';

interface FormValues {
    Name: string;
    Email: string;
    Password: string;
};

const Registration: React.FC = () => {

    useEffect(() => {
        AOS.init();
    })

    // CREATION OF THE REGISTRATION ZOD SCHEMA

    const RegistrationSchema = z.object({
        Name: z.string().min(1, { message: 'Name is required'}),
        Email: z.string().email({ message: "Invalid email address" }),
        Password: z.string().min(1, { message: 'Password is required'})
    });

    const { enqueueSnackbar } = useSnackbar();

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(RegistrationSchema)
    });

    type UserData = z.infer<typeof RegistrationSchema>

    // ONREGISTRATION FUNCTION

    const onRegistration : SubmitHandler<FormValues> = async (data: UserData) => {
        try {
            await axios.post(`http://localhost:4000/Users/Registration`, data) 
            .then(() => {
                enqueueSnackbar("Registration Completed! Kindly Log in", {variant: "success"})
            })
        } catch (error) { 
            enqueueSnackbar("Registration unsuccessful!" , {variant: "error"})
            console.log(error)
        }
    }

return (
    <div id='Registration' className='flex gap-10 items-center justify-center h-screen'>
        <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
            <img src={RegistrationnImage} alt="" />
        </div>
        <form method="post" onSubmit={handleSubmit(onRegistration)} encType="multipart/form-data" className='flex flex-col items-center gap-2' data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1500">
            <div className='my-10'>
                <h2 className='flex text-5xl'>Welcome to Agri {<FaLeaf color="green" />} cultur</h2>
                <p className='mt-10 text-xl text-center'>Create your account.</p>
            </div>
            <div className='flex flex-col gap-2'>
                <label className='font-bold' htmlFor="">Name</label> 
                <input placeholder="Enter Name..." {...register('Name', { required: 'Name is required' })} className='border-black border-b h-8 outline-none truncate px-1 py-2 text-black w-80 sm:w-96' required />
                {errors.Name && <p className="text-center text-red-700">{errors.Name.message}</p>}
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
            <Button
                ButtonText='Sign Up'
                ButtonStyle='bg-green-600 cursor-pointer flex items-center justify-center h-8 mt-1 text-center text-white rounded w-32 hover:bg-black'
                onClick={handleSubmit(onRegistration)}
            />
        </form>
    </div>
)
}

export default Registration