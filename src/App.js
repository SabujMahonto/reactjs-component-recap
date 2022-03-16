
import { Component, useEffect, useState } from 'react';
import './App.css';

// product card style 
const producStyle = {
 backgroundColor:'orange',
 margin:'12px',
 padding:'15px',
 borderRadius:'20px',
 border:'2px solid yellow',
 textAlign:'center'

}




function App() {
  return (
    <div className="App">
      <ExternalUser></ExternalUser>
      {/* counter  */}
      {/* <Counter></Counter> */}
      

          {/* Dynamically product show in the UI using  map  */}
     {/* {products.map(p => <Product name= {p.name} price={p.price} color={p.color} ></Product>)} */}
      <section className='App'>
      </section>

        
      {/* <Product name="laptop" price="3333" color="silver" ></Product>
      <Product name="laptop" price="3333" color="silver" ></Product>
      <Product name="laptop" price="3333" color="silver" ></Product>
      <Product name="laptop" price="3333" color="silver" ></Product>
      <Product name="laptop" price="3333" color="silver" ></Product>
      <Product name="laptop" price="3333" color="silver" ></Product> */}
    </div>
  );
}

// ExternalUser 
function ExternalUser(){
  const [users, setUsers] = useState([]);

  useEffect( ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>console.log(data))

  },[])

  return(
  <div>
    <h1>External User </h1>
  </div>
  )
}



// counter component 
function Counter(){
const [count, setCount] = useState(55);

  const increaseCount = () => setCount(count + 1)
 const decreaseCount = () => setCount(count - 1)


  return (
    <div className='counter'>
      <h1>Count:{count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>DeIncrease</button>
    </div>
  )
}


// product list 
const products = [
  {name:'laptop', price:5000, color:'silver'},
  {name:'Iphone', price:23900, color:'gloden'},
  {name:'Sunglass', price:200, color:'blue'},
  {name:'Headphone', price:400, color:'pinky'},
  {name:'Bag-Pack', price:2000, color:'Black'},
  {name:'watch', price: 3999, color: 'gold'}
]
// product Component 
function Product(props){
  return(
    <div style={producStyle}>
      <h1>Name:{props.name}</h1>
      <h3>price:{props.price}</h3>
      <h2>color: <span style={{color:'white', }}>{props.color}</span></h2>
    </div>
  )
}

export default App;
