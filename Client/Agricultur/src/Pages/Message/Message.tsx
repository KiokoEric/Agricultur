import axios from "axios";
import io from 'socket.io-client';
import { MdSend } from "react-icons/md";
import { useCookies } from "react-cookie";
import React, { useState, useEffect } from 'react';

const Message:React.FC = () => {

    const socket = io('http://localhost:5000');
    const [Cookie,_] = useCookies(["auth_token"]);

// USETSTATE

const [ Message, setMessage ] = useState('')
const [ Profile, setProfile ] = useState<any>([])
const [ Botanist, setBotanist ] = useState<[]>([])
const [ Messages, setMessages ] = useState<any>([])

useEffect(() => {

    const fetchBotanists = async() => {
        await axios.get(`http://localhost:4000/Botanist/`, {
        headers: { authorization: Cookie.auth_token }
    })
    .then((Response) => {
        setBotanist(Response.data)
    })
    }

    fetchBotanists()

}, [])

useEffect(() => {
    
    socket.emit('join', {  });
    socket.on('receiveMessage', msg => {
        setMessages(prev => [...prev, msg]);
    });

    return () => socket.off('receiveMessage');
})

const BotanistProfile =(id: any) => {
        axios.get(`http://localhost:4000/Botanist/${id}`, {
        headers: { authorization: Cookie.auth_token }
    })
    .then((Response) => {
        console.log(Response.data)
        setProfile(Response.data)
    })
}

const sendMessage = () => {
    const message = {
        Sender: userId,
        Receiver: botanist._id,
        Message: Message,
    };
    socket.emit('sendMessage', message);
    setMessages(prev => [...prev, message]);
    setMessage('');
};

return (
    <div id="Message" >
        <div className="border-r-2 border-r-gray-300 flex flex-col gap-10 px-1">
            <div className="w-full">
                <h1 className='text-black font-bold mb-5 py-1 shadow-sm text-2xl text-center'>Botanists</h1> 
                { 
                Botanist.map((Botanist: any) => {
                return (
                    <ul>
                        <li key={Botanist._id} onClick={() =>BotanistProfile(Botanist._id)} className="bg-blue-100 cursor-pointer flex gap-2 my-2 px-1 py-2 rounded-sm">
                            <img src={Botanist.Image} alt="" className="rounded-sm w-1/12" />
                            <div>
                                <p className="font-bold">{Botanist.Name}</p>
                                <p>{Botanist.Speciality}</p>
                            </div>
                        </li>
                    </ul>
                )
                })
                }
            </div>
        </div>
        <div className="border-r-2 border-r-gray-300 flex flex-col justify-between px-2">
            <div className='shadow-sm'>
                <figure className='flex gap-2 items-center justify-center h-10'>
                    <h2 className='text-black font-bold text-2xl'>{Profile.Name}</h2>
                </figure>
            </div>
            <form onClick={sendMessage} method="post" encType="multipart/form-data" className='bg-white flex flex-row items-center justify-center'>
                {
                    Messages.map((Message: any) => {
                        return(
                            <p>{}</p>
                        )
                    })
                }
                <div className="bg-white border-b flex flex-row items-center justify-between mx-auto w-11/12">
                    <input placeholder="Enter Message..." className="bg-white h-8 outline-0 rounded-sm pl-1" onChange={(e) => setMessage(e.target.value)} />
                    <MdSend onClick={sendMessage} color="4F98CA" size='1.4rem' className="cursor-pointer" />
                </div>
            </form>
        </div>
        <div className="px-2">
            <div className='w-full'>
                <h1 className='text-black font-bold mb-5 py-1 shadow-sm text-2xl text-center'>Profile</h1> 
                <figure className="flex flex-col items-center justify-center gap-5">
                    <img src={Profile.Image} alt="" className="rounded-sm w-1/2" />
                    <figcaption className="flex flex-col gap-4" >
                        <h2 className="font-bold text-3xl text-center">{Profile.Name}</h2>
                        <h3 className="italic text-xl text-center underline">{Profile.Speciality}</h3>
                        <p className="text-center">{Profile.Description}</p>
                    </figcaption>
                </figure>
            </div>
        </div>
    </div>
)
}

export default Message