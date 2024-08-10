import "./Book.css";

const Book = () => {
  return (
    <section className="section-book">
      <div className="container">
        <div className="bg">
          <div className="overlay"></div>
          <div className="book-form">
            <form>
              <div className="first-title">
                <h2 className="heading-secondary">Most popular tours</h2>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full name"
                  className="form-input"
                  required=""
                />
                <label className="form-label">Full name</label>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="E-mail"
                  className="form-input"
                />
                <label className="form-label">E-mail</label>
              </div>
              <div className="form-group">
                <div className="form-radio-group">
                  <input
                    type="radio"
                    name="size"
                    className="form-radio-input"
                    id="small"
                  />
                  <label htmlFor="small" className="form-radio-label">
                    <span className="form-radio-button"></span>
                    Small tour group
                  </label>
                </div>
                <div className="form-radio-group">
                  <input
                    type="radio"
                    name="size"
                    className="form-radio-input"
                    id="large"
                  />
                  <label htmlFor="large" className="form-radio-label">
                    <span className="form-radio-button"></span>
                    Large tour group
                  </label>
                </div>
              </div>
              <div className="form-group">
                <button className="btn btn-green">Next step →</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
