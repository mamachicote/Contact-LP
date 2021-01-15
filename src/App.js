import React from "react";
import Header from "./Header";
import Body from "./Body";
import Form from "./Form";
import Footer from "./Footer";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Form />
      <Footer />
    </div>
  );
}
