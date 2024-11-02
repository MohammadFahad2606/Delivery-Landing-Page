import { NavLink } from "react-router-dom";
import Button from "../common/Button/Button";
import "./Header.css";

const Header = () => {
  return (
    <div className="HeaderWapper">
      <div className="logo">
        <h1>Delivery</h1>
      </div>

      <div className="navbar">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            {/* <NavLink to={/about}/> */}
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact us</a>
            
          </li>
        </ul>
      </div>
      <div className="btn">
        <Button   text="Order now!" />
      </div>
    </div>
  );
};

export default Header;
