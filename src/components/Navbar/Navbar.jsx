import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";


import { FaFolderOpen } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";


const NavBar = () => {

  const auth = getAuth();
  const navigate = useNavigate();
  const [expand, setExpand] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [profileLink, setProfileLink] = useState("/login");

  // fixed Header
  function scrollHandler() {
    if (window.scrollY >= 100) {
      setIsFixed(true);
    } else if (window.scrollY <= 50) {
      setIsFixed(false);
    }
  }
  window.addEventListener("scroll", scrollHandler);



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setProfileLink("/profile"); // Set profile link if authenticated
      } else {
        setProfileLink("/login"); // Set login link if not authenticated
      }
    });

    return unsubscribe;
  }, [auth]);


  return (
    <Navbar
      fixed="top"
      expand="md"
      className={isFixed ? "navbar fixed" : "navbar"}
    >
      <Container className="navbar-container">
        <Navbar.Brand to="/">
          <ion-icon name="bag"></ion-icon>
          <h1 className="logo">Digital Project Hub</h1>
        </Navbar.Brand>
        {/* Media icon and toggle */}
        <div className="d-flex">
          <div className="media-icon">

            <Link to={profileLink} className="login" >
              {/* Home Icon Button for authenticated users */}
              <IoPersonSharp color="black" />
              <div style={{ marginBottom: "8px" }}></div>
            </Link>


            <Link
              aria-label="Go to My Projects Page"
              to="/my-projects"
              className="my-projects"

            >
              <FaFolderOpen color="black" />
              <div style={{ marginBottom: "8px" }}></div>

            </Link>
          </div>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => {
              setExpand(expand ? false : "expanded");
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Item>
              <Link
                aria-label="Go to Home Page"
                className="navbar-link"
                to="/"
                onClick={() => setExpand(false)}
              >
                <span className="nav-link-label">Home</span>
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link
                aria-label="Go to Shop Page"
                className="navbar-link"
                to="/shop"
                onClick={() => setExpand(false)}
              >
                <span className="nav-link-label">Shop</span>
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link
                aria-label="Go to Listing Page"
                className="navbar-link"
                to="/listing"
                onClick={() => setExpand(false)}
              >
                <span className="nav-link-label">Sell</span>
              </Link>
            </Nav.Item>


            <Nav.Item className="expanded-icons">

              <Link to={profileLink} className="login" >
                {/* Home Icon Button for authenticated users */}
                <IoPersonSharp color="black" />
                <div style={{ marginBottom: "8px" }}></div>
              </Link>

              <Link
                aria-label="Go to My Projects Page"
                to="/my-projects"
                className="my-projects"

              >
                <FaFolderOpen color="black" />
                <div style={{ marginBottom: "8px" }}></div>
              </Link>

            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
