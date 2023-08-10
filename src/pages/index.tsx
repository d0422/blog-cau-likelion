import styled from 'styled-components';
import Parser from 'rss-parser';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Feed, { feed } from '@/components/Feed';
import { JSDOM } from 'jsdom';
export const getServerSideProps: GetServerSideProps<{
  data: feed[];
}> = async () => {
  const parser = new Parser();
  const parseList = [
    { name: '동길', blog: 'https://0422.tistory.com/rss' },
    { name: '규한', blog: 'https://v2.velog.io/rss/@ghenmaru' },
    { name: '윤호', blog: 'https://v2.velog.io/rss/@hnnynh' },
    { name: '재영', blog: 'https://cjy3458.tistory.com/rss' },
    { name: '상현', blog: 'https://v2.velog.io/rss/@sanghyunna' },
  ];
  const parsingData = await Promise.all(
    parseList.map(async ({ name, blog }) => {
      const feed = await parser.parseURL(blog);
      const result = feed.items.map((item) => {
        return {
          title: item.title,
          writer: name,
          link: item.link,
          content: removeAdd(item?.content)
            .replace(/<[^>]*>?/g, '')
            .replace(/\n/g, '')
            .trim()
            .replace(/\s+/g, ' ')
            .slice(0, 300),
          thumbnail: getThumbnail(item.content),
          date: item.isoDate,
        };
      });
      return result as unknown as feed[];
    })
  );

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
  };
};

const getThumbnail = (content: string | undefined) => {
  const regex = /<img\s+src=(?:(['"])(.*?)\1|([^'"\s]+))/g;
  if (content) {
    const result = content.match(regex);
    if (result) return result[0].split(/src=/)[1].split(/\'|\"/)[1];
    return null;
  }
  return null;
};

const removeAdd = (content: string | undefined) => {
  if (!content) return '';
  const dom = new JSDOM(content);
  const document = dom.window.document;
  const revenueUnitWraps = document.querySelectorAll('.revenue_unit_wrap');
  revenueUnitWraps.forEach((revenueUnitWrap) => {
    revenueUnitWrap.remove();
  });
  const outputHTML = document.documentElement.outerHTML;
  return outputHTML;
};

export default function Home({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Pretendard';
`;
