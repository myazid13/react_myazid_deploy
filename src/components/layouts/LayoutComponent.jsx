import { Layout } from "antd";
import FooterComponent from "./Footer/footerComponent";
import HeaderComponent from "./Header/headerComponent";

const LayoutComponent = ({ children }) => {
  const { Content } = Layout;

  return (
    <>
      <Layout>
        {/* Header */}
        <HeaderComponent />

        {/* Content */}
        <Content
          className="site-layout"
          style={{
            padding: "0 50px",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 380,
              backgroundColor: "#fff",
            }}
          >
            {children}
          </div>
        </Content>

        {/* Footer */}
        <FooterComponent />
      </Layout>
    </>
  );
};

export default LayoutComponent;
