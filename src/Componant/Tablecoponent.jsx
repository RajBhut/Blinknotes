
import { TableTbody } from '@mantine/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Table } from 'react-bootstrap';
import './table.css';







const TableComponent = ({data}) => {

  async function viewpdf (noteid) 
  {
    try {
      const response = await axios.get(`http://localhost:8080/api/notes/${noteid}/pdf`,{responseType : 'blob'});
      const pdfblob = new Blob([response.data],{type:'application/pdf'});
      const url = URL.createObjectURL(pdfblob);
      window.open(url,'_blank');
    } catch (error) {
      console.error('Error opening PDF:',error);
    }
  }
  
  return (
    <Table striped bordered hover className='tb' >
<tbody>


<tr>
  <td>no. </td>
  <td>branchname</td>
  <td>subjectname</td>
  <td>chaptername</td>
  <td>notesname</td>
  <td>view</td>
</tr>
{
  data.map((item , i)=>
  <tr key={i}>
  <td>{i+1} </td>
  <td>{item.branchname}</td>
  <td>{item.subjectname}</td>
  <td>{item.chaptername}</td>
  <td>{item.notesname}</td>
  <td>{ <button onClick={()=>viewpdf(item.notesid)}>view</button>}</td>
</tr>
  )
}
</tbody>
    </Table>
  );

}
export default TableComponent;
