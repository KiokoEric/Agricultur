import AOS from 'aos';
import React, { useEffect } from 'react';
import { FaLeaf } from "react-icons/fa6";
import Pests from '../../assets/Pests.avif';
import HomeImage from '../../assets/Home.png';
import Weather from '../../assets/Weather.gif';
import Botanist from '../../assets/Botanist.jpg';
import Cultivation from '../../assets/Cultivation2.jpg';
import Features from '../../Components/Common/Features/Features';

const Home: React.FC = () => {

    useEffect(() => {
        AOS.init();
    })

    return (
    <div id='Home' className='flex flex-row-reverse justify-center h-screen'>
        <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500" className='flex flex-col  justify-center w-5/12' >
            <img src={HomeImage} alt="" />
        </div>
        <div data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1500" className='flex flex-col justify-start items-center w-7/12'>
            <section className='flex flex-col items-center'>
                <h1 className='flex mb-5 text-5xl text-center'>Welcome to Agri {<FaLeaf color="green" />} cultur</h1>
                <p className='mb-5 text-xl text-justified w-11/12'>Agricultur is designed to bring smart technology into the hands of those who feed the world. By providing accurate weather updates, tailored cultivation practices, detailed pest and disease information, and direct communication with expert botanists, the app helps farmers make informed decisions at every stage of the crop cycle. Whether you're preparing the land, battling pests, or seeking expert guidance, our app serves as a reliable companion to ensure healthier crops and higher yields.</p>
                <p className='font-bold mb-5 text-xl'>Explore our resources below.</p>
            </section>
            <section className='grid grid-cols-2 gap-5 items-center justify-center'>
                <Features
                    Navigate='/Weather'
                    Image={Weather}
                    HoveredText='Weather Forecast'
                />
                <Features
                    Image={Cultivation}
                    HoveredText='Cultivation'
                />
                <Features
                    Navigate='/Pests_and_Diseases'
                    Image={Pests}
                    HoveredText='Pests and Diseases'
                />
                <Features
                    Navigate='/Botanist'
                    Image={Botanist}
                    HoveredText='Botanists'
                />
            </section>
        </div>
    </div>
    )
}

export default Home