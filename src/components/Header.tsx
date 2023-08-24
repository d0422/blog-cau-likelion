import Image from 'next/image';
import React from 'react';
import cauIcon from '@/image/cau사자.png';
import { styled } from 'styled-components';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

const Header = () => {
  console.log(1);
  return (
    <Wrapper>
      <a href="https://cau-likelion.org">
        <Logo>
          <LogoImage>
            <Image
              src={cauIcon}
              fill={true}
              style={{ objectFit: 'contain' }}
              alt="logo"
            />
          </LogoImage>
          <Title>LIKELION</Title>
        </Logo>
      </a>
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
  @media (max-width: 786px) {
    padding: 0px 20px;
  }
  @media (max-width: 500px) {
    padding: 0px 10px;
  }
  padding: 0 130px;
  align-items: center;
  justify-content: space-between;
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
  position: relative;
  width: 60px;
  height: 60px;
  @media (max-width: 1440px) {
    width: 50px;
    height: 50px;
  }
  @media (max-width: 786px) {
    width: 35px;
    height: 35px;
  }
  @media (max-width: 500px) {
    width: 30px;
    height: 30px;
  }
`;
const Title = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  @media (max-width: 1440px) {
    font-size: 24px;
  }
  @media (max-width: 786px) {
    font-size: 18px;
  }
  @media (max-width: 500px) {
    font-size: 15px;
  }
`;
