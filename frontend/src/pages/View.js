import React from 'react';
import axios from 'axios';

const View = () => {
const [titleDelete, setTitleDelete] = React.useState('');




  const[counter, setCounter] = React.useState('');
  var [listing, setListing] = React.useState([]);
 

  
  const handleTitle = (e) => {
    setTitleDelete(e.target.value);
  }



  const count = () =>{
    axios.get('/api/countListings').then((response) =>{
     setCounter(response.data);
    })
  }


  const all =  () => {
   axios.get('/api/viewListings')
 
  .then((res)=>{
console.log(res.data); 
setListing(res.data);
    })


   };


React.useEffect(() => {
 all();
count();


},[])

//empty json for some reason



const deletePost = () => {
const title = titleDelete;

axios.post('/api/deleteListing', title)
.then((res)=>{
  console.log(res);
  window.location.reload();

})
}
 

  return (
 <div>
      <br/>
  <h1> There are {counter} Posts Displayed!</h1>
    <div className="post">
      <br/>
    {listing.map((data,key)=>{

      return (
        <div key={key}>
          
         <h1>Title: {data.title}</h1>
          <br/>
          <label>email: {data.email}</label>
         <br/>
         <label>Price: {data.price}</label>
         <br/>
         <label>Description: {data.description}</label>
          <br/>
          <label></label>
          <br/>
          
        </div>
       
        
      )
     
    })}
    <label>Delete by Title<input value = {titleDelete} onChange ={handleTitle} type="text"/></label>
    <br/>
    <button onClick={deletePost} >Delete!</button>

    </div>
    </div>
  );


   
  
  
};

export default View;
/*

axios.get('/api/viewListings')
.then((res)=>{
console.log(res);
 };
*/