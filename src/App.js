import React from 'react';
import Product from './components/Product';
import './App.css';

function App() {
  const fruits = [
    {
      name: 'Mango',
      image: 'https://m.media-amazon.com/images/I/41EvGpCFECL.jpg',
    },
    {
      name: 'Apple',
      image: 'https://minnetonkaorchards.com/wp-content/uploads/2021/04/Bright-Red-Apple.jpg.webp',
    },
    {
      name: 'Banana',
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg',
    },
    {
      name: 'Orange',
      image: 'https://media.istockphoto.com/photos/orange-picture-id185284489?k=20&m=185284489&s=612x612&w=0&h=LLY2os0YTG2uAzpBKpQZOAC4DGiXBt1jJrltErTJTKI=',
    }
  ]
  return (
    <div className='products-list'>
      {fruits.map(item => {
        return (
          <Product item={item}/>
        );
      })}
    </div>
  );
}

export default App;