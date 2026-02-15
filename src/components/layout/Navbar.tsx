import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='container nav-content'>
        <h1 className='logo'>SSRC</h1>
        <div className='nav-links'>
          <a href='#'>Home</a>
          <a href='#'>Services</a>
          <a href='#'>About</a>
          <a href='#'>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
