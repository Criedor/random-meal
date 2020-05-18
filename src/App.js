import React, { useEffect } from 'react';
import Search from './search'
import Recipe from './recipe'
import './App.css';
import { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

function App() {

const [recipe, setRecipe] = useState()
const history = useHistory()


var myHeaders = new Headers();
    myHeaders.append("Cookie", "__cfduid=de63010df90591fcb641b1361145e59481589803911");
  
var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};  

const getRecipe = () =>{
  fetch("https://www.themealdb.com/api/json/v1/1/random.php", requestOptions)
  .then(response => response.json())
  .then(result => setRecipe(result.meals[0]))
  .catch(error => console.log('error', error));
}


useEffect(()=>{
  if(recipe !== undefined){
    history.push(`/recipe/${recipe.idMeal}`)
  };
},[recipe,history])


  return (
    <>
      <Switch>
        <Route path="/recipe/:recipe">
          <Recipe recipe={recipe}/>
        </Route>
        <Route exact path="/">
          <Search handleClick={getRecipe}/>
        </Route>
      </Switch>
    </>  
  );
}

export default App;
