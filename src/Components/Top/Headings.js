import React from "react";
import "./Heading.css";
export default function Headings() {
  return (
    <div>
      <div
        className="flexing"
        style={{
          backgroundImage: "url(images/bg_heading.svg",
          backgroundSize: "cover",
        }}
      >
        <div>
          <img src="images/online_articles.svg" className="image1" alt="i"></img>
        </div>
        <div className="heading">
          <h1>Fake News Prediction Using Stance Detection</h1>
        </div>
      </div>
      <div className="quote">
        <h1>
          "Beware of false knowledge; it is more dangerous than ignorance"
        </h1>
      </div>
    </div>
  );
}
