import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from 'react'
export default function HomePage(){

    return(
        // <div className="flex justify-between items-start py-60 px-20 ml-20 bg-gray-800 h-screen w-full" style={{ backgroundImage: 'linear-gradient(to bottom,  #14213d, #03045e)' }}>
         <div className="h-screen flex justify-between w-full items-start py-60 px-10  bg-gray-800 " style={{ backgroundImage: 'linear-gradient(to bottom,  #14213d, #03045e) ' }}>
{/* <div className='h-screen bg-gray-800 flex justify-between w-full items-start py-60 px-10 'style={{ backgroundImage: 'linear-gradient(to bottom,  #14213d, #03045e)'}}> */}
            <div className="px-14 mt-10">
                <h1 className="text-white text-5xl">Hello everyone!</h1>
                <p className="font-bold text-2xl py-2">
  <span style={{ color: '#d90429' }}> My name is Sangeeta, </span>
  <span style={{ color: '#ffbe0b' }} > I'm a Software Engineer.</span></p>

            <div className="mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4">
            View CV
          </button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md">
            LinkedIn<LinkedInIcon/>
          </button>
          {/* <button className="bg-yellow-300 text-gray-800 px-4 py-2 rounded-md mr-4">
            Light Mode
          </button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md">
            Dark Mode
          </button> */}
        </div>    
            </div>
           
            
            <div className="ml-10">
                <img src="/me.gif" alt="des" className="ml-40  h-48 w-96  "/>
            </div>
            
        </div>
    )
}