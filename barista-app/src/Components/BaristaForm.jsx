import React, {Component, useState} from "react";
const BaristaForm = () => {
    const [inputs, setInputs] = useState({
        'tempareture': '',
        'milk': '',
        'syrup': '',
        'blended': ''
    })

    const ingredients = {
        'tempareture': ['hot', 'lukewarm', 'cold'],
        'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
        'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
        'blended': ['yes', 'turbo', 'no']
    }
    const onNewDrink = () => {

    }
    const onCheckAnswer = () => {

    }
    return (
        <div>
        <h2> Hi, I'd like to order a: </h2>
        <form>
        <h3>Temperature</h3>
<div className="answer-space" >
  {inputs["temperature"]} 
</div>
<RecipeChoices
  handleChange={(e) => setInputs((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
  }))}
  label="temperature"
  choices={ingredients["temperature"]}
  checked={inputs["temperature"]}
/>
        </form>

        <button type="submit" className="button submit" onClick={onCheckAnswer}>
            Check Answer
        </button>

        <button
            type="new-drink-button"
            className="button newdrink"
            onClick={onNewDrink}
        >
            New Drink
        </button>
        
        </div>

        

    );
};



export default BaristaForm;