import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./provider/AuthProvider";
import { Link } from "react-router-dom";


const MyToys = () => {
    const {user} = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/allcars/${user.email}`)
        .then(res => res.json())
        .then(data => setMyToys(data))
    },[])
    return (
        <div>
            <div className="my-10">
            <h3 className="text-center font-bold my-5 text-3xl"><i>My <span className="text-pink-500">Toys</span></i></h3>

  
            <div className="text-center my-7">
  <div className="btn-group">
    <input type="text" placeholder="Search…" className="input input-bordered " />
    <button className="btn btn-square  border-0 bg-gradient-to-r  from-purple-500 to-pink-500">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6  w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>



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
            myToys.map(allToy=><tr key={allToy._id}>
                <td><button className="btn btn-circle btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button></td>
                 <td>{allToy.sellerName}</td> 
                <td>{allToy.toyName}</td> 
                <td>{allToy.carType}</td> 
                 <td>{allToy.price}</td> 
               <td>{allToy.quantity}</td> 
              <td><Link className="btn border-0 bg-gradient-to-r  from-purple-500 to-pink-500">Update</Link></td>
            </tr> )
        }
        
       
    </tbody> 
   
  </table>
</div>
        </div>
        </div>
    );
};

export default MyToys;