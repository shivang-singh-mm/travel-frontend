import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function DarkVariantExample() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <div className="d-flex flex-column align-items-center text-center mb-3">
            <img
              className="rounded-circle mb-2"
              src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
              width={100} height={100}
              alt="First slide"
            />
            <h5 className="mb-2">Simanan hytmaye</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="d-flex flex-column align-items-center text-center mb-3">
            <img
              className="rounded-circle mb-2"
              src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
              width={100} height={100}
              alt="Second slide"
            />
            <h5 className="mb-2">Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="d-flex flex-column align-items-center text-center mb-3">
            <img
              className="rounded-circle mb-2"
              src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
              width={100} height={100}
              alt="Third slide"
            />
            <h5 className="mb-2">Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default DarkVariantExample;
    