import React from 'react';
import styled from 'styled-components';
import { FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const HeaderWrapper = styled.header`
  background: linear-gradient(90deg, #ff7e5f, #feb47b);
  padding: 1rem 2rem;
  color: white;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    margin: 0;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;

  a {
    color: white;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.2rem;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.1);
    }

    svg {
      margin-right: 0.5rem;
    }
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Arya Sinha</h1>
      <Nav>
        <a href="#about"><FaUser /> About</a>
        <a href="#projects"><FaProjectDiagram /> Projects</a>
        <a href="#contact"><FaEnvelope /> Contact</a>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
