import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5  text-xl ">
              Are you a tourist, want some hotels. Exactly you are in perfect
              place. We provide you a best hotel nears you and give the best
              discount as much as possible.
            </p>
            <Link to="/view-hotels">
              <button className="btn btn-neutral">View Hotels</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
