import React, { useState, useEffect, useContext } from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import getBackendURL from '../../helpers/getURL';

import './Navbar.css';

import { UserContext } from "../../context/UserContext"



function Navbar() {

  function logOut() {
    fetch(getBackendURL() + "/users/logout", { method: "POST", credentials: "include" })
    setUserContext({ loggedIn: false, email: '', userInfo: {} })
  }

  const [userContext, setUserContext] = useContext(UserContext)

  const [click, setClick] = useState(false);
  const [, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar_container'>
          <Link to='/' className='navbar_logo' onClick={closeMobileMenu}>
            makarnakod
            <div className='logo'>
              <i className="fas fa-pastafarianism" />
            </div>
          </Link>
          {/* TODO menu active should go down instead of up at the problem pages */}
          <ul className={click ? 'nav_menu active' : 'nav_menu'}>
            <li className='nav_item'>
              <Link to='/' className='nav_links' onClick={closeMobileMenu}>
                anasayfa
              </Link>
            </li>
            <li className='nav_item'>
              <Link
                to='/sorular'
                className='nav_links'
                onClick={closeMobileMenu}
              >
                sorular
              </Link>
            </li>
            <li className='nav_item'>
              <Link
                to='/diller'
                className='nav_links'
                onClick={closeMobileMenu}
              >
                diller
              </Link>
            </li>
            {userContext.loggedIn ? (
            <li>
              <Link
                to='/'
                className='nav_links_mobile'
                onClick={logOut}
              >
                çıkış yap
              </Link>
            </li>
            ) : (
            <><li>
                  <Link
                    to='/uye-ol'
                    className='nav_links_mobile'
                    onClick={closeMobileMenu}
                  >
                    üye ol
                  </Link>
                </li><li>
                    <Link
                      to='/giris-yap'
                      className='nav_links_mobile'
                      onClick={closeMobileMenu}
                    >
                      giriş yap
                    </Link>
                  </li></>
            )}
          </ul>
        </div>

        <div className='nav_btn'>
        {userContext.loggedIn ? (
              <Link to='/' ><Button onClick={logOut} buttonStyle='btn_outline'>çıkış yap</Button></Link>
            ) : (
              <>
              <Link to='/uye-ol'><Button buttonStyle='btn_outline'>üye ol</Button></Link>
              <Link to='/giris-yap'><Button buttonStyle='btn_primary'>giriş yap</Button></Link>
            </>
            )}
        </div>
        <div className='menu_icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
      </nav>
    </>
  );
}

export default Navbar;