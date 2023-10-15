import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const {pathname} = useLocation()

  const isActive = ()=>{
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  useEffect(()=>{
    window.addEventListener("scroll",isActive)

    return () =>{
      window.removeEventListener("scroll",isActive)
    }
  },[])

  const currentUser={
    id:1,
    username:"Siddiqui Tauseeb",
    isSeller:true
  }
  return (
    <div className={active || pathname !==  "/"  ? "navbar active" : "navbar"}>
      <div className="container"> 
        <div className="logo">
          <Link to="/" className="link">
          <span className="websiteName">SkillShareMarket</span>
          </Link>
        </div>
        <div className="links">
          <span>Bot</span>
          <span>Business</span>
          <span>English</span>
          <span>Explore</span>
          {!currentUser?.isSeller && (<span>Become a seller</span>)}
          {!currentUser && <span>Sign in</span>}
          {
            currentUser&&(
              <div className="user" onClick={()=>setOpen(!open)}>
              <img  className="profile-pic" src="./public/img/batman-1.jpg" alt="" />
                <span>{currentUser?.username}</span>
                { open &&( <div className="options">
                   {
                    currentUser?.isSeller && (
                      <>
                      <Link to="/mygigs" className="link">Gigs</Link >
                      <Link to="/add" className="link">Add new Gigs</Link>
                      </>
                      )
                   }
                   <Link to="/orders" className="link">Orders</Link>
                   <Link to="/messages" className="link">Messages</Link>
                   <Link to="/" className="link">Logout</Link>
                </div>)}
              </div>
            )
          }
          {!currentUser && <button>Join Us</button>}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link" to="/">
              Graphics & Design
            </Link>
            <Link className="link" to="/">
              Video & Animation
            </Link>
            <Link className="link" to="/">
              Writing & Translation
            </Link>
            <Link className="link" to="/">
              AI Services
            </Link>
            <Link className="link" to="/">
              Digital Marketing
            </Link>
            <Link className="link" to="/">
              Music & Audio
            </Link>
            <Link className="link" to="/">
              Programming & Tech
            </Link>
            <Link className="link" to="/">
              Business
            </Link>
            <Link className="link" to="/">
              Lifestyle
            </Link>
          </div>
        </>
      )
      }
    </div>
  );
};

export default Navbar;
