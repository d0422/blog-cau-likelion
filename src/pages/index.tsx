import styled from 'styled-components';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Feed, { feed } from '@/components/Feed';
import { getRss } from '@/api/getRss';
export const getStaticProps: GetStaticProps<{
  data: feed[];
}> = async () => {
  const parsingData = await getRss();
  return {
    props: {
      data: parsingData
        .flat()
        .sort(
          (a, b) =>
            new Date(b.date as string).getTime() -
            new Date(a.date as string).getTime()
        ),
    },
    revalidate: 300,
  };
};

export default function Home({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Wrapper>
      <Title>멋쟁이 사자들의 블로그 피드를 둘러보세요!</Title>
      <hr />
      {data.map((d, i) => (
        <Feed key={i} data={d as feed} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const Title = styled.div`
  font-size: 28px;
  font-weight: 700;
  font-family: 'Pretendard';
  @media (max-width: 1440px) {
    font-size: 24px;
  }
  @media (max-width: 786px) {
    font-size: 20px;
  }
  @media (max-width: 500px) {
    font-size: 16px;
  }
`;
