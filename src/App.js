import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the country data
    axios
      .get("https://xcountries-backend.azurewebsites.net/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((err) => {
        console.error("Error fetching data: ", err);
        setError("Failed to load country data.");
      });
  }, []);

  return (
    <div className="App">
      <h1>Country Flags</h1>
      {error && <p>{error}</p>}
      <div className="flags-container">
        {countries.map((country) => (
          <div key={country.abbr} className="flag-item">
            <img
              src={country.flag}
              alt={`Flag of ${country.name}`}
              className="flag-img"
            />
            <p className="country-name">{country.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;