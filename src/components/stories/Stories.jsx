import "./Stories.css";
import video from "../../assets/video.mp4";
import imagestory from "../../assets/nat-8.jpg";
import imagestory2 from "../../assets/nat-9.jpg";

const Stories = () => {
  return (
    <section className="section-stories">
      <div className="bg-video">
        <video
          className="bg-video-content"
          src={video}
          autoPlay
          loop
          muted
        ></video>
      </div>
      <div className="container">
        <div className="row justify-content-center g-5">
          <div className="col-12 col-lg-8">
            <div className="story">
              <div className="story-shape">
                <img
                  src={imagestory}
                  alt="Person on a tour"
                  className="story-img"
                />
                <span className="story-caption">Marry smith</span>
              </div>

              <div className="story-text">
                <h3>I had the best week ever with my family</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  labore aperiam quisquam facere perferendis rerum nihil
                  laudantium! Optio iusto. labore aperiam quisquam facere
                  perferendis rerum nihil laudantium! Optio iusto.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <div className="story">
              <div className="story-shape">
                <img
                  src={imagestory2}
                  alt="Person on a tour"
                  className="story-img"
                />
                <span className="story-caption">Jack Wilson</span>
              </div>

              <div className="story-text">
                <h3>I had the best week ever with my family</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  labore aperiam quisquam facere perferendis rerum nihil
                  laudantium! Optio iusto. labore aperiam quisquam facere
                  perferendis rerum nihil laudantium! Optio iusto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-stories">
        <a href="#" className="btn-text">
          Read all stories →
        </a>
      </div>
    </section>
  );
};

export default Stories;
