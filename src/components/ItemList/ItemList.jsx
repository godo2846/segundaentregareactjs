
const ItemList = ({products}) => {
  return (
    <div>
        {products.maps(prod =>{
            return <p key={prod.id}>{prod.name}</p>
        })}
    </div>
  )
}

export default ItemList