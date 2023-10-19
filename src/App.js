import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Salesman from './Salesman/Salesman';
import Depo from './Depo/Depo';
import Prosessor from './Salesman/Prosessor/Prosessor';
import Motherboard from './Salesman/Motherboard/Motherboard';
import Ram from './Salesman/Ram/Ram';
import Videocard from './Salesman/Videocard/Videocard';
import Storage from './Salesman/Storage/Storage';
import Psu from './Salesman/Psu/Psu';
import Case from './Salesman/Case/Case';
import Cooler from './Salesman/Cooler/Cooler';
import CaseFan from './Salesman/CaseFan/CaseFan';
import Display from './Salesman/Display/Display';

const App = () => {  
  return (
    <div id='app'>
      <header>
        Techbar | PC Builder
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/salesman' element={<Salesman />} />
        <Route path='/depo' element={<Depo />} /> {/* condition for auth */}
        <Route path='/cpu' element={<Prosessor />} />
        <Route path='/mb' element={<Motherboard />} />
        <Route path='/ram' element={<Ram />} />
        <Route path='/videocard' element={<Videocard />} />
        <Route path='/storage' element={<Storage />} />
        <Route path='/psu' element={<Psu />} />
        <Route path='/case' element={<Case />} />
        <Route path='/cooler' element={<Cooler />} />
        <Route path='/case-fan' element={<CaseFan />} />
        <Route path='/display' element={<Display />} />
      </Routes>
    </div>
  );
};

export default App;