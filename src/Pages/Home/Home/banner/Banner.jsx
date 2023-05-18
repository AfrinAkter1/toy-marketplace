// import './Banner.css'

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/blue-sports-car-isolated-white-vector_53876-67418.jpg?size=626&ext=jpg&ga=GA1.1.977297310.1680196639&semt=sph")` }}>
  <div className="hero-overlay bg-opacity-80"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Toys Hut</h1>
      <p className="mb-5">All car toys in here</p>
      <button className="btn border-0 bg-gradient-to-r  from-purple-500 to-pink-500">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;