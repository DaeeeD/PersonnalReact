import "../styles/cart.css"

function Cart () {
    const priceprimus = 8;
    const pricesecondus = 10;
    const pricetertius = 15;
    return (
        <div className='testingsitecart'>Panier
            <ul>TrucPrimus: {priceprimus}</ul>
            <ul>TrucSecondus: {pricesecondus}</ul>
            <ul>TrucTertius: {pricetertius}</ul>
            <ul>Totalité: {priceprimus+pricesecondus+pricetertius}</ul>
        </div>
    )
}

export default Cart