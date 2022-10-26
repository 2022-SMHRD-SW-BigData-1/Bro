import "../styles/Header.scss";
import searchIcon from "../images/searchIcon.png";
import logo from "../images/jobsnsLogo.png";
import Redapple from "../images/Redapple.png";
import Greenapple from "../images/Greenapple.png";

function Header() {
  return (
    <div className="navigation">
      <div className="container">
        <div className="container_Logo">
          <img className="logo" src={logo} alt="Jobsns logo" />
        </div>
        <div className="container_Status">
          <img className="Status" src={Redapple} alt="Status" />
        </div>
        <div className="container_Special">
          <img className="Special" src={Greenapple} alt="Special" />
        </div>
        <div className="search">
          <img className="searchIcon" src={searchIcon} alt="Search icon" />
          <span className="searchText">Search</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
