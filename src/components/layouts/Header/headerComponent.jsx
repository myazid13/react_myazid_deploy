import { Layout, Menu, Row } from "antd";
import React, { useState } from "react";
import { MENU_ITEM } from "../constants";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  const { Header } = Layout;
  const path = window.location.pathname;
  const [current, setCurrent] = useState(path);
  const onClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        backgroundColor: "black",
      }}
    >
      <Row justify="space-between">
        <Link to="/home">
          <div
            style={{
              float: "left",
              width: 120,
              height: 31,
              margin: "16px 24px 16px 0",
              backgroundColor: "tomato",
            }}
            onClick={() => setCurrent("")}
          />
        </Link>
        <Menu theme="black" mode="horizontal" defaultSelectedKeys={["1"]} items={MENU_ITEM} disabledOverflow onClick={onClick} selectedKeys={[current]} />
      </Row>
    </Header>
  );
};

export default HeaderComponent;
