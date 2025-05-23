import React from 'react';
import { Link } from 'react-router-dom';

interface FeaturesProps {
    Image: string;
    Navigate? : any;
    HoveredText: string;
}

const Features: React.FC<FeaturesProps> = ({ Image, HoveredText, Navigate }) => {
return (
    <Link to={Navigate} id='Features' className="cursor-pointer h-44 relative w-96 group ">
        <img src={Image} className="h-full object-cover rounded-lg w-full" />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-lg">
            <p className="text-white text-3xl font-semibold">{HoveredText}</p>
        </div>
    </Link>
)
}

export default Features