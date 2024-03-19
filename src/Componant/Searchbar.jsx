import React, { useState } from "react";
import './Searchbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Searchbar({onSearch})
{

   const [searchvalue , Setsearchvalue] = useState('');

   function searched()
   {
    
    onSearch(searchvalue);
    
   }




    return(
        
        <>
        <div id="container">
            <input placeholder="Notes/Subject/Branch Name" id="inp" type="text" onChange={(e) => Setsearchvalue(e.target.value)} />
            <div id="logo">

                <svg width="30px" height="30px" viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M460 459.3m-245.2 0a245.2 245.2 0 1 0 490.4 0 245.2 245.2 0 1 0-490.4 0Z" fill="#E1F0FF" /><path d="M460 719c-69.4 0-134.6-27-183.6-76.1s-76.1-114.3-76.1-183.6c0-69.4 27-134.6 76.1-183.6s114.3-76.1 183.6-76.1c69.4 0 134.6 27 183.6 76.1s76.1 114.3 76.1 183.6c0 69.4-27 134.6-76.1 183.6S529.4 719 460 719z m0-490.4c-61.6 0-119.6 24-163.1 67.6-43.6 43.6-67.6 101.5-67.6 163.1s24 119.6 67.6 163.1C340.4 666 398.4 690 460 690s119.6-24 163.1-67.6c43.6-43.6 67.6-101.5 67.6-163.1s-24-119.6-67.6-163.1c-43.5-43.6-101.5-67.6-163.1-67.6z" fill="#446EB1" /><path d="M640.6 630.6c8.7-8.7 22.8-8.7 31.5 0L802 760.5c8.6 8.9 8.3 23-0.5 31.5-8.6 8.3-22.3 8.3-31 0L640.6 662.1c-8.4-8.6-8.1-22.6 0-31.5z" fill="#446EB1" /></svg>
            </div>
        <button className="btn btn-primary btn-sm" onClick={searched}>Search</button> 
        <input type="file" /></div></>


    )
}
export default Searchbar