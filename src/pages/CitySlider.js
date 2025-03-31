import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CitySlider.css'

const dummyImages = [
  "https://w0.peakpx.com/wallpaper/928/983/HD-wallpaper-landscape-14-temple-india-tourist-places-cool-places-to-visit-west-bengal.jpg",
  "https://www.shutterstock.com/image-photo/view-annapurna-temple-famous-hindu-600nw-2163484785.jpg",
  "https://png.pngtree.com/thumb_back/fh260/background/20230308/pngtree-the-gateway-of-india-and-boats-as-seen-from-the-mumbai-photo-image_1869462.jpg",
  "https://media2.thrillophilia.com/images/photos/000/157/230/original/1559976494_shutterstock_649938010.jpg?w=753&h=450&dpr=1.5"
];

function CitySlider() {
  return (
    <div className="container-fluid p-0 city-scroll">
      <Carousel interval={3000} indicators={false} className="w-100">
        {dummyImages.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              src={image}
              alt={`City ${index + 1}`}
              className="d-block w-100"
              style={{ height: "300px", objectFit: "cover" }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CitySlider;
