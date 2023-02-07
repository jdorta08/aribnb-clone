import logo from "../Images/logo.png";
const Navbar = () => {
  return (
    <div className="navigation">
      <nav>
        <img src={logo}></img>
        <span>airbnb</span>
      </nav>
    </div>
  );
};
export default Navbar;
