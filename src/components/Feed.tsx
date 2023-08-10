import Image from 'next/image';
import React from 'react';
import { styled } from 'styled-components';
import cauIcon from '@/image/cau사자.png';

export interface feed {
  writer: string;
  title: string | undefined;
  link: string | undefined;
  content: string | undefined;
  thumbnail: string | null;
  date: string | undefined;
}
const Feed = ({ data }: { data: feed }) => {
  return (
    <Wrapper>
      <Content>
        <a href={data.link}>
          <Title>{data.title}</Title>
          <div>{data.content}</div>
        </a>
        <WriterAndDate>
          <DateContainer>{getDate(data.date as string)}</DateContainer>
          <Writer>By {data.writer}</Writer>
        </WriterAndDate>
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
`;
const Wrapper = styled.div`
  margin-bottom: 30px;
  display: flex;
  gap: 20px;
  width: 100%;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 4px 16px 0px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  padding: 15px;
  background-color: #ffffff;
  border-radius: 15px;
`;
const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Pretendard';
  margin-bottom: 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  position: relative;
  min-width: 200px;
  min-height: 200px;
  object-fit: contain;
  @media (max-width: 1440px) {
    min-width: 200px;
    min-height: 200px;
  }

  @media (max-width: 900px) {
    min-width: 150px;
    min-height: 150px;
  }
  @media (max-width: 360px) {
    min-width: 100px;
    min-height: 100px;
  }
`;
const DateContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  font-family: 'Pretendard';
  font-weight: 600;
`;
const WriterAndDate = styled.div`
  margin-top: 10px;
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
