import React, { useEffect, useState } from 'react'

function Form() {

    const [name , Setname] =useState('')
    const[Email , SetEmail] = useState('')

function adduser(e)
{
  e.preventDefault()
console.log("Email : "+ Email , "Name : " + name)

}

  return (
    <>
   <form action="">
<input id='name' type="text" value={name} onChange={(e) => Setname(e.target.value)} />
<input id = 'email' type="text" value={Email} onChange={(e)=> SetEmail(e.target.value)}  />
<button  onClick={adduser }>Submit</button>
</form>

    
    </>
  )
}

export default Form