import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Garage from "./components/Garage"
import Header from './components/Header';
import ProductPage from './components/Product';
import Counter from './components/Count';
import Counting from './components/CountClass';
import Scooter from './components/Scooter';
import Scooty from './components/ScooterClass';
import List from './components/List';
import Timer from './components/Timer';
import MyForm from './components/MyForms';



const product = {
  image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  name: 'Hoodioe',
  description: 'This is a description of the product.',
  price: 29.99,
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <Garage/> */}
    <Header/>
    <ProductPage product={product}/>
    <Counter/>
    <Counting/>
    <Scooter/>
    <Scooty/>
    <List/>
    <Timer/>
    <MyForm/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
