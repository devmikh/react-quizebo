export default function Subcategory(props) {
  return (
    <div className="subcategory-container" onClick={props.handleClick}>
      <img src={require(`../images/${props.number}.jpg`)} alt="subcategory" className="subcategory-image"/>
      <h3 className="subcategory-text">{props.name}</h3>
    </div>
  )
}