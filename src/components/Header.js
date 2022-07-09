import { Link } from "react-router-dom";
// import { CartState } from "../Context";
import "./styles.css";

const Header = () => {
//   const { cart } = CartState();

  return (
    <div>
      <span className="header">React Context API</span>
      <ul className="nav">
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;