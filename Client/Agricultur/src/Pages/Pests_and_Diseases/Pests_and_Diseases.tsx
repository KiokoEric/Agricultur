import React from 'react';
import { GiPlantRoots } from "react-icons/gi";
import { IoSearchSharp } from "react-icons/io5";

const Pests_and_Diseases: React.FC = () => {
return (
    <div>
        <section id='Blight' className='flex flex-col items-center justify-center gap-5 mb-10 text-white'>
            <h3 className='font-bold text-xl sm:text-3xl'>Search among the crops available</h3>
            <form className="bg-white flex flex-row items-center justify-between gap-2 pl-2 pr-1 py-1 rounded-sm w-11/12 sm:w-4/5 lg:w-3/5 xl:w-2/5">
                <GiPlantRoots size="2.5rem" color="black"  />
                <select className='h-10 outline-none px-2 py-1 text-black w-5/6'>
                    <option value="">Search among the crops available...</option>
                    <option value="Apples">Apples</option>
                    <option value="Rice">Rice</option>
                    <option value="Wheat">Wheat</option>
                    <option value="Coffee">Coffee</option>
                    <option value="Tea">Tea</option>
                </select>
                <button className="bg-green-700 px-3 py-2 rounded"><IoSearchSharp size="1.5rem" color="white" className="cursor-pointer" /></button>
            </form>
            <span className='text-red-700'></span>
        </section>
    </div>
)
}

export default Pests_and_Diseases