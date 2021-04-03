import React from "react";
import Header from "./Header";
// import Header from "./header/Header";
// import Introduction from "./introduction/Introduction";
import Particles from "./Particles";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      {/* <Introduction /> */}
      <Particles />
    </React.Fragment>
  );
};

export default Home;