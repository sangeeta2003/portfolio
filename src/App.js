import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
export default function App() {
  return (
    <div className="bg-gray-800 h-screen w-full" style={{ backgroundImage: 'linear-gradient(to bottom,  #14213d, #03045e)' }}>
  <Navbar />
  <HomePage />
</div>

   
  );
}


