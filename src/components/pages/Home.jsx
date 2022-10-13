import React from 'react';
import Cards from '../Cards/Cards';
function Home ({onAddToFavorite, onChangeSearchInput, searchValue, setsearchValue, items, onAddToCard, isLoading}) {
  

  const renderItems = () => {
  return (isLoading ? [...Array(8)] : items.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase())))
    .map((item, index) => (
      <Cards 
      key = {index}
      id = {item.id}
      title = {item.name}
      price = {item.price}
      img = {item.img}
      onFavorite={(obj) => onAddToFavorite(obj)}
      onPlus={(obj) => onAddToCard(obj)}
      loading={isLoading}
    />
    ));

  };

    return (
<div className="content">
<div className="d-flex space-between">
  <h1>Все товары</h1>
   <div className="search-block">
    <img src="img/search.svg" alt="Search" />
    <input onChange={onChangeSearchInput} value = {searchValue} placeholder="Search" />
    {searchValue && <img className=" clear" src="/img/btn-remove.svg" onClick={() => setsearchValue ('')} alt="Remove" />}
  </div>
</div>
<div className="d-flex d-wraper space-between">{renderItems()}</div>
</div>
    );
 };

 export default Home;