import { Layout, Input, Avatar } from "antd";
const { Header, Footer, Content } = Layout;
const LayoutComp = ({ children }) => {
  return (
    <Layout>
      <Header></Header>
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
