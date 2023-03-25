import React, { useState } from 'react';


function Pagination({ postsPerPage, totalPosts, paginate, currentPage }) {
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
        <div className="place-content-center flex my-8">
        <button className="pagination-btn" style={paginateButton} onClick={()=> resetPageStartIndex()}>{"<"}</button>
        {pageNumbers.map((number)=> (
            (number >= pageStartIndex && number <= pageEndIndex) && (
            <div key={number}>
                <button className={`pagination-btn ${number === currentPage ? "focused-btn" : ""}`} style={paginateButton} onClick={()=> paginate(number)}>{number}</button>
            </div>)
        ))}
        <button className="pagination-btn" style={paginateButton} onClick={()=> resetPageEndIndex()}>{">"}</button>
        </div>
    );
};

export default Pagination;

const paginateButton = {
    margin: "2px",
    paddingBottom: "2px",
    width: "36px",
    height: "28px",
}

