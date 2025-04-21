import React from 'react';
import './AdventureFooterBanner.css';

const AdventureFooterBanner = () => {
  return (
    <div className="footer-banner">
      <div className="overlay">
        <section className="footer-promo">
          <div className="container-a text-center">
            <h2 className="">Your Next Adventure Awaits! ✈️</h2>
            <p className="  ">
              Discover breathtaking landscapes, dive into rich cultures, and craft memories that last a lifetime.
              From serene beach retreats to adrenaline-filled mountain treks — your journey starts here.
            </p>
            {/* <a href="/packages" className="explore-btn">Explore Packages</a> */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdventureFooterBanner;
