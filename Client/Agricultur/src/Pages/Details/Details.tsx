import axios from "axios";
import { useCookies } from "react-cookie";
import {  useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Loading from '../../assets/Loading_Image.gif';

const Details:React.FC = () => {

    const { id } = useParams()
    const [Cookie, _] = useCookies(["auth_token"])
    const [details, setdetails] = useState<any>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

     // FETCHING PROJECT DETAILS BY PROJECT ID

    useEffect(() => {
        axios.get(`http://localhost:4000/Crops/Details/${id}`, {
        headers: { authorization: Cookie.auth_token }
        }) 
        .then((Response) => {
            console.log(Response.data)
            setdetails(Response.data.details)
        }) 
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    },[]) 

return (
    <div>
        {isLoading ? (
            <div className='flex items-center justify-center'>
                <img src={Loading} alt="" />
            </div>
            ) : (
                <figure className="flex gap-5 justify-center mt-5 px-10">
                    <img src={details.ImageUrl} alt="" className="rounded-sm w-5/12" />
                    <figcaption className="flex flex-col gap-4" >
                        <h2 className="font-bold text-2xl underline uppercase">{details.Name}</h2>
                        <h3 className="font-bold text-xl underline">Description</h3>
                        <p className="flex-wrap w-10/12">{details.Description}</p>
                        <h3 className="font-bold text-xl underline">Signs and Symptoms</h3>
                        <ul>
                            <pre id="Information" className="flex-wrap w-4/12">{details.Signs}</pre>
                        </ul>
                        <h3 className="flex-wrap font-bold text-xl underline">Preventive Measures</h3>
                        <pre id="Information">{details.PreventiveMeasures}</pre>
                    </figcaption>
                </figure>
            )
        }
    </div>
)
}

export default Details