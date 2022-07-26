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
          />
        </Navbar.Text>

        <Nav>
          <Dropdown align-self-end>
            <Dropdown.Toggle variant="success">
              <RiShoppingCartFill color="white" fontSize="25px" />
              <Badge>{Cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
              <span style={{ padding: 10 }}>Cart is Empty!</span>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
