import React, { useEffect, useState } from 'react';
import DiscountCarousel from './DiscountCarousel.js';
import axios from 'axios';

function Discounts() {
  const [offer, setOffer] = useState([]);
  const baseurl = process.env.REACT_APP_API_URL;

  async function fetchOffers() {
    const fetchOfferRes = await axios.get(`${baseurl}/api/offer/`);
    setOffer(fetchOfferRes.data);
  }

  useEffect(() => {
    fetchOffers();
  }, []);

  return (
    <>
      {offer.length === 0 ? null : (
        <div
          className="discount"
          style={{
            backgroundImage: `url('https://i.ytimg.com/vi/_yLgn2mXU_c/maxresdefault.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '450px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white',
            padding: '40px',
            position: 'relative',

            // Fixed layout styles
            margin: '0',
            width: '100vw',
            overflowX: 'hidden',
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
              margin: 0,
              zIndex: 1,
            }}
          >
            {offer[0].title}
          </h2>

          {/* Description */}
          <div style={{ marginTop: '20px', zIndex: 1 }}>
            <p>{offer[0].description}</p>
          </div>

          {/* Carousel Section */}
          <div
            className="discount_corousal"
            style={{ position: 'relative', width: '100%', zIndex: 1 }}
          >
            <DiscountCarousel
              url1={offer[0].url1}
              url2={offer[0].url2}
              url3={offer[0].url3}
              description1={offer[0].description1}
              description2={offer[0].description2}
              description3={offer[0].description3}
              title1={offer[0].title1}
              title2={offer[0].title2}
              title3={offer[0].title3}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Discounts;
