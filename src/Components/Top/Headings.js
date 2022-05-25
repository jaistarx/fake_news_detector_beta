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
          <h4> "A Platform for predicting stance of a news article using Machine Learning."  </h4>
          <h5> We classify the news into 4 stances : agree, discuss, unrelated, irrelevant</h5>
          <h6>This project is a humble solution to the official <a href="http://www.fakenewschallenge.org/"> fake news challenge  </a> </h6>
            
          
        </div>
      </div>  
    </div>
  );
}
