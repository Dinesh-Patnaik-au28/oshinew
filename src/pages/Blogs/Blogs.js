import React, { useState } from 'react';
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";

import bgImage from "../../assets/images/banner.jpg"
import socialImage from "../../assets/images/social-life.jpg"
import politicsImage from "../../assets/images/politics.jpg"
import foodImage from "../../assets/images/food.jpg"
import blogs from "../BlogsPage/blogs.json"



function BlogsPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(2);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost)

    // Change page
    const paginate = (pageNumber)=> {
        setCurrentPage(pageNumber)
    };
    

    return (
        <div className="mb-5">
            {/* Heading */}
            <div
                className="w-full flex items-center justify-center"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "50% 50%",
                    height: "500px",
                }}
            >
            <div className="flex flex-col items-center gap-1 sm:p-3">
                <p className="text-5xl text-white">Our Blog</p>
                <p className="text-base text-white">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            </div>

            {/* Cards Container */}
            <div className={`flex sm:flex-col gap-5 justify-center m-8`}>
                <div className="p-5 w-90 sm:w-full" style={{ backgroundImage: `url(${socialImage})`, height:"220px"}}>
                    <div
                        className="h-full flex flex-col gap-2 justify-center items-center divide-y"
                        style={{ background: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))" }}
                    >
                        <p className="text-white text-lg">SOCIAL LIFE</p>
                        <p className="text-white text-sm pt-3">Enjoy your social life together</p>
                    </div>
                </div>
                <div className="p-5 w-90 sm:w-full" style={{ backgroundImage: `url(${politicsImage})`, height:"220px"}}>
                    <div
                        className="h-full flex flex-col gap-2 justify-center items-center divide-y"
                        style={{ background: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))" }}
                    >
                        <p className="text-white text-lg">POLITICS</p>
                        <p className="text-white text-sm pt-3">Be a part of politics</p>
                    </div>
                </div>
                <div className="p-5 w-90 sm:w-full" style={{ backgroundImage: `url(${foodImage})`, height:"220px"}}>
                    <div
                        className="h-full flex flex-col gap-2 justify-center items-center divide-y"
                        style={{ background: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))" }}
                    >
                        <p className="text-white text-lg">FOOD</p>
                        <p className="text-white text-sm pt-3">Let the food be finished</p>
                    </div>
                </div>
            </div>

            {/* Blog Post Container */}
            <div className="w-3/5 sm:w-10/12 sm:ml-8 ml-16">
                <div className="flex flex-col gap-10">
                    {currentPosts && currentPosts.map((blog, index)=> (
                        <BlogCard key={index} blog={blog} />
                    ))}
                </div>
                <Pagination postsPerPage={postsPerPage} totalPosts={blogs.length} paginate={paginate} currentPage={currentPage} />
            </div>

        </div>
    );
};

export default BlogsPage;

