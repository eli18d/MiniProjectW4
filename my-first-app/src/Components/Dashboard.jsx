import RecipeBook from "../assets/RecipeBook.json"
import { useState } from "react";
import './List.css';
import { Link } from 'react-router-dom';



function Dashboard(props) {

   



    return (
        <section>
            {props.recipeList.map((recipeObj) => {
                return (
                    <div key={recipeObj.id} className="card">
                        <Link to={`/item/${recipeObj.id}`}>
                            <img src={recipeObj.image} alt={recipeObj.name} className="card-image"></img>
                            <h3 className="card-info"><strong>{recipeObj.name}</strong></h3>
                            <p className="card-info"> Calories: {recipeObj.calories}</p>
                            <p className="card-info"> Servings: {recipeObj.servings}</p>
                            <div className="label">
                                {recipeObj.calories <= 300 && (
                                    <span className="healthy"> Healthy </span>
                                )}
                            </div>
                        </Link>
                        <button onClick={() => props.deleteCallbBack(recipeObj.id)}>Delete recipe</button>
                    </div>
                );
            })}
        </section>)
    }
    
    export {Dashboard};