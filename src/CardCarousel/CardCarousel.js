 
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "./CardCarousel.css";  

// const features = [
//   { icon: "🚗", label: "CAR RENTALS" },
//   { icon: "🎟️", label: "TICKETING" },
//   { icon: "💰", label: "DISCOUNTED PACKAGES" },
//   { icon: "🛡️", label: "SAFETY ENSURED" },
//   { icon: "🏕️", label: "ADVENTURE TOUR" },
//   { icon: "🎒", label: "TOUR PACKAGES" },
// ];

// const CardCarousel = () => {
//   return (
//     <div className="carousel-wrapper-l">
//          <h1> Discover Unforgettable Journeys Tailored Just for You</h1>
//          <p className="text-center">Whether you're craving adventure, relaxation, culture, or luxury, we’ve got the perfect tour package for every kind of traveler. </p>
//       <Swiper
//         modules={[Navigation]}
//         spaceBetween={20}
//         navigation
//         breakpoints={{
//           0: {
//             slidesPerView: 2,
//           },
//           768: {
//             slidesPerView: 3,
//           },
//           1024: {
//             slidesPerView: 4,
//           },
//           1280: {
//             slidesPerView: 6,
//           },
//         }}
//       >
//         {features.map((item, index) => (
//           <SwiperSlide key={index}>
        
//             <div className="feature-card-l">
//               <div className="feature-icon-l">{item.icon}</div>
//               <div className="feature-label-l">{item.label}</div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default CardCarousel;




import React from 'react';
import './CardCarousel.css';

const activities = [
  { title: 'Gondola Ride', image: 'https://images.hindustantimes.com/img/2022/05/18/1600x900/92fc6042-d69a-11ec-9c44-6c63284ff8c5_1652873626413.jpg' },
  { title: 'Skiing', image: 'https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/12/15180616/Adventure-Destinations-In-India-1.jpg?tr=w-1200,q-60' },
  { title: 'Trekking', image: 'https://www.indiafilings.com/learn/wp-content/uploads/2015/07/Adventure-Travel-Business.jpg' },
  { title: 'Pony Ride', image: 'https://dreamlandmunnar.in/wp-content/uploads/2025/03/MELTDOWN.webp' },
];

function CardCarousel() {
  return (
    <div>
      <div
        className="hero"
        style={{ backgroundImage: 'url("https://www.distinctdestinations.in/DistinctDestinationsBackEndImg/BlogImage/adventure-travel-in-india-top-2025-experiences-for-thrill-seekers-L-distinctdestinations.jpg")' }}
      >
        <div className="hero-overlay">
          <h1>Experience Paradise on Earth</h1>
          <p>
            The spirit of adventure and desire to explore leads us to scale
            mountains and dive deep in the oceans.
          </p>
          {/* <div className="activities">
        {activities.map((act, i) => (
          <div className="activity-card" key={i}>
            <img src={act.image} alt={act.title} />
            <h3>{act.title.toUpperCase()}</h3>
          </div>
        ))}
      </div> */}
        </div>
       
      </div>

      
    </div>
  );
}

export default CardCarousel;

