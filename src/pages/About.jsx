import React from "react";
import countrydata from "../API/Countrydata.json";

const About = () => {
  console.log(countrydata);

  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are the Interesting Facts
        <br />
        we're proud of
      </h2>
      <div className="gradient-cards">
        {countrydata.map((curElem) => {
          const { countryName, capital, id, interestingFact, population } =
            curElem;
            return (
          <div className="cards" key={id}>
            <div className="container-card bg-blue-box">
              <p className="card-title">{countryName}</p>
              <p>
                <span className="card-description">Capital : </span>
                {capital}
              </p>
              <p>
                <span className="card-description">Population : </span>
                {population}
              </p>
              <p>
                <span className="card-description">Interseting Facts : </span>
                {interestingFact}
              </p>
            </div>
          </div>
            );
        })}
      </div>
    </section>
  );
};

export default About;
