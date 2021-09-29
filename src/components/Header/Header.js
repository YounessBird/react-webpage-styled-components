import React from "react";
import { StyledHeader, Nav, Logo, Image } from "./Header.syled";
import { Container } from "../shared/Container.style";
import { Flex } from "../shared/Flex.styled";
import Button from "../Button";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="logo" />
          <Button>Try For Free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>Huddle re-imagines the way we build our community</p>
            <Button bg="#ff0099" color="#fff">
              Get Started For Free
            </Button>
          </div>
          <Image src="./images/illustration-mockups.svg" />
        </Flex>
      </Container>
    </StyledHeader>
  );
};
export default Header;
