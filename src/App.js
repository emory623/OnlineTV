import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header/Header' 
import Promo from './Components/Promo/Promo'
import './Styles/App.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <Promo/>
    </div>
  );
}

export default App;
