import React, { useState } from 'react';
import './App.css';



function Recipe(props) {
const [ingridients, setIngridients] = useState({})

    const helper = () =>{
        console.log(props.recipe)
            for (var i = 1; i <=20; i++){
            let k = "strIngredient"+i
            let j = "strMeasure"+i
            console.log({[props.recipe.k] : props.recipe.j})
            }
        
        }
    
  return (  
    <>  
        {helper()}
        <div className="recipe">
          <h1>{props.recipe.strMeal}</h1>
          <img src={props.recipe.strMealThumb} alt={props.recipe.strMeal}></img>
          <h4>{props.recipe.strInstructions}</h4>    
        </div>
    </>
    );
}

export default Recipe;