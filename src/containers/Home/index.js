import React, { useState } from "react";
import Input from "../../components/Input";
import { getWeatherByLocation as getWeatherByLocationApi } from "../../utils/api";
import WeatherCard from "../../components/WeatherCard";
import Favorites from "../../components/Favorites";

// ***   TODO: add prop types, styles in separate files, add more unit tests   ***

const Home = () => {
  const [favoriteLocations, setFavoriteLocations] = useState([]);
  const [weatherStatus, setWeatherStatus] = useState();
  let timeout;

  const getWeatherByLocation = (location) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      getWeatherByLocationApi(location)
        .then((res) => res.json())
        .then((data) => {
          setWeatherStatus(data);
        })
        .catch((err) => {
          setWeatherStatus(null);
          return err;
        });
    }, 400);
  };

  const handleInputChange = (value) => {
    const searchValue = value.target.value;
    getWeatherByLocation(searchValue);
  };

  const handleAddFavoriteLocation = (location) => {
    setFavoriteLocations([...favoriteLocations, location]);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        background: "#F7F7F7",
        minHeight: "100%",
        flex: 1,
        flexDirection: "column",
      }}
    >
      <div>
        <Input
          onChange={handleInputChange}
          placeholder="Search location"
          style={{
            height: "40px",
            margin: "20px",
            width: "350px",
            fontSize: "20px",
            padding: "5px",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "space-between",
          width: "100%",
          justifyContent: "space-around",
        }}
      >
        <Favorites
          favoriteLocations={favoriteLocations}
          setFavoriteLocations={setFavoriteLocations}
          setWeatherStatus={setWeatherStatus}
        />
        <WeatherCard
          weatherStatus={weatherStatus}
          onAddFavoriteLocation={handleAddFavoriteLocation}
        />
      </div>
    </div>
  );
};

export default Home;
