import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';
import axios from 'axios';
import { color } from 'framer-motion';

function BasicExample() {
  const [expanded, setExpanded] = useState(false); // Navbar toggle state
  const [packages, setPackages] = useState([]);

  const baseurl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    async function fetchPackages() {
      try {
        const response = await axios.get(`${baseurl}/api/tour`);
        setPackages(response.data);
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    }
    fetchPackages();
  }, []);

  return (
    <Navbar expanded={expanded} expand="lg" className="custom-navbar fixed-top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand">
          Angel Destination
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link" style={{ color: 'white' }} onClick={() => setExpanded(false)}>HOME</Nav.Link>
            <Nav.Link as={Link} to="/aboutus" className="nav-link" style={{ color: 'white' }} onClick={() => setExpanded(false)}>ABOUT US</Nav.Link>
            <Nav.Link as={Link} to="/blogs" className="nav-link" style={{ color: 'white' }} onClick={() => setExpanded(false)}>BLOGS</Nav.Link>
            <NavDropdown
  title="Packages"
  id="basic-nav-dropdown"
  className="dropdown-hover"
  style={{ color: 'white' }}
>
  {packages.length === 0 ? (
    <NavDropdown.Item style={{ color: 'white' }} disabled>
      Loading...
    </NavDropdown.Item>
  ) : (
    packages.map((data) => (
      <NavDropdown.Item
        key={data.id}
        as={Link}
        to={`/city?id=${data.id}`}
        style={{ color: 'white' }}
        onClick={() => setExpanded(false)}
      >
        {data.city}
      </NavDropdown.Item>
    ))
  )}
</NavDropdown>

            <Nav.Link as={Link} to="/offers" className="nav-link" style={{ color: 'white' }} onClick={() => setExpanded(false)}>OFFERS</Nav.Link>
            <Nav.Link as={Link} to="/contactus" className="nav-link" style={{ color: 'white' }} onClick={() => setExpanded(false)}>CONTACT US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;

