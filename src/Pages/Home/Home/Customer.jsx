import { Rating } from "@smastrom/react-rating";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({ duration: 1200});

const Customer = () => {
    return (
        <div className="my-24">
            <h3 className="text-3xl text-center text-pink-500 text-bold"><i>Customer Testimonials</i></h3>
            <p className="text-5xl text-center font-bold mt-4">What our are Customer are Saying</p>
            <div className="grid md:grid-cols-2 gap-10 mx-6 my-6">
                <div data-aos="zoom-in-right" className="card w-full bg-base-100 space-y-6 shadow-xl">
                    <div className="flex items-center  pl-7 pt-7">
                        <img className="h-24 w-24" src="https://cdn.shopify.com/s/files/1/0604/6518/4923/files/review1.png?v=1660729951" alt="" />
                        <div className="mx-5">
                            <h4 className="text-pink-500 font-bold mb-2"><i>Clara Haringston</i></h4>
                            <Rating
                           style={{ maxWidth: 110 }}
                           value={4}
                                 readOnly
                              />
                        </div>
                    </div>
                    <p className="px-7 pb-7">Duis tristique nisl nec justo scelerisque, ut dictum magna aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam lectus justo, consectetur at vulputate et, dictum vel tellus. Etiam libero massa, posuere id dictum eget, sodales ac purus. Ut eu nisl sodales, euismod ipsum eget.</p>
                </div>
                <div data-aos="zoom-in-left" className="card w-full bg-base-100 space-y-6 shadow-xl">
                    <div className="flex items-center pl-7 pt-7">
                        <img className="w-24 h-24" src="https://cdn.shopify.com/s/files/1/0604/6518/4923/files/review2.png?v=1660729968" alt="" />
                        <div className="mx-5">
                            <h4 className="text-pink-500 font-bold mb-2"><i>Krissy Duffer</i></h4>
                            <Rating
                           style={{ maxWidth: 110 }}
                           value={5}
                                 readOnly
                              />
                        </div>
                    </div>
                    <p className="px-7 pb-7">Duis tristique nisl nec justo scelerisque, ut dictum magna aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam lectus justo, consectetur at vulputate et, dictum vel tellus. Etiam libero massa, posuere id dictum eget, sodales ac purus. Ut eu nisl sodales, euismod ipsum eget.</p>
                </div>
            </div>
        </div>
    );
};

export default Customer;