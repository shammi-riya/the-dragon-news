import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Leftnav = () => {
  const [catogorys ,setCatogorys] = useState([])

  useEffect(()=>{
  fetch("http://localhost:5000/categories")
  .then(res=>res.json())
  .then(data=>setCatogorys(data))
  .catch(error=>console.log(error))
  },[])



    return (
        <div className='bg-light '>
           {
            catogorys.map(catogory=><p
                key={catogory.id} 
                className='border-top px-4 py-2'><Link  
                to={`/category/${catogory.id}`}
                className='text-black text-decoration-none fs-5 '>{catogory.name}</Link></p>)
           }
        </div>
    );
};

export default Leftnav;