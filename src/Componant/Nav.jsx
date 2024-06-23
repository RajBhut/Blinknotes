import React, { useEffect, useState  } from 'react';

import "./Nav.css";
import { Link } from 'react-router-dom';


function Nav() {

  const [isMaterialDropdownOpen, setIsMaterialDropdownOpen] = useState(false);
  const [isslidemanuematerialopen , setsidemanuematerealopen] = useState(false);

  const handleMaterialDropdownClickforsidebar = (e) => {
    e.preventDefault();
    setsidemanuematerealopen(!isslidemanuematerialopen); // Update state first
  
    const sidematerial = document.getElementById('sidebar');
    if (sidematerial) { // Check if element exists before accessing style
      sidematerial.style.width = 70;
    }
  };
  const handleMaterialDropdownClick = (e) => {
    e.preventDefault();
    setIsMaterialDropdownOpen(!isMaterialDropdownOpen);
  };

  useEffect(() => {
    const ulEl = document.getElementsByClassName("material-dropdown")[0];
    if (isMaterialDropdownOpen && ulEl) {

      ulEl.style.opacity = 0;

      {
        let duration = 400;
        let currOpacity = 0;

        let interval = setInterval(() => {
          if (currOpacity >= 1) {
            clearInterval(interval);
            return;
          }

          ulEl.style.opacity = currOpacity;
          currOpacity += 0.1;
        }, duration / 10);


      }

    }

    if (isMaterialDropdownOpen) {
      const materialLinkItem = document.getElementById("materialLinkItem");

      if (!materialLinkItem) {
        return;
      }

      const pos = materialLinkItem.getBoundingClientRect()

      document.documentElement.style.setProperty('--dropdown-x', pos.left + 'px');
      document.documentElement.style.setProperty('--dropdown-y', pos.bottom + 'px');

    

    }
  }, [isMaterialDropdownOpen])

  useEffect(() => {
    let prevY = window.scrollY;
    
    const onScroll = (event) => {
      const currY = window.scrollY;

      const diff = prevY - currY;

      const lastVarY = parseFloat(document.documentElement.style.getPropertyValue("--dropdown-y"));
      document.documentElement.style.setProperty('--dropdown-y', (lastVarY + diff) + 'px');

    

      prevY = currY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function showSidebar(e) {
    e.preventDefault();
    const Sidebar = document.querySelector('.Sidebar');
    Sidebar.style.display = 'flex';
  }

  function hidesidebar(e) {
    e.preventDefault();
    const Sidebar = document.querySelector('.Sidebar');
    Sidebar.style.display = 'none';
  }


  return (
    <>
      <nav className="myNav">
        <ul className="Sidebar">
          <li onClick={hidesidebar}>
            <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M256-213.847 213.847-256l224-224-224-224L256-746.153l224 224 224-224L746.153-704l-224 224 224 224L704-213.847l-224-224-224 224Z" /></svg>
            </a>
       </li>
          <li><Link to={"/"}>Home</Link></li>
          <li onClick={handleMaterialDropdownClickforsidebar}><a href="">Material</a>

          {isslidemanuematerialopen&& (<>
            <ul className="material-dropdown" id='sidebar'>
                <li> <Link to={"/material"}>option 1</Link></li>
                <li><a href="#">Option 2</a></li>
              </ul>
              </>
            )}
          
          </li>
           {isslidemanuematerialopen&&(
              <><ul> <ul className="material-dropdown" id='sidebar'>
              <li> <Link to={"/material"}>option 1</Link></li>
              <li><a href="#">Option 2</a></li>
            </ul>
            <ul className='Sidebar'>

            <li><a href="">About</a></li> </ul>
            </ul>
              </>
            )}
          {!isslidemanuematerialopen&&(
              <> <li><a href="">About</a></li> 
              </>
            )}
           
        </ul>
        <ul>
          <li><a href="">Raj</a></li>
        
          <li className="hideOnMobile"><Link to={"/"}>Home</Link></li>
          <li
            onClick={handleMaterialDropdownClick}
            className="hideOnMobile"
            id="materialLinkItem"
          >
            <a href="">Material</a>
            {isMaterialDropdownOpen && (
              <ul className="material-dropdown">
                <li>
                <Link to={"/material"}>option 1</Link>
                </li>
                <li><a >Option 2</a></li>
              </ul>
            )}
          </li>
          <li className="hideOnMobile"><Link to={"/about"}>About</Link></li>
          <li className="menu-button" onClick={showSidebar}>
            <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M140.001-254.616v-59.999h679.998v59.999H140.001Zm0-195.385v-59.998h679.998v59.998H140.001Zm0-195.384v-59.999h679.998v59.999H140.001Z" /></svg>
            </a>
          </li>
           
        </ul>
      </nav>
    </>
  );
}

export default Nav;
