import { feed } from '@/components/Feed';
import blogList from '../assets/data.json';
import Parser from 'rss-parser';
import { JSDOM } from 'jsdom';

export const getRss = async () => {
  const parser = new Parser({
    headers: { Accept: 'application/rss+xml, text/xml; q=0.1' },
  });
  return await Promise.all(
    blogList.map(async ({ name, blog }) => {
      const feed = await parser.parseURL(blog);
      const result = feed.items.map((item) => {
        const content = decideContent(item as feed);
        return {
          title: item.title,
          writer: name,
          link: item.link,
          content: removeAdd(content)
            .replace(/<[^>]*>?/g, '')
            .replace(/\n/g, '')
            .replace(/&nbsp/g, '')
            .trim()
            .replace(/\s+/g, ' ')
            .slice(0, 300),
          thumbnail: getThumbnail(content),
          date: item.isoDate,
        };
      });
      return result as unknown as feed[];
    })
  );
};

const decideContent = (item: feed) => {
  if (item.content) return item.content;
  return item['content:encoded'];
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
