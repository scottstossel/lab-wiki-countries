import { Navbar, Container } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">WikiCountries</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
