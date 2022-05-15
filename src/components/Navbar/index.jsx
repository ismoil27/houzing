import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import {
  Body,
  Container,
  Link,
  Logo,
  NavbarBody,
  NavbarWrapper,
  Wrapper,
} from "./style";

import { Button } from "../Generic";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <NavbarWrapper>
          <Logo onClick={() => navigate("/home")}>
            <Logo.Icon />
            <Logo.Title>Houzing</Logo.Title>
          </Logo>
          <NavbarBody>
            {navbar.map(({ title, id, path }) => {
              return (
                <Link to={path} key={id}>
                  {title}
                </Link>
              );
            })}
          </NavbarBody>

          <Button onClick={() => navigate("/login")} width={"120px"}>
            Login
          </Button>
        </NavbarWrapper>
      </Container>
      <Body>
        <Outlet />
      </Body>
    </Wrapper>
  );
};

export default Navbar;
