import './navbar.css';
import Cartwidget from '../Cartwidget/Cartwidget';
import { Button } from 'antd';

export const NavBar = () => {
  return (
    <header>
      <div className="container">
        <div className="header-subheader">
          <div className="subheader subheader-left">
            <a href="https://www.facebook.com/">
              <img className="icon facebook" src="./src/img/iconos/Facebook.png" alt="logo facebook" />
            </a>
            <a href="https://www.instagram.com/">
              <img className="icon instagram" src="./src/img/iconos/Instagram.png" alt="logo instagram" />
            </a>
          </div>

          <div className="subheader subheader-logo">
            <a href="../../../index.html"><img src="./src/img/logo/Alphafit-Isologo.webp" alt="logo" /></a>
          </div>

          <div className='subheader subheader-right'>
            <a href="">
              <Button>Regístrate</Button>
              <span>
                <Cartwidget />
              </span>
            </a>
          </div>
        </div>

        <nav className='navBar'>
          <ul>
            <li><a href="#">HOMBRES »</a></li>
            <li><a href="#">MUJERES »</a></li>
            <li><a href="#">ACCESORIOS DEPORTIVOS »</a></li>
            <li><a href="#">MÁS INFORMACIÓN »</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
