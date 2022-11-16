import React, { useEffect, useState } from 'react'
import Recipes from './Recipes'
import './App.css'

function App() {

  
    const [recipes , setRecipes] = useState([])
    const [input , setInput] = useState('')
    const [query , setQuery] = useState('')
    
    useEffect(()=>{
      getRecipes()
    },[query])

    const app_id = '7e67d3aa'
    const app_key = 'abe66abb5215ec8d864a204430d5b588'

    const url = `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`

    
    const getRecipes = async ()=>{
      const response = await fetch(url)
      const data = await response.json()
      setRecipes(data.hits)
    }
    
const updateInput = e =>{
  setInput(e.target.value)
}

const getInput = e =>{
  e.preventDefault()
  setQuery(input)
  setInput('')
}


  return (
    <div>
        <form 
        className='search-form'
        onSubmit={getInput}
        >
          <input
           className='search-bar' 
           type="text" 
            value={input}
            onChange={updateInput}
           />
          <button  className='search-btn' type='submit' >Search</button>
        </form>
        {recipes.map((recipe , index)=>(
          <Recipes 
          key={index}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            calories={recipe.recipe.calories}
          />
        ))}
    </div>
  )
}

export default App