import React, { useState } from 'react';
import { Link } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation({ user }) {
  const [token, setToken] = useState(
    document.querySelector('meta[name=csrf-token]').content
  );

  const signOut = () => {
    let creds = {
      _method: 'delete',
      authenticity_token: token,
    };
    // console.log(userInfo);
    Inertia.delete('/users/sign_out', creds);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" href="/">
              Home
            </Link>
            <Link className="nav-link" href="/about">
              About
            </Link>
            <Link className="nav-link" href="/product">
              Product
            </Link>

            {user ? (
              <>
                <NavDropdown title={user.email} id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/admin/home">Admin</Link>
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <Link
                    href="/users/sign_out"
                    method="delete"
                    headers={{ 'X-CSRF-Token': token }}
                    className="dropdown-item"
                  >
                    Logout
                  </Link>
                </NavDropdown>
              </>
            ) : (
              <>
                <Link className="nav-link" href="/login">
                  Login
                </Link>
                <Link className="nav-link" href="/register">
                  Register
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
