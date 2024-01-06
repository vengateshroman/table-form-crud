import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
function App() {
  const [columns,setcolumns]=useState([])
  const [records,setrecords]=useState([])
   useEffect(()=>{
    axios.get("http://localhost:4000/users")
    .then(res =>{
      setcolumns(Object.keys(res.data[0]))
      setrecords(res.data)

    })
   },[])

  return (
    <div className='container mt-5'>
      <div className='text-end'><Link to='/create' className='btn btn-primary'>Add+</Link></div>
      <table className='table'>
        <thead>
          <tr>
          {
            columns.map((c,i)=>(
              <th key={i}>{c}</th>
            ))
          }
          <th>Action</th>
          </tr>

        </thead>
        <tbody>
          {
            records.map((d,i)=>(
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.Productname}</td>
                <td>{d.OrgPrice}</td>
                <td>{d.DiscountPercentage}</td>
                <td>{d.DscountPrice}</td>
                <td>{d.Vendor}</td>
                <td>
                  <Link to={`/update/${d.id}`} className='btn btn-sm btn-success'>Update</Link>
                  <button onClick={e=> handleSubmit(d.id)} className='btn btn-sm ms-1 btn-danger'>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>

      </table>
    </div>
  );
  function handleSubmit(id){
   const conf= window.confirm("Do you want to delete");
   if(conf){
    axios.delete('http://localhost:4000/users/'+id)
    .then(res=>{
      alert("record has deleted");

    }).catch(err => console.log(err))
   }
  }
}

export default App