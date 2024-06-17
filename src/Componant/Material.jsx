import React, { useState } from 'react'
import Nav from './Nav'
import './material.css'
import axios from 'axios';
export default function Material() {

const [file , setfile] = useState(null);
const [formData,setFormData] = useState({filename:'' , notename:'' , subjectname:  '' , branchname:'' , chaptername:''});
const handleFileChange = (e) => {
  setfile(e.target.files[0]);
};
const handleInputChange = (e) =>
{
  const {name , value} = e.target;
  setFormData({...formData,[name]:value});
};
const handleSubmit = (e) => {
  e.preventDefault();
  const formDataWithFile = new FormData();
  formDataWithFile.append('file',file);
  formDataWithFile.append('filename',formData.filename.toLowerCase);
  formDataWithFile.append('notename',formData.notename.toLowerCase);
  formDataWithFile.append('chaptername',formData.chaptername.toLowerCase);
  formDataWithFile.append('subjectname',formData.subjectname.toLowerCase);
  formDataWithFile.append('branchname',formData.branchname.toLowerCase);
 
  fetch('https://blinknotess-f1199a4df86d.herokuapp.com/api/notes/upload/k' , {
    method:'POST',mode: 'no-cors',

    body : formDataWithFile 
  }
)
.then(response => {
  setFormData({filename:'' , notename:'' , subjectname:  '' , branchname:'' , chaptername:''});
  alert('file uploaded successfully');
    if(response.ok)
    {
      console.log("file uploded successfully");
    }else
    {
      console.errorr("failed to uplod file ")
      alert('failed to upload file');
    };
  }).catch(error => {});


};



  return (
  <><Nav />
 <div className='cont'>
  <form onSubmit={handleSubmit}>
    <div className='frm'>
    <div className='btn'>
    <input  type="file" onChange={handleFileChange} />
   </div>
    <input type="text" name='filename' placeholder='Filename' onChange={handleInputChange}/>
    <input type="text" name='notename' placeholder='Notename' onChange={handleInputChange}/>
    <input type="text" name='subjectname' placeholder='Subject' onChange={handleInputChange}/>
    <input type="text" name='chaptername' placeholder='Chaptername' onChange={handleInputChange}/>
    <input type="text" name='branchname' placeholder='Branch' onChange={handleInputChange}/>
<button className='sub' type='submit'> Upload</button>
    
  </div></form></div>
</>
  )
}
