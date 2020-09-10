import { Layout } from "antd";
const { Header, Footer, Content } = Layout;
import Head from './head'

const LayoutComp = ({ children }) => {
  return (
    <Layout>
      <Header>
        <Head></Head>
      </Header>
      <Content>{children}</Content>
      <Footer></Footer>
      <style jsx global>{`
        #__next {
          height: 100%;
        }
      `}</style>
    </Layout>
  );
};
export default LayoutComp;
