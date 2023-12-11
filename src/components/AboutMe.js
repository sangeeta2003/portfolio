import React from 'react'
export default function AboutMe(){
    return(
        <div className="h-screen flex justify-between items-start m-0 p-0 bg-black overflow-y-hidden ">
            <div className=' h-3/4 w-3/4  absolute bottom-16 left-10'>
 <h1 className='text-5xl font-bold my-3'>
    <span style={{ color: '#ffbe0b' }}> About
     </span>
     <span style={{ color: '#d90429' }}> Me </span>
     </h1>
     <p className='text-2xl text-white my-2'>Hi there,my name is Sangeeta Mishra</p>
     <br></br>
     <div className='text-2xl py-4 mr-6 border-2 h-3/4 w-3/4 border-white'>
     <p  className='text-white '>
     Hello there! I'm Sangeeta Mishra, currently in my third year pursuing <br></br>
      a Bachelor's degree in Technology, specializing in Software Engineering.<br></br>
     <br></br>
      My journey in the world of technology has been both thrilling and <br></br>enlightening. Web development has become my forte, and the process <br></br> of creating digital experiences fascinates me.
      <br></br><br></br>
      As I progress in my academic journey, I continually seek opportunities to
      <br></br>  learn and grow. The ever-evolving nature of technology motivates me to <br></br> stay abreast of the latest developments and innovations. I find joy in the <br></br>challenge of solving problems and the satisfaction that comes with creating <br></br>solutions that make a positive impact.
     </p>
     </div>
            </div>
              <div className=' h-3/4 w-1/4 absolute bottom-14 right-14'>
                <img src='/code.gif'alt='coding' className='h-full object-cover'/>     
     </div>  
</div>
    )
}