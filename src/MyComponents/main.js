import './main.css';
import {Link} from 'react-router-dom';
import cart from './assets/icons/shop.svg';
import tacos from './assets/images/maxican-tacos.png';
import pizza from './assets/images/pizza.png';
import burger from './assets/images/burger.png';
import nachos from './assets/images/nachos.png';
import noodles from './assets/images/noodles.png';

export default function Main() {
    return (
        
    <div className="App">
      <div className="mobile-view">
      <div>
        <div className="hamburger-icon in-oneline">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
         </div>  
      </div>
      
      <div><p className="in-oneline brand">Lorem</p></div>
      

      <div className="cart-icon in-oneline">
        <img src={cart} alt="shopping cart icon" />
      </div>
    </div>

    <div className="container">
      <nav className="nav-container">
        <ul className="navbar-nav">
          <h2 className="nav-heading">Lorem<br />Ipsum</h2>
          <li>
            <Link to="#" className="nav-link active-link"> About</Link>
          </li>
          <li>
            <Link to="#" className="nav-link"> Services</Link>
          </li>
          <li>
            <Link to="#" className="nav-link"> Cuisine</Link>
          </li>
          <li>
            <Link to="#" className="nav-link"> Gallery</Link>
          </li>
          <li>
            <Link to="#" className="nav-link"> Contact</Link>
          </li>
          <li>
            <Link to="#" className="nav-link"> Book</Link>
          </li>
        </ul>
        <button className="cart">Cart</button>
      </nav>

      <div className="main-content">
        <div className="text-container">
          <div className="heading-container">
            <h1 className="main-heading">
            What are you<br />
            having for Lunch?
            </h1>
          </div>
        

          <div className="description-container">
            <p className="description">
            Lorem ipsum dolor sit amet,<br />
            consectetur adipiscing elit,<br />
            sed do euismod tempor<br />
            incididunt ut labore et.
            <div className="line-container">
              <span className="line"></span>
            </div>
            </p>
          </div>
        </div>
        

        <div className="card-container">
          
          <div className="card-part1">
              <div className="card">
                <div className="image-container">
                  <img src={tacos} alt="" />
                </div>
                <p>Maxican Taco</p>  
              </div>
  
            <div className="card">
              <div className="image-container">
                <img src={pizza} alt="pizza" />
              </div>
              <p>Farmhouse Pizza</p>
            </div>

            <div className="card last">
              <div className="image-container">
                <img src={burger} alt="burger" />
              </div>
                <p>Chicken Burger</p>
            </div>
          </div>

        
          
          <div className="card-part2">
            
            <div className="card">
              <div className="image-container">
                <img src={nachos} alt="nachos" />
              </div>
              <p>Loaded Nachos</p>
            </div>

            <div className="card ">
              <div className="image-container">
                <img src={noodles} alt="noodles" />
              </div>
              <p>Haka Noodles</p>
            </div>

          </div>
         
        </div>
      </div>
    </div>

    <div className="des-center">
      <p className="description des-responsive">
        Lorem ipsum dolor sit amet,<br/>
        consectetur adipiscing elit,<br/>
        sed do euismod tempor<br/>
        incididunt ut labore et.
        <span className="line"></span>
      </p>
    </div>
    </div>
    )
}