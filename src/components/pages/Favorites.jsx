import React from 'react';
import Cards from '../Cards/Cards';
import { AppContext } from '../App'
function Favorites () {
  const {favorites, onAddToFavorite} = React.useContext(AppContext);
    return (
<div className="content">
<div className="d-flex space-between">
  <h1>Все закладки</h1>  
</div>

<div className="d-flex">
 {favorites
 .map((item, index) => (
  <Cards 
  key = {index}
  favorited={true} 
  onFavorite={onAddToFavorite} 
  {...item}
/>
 ))}
</div>
</div>
    );
 };

 export default Favorites;