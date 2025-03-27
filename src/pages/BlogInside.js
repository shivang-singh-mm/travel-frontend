import React from 'react';
 
import "./BlogInside.css";

const destinations = [
  {
    id: 1,
    title: "The Majestic Himalayas",
    image: " https://media.istockphoto.com/id/1096035138/photo/beautiful-young-couple-relaxing-after-hiking-and-taking-a-break.jpg?s=612x612&w=0&k=20&c=iwNan7K7gbiIl2unv-9EuE5Yej-h_l1OrLNMel0husU=",
    description: "Experience the breathtaking beauty of the Himalayas, where towering snow-capped peaks touch the sky, offering a mesmerizing view that captivates every traveler. Home to ancient and serene monasteries, the region provides a spiritual retreat amidst nature’s grandeur. Adventurers can embark on exhilarating trekking routes, winding through lush valleys, dense pine forests, and glacial rivers. Whether you seek solitude, cultural immersion, or thrilling expeditions, the Himalayas offer an unparalleled escape into nature’s untouched splendor."
  },
];

function BlogInside() {
  return (
    <div className="blog-container">
      <div className="column">
        {destinations.map((destination) => (
          <div key={destination.id} className="tittle-z blog-section">
            <h2>{destination.title}</h2>
            <img src={destination.image} alt={destination.title} className="blog-image" />
            <p>{destination.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogInside;
