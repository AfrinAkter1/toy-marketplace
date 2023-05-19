import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AllToys = () => {
    const [allToys, setallToys] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/allcars')
        .then(res => res.json())
        .then(data => setallToys(data))
    },[])
    // console.log(allToys)
    return (
        <div className="my-10">
            <h3 className="text-center font-bold my-5 text-3xl"><i>All Toys</i></h3>
            <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    <thead>
      <tr>
        <th></th>
        <th>Seller Name</th> 
        <th>Toy Name</th> 
        <th>Sub category</th> 
        <th>price</th> 
        <th>Quantity</th> 
        <th><Link>view details</Link></th>
      </tr>
    </thead> 
    <tbody>
      
        {
            allToys.map(allToy=><tr key={allToy._id}>
                <td><button className="btn btn-circle btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button></td>
                 <td>{allToy.sellerName}</td> 
                <td>{allToy.toyName}</td> 
                <td>{allToy.carType}</td> 
                 <td>{allToy.price}</td> 
               <td>{allToy.quantity}</td> 
              <td><Link className="btn border-0 bg-gradient-to-r  from-purple-500 to-pink-500">View Details</Link></td>
            </tr> )
        }
        
       
    </tbody> 
   
  </table>
</div>
        </div>
    );
};

export default AllToys;