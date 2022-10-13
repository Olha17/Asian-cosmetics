import React from 'react';
import ContentLoader from "react-content-loader";
import './Cards.scss';
import { AppContext } from '../App'

function Cards({ 
    onFavorite, 
    id, 
    img, 
    title, 
    price, 
    onPlus, 
    favorited = false, 
    loading = false
}) {
const {IsItemAdded} = React.useContext(AppContext);
const [isFavorite, setIsFavorite] = React.useState (favorited);


const onClickPlus = () => {
onPlus({img, id, title, price});
}

const onClickFavorite = () => {
    onFavorite({img, id, title, price});
    setIsFavorite(!isFavorite);
    }

    return (
<div className="card">
{loading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={250}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
 ) : (
<>
    <div className="favorite" onClick={onClickFavorite}>
        <img  width={25} src={isFavorite ? "/img/like.png" : "img/heart.png"} alt="liked"/>
    </div>
    <img width={133} height={112} src={img} alt="Goods" />
    <h5>{title}</h5>
    <div className="d-flex space-between">
        <div className="d-flex flex-colomn">
            <span>Цена:</span>
            <b> {price} грн.</b>
        </div>
            <img src= {IsItemAdded(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="plus" className="cartItem" onClick={onClickPlus}/>
        
        </div>
        </>
 )}
</div>
    );
}
export default Cards;