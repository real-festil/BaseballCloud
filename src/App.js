import React from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Login from "./containers/login/login";
import "./styles/css/style.css";

function App() {
  return (
    <div className="main">
      <Header />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
