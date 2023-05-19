import Marquee from "react-fast-marquee";

const Gallery = () => {
    return (
        <div className="mt-16 ">
            <h2 className="text-4xl text-center font-bold mb-8"><i>Our Gallery</i></h2>
            <Marquee pauseOnHover="true">
            <div className="grid gap-11 grid-cols-3">
            <div className="card h-60 w-96 bg-base-100 shadow-xl ">
  <figure><img className="" src="https://i.ibb.co/nmd1TdD/giorgio-trovato-p-Ge-DU93n0f-Q-unsplash.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">privet car toy</h2>
    {/* <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
  </div>
</div>
            <div className="card h-60 w-96 bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/GckpBDy/winston-chen-N4-ZB3rq-Kcuo-unsplash.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Police car toy</h2>
    {/* <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
  </div>
</div>
            <div className="card h-60 w-96 bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/Z1K1jZs/louis-magnotti-r-Ecn8-OB83-EI-unsplash.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Truck car toy</h2>
    {/* <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
  </div>
</div>
            <div className="card h-60 w-96 bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/D7zb8M6/sreekumar-p-L2p3p-K7p5-BY-unsplash.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Privet car toy</h2>
    {/* <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
  </div>
</div>

            <div className="card h-60 w-96 bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/hDTNSsz/mourizal-zativa-YGEl-TTr-Aa-HM-unsplash.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Bus toy</h2>
    {/* <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
  </div>
</div>


            <div className="card h-60 w-96 bg-base-100 shadow-xl">
  <figure><img className="" src="https://i.ibb.co/3dYxb9X/giorgio-trovato-p0-Ol-RAAYXLY-unsplash.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Privet car toy</h2>
    {/* <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
  </div>
</div>
</div>
</Marquee>
        </div>
    );
};

export default Gallery;