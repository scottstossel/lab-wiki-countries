import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import data from "../countries.json";


const CountriesList = () => {
  const [countries, setCountries] = useState(data);

  // useEffect(() => {
  //   setCountries();
  // }, [])

  return (
    <div className="container">
      <h2>Countries</h2>
      { countries.map((country) => (
        <div>
          <CountryCard object={country}/>
        </div>
      ))}
      
    </div>
  )
}

export default CountriesList;