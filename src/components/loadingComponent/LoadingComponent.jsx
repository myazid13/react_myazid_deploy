import { Spin } from "antd";
import React from "react";
import "./loadingComponent.css";

const LoadingComponent = () => {
  return (
    <div className="loading-container">
      <Spin size="large" />
    </div>
  );
};

export default LoadingComponent;
