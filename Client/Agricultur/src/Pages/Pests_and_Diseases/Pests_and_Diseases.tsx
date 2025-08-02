import axios from "axios";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { GiPlantRoots } from "react-icons/gi";
import { IoSearchSharp } from "react-icons/io5";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

const Pests_and_Diseases: React.FC = () => {

    // USESTATE

    const [Details, setDetails] = useState<any>([])
    const [cropName, setcropName] = useState<string>('')
    const [SearchError, setSearchError] = useState<string>("")

    // HANDLE SEARCH FUNCTION

    const handleSearch = (e: any) => {
        setcropName(e.target.value)
    }

    // PESTS AND DISEASES FOR EACH CROP

    const onSearch = (e: any) => {
        e.preventDefault()

        if(cropName === "") {
            setSearchError("Kindly enter a search item")
        } else {
            try {
            axios.get(`http://localhost:4000/Crops/${cropName}`)
            .then(response => {
                setDetails(response.data)
                setSearchError('')
            })
            }
            catch (error) {
                console.log(error)
            }
        }
    }

return (
    <div>
        <section id='Blight' className='flex flex-col items-center justify-center gap-5 mb-5 text-white'>
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
            <span className='text-red-700'>{SearchError}</span>
        </section>
        <section id='PestsandDiseases' >
            {
                (!Details) ? <h2 className='font-bold text-red-700 text-center text-5xl w-custom'>No Results Found</h2> :
                <div className='px-2'>
                    {Details.Crop? <h2 className='font-bold mb-5 text-center text-5xl underline'>{Details.Crop}</h2> : null }
                    <div>
                        { Details.plantStages? <h3 className='font-bold mb-5 text-center text-3xl underline'>Seedling Stage</h3> : null }
                        { Details.plantStages? <h3 className='font-bold mb-5 text-3xl'>Pests</h3> : null }
                        <div className='grid grid-cols-5 items-end gap-5'>
                            <Link to={`/Pests_and_Diseases_Details/${Details.plantStages? Details.plantStages.Seedling.Pests[0]._id: null}`} id={Details.plantStages? Details.plantStages.Seedling.Pests[0]._id : null } className='cursor-pointer'>
                                {
                                    Details.plantStages? <img src={Details.plantStages.Seedling.Pests[0].ImageUrl} alt="" className='rounded-sm' /> : null 
                                }
                                {
                                    Details.plantStages? <figcaption className='font-bold mt-2 text-center text-3xl'>{Details.plantStages.Seedling.Pests[0].Name}</figcaption> : null
                                }
                            </Link>
                            <Link to={`/Pests_and_Diseases_Details/${Details.plantStages? Details.plantStages.Seedling.Pests[1]._id: null}`} id={Details.plantStages? Details.plantStages.Seedling.Pests[1]._id : null } className='cursor-pointer'>
                                {
                                    Details.plantStages? <img src={Details.plantStages.Seedling.Pests[1].ImageUrl} alt="" className='rounded-sm' /> : null 
                                }
                                {
                                    Details.plantStages? <figcaption className='font-bold mt-2 text-center text-3xl'>{Details.plantStages.Seedling.Pests[1].Name}</figcaption> : null
                                }
                            </Link>
                            <Link to={`/Pests_and_Diseases_Details/${Details.plantStages? Details.plantStages.Seedling.Pests[2]._id: null}`} id={Details.plantStages? Details.plantStages.Seedling.Pests[2]._id: null} className='cursor-pointer'>
                                {
                                    Details.plantStages? <img src={Details.plantStages.Seedling.Pests[2].ImageUrl} alt="" className='rounded-sm' /> : null 
                                }
                                {
                                    Details.plantStages? <figcaption className='font-bold mt-2 text-center text-3xl'>{Details.plantStages.Seedling.Pests[2].Name}</figcaption> : null
                                }
                            </Link>
                            <Link to={`/Pests_and_Diseases_Details/${Details.plantStages? Details.plantStages.Seedling.Pests[3]._id: null}`} id={Details.plantStages? Details.plantStages.Seedling.Pests[3]._id : null} className='cursor-pointer'>
                                {
                                    Details.plantStages? <img src={Details.plantStages.Seedling.Pests[3].ImageUrl} alt="" className='rounded-sm' /> : null 
                                }
                                {
                                    Details.plantStages? <figcaption className='font-bold mt-2 text-center text-3xl'>{Details.plantStages.Seedling.Pests[3].Name}</figcaption> : null
                                }
                            </Link>
                            <Link to={`/Pests_and_Diseases_Details/${Details.plantStages? Details.plantStages.Seedling.Pests[4]._id: null}`} id={Details.plantStages? Details.plantStages.Seedling.Pests[4]._id : null} className='cursor-pointer'>
                                {
                                    Details.plantStages? <img src={Details.plantStages.Seedling.Pests[4].ImageUrl} alt="" className='rounded-sm' /> : null 
                                }
                                {
                                    Details.plantStages? <figcaption className='font-bold mt-2 text-center text-3xl'>{Details.plantStages.Seedling.Pests[4].Name}</figcaption> : null
                                }
                            </Link>
                        </div>
                        { Details.plantStages? <h3 className='font-bold mb-5 mt-5 text-3xl'>Diseases</h3> : null }
                        <div className='grid grid-cols-5 items-end gap-5'>
                            <Link to={`/Pests_and_Diseases_Details/${Details.plantStages? Details.plantStages.Seedling.Diseases[0]._id: null}`} id={Details.plantStages? Details.plantStages.Seedling.Diseases[0]._id : null} className='cursor-pointer'>
                                {
                                    Details.plantStages? <img src={Details.plantStages.Seedling.Diseases[0].ImageUrl} alt="" className='rounded-sm' /> : null 
                                }
                                {
                                    Details.plantStages? <figcaption className='font-bold mt-2 text-center text-3xl'>{Details.plantStages.Seedling.Diseases[0].Name}</figcaption> : null
                                }
                            </Link>
                            <Link to={`/Pests_and_Diseases_Details/${Details.plantStages? Details.plantStages.Seedling.Diseases[1]._id: null}`} id={Details.plantStages? Details.plantStages.Seedling.Diseases[1]._id: null}  className='cursor-pointer'>
                                {
                                    Details.plantStages? <img src={Details.plantStages.Seedling.Diseases[1].ImageUrl} alt="" className='rounded-sm' /> : null 
                                }
                                {
                                    Details.plantStages? <figcaption className='font-bold mt-2 text-center text-3xl'>{Details.plantStages.Seedling.Diseases[1].Name}</figcaption> : null
                                }
                            </Link>
                            <Link to={`/Pests_and_Diseases_Details/${Details.plantStages? Details.plantStages.Seedling.Diseases[2]._id: null}`} id={Details.plantStages? Details.plantStages.Seedling.Diseases[2]._id: null}  className='cursor-pointer'>
                                {
                                    Details.plantStages? <img src={Details.plantStages.Seedling.Diseases[2].ImageUrl} alt="" className='rounded-sm' /> : null 
                                }
                                {
                                    Details.plantStages? <figcaption className='font-bold mt-2 text-center text-3xl'>{Details.plantStages.Seedling.Diseases[2].Name}</figcaption> : null
                                }
                            </Link>
                            <Link to={`/Pests_and_Diseases_Details/${Details.plantStages? Details.plantStages.Seedling.Diseases[3]._id: null}`} id={Details.plantStages? Details.plantStages.Seedling.Diseases[3]._id: null}  className='cursor-pointer'>
                                {
                                    Details.plantStages? <img src={Details.plantStages.Seedling.Diseases[3].ImageUrl} alt="" className='rounded-sm' height='50px' /> : null 
                                }
                                {
                                    Details.plantStages? <figcaption className='font-bold mt-2 text-center text-3xl'>{Details.plantStages.Seedling.Diseases[3].Name}</figcaption> : null
                                }
                            </Link>
                            <Link to={`/Pests_and_Diseases_Details/${Details.plantStages? Details.plantStages.Seedling.Diseases[4]._id: null}`} id={Details.plantStages? Details.plantStages.Seedling.Diseases[4]._id: null}  className='cursor-pointer'>
                                {
                                    Details.plantStages? <img src={Details.plantStages.Seedling.Diseases[4].ImageUrl} alt="" className='rounded-sm' /> : null 
                                }
                                {
                                    Details.plantStages? <figcaption className='font-bold mt-2 text-center text-3xl'>{Details.plantStages.Seedling.Diseases[4].Name}</figcaption> : null
                                }
                            </Link>
                        </div>
                        { Details.plantStages? <h3 className='font-bold mb-5 mt-10 text-center text-3xl underline'>Vegetative Stage</h3> : null }
                        { Details.plantStages? <h3 className='font-bold mb-5 text-3xl'>Pests</h3> : null }
                        <div className='grid grid-cols-5 items-end gap-5'>
                            <Link to={`/Pests_and_Diseases_Details/${Details.plantStages? Details.plantStages.Vegetative.Pests[0]._id: null}`} id={Details.plantStages? Details.plantStages.Vegetative.Pests[0]._id: null}  className='cursor-pointer'>
                                {
                                    Details.plantStages? <img src={Details.plantStages.Vegetative.Pests[0].ImageUrl} alt="" className='rounded-sm' /> : null 
                                }
                                {
                                    Details.plantStages? <figcaption className='font-bold mt-2 text-center text-3xl'>{Details.plantStages.Vegetative.Pests[0].Name}</figcaption> : null
                                }
                            </Link>
                            <Link to={`/Pests_and_Diseases_Details/${Details.plantStages? Details.plantStages.Vegetative.Pests[1]._id: null}`} id={Details.plantStages? Details.plantStages.Vegetative.Pests[1]._id: null}  className='cursor-pointer'>
                                {
                                    Details.plantStages? <img src={Details.plantStages.Vegetative.Pests[1].ImageUrl} alt="" className='rounded-sm' /> : null 
                                }
                                {
                                    Details.plantStages? <figcaption className='font-bold mt-2 text-center text-3xl'>{Details.plantStages.Vegetative.Pests[1].Name}</figcaption> : null
                                }
                            </Link>
                            <Link to={`/Pests_and_Diseases_Details/${Details.plantStages? Details.plantStages.Vegetative.Pests[2]._id: null}`} id={Details.plantStages? Details.plantStages.Vegetative.Pests[2]._id: null}  className='cursor-pointer'>
                                {
                                    Details.plantStages? <img src={Details.plantStages.Vegetative.Pests[2].ImageUrl} alt="" className='rounded-sm' /> : null 
                                }
                                {
                                    Details.plantStages? <figcaption className='font-bold mt-2 text-center text-3xl'>{Details.plantStages.Vegetative.Pests[2].Name}</figcaption> : null
                                }
                            </Link>
                            <Link to={`/Pests_and_Diseases_Details/${Details.plantStages? Details.plantStages.Vegetative.Pests[3]._id: null}`} id={Details.plantStages? Details.plantStages.Vegetative.Pests[3]._id: null}  className='cursor-pointer'>
                                {
                                    Details.plantStages? <img src={Details.plantStages.Vegetative.Pests[3].ImageUrl} alt="" className='rounded-sm' /> : null 
                                }
                                {
                                    Details.plantStages? <figcaption className='font-bold mt-2 text-center text-3xl'>{Details.plantStages.Vegetative.Pests[3].Name}</figcaption> : null
                                }
                            </Link>
                            <Link to={`/Pests_and_Diseases_Details/${Details.plantStages? Details.plantStages.Vegetative.Pests[4]._id: null}`} id={Details.plantStages? Details.plantStages.Vegetative.Pests[4]._id: null}  className='cursor-pointer'>
                                {
                                    Details.plantStages? <img src={Details.plantStages.Vegetative.Pests[4].ImageUrl} alt="" className='rounded-sm' /> : null 
                                }
                                {
                                    Details.plantStages? <figcaption className='font-bold mt-2 text-center text-3xl'>{Details.plantStages.Vegetative.Pests[4].Name}</figcaption> : null
                                }
                            </Link>
                        </div>
                        { Details.plantStages? <h3 className='font-bold mb-5 mt-5 text-3xl'>Diseases</h3> : null }
                        <div className='flex items-center justify-center gap-4'>
                            <Link to={`/Pests_and_Diseases_Details/${Details.plantStages? Details.plantStages.Vegetative.Diseases[0]._id: null}`} id={Details.plantStages? Details.plantStages.Vegetative.Diseases[0]._id: null} className='cursor-pointer'>
                                {
                                    Details.plantStages? <img src={Details.plantStages.Vegetative.Diseases[0].ImageUrl} alt="" className='rounded-sm' /> : null 
                                }
                                {
                                    Details.plantStages? <figcaption className='font-bold mt-2 text-center text-3xl'>{Details.plantStages.Vegetative.Diseases[0].Name}</figcaption> : null
                                }
                            </Link>
                            <Link to={`/Pests_and_Diseases_Details/${Details.plantStages? Details.plantStages.Vegetative.Diseases[1]._id: null}`} id={Details.plantStages? Details.plantStages.Vegetative.Diseases[1]._id: null}  className='cursor-pointer'>
                                {
                                    Details.plantStages? <img src={Details.plantStages.Vegetative.Diseases[1].ImageUrl} alt="" className='rounded-sm' /> : null 
                                }
                                {
                                    Details.plantStages? <figcaption className='font-bold mt-2 text-center text-3xl'>{Details.plantStages.Vegetative.Diseases[1].Name}</figcaption> : null
                                }
                            </Link>
                            <Link to={`/Pests_and_Diseases_Details/${Details.plantStages? Details.plantStages.Vegetative.Diseases[2]._id: null}`} id={Details.plantStages? Details.plantStages.Vegetative.Diseases[2]._id: null}  className='cursor-pointer'>
                                {
                                    Details.plantStages? <img src={Details.plantStages.Vegetative.Diseases[2].ImageUrl} alt="" className='rounded-sm' /> : null 
                                }
                                {
                                    Details.plantStages? <figcaption className='font-bold mt-2 text-center text-3xl'>{Details.plantStages.Vegetative.Diseases[2].Name}</figcaption> : null
                                }
                            </Link>
                            <Link to={`/Pests_and_Diseases_Details/${Details.plantStages? Details.plantStages.Vegetative.Diseases[3]._id: null}`} id={Details.plantStages? Details.plantStages.Vegetative.Diseases[3]._id: null}  className='cursor-pointer'>
                                {
                                    Details.plantStages? <img src={Details.plantStages.Vegetative.Diseases[3].ImageUrl} alt="" className='rounded-sm' height='50px' /> : null 
                                }
                                {
                                    Details.plantStages? <figcaption className='font-bold mt-2 text-center text-3xl'>{Details.plantStages.Vegetative.Diseases[3].Name}</figcaption> : null
                                }
                            </Link>
                        </div>
                        { Details.plantStages? <h3 className='font-bold mb-5 mt-10 text-center text-3xl underline'>Fruiting Stage</h3> : null }
                        { Details.plantStages? <h3 className='font-bold mb-5 text-3xl'>Pests</h3> : null }
                        <Swiper
                            slidesPerView={5}
                            spaceBetween={30}
                            freeMode={true}
                            pagination={{
                            clickable: true,
                            }}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <Link to={`/Pests_and_Diseases_Details/${Details.plantStages? Details.plantStages.Fruiting.Pests[0]._id: null}`} id={Details.plantStages? Details.plantStages.Fruiting.Pests[0]._id: null} className='cursor-pointer'>
                                    {
                                        Details.plantStages? <img src={Details.plantStages.Fruiting.Pests[0].ImageUrl} alt="" className='rounded-sm' /> : null 
                                    }
                                    {
                                        Details.plantStages? <figcaption className='font-bold mt-2 text-center text-3xl'>{Details.plantStages.Fruiting.Pests[0].Name}</figcaption> : null
                                    }
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to={`/Pests_and_Diseases_Details/${Details.plantStages? Details.plantStages.Fruiting.Pests[1]._id: null}`} id={Details.plantStages? Details.plantStages.Fruiting.Pests[1]._id: null}  className='cursor-pointer'>
                                    {
                                        Details.plantStages? <img src={Details.plantStages.Fruiting.Pests[1].ImageUrl} alt="" className='rounded-sm' /> : null 
                                    }
                                    {
                                        Details.plantStages? <figcaption className='font-bold mt-2 text-center text-3xl'>{Details.plantStages.Fruiting.Pests[1].Name}</figcaption> : null
                                    }
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to={`/Pests_and_Diseases_Details/${Details.plantStages? Details.plantStages.Fruiting.Pests[2]._id: null}`} id={Details.plantStages? Details.plantStages.Fruiting.Pests[2]._id: null}  className='cursor-pointer'>
                                    {
                                        Details.plantStages? <img src={Details.plantStages.Fruiting.Pests[2].ImageUrl} alt="" className='rounded-sm' /> : null 
                                    }
                                    {
                                        Details.plantStages? <figcaption className='font-bold mt-2 text-center text-3xl'>{Details.plantStages.Fruiting.Pests[2].Name}</figcaption> : null
                                    }
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to={`/Pests_and_Diseases_Details/${Details.plantStages? Details.plantStages.Fruiting.Pests[3]._id: null}`} id={Details.plantStages? Details.plantStages.Fruiting.Pests[3]._id: null}  className='cursor-pointer'>
                                    {
                                        Details.plantStages? <img src={Details.plantStages.Fruiting.Pests[3].ImageUrl} alt="" className='rounded-sm' /> : null 
                                    }
                                    {
                                        Details.plantStages? <figcaption className='font-bold mt-2 text-center text-3xl'>{Details.plantStages.Fruiting.Pests[3].Name}</figcaption> : null
                                    }
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to={`/Pests_and_Diseases_Details/${Details.plantStages? Details.plantStages.Fruiting.Pests[4]._id: null}`} id={Details.plantStages? Details.plantStages.Fruiting.Pests[4]._id: null}  className='cursor-pointer'>
                                    {
                                        Details.plantStages? <img src={Details.plantStages.Fruiting.Pests[4].ImageUrl} alt="" className='rounded-sm' /> : null 
                                    }
                                    {
                                        Details.plantStages? <figcaption className='font-bold mt-2 text-center text-3xl'>{Details.plantStages.Fruiting.Pests[4].Name}</figcaption> : null
                                    }
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to={`/Pests_and_Diseases_Details/${Details.plantStages? Details.plantStages.Fruiting.Pests[5]._id: null}`} id={Details.plantStages? Details.plantStages.Fruiting.Pests[5]._id: null}  className='cursor-pointer'>
                                    {
                                        Details.plantStages? <img src={Details.plantStages.Fruiting.Pests[5].ImageUrl} alt="" className='rounded-sm' /> : null 
                                    }
                                    {
                                        Details.plantStages? <figcaption className='font-bold mt-2 text-center text-3xl'>{Details.plantStages.Fruiting.Pests[5].Name}</figcaption> : null
                                    }
                                </Link>
                            </SwiperSlide>
                        </Swiper>
                        { Details.plantStages? <h3 className='font-bold mb-5 mt-5 text-3xl'>Diseases</h3> : null }
                        <div className='grid grid-cols-5 items-center justify-center gap-4'>
                            <Link to={`/Pests_and_Diseases_Details/${Details.plantStages? Details.plantStages.Fruiting.Diseases[0]._id: null}`} id={Details.plantStages? Details.plantStages.Fruiting.Diseases[0]._id: null} className='cursor-pointer'>
                                {
                                    Details.plantStages? <img src={Details.plantStages.Fruiting.Diseases[0].ImageUrl} alt="" className='rounded-sm' /> : null 
                                }
                                {
                                    Details.plantStages? <figcaption className='font-bold mt-2 text-center text-3xl'>{Details.plantStages.Fruiting.Diseases[0].Name}</figcaption> : null
                                }
                            </Link>
                            <Link to={`/Pests_and_Diseases_Details/${Details.plantStages? Details.plantStages.Fruiting.Diseases[1]._id: null}`} id={Details.plantStages? Details.plantStages.Fruiting.Diseases[1]._id: null} className='cursor-pointer'>
                                {
                                    Details.plantStages? <img src={Details.plantStages.Fruiting.Diseases[1].ImageUrl} alt="" className='rounded-sm' /> : null 
                                }
                                {
                                    Details.plantStages? <figcaption className='font-bold mt-2 text-center text-3xl'>{Details.plantStages.Fruiting.Diseases[1].Name}</figcaption> : null
                                }
                            </Link>
                            <Link to={`/Pests_and_Diseases_Details/${Details.plantStages? Details.plantStages.Fruiting.Diseases[2]._id: null}`} id={Details.plantStages? Details.plantStages.Fruiting.Diseases[2]._id: null} className='cursor-pointer'>
                                {
                                    Details.plantStages? <img src={Details.plantStages.Fruiting.Diseases[2].ImageUrl} alt="" className='rounded-sm' /> : null 
                                }
                                {
                                    Details.plantStages? <figcaption className='font-bold mt-2 text-center text-3xl'>{Details.plantStages.Fruiting.Diseases[2].Name}</figcaption> : null
                                }
                            </Link>
                            <Link to={`/Pests_and_Diseases_Details/${Details.plantStages? Details.plantStages.Fruiting.Diseases[3]._id: null}`} id={Details.plantStages? Details.plantStages.Fruiting.Diseases[3]._id: null} className='cursor-pointer'>
                                {
                                    Details.plantStages? <img src={Details.plantStages.Fruiting.Diseases[3].ImageUrl} alt="" className='rounded-sm' height='50px' /> : null 
                                }
                                {
                                    Details.plantStages? <figcaption className='font-bold mt-2 text-center text-3xl'>{Details.plantStages.Fruiting.Diseases[3].Name}</figcaption> : null
                                }
                            </Link>
                            <Link to={`/Pests_and_Diseases_Details/${Details.plantStages? Details.plantStages.Fruiting.Diseases[4]._id: null}`} id={Details.plantStages? Details.plantStages.Fruiting.Diseases[4]._id: null} className='cursor-pointer'>
                                {
                                    Details.plantStages? <img src={Details.plantStages.Fruiting.Diseases[4].ImageUrl} alt="" className='rounded-sm' height='50px' /> : null 
                                }
                                {
                                    Details.plantStages? <figcaption className='font-bold mt-2 text-center text-3xl'>{Details.plantStages.Fruiting.Diseases[4].Name}</figcaption> : null
                                }
                            </Link>
                        </div>
                        { Details.plantStages? <h3 className='font-bold mb-5 mt-10 text-center text-3xl underline'>Harvesting Stage</h3> : null }
                        { Details.plantStages? <h3 className='font-bold mb-5 text-3xl'>Pests</h3> : null }
                        <div className='flex items-center justify-center gap-5'>
                            <Link to={`/Pests_and_Diseases_Details/${Details.plantStages? Details.plantStages.Harvesting.Pests[0]._id: null}`} id={Details.plantStages? Details.plantStages.Harvesting.Pests[0]._id: null} className='cursor-pointer'>
                            {
                                Details.plantStages? <img src={Details.plantStages.Harvesting.Pests[0].ImageUrl} alt="" className='rounded-sm' /> : null 
                            }
                            {
                                Details.plantStages? <figcaption className='font-bold mt-2 text-center text-3xl'>{Details.plantStages.Harvesting.Pests[0].Name}</figcaption> : null
                            }
                            </Link>
                            <Link to={`/Pests_and_Diseases_Details/${Details.plantStages? Details.plantStages.Harvesting.Pests[1]._id: null}`} id={Details.plantStages? Details.plantStages.Harvesting.Pests[1]._id: null} className='cursor-pointer'>
                                {
                                    Details.plantStages? <img src={Details.plantStages.Harvesting.Pests[1].ImageUrl} alt="" className='rounded-sm' /> : null 
                                }
                                {
                                    Details.plantStages? <figcaption className='font-bold mt-2 text-center text-3xl'>{Details.plantStages.Harvesting.Pests[1].Name}</figcaption> : null
                                }
                            </Link>
                            <Link to={`/Pests_and_Diseases_Details/${Details.plantStages? Details.plantStages.Harvesting.Pests[2]._id: null}`} id={Details.plantStages? Details.plantStages.Harvesting.Pests[2]._id: null} className='cursor-pointer'>
                                {
                                    Details.plantStages? <img src={Details.plantStages.Harvesting.Pests[2].ImageUrl} alt="" className='rounded-sm' /> : null 
                                }
                                {
                                    Details.plantStages? <figcaption className='font-bold mt-2 text-center text-3xl'>{Details.plantStages.Harvesting.Pests[2].Name}</figcaption> : null
                                }
                            </Link>
                        </div>
                        { Details.plantStages? <h3 className='font-bold mb-5 mt-5 text-3xl'>Diseases</h3> : null }
                        <Swiper
                            slidesPerView={5}
                            spaceBetween={30}
                            freeMode={true}
                            pagination={{
                            clickable: true,
                            }}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <Link to={`/Pests_and_Diseases_Details/${Details.plantStages? Details.plantStages.Harvesting.Diseases[0]._id: null}`} id={Details.plantStages? Details.plantStages.Harvesting.Diseases[0]._id: null} className='cursor-pointer'>
                                    {
                                        Details.plantStages? <img src={Details.plantStages.Harvesting.Diseases[0].ImageUrl} alt="" className='rounded-sm' /> : null 
                                    }
                                    {
                                        Details.plantStages? <figcaption className='font-bold mt-2 text-center text-3xl'>{Details.plantStages.Harvesting.Diseases[0].Name}</figcaption> : null
                                    }
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to={`/Pests_and_Diseases_Details/${Details.plantStages? Details.plantStages.Harvesting.Diseases[1]._id: null}`} id={Details.plantStages? Details.plantStages.Harvesting.Diseases[1]._id: null} className='cursor-pointer'>
                                    {
                                        Details.plantStages? <img src={Details.plantStages.Harvesting.Diseases[1].ImageUrl} alt="" className='rounded-sm' /> : null 
                                    }
                                    {
                                        Details.plantStages? <figcaption className='font-bold mt-2 text-center text-3xl'>{Details.plantStages.Harvesting.Diseases[1].Name}</figcaption> : null
                                    }
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to={`/Pests_and_Diseases_Details/${Details.plantStages? Details.plantStages.Harvesting.Diseases[2]._id: null}`} id={Details.plantStages? Details.plantStages.Harvesting.Diseases[2]._id: null} className='cursor-pointer'>
                                    {
                                        Details.plantStages? <img src={Details.plantStages.Harvesting.Diseases[2].ImageUrl} alt="" className='rounded-sm' /> : null 
                                    }
                                    {
                                        Details.plantStages? <figcaption className='font-bold mt-2 text-center text-3xl'>{Details.plantStages.Harvesting.Diseases[2].Name}</figcaption> : null
                                    }
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to={`/Pests_and_Diseases_Details/${Details.plantStages? Details.plantStages.Harvesting.Diseases[3]._id: null}`} id={Details.plantStages? Details.plantStages.Harvesting.Diseases[3]._id: null} className='cursor-pointer'>
                                    {
                                        Details.plantStages? <img src={Details.plantStages.Harvesting.Diseases[3].ImageUrl} alt="" className='rounded-sm' height='50px' /> : null 
                                    }
                                    {
                                        Details.plantStages? <figcaption className='font-bold mt-2 text-center text-3xl'>{Details.plantStages.Harvesting.Diseases[3].Name}</figcaption> : null
                                    }
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to={`/Pests_and_Diseases_Details/${Details.plantStages? Details.plantStages.Harvesting.Diseases[4]._id: null}`} id={Details.plantStages? Details.plantStages.Harvesting.Diseases[4]._id: null} className='cursor-pointer'>
                                    {
                                        Details.plantStages? <img src={Details.plantStages.Harvesting.Diseases[4].ImageUrl} alt="" className='rounded-sm' height='50px' /> : null 
                                    }
                                    {
                                        Details.plantStages? <figcaption className='font-bold mt-2 text-center text-3xl'>{Details.plantStages.Harvesting.Diseases[4].Name}</figcaption> : null
                                    }
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to={`/Pests_and_Diseases_Details/${Details.plantStages? Details.plantStages.Harvesting.Diseases[5]._id: null}`} id={Details.plantStages? Details.plantStages.Harvesting.Diseases[5]._id: null} className='cursor-pointer'>
                                {
                                    Details.plantStages? <img src={Details.plantStages.Harvesting.Diseases[5].ImageUrl} alt="" className='rounded-sm' height='50px' /> : null 
                                }
                                {
                                    Details.plantStages? <figcaption className='font-bold mt-2 text-center text-3xl'>{Details.plantStages.Harvesting.Diseases[5].Name}</figcaption> : null
                                }
                                </Link>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            }
        </section>
    </div>
)
}

export default Pests_and_Diseases