import {  useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Category = () => {
    const [policeCar, setPoliceCar] = useState([])
    const [busToy , setBusToy] = useState([])
    const [privetCar, setPrivetCar] = useState([])
    useEffect(() =>{
        fetch(`http://localhost:5000/allcars?carType=Truck`)
        .then(res => res.json())
        .then(data => setPoliceCar(data))
    },[])
    useEffect(() =>{
        fetch(`http://localhost:5000/allcars?carType=bus`)
        .then(res => res.json())
        .then(data => setBusToy(data))
    },[])
    

    useEffect(() =>{
        fetch(`http://localhost:5000/allcars?carType=privetCar`)
        .then(res => res.json())
        .then(data => setPrivetCar(data))
    },[])
    
    

    

    return (
        <div className='my-10'>
            <h3 className="text-center font-bold text-3xl my-10"><i>Category</i></h3>
 

            <Tabs>
    <TabList>
      <Tab> Car</Tab>
      <Tab>Bus Toy</Tab>
      <Tab>Privet car</Tab>
    </TabList>

    <TabPanel>
        <div className='grid md:grid-cols-2 gap-4'>
        {
            policeCar.map(police => <div
            key={police._id}
            >
               <div className="card w-96 h-96 bg-base-100 shadow-xl">
  <figure><img src={police.toyPicture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{police.toyName}</h2>
    <p>Price: ${police.price}</p>
    <p><small>{police.rating} <Rating
      style={{ maxWidth: 110 }}
      value={police.rating}
      readOnly
    /></small> </p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
            </div>)
        }
     </div>
    </TabPanel>
    <TabPanel>
    <div className='grid md:grid-cols-2 gap-4'>
        {
            busToy.map(police => <div
            key={police._id}
            >
               <div className="card w-96 h-96 bg-base-100 shadow-xl">
  <figure><img src={police.toyPicture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{police.toyName}</h2>
    <p>Price: ${police.price}</p>
    <p><small>{police.rating} <Rating
      style={{ maxWidth: 110 }}
      value={police.rating}
      readOnly
    /></small> </p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
            </div>)
        }
     </div>
    </TabPanel>
    <TabPanel>
    <div className='grid md:grid-cols-2 gap-4'>
        {
            privetCar.map(police => <div
            key={police._id}
            >
               <div className="card w-96 h-96 bg-base-100 shadow-xl">
  <figure><img src={police.toyPicture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{police.toyName}</h2>
    <p>Price: ${police.price}</p>
    <p ><small>{police.rating} <Rating
      style={{ maxWidth: 110 }}
      value={police.rating}
      readOnly
    /></small> </p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
            </div>)
        }
     </div>
    </TabPanel>
  </Tabs>  



        </div>
    );
};

export default Category;