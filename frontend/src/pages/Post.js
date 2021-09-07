import React from 'react';
import axios from 'axios';



const Post = () => {


    //const[email,setEmail] = React.useState('');
    const[description,setDescription] =React.useState('');
    const[title,setTitle] = React.useState('');
    const[price,setPrice] = React.useState('');
    const[email,setEmail] = React.useState('');
  
    const handleEmail = (e)=>{
      setEmail(e.target.value);
    }

  const handlePrice = (e)=>{
    setPrice(e.target.value);
  }
    const handleTitle = (e) =>{
    
    setTitle(e.target.value);
    }
   
      const handleDescription =(e)=>{
        setDescription(e.target.value);
      };
    const data= {
      email:email,
      title: title,
      price: price,
      description: description,
      
        
      };
    const handlePost = () => {
      const json = JSON.stringify(data)
        axios.post('/api/postListing', json)
       // .then(document.write(json));
    .then((response) =>{
    alert(response.data);

    })
    }

  return (
    <div>
      <h1>Post</h1>
      <form>
      <label>Email </label>
      <input value = {email} onChange={handleEmail}/>
      <br/>
      <label>Title </label>
      <input value = {title} onChange={handleTitle}/>
      <br/>
      <label>Price </label>
      <input value = {price} onChange={handlePrice}/>
      <br/>
      <label>Description </label>
      <input value = {description} onChange={handleDescription}/>
      <br/>
     
      <button onClick={handlePost}>Submit Listing</button>
      <br/>
      </form>
    </div>
  );
};

export default Post;
