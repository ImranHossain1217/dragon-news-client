import React, { useContext } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import LeftSideNav from "./LeftSideNav";
import Button from "react-bootstrap/Button";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
  };
  return (
    <div className="mb-5">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Dragon News</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link className="text-decoration-none text-primary" to="/">
                  All News
                </Link>
              </Nav.Link>
              <Nav.Link href="#pricing" className="text-primary">
                Pricing
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                {user?.photoURL ? (
                  <Image
                    src={user.photoURL}
                    roundedCircle
                    style={{ height: "30px" }}
                  ></Image>
                ) : (
                  <FaUserAlt></FaUserAlt>
                )}
              </Nav.Link>
              <Nav.Link>{user?.displayName}</Nav.Link>
              <Nav.Link>
                {user ? (
                  <Button onClick={handleLogOut} variant="light">
                    Log Out
                  </Button>
                ) : (
                  <>
                    <Button variant="primary" className="me-2">
                      <Link
                        to="/login"
                        className="text-white text-decoration-none"
                      >
                        Log In
                      </Link>
                    </Button>
                    <Button variant="primary">
                      <Link
                        to="/rrgister"
                        className="text-white text-decoration-none"
                      >
                        Register
                      </Link>
                    </Button>
                  </>
                )}
              </Nav.Link>
            </Nav>
            <div className="d-lg-none">
              <LeftSideNav></LeftSideNav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
