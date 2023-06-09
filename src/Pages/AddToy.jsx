import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "./provider/AuthProvider";
import UseTitle from "../UseTitle";

const AddToy = () => {
    const {user} = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();


    UseTitle('Add Toy')


  const handleUpdate = data => {
    console.log(data)
    fetch('https://toy-website-server.vercel.app/allcars',{
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        if(data.acknowledged){
            Swal.fire({
               
                icon: 'success',
                title: 'Your toy added successfully',
                showConfirmButton: false,
                timer: 1500
              })
        }
        console.log(data)
    })
};
  

    return (
        <div className="my-10 ">
            <p className="text-4xl font-bold text-center"><i>Add A  <span className="text-pink-500">Toy Car</span></i></p>
           
            <form className="space-y-4 p-5 grid grid-cols-2 gap-4" onSubmit={handleSubmit(handleUpdate)}>
    
   <div className="mt-4">
   <p className="text-base font-bold">Toy name: </p>
      <input className="p-4 w-full border-2" placeholder="Toy Name"  {...register("toyName", { required: true })} /> 
      {errors.toyName && <span>This field is required</span>}
     
   </div>

<div>
<p className="text-base font-bold">Toy Picture</p>
      <input className="p-4 w-full border-2" placeholder="Toy Picture" {...register("toyPicture", { required: true })} /> {errors.exampleRequired && <span>This field is required</span>}
      
</div>

     <div>
     <p className="text-base font-bold">Seller Name: </p>
      <input className="p-4 w-full border-2" defaultValue={user?.displayName} placeholder="Seller Name" {...register("sellerName", { required: true })} /> {errors.exampleRequired && <span>This field is required</span>}
     
     </div>


     <div>
     <p className="text-base font-bold">Seller Email</p>
      <input className="p-4 w-full border-2" defaultValue={user?.email} placeholder="Seller Email" {...register("sellerEmail", { required: true })} /> {errors.exampleRequired && <span>This field is required</span>}
      

     </div>

     <div>
     <p className="text-base font-bold">Toy Price: </p>
      <input className="p-4 w-full border-2" placeholder="Price" {...register("price", { required: true })} /> {errors.exampleRequired && <span>This field is required</span>}
     
     </div>

      <div>
      <p className="text-base font-bold">Ratings: </p>
      <input className="p-4 w-full border-2" placeholder="Rating" {...register("rating", { required: true })} /> {errors.exampleRequired && <span>This field is required</span>}
      
      </div>

     <div>
     <p className="text-base font-bold">Available Quantity: </p>
      <input className="p-4 w-full border-2" placeholder="Available Quantity" {...register("quantity", { required: true })} /> {errors.exampleRequired && <span>This field is required</span>}
     

     </div>


     <div>
     <p className="text-base font-bold">Details: </p>
      <input className="p-4 w-full border-2" placeholder="Details" {...register("details", { required: true })} /> {errors.exampleRequired && <span>This field is required</span>}
      <br />
     </div>


     <div>
     <p className="text-base font-bold">Car type: </p>
     <select className="p-4 w-full border-2"  {...register("carType")}>
        <option value="privetCar">Privet car</option>
        <option value="bus">Bus</option>
        <option value="Truck">Truck car</option>
        <option value="policeCar">Police car</option>
        <option value="other">Other</option>

      </select>
     </div><br />



      <input className="btn border-0 bg-gradient-to-r  from-purple-500 to-pink-500"  type="submit" value='Update' />
   
    </form>
        </div>
    );
};

export default AddToy;