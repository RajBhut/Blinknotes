
import { TableTbody } from '@mantine/core';
import React, { useEffect, useState } from 'react';

import { Table } from 'react-bootstrap';





const sampleData = [
  { id: 1, name: 'Item 1', description: 'This is the first item' },
  { id: 2, name: 'Item 2', description: 'This is the second item' },
  { id: 3, name: 'Item 3', description: 'This is the third item' },
];

const TableComponent = () => {
  const [data , setdata] = useState([]);


  function clicked(e)
  {
    let id = document.getElementById("in");
      var idnum = id.value;
    
      

      async  function callAPI()
    {
      const response = await fetch (`http://http://localhost:8080/api/notes/k/${idnum}`);
      const data = await response.json();
      setdata(data);
    }
 
    callAPI();

  }
  useEffect(()=>
  {





    
  },[])




  return (
    <Table striped variant='dark'>
<tbody>


<tr>
  <td>Id </td>
  <td>Name</td>
  <td>Description</td>
</tr>
{
  sampleData.map((item , i)=>
  <tr key={i}>
  <td>{item.id} </td>
  <td>{item.name}</td>
  <td>{item.description}</td>
</tr>
  )
}
</tbody>
    </Table>
  );

}
export default TableComponent;
