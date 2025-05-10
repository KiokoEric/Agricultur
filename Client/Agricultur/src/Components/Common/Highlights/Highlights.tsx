import React from 'react';

interface HighlightProps {
    Icon: any;
    Name: string;
    children?: any;
}

const Highlights: React.FC<HighlightProps> = ({ Icon, Name, children }) => {
return (
    <figure id='Highlights' className=" flex gap-5 items-center p-4 rounded-sm w-52">
        {Icon}
        <figcaption>
            <p className='text-lg'>{Name}</p>
            {children}
        </figcaption>
    </figure>
)
}

export default React.memo(Highlights)