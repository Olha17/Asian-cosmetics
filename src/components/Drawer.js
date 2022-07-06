function Drawer() {
    return (
        <div className="drawer">
          <h2 className="d-flex space-between">Корзина 
          <img src="/img/btn-remove.svg" />
          </h2>
          <div className="items">
            <div className="cartItem d-flex space-between">
              <img width={70} height={70} src="/img/sneakers/1.jpg" />
              <div>
                <p>something</p>
                <b>123456 usd</b>
              </div>
              <img src="/img/btn-remove.svg" />

            </div>
            <div className="cartItem d-flex space-between">
              <img width={70} height={70} src="/img/sneakers/2.jpg" />
              <div>
                <p>something</p>
                <b>123456 usd</b>
              </div>
              <img src="/img/btn-remove.svg" />

            </div>
          </div>
     <div className="cardTotalBlock">
     <ul>
      <li>
        <span>Total</span>
        <div></div>
        <b>2468 usd</b>
      </li>
      <li>
        <span>Tips</span>
        <div></div>
        <b>5 usd</b>
      </li>
     </ul>
     <button className="Greenbutton">Order</button>
        </div>
        </div>

    );
}
export default Drawer;