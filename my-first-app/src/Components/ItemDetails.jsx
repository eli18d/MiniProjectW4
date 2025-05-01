import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function ItemDetails({ recipes }) {
  const { id } = useParams();
  const recipe = recipes.find(recipe => recipe.id === id);
  const navigate = useNavigate();

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  return (
    <div className="item-details">
      <h2>{recipe.name}</h2>
      <h3>Country: <strong>{recipe.country}</strong></h3>
      <img src={recipe.image} alt={recipe.name} />
      <p><strong>Description:</strong> {recipe.description}</p>
      <p><strong>Suggestions:</strong> {recipe.suggestions}</p>
      <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
      <p><strong>Instructions: </strong>{recipe.instructions}</p>
      <button onClick={() => navigate('/')}>← Back</button>
    </div>
  );
}

export default ItemDetails;