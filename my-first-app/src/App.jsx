import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Navbar } from './Components/Navbar';
import {Footer} from './Components/Footer';
import {Header} from './Components/Header';
import {List} from './Components/List'
import RecipeBook from './assets/RecipeBook.json';
 

function App() {
  
  const [recipes, setRecipes] = useState(RecipeBook)

  const deleteItem = (itemsDelete) => {
    const newRecipes = recipes.filter((recipe) => {
        if (recipe.id !== itemsDelete) {
            return true
        }
        else {
            return false
        }
    })

    setRecipes(newRecipes)
}




  return (

    <div>
      <div>
        <Navbar/>
      </div>
      
      <div>
        <Header/>
      </div>

      <div> 
        <List recipeList={recipes}
        deleteCallbBack={deleteItem} />
      </div>
      
      <div>
        <Footer/>
      </div>

    </div>
    
    
    
  )
}

export default App
