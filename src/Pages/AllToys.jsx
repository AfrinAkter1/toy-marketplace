import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AllToys = () => {
    const [allToys, setallToys] = useState([])
    const [search,setSearch] = useState([])
   const alltoy = allToys.slice(0, 20)
   
    useEffect(() =>{
        fetch('http://localhost:5000/allcars')
        .then(res => res.json())
        .then(data => setallToys(data))
    },[])

    
      
    const handleSearchButton = () =>{
      fetch(`http://localhost:5000/allcars/searchAll/${search}`)
      .then(res => res.json())
      .then(data => setallToys(data))
    }

    // if(allToys.length > 20){
    //  const toy = allToys.slice(0, 20)
    //  return toy
    // }
    return (
        <div className="my-10">
            <h3 className="text-center font-bold my-5 text-3xl"><i>All <span className="text-pink-500">Toys</span></i></h3>

  
            <div className="text-center my-7">
  <div className="btn-group">
    <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search…" className="input input-bordered " />
    <button onClick={handleSearchButton} className="btn btn-square  border-0 bg-gradient-to-r  from-purple-500 to-pink-500">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6  w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>



            <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    <thead>
      <tr>
        <th>No.</th>
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
            alltoy.map((allToy , index)=><tr key={allToy._id}>
                <td>{index+1}</td>
                 <td>{allToy.sellerName}</td> 
                <td>{allToy.toyName}</td> 
                <td>{allToy.carType}</td> 
                 <td>{allToy.price}</td> 
               <td>{allToy.quantity}</td> 
              <td><Link to={`/viewdetails/${allToy._id}`} className="btn border-0 bg-gradient-to-r  from-purple-500 to-pink-500">View Details</Link></td>
            </tr> )
        }
        
       
    </tbody> 
   
  </table>
</div>
        </div>
    );
};

export default AllToys;