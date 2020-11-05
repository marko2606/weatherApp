import React from "react";
const WeatherCard = ({ weatherStatus, onAddFavoriteLocation }) => {
  return weatherStatus?.main ? (
    <div
      style={{
        width: "400px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          background: "#024951",
          color: "white",
          padding: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={`http://openweathermap.org/img/wn/${weatherStatus.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            flex: 1,
          }}
        >
          <h1 style={{ textAlign: "center" }}>
            {weatherStatus.weather[0].description}
          </h1>
          <span style={{ fontSize: "64px" }}>
            {Math.round(weatherStatus.main.temp)}&#8451;
          </span>
          <h4 style={{ alignSelf: "flex-end" }}>
            {weatherStatus.name}, {weatherStatus.sys.country}
          </h4>
        </div>
      </div>
      <div
        style={{
          border: "2px solid black",
          background: "#FFF",
          padding: "10px",
        }}
      >
        <p>Feels like: {Math.round(weatherStatus.main.feels_like)}&#8451;</p>
        <p>
          Minimum temperature: {Math.round(weatherStatus.main.temp_min)}&#8451;
        </p>
        <p>
          Maximum temperature: {Math.round(weatherStatus.main.temp_max)}&#8451;
        </p>
        <p>Pressure: {weatherStatus.main.pressure}</p>
        <p>Humidity: {weatherStatus.main.humidity}</p>
      </div>
      <div>
        <button
          style={{ width: "100%", height: "30px" }}
          onClick={() => onAddFavoriteLocation(weatherStatus)}
        >
          <span style={{ fontWeight: 900 }}>ADD TO FAVORITES</span>
        </button>
      </div>
    </div>
  ) : (
    <h4>No results found.</h4>
  );
};

export default WeatherCard;
