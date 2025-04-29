import { useState } from "react";

function AddNewForm({AddNewRecipe}) {

    const [name, setName] = useState("");
    const [calories, setCalories] = useState("")
    const [image, setImage] = useState("")
    const [servings, setServings] = useState("")
    const [ingredients, setIngredients] = useState("")
    const [instructions, setInstructions] = useState("")

const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
        name: name,
        calories: calories,
        image: image,
        servings: servings,
        ingredients: ingredients,
        instructions: instructions,
    };
    AddNewRecipe(newRecipe);

    setName('');
    setCalories('');
    setImage('');
    setServings('');
    setIngredients('');
    setInstructions('');

    
  }  

    return (
        

    <form  onSubmit={handleSubmit}> 
    <div>

    <input type="text" name="name" placeholder="enter the name of the recipe"  value={name} onChange={(e) => { setName(e.target.value) }} />

    <input type="text" name="calories" placeholder="enter the amount of calories"  value={calories} onChange={(e) => { setCalories(e.target.value) }} />

    <input type="text" name="image" placeholder="enter image URL here"  value={image} onChange={(e) => { setImage(e.target.value) }} />

    <input type="text" name="servings" placeholder="enter the amount of servings"  value={servings} onChange={(e) => { setServings(e.target.value) }} />

    <input type="text" name="ingredients" placeholder="enter the ingredients"  value={ingredients} onChange={(e) => { setIngredients(e.target.value) }} />

    <input type="text" name="instructions" placeholder="enter the instructions"  value={instructions} onChange={(e) => { setInstructions(e.target.value) }} />

    <button>Create</button>

    </div>

    </form>
            
        
    )
}

export {AddNewForm};