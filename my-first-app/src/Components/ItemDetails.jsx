import { useParams } from 'react-router-dom';

function ItemDetails({ recipes }) {
  const { id } = useParams();
  const recipe = recipes.find(recipe => recipe.id === id);

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  return (
    <div className="item-details">
      <h2>{recipe.name}</h2>
      <img src={recipe.image} alt={recipe.name} />
      <p>Calories: {recipe.calories}</p>
      <p>Servings: {recipe.servings}</p>
      <p>Ingredients: {recipe.ingredients}</p>
      
      <p>Instructions: {recipe.instructions}</p>
    </div>
  );
}

export default ItemDetails;