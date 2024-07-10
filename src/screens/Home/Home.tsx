import React from "react";
import AnimatedText from "./AnimatedText";
import Events from "./Events";
import Mission from "./Mission";
import JoinUs from "./JoinUs";
import Committees from "./Committees";
import openIcon from "../../assets/dropdown-open.svg";
import closedIcon from "../../assets/dropdown-closed.svg";
import dividerIcon from "../../assets/divider.svg";

const Home = () => {
  return (
    <>
      <AnimatedText />
      <Events />
      <br />
      <Mission />
      <br />
      <JoinUs />
        <br />
        <Committees
            openIconUrl={openIcon}
            closedIconUrl={closedIcon}
            dividerIconUrl={dividerIcon}
        />
         </>
  );
};
export default Home;
