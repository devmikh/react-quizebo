import categoriesData from '../categoriesData';
import Category from './Category';
import { nanoid } from 'nanoid';

export default function CategoryScreen(props) {

  const categoryElements = categoriesData.map(category => {
    return <Category key={nanoid()} name={category.name} subcategories={category.subcategories} handleClick={props.handleClick} />
  })

  return (
    <div className="category-screen">
      <h1>Choose category</h1>
      <div className="categories-container">
        {categoryElements}
      </div>
    </div>
  )
}