import { Link } from "react-router-dom";


const Navbar = () => {
    const nav = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/alltoys'>All Toys</Link></li>
    <li><Link to='/mytoys'>My Toys</Link></li>
    <li><Link to='/addtoys'>Add Toy</Link></li>
    <li><Link to='/blogs'>Blogs</Link></li>
    </>
    return (
        <div className="navbar bg-base-300">
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
   <Link className="btn border-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" to='/login'>Login</Link>
  </div>
</div>
    );
};

export default Navbar;