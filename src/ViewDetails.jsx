import { Rating } from "@smastrom/react-rating";
import { useLoaderData } from "react-router-dom";


const ViewDetails = () => {
    const toys = useLoaderData()
    console.log(toys)
    return (
        <div className="my-16">
            <h2 className="my-8 text-4xl text-center text-pink-500 font-bold"><i>Details</i></h2>
          <div className="card card-side bg-base-100 shadow-xl">
  <figure><img className="w-96 p-4" src={toys.toyPicture} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title"><span className="text-pink-500 font-bold">Toy Name:</span> {toys.toyName}</h2>
    <p><span className="text-pink-500 font-bold">Seller Name:</span> {toys.sellerName}</p>
    <p><span className="text-pink-500 font-bold">Seller Email:</span> {toys.email}</p>
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