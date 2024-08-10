import "./Header.css";
import logo from "../../assets/logo-white.png";

const Header = () => {
  return (
    <header className="header">
      <div className="row">
        <div className="col-12">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-12 text-center">
          <div className="text_header">
            <h1>Outdoors</h1>
            <p>is where life happens</p>
            <a className="btn btn-animation" href="#">
              Discover our tours
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
