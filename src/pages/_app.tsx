import Header from '@/components/Header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { styled } from 'styled-components';
import Head from 'next/head';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>LikeLionCAU Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="CAU-Likelion Blog" />
        <meta
          name="keywords"
          content="IT개발, 웹개발, 중앙대학교, 멋쟁이사자처럼, 동아리, 블로그, 피드"
        />

        <meta
          property="og:description"
          content="멋쟁이 사자들을 위한 블로그 피드"
        />
        <meta property="og:url" content="https://blog.cau-likelion.org/" />
        <meta
          property="og:image"
          content="https://cau-likelion.org/image/logoThumbnail.png"
        />
      </Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-ZC5CFY95Y5" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-ZC5CFY95Y5');
        `}
      </Script>
      <Layout>
        <Header />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1440px) {
    padding: 100px 100px 100px 100px;
  }

  @media (max-width: 786px) {
    padding: 70px 20px;
  }
  padding: 100px 160px 100px 160px;
`;
