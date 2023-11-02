import ".././App.css";
import React, { useEffect } from "react";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faLandmark } from "@fortawesome/free-solid-svg-icons";
import { faCompassDrafting } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Services() {
  useEffect(() => {
    const servicesSection = document.querySelector("#services");

    const fadeInServices = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          servicesSection.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      });
    };

    const optionsServices = {
      threshold: 0.5,
      once: true,
    };

    const observerServices = new IntersectionObserver(fadeInServices, optionsServices);
    observerServices.observe(servicesSection);
  }, []);

  return (
    <div id="services">
      <div className="container">
        <h1 className="sub-title">My Services</h1>
        <div className="services-list">
          <div id="services-detail">
            <span>
              <FontAwesomeIcon icon={faHome} size="2xl" />
            </span>
            <div>
              <h2>Interior Design</h2>
            </div>
            <div>
              <p>Not only are we beautiful and elegant, but we may also add comfort to your family's house.</p>
            </div>
            <a href="#">Learn More</a>
          </div>
          <div id="services-detail">
            <span>
              <FontAwesomeIcon icon={faCompassDrafting} size="2xl" />
            </span>
            <div>
              <h2>Architecture Freelance</h2>
            </div>
            <div>
              <p>If you need architectural services or want to do a design consultation I'm ready to serve you and give you my design ideas.</p>
            </div>
            <a href="#">Learn More</a>
          </div>
          <div id="services-detail">
            <span>
              <FontAwesomeIcon icon={faLandmark} size="2xl" />
            </span>
            <div>
              <h2>Architecture Commercial</h2>
            </div>
            <div>
              <p>Commercial design that is creative, efficient company space, and the greatest architectural solution.</p>
            </div>
            <div>
              <a href="#">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
