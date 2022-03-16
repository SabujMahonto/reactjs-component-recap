import logo from './logo.svg';
import './App.css';

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
      {
       products.map(p => <Product name= {p.name} price={p.price} color={p.color} ></Product>)
       
       }


      {/* <Product name="laptop" price="3333" color="silver" ></Product>
      <Product name="laptop" price="3333" color="silver" ></Product>
      <Product name="laptop" price="3333" color="silver" ></Product>
      <Product name="laptop" price="3333" color="silver" ></Product>
      <Product name="laptop" price="3333" color="silver" ></Product>
      <Product name="laptop" price="3333" color="silver" ></Product> */}
    </div>
  );
}


const products = [
  {name:'laptop', price:23900, color:'silver'},
  {name:'laptop', price:23900, color:'silver'},
  {name:'laptop', price:23900, color:'silver'},
  {name:'laptop', price:23900, color:'silver'},
  {name:'laptop', price:23900, color:'silver'},
]

function Product(props){
  return(
    <div style={producStyle}>
      <h3>Name:{props.name}</h3>
      <h4>price:{props.price}</h4>
      <h6>color:{props.color}</h6>
    </div>
  )
}

export default App;
