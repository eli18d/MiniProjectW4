import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

function AddNewForm({AddNewRecipe}) {

    const [name, setName] = useState("");
    const [country, setCountry] = useState("");
    const [cardDescription, setCardDescription] = useState("");
    const [description, setDescription] = useState("");
    const [suggestions, setSuggestions] = useState("");
    const [calories, setCalories] = useState("")
    const [image, setImage] = useState("")
    const [ingredients, setIngredients] = useState("")
    const [instructions, setInstructions] = useState("")

    const navigate = useNavigate();

const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
        id: uuidv4(),
        name: name,
        country: country,
        cardDescription: cardDescription,
        description: description,
        suggestions: suggestions,
        calories: calories,
        image: image,
        ingredients: ingredients,
        instructions: instructions,
       
    };
    AddNewRecipe(newRecipe);

    setName('');
    setCountry("");
    setCardDescription("");
    setDescription("");
    setSuggestions("");
    setCalories('');
    setImage('');
    setIngredients('');
    setInstructions('');

    toast.success("🎉 New recipe added!");
    setTimeout(() => {
        navigate("/");
    }, 2000); 
  }  

    return (
        
        <>
    <form  onSubmit={handleSubmit} className="add-form-container"> 
    <div>

    <input type="text" name="name" placeholder="Enter the name of the recipe"  value={name} onChange={(e) => { setName(e.target.value) }} />
    
    <input type="text" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} />
    
    <input type="text" placeholder="Card Description" value={cardDescription} onChange={(e) => setCardDescription(e.target.value)} />
        
    <input type="text" placeholder="Full Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        
    <input type="text" placeholder="Suggestions" value={suggestions} onChange={(e) => setSuggestions(e.target.value)} />

    <input type="text" name="Calories" placeholder="Enter the amount of calories"  value={calories} onChange={(e) => { setCalories(e.target.value) }} />

    <input type="text" name="image" placeholder="Enter image URL here"  value={image} onChange={(e) => { setImage(e.target.value) }} />

    <input type="text" name="ingredients" placeholder="Enter the ingredients"  value={ingredients} onChange={(e) => { setIngredients(e.target.value) }} />

    <input type="text" name="instructions" placeholder="Enter the instructions"  value={instructions} onChange={(e) => { setInstructions(e.target.value) }} />

    <button>Create</button>

    </div>

    </form>
     <ToastContainer position="bottom-left" autoClose={1800} hideProgressBar={false} />      
     </>  
    )
}

export {AddNewForm};