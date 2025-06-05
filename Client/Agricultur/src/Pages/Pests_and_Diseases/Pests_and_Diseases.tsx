import axios from 'axios';
import { GiPlantRoots } from "react-icons/gi";
import { IoSearchSharp } from "react-icons/io5";
import React, { useEffect, useState } from 'react';

const Pests_and_Diseases: React.FC = () => {

    // USESTATE

    const [Details, setDetails] = useState<string>('')
    const [cropName, setcropName] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // HANDLE SEARCH FUNCTION

    const handleSearch = (e: any) => {
        setcropName(e.target.value)
    }

    // PESTS AND DISEASES FOR EACH CROP

    const onSearch = (e: any) => {
        e.preventDefault()

        try {
            axios.get(`http://localhost:4000/Crops/${cropName}`)
            .then(response => {
                console.log(response.data.plantStages.Fruiting)
                setDetails(response.data) 
            })
            setTimeout(() => {
                setIsLoading(false);
            }, 2500);
        }
        catch (error) {
            console.log(error)
        }
    }

return (
    <div>
        <section id='Blight' className='flex flex-col items-center justify-center gap-5 mb-10 text-white'>
            <h3 className='font-bold text-xl sm:text-3xl'>Search among the crops available</h3>
            <form className="bg-white flex flex-row items-center justify-between gap-2 pl-2 pr-1 py-1 rounded-sm w-11/12 sm:w-4/5 lg:w-3/5 xl:w-2/5">
                <GiPlantRoots size="2.5rem" color="black"  />
                <select className='h-10 outline-none px-2 py-1 text-black w-5/6' value={cropName} onChange={handleSearch}>
                    <option value="">Search among the crops available...</option>
                    <option value="68386ba6cceaf486515bda4a">Apple</option>
                    <option value="Rice">Rice</option>
                    <option value="Wheat">Wheat</option>
                    <option value="Coffee">Coffee</option>
                    <option value="Tea">Tea</option>
                </select>
                <button onClick={onSearch} className="bg-green-700 px-3 py-2 rounded"><IoSearchSharp size="1.5rem" color="white" className="cursor-pointer" /></button>
            </form>
            <span className='text-red-700'></span>
        </section>
    </div>
)
}

export default Pests_and_Diseases