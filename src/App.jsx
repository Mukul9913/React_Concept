import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FoodDeals from './components/FoodDeals';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <FoodDeals />
      </main>
    </div>
  );
}

export default App;
