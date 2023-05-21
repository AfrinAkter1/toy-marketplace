import { useContext, } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({ duration: 1200});



const Navbar = () => {
    const {user, loading, logOut} = useContext(AuthContext);
    // loading
    if(loading){
        return <progress className="progress w-56 "></progress>
    }
  
    // log out
    const handleLogOut = () =>{
        logOut()
        .then()
        .catch(error => {
            console.log(error.message)
        })
    }

    // nav link
    const nav = <>
    <li><Link to='/'><i>Home</i></Link></li>
    
   {user? <>
   <li><Link to='/alltoys'><i>All Toys</i></Link></li>
    <li><Link to='/mytoys'><i>My Toys</i></Link></li>
    <li><Link to='/addtoys'><i>Add Toy</i></Link></li>
    </> 
  :""
  }
    <li><Link to='/blogs'><i>Blogs</i></Link></li>
  </>
    return (
        <div data-aos="fade-down" className="navbar bg-base-300 md:px-10">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu font-bold text-pink-500 menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {nav}
      
      </ul>
    </div>
    <div className="block">
    <img className="h-12 w-12 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf668u6i-7B_uWz8rlAwhYmVWEvNRgfJyvgA&usqp=CAU" alt="" />
    <Link className="font-semibold" to='/'><i >Toys <span className="text-pink-500">Hut</span></i></Link>
    
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-xl  text-pink-500">
     {nav}
    </ul>
  </div>
  <div className="navbar-end">
  
 { user ?
 <>

 {/* tooltip */}
 <a
  data-tooltip-id="my-tooltip"
  data-tooltip-content={user?.displayName}
  data-tooltip-place="top"
>
<img className="h-12 w-12 rounded-full mr-5" src={user?.photoURL} alt="" />
</a>
<Tooltip id="my-tooltip" />



 <Link onClick={handleLogOut} className="btn border-0 bg-gradient-to-r  from-purple-500 to-pink-500">logOut</Link>

 </>
   :
   <>
     <Link className="btn border-0 bg-gradient-to-r  from-purple-500 to-pink-500" to='/login'>Login</Link>
     <Link className="mx-4 btn border-0 bg-gradient-to-r  from-purple-500 to-pink-500" to='/register'>Register</Link>
   </>
 }
  </div>
</div>
    );
};

export default Navbar;