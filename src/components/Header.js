import React from 'react';
import { Grid, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <Grid>
        <Navbar inverse fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/'>Productivity App</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav bsStyle='pills' navbar>
              <LinkContainer to="/controlpanel">
                <NavItem>Control Panel</NavItem>
              </LinkContainer>
              <LinkContainer to="/tasks">
                <NavItem>Tasks</NavItem>
              </LinkContainer>
              <LinkContainer to="/messageboard">
                <NavItem>Message Board</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Grid>
    );
  }
}
