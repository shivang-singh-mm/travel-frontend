import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar.js';
import Footer from './Footer/Footer.js';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Book from './pages/Book';
import GoldenTriangle from './pages/GoldenTriangle.js';
import SameDayTour from './pages/SameDayTour.js';
import Dashboard from './pages/Dashbaord.js';
import Blog from './pages/Blog.js';
import BlogInside from './pages/BlogInside.js';
import PostDestination from './pages/PostDestination.js';
import PostTourPackage from './pages/TourPackageForm.js';
import PopularDestination from './pages/PopularDestinationForm.js';
import PopularDestination2 from './pages/PopularDestinationForm2.js';
import PostReview from './pages/UserReviewForm.js';
import PostBlog from './pages/BlogForm.js';
import CityTour from './pages/CityTour.js';
import Perticular from './pages/Perticular.js';
import Cities from './pages/Cities.js';
import PrivateRoute from './pages/PrivateRoute.js';
import Login from './pages/Login.js';
import PostOffer from './pages/OfferForm.js';
import CardCarousel from './CardCarousel/CardCarousel.js';
import HolidayOffers from './HolidayOffers/HolidayOffers.js';
import WhyWe from './WhyWe/WhyWe.js';
import Integrate from './Integrate/Integrate.js';
 
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/whywe" element={<WhyWe />} />
        <Route path="/integrate" element={<Integrate/>} />
        <Route path="/offers" element={<HolidayOffers />} />
        <Route path="/blogsinside" element={<BlogInside />} />
        <Route path="/PostDestination" element={<PostDestination />} />
         
       
       
        {/* <Route path="/himachal" element={<HimachalTour />} /> */}
        <Route path="/CititesTour" element={<CityTour/>} /> 
        <Route path="/cities" element={<Perticular/>} /> 
        <Route path="/city" element={<Cities />} /> 


        {/* <Route path="/kashmir" element={<KashmirTour />} />
        <Route path="/rajasthan" element={<RajasthanTour />} />
        <Route path="/ladakh" element={<LadakhTour />} />
       <Route path="/himachal" element={<HimachalTour />} />
         <Route path="/kerala" element={<KeralaTour />} />
         <Route path="/goa" element={<GoaTour />} /> */}

        <Route path="/booking" element={<Book />} />
        <Route path="/cardcarosal" element={<CardCarousel />} />

        <Route path="/golden-triangle" element={<GoldenTriangle />} />
        <Route path="/same-day" element={<SameDayTour />} />

        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute> <Dashboard /> </PrivateRoute>} />
        <Route path="/dashboard/tour-package" element={<PrivateRoute><PostTourPackage /></PrivateRoute>} />
        <Route path="/dashboard/popular-destination" element={<PrivateRoute><PopularDestination /></PrivateRoute>} />
        <Route path="/dashboard/enquiry" element={<PopularDestination2 />} />
        <Route path="/dashboard/review" element={<PrivateRoute><PostReview /></PrivateRoute>} />
        <Route path="/dashboard/blog" element={<PrivateRoute><PostBlog /></PrivateRoute>} />
        <Route path="/dashboard/offer" element={<PrivateRoute><PostOffer /></PrivateRoute>} />
        
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
