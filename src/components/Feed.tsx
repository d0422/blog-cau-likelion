import Image from 'next/image';
import React from 'react';
import { styled } from 'styled-components';
import cauIcon from '@/image/cau사자.png';

export interface feed {
  writer: string;
  title: string;
  link: string;
  content?: string;
  thumbnail: string | null;
  date: string;
  'content:encoded'?: string;
}
const Feed = ({ data }: { data: feed }) => {
  return (
    <Wrapper href={data.link}>
      <Title>{data.title}</Title>
      <Container>
        <Content>
          <Inner>{data.content}</Inner>
        </Content>
        <ImageContainer>
          {data.thumbnail ? (
            <Image
              src={data.thumbnail}
              alt="이미지"
              fill={true}
              style={{ objectFit: 'contain' }}
            />
          ) : (
            <Image
              src={cauIcon}
              alt="이미지"
              fill={true}
              style={{ objectFit: 'contain' }}
            ></Image>
          )}
        </ImageContainer>
      </Container>
      <WriterAndDate>
        <DateContainer>{getDate(data.date as string)}</DateContainer>
        <Writer>By {data.writer}</Writer>
      </WriterAndDate>
    </Wrapper>
  );
};

export default Feed;
const Writer = styled.div`
  font-size: 15px;
  font-family: 'Pretendard';
  font-weight: 700;
  display: flex;
  align-items: center;
  @media (max-width: 786px) {
    font-size: 13px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;
const Wrapper = styled.a`
  margin-bottom: 30px;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 4px 16px 0px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  padding: 15px;
  background-color: #ffffff;
  border-radius: 15px;
  &:hover {
    transform: scale(1.01);
    transition: 0.1s;
  }
`;
const Container = styled.div`
  display: flex;
  gap: 20px;
`;
const Title = styled.div`
  @media (max-width: 786px) {
    font-size: 20px;
  }
  @media (max-width: 500px) {
    font-size: 16px;
  }

  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Pretendard';
  margin-bottom: 20px;
`;
const Inner = styled.div`
  font-size: 18px;
  width: 100%;
  @media (max-width: 786px) {
    font-size: 16px;
  }
  @media (max-width: 500px) {
    font-size: 10px;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 70%;
`;

const ImageContainer = styled.div`
  position: relative;
  flex-basis: 30%;
  object-fit: contain;
`;
const DateContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  font-family: 'Pretendard';
  font-weight: 600;
  @media (max-width: 786px) {
    font-size: 13px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;
const WriterAndDate = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const getDate = (day: string) => {
  const today = new Date(day);
  var year = today.getFullYear();
  var month = String(today.getMonth() + 1).padStart(2, '0');
  var day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};
