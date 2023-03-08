import React,{useState} from "react";
import Login from "./Components/Login";
import Sidebar from "./Components/Sidebar";
import { Sling as Hamburger } from 'hamburger-react'


export default function App() {

  const [Open, setOpen] = useState(false);

  function handleToggle(){
    setOpen((prevState) => (!prevState));
  }
      

  return (
    <>
      <div
        className='h-screen z-10 w-full bg-cover bg-center bg-[url("https://w0.peakpx.com/wallpaper/102/290/HD-wallpaper-kimi-no-na-wa-meteor-meteor-your-name-kimi-no-na-wa-anime-movie.jpg")] font-sans'>
        <div className="bg-black/40 h-screen">
          <Login />
        </div>
      </div>
      <div className="z-20 absolute top-0">
        <aside className="relative top-5 left-5" >
        <div className='absolute z-10 hamburger '>
          <Hamburger duration={.8} color="white" onToggle={handleToggle}/>
          </div>
        </aside>
       { Open &&
        <div className="" >
           <Sidebar />
        </div>}
       
      </div>
      
    </>
  );
}
