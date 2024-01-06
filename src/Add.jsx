import React from 'react'
import { useState } from 'react'
import axios from 'axios'
function Add() {
    const [inputData,setInputData]=useState({Id:'',Productname:'',OrgPrice:'',DiscountPercentage:'',DscountPrice:'',Vendor:''})
  
    

    function handleSubmit(event)
    {
      event.preventDefault()

      axios.post('http://localhost:4000/users',inputData)
      .then(res =>{
        alert("Data added successfully!");
    
      }).catch(err =>console.log(err));
    }

    return (
    <div className='d-flex mt-5 w-100 h-100 justify-content-center aling-items-center'>
        <div className='w-50 border bg-light p-5'>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='id'>Id:</label>
                <input type='text' name='name' className='form-control'
                onChange={e=>setInputData({...inputData,Id: e.target.value})}/>
            </div>
            <div>
                <label htmlFor='Productname'>Productname:</label>
                <input type='name' name='Productname' className='form-control'
                onChange={e=>setInputData({...inputData,Productname: e.target.value})}/>
            </div>
            <div>
                <label htmlFor='OrgPrice'>OrgPrice:</label>
                <input type='name' name='OrgPrice' className='form-control'
                onChange={e=>setInputData({...inputData,OrgPrice: e.target.value})}/>
            </div>
            <div>
                <label htmlFor='DiscountPercentage'>DiscountPercentage:</label>
                <input type='name' name='DiscountPercentage' className='form-control'
                onChange={e=>setInputData({...inputData,DiscountPercentage: e.target.value})}/>
            </div>
            <div>
                <label htmlFor='DscountPrice'>DscountPrice:</label>
                <input type='name' name='DscountPrice' className='form-control'
                onChange={e=>setInputData({...inputData,DscountPrice: e.target.value})}/>
            </div>
            <div>
                <label htmlFor='Vendor'>Vendor:</label>
                <input type='name' name='Vendor' className='form-control'
                onChange={e=>setInputData({...inputData,Vendor: e.target.value})}/>
            </div>
            <br/>
            <button className='btn btn-info'>Submit</button>
         </form>
        </div>
    </div>
  )
}

export default Add