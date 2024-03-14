import React from 'react';
import './App.css';
import Searchbar from './Componant/Searchbar';
import TableComponent from './Componant/Tablecoponent';

import Nav from './Componant/Nav';



function App() {







  return (
     
     <>
     <nav><Nav/></nav>
     <Searchbar/>
     <div className="container">
      <h1>My Table</h1>
      <TableComponent/>
      
    </div>
    
     

  </>
    

  );
}

export default App;
 