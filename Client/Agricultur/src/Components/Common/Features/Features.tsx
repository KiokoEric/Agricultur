import React from 'react';

interface FeaturesProps {
    Image: string;
    HoveredText: string;
}

const Features: React.FC<FeaturesProps> = ({ Image, HoveredText }) => {
return (
    <div id='Features' className="relative w-96 group cursor-pointer">
        <img src={Image} className="w-full h-full object-cover rounded-lg" />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-lg">
            <p className="text-white text-3xl font-semibold">{HoveredText}</p>
        </div>
    </div>
)
}

export default Features