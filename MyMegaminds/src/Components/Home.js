import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="home">
        <div className="home__first">
          <img className="home__img1" src="student.jpg" alt="student" />
          <div className="home__text"></div>
        </div>
        <div className="home__mid"></div>
        <div className="home__last"></div>
      </div>
    </>
  );
}

export default Home;
