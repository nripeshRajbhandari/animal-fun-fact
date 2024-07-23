import React from 'react';
import { animals } from './amphibians';
import './App.css';


const displayFact = (e)=>{
  const animal = e.target.alt;
  const randomFactIndex = Math.floor(Math.random() * (animals[animal].facts.length));
  const funFact = animals[animal].facts[randomFactIndex];  
  const p = document.getElementById('fact');
  p.innerHTML = funFact;
}

const title = '';
const background = (<img className='background' alt='ocean' src='/images/ocean.jpg' />);

let images = [];
//let animalKeys = object.keys(animals);

for (let animal in animals){
  let i = 0;
  let newImage = (
    <img 
      key={animal} 
      className='animal' 
      alt={animal} 
      src ={animals[animal].image} 
      aria-label = {animal} 
      role ='button' 
      onClick = {displayFact}
    />
  );  
  images.push(newImage);
  //i++; 
}

const showBackground = true;



function App() {

  return (
    <div>
      <h1>{title === '' ? 'Click an animal for a fun fact' : title}</h1>
      {showBackground && background}
      <p id ='fact'></p>
      <div className='animals'>{images}</div> 
           
    </div>
  );
}

export default App;
