import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
  const [popularDestinations, setPopularDestinations] = useState([]);
  const [tourPackages, setTourPackages] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [enquiry, setEnquiry] = useState([]);

  const baseurl = process.env.REACT_APP_API_URL

  useEffect(() => {
    const fetchPopularDestinations = axios.get(`${baseurl}/api/gallery/`);
    const fetchTourPackages = axios.get(`${baseurl}/api/tour/`);
    // const fetchGallery = axios.get(`'gallery'`);
    const fetchFeedbacks = axios.get(`${baseurl}/api/review/`);
    const fetchBlogPosts = axios.get(`${baseurl}/api/blog/`);
    // const fetchTestimonials = axios.get('testimonials');
    //  fetchGallery, fetchTestimonials
    //  galleryRes, testimonialsRes 

    Promise.all([fetchPopularDestinations, fetchTourPackages, fetchFeedbacks, fetchBlogPosts])
      .then(([popularDestinationsRes, tourPackagesRes, feedbacksRes, blogPostsRes]) => {
        setPopularDestinations(popularDestinationsRes.data);
        setTourPackages(tourPackagesRes.data);
        // setGallery(galleryRes.data);
        setFeedbacks(feedbacksRes.data);
        setBlogPosts(blogPostsRes.data);
        // setTestimonials(testimonialsRes.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="dashboard-container2">

      <h2 className="tittle-tour">Admin Dashboard</h2>
      <section>
        <h3>View Enquiry</h3>
        <Link to='/dashboard/popular-destination2'>
          <button className="add-btn">Add Destination</button></Link>
        <ul>
          {enquiry == [] ? <></> : enquiry.map(dest => (
            <li key={dest.id} className='dashboard_list'>
              {dest.title} - {dest.description}
              <div>
                <button className="edit-btn2">Edit</button>
                <button className="delete-btn2">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h3>Popular Destinations</h3>
        <Link to='/dashboard/popular-destination'>
          <button className="add-btn2">Add Destination</button></Link>
        <ul>
          {popularDestinations == [] ? <></> : popularDestinations.map(dest => (
            <li key={dest.id} className='dashboard_list'>
              {dest.title} - {dest.description}
              <div>
                <button className="edit-btn2">Edit</button>
                <button className="delete-btn2">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Tour Packages</h3>
        <Link to='/dashboard/tour-package'>
          <button className="add-btn2">Add Tour Package</button></Link>
        <ul>

          {tourPackages == [] ? <></> : tourPackages.map(pkg => (
            <li key={pkg.id} className='dashboard_list'>
              {pkg.city} - {pkg.description}
              <div>
                <button className="edit-btn2">Edit</button>
                <button className="delete-btn2">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </section>


      <section>
        <h3>Reviews</h3>
        <Link to='/dashboard/review'>
          <button className="add-btn2">Add review</button></Link>
        <ul>
          {feedbacks.map(feed => (
            <li key={feed.id} className='dashboard_list'>
              {feed.name}: {feed.review}
              <div>
                <button className="edit-btn2">Edit</button>
                <button className="delete-btn2">Delete</button>
              </div>
            </li>
          ))}
        </ul>

      </section>

      <section>
        <h3>Latest Blog Posts</h3>
        <Link to='/dashboard/blog'>
          <button className="add-btn2">Add Blog Post</button></Link>
        <ul>
          {blogPosts.map(post => (
            <li key={post.id} className='dashboard_list'>
              <strong>{post.title}</strong> - {post.content}
              <div>
                <button className="edit-btn2">Edit</button>
                <button className="delete-btn2">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </section>


    </div>
  );
};

export default Dashboard;


