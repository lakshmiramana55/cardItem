import './index.css'

const ProductCard = props => {
  const {cardDetails} = props
  const {name, description, imageUrl} = cardDetails

  return (
    <li>
      <img className="card-img" src={imageUrl} alt={name} />
      <h1 className="card-title">{name}</h1>
      <p className="card-description">{description}</p>
    </li>
  )
}

export default ProductCard
