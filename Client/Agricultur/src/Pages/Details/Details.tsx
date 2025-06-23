import axios from "axios";
import { useCookies } from "react-cookie";
import {  useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Details:React.FC = () => {

    const { id } = useParams()
    const [Cookie, _] = useCookies(["auth_token"])
    const [details, setdetails] = useState<any>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

     // FETCHING PROJECT DETAILS BY PROJECT ID

    useEffect(() => {
        console.log(id)
        axios.get(`http://localhost:4000/Crops/${id}`, {
        headers: { authorization: Cookie.auth_token }
        }) 
        .then((Response) => {
            console.log(id)
            console.log(Response.data)
            setdetails(Response.data)
        }) 
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    },[]) 

return (
    <div>
        {isLoading ? (
            <div className='flex items-center justify-center'>
                <h2>Loading...</h2>
            </div>
            ) : (
            <div>
                {
                    details.map((detail: any) => {
                        return(
                            <figure className="flex gap-5 items-center justify-center">
                                <img src={detail.ImageUrl} alt="" />
                                <figcaption>
                                    <h2>{detail.Name}</h2>
                                    <h3>Description</h3>
                                    <p>{detail.Description}</p>
                                    <h3>Signs and Symptoms</h3>
                                    <ul>
                                        <li>{details.Signs}</li>
                                    </ul>
                                    <h3>Preventive Measures</h3>
                                    <p>{details.PreventiveMeasures}</p>
                                </figcaption>
                            </figure>
                        )
                    })
                }
            </div>
            )
        }
    </div>
)
}

export default Details