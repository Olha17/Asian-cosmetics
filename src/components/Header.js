function Header() {
    return (
<header className="d-flex space-between">
        <div className="headerLeft d-flex">
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
    );
}
export default Header;