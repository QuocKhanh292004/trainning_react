import React from "react";
import Header from "../../components/header";
import Content from "../../components/content";
import Footer from "../../components/footer";

function DefaultLayout({ children }) {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div>
        <Content></Content>
      </div>
      <div>
        <Footer></Footer>
      </div>

      <h1>xinb xzchgao</h1>
      <div>{children}</div>
    </div>
  );
}

export default DefaultLayout;
