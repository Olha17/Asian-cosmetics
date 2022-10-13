import React from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from './App';


function Header(props) {
const {cartItems} = React.useContext(AppContext);
const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

    return (
<header className="d-flex space-between">
<Link to="/">
        <div className="headerLeft d-flex">
          <img width={40} height={40} src="img/logo.png" alt="logo"></img>
          <div>
            <h3>Asia makeup</h3>
            <p>Магазин корейской косметики</p>
          </div>
        </div>
        </Link>
        <ul className="headerRight d-flex">
        <Link to="favorites">
            <img width={25} height={25} src="img/heart.svg" alt="heart"></img>
          </Link>
          <li onClick={props.onClickCard}>
            <img width={25} height={25} src="img/cart.svg" alt="cart"></img>
            <span>{totalPrice} грн.</span>
          </li>
          <li>
          
          </li>
          <li>
          </li>
        </ul>
      </header>
    );
}
export default Header;