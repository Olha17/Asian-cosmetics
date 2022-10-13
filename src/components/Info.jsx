import React from 'react'
import { AppContext } from './App';

export const Info = ({img, title, description}) => {
    const {setCartOpen} = React.useContext(AppContext);
  return (
    <div className="cartPosition"> 
    <div  className="cartEmpty">
      <img width={120} src={img} alt="empty-cart"/>
      <h2>{title}</h2>
      <p>{description}</p>
      
    </div>
    <button onClick={() => {setCartOpen(false)}} className="Greenbutton">
    Назад &nbsp;&nbsp; <img src="img/arrow.svg" alt="Arrow"/>
      </button>
      </div>
  )
}

export default Info;