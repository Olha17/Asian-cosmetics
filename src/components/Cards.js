function Cards() {
    return (
<div className="card">
    <div className="favrite">
        <img src="img/unliked.svg" alt="unliked" />
    </div>
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
    );
}
export default Cards;