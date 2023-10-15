import React from "react";
import "./Home.css";
import Slide from "../../components/slider/Slide";
import { cards, projects } from "../../data";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedby/TrustedBy";
import { Slider } from "infinite-react-carousel";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} item={card} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src="./public/img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./public/img/check.png" alt="" />
              Quality work done quickly
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
            <div className="title">
              <img src="./public/img/check.png" alt="" />
              Protected payments, every time
            </div>
            <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
            <div className="title">
              <img src="./public/img/check.png" alt="" />
              24/7 support
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="item">
            <video src="./public/video/video2.mp4" controls />
          </div>
        </div>
      </div>

      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>SkillShareBusinesses</h1>
            <h2>Explore our businesses and join to get best services.</h2>
            <p>
              Upgrade to a curated experience packed with tools and benefits, dedicated to businesses.
            </p>
            <div className="title">
              <img src="./public/img/check.png" alt="" />
                Connect to freelancer with proven business experience            
            </div>
            <div className="title">
              <img src="./public/img/check.png" alt="" />
                Get matched with the perfect talents.            
            </div><div className="title">
              <img src="./public/img/check.png" alt="" />
                Manage teamwork and boost productivity with one powerful workspace.            
            </div>
            <button className="business-explore-button">Explore Our Businesses</button>
          </div>
          <div className="item">
            <img className="clean-desk-image" src="./public/img/cleanDesk.jpg" alt="" />
          </div>
        </div>
      </div>

      <Slide slidesToShow={4} arrowsScroll={4}>
      {projects.map((card) =>(
        <ProjectCard key={card.id} item={card}/>
      ))}

      </Slide>
    </div>
  );
};

export default Home;
