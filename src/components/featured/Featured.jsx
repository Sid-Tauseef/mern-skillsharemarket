// import React from "react";
// import "./Featured.css";

// const Featured = () => {
//   return (
//     <div className="featured">
//       <div className="container">
//           {/* <img  className="featured-background" src="./public/img/background-laptop.jpg" alt="" /> */}
//           {/* https://unsplash.com/s/photos/portfolio-background */}
//         <div className="left">
//           <h1>Find the perfect <i>freelance</i> services for your Businesses.</h1>
//           <div className="search">
//             <div className="searchInput">
//               <img className="searchIcon" src="./public/icons/search1.png" alt="" />
//               <input
//                 type="text"
//                 name=""
//                 id=""
//                 placeholder='Try "Building Mobile App" '
//               />
//             </div>
//             <button className="searchButton">Search</button>
//           </div>
//           <div className="popular">
//             <span>Popular:</span>
//             <button>Web Design</button>
//             <button>Word Press</button>
//             <button>Logo Design</button>
//             <button>AI services</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Featured;




import React, { useState } from "react";
import "./Featured.css";
import { useNavigate } from "react-router-dom";

function Featured() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/gigs?search=${input}`);
  };
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1 className="text first-text">
            Find the perfect <span className="text sec-text">freelance</span> services for your business
          </h1>
          {/* <div className="text">
            <h1 className="text first-text">Find the perfect &nbsp;</h1>
            <h1 className="text sec-text">  freelance  </h1>
            <h1 className="text third-text">&nbsp;services for your business</h1>
          </div> */}
          <div className="search">
            <div className="searchInput">
              <img src="./public/icons/search1.png" alt="" />
              <input
                type="text"
                placeholder='Try "building mobil app"'
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>WordPress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
          <img src="./public/img/background-laptop.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;
