import React, { useState } from 'react';
import "./Blog.css";
import { Link } from 'react-router-dom';
function Blog() {
  const [sections] = useState([
    {
      id: 3,
      title: "Latest Blog Posts",
      bgColor: "#fff3cd",
      posts: [
        {
          id: 5,
          title: "SkywayTour India Blog",
          image: "https://www.skywaytour.com/media/gallery/2025-02-28-01-55-36-lehladakh.jpg",
          description: "Experience the thrill of the wild with a safari in Kenya. Spot lions, elephants, and more in their natural habitat.",
        },
        {
          id: 6,
          title: "North India Tour Package - North India Holiday - Trip to North India",
          image: "https://vardhmanvacations.com/north-india-tours/img/north-india-tours-packages-1.jpg",
          description: "Explore the dense Amazon rainforest and encounter diverse wildlife and indigenous cultures.",
        },
        {
          id: 6,
          title: "North India Tour Package - North India Holiday - Trip to North India",
          image: "https://vardhmanvacations.com/north-india-tours/img/north-india-tours-packages-1.jpg",
          description: "Explore the dense Amazon rainforest and encounter diverse wildlife and indigenous cultures.",
        },
        {
          id: 6,
          title: "North India Tour Package - North India Holiday - Trip to North India",
          image: "https://vardhmanvacations.com/north-india-tours/img/north-india-tours-packages-1.jpg",
          description: "Explore the dense Amazon rainforest and encounter diverse wildlife and indigenous cultures.",
        },
      ],
    },
  ]);

  return (
    <div className="container mt-5">
      <h2 className="tittle-z text-center mb-4">Travel Blog</h2>
      {sections.map((section) => (
        <div key={section.id} className="mb-5 p-4" style={{ backgroundColor: section.bgColor, borderRadius: "10px" }}>
          <h3 className="text-center mb-3">{section.title}</h3>
          <div className="row">

            {section.posts.map((post) => (
              <div key={post.id} className="col-md-6 mb-4">
                <Link to='/blogsinside'>
                  <div className="card">
                    <img src={post.image} className="card-img-top" alt={post.title} />
                    <div className="card-body">
                      <h5 className="card-title">{post.title}</h5>
                      <p className="card-text">{post.description}</p>
                    </div>
                  </div></Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blog;
