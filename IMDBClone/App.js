import Navbar from './Components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Trending from './Components/Trending';
import Banner from './Components/Banner';
import Upcoming from './Components/Upcoming';
import TopRated from './Components/TopRated';
import NowPlaying from './Components/NowPlaying';

function App() {
  return (
    <>
    
   <BrowserRouter>
     <Navbar/>
        <Routes>
            <Route path="/" element={<> <Banner/><Trending/> </>}></Route>
            <Route path="/Upcoming" element={<Upcoming/>}></Route>
            <Route path="/TopRated" element={<TopRated/>}></Route>
            <Route path="/NowPlaying" element={<NowPlaying/>}></Route>
        </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;

