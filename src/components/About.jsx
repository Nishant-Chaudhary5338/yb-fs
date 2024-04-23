import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Our journey began with a passion for crafting exceptional cuisine using only the freshest,
            locally sourced ingredients. Inspired by both traditional recipes and modern culinary techniques, our menu showcases
            a harmonious blend of flavors that celebrate the richness of our region while offering a unique twist on beloved classics.
            </p>
            {/* <Link to={"/"}> */}
              {/* Explore Menu{" "} */}
              {/* <span>
                <HiOutlineArrowRight />
              </span> */}
            {/* </Link> */}
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
