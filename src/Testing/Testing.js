// import React, { useEffect, useState } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './TestimonialSlider.css';
// import { FaStar } from 'react-icons/fa';
// import axios from 'axios';

// const renderStars = (rating) => {
//   return (
//     <>
//       {[...Array(rating)].map((_, index) => (
//         <FaStar key={index} color="#fbc531" />
//       ))}
//     </>
//   );
// }; 
// const chunkArray = (array, size) => {
//   const result = [];
//   for (let i = 0; i < array.length; i += size) {
//     result.push(array.slice(i, i + size));
//   }
//   return result;
// };

// function TestimonialSlider() {
//   const [testimonials, setTestimonials] = useState([]);

//   const baseurl = process.env.REACT_APP_API_URL;

//   async function fetchTestimonials() {
//     const fetchTestimonialsRes = await axios.get(`${baseurl}/api/review/`);
//     setTestimonials(fetchTestimonialsRes.data);
//   }

//   useEffect(() => {
//     fetchTestimonials();
//   }, []);

//   const testimonialChunks = chunkArray(testimonials, 3); 

//   return (
//     <div className="testimonial-section container">
//       <div className="row">
//         <div className="col-lg-12 col-md-12 d-flex justify-content-center">
//           <div className="testimonial-container">
//             <h1 className="tittle-a">Our Happy Travellers</h1>
//             <p>Our biggest reward is the smiles of our travelers. From breathtaking landscapes to unforgettable memories, read how real people turned their dream vacations into reality with us</p>
            
//             <Carousel interval={3000} indicators={false} className="w-auto">
//               {testimonialChunks.map((group, idx) => (
//                 <Carousel.Item key={idx}>
//                   <div className="d-flex justify-content-center flex-wrap gap-4">
//                     {group.map((item, index) => (
//                       <div className="testimonial-card" key={index}>
//                         <img
//                           src={item?.url}
//                           alt={item?.name}
//                           className="rounded-circle shadow-lg"
//                           width={100}
//                           height={100}
//                         />
//                         <h5 className="mt-3 mb-1">{item?.name}</h5>
//                         <small className="text-muted">{item?.occupation}</small>
//                         <p className="text-center mt-3">{item?.review}</p>
//                         <div className="stars mt-2">{renderStars(item?.star_number)}</div>
//                       </div>
//                     ))}
//                   </div>
//                 </Carousel.Item>
//               ))}
//             </Carousel>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TestimonialSlider;




// import React, { useEffect, useState } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './TestimonialSlider.css';
// import { FaStar } from 'react-icons/fa';
// import axios from 'axios';

// const renderStars = (rating) => {
//   return (
//     <>
//       {[...Array(rating)].map((_, index) => (
//         <FaStar key={index} color="#fbc531" />
//       ))}
//     </>
//   );
// };

// const chunkArray = (array, size) => {
//   const result = [];
//   for (let i = 0; i < array.length; i += size) {
//     result.push(array.slice(i, i + size));
//   }
//   return result;
// };

// function TestimonialSlider() {
//   const [testimonials, setTestimonials] = useState([]);

//   const baseurl = process.env.REACT_APP_API_URL;

//   async function fetchTestimonials() {
//     const fetchTestimonialsRes = await axios.get(`${baseurl}/api/review/`);
//     const allTestimonials = fetchTestimonialsRes.data;

    
//     setTestimonials(allTestimonials.slice(0, 5));
//   }

//   useEffect(() => {
//     fetchTestimonials();
//   }, []);

//   const testimonialChunks = chunkArray(testimonials, 3); 

//   return (
//     <div className="testimonial-section container">
//       <div className="row">
//         <div className="col-lg-12 col-md-12 d-flex justify-content-center">
//           <div className="testimonial-container">
//             <h1 className="tittle-a">Our Happy Travellers</h1>
//             <p>
//               Our biggest reward is the smiles of our travelers. From breathtaking landscapes to unforgettable memories,
//               read how real people turned their dream vacations into reality with us
//             </p>

//             <Carousel interval={3000} indicators={true}
//              autoplay={true} className="w-auto">
//               {testimonialChunks.map((group, idx) => (
//                 <Carousel.Item key={idx}>
//                   <div className="d-flex justify-content-center flex-wrap gap-4">
//                     {group.map((item, index) => (
//                       <div className="testimonial-card" key={index}>
//                         <img
//                           src={item?.url}
//                           alt={item?.name}
//                           className="rounded-circle shadow-lg"
//                           width={100}
//                           height={100}
//                         />
//                         <h5 className="mt-3 mb-1">{item?.name}</h5>
                      
//                         <p className="text-center mt-3">{item?.review}</p>
//                         <div className="stars mt-2">{renderStars(item?.star_number)}</div>
//                       </div>
//                     ))}
//                   </div>
//                 </Carousel.Item>
//               ))}
//             </Carousel>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TestimonialSlider;


import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TestimonialSlider.css';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';

const renderStars = (rating) => (
  <>
    {[...Array(rating)].map((_, index) => (
      <FaStar key={index} color="#fbc531" />
    ))}
  </>
);

function TestimonialSlider() {
  const [testimonials, setTestimonials] = useState([]);

  const baseurl = process.env.REACT_APP_API_URL;

  async function fetchTestimonials() {
    try {
      const res = await axios.get(`${baseurl}/api/review/`);
      setTestimonials(res.data.slice(0, 5)); // Limit to 5
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    }
  }

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    centerMode: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="testimonial-section container">
      <h1 className="tittle-a text-center">Our Happy Travellers</h1>
      <p className="text-center">
        Our biggest reward is the smiles of our travelers. From breathtaking landscapes to unforgettable memories,
        read how real people turned their dream vacations into reality with us.
      </p>
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div className="testimonial-card-wrapper" key={index}>
            <div className="testimonial-card p-3 text-center shadow">
              <img
                src={item?.url}
                alt={item?.name}
                className="rounded-circle mx-auto shadow"
                width={100}
                height={100}
              />
              <h5 className="mt-3 mb-1">{item?.name}</h5>
              <small className="text-muted">{item?.occupation}</small>
              <p className="mt-3">{item?.review}</p>
              <div className="stars mt-2">{renderStars(item?.star_number)}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TestimonialSlider;
