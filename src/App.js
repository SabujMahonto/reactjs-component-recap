
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
  {name:'laptop', price:5000, color:'silver'},
  {name:'Iphone', price:23900, color:'gloden'},
  {name:'Sunglass', price:200, color:'blue'},
  {name:'Headphone', price:400, color:'pinky'},
  {name:'Bag-Pack', price:2000, color:'Black'},
  {name:'watch', price: 3999, color: 'gold'}
]

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
