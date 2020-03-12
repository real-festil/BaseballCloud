import React from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Auth from "./containers/auth/auth";
import "./styles/css/style.css";

function App() {
  return (
    <div className="main">
      <Header />
      <Auth />
      <Footer />
    </div>
  );
}

export default App;
