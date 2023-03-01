import React from 'react';
import FamilyTree from '../components/FamilyTree';
import Navbar from './Navbar';


const MainPage: React.FC = () => {
  return (
    <div>
        <Navbar/>
        <FamilyTree/>
        <div style={{height: 3000,}}>

        </div>
    </div>
  );
};

export default MainPage;