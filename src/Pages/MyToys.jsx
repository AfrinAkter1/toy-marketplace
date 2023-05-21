import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";



const MyToys = () => {
    const {user, loading} = useContext(AuthContext)
   
    const [myToys, setMyToys] = useState([])
    const [ascending, setEsending] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/allcars/${user?.email}`)
        .then(res => res.json())
        .then(data => setMyToys(data))
    },[user])
    // console.log(myToys)
    if(loading){
      return 'loading.....'
    }
       const handleDelete = (_id) =>{
      console.log(_id)
     
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        })
           
        .then((result) => {
          if (result.isConfirmed) {

     fetch(`http://localhost:5000/allcars/${_id}`,{
          method: 'DELETE'
        })
        .then(res => res.json())
         .then(data => {
          console.log(data)
          if(data.deletedCount > 0){
           
            Swal.fire(
              'Deleted!',
              'Your Toy has been deleted.',
              'success'
            )
            const remaining = myToys.filter(cof => cof._id !== _id)
            setMyToys(remaining)
          }
         })
         }
        })
}
     
      // const handleAscending = () =>{
      //     fetch(`http://localhost:5000/allmytoy/${myToys.price}`)
      //     .then(res => res.json())
      //     .then(data => setEsending(data))
      // }
    return (
        <div>
            <div className="my-10">
            <h3 className="text-center font-bold my-5 text-3xl"><i>My <span className="text-pink-500">Toys</span></i></h3>

  
      <div className="flex justify-end my-10 space-x-5 ">
        <button  className="btn  border-0 bg-gradient-to-r  from-purple-500 to-pink-500">descending</button>
        <button  className="btn   border-0 bg-gradient-to-r  from-purple-500 to-pink-500">ascending</button>
      </div>



            <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    <thead>
      <tr>
        <th></th>
        <th>Image</th>
        <th>Seller Name</th> 
        <th>Toy Name</th> 
        <th>Seller Email</th>
        <th>Sub category</th> 
        <th>price</th> 
        <th>Quantity</th> 
        <th>Rating</th>
        <th>Description</th>
        <th><Link>view details</Link></th>
      </tr>
    </thead> 
    <tbody>
      
        {
            myToys.map(allToy=><tr key={allToy._id}>
                <td><button onClick={()=>handleDelete(allToy._id)} className="btn btn-circle btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button></td>
<td><img className="h-24 w-24 rounded-full" src={allToy.toyPicture} alt="" /></td>
                 <td>{allToy.sellerName}</td> 
                <td>{allToy.toyName}</td> 
                <td>{allToy.sellerEmail}</td>
                <td>{allToy.carType}</td> 
                 <td>{allToy.price}</td> 
               <td>{allToy.quantity}</td> 
               <td>{allToy.rating}</td>
               <td>{allToy.details}</td>
              <td><Link to={`/update/${allToy._id}`} className="btn border-0 bg-gradient-to-r  from-purple-500 to-pink-500">Update</Link></td>
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