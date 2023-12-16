import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import React from 'react'
export default function HomePage(){
    return(
         <div className="h-screen flex justify-between w-full items-start py-60 px-10  bg-gray-800 " style={{ backgroundImage: 'linear-gradient(to bottom,  #14213d, #03045e) ' }}>
            <div className="px-14 mt-10">
                <h1 className="text-white text-5xl">Hello everyone!</h1>
                <p className="font-bold text-2xl py-2">
  <span style={{ color: '#d90429' }}> My name is Sangeeta, </span>
  <span style={{ color: '#ffbe0b' }} > I'm a Software Engineer.</span></p>      
        <div className="mt-4">
  <a
    href="link-to-your-cv.pdf"  
    target="_blank"             
    rel="noopener noreferrer"   
  >
    <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4">
      View CV
    </button>
  </a>
  <a
    href="https://www.linkedin.com/in/sangeeta-mishra-470bb922b/"  
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="bg-gray-800 text-white px-4 py-2 mr-2 rounded-md">
      LinkedIn<LinkedInIcon/>
    </button>
  </a>
  <a 
    href="https://github.com/sangeeta2003"  
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="bg-gray-800 text-white px-4  py-2 rounded-md">
      Github<GitHubIcon/>
    </button>
  </a>
</div>
            </div>
            <div className="ml-10">
                <img src="/me.gif" alt="des" className="ml-40  h-48 w-96  "/>
            </div>  
        </div>
    )
}
