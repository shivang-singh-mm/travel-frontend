import React, { useState } from 'react';
import "./Blog.css";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import Carousel from "../Carousel/Carousel";
function Blog() {
  const [sections, setSections] = useState([])

  const baseurl = process.env.REACT_APP_API_URL

  async function fetchBlogs() {
    const fetchBlogPosts = await axios.get(`${baseurl}/api/blog/`);
    setSections(fetchBlogPosts.data);
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  return (
    <>
      <div className="container mt-5">
        <h2 className="tittle-z text-center mb-4">Travel Blog</h2>
        <div key={3} className="mb-5 p-4" style={{ backgroundColor: "whitesmoke", borderRadius: "10px" }}>
          <h3 className="text-center mb-3">Latest Blog Posts</h3>
          <div className="row">

            {sections.map((post) => (
              <div key={post.id} className="col-md-6 mb-4">
                <div className="card">
                  <Link to={`/blogsinside?id=${post._id}`}>
                    <img src={post.url} className="card-img-top" alt={post.title} />
                  </Link>
                  <div className="card-body">
                    <Link to={`/blogsinside?id=${post._id}`}>
                      <h5 className="card-title">{post.title}</h5>
                    </Link>
                    <p className="card-text descriptionblog">{post.description}</p>
                    <Link to={`/blogsinside?id=${post._id}`} className="read-more">Read More</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* ))} */}
      </div>
      <Carousel />
    </>
  );
}

export default Blog;
