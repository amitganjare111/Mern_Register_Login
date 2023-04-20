import React from 'react'
import{Link} from 'react-router-dom';
import Logo from "../logo1.jpg";
const Navbar = () => {
  return (
    <>
      <div className ="border pl-3 py-4 space-x-5 flex  items-center bg-black">
            <img className="w-[60px] " src={Logo}></img>
            <Link to="/" className ="text-white  font-bold text-2xl">Popular</Link>
            <Link to="Upcoming"  className="text-white font-bold text-2xl">Upcoming</Link>
            <Link to="TopRated"  className="text-white font-bold text-2xl">TopRated</Link>
            <Link to="NowPlaying"  className="text-white font-bold text-2xl">NowPlaying</Link>
        </div>
    </>
  )
};
export default Navbar;
        