import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';
export default function Contact(){
    return(
        <div className="h-screen flex justify-between items-start m-0 p-0 bg-black overflow-y-hidden ">
            <div className=' h-3/4 w-3/4  absolute bottom-5 left-14 mr-7'>
            <h1 className='text-5xl font-bold my-3'>
    <span style={{ color: '#ffbe0b' }}> Contact
     </span>
     <span style={{ color: '#d90429' }}> Me </span>
     </h1>
     <p className='text-2xl text-white my-2'>If you have nay questions or would like to collaborate,please don't <br></br> hesitate to contact me </p>
    {/* <a className="text-white"
    href="mailto:mishrasangeeta944@gmail.com"  
    target="_blank"             
    rel="noopener noreferrer"   
  >
    <SendIcon/> 
      mishrasangeeta944@gmail.com
    
  </a>
  <a className="text-white "
    href="https://www.google.com/maps/place/Bhawanipatna,+Odisha,+India"  
    target="_blank"             
    rel="noopener noreferrer"   
  >
    <LocationOnIcon/> 
      Bhawanipatna,odisha,India
    
  </a> */}
  import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';



<div className="flex flex-col items-start px-10">
  <a
    className="text-white flex items-center mr-4"
    href="mailto:mishrasangeeta944@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <SendIcon className="mr-2 text-yellow-300" />
    mishrasangeeta944@gmail.com
  </a>

  <a
    className="text-white flex items-center py-3"
    href="https://www.google.com/maps/place/Bhawanipatna,+Odisha,+India"
    target="_blank"
    rel="noopener noreferrer"
  >
    <LocationOnIcon className="mr-2 text-yellow-300" />
    Bhawanipatna, Odisha, India
  </a>
</div>


            </div>
            <div className=' h-3/4 w-3/5 absolute bottom-1 right-1 ml-8' >
                <div className='  w-1/2 py-6 pl-0 mt-2 absolute right-12 px-7'>
                <label className="text-white px-10 text-2xl absolute right-30 top-3 font-bold py-9  
                mb-6 ">Name</label>
                <input 
                className='w-1/2  bg-white text-black px-6 py-2 rounded-md absolute right-16 top-11 lg:mt-0 hover:text-slate-800' placeholder='enter your fullname here'></input>
                </div>

                
                
            </div>
            <div className=' h-3/4 w-3/5 absolute bottom-1 right-1 ml-8' >
                <div className='  w-1/2 py-6 pl-0 mt-2 absolute right-12 px-7'>
                <label className="text-white px-10 text-2xl absolute right-30 top-3 font-bold py-9  
                mb-6 ">Name</label>
                <input 
                className='w-1/2  bg-white text-black px-6 py-2 rounded-md absolute right-16 top-11 lg:mt-0 hover:text-slate-800' placeholder='enter your fullname here'></input>
                </div>

                
                
            </div>
            <div className=' h-3/4 w-3/5 absolute bottom-1 right-1 ml-8 py-14   ' >
                <div className='  w-1/2 py-6 pl-0 mt-2 absolute right-12 px-7'>
                <label className="text-white px-10 text-2xl absolute right-30 top-3 font-bold py-9  
                mb-6 ">Email</label>
                <input 
                className='w-1/2  bg-white text-black px-6 py-2 rounded-md absolute right-16 top-11 lg:mt-0 hover:text-slate-800' placeholder='enter your email address here'></input>
                </div>

                
                
            </div>
            <div className=' h-3/4 w-3/5 absolute bottom-1 right-1 ml-8 py-28   ' >
                <div className='  w-1/2 py-6 pl-0 mt-2 absolute right-12 px-7'>
                <label className="text-white px-10 text-2xl absolute right-30 top-3 font-bold py-9  
                mb-6 ">Message</label>
                <input 
                className='w-1/2  bg-white text-black px-6 py-2 rounded-md absolute right-16 top-11 lg:mt-0 hover:text-slate-800' placeholder='enter your message  here'></input>
                </div>

                
                <div className=' h-3/4 w-3/5 absolute bottom-1 right-1 ml-10 py-14  px-9 ' >
                <div className='  w-1/2 py-6 pl-0 mt-2 absolute right-12 px-9'>
                <button type="text" className="bg-yellow-500 text-black px-5 py-1 rounded-md mt-4 lg:mt-0 hover:text-slate-800">
                 Send Message
              </button>
                </div>

                
                
            </div>
            
            

                

                
                
            </div>

            </div>
    )
} 