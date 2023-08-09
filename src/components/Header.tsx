import Image from 'next/image';
import React from 'react';
import cauIcon from '@/image/cau사자.png';
import { styled } from 'styled-components';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

const Header = () => {
  return (
    <Wrapper>
      <Logo>
        <LogoImage>
          <Image src={cauIcon} width={50} height={50} alt="logo" />
        </LogoImage>
        <Title>LIKELION</Title>
      </Logo>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  @media (max-width: 1440px) {
    padding: 0 100px;
  }
  @media (max-width: 1280px) {
    padding: 0 90px;
  }
  padding: 0 130px;
  align-items: center;
  justify-content: space-between;
  z-index: 9999;

  @media (max-width: 899px) {
    display: none;
  }
  z-index: 9999;
  background-color: white;
`;

const Logo = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
const LogoImage = styled.div`
  min-width: 50px;
  min-height: 50px;
`;
const Title = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 900;
  font-size: 1.5rem;
`;
