import React, { useState } from 'react';
import { Box, Stack } from "@mui/material";


function Pagination({ postsPerPage, totalPosts, paginate }) {
    const pageNumbers = [];
    const [pageStartIndex, setPageStartIndex] = useState(1);
    const [pageEndIndex, setPageEndIndex] = useState(5)

    for (let i=1; i<=Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    };

    const resetPageStartIndex = ()=> {
        if (pageStartIndex > 1) {
            setPageStartIndex(pageStartIndex - 5)
        };
    };

    const resetPageEndIndex = ()=> {
        if (pageEndIndex < pageNumbers-5) {
            setPageEndIndex(pageEndIndex + 5)
        };
    };


    return (
        <Stack direction="row" marginX="auto" marginY={4}>
        <button onClick={()=> resetPageStartIndex()} style={paginateButton}>{"<"}</button>
        {pageNumbers.map((number)=> (
            (number >= pageStartIndex && number <= pageEndIndex) && (
            <Box key={number}>
                <button style={paginateButton} onClick={()=> paginate(number)}>{number}</button>
            </Box>)
        ))}
        <button onClick={()=> resetPageEndIndex()} style={paginateButton}>{">"}</button>
        </Stack>
    );
};

export default Pagination;

const paginateButton = {
    margin: "2px",
    paddingBottom: "2px",
    width: "36px",
    height: "28px"
}

