import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
  const [popularDestinations, setPopularDestinations] = useState([]);
  const [tourPackages, setTourPackages] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);
  const [offers, setOffers] = useState([]);

  const baseurl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchPopularDestinations = axios.get(`${baseurl}/api/gallery/`);
    const fetchTourPackages = axios.get(`${baseurl}/api/tour/`);
    const fetchFeedbacks = axios.get(`${baseurl}/api/review/`);
    const fetchBlogPosts = axios.get(`${baseurl}/api/blog/`);
    const fetchOffers = axios.get(`${baseurl}/api/offer/`);

    Promise.all([fetchPopularDestinations, fetchTourPackages, fetchFeedbacks, fetchBlogPosts, fetchOffers])
      .then(([popularDestinationsRes, tourPackagesRes, feedbacksRes, blogPostsRes, offersRes]) => {
        setPopularDestinations(popularDestinationsRes.data);
        setTourPackages(tourPackagesRes.data);
        setFeedbacks(feedbacksRes.data);
        setBlogPosts(blogPostsRes.data);
        setOffers(offersRes.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleDelete = async (id, endpoint, setState) => {
    try {
      await axios.delete(`${baseurl}/api/${endpoint}/${id}`);
      setState(prevItems => prevItems.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div className="dashboard-container2">
      <h2 className="tittle-tour">
        Admin Dashboard
        <div className="view-enquiry-container">
          <Link to='/dashboard/enquiry'>
            <button className="view-enquiry-xyz">View Enquiry</button>
          </Link>
        </div>
      </h2>

      <section>
        <h3>Popular Destinations</h3>
        <Link to='/dashboard/popular-destination'>
          <button className="add-btn2">Add Destination</button>
        </Link>
        <ul>
          {popularDestinations.map(dest => (
            <li key={dest.id} className='dashboard_list'>
              {dest.title} - {dest.description}
              <div>
                <button className="delete-btn2" onClick={() => handleDelete(dest.id, 'gallery', setPopularDestinations)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Tour Packages</h3>
        <Link to='/integrate'>
          <button className="add-btn2">Add Tour Package</button>
        </Link>
        <ul>
          {tourPackages.map(pkg => (
            <li key={pkg.id} className='dashboard_list'>
              {pkg.city} - {pkg.description}
              <div>
                <button className="delete-btn2" onClick={() => handleDelete(pkg.id, 'tour', setTourPackages)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Reviews</h3>
        <Link to='/dashboard/popular-destination'>
          <button className="add-btn2">Add review</button>
        </Link>
        <ul>
          {feedbacks.map(feed => (
            <li key={feed.id} className='dashboard_list'>
              {feed.name}: {feed.review}
              <div>
                <button className="delete-btn2" onClick={() => handleDelete(feed.id, 'review', setFeedbacks)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Latest Blog Posts</h3>
        <Link to='/dashboard/blog'>
          <button className="add-btn2">Add Blog Post</button>
        </Link>
        <ul>
          {blogPosts.map(post => (
            <li key={post.id} className='dashboard_list'>
              <strong>{post.title}</strong> - {post.content}
              <div>
                <button className="delete-btn2" onClick={() => handleDelete(post.id, 'blog', setBlogPosts)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Offers</h3>
        <Link to='/dashboard/offer'>
          <button className="add-btn2">Add Offer</button>
        </Link>
        <ul>
          {offers.map(post => (
            <li key={post.id} className='dashboard_list'>
              <strong>{post.title}</strong> - {post.content}
              <div>
                <button className="delete-btn2" onClick={() => handleDelete(post.id, 'offer', setOffers)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </section>

    </div>
  );
};

export default Dashboard;



