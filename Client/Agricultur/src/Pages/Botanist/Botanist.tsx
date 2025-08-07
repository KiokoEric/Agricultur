import axios from "axios";
import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import { useCookies } from "react-cookie";
import Button from '../../Components/Common/Button/Button';

const Botanist: React.FC = () => {

    const { enqueueSnackbar } = useSnackbar();
    const [Cookie,_] = useCookies(["auth_token"]);

    // USETSTATE

    const [Name, setName] =  useState('')
    const [Image, setImage] =  useState('')
    const [Prompt, setPrompt] =  useState('')
    const [Speciality, setSpeciality] =  useState('')
    const [Description, setDescription] =  useState('')

    // ONCREATE FUNCTION

    const onCreate = async () => {
        const data = {
            Name,Image,Speciality,Description, Prompt
        }
        try {
            axios.post("http://localhost:4000/Botanist/", data, {
                headers: { authorization: Cookie.auth_token },
            })         
            .then(() => { 
                enqueueSnackbar("Successfully saved!", {variant: "success"}),
                setName(''), setImage(''), setPrompt(''), setSpeciality(''), setDescription('')
            })
        } catch (error) { 
            enqueueSnackbar("Successfully unsaved!", {variant: "error"})
            console.log(error)
        }
    }

return (
    <div className='flex flex-col items-center justify-center'>
        <h2 className="font-bold mb-10 mt-10 text-2xl text-center">Botanists</h2>
        <form method="post" encType="multipart/form-data" className='flex flex-col items-center justify-center gap-5'>
            <div className='flex flex-col items-center justify-center gap-2'>
                <label htmlFor="Name">Name</label>
                <input type="text" value={Name} onChange={(e) => setName(e.target.value)} name="" id="Input" placeholder='Name' className="border-black border-b h-8 outline-none truncate px-1 py-2 text-black w-80" />
            </div>
            <div className='flex flex-col items-center justify-center gap-2'>
                <label htmlFor="Speciality">Speciality</label>
                <input type="text" value={Speciality} onChange={(e) => setSpeciality(e.target.value)}  name="" id="Input" placeholder='Speciality' className="border-black border-b h-8 outline-none truncate px-1 py-2 text-black w-80" />
            </div>
            <div className='flex flex-col items-center justify-center gap-2'>
                <label htmlFor="Image">Image</label>
                <input type="text" value={Image} onChange={(e) => setImage(e.target.value)} name="" id="Input" placeholder='Image' className="border-black border-b h-8 outline-none truncate px-1 py-2 text-black w-80" />
            </div>
            <div className='flex flex-col items-center justify-center gap-2'>
                <label htmlFor="Description">Description</label>
                <input type="text" value={Description} onChange={(e) => setDescription(e.target.value)} name="" id="Input" placeholder='Description' className="border-black border-b h-8 outline-none truncate px-1 py-2 text-black w-80" />
            </div>
            <div className='flex flex-col items-center justify-center gap-2'>
                <label htmlFor="Description">AI Prompt</label>
                <input type="text" value={Prompt} onChange={(e) => setPrompt(e.target.value)} name="" id="Input" placeholder='Description' className="border-black border-b h-8 outline-none truncate px-1 py-2 text-black w-80" />
            </div>
            <Button 
                ButtonText='Create'
                ButtonStyle='bg-green-600 cursor-pointer flex items-center justify-center h-8 text-center text-white px-3 py-1 rounded w-40 hover:bg-black'
                onClick={onCreate}
            />
        </form>
    </div>
)
}

export default Botanist