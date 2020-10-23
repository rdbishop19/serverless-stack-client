import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './App.css';

import Routes from './Routes';
import { AppContext } from './libs/contextLibs';

function App() {
  const [ isAuthenticated, userHasAuthenticated ] = useState(false);
  
  const handleLogout = () => {
    userHasAuthenticated(false);
  }

	return (
		<div className="App container">
			<Navbar fluid collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand>
						<Link to="/">Scratch</Link>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav pullRight>
          {isAuthenticated 
            ? <NavItem onClick={handleLogout}>Logout</NavItem>
            : <React.Fragment>
                <LinkContainer to="/signup">
                  <NavItem>Signup</NavItem>
                </LinkContainer>
                <LinkContainer to="/login">
                  <NavItem>Login</NavItem>
                </LinkContainer>
              </React.Fragment>
          }
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
				<Routes />
			</AppContext.Provider>
		</div>
	);
}

export default App;
