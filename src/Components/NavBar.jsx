import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Navbar collapseOnSelect expand="md" bg="light" variant="light">
      <Link to="/">
        <Navbar.Brand href="#">HOME</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link>
            <div
              className={
                location.pathname === "/about" ? " nav-link active" : "nav-link"
              }
            >
              ABOUT
            </div>
          </Link>
          <Link>
            <div className="nav-link">BROWSE</div>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
