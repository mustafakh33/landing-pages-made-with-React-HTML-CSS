import "./Tours.css";

const Tours = () => {
  return (
    <section className="section-tours">
      <div className="container">
        <div className="first-title">
          <h2 className="heading-secondary">Most popular tours</h2>
        </div>
        <div className="row align-items-center justify-content-center g-5">
          <div className="col-lg-4 col-md-6">
            <div className="card-tours">
              <div className="card-side">
                <div className="card-tours-image card-tours-image1"></div>
                <div className="card-tours-text">
                  <span className="card-span card-span1">
                    {" "}
                    The sea explorer
                  </span>
                </div>
                <div className="card-tours-list">
                  <ul>
                    <li>3 day tours</li>
                    <li>Up to 30 peaple</li>
                    <li>2 tour guides</li>
                    <li>Sleep in cozy hotels</li>
                    <li>Difficulty: Easy</li>
                  </ul>
                </div>
              </div>
              <div className="card-side card-side-back card-side-back-1">
                <div className="card-back">
                  <div className="card-price-box">
                    <p className="card-price-only">Only</p>
                    <p className="card-price-value">$297</p>
                  </div>
                  <a href="#" className="btn">
                    Book now!
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card-tours">
              <div className="card-side">
                <div className="card-tours-image card-tours-image2"></div>
                <div className="card-tours-text">
                  <span className="card-span card-span2">The Forst hiker</span>
                </div>
                <div className="card-tours-list">
                  <ul>
                    <li>7 day tours</li>
                    <li>Up to 40 peaple</li>
                    <li>6 tour guides</li>
                    <li>Sleep in provided tents</li>
                    <li>Difficulty: medium</li>
                  </ul>
                </div>
              </div>
              <div className="card-side card-side-back card-side-back-2">
                <div className="card-back">
                  <div className="card-price-box">
                    <p className="card-price-only">Only</p>
                    <p className="card-price-value">$497</p>
                  </div>
                  <a href="#" className="btn">
                    Book now!
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card-tours">
              <div className="card-side">
                <div className="card-tours-image card-tours-image3"></div>
                <div className="card-tours-text">
                  <span className="card-span card-span3">The Forst hiker</span>
                </div>
                <div className="card-tours-list">
                  <ul>
                    <li>5 day tours</li>
                    <li>Up to 15 peaple</li>
                    <li>3 tour guides</li>
                    <li>Sleep in provided tents</li>
                    <li>Difficulty: hard</li>
                  </ul>
                </div>
              </div>
              <div className="card-side card-side-back card-side-back-3">
                <div className="card-back">
                  <div className="card-price-box">
                    <p className="card-price-only">Only</p>
                    <p className="card-price-value">$897</p>
                  </div>
                  <a href="#" className="btn">
                    Book now!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a className="btn btn-green" href="#">
            Discover all tours
          </a>
        </div>
      </div>
    </section>
  );
};

export default Tours;
