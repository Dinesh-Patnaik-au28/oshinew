import React from 'react';
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Home</h2>
      <button className="btn m-5" onClick={()=> navigate("./events")}>Events</button>
      <button className="btn m-5" onClick={()=> navigate("./blogs")}>Blogs</button>
    </div>
  )
}

export default Home