import AOS from 'aos';
import React, { useEffect } from 'react';
import { FaLeaf } from "react-icons/fa6";
import Pests from '../../assets/Pests.jpg';
import HomeImage from '../../assets/Home.png';
import Weather from '../../assets/Weather.gif';
import Cultivation from '../../assets/Cultivation.gif';

const Home: React.FC = () => {

    useEffect(() => {
        AOS.init();
    })

    return (
    <div id='Home' className='grid grid-cols-2 items-center justify-center'>
        <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
            <img src={HomeImage} alt="" className='w-11/12' />
        </div>
        <div data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1500" className='flex flex-col items-center justify-center'>
            <section className='flex flex-col items-center h-64'>
                <h1 className='flex text-5xl h-20 text-center'>Welcome to Agri {<FaLeaf color="green" />} cultur</h1>
                <p className='m-auto text-xl text-justified w-11/12'>Agricultur is designed to bring smart technology into the hands of those who feed the world. By providing accurate weather updates, tailored cultivation practices, detailed pest and disease information, and direct communication with expert botanists, the app helps farmers make informed decisions at every stage of the crop cycle. Whether you're preparing the land, battling pests, or seeking expert guidance, our app serves as a reliable companion to ensure healthier crops and higher yields.</p>
            </section>
            <section className='grid grid-cols-2 gap-5'>
                
            </section>
        </div>
    </div>
    )
}

export default Home