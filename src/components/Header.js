import React from "react";
import {
  Nav,
  Navbar,
  Container,
  FormControl,
  Dropdown,
  Badge,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import { RiShoppingCartFill } from "react-icons/ri";
import Cart from "./Cart";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">Shopping Cart</Link>
        </Navbar.Brand>

        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="Search a product"
            className="m-auto"
            aria-label="Search"
          />
        </Navbar.Text>

        <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
              <RiShoppingCartFill color="white" fontSize="25px" />
              <Badge>10</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: 370, marginLeft: "-278px" }}>
              <span style={{ padding: 10 }}>Cart is Empty!</span>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
