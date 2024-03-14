import React from "react";
import "./ThankYou.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";


const ThankYou = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Scroll to top when courseId changes
  return (
    <>
    <section className=" bg-black">
    <main className="thank-you-container min-h-screen bg-black w-full text-white grid place-content-center place-items-center justify-center  items-center">
      <img className="thank-you-img" src="https://res.cloudinary.com/dhuagtzvw/image/upload/v1709636124/images/zl2h2wvf6towy1wplzlt.png" alt="img"></img>
      <h1 className="thank-you-h1">Thank You for Contacting us!</h1>
      <div className="thank-you-h2">
        We have received your message
        <br></br>
        We"ll reach you out immediately
      </div>
     <Link to={"/"}> <button className="thank-you-btn">Go Home</button> </Link>
      <h3>Lets Connect</h3>
      <div className="thank-you-social">
          <a href="#">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
    </main>
    </section>   
    </>
  );
};

export default ThankYou;
