import React from 'react';

const Email = () => {



    const[email,setEmail] = React.useState('');
     const[ws, setWs] = React.useState('');
   
    const submit = (e) =>{
        //establish connection to servers
        if(email.length>0){
         // var ws = new WebSocket('ws://localhost:1235/ws');
         // setWs(ws);
        }
    
    }
    const logout = (e) => {
     //ws.close();
    }
    const handleEmail =(e)=>{
        setEmail(e.target.value);
      };
     
  return (
    <div>

      <label>Email </label>
      <input value = {email} onChange={handleEmail}/>
      <br/>
      <button onClick={submit}>Login</button>
  
      <br/>
      <button onClick={logout}>Logout</button>
     
    </div>
  );

}

export default Email;
