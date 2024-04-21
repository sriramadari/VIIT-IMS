import React from 'react';
import './App.css';
import labs from './assets/labs.jpeg';
import systems from './assets/systems.jpeg';
import chairs from './assets/chairs.jpeg';



import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        VIIT INFRASTRUCTURE MANAGEMENT SYSTEM
      </header>
      <div className="container">
        <div className="info">
        <Carousel showThumbs={false} autoPlay={true} showStatus={false} interval={1000} infiniteLoop={true}>
          <div>
            <img src={labs} alt="labs" />
          </div>
          <div>
            <img src={systems} alt="systems" />
          </div>
          <div>
            <img src={chairs} alt="chairs" />
          </div>
        </Carousel>
        </div>
        <div className="login">
          <h2>Login</h2>
          <form>
            <input type="text" placeholder="UserID" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;