import { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import RecipeList from './components/RecipeList'
import ExpandedRecipeItem from './components/ExpandedRecipeItem'

export default function App() {
  // const [input, setInput] = useState("")
  const [inputInProgress, setInputInProgress] = useState({ searchBar: '' });
  const [recipeArray, setRecipeArray] = useState([])

  const updateTyping = (e) => {
    setInputInProgress({ ...inputInProgress, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`input is ${inputInProgress.searchBar}`)
    // setInput(inputInProgress.searchBar)
    const searchTerm = inputInProgress.searchBar;
    setInputInProgress({searchBar:''})
    getData(searchTerm)
    
  }

  const getData = async (searchTerm) => {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
    console.log(`recipes are ${response.data.meals}`)
    
    //assign API results to array
    setRecipeArray(response.data.meals)

  }



  return (
    <div className='app'>




          <Routes>
              
          <Route path ='/' element={<Home/>}/>
          <Route path ='/boatlist' element={<BoatList boats = {boats}/>}/>
          <Route path ='/boatlist/:boatId' element ={<BoatDetails boats = {boats}/>}/>
          <Route path ='/new' element ={<BoatForm newBoat = {newBoat}
                                                  handleChange = {handleChange}
                                                  addBoat = {addBoat}
                                                  />}/>
        </Routes>
    </div>
  )
}

