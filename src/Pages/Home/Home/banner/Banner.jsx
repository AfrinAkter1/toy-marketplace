// import './Banner.css'

const Banner = () => {
    return (
      <div>
        <div className="hero min-h-screen " style={{ backgroundImage: `url("https://img.freepik.com/free-vector/blue-sports-car-isolated-white-vector_53876-67418.jpg?size=626&ext=jpg&ga=GA1.1.977297310.1680196639&semt=sph")` }}>
  <div className="hero-overlay bg-opacity-80"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold"><i>Toys  <span className="text-pink-500">Hut</span></i></h1>
      <p className="mb-5">All car toys in here</p>
      <button className="btn border-0 bg-gradient-to-r  from-purple-500 to-pink-500">Get Started</button>
    </div>
  </div>
  
</div>
<div>
    <img className="h-20  hover:h-24 hover:opacity-100 hover:duration-700 absolute rounded-full opacity-60 bottom-5 md:right-32 right-0" src="https://img.freepik.com/free-vector/yellow-sports-car_1308-96215.jpg?w=1380&t=st=1684415352~exp=1684415952~hmac=3fafcc872d36901d66b1a85257afe19e33c2a1fbb7c786b68994ed2a9db15f6c" alt="" />
    <img className="h-20 hover:h-24 hover:opacity-100 hover:duration-700 absolute rounded-full opacity-60 bottom-5 md:right-80" src="https://img.freepik.com/free-vector/blue-vintage-convertible-car-cartoon-style_1308-107676.jpg?size=626&ext=jpg&ga=GA1.1.977297310.1680196639&semt=ais" alt="" />
    
  </div>
</div>
    );
};

export default Banner;