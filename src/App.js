import React, { useState } from 'react';
import './App.css';
import Searchbar from './Componant/Searchbar';
import TableComponent from './Componant/Tablecoponent';

import Nav from './Componant/Nav';



function App() {

  
  const [tabledata,settabledata] = useState([]);


  const  fatchdata = async(searchvalue)=>
  {
     
    
    try{const response = await fetch(`http://localhost:8080/api/notes/k/${searchvalue}`);  

      const data = await response.json();
      console.log(data);
      settabledata(data);
      console.log("fatched");
    }
    catch(error)
    {
      console.error('Error fetching data: ' , error);
    }
    
 
    

  };





  return (
     
     <>
     <nav><Nav/></nav>
     <Searchbar onSearch={fatchdata}/>
     <div className="container">
     
      <TableComponent data= {tabledata}/>
      
    </div>
    
     

  </>
    

  );
}

export default App;
 