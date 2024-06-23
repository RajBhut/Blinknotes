import React, { useState } from 'react';
import './App.css';
import Searchbar from './Componant/Searchbar';
import TableComponent from './Componant/Tablecoponent';

import Nav from './Componant/Nav';



function App() {

  
  const [tabledata,settabledata] = useState([]);


  const  fatchdata = async(searchvalue)=>
  {
     
    const test = searchvalue.toLowerCase();
    try{const response = await fetch(`https://blinknotess-f1199a4df86d.herokuapp.com/api/notes/k/${test}` ,
    {
      method: 'GET',
   // mode: 'no-cors'
    }

    )

      const data = await response.json();
      console.log(data);
      settabledata(data);
      console.log("fatched");
    }
    catch(error)
    {
      console.error('Error fetching data: ' , error.message);
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
 