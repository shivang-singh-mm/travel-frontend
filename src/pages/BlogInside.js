import React, { useEffect, useState } from 'react';

import "./BlogInside.css";
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const destinations = [
  {
    id: 1,
    title: "The Majestic Himalayas",
    image: " https://media.istockphoto.com/id/1096035138/photo/beautiful-young-couple-relaxing-after-hiking-and-taking-a-break.jpg?s=612x612&w=0&k=20&c=iwNan7K7gbiIl2unv-9EuE5Yej-h_l1OrLNMel0husU=",
    description: "Experience the breathtaking beauty of the Himalayas, where towering snow-capped peaks touch the sky, offering a mesmerizing view that captivates every traveler. Home to ancient and serene monasteries, the region provides a spiritual retreat amidst nature’s grandeur. Adventurers can embark on exhilarating trekking routes, winding through lush valleys, dense pine forests, and glacial rivers. Whether you seek solitude, cultural immersion, or thrilling expeditions, the Himalayas offer an unparalleled escape into nature’s untouched splendor."
  },
];

function BlogInside() {
  const [blog, setBlogs] = useState([]);

  const baseurl = process.env.REACT_APP_API_URL

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");

  async function fetchBlogs() {
    const fetchBlogsRes = await axios.get(`${baseurl}/api/blog/${id}`);
    console.log(fetchBlogsRes.data)
    setBlogs(fetchBlogsRes.data);
  }

  useEffect(() => {
    fetchBlogs()
  }, [location.search])


  return (
    <div className="blog-container">
      <div className="column">
        {/* {blog.map((item) => ( */}
        <div key={blog.id} className="tittle-z blog-section">
          <h2>{blog.title}</h2>
          <img src={blog.url} alt={blog.title} className="blog-image" />
          <p>{blog.description}</p>
        </div>
        {/* ))} */}
      </div>
    </div>
  );
}

export default BlogInside;
