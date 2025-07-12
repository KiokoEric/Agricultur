import { MdSend } from "react-icons/md";

function Message() {
return (
    <div id="Message" >
        <div className="border-r-2 border-r-gray-300 flex flex-col gap-10 px-2">
            <div className='shadow-sm'>
                <figure className='flex gap-2 items-center justify-center h-10'>
                    <figcaption>
                        <h1 className='text-black font-bold text-2xl'>Messages</h1> 
                    </figcaption>
                </figure>
            </div>
        </div>
        <div className="border-r-2 border-r-gray-300 flex flex-col justify-between px-2">
            <div className='shadow-sm'>
                <figure className='flex gap-2 items-center justify-center h-10'>
                    <figcaption>
                        <h1 className='text-black font-bold text-2xl'>Michael Mbwele</h1> 
                    </figcaption>
                </figure>
            </div>
            <form method="post" encType="multipart/form-data" className='bg-white flex flex-row items-center justify-center'>
                <div className="bg-white border-b flex flex-row items-center justify-between mx-auto w-11/12">
                    <input placeholder="Enter Message..." className="bg-white h-8 outline-0 rounded-sm pl-1" />
                    <MdSend color="4F98CA" size='1.4rem' className="cursor-pointer" />
                </div>
            </form>
        </div>
        <div className="px-2">
            <div className='shadow-sm'>
                <figure className='flex gap-2 items-center justify-center h-10'>
                    <figcaption>
                        <h1 className='text-black font-bold text-2xl'>Profile</h1> 
                    </figcaption>
                </figure>
            </div>
        </div>
    </div>
)
}

export default Message