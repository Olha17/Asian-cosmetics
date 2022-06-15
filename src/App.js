function App() {
  return (
    <div className="wrapper">
      <header className="d-flex space-between">
        <div className = "headerLeft d-flex">
          <img width={40} height={40} src="img/logo.png"></img>
          <div>
            <h3>Asia makeup</h3>
            <p>Интернет магаин косметики</p>
          </div>
        </div>
        <ul className="headerRight d-flex">
          <li>
          <img width={18} height={18} src="img/cart.svg"></img>
          <span>100 usd</span>
          </li>
          <li>
          <img width={18} height={18} src="img/user.svg"></img>
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>все товары</h1>
        <div className="card">
          <img width={133} height={112} src="img/sneakers/1.jpg" alt="Sneakers" />
          <h5>косметика для ног</h5>
          <div className="d-flex space-between">
            <div className="d-flex flex-colomn">
              <span>Price:</span>
              <b> 12 999 usd</b>
            </div>
            <button> 
              <img width={11} height={11} src="/img/plus.svg" alt="plus" /> 
            </button>
          </div>
        </div>
       </div>
    </div>
  );
}

export default App;
