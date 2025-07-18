import React,{useState,useEffect} from 'react'
import axios from 'axios'

const About = () => {
  const [areas,setAreas] = useState([]);
  const fetchareas = async()=>{
    const res = await axios.get('http://localhost:5600/api/areas');
    setAreas(res.data);
  }
  useEffect(()=>{
    fetchareas();
  },[]);
  return <>
    <div className='container-fluid mt-5'>
      <h3>Area List</h3>
      <div className='row'>
        {areas.map(x=>(
          <div className='col-md-3'>
           <div className='card mb-3' style={{width:'18rem'}}>
            <img src={`http://localhost:5600/uploads/${x.image}`} className='card-img-top' alt="img"/>
            <div className='card-body'>
                 <h4 className='card-title'>{x.name}</h4>
                 <p className='card-text'>city:{x.city}</p>
            </div>
           </div>
          </div>
        ))}
      </div>
    </div>
  </>
}

export default About