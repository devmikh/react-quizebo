import { nanoid } from "nanoid";
import Subcategory from "./Subcategory";

export default function Category(props) {
  const subcategoryElements = props.subcategories.map(subcategory => {
    return <Subcategory key={nanoid()} name={subcategory.name} number={subcategory.number} handleClick={() => props.handleClick(subcategory)}/>;
  });



  return (
    <div className="category-container">
      <div className="category-title">
        <img src={require (`../images/${props.image}`)} className="category-icon" alt="category" />
        <h2>{props.name}</h2>
      </div>
      {subcategoryElements}
    </div>
  )
}