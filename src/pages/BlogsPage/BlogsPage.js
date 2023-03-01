import React, { useState } from 'react';
import { Stack, Typography, Box, useMediaQuery } from "@mui/material";
import BlogCard from "./BlogCard";

import bgImage from "../../assets/images/banner.jpg"
import socialImage from "../../assets/images/social-life.jpg"
import politicsImage from "../../assets/images/politics.jpg"
import foodImage from "../../assets/images/food.jpg"
import blogs from "./blogs.json"
import Pagination from "./Pagination";



function BlogsPage() {
    const isMobile = Boolean(useMediaQuery("(max-width: 1000px)"));
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
        <Stack marginBottom={5}>
            {/* Heading */}
            <Stack
                alignItems="center"
                justifyContent="center"
                sx={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "50% 50%",
                    height: "500px",
                    width: "100%",
                }}
            >
            <Stack gap={1} alignItems="center">
                <Typography color="white" variant="h3">Our Blog</Typography>
                <Typography color="white" variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
            </Stack>
            </Stack>

            {/* Cards Container */}
            <Stack
                flexDirection={isMobile ? "column" : "row"}
                gap={3}
                justifyContent="center"
                m={10}
    
            >
                <Box sx={{ backgroundImage: `url(${socialImage})`,}} border="1px solid red" width="360px" height="220px" padding={3}>
                    <Stack
                        height="100%"
                        justifyContent="center"
                        alignItems="center"
                        gap={2}
                        sx={{ background: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))" }}
                    >
                        <Typography color="white">SOCIAL LIFE</Typography>
                        <Typography color="white" variant="body2" borderTop="1px solid white" paddingTop={2}>Enjoy your social life together</Typography>
                    </Stack>
                </Box>
                <Box sx={{ backgroundImage: `url(${politicsImage})`,}} border="1px solid red" width="360px" padding={3}>
                    <Stack
                        height="100%"
                        justifyContent="center"
                        alignItems="center"
                        gap={2}
                        sx={{ background: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))" }}
                    >
                        <Typography color="white">POLITICS</Typography>
                        <Typography color="white" variant="body2" borderTop="1px solid white" paddingTop={2}>Be a part of politics</Typography>
                    </Stack>
                </Box>
                <Box sx={{ backgroundImage: `url(${foodImage})`,}} border="1px solid red" width="350px" padding={3}>
                    <Stack
                        height="100%"
                        justifyContent="center"
                        alignItems="center"
                        gap={2}
                        sx={{ background: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))" }}
                    >
                        <Typography color="white">FOOD</Typography>
                        <Typography color="white" variant="body2" borderTop="1px solid white" paddingTop={2}>Let the food be finished</Typography>
                    </Stack>
                </Box>
            </Stack>

            {/* Blog Post Container */}
            <Stack width="58%" marginLeft={10}>
                <Stack gap={3}>
                    {currentPosts && currentPosts.map((blog, index)=> (
                        <BlogCard key={index} blog={blog} />
                    ))}
                </Stack>
                <Pagination postsPerPage={postsPerPage} totalPosts={blogs.length} paginate={paginate} />
            </Stack>

        </Stack>
    );
};

export default BlogsPage;

