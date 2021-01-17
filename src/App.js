import logo from './logo.svg';
import './App.scss';
import {useReducer} from 'react'
import data from './data'
const initialState ={
  cart:data
}
const reducer  = (state ,action ) =>{
  if(action.type ==='increment'){
    let cartItem= state.cart.map(item=>{
       if(item.id===action.payload){
         return {...item, num: item.num+1}
       }
 return item
      
       
    })
  return {...state, cart:cartItem}
  }
if(action.type==='decrement'){
let cartItem = state.cart.map(item=>{
  if(item.id === action.payload){
    return {...item, num: item.num-1}
  }
  return item
})
return {...state, cart:cartItem}
}
  }

 
function App() {
  const [state, dispatch] = useReducer(reducer,initialState)
  
const increment =(id)=>{
  dispatch({type:'increment',payload:id})

}
const decrement =(id) =>{
  dispatch({type:'decrement', payload:id})
}

  return (
    <>
     <div className="total">
     <h1>total:0</h1></div>
  <div className="content">
  {state.cart.map((item)=>{
    const{num,amount,id}=item
    return <article key={id} className='article'>
    <button onClick={()=>{
      increment(id)
    }} className="btn">+</button>
    <p>{num}</p>
    <button onClick={()=>{
      decrement(id)
    }} className="btn">-</button>
    </article>
    
  })}
<div className="total"><h1>Sum:0</h1></div>
  </div>
    </>
  );
}

export default App;
