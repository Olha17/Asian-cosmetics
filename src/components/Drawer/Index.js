import React from "react";
import Info from "../Info";
import { AppContext } from '../App'
import styles from './Drawer.module.scss';

function Drawer({onCloseCard, onRemove, items = [], opened}) {
  const {cartItems, setCartItems} = React.useContext(AppContext);
  const[isComplete, setIsComplete] = React.useState(false);
  const onClickOrder = () => {
    setIsComplete(true);
    setCartItems([]);
  }

  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);
    return (
      <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
      <div className={`${isComplete || {} ? styles.drawerWithItem : styles.drawer }`}>
          <h2 className="d-flex space-between">Корзина
          <img className="removeBtn" src="/img/x-lg.svg" onClick={onCloseCard} alt="Remove1"/>
          </h2>

          
      {items.length > 0 ? (
      <div className="d-flex flex-colomn flex">
      <div className={styles.items}>
      {items.map((obj, index) => (
        <div key = {index} className="cartItem d-flex space-between">
          <div>
              <img width={133} height={112} src={obj.img} alt="Goods" />
            </div>
          <div>
            <p>{obj.title}</p>
            <b>{obj.price} usd</b>
            </div>
          <img onClick={ () => onRemove(obj.id) } className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
      ))}
      
    </div> 
    <div className="cardTotalBlock">
    <ul>
    <li>
      <span>Всего</span>
      <div></div>
      <b>{totalPrice} грн</b>
    </li>
    <li>
      <span>Доставка</span>
      <div></div>
      <b>{Math.round(totalPrice /100 *5)} грн</b>
    </li>
    </ul>
    <button onClick={onClickOrder} className='Greenbutton'>Оформить заказ</button>
      </div>
      </div>
  
  ):( 
        <Info 
        title={isComplete ? "Заказ оформлен" : "Пусто"} 
        description={isComplete ? "Спасибо за покупку" : "Добавьте что-нибудь"} 
        img={isComplete ? "img/complete-order.jpg" : "img/empty-cart.jpg"} 
        />
            )
      }

  </div>
  </div> 

          

    );
}
export default Drawer;