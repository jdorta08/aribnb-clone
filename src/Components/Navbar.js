import logo from "../Images/logo.png";
const Navbar = () => {
  return (
    <div className="navigation inner-section">
      <nav>
        <img src={logo}></img>
        <span>airbnb</span>
      </nav>
    </div>
  );
};
export default Navbar;
