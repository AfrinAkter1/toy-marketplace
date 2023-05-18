import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div>
               <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col  lg:flex-row-reverse">
    <div >
     <img style={{height:'500px', width:'550px'}} src="https://msinpoland.com/wp-content/uploads/2020/10/Documents-for-University.png" alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Your name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="url" name="photo" placeholder="password" className="input input-bordered" />
          
        </div>
        <div className="form-control mt-6">
          <input type="submit" className="btn border-0 bg-gradient-to-r  from-purple-500 to-pink-500" value="Register" />
        </div>
        <p>Already have an account? <Link className="text-blue-500" to='/login'>Login</Link></p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;