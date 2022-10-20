import React from 'react'
import './style.css';

const MenuCard = ({ MenuData }) => {
    // console.log(MenuData);
    return (
        <>
        <div className='main-card--cointainer'>
        {MenuData.map((currElem)=>{
            if(currElem.id===0){
                return;
            }
            const {id,name,category,image,description}=currElem;
            
            return(
                <>
                
                <div className='card-container'>
                <div className='card'>
                    <div className='card-body'>
                        <span className='card-number card-circle subtle'>{id}</span>
                        <span className='card-author subtle'>{category}</span>
                        <h2 className='card-title'>{name}</h2>
                        <span className='card-description subtle'>
                            {description}
                        </span>
                        <div className="card-read">Read</div>
                        <img src={image} alt="images" className='card-media' />
                        <span className='card-tag subtle'>Order Now</span>
                    </div>
                </div>
            </div>
            
                </>

            );
        })}
        </div>
            
        </>
    );
}

export default MenuCard;