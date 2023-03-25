import React from 'react';
import { Box } from "@mui/material";
import { PersonOutline, CalendarMonthOutlined, VisibilityOutlined, ChatBubbleOutline } from "@mui/icons-material";


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

    return (
        <div className={`flex sm:flex-col gap-3 justify-end`}>
            <div className="flex flex-col gap-2 w-3/12 sm:w-full items-end sm:items-start">
                <p className="text-xs">{blog.tags.join(", ")}</p>

                <p className="text-xs">{blog.author} <PersonOutline fontSize="small" /> </p>

                <p className="text-xs">
                    {convertDate(blog.date)}
                    <CalendarMonthOutlined fontSize="small" />
                </p>

                <p className="text-xs">
                    {convertNum(blog.views)} Views
                    <VisibilityOutlined fontSize="small" />
                </p>

                <p className="text-xs">
                    {blog.comments} Comments
                    <ChatBubbleOutline fontSize="small" />
                </p>
            </div>
            
            <div className="flex flex-col justify-between w-9/12 sm:w-full">
                <div className="w-full" style={{height: "280px"}}>
                    <img className="w-full h-full" src={blog.image} alt="blog_image" />
                </div>
                <div className="flex flex-col gap-2 mt-2">
                    <p className=" text-2xl font-bold" fontWeight="bold" variant="h5">{blog.title}</p>
                    <p>{blog.description}</p>
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
                    
                </div>
            </div>
        </div>
    );
};

export default BlogCard;

