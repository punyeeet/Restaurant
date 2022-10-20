import React from 'react'
import './style.css'

const Navbar = ({filteritem,navData}) => {
  return (
    <>
        <nav className='navbar'>
            <div className='icon'>
                <img className='iconimg' src='../favicon.ico'/>
                <p className='page_title'>Food Room Service</p>
            </div>

            <hr/>


            
          <div className='btn-group'>
          {
                navData.map((currElem)=>{
                    return (
                    <button className='btn-group__item' onClick={()=>{filteritem(currElem)}}>{currElem}</button>
                    );
                })
            }

            
            
          </div>
        </nav>
    </>
  )
}

export default Navbar