import React from "react";
import { Layout } from "antd";
import "./Footer.scss";

export default function Footer() {
  const { Footer } = Layout;

  return (
    <Footer className="footer">
      <p> ©designed by Ashok Machineni</p>
    </Footer>
  );
}
