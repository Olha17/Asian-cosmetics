import Cards from './components/Cards';
import Header from './components/Header';
import Drawer from './components/Drawer';
 
function App() {
  return (
    <div className="wrapper">
      <div  style={{display:  'none'}} className="overlay">
        <Drawer />
      </div>
      <Header />
      <div className="content">
        <div className="d-flex space-between">
          <h1>все товары</h1>
          <div className="search-block">
            <img src="img/search.svg" alt="Search" />
            <input placeholder="Search" />
          </div>
        </div>
        <div className="d-flex">
          <Cards />
        </div>
      </div>

    </div>
  );
}

export default App;
