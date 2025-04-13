// import React from 'react';
// import './HolidayOffers.css';

// const holidayData = [
//   {
//     image: 'https://www.trip.net.in/wp-content/uploads/Goa-Tour-Packages-trip.net_.in_.jpg',
//     title: 'Goa Offer 40%',
//     subtitle: 'Mon to Wed',
//     originalPrice: 9999,
//     offerPrice: 4999,
//     discount: '10%',
//   },
//   {
//     image: 'https://www.enlivetrips.com/uploads/posts/Kashmir%20Valley%20Tour%20Package.jpg',
//     title: 'Kashmir a Heaven On Earth On Night',
//     subtitle: 'Limited period offer',
//     originalPrice: 9999,
//     offerPrice: 7300,
//     discount: '27%',
//   },
//   {
//     image: 'https://s7ap1.scene7.com/is/image/incredibleindia/The-Best-Adventure-Experiences-in-Manali1-popular?qlt=82&ts=1726730921047',
//     title: 'Manali Mountain Escape',
//     subtitle: 'Book now for summer',
//     originalPrice: 8500,
//     offerPrice: 6400,
//     discount: '25%',
//   }
// ];

// const HolidayOffers = () => {
//   return (
//     <div className="offers-container">
//       <h2 className="offers-heading">
//         Read our latest  <span className="highlight">Blogs</span>
//       </h2>
//       <p className="offers-subtext">
//       Discover inspiring travel stories, expert tips, and hidden gems from around the world.
// Stay updated with the latest travel trends, guides, and destination spotlights.
// Your adventure begins here—one blog at a time.
//       </p>

//       <div className="offers-card-wrapper">
//         {holidayData.map((item, index) => (
//           <div key={index} className="offer-card">
//             <div className="image-wrapper">
//               <img src={item.image} alt={item.title} />
              
//             </div>
//             <div className="card-content">
//               <h4>Blog  title</h4>
//               <small>Blog subtitle</small>
//               <div className="price-row">
               
                
//               </div>
//               <button className="view-button">View more</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HolidayOffers;


import React from 'react';
import Slider from 'react-slick';
import './HolidayOffers.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const holidayData = [
  {
    image: 'https://www.trip.net.in/wp-content/uploads/Goa-Tour-Packages-trip.net_.in_.jpg',
    title: 'Goa Offer 40%',
    subtitle: 'Mon to Wed',
    originalPrice: 9999,
    offerPrice: 4999,
    discount: '10%',
  },
  {
    image: 'https://www.enlivetrips.com/uploads/posts/Kashmir%20Valley%20Tour%20Package.jpg',
    title: 'Kashmir a Heaven On Earth',
    subtitle: 'Limited period offer',
    originalPrice: 9999,
    offerPrice: 7300,
    discount: '27%',
  },
  {
    image: 'https://s7ap1.scene7.com/is/image/incredibleindia/The-Best-Adventure-Experiences-in-Manali1-popular?qlt=82&ts=1726730921047',
    title: 'Manali Mountain Escape',
    subtitle: 'Book now for summer',
    originalPrice: 8500,
    offerPrice: 6400,
    discount: '25%',
  },
  {
    image: 'https://www.flamingotravels.co.in/_next/image?url=https%3A%2F%2Fimgcdn.flamingotravels.co.in%2FImages%2FCity%2FGeography-of-Jaipur.jpg&w=1080&q=75',
    title: 'Jaipur Heritage Delight',
    subtitle: 'Cultural vibes',
    originalPrice: 7000,
    offerPrice: 5100,
    discount: '27%',
  },
  {
    image: 'https://www.tourmyindia.com/hotelsinindia/images/punnamada-backwater-resort-alleppey2.jpg',
    title: 'Taj Mahal Express Tour',
    subtitle: 'Perfect weekend getaway',
    originalPrice: 6000,
    offerPrice: 4500,
    discount: '25%',
  },
  {
    image: 'https://static2.tripoto.com/media/filter/tst/img/OgData/1667019830_7_57pm.png',
    title: 'Kerala Backwater Retreat',
    subtitle: 'Book now for monsoon',
    originalPrice: 9500,
    offerPrice: 6999,
    discount: '26%',
  },
  {
    image: 'https://static.toiimg.com/photo/72975551.cms',
    title: 'Rajasthan Desert Safari',
    subtitle: 'Camel rides & dunes',
    originalPrice: 10500,
    offerPrice: 7700,
    discount: '27%',
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  rtl: true,
  autoplay:true,
  centerMode: false, 
  centerPadding: '0px',
  autoplaySpeed: 3000, 
  responsive: [
    {
      breakpoint: 992,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 600,
      settings: { slidesToShow: 1 }
    }
  ]
};

const HolidayOffers = () => {
  return (
    <div className="offers-container">
      <h2 className="offers-heading">
        Read our latest <span className="highlight">Blogs</span>
      </h2>
      <p className="offers-subtext">
        Discover inspiring travel stories, expert tips, and hidden gems from around the world.
        Stay updated with the latest travel trends, guides, and destination spotlights.
        Your adventure begins here—one blog at a time.
      </p>

      <Slider {...settings}>
        {holidayData.map((item, index) => (
          <div key={index} className="offer-card">
            <div className="image-wrapper">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="card-content-z">
              <h4>{item.title}</h4>
              <small>{item.subtitle}</small>
              <div className="price-row">
                {/* <span className="original-price">₹{item.originalPrice}</span> */}
                {/* <span className="offer-price">₹{item.offerPrice}</span> */}
                {/* <span className="discount">({item.discount} off)</span> */}
              </div>
              <p className="view-button-kj">View more</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HolidayOffers;
