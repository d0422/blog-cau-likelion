import Header from '@/components/Header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { styled } from 'styled-components';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>LikeLionCAU Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
