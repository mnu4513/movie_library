import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../../index.css';
import { useEffect, useState } from 'react';



function NavScrollExample() {

  const [loggedIn, setLoggedIn] = useState(true);

  useEffect(() => {

  }, [loggedIn]);

  function logout () {
    localStorage.clear();
    setLoggedIn(false);
  };

  return (
    <Navbar bg="light" expand="lg" className='navbar'>
      <Container fluid>
        <Navbar.Brand to="/"><img src='data:image/png;base64,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' width={70} height={40} /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link to="/home">Home</Nav.Link>
            {/* <Nav.Link to="/action2"> {user.name} </Nav.Link> */}
            <NavDropdown title="Movies" id="navbarScrollingDropdown">
              <NavDropdown.Item as={NavLink} to="/popular-movies" >Popular</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/top-rated-movies"> Top Rated </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/upcoming-movies"> Upcoming </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/now-playing-movies"> Now Playing </NavDropdown.Item>


              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/fav-movies">
                Favorite
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/public-list" > Public List</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link to="/" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            {/* <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            /> */}

            {/* <Button variant="outline-success">Search</Button> */}

            <h4 className='mx-3'> {localStorage.getItem('name')} </h4>
            {
              !localStorage.getItem('isLoggedIn') ? 
              <Button variant="outline-success" as={NavLink} to='/login'>Login</Button> : 
              <Button variant="outline-success" type='submit' onClick={() => logout()} >Logout</Button>
            }
            {/* <Button variant="outline-success" as={NavLink} to='/register'>Register</Button> */}

          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavScrollExample;