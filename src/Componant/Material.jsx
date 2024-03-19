import React, { useState } from 'react'
import Nav from './Nav'
import './material.css'
export default function Material() {

const [file , setfile] = useState(null);
const [formData,setFormData] = useState({filename:'' , notename:'' , subjectname:  '' , branchname:''});
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
  formDataWithFile.append('filename',formData.filename);
  formDataWithFile.append('notename',formData.notename);
  formDataWithFile.append('chaptername',formData.chaptername);
  formDataWithFile.append('subjectname',formData.subjectname);
  formDataWithFile.append('branchname',formData.branchname);
  fetch('http://localhost:8080/api/notes/upload/k' , {
    method:'POST',mode: 'no-cors',

    body : formDataWithFile
  }).then(response => {
    if(response.ok)
    {
      console.log("file uploded successfully");
    }else
    {
      console.errorr("failed to uplod file ")
    };
  }).catch(error => {console.error('Eroor: ' , error);});


};



  return (
  <><Nav />
  
  <form onSubmit={handleSubmit}><div className='frm'>
    <input type="file" onChange={handleFileChange} />
    <input type="text" name='filename' placeholder='Filename' onChange={handleInputChange}/>
    <input type="text" name='notename' placeholder='Notename' onChange={handleInputChange}/>
    <input type="text" name='subjectname' placeholder='subject' onChange={handleInputChange}/>
    <input type="text" name='chaptername' placeholder='chaptername' onChange={handleInputChange}/>
    <input type="text" name='branchname' placeholder='branch' onChange={handleInputChange}/>
<button type='submit'> uplod</button>
    
  </div></form>
</>
  )
}
