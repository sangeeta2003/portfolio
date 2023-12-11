export default function Navbar() {
    return (
    //   <div className="bg-gray-800 h-screen w-full style={{ backgroundImage: 'linear-gradient(to bottom, lightblue, darkblue)'">
        <div>
          <nav className="bg-#14213d p-4">
            <div className="container mx-auto flex justify-between items-center px-20">
            <div className="font-bold text-3xl">
  <span style={{ color: 'yellow' }}>My</span>
  <span style={{ color: 'blue' }}> Portfolio</span>
</div>

              <div className="space-x-7 flex items-center text-xl">
                <a href="Home" className="text-white">
                  Home
                </a>
                <a href="About" className="text-white">
                  About
                </a>
                <a href="My skills" className="text-white">
                  Skills
                </a>
                <a href="Projects" className="text-white">
                  Projects
                </a>
              </div>
              <button type="text" className="bg-white text-black px-3 py-1 rounded-md mt-4 lg:mt-0 hover:text-slate-800">
                Contact Me
              </button>
            </div>
          </nav>
        </div>
    //   </div>
    );
  }
  