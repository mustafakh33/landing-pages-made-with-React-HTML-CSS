import "./About.css";
import nat1 from "../../assets/nat-1-large.jpg"
import nat2 from "../../assets/nat-2-large.jpg"
import nat3 from "../../assets/nat-3-large.jpg"


const About = () => {
  return (
    <section className="section-about ">
      <div className="container">
        <div className="first-title">
          <h2 className="heading-secondary">
            Exciting tours for adventurous people
          </h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="text-feature">
              <div className="text">
                <h3>You're going to fall in love with nature</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  labore aperiam quisquam facere perferendis rerum nihil
                  laudantium! Optio iusto.
                </p>
              </div>
              <div className="text">
                <h3> Live adventures like you never have before</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  labore aperiam quisquam facere perferendis rerum nihil
                  laudantium! Optio iusto.
                </p>
              </div>
              <a href="#" className="btn-text">
                Learn more →
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="image-feature d-flex">
                <img src={nat1} alt="" className="composition__photo composition__photo1" />
                <img src={nat2} alt="" className="composition__photo composition__photo2" />
                <img src={nat3} alt="" className="composition__photo composition__photo3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
