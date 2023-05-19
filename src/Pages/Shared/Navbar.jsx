import { useContext, } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip'

const Navbar = () => {
    const {user, loading, logOut} = useContext(AuthContext);
    if(loading){
        return 'loading........'
    }
  //  console.log(user.photoURL)
    const handleLogOut = () =>{
        logOut()
        .then()
        .catch(error => {
            console.log(error.message)
        })
    }
    const nav = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/alltoys'>All Toys</Link></li>
    <li><Link to='/mytoys'>My Toys</Link></li>
    <li><Link to='/addtoys'>Add Toy</Link></li>
    <li><Link to='/blogs'>Blogs</Link></li>
    </>
    return (
        <div className="navbar bg-base-300 sticky top-0 px-10">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {nav}
      </ul>
    </div>
    <div className="block">
    <img className="h-12 w-12 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf668u6i-7B_uWz8rlAwhYmVWEvNRgfJyvgA&usqp=CAU" alt="" />
    <Link className="font-semibold" to='/'><i>Toys Hut</i></Link>
    
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {nav}
    </ul>
  </div>
  <div className="navbar-end">
  
 { user ?
 <>
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