import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function MyNavbar({pageChange,setLoginUser,loginUser}) {
  function logout(){
    setLoginUser(null)
  }
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Mind-APP</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link onClick={()=>pageChange('home')}>Home</Nav.Link>
                  <NavDropdown
                    title="My Stories"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item onClick={()=>pageChange('bookmark')}>Bookmark</NavDropdown.Item>
                    <NavDropdown.Item onClick={()=>pageChange('MyStories')}>
                      My Writing
                    </NavDropdown.Item>
                    
                  </NavDropdown>
                  {loginUser?
                    <Nav.Link href="#" disabled>{loginUser}</Nav.Link>:null
                  }
                  
                </Nav>
                  {!loginUser?
                    <Button variant="outline-success" onClick={()=>pageChange('login')}>Login</Button>
                    :<Button variant="outline-success" onClick={()=>logout()}>Logout</Button>
                  }
                  
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default MyNavbar;