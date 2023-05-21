import { Rating } from "@smastrom/react-rating";
import { useContext } from "react";

import {  useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./Pages/provider/AuthProvider";
import UseTitle from "./UseTitle";



const ViewDetails = () => {
  UseTitle('view details')
  const {loading} = useContext(AuthContext)
  
    const toys = useLoaderData()
    const location = useLocation()
    
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/' ;
 
navigate(from, {replace: true})
   
    if(loading){
      return <progress className="progress w-56 "></progress>
    }
    return (
        <div className="my-16">
            <h2 className="my-8 text-4xl text-center text-pink-500 font-bold"><i>Details</i></h2>
          <div className="card  grid grid-cols-2 bg-base-100 m-10 border-8 border-pink-200 shadow-xl">
  <figure><img className="w-10/12 my-9  rounded" src={toys.toyPicture} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title"><span className="text-pink-500 font-bold">Toy Name:</span> {toys.toyName}</h2>
    <p><span className="text-pink-500 font-bold">Seller Name:</span> {toys.sellerName}</p>
    <p><span className="text-pink-500 font-bold">Seller Email:</span> {toys.sellerEmail}</p>
    <p><span className="text-pink-500 font-bold">Price:</span> ${toys.price}</p>
    <p><span className="text-pink-500 font-bold">Available Quantity:</span> {toys.quantity}</p>
    <p><span className="text-pink-500 font-bold">Description:</span> {toys.details}</p>
    <div className="card-actions justify-start">
      {toys.rating} <Rating
      style={{ maxWidth: 110 }}
      value={toys.rating}
      readOnly
    />
    </div>
  </div>
</div>
        </div>
    );
};

export default ViewDetails;