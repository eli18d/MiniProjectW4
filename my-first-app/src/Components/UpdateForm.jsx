import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from "react-router-dom";

function UpdateForm({ recipes, updateRecipe }) {
    const { id } = useParams();
    const navigate = useNavigate();

    const recipe = recipes.find(item => item.id === id);

    const [name, setName] = useState("");
    const [country, setCountry] = useState("");
    const [cardDescription, setCardDescription] = useState("");
    const [description, setDescription] = useState("");
    const [suggestions, setSuggestions] = useState("");
    const [calories, setCalories] = useState("");
    const [image, setImage] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");

    useEffect(() => {
        if (recipe) {
            setName(recipe.name);
            setCountry(recipe.country);
            setCardDescription(recipe.cardDescription);
            setDescription(recipe.description);
            setSuggestions(recipe.suggestions);
            setCalories(recipe.calories);
            setImage(recipe.image);
            setIngredients(recipe.ingredients);
            setInstructions(recipe.instructions);
        }
    }, [recipe]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updated = {
            ...recipe,
            name,
            country,
            cardDescription,
            description,
            suggestions,
            calories,
            image,
            ingredients,
            instructions,
        };

        updateRecipe(updated);
        toast.success("✅ Recipe updated!");
        setTimeout(() => navigate("/"), 2000);
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="add-form-container">
                
                <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                
                <input type="text" placeholder="Country" value={country} onChange={e => setCountry(e.target.value)} />
                
                <input type="text" placeholder="Card Description" value={cardDescription} onChange={e => setCardDescription(e.target.value)} />
                
                <input type="text" placeholder="Full Description" value={description} onChange={e => setDescription(e.target.value)} />
                
                <input type="text" placeholder="Suggestions" value={suggestions} onChange={e => setSuggestions(e.target.value)} />
                
                <input type="text" placeholder="Calories" value={calories} onChange={e => setCalories(e.target.value)} />
                
                <input type="text" placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)} />
                
                <input type="text" placeholder="Ingredients" value={ingredients} onChange={e => setIngredients(e.target.value)} />
                
                <input type="text" placeholder="Instructions" value={instructions} onChange={e => setInstructions(e.target.value)} />
               
                <button>Update</button>
            </form>
            <ToastContainer position="bottom-left" autoClose={1600} />
        </>
    );
}

export { UpdateForm };