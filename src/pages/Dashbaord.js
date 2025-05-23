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
  const [themes, setThemes] = useState([]);

  const baseurl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchPopularDestinations = axios.get(`${baseurl}/api/gallery/`);
    const fetchTourPackages = axios.get(`${baseurl}/api/tour/`);
    const fetchFeedbacks = axios.get(`${baseurl}/api/review/`);
    const fetchBlogPosts = axios.get(`${baseurl}/api/blog/`);
    const fetchOffers = axios.get(`${baseurl}/api/offer/`);
    const fetchThemes = axios.get(`${baseurl}/api/theme/`);

    Promise.all([
      fetchPopularDestinations,
      fetchTourPackages,
      fetchFeedbacks,
      fetchBlogPosts,
      fetchOffers,
      fetchThemes
    ])
      // 
      .then(([popularDestinationsRes, tourPackagesRes, feedbacksRes, blogPostsRes, offersRes, themeRes]) => {
        setPopularDestinations(popularDestinationsRes.data);
        setTourPackages(tourPackagesRes.data);
        setFeedbacks(feedbacksRes.data);
        setBlogPosts(blogPostsRes.data);
        setOffers(offersRes.data);
        setThemes(themeRes.data);
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
      <h2 className="text-center my-4 position-relative">
        Admin Dashboard
        <div className="position-absolute end-0 top-50 translate-middle-y me-3">
          <Link to='/dashboard/enquiry'>
            <button className="btn btn-outline-primary btn-sm">View Enquiry</button>
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
            <li key={dest._id} className='dashboard_list'>
              {dest.title} - {dest.description}
              <div>
                <Link to={`/dashboard/popular-destination/edit/${dest._id}`}>
                  <button className="edit-btn2">Edit</button>
                </Link>
                <button className="delete-btn2" onClick={() => handleDelete(dest._id, 'gallery', setPopularDestinations)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Themes</h3>
        <Link to='/dashboard/theme'>
          <button className="add-btn2">Add Theme</button>
        </Link>
        <ul>
          {themes !== 0 && themes.map(dest => (
            <li key={dest._id} className='dashboard_list'>
              {dest.title} - {dest.description}
              <div>
                <Link to={`/dashboard/theme/edit/${dest._id}`}>
                  <button className="edit-btn2">Edit</button>
                </Link>
                <button className="delete-btn2" onClick={() => handleDelete(dest._id, 'gallery', setPopularDestinations)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Tour Packages</h3>
        <Link to='/dashboard/tour-package'>
          <button className="add-btn2">Add Tour Package</button>
        </Link>
        <ul>
          {tourPackages.map(pkg => (
            <li key={pkg._id} className='dashboard_list'>
              {pkg.title1} - {pkg.description2}
              <div>
                <Link to={`/dashboard/tour-package/edit/${pkg._id}`}>
                  <button className="edit-btn2">Edit</button>
                </Link>
                <button className="delete-btn2" onClick={() => handleDelete(pkg._id, 'tour', setTourPackages)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Reviews</h3>
        <Link to='/dashboard/review'>
          <button className="add-btn2">Add Review</button>
        </Link>
        <ul>
          {feedbacks.map(feed => (
            <li key={feed._id} className='dashboard_list'>
              {feed.name}: {feed.review}
              <div>
                <Link to={`/dashboard/review/edit/${feed._id}`}>
                  <button className="edit-btn2">Edit</button>
                </Link>
                <button className="delete-btn2" onClick={() => handleDelete(feed._id, 'review', setFeedbacks)}>Delete</button>
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
            <li key={post._id} className='dashboard_list'>
              <strong>{post.title}</strong> - {post.content}
              <div>
                <Link to={`/dashboard/blog/edit/${post._id}`}>
                  <button className="edit-btn2">Edit</button>
                </Link>
                <button className="delete-btn2" onClick={() => handleDelete(post._id, 'blog', setBlogPosts)}>Delete</button>
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
            <li key={post._id} className='dashboard_list'>
              <strong>{post.title}</strong> - {post.content}
              <div>
                <Link to={`/dashboard/offer/edit/${post._id}`}>
                  <button className="edit-btn2">Edit</button>
                </Link>
                <button className="delete-btn2" onClick={() => handleDelete(post._id, 'offer', setOffers)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;



