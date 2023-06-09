import {  useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({ duration: 1200});



const Category = () => {
    const [policeCar, setPoliceCar] = useState([])
    const [busToy , setBusToy] = useState([])
    const [privetCar, setPrivetCar] = useState([])


    // Truck data fetch
    useEffect(() =>{
        fetch(`https://toy-website-server.vercel.app/allcars?carType=Truck`)
        .then(res => res.json())
        .then(data => setPoliceCar(data))
    },[])

    // bus data fetch
    useEffect(() =>{
        fetch(`https://toy-website-server.vercel.app/allcars?carType=bus`)
        .then(res => res.json())
        .then(data => setBusToy(data))
    },[])
    
// Privet car fetch
    useEffect(() =>{
        fetch(`https://toy-website-server.vercel.app/allcars?carType=privetCar`)
        .then(res => res.json())
        .then(data => setPrivetCar(data))
    },[])
    
    

    

    return (
        <div  className='my-14 md:px-36'>
            <h3 className="text-center font-bold text-3xl my-10"><i> <span className="text-pink-500">All </span>Category</i></h3>
 

            <Tabs>
    <TabList  className='text-pink-500 text-xl font-bold mb-10 '>
      <Tab> <i>Truck Car</i></Tab>
      <Tab><i>Bus Toy</i></Tab>
      <Tab><i>Privet car</i></Tab>
    </TabList>

    <TabPanel>
        <div data-aos="zoom-in" className='grid md:grid-cols-2 gap-4'>
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
      <Link to={`/viewdetails/${police._id}`} className="btn border-0 bg-gradient-to-r  from-purple-500 to-pink-500">View Details</Link>
     
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
      <Link to={`/viewdetails/${police._id}`} className="btn border-0 bg-gradient-to-r  from-purple-500 to-pink-500">View Details</Link>
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
      <Link to={`/viewdetails/${police._id}`} className="btn border-0 bg-gradient-to-r  from-purple-500 to-pink-500">View Details</Link>
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