import Image from 'next/image';
import React from 'react';
import { styled } from 'styled-components';
export interface feed {
  name: string;
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
      </Content>
      <ImageContainer>
        {data.thumbnail && (
          <Image
            src={data.thumbnail}
            alt="이미지"
            fill={true}
            style={{ objectFit: 'contain' }}
          />
        )}
      </ImageContainer>
    </Wrapper>
  );
};

export default Feed;

const Wrapper = styled.div`
  margin-bottom: 30px;
  display: flex;
  gap: 20px;
`;
const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Pretendard';
  margin-bottom: 20px;
`;

const Content = styled.div``;

const ImageContainer = styled.div`
  position: relative;
  min-width: 200px;
  min-height: 200px;
  object-fit: contain;
`;
