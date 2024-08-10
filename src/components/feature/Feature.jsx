import { CiHeart } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
import { CiMap } from "react-icons/ci";
import { IoCompassOutline } from "react-icons/io5";
import "./Feature.css";

const Feature = () => {
  return (
    <section className="section-feature">
      <div className="container">
        <div className="row g-4">
          <div className=" col-12 col-md-4 col-lg-3 ">
            <div className="feature-box">
              <TbWorld />
              <h3>Explore the world</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Facilis eveniet maiores molestiae.
              </p>
            </div>
          </div>
          <div className=" col-12 col-md-4 col-lg-3 ">
            <div className="feature-box">
              <IoCompassOutline />
              <h3>Explore the world</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Facilis eveniet maiores molestiae.
              </p>
            </div>
          </div>
          <div className=" col-12 col-md-4 col-lg-3 ">
            <div className="feature-box">
              <CiMap />
              <h3>Explore the world</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Facilis eveniet maiores molestiae.
              </p>
            </div>
          </div>
          <div className=" col-12 col-md-4 col-lg-3 ">
            <div className="feature-box">
              <CiHeart />
              <h3>Explore the world</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Facilis eveniet maiores molestiae.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
