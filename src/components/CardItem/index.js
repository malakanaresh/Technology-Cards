import './index.css'
// Write your code here.

const CardItem = props => {
  const {itemDetails} = props
  const {title, description, className, imgUrl} = itemDetails
  return (
    <li className={className}>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={imgUrl} alt={title} />
    </li>
  )
}

export default CardItem
