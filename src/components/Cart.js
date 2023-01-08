import "../styles/cart.css"

function Cart () {
    const positonprimus = 1;
    const positionsecondus = 2;
    const positiontertius = 3;
    return (
        <div className='testingsitecart'>Liste
            <ul>TrucPrimus: {positonprimus}</ul>
            <ul>TrucSecondus: {positionsecondus}</ul>
            <ul>TrucTertius: {positiontertius}</ul>
            <ul>total des points: {positonprimus+positionsecondus+positiontertius}</ul>
        </div>
    )
}

export default Cart