import React from 'react';
import DiscountCarousel from './DiscountCarousel.js'; 

function Discounts() {
  return (
    <div
      className="discount"
      style={{
        backgroundImage: `url('https://i.ytimg.com/vi/_yLgn2mXU_c/maxresdefault.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '500px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        padding: '40px 5%',
        position: 'relative',
      }}
    >
      {/* Overlay for better readability */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(62, 145, 162, 0.51)',
        }}
      ></div>

      {/* Heading at the top */}
      <h2
        style={{
          fontSize: 'clamp(22px, 4vw, 32px)',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          position: 'absolute',
          top: '20px',
          width: '100%',
        }}
      >
        ✨Navratri Special Offers!✨
      </h2>
      <div style={{
        marginTop:'20px'
      }}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nemo! Minima quam commodi maiores debitis quasi, cumque quae eligendi unde excepturi et saepe? Mollitia autem, nesciunt odio suscipit culpa deserunt!</p>
      </div>

      {/* Carousel Section */}
      <div className="discount_corousal" style={{ position: 'relative', width: '100%',   }}>
        <DiscountCarousel />
      </div>
    </div>
  );
}

export default Discounts;
