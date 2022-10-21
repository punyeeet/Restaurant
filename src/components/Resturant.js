import React, { useState } from 'react';
import Menu from "./menuApi";
import MenuCard from './MenuCard';
import Navbar from './Navbar';



const uniqueList = [...new Set(Menu.map((currElem)=>{
    return currElem.category;
}))];
console.log(uniqueList)


const Resturant = () => {

    const [menuData, setMenuData]=useState(Menu);
    const [navData,setNavdata]=useState(uniqueList);



    const filteritem = (Category)=>{
      if(Category==="all"){
        setMenuData(Menu);
        return;
      }
      const updatedlist=Menu.filter((currElem)=>{
        return currElem.category === Category;
      });
      
      setMenuData(updatedlist);
    };
    
  return (
    <>  
        <Navbar filteritem={filteritem} navData={navData}/>
        <MenuCard MenuData={menuData}/>
    </>
  );
};

export default Resturant;