import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import {useParams} from 'react-router-dom'
function Edit() {
    const {id}=useParams();
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:4000/users/'+id)
        .then(res => setData(res.data))
        .catch(err=>console.log(err))
    },[])
    function handleSubmit(event){
     event.preventDefault()
     axios.put('http://localhost:4000/users/'+id,data)
     .then(res=>{
        alert("data update successfully!")
     })
    }
  return (
    <div className='d-flex mt-5 w-100 h-100 justify-content-center aling-items-center'>
        <div className='w-50 border bg-light p-5'>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='id'>Id:</label>
                <input type='text'  name='name' value={data.Id} className='form-control'
                onChange={e=>setData({...data,Id:e.target.value})}/>
            </div>
            <div>
                <label htmlFor='Productname'>Productname:</label>
                <input type='name' name='Productname' value={data.Productname} className='form-control'
                onChange={e=>setData({...data,Productname:e.target.value})}/>
            </div>
            <div>
                <label htmlFor='OrgPrice'>OrgPrice:</label>
                <input type='name' name='OrgPrice' value={data.OrgPrice} className='form-control'
                onChange={e=>setData({...data,OrgPrice:e.target.value})}/>
            </div>
            <div>
                <label htmlFor='DiscountPercentage'>DiscountPercentage:</label>
                <input type='name' name='DiscountPercentage' value={data.DiscountPercentage} className='form-control'
               onChange={e=>setData({...data,DiscountPercentage:e.target.value})}/>
            </div>
            <div>
                <label htmlFor='DscountPrice'>DscountPrice:</label>
                <input type='name' name='DscountPrice' value={data.DscountPrice} className='form-control'
                onChange={e=>setData({...data,DscountPrice:e.target.value})}/>
            </div>
            <div>
                <label htmlFor='Vendor'>Vendor:</label>
                <input type='name' name='Vendor' value={data.Vendor} className='form-control'
               onChange={e=>setData({...data,Vendor:e.target.value})}/>
            </div>
            <br/>
            <button className='btn btn-info'>Update</button>
         </form>
        </div>
    </div>
  )
}

export default Edit