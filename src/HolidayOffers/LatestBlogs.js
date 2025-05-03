import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import './HolidayOffers.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: true,
    autoplay: true,
    centerMode: false,
    centerPadding: '0px',
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 992,
            settings: { slidesToShow: 2 }
        },
        {
            breakpoint: 600,
            settings: { slidesToShow: 1 }
        }
    ]
};

const LatestBlogs = () => {

    const [blogs, setBogs] = useState([])

    const baseurl = process.env.REACT_APP_API_URL

    async function fetchBlogs() {
        const fetchBlogPosts = await axios.get(`${baseurl}/api/blog/`);
        console.log(fetchBlogPosts)
        setBogs(fetchBlogPosts.data);
    }

    useEffect(() => {
        fetchBlogs()
    }, [])


    return (
        <div className="offers-container">
            <h2 className="offers-heading">
                Latest <span className="highlight">Blogs</span>
            </h2>
            {/* <p className="offers-subtext">
                {blogs?.[0]?.description}
            </p> */}

            <Slider {...settings}>
                {blogs.length !== 0 && blogs?.map((item, index) => (
                    <div key={index} className="offer-card">
                        <div className="image-wrapper">
                            <img src={item.url} alt={item.title} />
                        </div>
                        <div className="card-content-z">
                            <h4>{item.title}</h4>
                            <small className='descriptionblog'>{item?.description}</small>
                            <div className="price-row">
                                {/* <span className="original-price">₹{item.originalPrice}</span> */}
                                {/* <span className="offer-price">₹{item.offerPrice}</span> */}
                                {/* <span className="discount">({item.discount} off)</span> */}
                            </div>
                            <Link to={`/blogsinside?id=${item._id}`} className="view-button-kj">View More</Link>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default LatestBlogs;