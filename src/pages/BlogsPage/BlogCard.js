import React from 'react';
import { Stack, Box, Typography, useMediaQuery, Button, Card } from "@mui/material";
import { PersonOutline, CalendarMonthOutlined, VisibilityOutlined, ChatBubbleOutline } from "@mui/icons-material";
import { borderRadius } from "@mui/system";


const convertDate = (date)=> {
    const formatedDate = new Date(date);
    return formatedDate.toDateString();
};

const convertNum = (num, digits)=> {
    const si = [
      { value: 1, symbol: "" },
      { value: 1E3, symbol: "K" },
      { value: 1E6, symbol: "M" },
      { value: 1E9, symbol: "G" },
      { value: 1E12, symbol: "T" },
      { value: 1E15, symbol: "P" },
      { value: 1E18, symbol: "E" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;

    // for negative value is work
    let i;
    for (i = si.length - 1; i > 0; i--) {
      if (Math.abs(num) >= si[i].value) {
        break;
      }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
};

function BlogCard({ blog }) {
    const isMobile = Boolean(useMediaQuery("(max-width: 1000px)"));

    return (
        <Stack flexDirection={isMobile ? "column" : "row"} gap={2} justifyContent="space-between" padding={1}>
            <Stack gap={2} marginTop={3} textAlign="right">
                <Typography variant="body2">
                    {blog.tags.join(", ")}
                </Typography>

                <Typography variant="body2">{blog.author} <PersonOutline fontSize="small" /> </Typography>

                <Typography variant="body2">
                    {convertDate(blog.date)}
                    <CalendarMonthOutlined fontSize="small" />
                </Typography>

                <Typography variant="body2">
                    {convertNum(blog.views)} Views
                    <VisibilityOutlined fontSize="small" />
                </Typography>

                <Typography variant="body2">
                    {blog.comments} Comments
                    <ChatBubbleOutline fontSize="small" />
                </Typography>
            </Stack>
            
            <Stack width="740px" gap={2} justifyContent="space-between">
                <Card sx={{
                    height: "280px",
                    width: "100%"
                }}>
                    <img src={blog.image} alt="blog_image" />
                </Card>
                <Stack gap={2}>
                    <Typography fontWeight="bold" variant="h5">{blog.title}</Typography>
                    <Typography>{blog.description}</Typography>
                    <Box>
                        <button style={{
                            fontSize: "14px",
                            background:"#eeee",
                            padding: "5px",
                            paddingLeft: "30px",
                            paddingRight: "30px"}}
                        >
                        View More
                        </button>
                    </Box>
                    
                </Stack>
            </Stack>
        </Stack>
    );
};

export default BlogCard;

