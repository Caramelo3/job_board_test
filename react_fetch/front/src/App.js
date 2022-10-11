import React,{Fragment} from 'react'
import './App.css';
import Propert from './components/Propert';
import Head from './components/Header';
// const App = () => {
//     const [products, setAdvice] = useState("");

//     useEffect(() => {
//         const url = ("products.json");

//         const fetchData = async () => {
//             try {
//                 const response = await fetch(url);
//                 const json = await response.json();
//                 console.log(json.productis);
//                 // setAdvice(json.products);
//             } catch (error) {
//                 console.log("error", error);
//             }
//         };

//         fetchData();
//     }, []);



// import Content from './components/ReadMore'
  
// import Products from './products.json';

// import "materialize-css/dist/css/materialize.min.css";
// function App() {
//   return (
//     <div class="App">
//   {
//     Products.map( products => {
//       return (

//         <div class="product">
//                     <div className="z-depth-4">
//                     <div className="card-stacked">
//                       <p className="title"><h2 class="center-align">jobtitle</h2></p>
//                       <div className="card-content">
//                       <p><Content /></p>
//           <p class="price">
//             <span>{ products.price }</span>
//             <span>€/month</span>
//                    </p>
//                    <p className="place">
//             <span>{ products.place }</span>
//                    </p>
//                    <p className="worktime">
//             <span>{ products.worktime }</span>
//             <span>h/month</span>
//                    </p>
//         </div>
//         </div>
//         </div>


// </div>


//     )
//     })
//   }


 

// </div>

//   );
  
// }



const App = () => {
  return(
    
    <Fragment>

    <Propert/>
    
    </Fragment>
  )
}



export default App;
