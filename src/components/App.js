import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Drawer from './Drawer/Index';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

const items = [
  {id: "1", name: "Маска для лица", price: 199, img: "img/sneakers/1.png"},
  {id: "2", name: "Крем для рук", price: 299, img: "img/sneakers/1.png"},
  {id: "3", name: "Крем для лица", price: 135, img: "img/sneakers/1.png"},
  {id: "4", name: "Патчи для глаз", price: 287, img: "img/sneakers/1.png"},
  {id: "5", name: "Маска для лица", price: 199, img: "img/sneakers/1.png"},
  {id: "6", name: "Крем для рук", price: 299, img: "img/sneakers/1.png"},
  {id: "7", name: "Крем для лица", price: 135, img: "img/sneakers/1.png"},
  {id: "8", name: "Патчи для глаз", price: 287, img: "img/sneakers/1.png"},
  {id: "9", name: "Маска для лица", price: 199, img: "img/sneakers/1.png"},
  {id: "10", name: "Крем для рук", price: 299, img: "img/sneakers/1.png"},
  {id: "11", name: "Крем для лица", price: 135, img: "img/sneakers/1.png"},
  {id: "12", name: "Патчи для глаз", price: 287, img: "img/sneakers/1.png"},
  {id: "13", name: "Маска для лица", price: 199, img: "img/sneakers/1.png"},
  {id: "14", name: "Крем для рук", price: 299, img: "img/sneakers/1.png"},
  {id: "15", name: "Крем для лица", price: 135, img: "img/sneakers/1.png"},
  {id: "16", name: "Патчи для глаз", price: 287, img: "img/sneakers/1.png"}
];

export const AppContext = React.createContext({});

function App() {

  const [cartOpen, setCartOpen] = useState (false);
  const [searchValue, setsearchValue] = useState ('');
  const [favorites, setFavorites] = useState([]);
  const [cartItems, setCartItems] = useState ([]);
  const [isLoading] = useState (false);

  const onRemoveItem = (id) => {
    setCartItems((prev) => prev.filter(item => item.id !== id));
  }

  const onChangeSearchInput = (event) => {
    setsearchValue (event.target.value);
  }

  const onAddToCard = (obj) => {

    if (cartItems.find(item => item.id === obj.id)) {
      setCartItems((prev) => prev.filter(item => item.id !== obj.id));
    }
else {
  setCartItems(prev => [...prev, obj]);
}
    
  };

  const onAddToFavorite = (obj) => {
    if (favorites.find(favObj => Number(favObj.id) === Number(obj.id))) {
      setFavorites((prev) => prev.filter(item => Number(item.id) !== Number(obj.id)));
    }
else {
  setFavorites(prev => [...prev, obj]);
}
   
  };

const IsItemAdded = (id) => {
  return cartItems.some(obj => obj.id === id)
}


  return (
      <AppContext.Provider value={{items, cartItems, favorites, IsItemAdded, onAddToFavorite, setCartOpen, setCartItems}}>
    <div className="wrapper">

      
      <Drawer items={cartItems} onCloseCard = {() => setCartOpen (false)} onRemove = {onRemoveItem} opened={cartOpen}/> 
      <Header onClickCard = {() => setCartOpen (true)} />
       <Routes>
        <Route path="" element= {
        <Home 
        onAddToFavorite={onAddToFavorite} 
        onChangeSearchInput={onChangeSearchInput} 
        searchValue={searchValue} 
        setsearchValue={setsearchValue} 
        items={items} 
        onAddToCard={onAddToCard}
        cartItems={cartItems}
        isLoading={isLoading}
        />}/>
        <Route path="favorites" element={<Favorites/>}/>
      </Routes>
      
    </div>
    </AppContext.Provider>
  );
}

export default App;
