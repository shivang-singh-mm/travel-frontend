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
import PostReview from './pages/UserReviewForm.js';
import PostBlog from './pages/BlogForm.js';
import CityTour from './pages/CityTour.js';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogsinside" element={<BlogInside />} />
        <Route path="/PostDestination" element={<PostDestination />} />


        {/* <Route path="/himachal" element={<HimachalTour />} /> */}
        <Route path="/city" element={<CityTour />} />
        {/* <Route path="/kashmir" element={<KashmirTour />} />
        <Route path="/rajasthan" element={<RajasthanTour />} />
        <Route path="/ladakh" element={<LadakhTour />} />
       <Route path="/himachal" element={<HimachalTour />} />
         <Route path="/kerala" element={<KeralaTour />} />
         <Route path="/goa" element={<GoaTour />} /> */}

        <Route path="/booking" element={<Book />} />

        <Route path="/golden-triangle" element={<GoldenTriangle />} />
        <Route path="/same-day" element={<SameDayTour />} />



        <Route path="/dashboard/tour-package" element={<PostTourPackage />} />
        <Route path="/dashboard/popular-destination" element={<PopularDestination />} />
        <Route path="/dashboard/review" element={<PostReview />} />
        <Route path="/dashboard/blog" element={<PostBlog />} />


      </Routes>

      <Footer />
    </>
  );
}

export default App;
