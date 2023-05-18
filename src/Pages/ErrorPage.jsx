import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="mx-auto">
           <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--_GqDpWw0--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/7aqcppklh6bexoa70320.jpg" alt="" />
           <h3>Page not found</h3>
           <Link className="btn">Back to Home</Link>
        </div>
    );
};

export default ErrorPage;