import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({ duration: 1200});


const About = () => {
    return (
        <div className="my-10">
            <h3 className="text-pink-500 font-bold text-center text-5xl my-7 "><i>About Us</i></h3>
           
            <div className="card lg:card-side bg-base-100  md:mx-6 shadow-xl">
  <figure><img data-aos="zoom-in-right" src="https://img.freepik.com/free-photo/kid-playing-home_23-2148131061.jpg?w=1060&t=st=1684654439~exp=1684655039~hmac=9734cc5ebb62eb843369f1d13e8f7c849b444ea1702dbd0a4fcfbfd846b79ee9" alt="Album"/></figure>
  <div data-aos="zoom-in" className="card-body">
    <h2 className="card-title"><i>Our Story</i></h2>
    <p>I thought about my toys. Then I remembered the fun I used to have when I played toys with my brother. I told all my <br /> friends about the variety of toys and could spend hours imagining personalities, lives and families for them.

My toys was my best friend, in a way. When I was sad, <br /> she was the one who comforted me. When I was happy, I was eager to tell her everything.</p>
    <p>I thought about my toys. Then I remembered the fun I used to have when I played toys with my brother. I told all my <br /> friends about the variety of toys and could spend hours imagining personalities, lives and families for them.

My toys was my best friend, in a way. When I was sad, <br /> she was the one who comforted me. When I was happy, I was eager to tell her everything.</p>
  
  </div>
</div>
        </div>
    );
};

export default About;