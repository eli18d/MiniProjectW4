import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Sidebar } from './Components/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Footer} from './Components/Footer';
import {Header} from './Components/Header';
import {Dashboard} from './Components/Dashboard'
import RecipeBook from './assets/RecipeBook.json';
import AboutPage from './Components/AboutPage';
import ItemDetails from './Components/ItemDetails';
import NotFound from './Components/NotFound';
import {Navbar} from './Components/Navbar'
import { AddNewForm } from './Components/AddNewForm';
import {SearchBar} from './Components/SearchBar'

 

function App() {
  
  const [recipes, setRecipes] = useState(RecipeBook)
  const [searchQuery, setSearchQuery] = useState('');

  const AddNewRecipe = (newRecipe) => {
    setRecipes ([newRecipe, ...recipes])
  }

  const deleteItem = (itemsDelete) => {
    const newRecipes = recipes.filter((recipe) => {
        if (recipe.id !== itemsDelete) {
            return true
        }
        else {
            return false
        }
    })

    setRecipes(newRecipes);

     
}

const filteredRecipes = recipes.filter((recipe) =>
  recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
  recipe.keyWords.some(kw => kw.toLowerCase().includes(searchQuery.toLowerCase()))
);








  return (

    <Router>
      <div className="app-container">
        <Navbar />
        <Sidebar />
        <Header />
        
        
        <div className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <SearchBar onSearch={setSearchQuery} />

                <Dashboard recipeList={filteredRecipes} deleteCallbBack={deleteItem} />
               
              </>
            } />
            <Route path="/about" element={<AboutPage />}/>

            <Route path="/AddNewForm" element={<AddNewForm AddNewRecipe={AddNewRecipe}/>} />

            <Route path="/item/:id" element={<ItemDetails recipes={recipes} />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        
        <Footer />
      </div>
      </Router>
    
    
    
  )
}

export default App
