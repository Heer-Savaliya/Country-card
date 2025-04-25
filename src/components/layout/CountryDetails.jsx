import React, { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import Loader from "../UI/Loader";
import { getCountryIndivialData } from "../../API/postApi";

const CountryDetails = () => {
  const params = useParams();
  // console.log(params);
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryIndivialData(params.id);
      console.log(res.data[0]);
      setCountry(res.data[0]);
    });
  }, []);

  if (isPending) return <Loader />;

  return (
    <section className="card country-details-card container">
      <div className="container-card bg-white-box">
        {
            country && (
        <div className="country-image grid grid-two-cols">
          <img
            src={country.flags.svg}
            alt={country.flags.alt}
            className="flag"
          />
          <div className="country-content">
            <h2 className="card-title">{country.name.common}</h2>

            <div className="infoContainer">
              <p>
                <span className="card-description">Native names : </span>
                {Object.keys(country.name.nativeName)
                    .map((key) => country.name.nativeName[key].common)
                    .join(", ")
                }
              </p>
              <p>
                <span className="card-description">Population : </span>
                {country.population}
              </p>
              <p>
                <span className="card-description">Region : </span>
                {country.region}
              </p>
              <p>
                <span className="card-description">Sub region : </span>
                {country.subregion}
              </p>
              <p>
                <span className="card-description">Top Level domain : </span>
                {country.tld[0]}
              </p>
              <p>
                <span className="card-description">Currencies : </span>
                {Object.keys(country.currencies)
                    .map((curElem) => country.currencies[curElem].name)
                    .join(", ")
                }
              </p>
              <p>
                <span className="card-description">Languages : </span>
                {Object.keys(country.languages)
                    .map((key) => country.languages[key])
                    .join(", ")
                }
              </p>
            </div>
          </div>
        </div>
    )}
    <div className="country-card-backBtn">
        <NavLink to="/country" className="backBtn">
            <button>Go Back</button>
        </NavLink>
    </div>
      </div>
    </section>
  );
};

export default CountryDetails;
